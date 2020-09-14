/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import '@spectrum-css/popover'
import classNames from 'classnames'

const Popover = forwardRef(
  ({ isOpen, children, variant, isQuiet, className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden={!isOpen}
      css={css`
        display: flex;
        min-width: var(--spectrum-global-dimension-size-800);
        width: auto;
        z-index: 100;
        max-height: calc(100vh - var(--spectrum-global-dimension-size-2400));
        overflow: auto;
      `}
      className={classNames(
        className,
        'spectrum-Popover',
        'spectrum-Popover--bottom',
        { 'is-open': isOpen },
        { 'spectrum-Dropdown-popover': variant === 'picker' },
        { 'spectrum-Dropdown-popover--quiet': variant === 'picker' && isQuiet }
      )}
      {...props}
    >
      {children}
    </div>
  )
)

Popover.propTypes = {
  variant: PropTypes.string,
  isOpen: PropTypes.bool,
  isQuiet: PropTypes.bool
}

export { Popover }
