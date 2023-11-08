import Loader from "@components/shared/loader";
import NavigateBack from "@components/shared/navigateBack";
import SafeAreaWrapper from "@components/shared/safeAreaWrapper";
import Task from "@components/tasks/task";
import TaskActions from "@components/tasks/taskActions";
import { fetcher } from "@services/config";
import { Box, Text } from "@utils/theme";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import useSWR from "swr";

const CategoryScreen = () => {
  const route = useRoute();

  const { id } = route.params;

  const { data: category, isLoading: isLoadingCategory } = useSWR(
    `categories/${id}`,
    fetcher
  );

  console.log(`category`, JSON.stringify(category, null, 2));

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    mutate: mutateTasks,
  } = useSWR(`tasks/tasks-by-categories/${id}`, fetcher, {
    refreshInterval: 1000,
  });

  if (isLoadingTasks || isLoadingCategory || !category || !tasks) {
    return <Loader />;
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box width={40}>
          <NavigateBack />
        </Box>
        <Box height={16} />
        <Box flexDirection="row">
          <Text variant="textXl" fontWeight="700">
            {category.icon.symbol}
          </Text>
          <Text
            variant="textXl"
            fontWeight="700"
            ml="3"
            style={{
              color: category.color.code,
            }}>
            {category.name}
          </Text>
        </Box>
        <Box height={16} />
        <TaskActions categoryId={id} />
        <Box height={16} />

        <FlatList
          data={tasks}
          renderItem={({ item, index }) => {
            return <Task task={item} mutateTasks={mutateTasks} />;
          }}
          ItemSeparatorComponent={() => <Box height={14} />}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default CategoryScreen;
