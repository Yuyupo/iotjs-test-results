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

export default class SizeTable extends React.Component {

  constructor(props) {
    super(props);

    this.getSizeData = profile => {
      const { info } = this.props;
      const sizes = info[`${profile}-profile`];

      const na = 'n/a';

      const bss = parseInt(sizes.bss) || 0;
      const data = parseInt(sizes.data) || 0;
      const rodata = parseInt(sizes.rodata) || 0;
      const text = parseInt(sizes.text) || 0;

      const binary = data + rodata + text;

      return {
        binary: binary || na,
        text: text || na,
        bss: bss || na,
        data: data || na,
        rodata: rodata || na,
      };
    };
  }

  render() {
    const target = this.getSizeData('target');
    const minimal = this.getSizeData('minimal');
    const trs = Object.keys(target).map((key, i) => {
      return (
        <tr key={`${key}-${i}`}>
          <th scope="row">{key}</th>
          <td className="text-right">{target[key]} B</td>
          <td className="text-right">{minimal[key]} B</td>
        </tr>
      );
    });

    return (
      <div className="table-responsive-md">
        <p className="h6">Measurement&apos;s size information</p>
        <table className="table table-sm table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" className="text-right">Target Profile</th>
              <th scope="col" className="text-right">Minimal Profile</th>
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    );
  }
}

SizeTable.propTypes = {
  info: PropTypes.object.isRequired,
};
