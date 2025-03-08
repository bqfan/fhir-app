import React from 'react';
import { useColorScheme } from 'react-native';

import type { OptionType } from '@/components/ui';
import { colors, Options, useModal } from '@/components/ui';
import { Server as ServerIcon } from '@/components/ui/icons';
import type { ColorSchemeType } from '@/lib';
import { translate, useSelectedTheme } from '@/lib';

import { Item } from './item';

export const ServerItem = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const modal = useModal();

  const onSelect = React.useCallback(
    (option: OptionType) => {
      setSelectedTheme(option.value as ColorSchemeType);
      modal.dismiss();
    },
    [setSelectedTheme, modal]
  );

  const themes = React.useMemo(
    () => [
      { label: `${translate('settings.server.medplum')}`, value: 'dark' },
      { label: `${translate('settings.server.aidbox')}`, value: 'light' },
      { label: `${translate('settings.server.hapi-fhir')}`, value: 'system' },
    ],
    []
  );

  const theme = React.useMemo(
    () => themes.find((t) => t.value === selectedTheme),
    [selectedTheme, themes]
  );

  const colorScheme = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[400] : colors.neutral[500];

  return (
    <>
      <Item
        text="settings.server.title"
        icon={<ServerIcon color={iconColor} />}
        value={theme?.label}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={themes}
        onSelect={onSelect}
        value={theme?.value}
      />
    </>
  );
};
