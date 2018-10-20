import React from 'react';
import PropertyProModal from '../assets/contents/propertyproModal';
import LamudiModal from '../assets/contents/lamudiModal';

export default class ModalsCraft extends React.Component {
	render() {
		return (
			<div>
				<PropertyProModal />
				<LamudiModal />
			</div>
		);
	}
}