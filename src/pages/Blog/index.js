import React, { Component } from 'react';
import { MdFiberNew, MdSearch } from 'react-icons/md';
import api from '../../services/api';
import Banner from '../../components/Banner'
import { Descriptions, Titles } from '../../constants/pagesEnum';

import './styles.css'

import backgroundImage from '../../assets/img/banner/bg-blog1.jpg';

export default class Blog extends Component {

	state = {
		keyword: '',
		posts: [],
		researched: false,
		tags: [],
		title: 'Mais recente',
	}

	async componentDidMount() {
		const postsResponse = await api.get('posts?_limit=4&_sort=id&_order=desc');
		this.setState({ posts: postsResponse.data });

		const tagsResponse = await api.get('tags');
		this.setState({ tags: tagsResponse.data });
	}

	async handleClick(e, searchBy) {
		const keyword = searchBy === 'tag' ? e.target.innerHTML : this.state.keyword;
		const searchResponse = await api.get(`posts?keywords_like=${keyword}`);

		this.setState({ keyword, posts: searchResponse.data, researched: true, title: keyword });
	}

	handleChange = e => {
		this.setState({ keyword: e.target.value });
	};

	render() {
		const { posts, tags, title } = this.state;

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
						{tags.map(tag => {
							return (
								<small key={tag.id} onClick={(e) => this.handleClick(e, 'tag')}>{tag.name}</small>
							)
						})}
					</div>
					<div className="input-bar">
						<input placeholder="Digite um assunto..." type="text" onChange={this.handleChange} />
						<MdSearch size={24} color="#999" onClick={(e) => this.handleClick(e, 'input')} />
					</div>

				</div>

				<section className="container">
					<h2>
						{title} {title === 'Mais recente' ?
							<MdFiberNew size={20} color="#add555" /> : null}
					</h2>

					{posts.length > 0 ?
						posts.map(item => {
							return (
								<article className="card" key={item.id}>
									<h3>{item.title}</h3>
									<h5>{`${item.userId} - ${item.date}`}</h5>
									<div className="tags">
										{item.keywords.map(keyword => {
											return (
												<small key={keyword} onClick={(e) => this.handleClick(e, 'tag')}>{keyword}</small>
											)
										})}
									</div>
								</article>
							)
						})
						: <div className="card error">
							<p>Sua busca não retornou nenhum post. Experimente usar uma de nossas tags.</p>
						</div>
					}

				</section>
			</main>
		);
	}
}
