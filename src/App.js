import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Adam',
      todoItems:[
        {action: 'But Flowers', done: false},
        {action: 'Get shoes', done: false},
        {action: 'Collect Tickets', done: false},
        {action: 'Call Joe', done: false}
      ],
      newItemText: '' 
    }
  }

  updateNewTextValue = (e) => {
    this.setState({
      newItemText: e.target.value
    })
  }

  createNewTodo = () => {
    if(!this.state.todoItems
      .find(item => item.action === this.state.newItemText)) {
        this.setState({
          todoItems: [...this.state.todoItems, {
            action: this.state.newItemText, done: false
          }],
          newItemText: ''
        })
      }
  }

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => item.action === todo.action
        ? {...item, done: !item.done} : item)
    });
  }

  totoTableRows = () => this.state.todoItems.map(item => 
    <tr key={item.action}>
      <td>{item.action}</td>
      <td>
        <input type="checkbox" checked={ item.done } onChange={ () => this.toggleTodo(item) } />
      </td>
    </tr>)
  render = () => 
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.username}'s To Do List
        <br />
        {this.state.todoItems.filter(t => !t.done).length} items todo
      </h4>
      <div className="container-fluid">
        <div className="my-1">
          <input className="form-control"
            value={this.state.newItemText}
            onChange={ this.updateNewTextValue } />
          <button className="btn btn-primary mt-1"
            onClick={ this.createNewTodo }>
            Add Item
          </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr><th>Description</th><th>Done</th></tr>
          </thead>
          <tbody>{ this.totoTableRows() }</tbody>
        </table>
      </div>
   </div>
}


export default App;
