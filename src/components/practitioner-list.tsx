import { useMedplum } from '@medplum/react-hooks';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';

/* eslint-disable max-lines-per-function */
const PractitionerList = () => {
  const router = useRouter();
  const [practitioners, setPractitioners] = useState<
    {
      id: string;
      name?: { given?: string[]; family?: string }[];
      gender: string;
      telecom: unknown;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [practitionersPerPage] = useState(30);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const medplum = useMedplum();

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1); // Reset to first page when search changes
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    const fetchPractitioners = async () => {
      setLoading(true);
      try {
        const params: Record<string, any> = {
          _count: practitionersPerPage,
          _offset: (currentPage - 1) * practitionersPerPage,
        };

        if (debouncedSearchTerm) {
          params.name = debouncedSearchTerm;
        }

        const response = await medplum.searchResources('Practitioner', params);
        setPractitioners(
          response.map((practitioner: unknown) => {
            const p = practitioner as {
              id: string;
              name?: { given?: string[]; family?: string }[];
              telecom?: unknown;
              gender?: string;
            };
            return {
              id: p.id,
              name: p.name,
              telecom: p.telecom || 'N/A',
              gender: p.gender || 'N/A',
            };
          })
        );
      } catch (error) {
        console.error('Error fetching practitioners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPractitioners();
  }, [currentPage, practitionersPerPage, medplum, debouncedSearchTerm]);

  const renderPatientItem = ({
    item,
    index,
  }: {
    item: {
      id: string;
      name?: { given?: string[]; family?: string }[];
      telecom: unknown;
      gender: string;
    };
    index: number;
  }) => (
    <Pressable onPress={() => router.push(`/(app)/practitioner/${item.id}`)}>
      <View
        className={`flex-row items-center p-3 ${
          index % 2 === 0
            ? 'bg-gray-100 dark:bg-gray-800'
            : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        {/* Name Column */}
        <View className="w-2/5 border-r border-gray-300 pr-2 dark:border-gray-600">
          <Text
            numberOfLines={1}
            className="truncate text-sm text-gray-700 dark:text-gray-300"
          >
            {item.name?.[0]?.given?.join(' ')} {item.name?.[0]?.family}
          </Text>
        </View>

        <View className="w-1/5 border-r border-gray-300 px-2 dark:border-gray-600">
          <Text
            numberOfLines={1}
            className="truncate text-sm text-gray-700 dark:text-gray-300"
          >
            {item.gender}
          </Text>
        </View>
        <View className="w-2/5 border-r border-gray-300 px-2 dark:border-gray-600">
          <Text
            numberOfLines={1}
            className="truncate text-sm text-gray-700 dark:text-gray-300"
          >
            {item.telecom
              ? Array.isArray(item.telecom)
                ? item.telecom.map((t: { value: string }) => t.value).join(', ')
                : (item.telecom as { value: string }).value
              : 'N/A'}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View className="flex-1 bg-white p-4 dark:bg-black">
      {/* Search Input */}
      <TextInput
        className="mb-4 rounded-lg border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        placeholder="Search by name..."
        placeholderTextColor="#6b7280"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {loading ? (
        <View className="items-center py-4">
          <Spinner
            size="small"
            className="size-8 text-gray-500 dark:text-gray-400"
          />
        </View>
      ) : (
        <>
          {/* Table Header */}
          <View className="flex-row items-center bg-gray-300 p-3 dark:bg-gray-900">
            <View className="w-2/5 border-r border-gray-100 pr-2 dark:border-gray-700">
              <Text className="text-sm font-bold text-gray-900 dark:text-gray-100">
                Name
              </Text>
            </View>
            <View className="w-1/5 border-r border-gray-100 px-2 dark:border-gray-700">
              <Text className="truncate text-sm font-bold text-gray-900 dark:text-gray-100">
                Gender
              </Text>
            </View>
            <View className="w-2/6 px-1">
              <Text className="text-sm font-bold text-gray-900 dark:text-gray-100">
                Telecom
              </Text>
            </View>
          </View>

          {/* FlashList for Performance */}
          <FlashList
            data={practitioners}
            renderItem={renderPatientItem}
            keyExtractor={(item) => item.id}
            estimatedItemSize={50}
            ListEmptyComponent={
              !loading && (
                <Text className="p-4 text-center text-gray-500 dark:text-gray-400">
                  No practitioners found
                  {debouncedSearchTerm && ` matching "${debouncedSearchTerm}"`}
                </Text>
              )
            }
          />

          {/* Pagination Controls */}
          <View className="flex-row items-center justify-between py-4">
            <Button
              onPress={handlePreviousPage}
              isDisabled={currentPage === 1 || loading}
            >
              <ButtonText>Previous</ButtonText>
            </Button>
            <Text className="text-gray-900 dark:text-gray-100">
              Page {currentPage}
            </Text>
            <Button
              onPress={handleNextPage}
              isDisabled={
                practitioners.length < practitionersPerPage || loading
              }
            >
              <ButtonText>Next</ButtonText>
            </Button>
          </View>
        </>
      )}
    </View>
  );
};

export default PractitionerList;
