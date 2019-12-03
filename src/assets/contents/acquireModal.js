import React, { Component } from 'react';
import Images from '../images/Images';

class acquireModal extends Component {
	render() {
		return (
			<div className="acquireModal">
				<div className="modal fade" id="acquire" tabIndex="-1" role="dialog" aria-labelledby="acquireModal" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title w-100 text-center" id="acquireModal">Acquire</h5>
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
										<b>Acquire</b> Business Process Outsourcing is an Australian global business process outsourcing firm that specializes in back office support, customer acquisition, customer service, technical support, lead generation and software development.
									</p>
										<div className="col text-sm-center">
											<img className="img-fluid mb-5 imgDepth" alt="event page" src={Images.acquire.acq1}/>
										</div>
									</div>
									<div className="row mb-5">
										<div className="col-md-6 text-sm-center">
											<img className="img-fluid imgDepth" alt="newsletter 1" src={Images.acquire.acq2} />
										</div>
										<div className="col-md-6 text-sm-center">
											<img className="img-fluid imgDepth" alt="newsletter 2" src={Images.acquire.acq3} />
										</div>
									</div>
									<div className="row"> 
										<div className="col text-sm-center">
											<img className="img-fluid pb-5 imgDepth" alt="webpage redesign" src={Images.acquire.acq4}/>
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

export default acquireModal;