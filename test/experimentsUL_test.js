import expect from 'expect'
import React from 'react'

import TestUtils from 'react-addons-test-utils'

import ExperimentsList from '../src/js/constants/ExperimentsList';
import ExperimentsUL from '../src/js/components/ExperimentsUL';
import IconicDisplay from '../src/js/components/IconicDisplay';

function setup() {
  let props = {}

  let renderer = TestUtils.createRenderer();
  renderer.render(<ExperimentsUL parent="react" list={ExperimentsList.react} />)
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}


describe('components', () => {
  const { output, props } = setup();
  describe('App', () => {
    it('should render correctly', () => {
      expect(output.type).toBe('ul')
      expect(output.props.children.length).toEqual(6)
      expect(output.props.children[0].props.className).toEqual("list-group-item")

    })
  })
})
