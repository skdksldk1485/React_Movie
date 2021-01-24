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

const UpcomingPresenter = ({ upcoming, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>React Movies</title>
      </Helmet>
      <Container>
        {upcoming && upcoming.length > 0 && (
          <Section title="개봉예정영화">
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
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    </>
  );

UpcomingPresenter.propTypes = {
  upcoming: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default UpcomingPresenter;
