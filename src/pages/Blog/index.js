import React, { Component } from 'react';
import api from '../../services/api';
import Banner from '../../components/Banner';
import Feed from '../../components/Feed';
import { Descriptions, Titles } from '../../constants/pagesEnum';
import { MdSearch } from 'react-icons/md';

import './styles.css'

import backgroundImage from '../../assets/img/banner/bg-blog1.jpg';

export default class Blog extends Component {
	state = {
		keyword: '',
		newPosts: [],
		posts: [],
		tags: [],
		title: 'Mais recente',
	}

	async componentDidMount() {
		const postsResponse = await api.get('posts?_limit=4&_sort=id&_order=desc');
		const tagsResponse = await api.get('tags');

		this.setState({
			newPosts: postsResponse.data,
			posts: postsResponse.data,
			tags: tagsResponse.data
		});

		if (await this.props.location.query) this.setState({ keyword: this.props.location.query });
		if (this.state.keyword) this.searchKeyword(this.state.keyword);
	}

	async searchKeyword(keyword) {
		const searchResponse = await api.get(`posts?keywords_like=${keyword}`);
		this.setState({ keyword, posts: searchResponse.data, title: keyword });
	}

	getKeyword(e, searchBy) {
		const keyword = searchBy === 'tag' ? e.target.innerHTML : this.state.keyword;
		this.searchKeyword(keyword);
	}

	backInitialFeed = () => {
		this.setState({ keyword: '', posts: this.state.newPosts, title: 'Mais recente' });
	}

	handleChange = e => {
		this.setState({ keyword: e.target.value });
	};

	render() {
		const { keyword, newPosts, posts, tags, title } = this.state;
		return (
			<main className="blog">
				<Banner
					title={Titles.Blog}
					description={Descriptions.Blog}
					backgroundImage={backgroundImage}
				/>

				<section className="container">
					<h3>O que VOCÊ quer estudar hoje?</h3>
					<div className="tags center">
						{tags.map(tag => {
							return (
								<small
									className="hover-scale"
									key={tag.id}
									onClick={(e) => this.getKeyword(e, 'tag')}
									onTouchStartCapture={(e) => this.getKeyword(e, 'tag')}>
									{tag.name}
								</small>
							)
						})}
					</div>
					<div className="input-bar">
						<input placeholder="Digite um assunto..." type="text" value={keyword} onChange={this.handleChange} />
						<MdSearch size={24} color="#999" className="hover-scale" onClick={(e) => this.getKeyword(e, 'input')} />
					</div>
				</section>

				<Feed
					newPosts={newPosts}
					posts={posts}
					keyword={keyword}
					title={title}
					backInitialFeed={this.backInitialFeed}
				/>

			</main>
		);
	}
}
