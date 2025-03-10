import styled from 'styled-components'

import Text from './Text'

const Lead = styled(Text)([])

Lead.defaultProps = {
  ...Text.defaultProps,
  fontSize: [1, 4]
}

export default Lead
