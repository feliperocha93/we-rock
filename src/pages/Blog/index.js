import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import BlogRoutes from './blogRoutes'

import Banner from '../../components/Banner';
import { Descriptions, Titles } from '../../constants/pagesEnum';

import './styles.css'

import backgroundImage from '../../assets/img/banner/bg-blog1.jpg';

export default class Blog extends Component {

	render() {
		return (
			<main className="blog">
				<Banner
					title={Titles.Blog}
					description={Descriptions.Blog}
					backgroundImage={backgroundImage}
				/>

				<BrowserRouter>
					<BlogRoutes />
				</BrowserRouter>
			</main>
		);
	}
}
