import React, { Component } from 'react';
import Images from '../images/Images';

class globeModal extends Component {
	render() {
		return (
			<div className="globeModal">
				<div className="modal fade" id="globe" tabIndex="-1" role="dialog" aria-labelledby="mypropertyModal" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title w-100 text-center" id="exampleModalLabel">Globe</h5>
								<button type="button" className="close position-absolute" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">
										<img className="modal-back" alt="" src={Images.backIcon} />
									</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="container">
									<div className="row">
									<p>
										Globe Telecom, commonly shortened as <b>Globe</b>, is a major provider of telecommunications services in the Philippines. It operates one of the largest mobile, fixed line, and broadband networks in the country.
									</p>
										<div className="col text-sm-center">
											<img className="img-fluid mb-5 imgDepth" alt="onboarding 1" src={Images.globe.g1}/>
											<img className="img-fluid mb-5 imgDepth" alt="onboarding 2" src={Images.globe.g2}/>
											<img className="img-fluid mb-5 imgDepth" alt="onboarding 3" src={Images.globe.g3}/>
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

export default globeModal;