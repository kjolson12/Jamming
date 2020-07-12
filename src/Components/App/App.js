import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{
        name: 'goosebumps',
        artist: 'Travis Scott',
        album: 'Birds In The Trap',
        id: 1
      },
      {
        name: 'Stargazing',
        artist: 'Travis Scott',
        album: 'Astroworld',
        id: 2
      },
      {
        name: '90210',
        artist: 'Travis Scott',
        album: 'Rodeo',
        id: 3
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;