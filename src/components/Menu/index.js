import React, { useState, useEffect } from 'react';

import { isMobile } from 'react-device-detect';

import TopMenu from './RetractableMenu';
import LateralMenu from './LateralMenu';

export default function Menu() {
  const hasWindow = typeof window !== 'undefined';

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  const [widthViewport, setWidthViewport] = useState(getWindowWidth());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWidthViewport(getWindowWidth());
      }

      window.addEventListener('resize', handleResize);
    }
  }, [hasWindow]); 

  return (
    <>
      {(widthViewport < 1025)
        ? (<TopMenu />) 
        : (<LateralMenu />)}
    </>
  );
}
