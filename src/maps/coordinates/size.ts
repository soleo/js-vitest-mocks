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

export class Size implements google.maps.Size {
  public height: number;
  public width: number;
  constructor(
    width: number,
    height: number,
    widthUnit?: string,
    heightUnit?: string
  ) {
    this.width = width;
    this.height = height;
  }
  public equals(other: Size): boolean {
    return other.height === this.height && other.width === this.width;
  }
  public toString = vi.fn().mockImplementation((): string => {
    return "";
  });
}
