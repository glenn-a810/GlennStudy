import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="REACT" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML은 프로그래밍 언어가 아닙니다!"></Content>
      </div>
    )
  }
}

export default App;