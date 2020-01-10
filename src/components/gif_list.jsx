import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }

  handleClick = (event) => {
    const id = event.target.src.split('/')[4];
    this.props.updateSelectedGif(id);
  }

  render() {
    return (
      <div className="gif-list" onClick={this.handleClick}>
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;
