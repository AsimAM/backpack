/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { render } from '@testing-library/react';

import BpkGridRow from './BpkGridRow';

describe('BpkGridRow', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<BpkGridRow>Contents</BpkGridRow>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with "className" attribute', () => {
    const { asFragment } = render(
      <BpkGridRow className="my-custom-class">Contents</BpkGridRow>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with arbitrary attributes', () => {
    const { asFragment } = render(
      <BpkGridRow
        data-arbitrary-1="my-arbitrary-data"
        data-arbitrary-2="my-arbitrary-data"
      >
        Contents
      </BpkGridRow>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
