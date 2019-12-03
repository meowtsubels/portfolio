import React from 'react';
// import JGModal from '../assets/contents/jgsummitModal';
import AcquireModal from '../assets/contents/acquireModal';
import PropertyProModal from '../assets/contents/propertyproModal';
import LamudiModal from '../assets/contents/lamudiModal';
import MyPropertyModal from '../assets/contents/mypropertyModal';
import XendModal from '../assets/contents/_xendModal';
import SimpliphpyModal from '../assets/contents/simpliphpyModal';
import GlobeModal from '../assets/contents/globeModal';

export default class ModalsCraft extends React.Component {
	render() {
		return (
			<div class="modals">
				{/* <JGModal/> */}
				<AcquireModal/>
				<PropertyProModal />
				<LamudiModal />
				<MyPropertyModal />
				<XendModal/>
				<SimpliphpyModal />
				<GlobeModal/>
			</div>
		);
	}
}