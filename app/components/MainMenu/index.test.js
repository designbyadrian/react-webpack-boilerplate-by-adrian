import React from 'react';
import { render } from 'react-testing-library';

import Menu from './index';

describe('components/Menu', () => {
  let store;

  beforeEach(() => {
    store = { routing: {} };
  });

  it('mounts', () => {
    const { container } = render(<Menu routing={store.routing} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
