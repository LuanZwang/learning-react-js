import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';

//statefull component
class App extends Component {

  state = {
    comments: [
      {
        id: 0,
        name: 'Jão',
        email: 'joao@mail.com',
        date: new Date(2021, 9, 4),
        message: 'Hi! How are you?'
      },
      {
        id: 1,
        name: 'Maria',
        email: 'Mary@mail.com',
        date: new Date(2021, 9, 4),
        message: 'Hello! I\'m fine. How about you?'
      },
    ]
  }

  addComment = () => {
    console.log('adding comment')
    
    const newComment = {
      name: 'Maria',
      email: 'mary@mail.com',
      date: new Date(),
      message: 'Helooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'
    }

    // let list = this.state.comments
    // list.push(newComment)

    // this.setState({comments: list})

    this.setState({
      comments: [...this.state.comments, newComment]
    })
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
            date={comment.date}>
            {comment.message}
        </Comment>
        ))}

        <button onClick={this.addComment} >Add comment</button>
      </div>
    );
  }
}

export default App;
