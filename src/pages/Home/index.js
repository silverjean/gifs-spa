import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import FavSidebar from '../../components/FavSidebar';
import Card from '../../components/Card';
import { ContainerCards, Container, Body, Fav, Result } from './style';
import api from '../../services/apiGiphy';
import { favorite } from '../../store/modules/fav/actions';

export default function Home() {
  document.title = 'Home | Giphy';
  const [gifs, setGifs] = useState({ data: null });
  const [gifsSearch, setGifsSearch] = useState({ data: null });
  const [searchs, setSearchs] = useState('');

  const favo = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  let listOfResult = null;
  async function setSearch(item) {
    if (searchs === '') {
      return;
    }

    try {
      const { data } = await api.get(
        `search?api_key=V9WpJsk4clCTsnx88bpur5Xj7KGZO0uz&q=${item}&limit=12&offset=0&rating=g&lang=pt`
      );
      setGifsSearch({ data: data });
    } catch (error) {
      setGifsSearch({ data: null });
      console.log(error);
    }
  }
  if (gifsSearch.data) {
    listOfResult = gifsSearch.data.data.map((gif) => (
      <Card
        key={gif.id}
        src={gif.images.original.url}
        setFav={() => setFav(gif)}
      />
    ));
  }

  function setFav(item) {
    const img = item.images.original.url;
    const title = item.title;
    const src = item.embed_url;

    let match = favo.find((item) => item.title === title);

    if (match === undefined) {
      dispatch(
        favorite({
          img,
          title,
          src,
        })
      );
    }
  }

  let content = null;
  useEffect(() => {
    async function req() {
      try {
        const { data } = await api.get(
          `trending?api_key=V9WpJsk4clCTsnx88bpur5Xj7KGZO0uz&limit=30&rating=g`
        );
        setGifs({ data: data });
      } catch (error) {
        console.log(error);
      }
    }
    req();
  }, []);

  if (gifs.data) {
    content = gifs.data.data.map((gif) => (
      <Card
        key={gif.id}
        src={gif.images.original.url}
        setFav={() => setFav(gif)}
      />
    ));
  }

  return (
    <React.Fragment>
      <Container>
        <Body>
          <Navbar
            hom={true}
            act={() => setSearch(searchs)}
            input={({ target }) => setSearchs(target.value)}
          />
          {listOfResult ? (
            <Result>
              {listOfResult}
              <button onClick={() => window.location.reload()}>Limpar</button>
            </Result>
          ) : (
            ''
          )}
          <ContainerCards>{content}</ContainerCards>
        </Body>
        <Fav>
          <FavSidebar />
        </Fav>
      </Container>
    </React.Fragment>
  );
}
