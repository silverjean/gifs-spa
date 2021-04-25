import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { CardCss, Star } from './style';

export default function Card({ fav, src, removeFav, setFav }) {
  return (
    <CardCss>
      <figure>
        <img src={src} alt='' />
        <Star>
          {fav ? (
            <AiFillStar onClick={removeFav} color='#575fcf' size='20px' />
          ) : (
            <AiOutlineStar onClick={setFav} size='24px' />
          )}
        </Star>
      </figure>
    </CardCss>
  );
}
