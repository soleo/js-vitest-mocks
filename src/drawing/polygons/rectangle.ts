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

import { MVCObject } from "../../maps/event/mvcobject";
import { Map_ } from "../../maps/maps/map";

export class Rectangle extends MVCObject implements google.maps.Rectangle {
  constructor(opt?: google.maps.RectangleOptions) {
    super();
  }
  public getBounds = vi.fn(() => null);
  public getDraggable = vi.fn(() => true);
  public getEditable = vi.fn(() => true);
  public getMap = vi.fn(() => new Map_(null));
  public getVisible = vi.fn(() => true);
  public setBounds = vi.fn(
    (bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral) => {}
  );
  public setDraggable = vi.fn((draggable: boolean) => {});
  public setEditable = vi.fn((editable: boolean) => {});
  public setMap = vi.fn((map: google.maps.Map | null) => {});
  public setOptions = vi.fn(
    (options: google.maps.RectangleOptions | null) => {}
  );
  public setVisible = vi.fn((visible: boolean) => {});
}
