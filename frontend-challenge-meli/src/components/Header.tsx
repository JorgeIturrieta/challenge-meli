import React, {useState} from 'react';
import logo from '../assets/logo2x.png';
import searchBtn from '../assets/search2x.png';
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    navigate({pathname: '/items', search: `?search=${search}`});
  };
  return (
    <>
      <header className="header">
        <Link to="/" className="link-item">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <form
          className="header__container-input"
          onSubmit={e => handleSubmit(e)}>
          <input
            className="header__input"
            type={'search'}
            placeholder="Nunca dejes de buscar"
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          <button className="header__button-container" type="submit">
            <img
              src={searchBtn}
              alt="search-button"
              className="header__search-button"
            />
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;
