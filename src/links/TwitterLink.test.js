import React from 'react';
import TwitterLink from './TwitterLink';
import renderer from 'react-test-renderer';

describe('<TwitterLink />', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <TwitterLink />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
