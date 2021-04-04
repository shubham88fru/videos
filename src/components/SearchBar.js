import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(evt) {}

  render() {
    return (
      <div className="ui segment serch-bar">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search-input">Video Search</label>
            <input
              id="search-input"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
