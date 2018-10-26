import React from 'react';
import { render } from 'react-testing-library';

import Stack from './index';

describe('components/Stack', () => {
  let store;

  beforeEach(() => {
    store = { postStore: { posts: [], loadPosts: jest.fn() } };
  });

  it('matches snapshot', () => {
    const { container } = render(<Stack {...store} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
