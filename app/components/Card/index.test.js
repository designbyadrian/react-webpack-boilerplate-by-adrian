import React from 'react';
import { render } from 'react-testing-library';

import Card from './index';

describe('components/Card', () => {
  it('mounts', () => {
    const { container } = render(<Card />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
