import React from 'react';
import { render } from 'react-testing-library';

import Stack from './index';

describe('components/Stack', () => {
  let store;

  beforeEach(() => {
    store = { postStore: { posts: [], loadPosts: jest.fn() } };
  });

  it('mounts', () => {
    const { container } = render(<Stack postStore={store.postStore} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
