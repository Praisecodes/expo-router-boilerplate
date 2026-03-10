import { EyeCloseOutlineIcon, EyeOutlineIcon } from '@/assets/icons';
import { getMetrics } from '@/src/helpers/utils';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import Text from './text';

interface Props extends TextInputProps {
  label?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  alt?: boolean;
}

const Input: React.FC<Props> = (props) => {
  const { secureTextEntry, iconLeft, iconRight, label, alt, ...rest } = props;
  const [textHidden, setTextHidden] = useState<boolean>(secureTextEntry ?? false);

  const toggleInputVisibility = () => setTextHidden(!textHidden);

  return (
    <View style={[{ gap: getMetrics(5) }]}>
      {label && (
        <Text size='15' className={`pl-3 text-white`}>
          {label}
        </Text>
      )}

      <View
        style={{
          paddingHorizontal: getMetrics(8),
          borderRadius: getMetrics(5),
          gap: getMetrics(10),
        }}
        className={`flex ${alt ? "bg-[#101E36]" : "bg-[#2B3A55]"} ${rest.readOnly && "opacity-60"} flex-row items-center`}
      >
        {!!iconLeft && iconLeft}

        <TextInput
          {...rest}
          secureTextEntry={textHidden}
          className={`flex-1 items-center font-avenir text-white flex`}
          style={{
            height: !!rest.multiline ? getMetrics(97) : getMetrics(50),
            fontSize: getMetrics(15),
          }}
          placeholderTextColor={'#868484'}
          placeholder={secureTextEntry ? (textHidden ? "********" : "Password") : rest.placeholder}
        />

        {!!secureTextEntry && (
          <TouchableOpacity onPress={toggleInputVisibility}>
            {textHidden ?
              (<EyeOutlineIcon
                color={'#fff'}
              />) :
              (<EyeCloseOutlineIcon
                color={'#fff'}
              />)}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({});
