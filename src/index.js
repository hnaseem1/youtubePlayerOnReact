import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/searchbar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyBaZ1hrKiL355DrU1r89NBBim-WnzizivM"
const parentNode = document.querySelector('.container')

// class-based componenet
class App extends Component {

    constructor(props) {
      super(props);

      this.state = { videos: [] };

      // youtube search
      YTSearch({key: API_KEY, term: 'gordon ramsey'}, (data) => {

        this.setState({ videos: data })

      })
    }

    render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
// Take this componenets generated HTML and put it
// on the page (in the DOM)

// to make the above class into instance wrap in JSX TAGS


ReactDOM.render(<App/>, parentNode);

// ReactDOM.render expects two elements, component and the parentNode
