import React from "react";
import UpcomingPresenter from "./UpcomingPresenter";
import { movieApi } from "../../Components/Api";

export default class extends React.Component {
  state = {
    upcoming: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();
      this.setState({
        upcoming
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
    const { upcoming, error, loading } = this.state;
    return (
      <UpcomingPresenter
        upcoming={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}
