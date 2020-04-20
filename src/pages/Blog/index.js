import React, { Component } from 'react';
import api from '../../services/api';
import Banner from '../../components/Banner'
import { Descriptions, Titles } from '../../constants/pagesEnum';

import './styles.css'

import backgroundImage from '../../assets/img/banner/bg-blog1.jpg';

export default class Blog extends Component {
	state = {
		posts: [],
		tags: []
	}

	componentDidMount() {
		api.get('posts?_sort=id&_order=desc_limit=5').then(response => this.setState({posts: response.data}));

		api.get('tags').then(response => this.setState({tags: response.data}));
	}

	render() {
		return (
			<main className="blog">
				<Banner 
					title={Titles.Blog}
					description={Descriptions.Blog}
					backgroundImage={backgroundImage}
				/>

				<div className="container">
					<h3>O que VOCÊ quer estudar hoje?</h3>
					<div className="tags">
						{this.state.tags.map(tag => {
							return (
								<small key={tag}>{tag}</small>
							)
						})}
					</div>
					<input type="text" placeholder="Busque por um assunto"/>
				</div>

				<section className="container">

					{this.state.posts.map(item => {
						return (
							<article className="card" key={item.id}>
								<h3>{item.title}</h3>
								<h5>{`${item.profileId} - ${item.date}`}</h5>
								<div className="keywords">
									{item.keywords.map(keyword => {
										return (
										<small>{keyword}</small>
										) 
									})}
								</div>
							</article>
						)
					})}

				</section>
			</main>
		);
	}
}

// Destaque do último post
// Busca por palavra-chave
