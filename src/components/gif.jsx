import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`
    return(
      <div className='selected-gif'>
        <img src={src} className='gif' alt=''></img>
      </div>
    )
  }
}

export default Gif;
