import React from 'react';
import './App.css';
// import Hello from './Hello';
// import Length from './Length';
// import Form from './Form';
// import Range from './Range';
// import Posts from './Posts';
import Test from './Test';

class App extends React.Component {
  state = {
    posts: [
      { id: '1', name: "JS Basics", title: "Обучение базовым конструкциям JavaScript" },
      { id: '2', name: "JS Advanced", title: "Обучение расширенным возможностям JavaScript" },
      { id: '3', name: "React JS", title: "Обучение React JS" },
    ]
  }

  // removePost = (id) => {
  //   this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  // }

  componentDidMount(){
    console.log('Component Did Mount');
  }

  componentDidUpdate(){
    console.log('Component Did Update');
  }
  render() {
    let { posts } = this.state;
    return (
      <div>
        <Test/>
        {/* <Posts posts={posts} removePost={this.removePost}/>
              <Hello />
              <Length />
              <Form/>
              <Range/> */}
      </div >
    )
  }
}
export default App;