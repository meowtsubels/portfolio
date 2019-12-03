import React, { Component } from 'react';
import Images from '../images/Images';

class lamudiModal extends Component {
	render() {
		return (
			<div className="lamudiModal">
				<div className="modal fade" id="lamudi" tabIndex="-1" role="dialog" aria-labelledby="lamudi" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title w-100 text-center" id="exampleModalLabel"> Lamudi </h5>
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
										<b>Lamudi</b> offer sellers, buyers, and renters a secure and easy-to-use platform to find or list properties online. By connecting developers, real estate agents, and private owners with property seekers.
										</p>
										<div className={"col-md-6" + " " + "text-sm-center"}>
											<img className={"img-fluid" + " " + "imgDepth"} src={Images.lamudi.lmd1} />
										</div>
										<div className={"col-md-6" + " " + "text-sm-center"}>
											<img className={"img-fluid" + " " + "mb-5" + " " + "imgDepth"} src={Images.lamudi.lmd2}/>
											<div className="row">
												<div className="col">
													<img className={"img-fluid" + " " + "mb-5" + " " + "imgDepth"} src={Images.lamudi.mag1}/>
													<img className={"img-fluid" + " " + "mb-5" + " " + "imgDepth"} src={Images.lamudi.mag2}/>
													<img className={"img-fluid" + " " + "mb-5" + " " + "imgDepth"} src={Images.lamudi.mag3}/>
													<img className={"img-fluid" + " " + "mb-5" + " " + "imgDepth"} src={Images.lamudi.teaser1}/>
													{/* insert links here */}	
													<ul>
														<li>
															<a href="https://www.lamudi.com.ph/all-events/" target="_blank">
																https://www.lamudi.com.ph/all-events/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/events/" target="_blank">
																https://www.lamudi.com.ph/events/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/housing_fair/" target="_blank">
																https://www.lamudi.com.ph/housing_fair/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/outlook-real-estate-market-trends-2017/" target="_blank">
																https://www.lamudi.com.ph/outlook-real-estate-market-trends-2017/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/careers/">
																https://www.lamudi.com.ph/careers/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/journal/how-to-apply-for-a-pag-ibig-housing-loan/" target="_blank">
																https://www.lamudi.com.ph/journal/how-to-apply-for-a-pag-ibig-housing-loan/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/comprehensive-guide-pagibig-housing-loan/" target="_blank">
																https://www.lamudi.com.ph/comprehensive-guide-pagibig-housing-loan/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/complete-condo-buying-guide/" target="_blank">
																https://www.lamudi.com.ph/complete-condo-buying-guide/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.co.id/panduan-area-properti-kota-bandung/" target="_blank">
																https://www.lamudi.co.id/panduan-area-properti-kota-bandung/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.co.id/panduan-area-properti/" target="_blank">
																https://www.lamudi.co.id/panduan-area-properti/
															</a>
														</li>
													</ul>
												</div>
											</div>
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

export default lamudiModal;