import styled from 'styled-components';

const Div = styled.section`
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
  @media (max-width: 900px) {
    & {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 660px) {
    & {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }
`;

export { Div };
