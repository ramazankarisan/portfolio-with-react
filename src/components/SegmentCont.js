import React from 'react'
import { Placeholder, Segment } from 'semantic-ui-react'

const SegmentCont = () => {
  return (
    <Segment >
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  )
}

export default SegmentCont
