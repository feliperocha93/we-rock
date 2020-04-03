import React, { Component } from 'react';
import Banner from '../../components/Banner'

import './styles.css'

export default class Blog extends Component {

	render() {

		return (
			<main>
				<Banner 
					title="Blog"
					description='Este é o meu blog, manos'
				/>
			</main>
		);
	}
}