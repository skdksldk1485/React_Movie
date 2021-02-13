import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi } from "../../Components/Api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      collection: null,
      Seasons: null,
      error: null,
      loading: true
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const parsedId = Number(id);

    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    let collection = null;
    let seasons = null;
    try {
        ({ data: result } = await movieApi.movieDetail(parsedId));
        ({ data: collection } = await movieApi.movieCollection(
          result.belongs_to_collection.id
        ));
    } catch {
      this.setState({
        error: "오류 : 영화정보를 찾을 수 없음!"
      });
    } finally {
      this.setState({
        loading: false,
        result,
        collection,
        seasons
      });
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const {
        match: {
          params: { id }
        },
        history: { push }
      } = this.props;

      const parsedId = Number(id);

      if (isNaN(parsedId)) {
        return push("/");
      }

      let result = null;
      let collection = null;
      let seasons = null;
      try {
          ({ data: result } = await movieApi.movieDetail(parsedId));
          ({ data: collection } = await movieApi.movieCollection(
            result.belongs_to_collection.id
          ));
      } catch {
        this.setState({
          error: "오류 : 영화정보를 찾을 수 없음!"
        });
      } finally {
        this.setState({
          loading: false,
          result,
          collection,
          seasons
        });
      }
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      error: "오류 : 영화정보를 찾을 수 없음!"
    });
  }

  // async componentDidUpdate() {
  // }

  render() {
    const { result, collection, seasons, error, loading } = this.state;
    console.log(result);
    return (
      <DetailPresenter
        result={result}
        collection={collection}
        seasons={seasons}
        error={error}
        loading={loading}
      />
    );
  }
}
