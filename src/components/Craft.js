import React, { Component } from 'react';

class Craft extends Component {
	render() {
		return (
			<div id='craft'>
				<section className="craft">
					<h1> craft </h1>
					<div className="row">
						{this.props.craft.map((craft, index) => {
							return (
								
								<CraftCard
										craftLogo={craft.image}
										craftLink={craft.link}
										craftStyle={craft.style}
										craftText={craft.asdasd}
										key={index} 
									/>
								)
							})}
					</div>
				</section>
			</div>
		);
	}
}

class CraftCard extends Component {

	render() {
		return (
			<div className="col-sm-6">
				<a href={this.props.craftLink} data-toggle="modal" data-target={this.props.craftLink}>
					<div className="card" style={this.props.craftStyle}>
						<div className="card-img text-center">
							<img className="img-responsive size-def" src={this.props.craftLogo} alt=""/>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

export default Craft;