import React, { Component } from 'react';

class Hero extends Component {
	render() {
		return (
			<div>
				<section className='hero'>
					<h1> Heya, I’m Robert Grabillo </h1>
					<div className="row">
						<div className="col-lg-8 col-12">
							<h2> 
								A Front-End Developer and 
								UI Designer based in Manila.
							</h2>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Hero;