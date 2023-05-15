import React, { createContext, useState, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";

import { BREAKPOINTS } from "../const";

type Props = {
  children: React.ReactNode;
};

type MediaQueryContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isPC: boolean;
  initLoading: boolean;
};

export const MediaQueryContext = createContext<MediaQueryContextType>({
  isMobile: false,
  isTablet: false,
  isPC: false,
  initLoading: true,
});
export const MediaQueryProvider = ({ children }: Props) => {
  const [isMobile, isTablet, isPC] = useMediaQuery([
    `(max-width: ${BREAKPOINTS.mobile - 1}px)`,
    `(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${
      BREAKPOINTS.tablet - 1
    }px)`,
    `(min-width: ${BREAKPOINTS.tablet}px)`,
  ]);
  const [initLoading, setInitLoading] = useState(true);

  useEffect(() => {
    if (isMobile || isTablet || isPC) setInitLoading(false);
  }, [isMobile, isTablet, isPC]);

  return (
    <MediaQueryContext.Provider
      value={{ isMobile, isTablet, isPC, initLoading }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};
export const useMediaQueryContext = () => React.useContext(MediaQueryContext);
