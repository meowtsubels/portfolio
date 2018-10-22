import React from 'react';
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