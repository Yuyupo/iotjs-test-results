/*
 * Copyright 2018 Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Display3 from '../../common/display-3.component';
import Subtitle from '../../common/subtitle.component';
import Jumbotron from '../../common/jumbotron.component';

export default class Intro extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="info">

        <Display3>{title}</Display3>
        <Subtitle>Automated correctness and performance test results</Subtitle>
        <Jumbotron>
          <p>
            The purpose of the project is to run the official {title} test-suite on different platforms.
            The testing happens once a day (at UTC 17:00) using the latest master.
          </p>
          <p>
            Since {title} focuses on low footprint devices, the run-time memory consumption is tracked
            during the test execution. This means that each passed tests have information
            about their peak usage of the stack and the heap memory areas.
            The size of the compiled {title} is also saved.
          </p>
          <p>
            The collected values are visualized on charts that help to observe how {title} evolves day by day.
            If you are interested in a platform, please choose one of the options below.
          </p>
        </Jumbotron>

      </div>
    );
  }
}

Intro.propTypes = {
  title: PropTypes.string.isRequired,
};
