import React from 'react';
import IconLink from './IconLink';
import renderer from 'react-test-renderer';

describe('<IconLink />', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <IconLink href='https://example.com' />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
