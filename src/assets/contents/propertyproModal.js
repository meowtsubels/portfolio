import React, { Component } from 'react';
import Images from '../images/Images';

class propertyproModal extends Component {
	render() {
		return (
			<div className="propertyProModal">
				<div className="modal fade" id="property_pro" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title w-100 text-center" id="exampleModalLabel">Property Pro</h5>
								<button type="button" className={"close" + " " + "position-absolute"} data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">
										<img className="modal-back" src={Images.backIcon} />
									</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="container">
									<div className="row">
										<div className="col">
											<p>
											<b>PropertyPRO</b> is an application that facilitates real estate agents and property brokers to sell premium property projects from well-known developers in Indonesia. 
											<br/><br/>
											PropertyPRO provides information and tips on selling professional property to property agents. Project details, available units, price lists, brochures, commissions and bonuses, all in one application are in your hand. 
											</p>
											<img src={Images.propertypro.pp1} />
											<img src={Images.propertypro.pp2} />
											<img src={Images.propertypro.pp3} />
											<img src={Images.propertypro.pp4} />
											<img src={Images.propertypro.pp5} />
											<img src={Images.propertypro.pp6} />
											<img src={Images.propertypro.pp7} />
											<img src={Images.propertypro.pp8} />
											<img src={Images.propertypro.pp9} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default propertyproModal;