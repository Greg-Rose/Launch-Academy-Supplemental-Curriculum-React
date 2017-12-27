You have been given an application that renders a static calculator.
Your task is to create a functioning calculator application using Flux!

## Setup
From your challenges directory, run the following:

```sh
$ et get flux-calculator
$ cd flux-calculator
$ npm install
$ npm start
```

and visit [localhost:8080][localhost-8080] to see a static calculator application.

## Deliverables

1. Action creators, the dispatcher, and a Flux store have already been written
   for you. Use these to create a functioning application which uses the Flux pattern.
2. You are only allowed to modify the `CalculatorButtonsContainer.js` and
   `CalculatorDisplayContainer.js` to get the application to work.

## Pro Tips

* Start by looking over the code that has been given to you to make sure you
  understand it. Don't worry too much about completely understanding the logic
  in `CalculatorStore.js` though. The two aspects of the store that you should
  focus on should be:
  - What actions does the store respond to?
  - What public methods are on the store and what do they do?
* Because you are using the Flux pattern, realize that the only way that you can
  change application data is through action creators and that the only way to
  get application data is through stores. Thus, expect to use the action
  creators and the store in your React components to get the application
  to work.

[localhost-8080]: http://localhost:8080
