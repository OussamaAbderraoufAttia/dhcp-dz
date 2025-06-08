'use client';

import { useTheme } from 'next-themes';
import { useRef, useState, useEffect } from 'react';
import Map, { MapRef } from 'react-map-gl';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MAX_ZOOM = 18;
const MIN_ZOOM = 4;
const INITIAL_VIEW_STATE = {
  latitude: 36.70503,
  longitude: 3.173916,
  zoom: 13,
};

const mapboxToken =
  'pk.eyJ1Ijoib3Vzc2FtYWFiZGVycmFvdWYtYXR0aWEiLCJhIjoiY2x6NjN2eHFzMDgxYzJqcXVidjR0bG45aSJ9.eGvwSkDqBnB6TAdcBj67pg';

export default function Location() {
  const [currentZoom, setCurrentZoom] = useState<number>(INITIAL_VIEW_STATE.zoom);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);
  const mapRef = useRef<MapRef>(null);
  const { theme } = useTheme();

  // Compute the style URL based on theme
  const darkStyle = 'mapbox://styles/mapbox/dark-v11';
  const lightStyle = 'mapbox://styles/mapbox/light-v11';

  // Update map style dynamically when theme changes
  useEffect(() => {
    if (mapRef.current && isMapLoaded) {
      const styleURL = theme === 'dark' ? darkStyle : lightStyle;
      mapRef.current?.getMap().setStyle(styleURL);
    }
  }, [theme, isMapLoaded]);

  useEffect(() => {
    if (isMapLoaded) {
      try {
        setCurrentZoom(mapRef.current?.getZoom() || INITIAL_VIEW_STATE.zoom);
      } catch (error) {
        console.error('Error during map initialization:', error);
      }
    }
  }, [isMapLoaded]);

  const handleZoom = (zoomIn: boolean) => {
    if (zoomIn) {
      setCurrentZoom((prevZoom) => Math.min(prevZoom + 1, MAX_ZOOM));
      mapRef.current?.zoomIn();
    } else {
      setCurrentZoom((prevZoom) => Math.max(prevZoom - 1, MIN_ZOOM));
      mapRef.current?.zoomOut();
    }
  };

  return (
    <div className="relative w-full h-28 bg-[#292929] rounded-lg shadow-lg overflow-hidden">
      {mapboxToken ? (
        <Map
          mapboxAccessToken={mapboxToken}
          mapStyle={theme === 'dark' ? darkStyle : lightStyle}
          ref={mapRef}
          initialViewState={INITIAL_VIEW_STATE}
          maxZoom={MAX_ZOOM}
          minZoom={MIN_ZOOM}
          onLoad={() => setIsMapLoaded(true)}
          attributionControl={false}
          style={{ height: '100%', width: '100%' }}
        >
          {isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-between p-2">
              <button
                className="p-2 bg-[#6b7280] text-white rounded-md shadow-md"
                aria-label="Zoom Out"
                onClick={() => handleZoom(false)}
                disabled={currentZoom === MIN_ZOOM}
              >
                <FaMinus />
              </button>
              <button
                className="p-2 bg-[#6b7280] text-white rounded-md shadow-md"
                aria-label="Zoom In"
                onClick={() => handleZoom(true)}
                disabled={currentZoom === MAX_ZOOM}
              >
                <FaPlus />
              </button>
            </div>
          )}
        </Map>
      ) : (
        <div className="text-center text-red-500">Mapbox token is missing</div>
      )}
    </div>
  );
}
