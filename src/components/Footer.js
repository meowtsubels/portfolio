import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className='pt-5'>
				<section className='footer'>
				<ul className='pl-0'>
					<li> <a href='https://www.linkedin.com/in/grabrgba/'> <i className="fab fa-linkedin fa-2x"></i> </a> </li>
					<li> <a href='https://www.behance.net/grabillo'> <i className="fab fa-behance-square fa-2x" ></i> </a> </li>
					<li> <a href='https://github.com/grabillo/'> <i className="fab fa-github-square fa-2x"></i> </a> </li>
				</ul>	
				</section>
			</div>
		);
	}
}

export default Footer;