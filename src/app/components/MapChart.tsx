import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import ReactTooltip from 'react-tooltip';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const data = [
  { country: 'India', value: 5 },
  { country: 'United States', value: 3 },
  { country: 'Canada', value: 2 },
  { country: 'Germany', value: 1 },
];

const MapChart = () => {
  return (
    <>
      <ComposableMap data-tip="">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.country === geo.properties.NAME);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? (d.value > 4 ? '#003f5c' : d.value > 1 ? '#2f4b7c' : '#a3b8d4') : '#e0e0e0'}
                  data-tip={d ? `${d.country}: ${d.value}` : ''}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;
