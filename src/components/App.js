import React from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList.js";

class App extends React.Component {
  // storing API result in state
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar run={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
