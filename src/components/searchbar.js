import React, { Component } from 'react';

// { Componenet } is const Component = React.Componenet

//funtional componenets
// const SearchBar = () => {
//     return <input />
// };

// creates a new class called SearchBar with access to all the methods from React

// class based compoenent
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''}
    }
    // all componenets must have a render method
    render() {
        return(
        <div>
         <input
         value={this.state.term}
         onChange={event => this.setState({ term: event.target.value })} />
        </div>
        );
    }

}

// makes it available for other components
export default SearchBar;
