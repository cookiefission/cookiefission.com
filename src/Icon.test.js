import React from 'react';
import Icon from './Icon';
import renderer from 'react-test-renderer';

describe('<Icon />', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(<Icon />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  context('when an name is provided', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<Icon name='github' />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  context('when a size is provided', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<Icon size='lg' />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
