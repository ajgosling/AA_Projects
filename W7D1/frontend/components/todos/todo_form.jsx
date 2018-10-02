import React from 'react';
import uniqueId from '../../util/unique_id.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uniqueId(),
      title: '',
      body: '',
      done: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {

    return (
      <div>
        {this.state.id}
        <label>Title:
          <input id="form-title" type="text"></input>

        </label>

        <label>Body:
          <input id="form-body" type="text"></input>
        </label>
        <button onClick={() => this.handleClick()}>Submit</button>
      </div>
    );
  }

  handleClick() {
    this.setState(
      {
        title: document.getElementById("form-title").value,
        body: document.getElementById("form-body").value
      }, () => this.props.receiveTodo(this.state));

  }

}


export default TodoForm;
