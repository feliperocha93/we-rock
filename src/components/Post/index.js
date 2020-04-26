import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { MdExitToApp } from 'react-icons/md';


import './styles.css';

export default class Post extends Component {
  state = {
    post: {
      body: [],
      keywords: [],
    },
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const postResponse = await api.get(`posts/${id}`);
    this.setState({ post: postResponse.data });

    if (await this.props.location.query) this.setState({ query: this.props.location.query });
  }

  render() {
    const { title, body, date, userId, keywords } = this.state.post;
    const query = this.state.query;
    return (
      <section className="post">
        <article className="container">

          <h2>
            {title}
            <Link to={{ pathname: '/blog', query }}>
              <MdExitToApp size={36} color="#c3c3c3" onClick={this.backInitialFeed} className="back" />
            </Link>
          </h2>

          {body.map((p, index) => <p key={index}>{p}</p>)}
          <small>{userId} - {date}</small>

          <div className="tags">
            {keywords.map(keyword => {
              return (
                <Link key={keyword} to={{
                  pathname: '/blog',
                  query: keyword
                }}>
                  <small>{keyword}</small>
                </Link>
              )
            })}
          </div>

        </article>
      </section>
    )
  }
}

