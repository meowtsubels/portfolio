import React, { Component } from 'react';
import Images from '../images/Images';

class mypropertyModal extends Component {
	render() {
		return (
			<div className="mypropertyModal">
				<div className="modal fade" id="myproperty" tabIndex="-1" role="dialog" aria-labelledby="mypropertyModal" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title w-100 text-center" id="exampleModalLabel">My Property</h5>
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
									The premier Philippines real estate portal with a wide database of properties for sale, rent, pre-sell and the latest real estate news and information.
									</p>
										<div className={"col-md-6" + " " + "text-sm-center"}>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.myproperty.myprop1} />
											<img className={"img-fluid" + " " + "pb-5"} src={Images.myproperty.myprop4} />
										</div>
										<div className={"col-md-6" + " " + "text-sm-center"}>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.myproperty.myprop2} />
											<img className={"img-fluid" + " " + "pb-5"} src={Images.myproperty.myprop3} />
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

export default mypropertyModal;