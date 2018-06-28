import React, { Component } from 'react';

// class based compoenent
class SearchBar extends Component {

    constructor(props) {
      super(props);

      // defining state
      this.state = { term: ''}

    }

    // all class-based componenets must have a render method
    render() {
      return (

        <div>
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>

      );
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
};

// makes it available for other components
export default SearchBar;
