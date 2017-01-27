import React from 'react';
import ExternalLinks from './ExternalLinks';
import renderer from 'react-test-renderer';

describe('<ExternalLinks />', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(<ExternalLinks />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
