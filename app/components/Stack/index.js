import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Card from 'components/Card';

@inject('postStore')
@observer
class Stack extends React.Component {
  static propTypes = {
    postStore: PropTypes.object,
  }

  componentDidMount() {
    this.props.postStore.loadPosts();
  }

  render() {
    const { posts, isLoading } = this.props.postStore;

    return (
      <div className="row">
        {posts.map(post => (
          <div key={post.id} className="col-12 col-sm-6 col-md-4 mb-1">
            <Card {...post} />
          </div>))}
      </div>
    );
  }
}

export default Stack;
