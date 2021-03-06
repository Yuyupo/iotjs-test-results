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

import { connect } from 'react-redux';
import Device from './device.component';
import {
  fetchDeviceDataMeasurements,
  getDeviceDataLoading, getDeviceDataMeasurements, getDeviceDataError,
} from '../../state/device/data';
import { resetDevicePagination } from '../../state/device/pagination';

const mapStateToProps = state => ({
  loading: getDeviceDataLoading(state),
  measurements: getDeviceDataMeasurements(state),
  error: getDeviceDataError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchMeasurements: (project, device) => dispatch(fetchDeviceDataMeasurements(project, device)),
  resetPagination: () => dispatch(resetDevicePagination()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Device);
