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
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>React Movies</title>
      </Helmet>
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
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
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map(movie => (
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
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map(movie => (
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

HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default HomePresenter;
