import { extendTheme } from "@chakra-ui/react";
import { BREAKPOINTS } from "./const";

/** Chakra UIのテーマを上書きする */
/** 参考：https://chakra-ui.com/docs/styled-system/theme */

const breakpoints = ["0px", `${BREAKPOINTS.mobile}`, `${BREAKPOINTS.tablet}`];

const theme = extendTheme({
  breakpoints,
  fonts: {
    body: `-apple-system, "BlinkMacSystemFont", "Hiragino Kaku Gothic ProN","Hiragino Sans" sans-serif`,
  },
});

export default theme;
