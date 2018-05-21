import React, { Component } from 'react';

class Exp extends Component {
	render() {
		return (
			<div id='exp'>
				<section className='exp'>
					<h1> exp </h1>
					{this.props.exp.map((exp, index) => {
						return (
							<ExpList
									expPosition={exp.position}
									expDate={exp.date}
									expCompany={exp.company}
									key={index} 
								/>
							)
						})}
				</section>
			</div>
		);
	}
}

class ExpList extends Component {
	render() {
		return (
			<div>
				<h3> {this.props.expPosition} </h3>
				<p className='date'> {this.props.expDate} </p>
				<p className='company'> {this.props.expCompany} </p>
				<hr/>
			</div>
		);
	}
}

export default Exp;