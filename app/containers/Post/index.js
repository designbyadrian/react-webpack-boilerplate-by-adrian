import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

@inject('postStore')
@withRouter
@observer
export default class Post extends React.Component {

  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.postStore.loadPost(slug, { acceptCached: true });
  }

  render() {
    const slug = this.props.match.params.slug;
    const post = this.props.postStore.getPost(slug);
    console.log("post", post);
    return (
      <div>
        {post &&
          <Fragment>
            <Helmet
              title={`${post.title} | React 16 Webpack 4`}
            />
          <div className="jumbotron mt-3">
              <h1 className="display-4">{post.title}</h1>
              <p className="lead">Read about this exciting title below</p>
              <hr className="my-4" />
              <p>{post.description}</p>
            </div>
          </Fragment>
        }
      </div>
    )
  }
};