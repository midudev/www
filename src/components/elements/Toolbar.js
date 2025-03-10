import { layout } from 'theme'
import styled from 'styled-components'
import Flex from './Flex'

export const TOOLBAR_SIZE = '67px'

const Toolbar = styled(Flex)({
  overflowX: 'auto',
  overflowY: 'hidden'
})

Toolbar.defaultProps = {
  ...Flex.defaultProps,
  as: 'header',
  color: 'black50',
  bg: 'white',
  display: 'flex',
  px: 0,
  height: TOOLBAR_SIZE,
  maxWidth: layout
}

export default Toolbar
