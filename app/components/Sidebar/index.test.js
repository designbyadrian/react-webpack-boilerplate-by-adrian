import React from 'react';
import { render } from 'react-testing-library';

import Sidebar from './index';

describe('components/Sidebar', () => {
  it('matches snapshot', () => {
    const { container } = render(<Sidebar />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
