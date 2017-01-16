import React, { Component } from 'react';

export default (props) => {
  return (
    <div className='Message'>
      {props.content}
    </div>
  );
};
