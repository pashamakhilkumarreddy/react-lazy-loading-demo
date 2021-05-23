import { Link } from 'react-router-dom';
import { memo, useState } from 'react';
import clsx from 'clsx';
import Header from '../../../assets/styles/Header';

const PageHeader = () => {
  const [active, setActive] = useState(false);
  return (
    <Header>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            <img src='/' loading='lazy' decoding='async' alt='Logo' />
          </Link>

          <span role='button' className={clsx('navbar-burger', active ? 'is-active' : '')} aria-label='menu' aria-expanded='false'
          data-target='main-navbar' onClick={() =>  setActive(active => !active)}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </span>
        </div>

        <div id='main-navbar' className={clsx('navbar-menu', active ? 'is-active' : '')}>
          <div className='navbar-start'>
            <Link className='navbar-item' to='/'>
              Home
            </Link>
          </div>
          <div className='navbar-end'>
          </div>
        </div>
      </nav>
    </Header>
  )
}

export default memo(PageHeader);