import React from 'react';
import { useColorScheme } from 'react-native';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export const CrowdPatient = ({ color, ...props }: SvgProps) => {
  const scheme = useColorScheme();
  const defaultColor = color || (scheme === 'dark' ? '#FFFFFF' : '#000000');

  return (
    <Svg width={24} height={24} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M45.07 34.93a10.06 10.06 0 0 0-3.63-2.32C43.34 30.8 43 28.82 43 26a5 5 0 0 0-10 0c0 2.91-.34 4.81 1.57 6.62a10 10 0 0 0-5.45 4.81 10.1 10.1 0 0 0-1.69-.81C29.34 34.81 29 32.87 29 30a5 5 0 0 0-10 0c-.05.1 0-.65 0 3a5 5 0 0 0 1.57 3.62 10.1 10.1 0 0 0-1.69.81 9.93 9.93 0 0 0-5.44-4.82C15.34 30.8 15 28.82 15 26A5 5 0 0 0 5 26c0 2.73-.36 4.79 1.57 6.62A10 10 0 0 0 0 42v1a1 1 0 0 0 1 1h13.2a13.36 13.36 0 0 0-.2 3 1 1 0 0 0 1 1h18a1 1 0 0 0 1-1 13.32 13.32 0 0 0-.2-3H47a1 1 0 0 0 1-1c0-3-0.44-5.59-2.93-8.07ZM40.5 24.35a2.93 2.93 0 0 0-2.21.94c-.61.62-2.14.36-3.21 0a3 3 0 0 1 5.42-.94ZM35 29v-1.62c4.67 1.21 4.57-1.73 6-.89V29a3 3 0 0 1-6 0Zm-8.5-.65a2.93 2.93 0 0 0-2.21.94c-.61.62-2.14.36-3.21 0a3 3 0 0 1 5.42-.94ZM21 33v-1.62c4.67 1.21 4.57-1.73 6-.89V33a3 3 0 0 1-6 0Zm-8.5-8.65a2.93 2.93 0 0 0-2.21.94c-.61.62-2.14.36-3.21 0a3 3 0 0 1 5.42-.94ZM7 29v-1.62c4.67 1.21 4.57-1.73 6-.89V29a3 3 0 0 1-6 0ZM2 42c0-8.44 11.65-11.18 15.25-3.36A10.07 10.07 0 0 0 14.84 42Zm14 4a8 8 0 0 1 16 0Zm17.16-4a9.87 9.87 0 0 0-2.4-3.34C34.35 30.86 46 33.49 46 42Z"
        fill={defaultColor}
      />
      <Path
        d="M24 22A11 11 0 1 0 13 11a11 11 0 0 0 11 11Zm0-20a9 9 0 1 1-9 9 9 9 0 0 1 9-9Z"
        fill={defaultColor}
      />
      <Path
        d="M19 14h2v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm1-4h2a1 1 0 0 0 1-1V7h2v2a1 1 0 0 0 1 1h2v2h-2a1 1 0 0 0-1 1v2h-2v-2a1 1 0 0 0-1-1h-2Z"
        fill={defaultColor}
      />
    </Svg>
  );
};
