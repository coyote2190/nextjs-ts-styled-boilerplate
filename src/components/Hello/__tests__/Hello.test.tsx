import { render } from '@testing-library/react';

import HelloComponent from '../Hello.component';

describe('Hello', () => {
  it('renders a Hello component', () => {
    const { getByTestId } = render(<HelloComponent />);

    const rightTitle = getByTestId('helloDataTestId');

    expect(rightTitle).toBeVisible();
  });
});
