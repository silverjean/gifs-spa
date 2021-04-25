import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Sidebar, Title } from './style';
import Card from '../Card';
import { favout } from '../../store/modules/fav/actions';

export default function FavSidebar() {
  const favo = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  function remove(item) {
    dispatch(favout(item));
  }

  let favContent = [];
  if (favo) {
    favContent = favo.map((gif) => (
      <Card key={gif.title} src={gif.img} fav removeFav={() => remove(gif)} />
    ));
  }

  return (
    <Sidebar>
      <Title>
        <Link style={{ color: 'inherit', textDecoration: 'none' }} to='/fav'>
          Favoritos
        </Link>
      </Title>
      <div style={{ paddingTop: '10px' }}>{favContent}</div>
    </Sidebar>
  );
}
