/*
  Copyright 2015 Skippbox, Ltd

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
import Colors from 'styles/Colors';

export default class ClustersUtils {

  static colorForStatus(status) {
    switch (status) {
      case Constants.Status.UP:
        return Colors.GREEN;
      case Constants.Status.DOWN:
        return Colors.RED;
      default:
        return Colors.GRAY;
    }
  }

  static textForStatus(status) {
    switch (status) {
      case Constants.Status.UP:
        return intl('status_up');
      case Constants.Status.DOWN:
        return intl('status_down');
      default:
        return intl('status_checking');
    }
  }

}