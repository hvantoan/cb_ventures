'use client';

import { useLayoutEffect, useState } from 'react';

export const useResizeObserver = (elementId: string) => {
  const [dimensions, setDimensions] = useState<DOMRectReadOnly | null>(null);

  useLayoutEffect(() => {
    const element = document.getElementById(elementId);

    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [elementId]);

  return dimensions;
};
