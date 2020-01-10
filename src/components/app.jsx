import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: '75yYfqYy5tmHm'
    }
    this.search('homer');
  }

  updateSelectedGif = (query) => {
    this.setState({
      selectedGifId: query
    });
  }

  search = (query) => {
    giphy('kHEYeVm9slJp41Qvr8VwhZdyboJfJ3FO').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <Gif id={this.state.selectedGifId} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateSelectedGif={this.updateSelectedGif} />
        </div>
      </div>
    )
  }
}

export default App;
