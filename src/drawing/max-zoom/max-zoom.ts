/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import { __registerMockInstance } from "../../registry";

export class MaxZoomService implements google.maps.MaxZoomService {
  public getMaxZoomAtLatLng = vi.fn().mockImplementation(
    (
      latLng: google.maps.LatLng | google.maps.LatLngLiteral,
      callback?: (maxZoomResult: google.maps.MaxZoomResult) => void
    ): Promise<google.maps.MaxZoomResult> =>
      // @ts-expect-error
      Promise.resolve({
        zoom: 0,
      })
  );

  constructor() {
    __registerMockInstance(this.constructor, this);
  }
}
