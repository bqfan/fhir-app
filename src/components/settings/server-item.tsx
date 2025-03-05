import { Env } from '@env';
import React from 'react';

import type { OptionType } from '@/components/ui';
import { Options, useModal } from '@/components/ui';
import type { ColorSchemeType, TxKeyPath } from '@/lib';
import { translate, useSelectedTheme } from '@/lib';

import { Item } from './item';

export const ServerItem = () => {
  console.log(Object.keys(Env.FHIR_SERVERS));
  // console.log(Env.FHIR_SERVERS.medplum.baseUrl); // http://localhost:3000 (dev)
  // console.log(Env.FHIR_SERVERS.aidbox.clientId);
  const _server_names = Object.keys(Env.FHIR_SERVERS);
  _server_names.map((server) => console.log(server));

  _server_names.map((_server_name) =>
    console.log({
      label: `${translate(`settings.server.${_server_name}` as TxKeyPath)} 🌙`,
      value: _server_name,
    })
  );

  const _servers_ = _server_names.map((_server_name) => ({
    label: `${translate(`settings.server.${_server_name}` as TxKeyPath)} 🌙`,
    value: _server_name,
  }));

  console.log(_servers_);
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const modal = useModal();

  const onSelect = React.useCallback(
    (option: OptionType) => {
      setSelectedTheme(option.value as ColorSchemeType);
      modal.dismiss();
    },
    [setSelectedTheme, modal]
  );

  const servers = React.useMemo(
    () => _servers_,
    //   [
    //   { label: `${translate('settings.server.medplum')} 🌙`, value: 'dark' },
    //   { label: `${translate('settings.server.aidbox')} 🌞`, value: 'light' },
    // ],
    []
  );

  const server = React.useMemo(
    () => servers.find((t) => t.value === selectedTheme),
    [selectedTheme, servers]
  );

  return (
    <>
      <Item
        text="settings.server.title"
        value={server?.label}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={servers}
        onSelect={onSelect}
        value={server?.value}
      />
    </>
  );
};
