import React from "react";
import Helmet from "react-helmet";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
  margin-top: 50px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;

  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResult,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>Search | nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="영화 검색..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section title="영화 검색 결과">
            {movieResult.map(movie => (
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
        {movieResult &&
          movieResult.length === 0 &&  (
            <Message color="#95a5a6" text="검색결과를 찾을 수 없습니다!" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResult: propTypes.array,
  SearchResult: propTypes.array,
  searchTerm: propTypes.string,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
  handleSubmit: propTypes.func.isRequired,
  updateTerm: propTypes.func.isRequired
};

export default SearchPresenter;
