import React from 'react';
import { mount, shallow } from 'enzyme';
import About from './About';

describe('About', () => {
  let props;
  let mountedAbout;

  const about = () => {
    if (!mountedAbout) {
      mountedAbout = mount(<About {...props} />);
    }
    return mountedAbout;
  }

  beforeEach(() => {
    props = {
      text: undefined
    };
    mountedAbout = undefined;
  })

  it('always renders a div', () => {
    const divs = about().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const divs = about().find('div');
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(about().children());
    })
  })
})
