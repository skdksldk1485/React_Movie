import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 3px;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
`;

const Year = styled.span`
  font-size: 10px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 220px;
  background-size: cover;
  border-radius: 5px;
  background-position: center center;
  transition: opacity 0.1s ease-in-out;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.4;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/original${imageUrl}`
              : require("../assets/noPosterSmall.png")
          }
        />

        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;