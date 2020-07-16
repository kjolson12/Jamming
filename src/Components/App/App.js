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
      }],
      playlistName: 'When the preworkout hit',
      playlistTracks: [{
        name: 'Californication',
        artist: 'Red Hot Chili Peppers',
        album: 'Californication',
        id: 4
      },
      {
        name: 'Cant Stop',
        artist: 'Red Hot Chili Peppers',
        album: 'Single',
        id: 5
      },
      {
        name: 'Under the Bridge',
        artist: 'Red Hot Chili Peppers',
        album: 'Blood Sugar Sex Majik',
        id: 6
      }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
            onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;