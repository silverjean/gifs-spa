import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';

import Navbar from '../../components/Navbar';
import { favout } from '../../store/modules/fav/actions';
import { Div } from './style';

export default function Fav() {
  document.title = 'Favoritos | Giphy';

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
    <>
      <Navbar favo />
      <Div>{favContent}</Div>
    </>
  );
}
