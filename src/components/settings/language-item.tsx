import { MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';

import type { OptionType } from '@/components/ui';
import { Options, useModal } from '@/components/ui';
import { useSelectedLanguage, useSelectedTheme } from '@/lib';
import { translate } from '@/lib';
import type { Language } from '@/lib/i18n/resources';

import { Item } from './item';

export const LanguageItem = () => {
  const { language, setLanguage } = useSelectedLanguage();
  const modal = useModal();
  const onSelect = React.useCallback(
    (option: OptionType) => {
      setLanguage(option.value as Language);
      modal.dismiss();
    },
    [setLanguage, modal]
  );

  const langs = React.useMemo(
    () => [
      { label: translate('settings.english'), value: 'en' },
      { label: translate('settings.arabic'), value: 'ar' },
    ],
    []
  );

  const selectedLanguage = React.useMemo(
    () => langs.find((lang) => lang.value === language),
    [language, langs]
  );

  const { selectedTheme } = useSelectedTheme();

  const color = selectedTheme === 'dark' ? '#fff' : '#000';

  return (
    <>
      <Item
        text="settings.language"
        icon={<MaterialIcons name="language" size={18} color={color} />}
        value={selectedLanguage?.label}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={langs}
        onSelect={onSelect}
        value={selectedLanguage?.value}
      />
    </>
  );
};
