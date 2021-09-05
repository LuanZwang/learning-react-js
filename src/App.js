import React, { Component } from 'react';
import './App.css';
import Comment from './components/comment/Comment';

//statefull component
class App extends Component {

  state = {
    comments: [
      {
        id: 0,
        name: 'Jão',
        email: 'joao@mail.com',
        date: new Date(2021, 5, 4, 17, 30, 0),
        message: 'Hi! How are you?'
      },
      {
        id: 1,
        name: 'Maria',
        email: 'Mary@mail.com',
        date: new Date(2021, 5, 4, 12, 15, 0),
        message: 'Hello! I\'m fine. How about you?'
      },
    ],
    newComment: {
      name: '',
      email: '',
      message: ''
    }
  }

  addComment = event => {

    event.preventDefault()
    
    const newComment = { ...this.state.newComment, date: new Date() }

    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: { name: '', email: '', message: ''}
    })
  }

  removeComment = comment => {
    let list = this.state.comments
    list = list.filter(x => x !== comment)

    this.setState({ comments: list })
  }

  contentTyping = event => {
    const { name, value } = event.target

    this.setState({ newComment: { ...this.state.newComment, [name]: value } })
  }

  render() {
    return (
      <div className="App">
        <h1>React learning project</h1>

        {this.state.comments.map((comment, index) => (
          <Comment
            key={index} //or key={comment.id}
            name={comment.name}
            email={comment.email}
            date={comment.date}
            onRemove={this.removeComment.bind(this, comment)}>
            {comment.message}
          </Comment>
        ))}

        <form method="post" onSubmit={this.addComment} className="New-Comment">

          <h2>Add comment</h2>

          <div>
            <input
              type="text"
              name="name"
              value={this.state.newComment.name}
              onChange={this.contentTyping}
              placeholder="Type your name"
              required/>
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={this.state.newComment.email}
              onChange={this.contentTyping}
              placeholder="Type your e-mail"
              required/>
          </div>

          <div>
            <textarea
              name="message"
              rows="4"
              value={this.state.newComment.message}
              onChange={this.contentTyping}
              placeholder="Type your message"
              required/>
          </div>

          <button type="submit">Add comment</button>
        </form>
      </div>
    );
  }
}

export default App;
