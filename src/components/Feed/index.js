import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { MdExitToApp, MdFiberNew, MdSearch } from 'react-icons/md';

import './styles.css';

export default class Feed extends Component {
  state = {
    keyword: '',
    posts: [],
    researched: false,
    tags: [],
    title: 'Mais recente',
  }

  newPosts = [];

  async componentDidMount() {
    const postsResponse = await api.get('posts?_limit=4&_sort=id&_order=desc');
    this.newPosts = postsResponse.data;
    this.setState({ posts: this.newPosts });

    const tagsResponse = await api.get('tags');
    this.setState({ tags: tagsResponse.data });
  }

  async searchKeyword(e, searchBy) {
    const keyword = searchBy === 'tag' ? e.target.innerHTML : this.state.keyword;
    const searchResponse = await api.get(`posts?keywords_like=${keyword}`);

    this.setState({ keyword, posts: searchResponse.data, researched: true, title: keyword });
  }

  backInitialFeed = () => {
    this.setState({ keyword: '', posts: this.newPosts, title: 'Mais recente' });
  }

  handleChange = e => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    const { keyword, posts, tags, title } = this.state;
    return (
      <section className="feed">
        <article className="container">
          <h3>O que VOCÊ quer estudar hoje?</h3>
          <div className="tags">
            {tags.map(tag => {
              return (
                <small
                  key={tag.id}
                  onClick={(e) => this.searchKeyword(e, 'tag')}
                  onTouchStartCapture={(e) => this.searchKeyword(e, 'tag')}>
                  {tag.name}
                </small>
              )
            })}
          </div>
          <div className="input-bar">
            <input placeholder="Digite um assunto..." type="text" value={keyword} onChange={this.handleChange} />
            <MdSearch size={24} color="#999" onClick={(e) => this.searchKeyword(e, 'input')} />
          </div>
        </article>

        <article className="container">
          <h2>
            {title}
            {title === 'Mais recente' ?
              <MdFiberNew size={20} color="#add555" className="new" /> :
              <MdExitToApp size={36} color="#c3c3c3" onClick={this.backInitialFeed} className="back" />}
          </h2>

          {posts.length > 0 ?
            posts.map(item => {
              return (
                <div className="card hover-scale    " key={item.id}>
                  <Link to={`blog/post?${item.id}`}>
                    <h3>{item.title}</h3>
                    <h5>{`${item.userId} - ${item.date}`}</h5>
                    <div className="tags">
                      {item.keywords.map(keyword => {
                        return (
                          <small key={keyword}>{keyword}</small>
                        )
                      })}
                    </div>
                  </Link>
                </div>
              )
            })
            : <div className="card error">
              <p>Sua busca não retornou nenhum post. Experimente usar uma de nossas tags.</p>
            </div>
          }
        </article>
      </section>
    )
  }
}
