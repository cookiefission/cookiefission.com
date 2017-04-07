import React from 'react';
import GithubShowcase from './GithubShowcase';
import renderer from 'react-test-renderer';

describe('<GithubShowcase />', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(<GithubShowcase />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
