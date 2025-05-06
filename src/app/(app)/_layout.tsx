/* eslint-disable react/no-unstable-nested-components */
import {
  faGears,
  faHospitalUser,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useMedplum } from '@medplum/react-hooks';
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { useAuth, useIsFirstTime } from '@/lib';

/* eslint-disable max-lines-per-function */
export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  const medplum = useMedplum();

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (!medplum.isAuthenticated()) {
    return <Redirect href="/login" />;
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Patients',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHospitalUser} size={28} color={color} />
          ),
          tabBarButtonTestID: 'patients-tab',
        }}
      />
      <Tabs.Screen
        name="practitioners"
        options={{
          title: 'Practitioners',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUserDoctor} size={28} color={color} />
          ),
          tabBarButtonTestID: 'practitioners-tab',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faGears} size={28} color={color} />
          ),
          tabBarButtonTestID: 'settings-tab',
        }}
      />
      {/* hide patient screen */}
      <Tabs.Screen
        name="patient/[patientId]/index"
        options={{ href: null, headerShown: false }}
      />
      {/* hide patient screen */}
      <Tabs.Screen
        name="practitioner/[practitionerId]/index"
        options={{ href: null, headerShown: false }}
      />
    </Tabs>
  );
}
