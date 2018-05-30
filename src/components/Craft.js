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
										craftLogoHover={craft.imageHover}
										craftLink={craft.link}
										craftStyle={craft.style}
										craftStyle1={craft.style1}
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

	// state = { imgSrc: (this.props.craftLogo) };
  // setImageSource(src) { this.setState({ imgSrc: src}); }

	// onMouseOver = () => {
	// 	this.setState(this.props.craftLogoHover)
	// }

	// onMouseOut = () => {
	// 	this.setState(this.props.craftLogo)
	// }

	render() {
		return (
			<div className="col-sm-6">
				<a href={this.props.craftLink} data-toggle="modal" data-target={this.props.craftLink}>
					<div className="card" style={this.props.craftStyle}>
						<div className="card-img text-center">
							{/* onMouseOver={() => this.setImageSource(this.props.craftLogoHover)}
							onMouseOut={() => this.setImageSource(this.props.craftLogo)} */}
							{/* <img className="img-responsive " src={this.state.imgSrc} alt=""/> */}
							<img className="img-responsive " src={this.props.craftLogo} alt=""/>
						</div>
					</div>
				</a>
				<div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								...
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabe2" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Modal</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								...
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Craft;