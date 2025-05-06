import type { Organization } from 'fhir/r4';
import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

interface OrganizationScreenProps {
  organization: Organization;
}

/* eslint-disable max-lines-per-function */
const OrganizationScreen = ({ organization }: OrganizationScreenProps) => {
  return (
    <ScrollView className="flex-1 p-4">
      {/* Patient Details Section */}
      <View className="px-1 pb-6 pt-2">
        <Text className="mb-2 text-lg font-bold dark:text-gray-100">
          Organization Details
        </Text>
        <View className="flex-row flex-wrap gap-y-4 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          {/* Name */}
          <View className="w-1/2 pr-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Name
            </Text>
            <Text className="text-base font-medium dark:text-gray-200">
              {organization?.name}
            </Text>
          </View>

          {/* Identifier */}
          <View className="w-1/2 pl-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Identifier
            </Text>
            <Text className="text-base dark:text-gray-300">
              {organization?.identifier?.[0]?.value || 'N/A'}
            </Text>
          </View>

          {/* Type */}
          <View className="w-1/2 pr-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Type
            </Text>
            <Text className="text-base dark:text-gray-300">
              {organization?.type?.[0]?.text || 'N/A'}
            </Text>
          </View>

          {/* Address */}
          <View className="w-1/2 pl-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Address
            </Text>
            <Text className="text-base dark:text-gray-300">
              {organization?.address?.[0]?.line?.join(', ')}
              {organization?.address?.[0]?.city &&
                `, ${organization?.address?.[0]?.city}`}
              {organization?.address?.[0]?.state &&
                `, ${organization?.address?.[0]?.state}`}
              {organization?.address?.[0]?.postalCode &&
                `, ${organization?.address?.[0]?.postalCode}`}
              {organization?.address?.[0]?.country &&
                `, ${organization?.address?.[0]?.country}`}
            </Text>
          </View>

          {/* Phone */}
          <View className="w-1/2 pr-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Phone
            </Text>
            <Text className="text-base dark:text-gray-300">
              {organization?.telecom?.[0]?.value || 'N/A'}
            </Text>
          </View>

          {/* Status */}
          <View className="w-1/2 pl-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Status
            </Text>
            <View className="flex-row items-center gap-2">
              <View
                className={`size-3 rounded-full ${
                  organization?.active
                    ? 'bg-green-500 dark:bg-green-400'
                    : 'bg-gray-400 dark:bg-gray-600'
                }`}
              />
              <Text className="text-base dark:text-gray-300">
                {organization?.active ? 'Active' : 'Inactive'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrganizationScreen;
