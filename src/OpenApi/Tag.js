/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import '@spectrum-css/typography'

const Tag = ({ name = '', description = '' }) => {
  return (
    <React.Fragment>
      <h1
        className='spectrum-Heading spectrum-Heading--L spectrum-Heading--light'
        css={css`
          margin-bottom: var(
            --spectrum-global-dimension-size-400,
            var(--spectrum-alias-size-400)
          );
        `}
      >
        {name}
      </h1>
      <p
        className='spectrum-Body--M'
        css={css`
          margin-bottom: 60px;
        `}
      >
        {description}
      </p>
    </React.Fragment>
  )
}

Tag.propTypes = {
  spec: PropTypes.object
}

export default Tag
