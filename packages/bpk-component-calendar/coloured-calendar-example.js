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

/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { action } from 'bpk-storybook-utils';

import {
  BpkCalendarGrid,
  BpkCalendarGridHeader,
  BpkCalendarDate,
  CELL_TYPES,
  composeCalendar,
  withCalendarState,
  CustomPropTypes,
  CALENDAR_SELECTION_TYPE,
} from './index';

const prices = [
  125, 56, 75, 57, 78, 92, 133, 90, 148, 80, 122, 67, 70, 123, 77, 66, 64, 56,
  105, 138, 52, 70, 106, 77, 66, 64, 56, 105, 138, 52, 70, 106,
];

const MyCalendarDate = (props) => {
  const day = props.date.getDate();
  const price = prices[day - 1];

  let cell = CELL_TYPES.default;
  if (price >= 100) {
    cell = CELL_TYPES.negative;
  } else if (price >= 75) {
    cell = CELL_TYPES.neutral;
  } else if (price < 60 && price <= 74) {
    cell = CELL_TYPES.positive;
  }

  return <BpkCalendarDate cellType={cell} price={price} {...props} />;
};

const StatefulCalendar = withCalendarState(
  composeCalendar(null, BpkCalendarGridHeader, BpkCalendarGrid, MyCalendarDate),
);

class ColoredCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: new Date(),
      },
    };
  }

  render() {
    return (
      <StatefulCalendar
        {...this.props}
        onDateSelect={(date) => {
          this.setState({
            selectionConfiguration: {
              type: this.props.selectionConfiguration.type,
              date,
            },
          });
          action('Selected day')(date);
        }}
        selectionConfiguration={this.state.selectionConfiguration}
        onMonthChange={action('Changed month')}
      />
    );
  }
}

ColoredCalendar.propTypes = {
  selectTodaysDate: PropTypes.bool,
  selectionConfiguration: CustomPropTypes.SelectionConfiguration,
};

ColoredCalendar.defaultProps = {
  selectTodaysDate: true,
  selectionConfiguration: {
    type: CALENDAR_SELECTION_TYPE.single,
    date: new Date(),
  },
};

export default ColoredCalendar;
