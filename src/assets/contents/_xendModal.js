import React, { Component } from 'react';
import Images from '../images/Images';

class xendModal extends Component {
	render() {
		return (
			<div className="xendModal">
				<div className="modal fade" id="xend" tabIndex="-1" role="dialog" aria-labelledby="mypropertyModal" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title w-100 text-center" id="exampleModalLabel">Xend</h5>
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

export default xendModal;