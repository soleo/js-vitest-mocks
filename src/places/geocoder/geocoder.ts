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

import { __registerMockInstance } from "../../registry";

export class Geocoder implements google.maps.Geocoder {
  public geocode = vi.fn().mockImplementation(
    (
      request: google.maps.GeocoderRequest,
      callback?: (
        geocoderResult?: Array<google.maps.GeocoderResult>,
        // @ts-expect-error
        geocoderStatus: google.maps.GeocoderStatus
      ) => void
    ): Promise<google.maps.GeocoderResponse> =>
      Promise.resolve({
        results: [] as Array<google.maps.GeocoderResult>,
      })
  );

  constructor() {
    __registerMockInstance(this.constructor, this);
  }
}
