import React, { Component } from 'react';
import logo from '../assets/images/temp-logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {
	render() {
		return (
			<div id='header'>
				<header>
					<ul className='nav justiy-content-end'>
						<li className='nav-item mr-auto'>
							<AnchorLink href='#header' className='navbar-brand'>
								<img src={logo} className='App-logo' alt='logo' />
							</AnchorLink> 
						</li>
							<li className='nav-item'>
								<AnchorLink  className='nav-link active' href='#exp'> <span> exp </span> </AnchorLink>
							</li>
							<li className='nav-item'>
								<AnchorLink className='nav-link' href='#craft'> <span> craft </span> </AnchorLink>
							</li> 
							<li className='nav-item'>
								<AnchorLink className='nav-link' href='#contact'> <span> contact</span> </AnchorLink>
							</li>
						</ul>
					</header>
				</div>
		);
	}
}

export default Header;