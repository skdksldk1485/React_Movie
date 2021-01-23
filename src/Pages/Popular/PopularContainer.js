import React from "react";
import PopularPresenter from "./PopularPresenter";
import { movieApi } from "../../Components/Api";

export default class extends React.Component {
  state = {
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular }
      } = await movieApi.popular();
      this.setState({
        popular
      });
    } catch {
      this.setState({
        error: "오류 : 영화정보를 찾을 수 없음!"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { popular, error, loading } = this.state;
    return (
      <PopularPresenter
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
