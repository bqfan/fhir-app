import React from 'react';
import { useColorScheme } from 'react-native';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export const Doctors = ({ color, ...props }: SvgProps) => {
  const scheme = useColorScheme();
  const defaultColor = color || (scheme === 'dark' ? '#FFFFFF' : '#000000');

  return (
    <Svg width={24} height={24} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M24 0C10.746 0 0 10.746 0 24s10.746 24 24 24 24-10.746 24-24S37.254 0 24 0zm0 45.45c-11.876 0-21.45-9.574-21.45-21.45S12.124 2.55 24 2.55 45.45 12.124 45.45 24 35.876 45.45 24 45.45z"
        fill={defaultColor}
      />
      <Path
        d="M24 12.3a11.7 11.7 0 1 0 11.7 11.7A11.7 11.7 0 0 0 24 12.3zm0 20.1a8.4 8.4 0 1 1 8.4-8.4 8.4 8.4 0 0 1-8.4 8.4z"
        fill={defaultColor}
      />
    </Svg>
  );
};
