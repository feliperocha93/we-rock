import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MdExitToApp, MdFiberNew } from 'react-icons/md';

import './styles.css';

export default class Feed extends Component {
  render() {
    const { keyword, posts, title } = this.props;

    return (
      <section className="feed">
        <article className="container">
          <h2>
            {title}
            {title === 'Mais recente' ?
              <MdFiberNew size={20} color="#add555" className="new" /> :
              <MdExitToApp size={36} color="#c3c3c3" onClick={this.props.backInitialFeed} className="back hover-scale" />}
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
