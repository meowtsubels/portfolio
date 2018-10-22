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
										<div className={"col-md-6" + " " + "text-sm-center"}>
											<img className="img-fluid" src={Images.lamudi.lmd1} />
										</div>
										<div className={"col-md-6" + " " + "text-sm-center"}>
											<img className={"img-fluid" + " " + "pb-5"} src={Images.lamudi.lmd2}/>
											<div className="row">
												<div className="col">
													<img className={"img-fluid" + " " + "pb-5"} src={Images.lamudi.mag1}/>
													<img className={"img-fluid" + " " + "pb-5"} src={Images.lamudi.mag2}/>
													<img className={"img-fluid" + " " + "pb-5"} src={Images.lamudi.mag3}/>
													<img className={"img-fluid" + " " + "pb-5"} src={Images.lamudi.teaser1}/>
													{/* insert links here */}	
													<ul>
														<li>
															<a href="https://www.lamudi.com.ph/all-events/">
																https://www.lamudi.com.ph/all-events/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/events/">
																https://www.lamudi.com.ph/events/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/housing_fair/">
																https://www.lamudi.com.ph/housing_fair/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/outlook-real-estate-market-trends-2017/">
																https://www.lamudi.com.ph/outlook-real-estate-market-trends-2017/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/careers/">
																https://www.lamudi.com.ph/careers/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/journal/how-to-apply-for-a-pag-ibig-housing-loan/">
																https://www.lamudi.com.ph/journal/how-to-apply-for-a-pag-ibig-housing-loan/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/comprehensive-guide-pagibig-housing-loan/">
																https://www.lamudi.com.ph/comprehensive-guide-pagibig-housing-loan/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.com.ph/complete-condo-buying-guide/">
																https://www.lamudi.com.ph/complete-condo-buying-guide/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.co.id/panduan-area-properti-kota-bandung/">
																https://www.lamudi.co.id/panduan-area-properti-kota-bandung/
															</a>
														</li>
														<li>
															<a href="https://www.lamudi.co.id/panduan-area-properti/">
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