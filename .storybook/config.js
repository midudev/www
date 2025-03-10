import { addDecorator, configure, addParameters } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Flex from 'components/elements/Flex'
import React from 'react'

import theme from 'theme'

import '@storybook/addon-console'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.jsx?$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

addParameters({
  name: 'microlink design language',
  url: 'https://github.com/microlinkhq/www',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  sortStoriesByKind: true,
  enableShortcuts: false // true by default
})

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Flex
      p={3}
      justiContent='center'
      alignItems='baseline'
      flexDirection='column'
    >
      {story()}
    </Flex>
  </ThemeProvider>
))

configure(loadStories, module)
