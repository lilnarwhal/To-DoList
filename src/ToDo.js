import React from 'react';

export class Todo extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.todo} </h1>
        <button onClick={() => this.props.deleteTodo(this.props.index)}>
          I have completed {this.props.todo}</button>
      </div>
    );
  }
}

