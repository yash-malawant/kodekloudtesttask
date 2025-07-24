import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { CourseCard } from './components/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../redux/slices/courseAction';
import { AppDispatch, RootState } from '../../redux/store';
import NotFoundScreen from '../NotFound/NotFoundScreen';

const CourseListScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { courses, metadata } = useSelector((state: RootState) => state.course);

  useEffect(() => {
    dispatch(fetchCourses(currentPage));
  }, []);

  const handleLoadMore = async () => {
    if (metadata?.total_count >= currentPage) {
      setIsLoading(true);
      try {
        const page = currentPage + 1;
        setCurrentPage(page);
        await dispatch(fetchCourses(page));
      } catch (error) {
        console.log('unable to load more data', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderFooter = () => {
    if (!isLoading) return;
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color={'blue'} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} barStyle={'dark-content'} />
      {courses?.length > 0 ? (
        <FlatList
          data={courses}
          numColumns={2}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <CourseCard data={item} />}
        />
      ) : (
        <NotFoundScreen />
      )}
    </SafeAreaView>
  );
};

export default CourseListScreen;
