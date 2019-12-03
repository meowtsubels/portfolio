import React, { Component } from 'react';
import Images from '../images/Images';

class simpliphpyModal extends Component {
	render() {
		return (
			<div className="simpliphpyModal">
				<div className="modal fade" id="simpliphpy" tabIndex="-1" role="dialog" aria-labelledby="mypropertyModal" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title w-100 text-center" id="exampleModalLabel">Simpliphpy</h5>
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
									<b>Simpliphpy Inc.</b> is a web and mobile development company. With over 10 years of collective
									development and consulting expertise on different platforms and programming languages.
									Our team has since launched and delivered a multitude of high profile and complex web application/Web
									Services using any of the following PHP, Ruby on Rails, ASP/C# .NET and Django-Python, mobile apps
									(IOS, Android, Windows 8 Mobile & Desktop/Tablet) and platforms for major companies, government
									institutions and telecommunication companies.
									</p>
										<div className="col">
											<img className="img-fluid mb-5 imgDepth" src={Images.simpliphpy.simph} />
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

export default simpliphpyModal;