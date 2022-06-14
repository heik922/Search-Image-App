import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.run(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* if we put onInputChange() it will runs when ever Render() runs */}
            {/*  by leaving the () , it means we set a referrence to input element,
             will runs only when input changes */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
