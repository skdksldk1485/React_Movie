import React from "react";
import PlayingPresenter from "./PlayingPresenter";
import { movieApi } from "../../Components/Api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: playing }
      } = await movieApi.nowPlaying();
      this.setState({
        playing
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
    const { playing, error, loading } = this.state;
    return (
      <PlayingPresenter
        playing={playing}
        error={error}
        loading={loading}
      />
    );
  }
}
