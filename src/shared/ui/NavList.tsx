import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navlist.scss';

type Props = {};

const NavList: FC = (props: Props) => {
  return (
    <ul className='nav__list'>
      <li>
        <NavLink to='/home'>Главная</NavLink>
      </li>
      <li>
        <NavLink to='/calendar'>Календарь</NavLink>
      </li>
    </ul>
  );
};

export default NavList;