import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import {
  CodeEditor,
  Subhead,
  Flex,
  Box,
  BackgroundSlider,
  BackgroundSliderContainer
} from 'components/elements'
import { transition } from 'theme'
import { range } from 'lodash'
import { Microlink } from 'components/logos'

const NoWrap = styled(Flex)`
  white-space: nowrap;
  overflow: hidden;
`

NoWrap.defaultProps = {
  ...Flex.defaultProps,
  justifyContent: 'center',
  alignItems: 'center'
}

const LogoWrap = styled(Box)`
  cursor: pointer;
  opacity: 0.25;
  transition: opacity ${transition.short};
  &:hover {
    opacity: 0.8;
  }
`

LogoWrap.defaultProps = {
  ...Box.defaultProps,
  display: 'inline-block',
  px: 4
}

const Component = (
  <BackgroundSliderContainer as='article' py={0} px={0} maxWidth='100%'>
    <BackgroundSlider duration={80} animationDirection={'reverse'}>
      {range(30).map(index => (
        <LogoWrap key={index}>
          <Microlink />
        </LogoWrap>
      ))}
    </BackgroundSlider>
    <BackgroundSlider duration={80} animationDirection={'normal'}>
      {range(30).map(index => (
        <LogoWrap key={index}>
          <Microlink />
        </LogoWrap>
      ))}
    </BackgroundSlider>
    <BackgroundSlider duration={80} animationDirection={'reverse'}>
      {range(30).map(index => (
        <LogoWrap key={index}>
          <Microlink />
        </LogoWrap>
      ))}
    </BackgroundSlider>
  </BackgroundSliderContainer>
)

storiesOf('Elements', module).add('BackgroundSlider', () => (
  <Fragment>
    <Subhead textAlign='left' mb={3}>{`<BackgroundSlider />`}</Subhead>
    {Component}
    <CodeEditor my={4} language='jsx'>{`
import {
  BackgroundSliderContainer,
  BackgroundSlider,
} from 'components/elements'

export default () => (
  <BackgroundSliderContainer>
    <BackgroundSlider duration={80} animationDirection='reverse'>
      <Microlink />
    </BackgroundSlider>
    <BackgroundSlider duration={80} animationDirection='normal'>
      <Microlink />
    </BackgroundSlider>
    <BackgroundSlider duration={80} animationDirection='reverse'>
      <Microlink />
    </BackgroundSlider>
  </BackgroundSliderContainer>
)
`}</CodeEditor>
  </Fragment>
))
