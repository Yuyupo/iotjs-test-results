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

export default class Header extends React.Component {
  render() {
    const { device, project } = this.props;
    const imgStyle = {
      height: '120px',
    };

    return (
      <div className="row my-2">
        <div className="col-auto">
          <img
            src={require(`../../../assets/devices/${device.key}.jpg`)}
            className="img img-fluid rounded"
            style={imgStyle}
            alt={device.name}
            title={device.name} />
        </div>
        <div className="col">
          <p className="mt-1">
            <span className="font-weight-bold">Test device: </span>
            <a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
          </p>
          <p>
            <span className="font-weight-bold">Platform: </span>
            <a href={device.platform.link} target="_blank" rel="noopener noreferrer">{device.platform.name}</a>
          </p>
          <p>
            <span className="font-weight-bold">Repository: </span>
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name} master branch</a>
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  device: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};
