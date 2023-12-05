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

import { StreetViewPanorama } from "../../street-view/rendering/panorama";
import { LatLng, LatLngBounds } from "../coordinates/latlng";
import { MapsEventListener } from "../event/event";
import { MVCObject } from "../event/mvcobject";
import { FeatureLayer } from "./featurelayer";
import { ControlPosition } from "../controls/controlposition";

export class Map_ extends MVCObject implements google.maps.Map {
  public controls: Array<google.maps.MVCArray<HTMLElement>>;
  public data: google.maps.Data;
  public mapTypes: google.maps.MapTypeRegistry;
  public overlayMapTypes: google.maps.MVCArray<google.maps.MapType>;

  public getDatasetFeatureLayer = vi.fn(
    (datasetId: string) => new FeatureLayer()
  );

  public getFeatureLayer = vi.fn(
    (featureType: google.maps.FeatureType) => new FeatureLayer()
  );

  public getMapCapabilities = vi.fn(() => {
    return {
      isAdvancedMarkersAvailable: false,
      isDataDrivenStylingAvailable: false,
    };
  });

  public fitBounds = vi
    .fn()
    .mockImplementation(
      (
        bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
        padding?: number | google.maps.Padding
      ): void => {
        return null;
      }
    );
  public getBounds = vi.fn().mockImplementation(() => new LatLngBounds());
  public getCenter = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new LatLng({ lat: 0, lng: 0 })
    );
  public getClickableIcons = vi.fn().mockImplementation((): boolean => false);
  public getDiv = vi.fn().mockImplementation((): Element => {
    return vi.fn() as unknown as Element;
  });
  public getHeading = vi.fn().mockImplementation((): number => 0);
  public getMapTypeId = vi
    .fn()
    .mockImplementation(
      (): google.maps.MapTypeId => google.maps.MapTypeId.ROADMAP
    );
  public getProjection = vi
    .fn()
    .mockImplementation((): google.maps.Projection | null => vi.fn() as null);
  public getRenderingType = vi
    .fn()
    .mockImplementation(
      (): google.maps.RenderingType => google.maps.RenderingType.RASTER
    );
  public getStreetView = vi
    .fn()
    .mockImplementation(() => new StreetViewPanorama());
  public getTilt = vi.fn().mockImplementation((): number => 0);
  public getZoom = vi.fn().mockImplementation((): number => 0);
  public moveCamera = vi
    .fn()
    .mockImplementation((cameraOptions: google.maps.CameraOptions): void => {
      return null;
    });
  public panBy = vi.fn().mockImplementation((x: number, y: number): void => {
    return null;
  });
  public panTo = vi
    .fn()
    .mockImplementation(
      (latLng: google.maps.LatLng | google.maps.LatLngLiteral): void => {
        return null;
      }
    );
  public panToBounds = vi
    .fn()
    .mockImplementation(
      (
        latLngBounds:
          | google.maps.LatLngBounds
          | google.maps.LatLngBoundsLiteral,
        padding?: number | google.maps.Padding
      ): void => {
        return null;
      }
    );
  public setCenter = vi
    .fn()
    .mockImplementation(
      (latlng: google.maps.LatLng | google.maps.LatLngLiteral): void => {
        return null;
      }
    );
  public setHeading = vi.fn().mockImplementation((heading: number): void => {
    return null;
  });
  public setMapTypeId = vi
    .fn()
    .mockImplementation((mapTypeId: google.maps.MapTypeId | string): void => {
      return null;
    });
  public setOptions = vi
    .fn()
    .mockImplementation((options: google.maps.MapOptions): void => {
      return null;
    });
  public setStreetView = vi
    .fn()
    .mockImplementation((panorama: google.maps.StreetViewPanorama): void => {
      return null;
    });
  public setTilt = vi.fn().mockImplementation((tilt: number): void => {
    return null;
  });
  public setZoom = vi.fn().mockImplementation((zoom: number): void => {
    return null;
  });
  public setClickableIcons = vi
    .fn()
    .mockImplementation((clickable: boolean): void => {
      return null;
    });

  constructor(mapDiv: Element | null, opts?: google.maps.MapOptions) {
    super();
    this.data = new google.maps.Data();

    this.controls = [];

    for (const [_, value] of Object.entries(ControlPosition)) {
      this.controls[value] = new google.maps.MVCArray<HTMLElement>();
    }

    this.mapTypes = new google.maps.MVCObject();
    this.overlayMapTypes = new google.maps.MVCArray();
  }
}
