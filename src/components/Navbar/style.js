import styled from 'styled-components';

const Nav = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: #2c2c54;
  color: #f7f1e3;

  position: relative;
`;

const NavTitle = styled.h4`
  text-align: center;

  position: absolute;
  left: 9%;

  text-transform: uppercase;
  cursor: pointer;
`;

const Form = styled.form`
  margin: 10px;

  //

  $background: #f5f6fa;
  $text: #9c9c9c;

  .btn {
    display: inline-block;
    background: transparent;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    text-transform: uppercase;
    cursor: pointer;

    &--primary {
      background: lightgray;
      color: whitesmoke;
      box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.3);

      padding: 3.5px 8px;
      transition: 0.8s;

      &:hover {
        transition: 0.8s;
        background: black;
      }
    }

    &--inside {
      margin-left: -45px;
    }
  }

  //

  input {
    background: #fff;
    box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.3);
    border: 0;
    outline: 0;
    padding: 10px;
  }
`;

export { Nav, NavTitle, Form };
