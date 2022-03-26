import React from 'react'
import './header.css'
import {Helmet} from 'react-helmet';
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
<header>


<div className="container header__container">
<h5>Hello I am</h5>
<h1>Kevin Dsane-Selby</h1>
<h5 className="text-light">Fullstack Developer</h5>
<CTA/>
<HeaderSocial/>

<div className="me">
<img src={ME} alt="me" />

</div>

<a href="#contact" className='scroll__dowm'> Scroll Down</a>
</div>

</header>
  )
}

export default Header