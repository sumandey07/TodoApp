import Loader from "@components/shared/loader";
import SafeAreaWrapper from "@components/shared/safeAreaWrapper";
import Task from "@components/tasks/task";
import { fetcher } from "@services/config";
import { Box, Text } from "@utils/theme";
import React from "react";
import { FlatList } from "react-native";
import useSWR from "swr";

const CompletedScreen = () => {
  const {
    data: tasks,
    isLoading: isLoadingTasks,
    mutate: mutateTasks,
  } = useSWR(`tasks/completed`, fetcher, {
    refreshInterval: 1000,
  });

  if (isLoadingTasks || !tasks) {
    return <Loader />;
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box height={16} />
        <Box flexDirection="row">
          <Text variant="textXl" fontWeight="700" ml="3">
            Completed
          </Text>
        </Box>
        <Box height={16} />

        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <Task task={item} mutateTasks={mutateTasks} />;
          }}
          ItemSeparatorComponent={() => <Box height={14} />}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default CompletedScreen;
