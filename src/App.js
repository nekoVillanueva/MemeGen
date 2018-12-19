import React, { Component } from 'react';
import './App.css';
import MemeGenerator from './MemeGenerator';

class App extends Component {
  render() {
    const imgFiles=['/memes/meme0.png','/memes/meme1.jpg','/memes/meme2.jpg','/memes/meme3.jpg'];
    return (
      <MemeGenerator  imgFiles={imgFiles} />
    );
  }
}

export default App;
