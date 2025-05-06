// src/app/(app)/patient/[patientId]/index.tsx
import { useMedplum } from '@medplum/react-hooks';
import { useLocalSearchParams, useRouter } from 'expo-router';
import type { Organization } from 'fhir/r4';
import { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import OrganizationScreen from '@/components/organization-screen';
import { Button, ButtonText } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

/* eslint-disable max-lines-per-function */
export default function OrganizationDetails() {
  const { organizationId } = useLocalSearchParams();
  const medplum = useMedplum();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [_, setError] = useState<string>();
  const [organization, setOrganization] = useState<Organization>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const org = await medplum.readResource(
          'Organization',
          organizationId as string
        );
        setOrganization(org as Organization); // Explicit type assertion
        setError(undefined);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [organizationId, medplum]);

  if (loading) return <Spinner />;

  return (
    <SafeAreaView className="w-full flex-1 items-center justify-center">
      <View className="flex-1 bg-white dark:bg-black">
        {/* Back Button */}
        <View className="border-b border-gray-200 p-4 dark:border-gray-700">
          <Button
            //variant="ghost"
            className="self-start"
            onPress={() => router.push('/organizations')}
          >
            <ButtonText>← Back to Organizations</ButtonText>
          </Button>
        </View>

        {organization ? (
          <OrganizationScreen organization={organization} />
        ) : (
          <View className="flex-1 items-center justify-center">
            No organization selected
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
