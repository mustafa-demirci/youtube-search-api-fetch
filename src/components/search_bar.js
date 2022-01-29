import React, { Component} from 'react';

// const SearchBar = () => {
//     return <input />;
// };
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: ''};
    }
    render() {
        return ( 
            <div className='search-bar'>
                <input
                value= {this.state.searchInput} 
                onChange={(event) => {
                this.onInputChange(event.target.value)}}/>
            </div>
        )
    }
    onInputChange(term) {
        this.setState({ searchInput: term});
        this.props.onSearchTermChange(term);
    }
}

 export default SearchBar;
