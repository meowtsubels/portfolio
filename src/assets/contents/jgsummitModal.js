import React, { Component } from 'react';
import Images from '../images/Images';

class jgsummitModal extends Component {
	render() {
		return (
			<div className="jgsummitModal">
				<div className="modal fade" id="jg" tabIndex="-1" role="dialog" aria-labelledby="acquireModal" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title w-100 text-center" id="acquireModal">Acquire</h5>
								<button type="button" className={"close" + " " + "position-absolute"} data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">
										<img className="modal-back" src={Images.backIcon} />
									</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="container">
									<div className="row">
									<p>
										<b>Acquire</b> Business Process Outsourcing is an Australian global business process outsourcing firm that specializes in back office support, customer acquisition, customer service, technical support, lead generation and software development.
									</p>
										<div className={"col" + " " + "text-sm-center"}>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.globe.g1}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.globe.g2}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.globe.g3}/>
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

export default jgsummitModal;