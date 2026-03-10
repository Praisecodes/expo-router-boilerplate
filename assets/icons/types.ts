import {
  ClipPathProps,
  GProps,
  PathProps,
  RectProps,
  SvgProps
} from "react-native-svg";

interface IconProps {
  svgProps?: SvgProps;
  pathProps?: PathProps;
  gProps?: GProps;
  clipPathProps?: ClipPathProps;
  rectProps?: RectProps;
  color?: string;
}

export {
  IconProps
};
