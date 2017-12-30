// App.js
import React, { Component } from 'react';
import GroceryForm from './GroceryForm';
import GroceryList from './GroceryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      name: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let newGrocery = {
      'grocery': {
        'name': this.state.name
      }
    };

    fetch('api/groceries', {
      credentials: 'same-origin',
      method: 'post',
      body: JSON.stringify(newGrocery),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let newGroceries = [...this.state.groceries, body.grocery];
        this.setState({
          groceries: newGroceries,
          name: ''
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleButtonClick(id) {
    fetch(`api/groceries/${id}`, {
      credentials: 'same-origin',
      method: 'delete',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(() => {
        let newGroceries = this.state.groceries.filter(grocery => {
          return grocery.id !== id;
        });
        this.setState({ groceries: newGroceries });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  componentDidMount() {
    fetch('api/groceries')
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({groceries: body.groceries});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div className="small-4 small-centered columns app">
        <h1 className="text-center">Grocery List React</h1>
        <GroceryForm
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
        />
        <GroceryList
          groceries={this.state.groceries}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
