import type { Practitioner } from 'fhir/r4';
import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

// const formatDate = (dateString: string | null) => {
//   if (!dateString) return 'N/A';
//   const date = new Date(dateString);
//   return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
// };

interface PractitionerScreenProps {
  practitioner: Practitioner;
}

/* eslint-disable max-lines-per-function */
const PractitionerScreen = ({ practitioner }: PractitionerScreenProps) => {
  return (
    <ScrollView className="flex-1 p-4">
      {/* Patient Details Section */}
      <View className="px-1 pb-6 pt-2">
        <Text className="mb-2 text-lg font-bold dark:text-gray-100">
          Practitioner Details
        </Text>
        <View className="flex-row flex-wrap gap-y-4 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          {/* Name */}
          <View className="w-1/2 pr-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Family Name
            </Text>
            <Text className="text-base font-medium dark:text-gray-200">
              {practitioner?.name?.[0]?.family}
            </Text>
          </View>

          <View className="w-1/2 pl-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Given Name
            </Text>
            <Text className="text-base font-medium dark:text-gray-200">
              {practitioner?.name?.[0]?.given}
            </Text>
          </View>

          {/* Gender */}
          <View className="w-1/2 pr-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Gender
            </Text>
            <Text className="text-base dark:text-gray-300">
              {practitioner?.gender?.toUpperCase() || 'N/A'}
            </Text>
          </View>

          {/* SSN */}
          <View className="w-1/2 pl-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Identifier
            </Text>
            <Text className="text-base dark:text-gray-300">
              {practitioner?.identifier?.find(
                (id: fhir4.Identifier) =>
                  id.system === 'http://hl7.org/fhir/sid/us-npi'
              )?.value || 'N/A'}
            </Text>
          </View>

          {/* Address */}
          <View className="w-1/2 pr-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Address
            </Text>
            <Text className="text-base dark:text-gray-300">
              {practitioner?.address?.[0]?.line?.join(', ')}
              {practitioner?.address?.[0]?.city &&
                `, ${practitioner?.address?.[0]?.city}`}
              {practitioner?.address?.[0]?.state &&
                `, ${practitioner?.address?.[0]?.state}`}
              {practitioner?.address?.[0]?.postalCode &&
                `, ${practitioner?.address?.[0]?.postalCode}`}
              {practitioner?.address?.[0]?.country &&
                `, ${practitioner?.address?.[0]?.country}`}
            </Text>
          </View>

          {/* Phone */}
          <View className="w-1/2 pl-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Email
            </Text>
            <Text className="text-base dark:text-gray-300">
              {practitioner?.telecom?.[0]?.value || 'N/A'}
            </Text>
          </View>

          {/* Status */}
          <View className="w-1/2 pr-2">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Status
            </Text>
            <View className="flex-row items-center gap-2">
              <View
                className={`size-3 rounded-full ${
                  practitioner?.active
                    ? 'bg-green-500 dark:bg-green-400'
                    : 'bg-gray-400 dark:bg-gray-600'
                }`}
              />
              <Text className="text-base dark:text-gray-300">
                {practitioner?.active ? 'Active' : 'Inactive'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PractitionerScreen;
