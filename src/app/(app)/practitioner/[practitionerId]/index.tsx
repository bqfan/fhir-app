// src/app/(app)/patient/[patientId]/index.tsx
import { useMedplum } from '@medplum/react-hooks';
import { useLocalSearchParams, useRouter } from 'expo-router';
import type { Practitioner } from 'fhir/r4';
import { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import PractitionerScreen from '@/components/practitioner-screen';
import { Button, ButtonText } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

/* eslint-disable max-lines-per-function */
export default function PractitionerDetails() {
  const { practitionerId } = useLocalSearchParams();
  const medplum = useMedplum();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [_, setError] = useState<string>();
  const [practitioner, setPractitioner] = useState<Practitioner>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const pr = await medplum.readResource(
          'Practitioner',
          practitionerId as string
        );
        setPractitioner(pr as Practitioner); // Explicit type assertion
        setError(undefined);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [practitionerId, medplum]);

  if (loading) return <Spinner />;

  return (
    <SafeAreaView className="w-full flex-1 items-center justify-center">
      <View className="flex-1 bg-white dark:bg-black">
        {/* Back Button */}
        <View className="border-b border-gray-200 p-4 dark:border-gray-700">
          <Button
            //variant="ghost"
            className="self-start"
            onPress={() => router.push('/practitioners')}
          >
            <ButtonText>← Back to Pratitioners</ButtonText>
          </Button>
        </View>

        {practitioner ? (
          <PractitionerScreen practitioner={practitioner} />
        ) : (
          <View className="flex-1 items-center justify-center">
            No practitioner selected
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
