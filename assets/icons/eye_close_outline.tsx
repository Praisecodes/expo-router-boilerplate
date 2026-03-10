import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

interface Props extends IconProps { }

const EyeCloseOutlineIcon: React.FC<Props> = ({ svgProps, pathProps, color }) => {
  return (
    <Svg {...svgProps} width={svgProps?.width ?? 20} height={svgProps?.height ?? 20} fill={svgProps?.fill ?? "none"} viewBox={svgProps?.viewBox ?? "0 0 20 20"}>
      <Path
        {...pathProps}
        d="M8.9415 4.22758C9.29281 4.18691 9.64618 4.16659 9.99984 4.16675C13.8865 4.16675 16.9998 6.58592 18.3332 10.0001C18.0104 10.8305 17.5743 11.6124 17.0373 12.3234M5.43317 5.43258C3.73317 6.47008 2.4165 8.07758 1.6665 10.0001C2.99984 13.4142 6.11317 15.8334 9.99984 15.8334C11.6099 15.8419 13.1908 15.4034 14.5665 14.5667M8.23317 8.23342C8.001 8.46558 7.81684 8.7412 7.69119 9.04454C7.56555 9.34788 7.50088 9.673 7.50088 10.0013C7.50088 10.3297 7.56555 10.6548 7.69119 10.9581C7.81684 11.2615 8.001 11.5371 8.23317 11.7692C8.46534 12.0014 8.74096 12.1856 9.0443 12.3112C9.34764 12.4369 9.67275 12.5015 10.0011 12.5015C10.3294 12.5015 10.6545 12.4369 10.9579 12.3112C11.2612 12.1856 11.5368 12.0014 11.769 11.7692"
        stroke={color ?? "#FB9848"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        {...pathProps}
        d="M3.33301 3.33337L16.6663 16.6667"
        stroke={color ?? "#FB9848"}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default EyeCloseOutlineIcon;
