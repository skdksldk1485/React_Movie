import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi } from "../../Components/Api";

export default class extends React.Component {
  state = {
    movieResult: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  async searchByTerm(term) {
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResult }
      } = await movieApi.search(term);
      this.setState({
        movieResult
      });
    } catch {
      this.setState({
        error: "검색결과를 찾을 수 없습니다!"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { movieResult, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResult={movieResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
