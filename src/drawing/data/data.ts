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

import { ControlPosition } from "../../maps/controls/controlposition";
import { MVCObject } from "../../maps/event/mvcobject";
import { Feature } from "./data.feature";
import { DataPolygon } from "./data.polygon";

export class Data extends MVCObject implements google.maps.Data {
  constructor(opt?: google.maps.Data.DataOptions | null) {
    super();
  }
  public static Feature = vi
    .fn()
    .mockImplementation(
      (
        options?: google.maps.Data.FeatureOptions | null
      ): google.maps.Data.Feature => new Feature(options)
    );
  public static Polygon = vi
    .fn()
    .mockImplementation(
      (
        elements?:
          | google.maps.MVCArray<google.maps.MVCArray<google.maps.LatLng>>
          | google.maps.MVCArray<google.maps.LatLng>
          | google.maps.LatLng[][]
          | google.maps.LatLngLiteral[][]
          | google.maps.LatLng[]
          | google.maps.LatLngLiteral[]
      ): google.maps.Data.Polygon => new DataPolygon(elements)
    );
  public add = vi
    .fn()
    .mockImplementation(
      (
        feature?:
          | google.maps.Data.Feature
          | null
          | google.maps.Data.FeatureOptions
      ): google.maps.Data.Feature => {
        return null;
      }
    );
  public addGeoJson = vi
    .fn()
    .mockImplementation(
      (
        geoJson: object,
        options?: google.maps.Data.GeoJsonOptions | null
      ): google.maps.Data.Feature[] => {
        return [];
      }
    );
  public contains = vi
    .fn()
    .mockImplementation((feature: google.maps.Data.Feature): boolean => {
      return false;
    });
  public forEach = vi
    .fn()
    .mockImplementation(
      (callback: (a: google.maps.Data.Feature) => void): void => {
        return null;
      }
    );
  public getControlPosition = vi
    .fn()
    .mockImplementation((): google.maps.ControlPosition => {
      return ControlPosition.BOTTOM_CENTER;
    });
  public getControls = vi.fn().mockImplementation((): string[] | null => {
    return null;
  });
  public getDrawingMode = vi.fn().mockImplementation((): string[] | null => {
    return null;
  });
  public getFeatureById = vi
    .fn()
    .mockImplementation(
      (id: number | string): google.maps.Data.Feature | undefined => {
        return undefined;
      }
    );
  public getMap = vi.fn().mockImplementation((): google.maps.Map | null => {
    return null;
  });
  public getStyle = vi
    .fn()
    .mockImplementation(
      ():
        | google.maps.Data.StylingFunction
        | google.maps.Data.StyleOptions
        | null => {
        return null;
      }
    );
  public loadGeoJson = vi
    .fn()
    .mockImplementation(
      (
        url: string,
        options?: google.maps.Data.GeoJsonOptions | null,
        callback?: (a: google.maps.Data.Feature[]) => void
      ): void => {
        return null;
      }
    );
  public overrideStyle = vi
    .fn()
    .mockImplementation(
      (
        feature: google.maps.Data.Feature,
        style: google.maps.Data.StyleOptions
      ): void => {
        return null;
      }
    );
  public remove = vi
    .fn()
    .mockImplementation((feature: google.maps.Data.Feature): void => {
      return null;
    });
  public revertStyle = vi
    .fn()
    .mockImplementation((feature?: google.maps.Data.Feature | null): void => {
      return null;
    });
  public setControlPosition = vi
    .fn()
    .mockImplementation(
      (controlPosition: google.maps.ControlPosition): void => {
        return null;
      }
    );
  public setControls = vi
    .fn()
    .mockImplementation((controls: string[] | null): void => {
      return null;
    });
  public setDrawingMode = vi
    .fn()
    .mockImplementation((drawingMode: string | null): void => {
      return null;
    });
  public setMap = vi
    .fn()
    .mockImplementation((map: google.maps.Map | null): void => {
      return null;
    });
  public setStyle = vi
    .fn()
    .mockImplementation(
      (
        style:
          | google.maps.Data.StylingFunction
          | google.maps.Data.StyleOptions
          | null
      ): void => {
        return null;
      }
    );
  public toGeoJson = vi
    .fn()
    .mockImplementation((callback: (a: object) => void): void => {
      return null;
    });
}
