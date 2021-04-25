import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Form, NavTitle } from './style';

export default function Navbar({ input, act, favo, hom }) {
  return (
    <Nav>
      <NavTitle>
        <Link style={{ color: 'inherit', textDecoration: 'none' }} to='/'>
          giphys
        </Link>
      </NavTitle>

      {favo ? (
        <Form style={{ padding: '10px' }} />
      ) : (
        <Form>
          <input placeholder='Ex: iron man' onChange={input} />
          <button
            onClick={act}
            type='button'
            class='btn btn--primary btn--inside'
          >
            Buscar
          </button>
        </Form>
      )}
    </Nav>
  );
}
