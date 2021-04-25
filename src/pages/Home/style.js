import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 55px;
  background-color: #2c2c54;
  color: #f7f1e3;
  margin: 0 auto !important;

  display: flex;
`;

const Fav = styled.div`
  width: 25%;
  background-color: #706fd3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  width: 75%;

  button {
    padding: 10px;
    background-color: black;
    border: none;
    color: whitesmoke;
    cursor: pointer;
    transition: 1s;

    &:hover {
      transition: 1s;
      background-color: darkgray;
    }
  }
`;

const Result = styled.div`
  padding: 15px;
  line-height: 0;
  background-color: #474787;

  -webkit-column-count: 4;
  -webkit-column-gap: 0px;
  -moz-column-count: 4;
  -moz-column-gap: 0px;
  column-count: 4;
  column-gap: 0px;

  @media (max-width: 1370px) {
    & {
      -moz-column-count: 3 !important;
      -webkit-column-count: 3 !important;
      column-count: 3 !important;
    }
  }
  @media (max-width: 1040px) {
    & {
      -moz-column-count: 2 !important;
      -webkit-column-count: 2 !important;
      column-count: 2 !important;
    }
  }
  @media (max-width: 660px) {
    & {
      -moz-column-count: 1 !important;
      -webkit-column-count: 1 !important;
      column-count: 1 !important;
    }
  }
`;

const ContainerCards = styled.div`
  padding: 15px;
  line-height: 0;
  background-color: whitesmoke;

  -webkit-column-count: 4;
  -webkit-column-gap: 0px;
  -moz-column-count: 4;
  -moz-column-gap: 0px;
  column-count: 4;
  column-gap: 0px;

  @media (max-width: 1370px) {
    & {
      -moz-column-count: 3 !important;
      -webkit-column-count: 3 !important;
      column-count: 3 !important;
    }
  }
  @media (max-width: 1040px) {
    & {
      -moz-column-count: 2 !important;
      -webkit-column-count: 2 !important;
      column-count: 2 !important;
    }
  }
  @media (max-width: 750px) {
    & {
      -moz-column-count: 1 !important;
      -webkit-column-count: 1 !important;
      column-count: 1 !important;
    }
  }
`;

export { Container, ContainerCards, Body, Fav, Result };
