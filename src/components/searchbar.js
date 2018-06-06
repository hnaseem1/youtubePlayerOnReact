import React, { Component } from 'react';

// { Componenet } is const Component = React.Componenet

//funtional componenets
// const SearchBar = () => {
//     return <input />
// };

// creates a new class called SearchBar with access to all the methods from React

// class based compoenent
class SearchBar extends Component {
    // all componenets must have a render method
    render() {
        return <input onChange={this.onInputChange} />;
    }

    //event handling
    onInputChange(event) {
        console.log(event.target.value);
        
    }
}

// makes it available for other components
export default SearchBar;