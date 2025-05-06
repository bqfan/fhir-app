import React from 'react';

import OrganizationList from '@/components/organization-list';
import { FocusAwareStatusBar, View } from '@/components/ui';

export default function Organizations() {
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <OrganizationList />
    </View>
  );
}
