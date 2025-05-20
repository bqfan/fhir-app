import { Linking } from 'react-native';
import type { StoreApi, UseBoundStore } from 'zustand';

export function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url));
}

type WithSelectors<
  S extends UseBoundStore<StoreApi<T>>,
  T extends object,
> = S & {
  use: {
    [K in keyof T]: () => T[K];
  };
};

export const createSelectors = <T extends object>(
  store: UseBoundStore<StoreApi<T>>
): WithSelectors<typeof store, T> => {
  const typedStore = store as WithSelectors<typeof store, T>;
  typedStore.use = {} as any;

  for (const key of Object.keys(store.getState()) as (keyof T)[]) {
    typedStore.use[key] = () => store((s) => s[key]);
  }

  return typedStore;
};
