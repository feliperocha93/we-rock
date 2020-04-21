import React, { Component } from 'react';
import { MdFiberNew, MdSearch } from 'react-icons/md';
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

	async componentDidMount() {
		const postsResponse = await api.get('posts?_limit=4&_sort=id&_order=desc');
		this.setState({posts: postsResponse.data});

		const tagsResponse = await api.get('tags');
		this.setState({tags: tagsResponse.data});
	}

	handleClick() {
		alert("Iniciar pesquisa");
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
								<small key={tag.id}>{tag.name}</small>
							)
						})}
					</div>
					<div className="input-bar">
						<input placeholder="Digite um assunto..."type="text" />
						<MdSearch size={24} color="#999" onClick={this.handleClick} />
					</div>
					
				</div>

				<section className="container">
					<h2>Mais recentes<MdFiberNew size={20} color="#add555" /></h2>

					{this.state.posts.map(item => {
						return (
							<article className="card" key={item.id}>
								<h3>{item.title}</h3>
								<h5>{`${item.userId} - ${item.date}`}</h5>
								<div className="keywords">
									{item.keywords.map(keyword => {
										return (
										<small key={keyword}>{keyword}</small>
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
