import React from 'react';

const Button = props => {
    const { type, symbol, size, onClick } = props;
    let className = 'columns small-3';

    if (type === 'number') {
      className += ' button secondary';
    } else {
      className += ' button warning';
    }

    return (
      <button key={symbol} className={className} onClick={onClick}>
        {symbol}
      </button>
    );
};

export default Button;
