import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = [PROTECTED]
const parentNode = document.querySelector('.container')


// create a new component
// some HTML

// functional componenet
const App = () => {
    return (
        
        <div>
            <SearchBar />


            <VideoDetail />
            <VideoList />
        </div>


    );
}
// Take this componenets generated HTML and put it
// on the page (in the DOM)

// to make the above class into instance wrap in JSX TAGS 


ReactDOM.render(<App/>, parentNode);

// ReactDOM.render expects two elements, component and the parentNode

