import { render } from '@testing-library/react';

import GameTwo from './gameTwo';

describe('GameTwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameTwo />);
    expect(baseElement).toBeTruthy();
  });
});
