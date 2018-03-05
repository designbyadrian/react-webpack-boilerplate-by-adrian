import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';

import Card from '../Card'

@inject('postStore')
@observer
class Stack extends React.Component {

  componentDidMount() {
    this.props.postStore.loadPosts();
  }

  render() {
    const { posts, isLoading } = this.props.postStore;
console.log("posts", this.props);
    return (
      <ul>
        {posts.map(post =>
          <Card {...post} />
        )}
      </ul>
    )
  }
}

Stack.propTypes = {
  postStore: PropTypes.observable,
}

export default Stack;
