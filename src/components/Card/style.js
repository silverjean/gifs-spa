import styled from 'styled-components';

const CardCss = styled.section`
  max-width: 240px;
  margin: 0 10px 30px 10px;
  box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.3);

  figure {
    position: relative;

    img {
      max-width: 240px;
      margin-bottom: -4px;
    }
  }
`;

const Star = styled.div`
  position: absolute;
  bottom: 5px;
  left: 10px;

  transition: 1.5s;
  &:hover {
    transition: 1s;

    color: #0fbcf9;
    cursor: pointer;
  }
`;

export { CardCss, Star };
