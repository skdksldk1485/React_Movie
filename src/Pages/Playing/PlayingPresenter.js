import React from "react";
import propTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
  margin-top: 50px;
`;

const PlayingPresenter = ({ playing, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>React Movies</title>
      </Helmet>
      <Container>
        {playing && playing.length > 0 && (
          <Section title="현재상영영화">
            {playing.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    </>
  );

PlayingPresenter.propTypes = {
  playing: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default PlayingPresenter;
