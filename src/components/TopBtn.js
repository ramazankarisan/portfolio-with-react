import { faChevronCircleUp, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Icon, Label, Segment } from 'semantic-ui-react'

const TopBtn = () => {
  return (
    <>
      <div class="top-button">
        <a href="#home">
          <FontAwesomeIcon icon={faChevronUp} />
          <p>top</p>
        </a>
      </div>
    </>
  )
}

export default TopBtn
