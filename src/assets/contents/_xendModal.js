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
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend1x}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend2x}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend3x}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend4x}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend5x}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend6x}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend7x}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend8x}/>

											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend1n}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend2n}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend3n}/>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.xend.xend4n}/>
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