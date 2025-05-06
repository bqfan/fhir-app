import React from 'react';

import PractitionerList from '@/components/practitioner-list';
import { FocusAwareStatusBar, View } from '@/components/ui';

export default function Practitioners() {
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <PractitionerList />
    </View>
  );
}
