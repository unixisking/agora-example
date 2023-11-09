import { render } from '@testing-library/react';

import GameOne from './gameOne';

describe('GameOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameOne />);
    expect(baseElement).toBeTruthy();
  });
});
