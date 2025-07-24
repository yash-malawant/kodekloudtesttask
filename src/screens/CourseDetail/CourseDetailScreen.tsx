import { FlatList, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchCourseDetails } from '../../redux/slices/courseAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ViewLesson from './components/ViewLesson';

const CourseDetailScreen = ({ route }: any) => {
  const { course } = route?.params || {};

  const dispatch = useDispatch<AppDispatch>();
  const [enrolledCourse, setEnrolledCourse] = useState<any>([]);
  const { courseDetail } = useSelector((state: RootState) => state.course);

  useEffect(() => {
    dispatch(fetchCourseDetails(course));
  }, []);

  const fetchEnrolledCourse = async () => {
    const getCourse = await AsyncStorage.getItem('enrolledCourses');
    if (getCourse) {
      setEnrolledCourse(JSON.parse(getCourse));
    }
  };

  useEffect(() => {
    fetchEnrolledCourse();
  }, []);

  const handleEnrollment = async () => {
    const updateEnrollment = enrolledCourse.includes(course)
      ? enrolledCourse.filter((c: string) => c !== course)
      : [...enrolledCourse, course];
    setEnrolledCourse(updateEnrollment);
    await AsyncStorage.setItem('enrolledCourses', JSON.stringify(updateEnrollment));
  };

  const renderHeaderComponent = () => {
    return (
      <>
        <View style={styles.courseContainer}>
          <Text style={styles.heading}>{courseDetail?.title}</Text>
          <Image source={{ uri: courseDetail?.thumbnail_url }} style={styles.thumbnailImg} />

          <View style={{ padding: 20 }}>
            <Text style={styles.nameText}>{courseDetail?.tutors?.[0]?.name || ''}</Text>
            <Text style={styles.bioText}>{courseDetail?.tutors?.[0]?.bio || ''}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.enrollBtn} onPress={handleEnrollment}>
          {enrolledCourse.includes(course) ? (
            <Text style={styles.enrolledText}>Enrolled</Text>
          ) : (
            <Text style={styles.enrollText}>Enroll</Text>
          )}
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} barStyle={'dark-content'} />
      <FlatList
        data={courseDetail?.modules?.[0]?.lessons}
        ListHeaderComponent={renderHeaderComponent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <ViewLesson data={item} />}
      />
    </View>
  );
};

export default CourseDetailScreen;
