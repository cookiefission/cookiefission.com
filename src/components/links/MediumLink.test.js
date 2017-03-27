import React from 'react';
import MediumLink from './MediumLink';
import renderer from 'react-test-renderer';

describe('<MediumLink />', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <MediumLink />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
