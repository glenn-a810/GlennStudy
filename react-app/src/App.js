import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return(
      <header>
        <h1>WEB</h1>
        HTML5 Simentic 형식으로 일단 표현
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML은 프로그래밍 언어가 아닙니다!
      </article>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    )
  }
}

export default App;