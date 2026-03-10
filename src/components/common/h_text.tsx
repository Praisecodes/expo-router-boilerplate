import { getMetrics } from '@/src/helpers/utils';
import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  size: "header1" | "header2" | "50"
}

const HText: React.FC<Props> = (props) => {
  const { size, ...rest } = props;

  const FONT_SIZE = useMemo(() => {
    const style = { fontFamily: "avenir-bold" }
    switch (size) {
      case "header1":
        return ({
          ...style,
          fontSize: getMetrics(25),
          // lineHeight: getMetrics(32),
        });
      case "header2":
        return ({
          ...style,
          fontSize: getMetrics(20),
          // lineHeight: getMetrics(28),
        });
      case "50":
        return ({
          ...style,
          fontSize: getMetrics(50),
          // lineHeight: getMetrics(28),
        });
    }
  }, [size]);

  return (
    <Text
      {...rest}
      style={{
        ...FONT_SIZE,
      }}
    />
  )
}

export default HText;
