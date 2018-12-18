import React from "react";
import { ScrollView, Text } from "react-native";
import axios from "axios";
import MusicDetails from "./MusicDetails";

class MusicList extends React.Component {
  constructor() {
    super();
  }
  state = {
    trackList: []
  };
  async componentWillMount() {
    const fetchURL =
      "https://api.napster.com/v2.2/tracks/top?apikey=MGQ2YjJiNTktZjBkOC00Y2JlLTlmYmEtNGU4Mjc3ODMxYWFj";
    try {
      const res = await axios.get(fetchURL);
      this.setState({
        trackList: res.data.tracks
      });
    } catch (err) {
      console.error(err);
    }
  }
  renderTracks() {
    return this.state.trackList.map(song => {
      return (
        <MusicDetails
          key={song.id}
          title={song.name}
          artistName={song.artistName}
          albumId={song.albumId}
          artistId={song.artistId}
        />
      );
    });
  }
  render() {
    return (
      <ScrollView>
        {this.renderTracks()}
        {console.log(this.state)}
      </ScrollView>
    );
  }
}

export default MusicList;
