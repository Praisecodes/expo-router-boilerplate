import { getMetrics } from '@/src/helpers/utils';
import React, { useMemo } from 'react';
import { Text as RNText, TextProps } from 'react-native';

interface Props extends TextProps {
  header1?: boolean;
  header2?: boolean;
  size?: "15" | "18" | "12" | "13";
  weight?: "bold" | "medium";
}

const Text: React.FC<Props> = (props) => {
  const { size, weight, ...rest } = props;

  const FONT_SIZE = useMemo(() => {
    const style = {
    }

    switch (size) {
      case "12":
        return ({
          ...style,
          fontSize: getMetrics(12),
        });
      case "13":
        return ({
          ...style,
          fontSize: getMetrics(13),
        });
      case "15":
        return ({
          ...style,
          fontSize: getMetrics(15),
        });
      case "18":
        return ({
          ...style,
          fontSize: getMetrics(18),
          // lineHeight: getMetrics(26),
        });
      default:
        return ({
          ...style,
          fontSize: getMetrics(16),
          lineHeight: getMetrics(24),
        });
    }
  }, [size]);

  const FONT_WEIGHT = useMemo(() => {
    switch (weight) {
      case "bold":
        return ({
          fontFamily: "avenir-bold"
        });
      case "medium":
        return ({
          fontFamily: "avenir-medium"
        });
      default:
        return ({
          fontFamily: "avenir"
        });
    }
  }, [weight]);

  return (
    <RNText
      {...rest}
      style={[rest.style, {
        ...FONT_SIZE,
        ...FONT_WEIGHT,
      }]}
    />
  )
}

export default Text;
