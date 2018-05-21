import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div id='contact' className='pb-5'>
				<section className='contact pb-5'>
					<h1> contact </h1>
					<div className='row'>
						<div className=' col-lg-12 col-12'>
							<h2> Would you like to work together, or simply talk about a project? Hit me up.</h2>
						</div>
					</div>
					<div className='contacts'>
						<ul className='pl-0'>
							<li> grab.rgba@gmail.com </li>
							{/* <li> | </li> */}
							<li> +63 916 269 2655 </li>
						</ul>
					</div>
					{/* <p className='contacts'> +63 916 369 2655 <br/>
							Novaliches, Quezon City <br/>
							Metro Manila, PH
					</p> */}
				</section>
			</div>
		);
	}
}

export default Contact;