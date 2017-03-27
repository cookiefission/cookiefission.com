import React from 'react';
import GithubLink from './GithubLink';
import renderer from 'react-test-renderer';

describe('<GithubLink />', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <GithubLink />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
