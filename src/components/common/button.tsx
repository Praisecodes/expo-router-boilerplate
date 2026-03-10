import { getMetrics } from '@/src/helpers/utils';
import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, View } from 'react-native';
import Text from "./text";

interface Props extends TouchableWithoutFeedbackProps {
  text: string,
  google?: boolean;
  outline?: boolean;
  rounded?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { onPress, text, iconLeft, disabled, iconRight, outline, rounded, loading, ...rest } = props;

  return (
    <TouchableWithoutFeedback
      {...rest}
      onPress={(e) => {
        (!disabled && !loading) && onPress?.(e);
      }}
    >
      <View
        style={[
          styles.button,
          {
            borderRadius: getMetrics(rounded ? 100 : 5),
            borderWidth: getMetrics(outline ? 1 : 0),
          }
        ]}
        className={`${!outline ? disabled ? "bg-white" : "bg-primary" : "bg-transparent"} ${(disabled || loading) && "opacity-70"} border-primary w-full flex items-center justify-center flex-row`}
      >
        {(!!iconLeft && !loading) && iconLeft}

        {!loading && (
          <Text size='15' className={`${!!outline ? "text-primary" : "text-[#1D1D1D]"}`}>
            {text}
          </Text>
        )}

        {!!loading && (
          <ActivityIndicator color={"#FFF"} size={"small"} />
        )}

        {(!!iconRight && !loading) && iconRight}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    // paddingVertical: getMetrics(15),
    height: getMetrics(50),
    paddingHorizontal: getMetrics(15),
    borderWidth: getMetrics(1),
    gap: getMetrics(10),
  }
})

export default Button;
