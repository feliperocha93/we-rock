import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { BlogConfig } from '../../constants/pages/blogEnum';
import Banner from '../../components/Banner';
import Email from '../../components/Email';
import { MdExitToApp } from 'react-icons/md';

import './styles.css';

import backgroundImage from '../../assets/img/banner/bg-blog1.jpg';


export default class Post extends Component {
  state = {
    post: {
      body: [],
      keywords: [],
      user: [],
    },
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const postResponse = await api.get(`posts/${id}?_expand=user`);
    this.setState({ post: postResponse.data });

    if (await this.props.location.query) this.setState({ query: this.props.location.query });
  }

  render() {
    const { title, body, date, user, keywords } = this.state.post;
    const query = this.state.query;
    return (
      <section className="post">

        <Banner
          title={BlogConfig.Titulo}
          description={BlogConfig.Descricao}
          backgroundImage={backgroundImage}
        />

        <article className="container">
          <h2>
            {title}
            <Link to={{ pathname: '/blog', query }}>
              <MdExitToApp className="hover-scale" size={36} color="#c3c3c3" />
            </Link>
          </h2>

          <div div className="paragraphs" dangerouslySetInnerHTML={{ __html: body }} />
          <span>{user.name} - {date}</span>

          <div className="tags">
            {keywords.map(keyword => {
              return (
                <Link
                  className="hover-scale"
                  key={keyword}
                  to={{ pathname: '/blog', query: keyword }}
                >
                  <small>{keyword}</small>
                </Link>
              )
            })}
          </div>
        </article>

        <Email />

      </section>
    )
  }
}

