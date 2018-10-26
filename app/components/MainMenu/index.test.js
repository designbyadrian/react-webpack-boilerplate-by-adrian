import React from 'react';
import { render } from 'react-testing-library';

import Menu from './index';

describe('components/Menu', () => {
  let store;

  beforeEach(() => {
    store = { routing: {} };
  });

  it('matches snapshot', () => {
    const { container } = render(<Menu {...store} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('has navbar', () => {
    const { container, getByTestId } = render(<Menu {...store} />);

    expect(getByTestId('navbar')).toBeTruthy();
  });
});
