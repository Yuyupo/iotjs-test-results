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
import DeviceList from './device-list.component';
import { fetchOverviewResults, getOverviewLoading, getOverviewResults } from '../../../state/overview/device-list';

const mapStateToProps = state => ({
  loading: getOverviewLoading(state),
  results: getOverviewResults(state),
});

const mapDispatchToProps = dispatch => ({
  fetchResults: (project, devices) => dispatch(fetchOverviewResults(project, devices)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
