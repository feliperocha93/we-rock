import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { MdExitToApp, MdFiberNew, MdSearch } from 'react-icons/md';

import './styles.css';

export default class Feed extends Component {
  state = {
    newPosts: [],
    keyword: '',
    posts: [],
    researched: false,
    tags: [],
    title: 'Mais recente',
  }

  async componentDidMount() {
    const postsResponse = await api.get('posts?_limit=4&_sort=id&_order=desc');
    this.setState({ newPosts: postsResponse.data, posts: postsResponse.data });

    const tagsResponse = await api.get('tags');
    this.setState({ tags: tagsResponse.data });

    if (this.props.location.query) this.searchKeyword(this.props.location.query);

  }

  async searchKeyword(keyword) {
    const searchResponse = await api.get(`posts?keywords_like=${keyword}`);

    this.setState({ keyword, posts: searchResponse.data, researched: true, title: keyword });
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
    const { keyword, posts, tags, title } = this.state;
    return (
      <section className="feed">
        <article className="container">
          <h3>O que VOCÊ quer estudar hoje?</h3>
          <div className="tags center">
            {tags.map(tag => {
              return (
                <small
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
            <MdSearch size={24} color="#999" onClick={(e) => this.getKeyword(e, 'input')} />
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
                <div className="card hover-scale" key={item.id}>
                  <Link to={{ pathname: `posts/${item.id}`, query: keyword }}>
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
