import Loader from "@components/shared/loader";
import SafeAreaWrapper from "@components/shared/safeAreaWrapper";
import Task from "@components/tasks/task";
import TaskActions from "@components/tasks/taskActions";
import { fetcher } from "@services/config";
import UserGlobalStore from "@store/userGlobalStore";
import { getGreeting } from "@utils/helpers";
import { AnimatedText, Box, Text } from "@utils/theme";
import { format } from "date-fns";
import React from "react";
import { FlatList } from "react-native";
import { ZoomInEasyDown } from "react-native-reanimated";

import useSWR from "swr";

const today = new Date();

const greeting = getGreeting({ hour: new Date().getHours() });

const HomeScreen = () => {
  const { user } = UserGlobalStore();

  const {
    data: tasks,
    isLoading,
    mutate: mutateTasks,
  } = useSWR("tasks/", fetcher);

  if (isLoading || !tasks) {
    return <Loader />;
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <AnimatedText
          variant="textXl"
          fontWeight="500"
          entering={ZoomInEasyDown.delay(500).duration(700)}>
          Good {greeting} {user?.name}
        </AnimatedText>
        <Text variant="textXl" fontWeight="500">
          It’s {format(today, "eeee, LLL dd")} - {tasks.length} tasks
        </Text>
        <Box height={26} />
        <TaskActions categoryId="" />
        <Box height={26} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} mutateTasks={mutateTasks} />
          )}
          ItemSeparatorComponent={() => <Box height={14} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
