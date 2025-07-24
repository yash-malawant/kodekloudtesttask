import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import VideoModal from '../../../components/VideoModal';

export const CourseCard = ({ data }: any) => {
  const navigation = useNavigation<any>();
  const [visible, setVisible] = useState<boolean>(false);

  const handleCourseNavigation = () => {
    navigation.navigate('CourseDetailScreen', { course: data?.slug });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image source={{ uri: data?.thumbnail_url }} style={styles.thumbnailImg} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{data?.title}</Text>
      <View style={styles.detail}>
        <Text style={styles.detailKeyText}>Tutor : </Text>
        <Text style={styles.detailValueText}>{data?.tutors[0]?.name.substring(0, 10)}</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.detailKeyText}>Level : </Text>
        <Text style={styles.detailValueText}>{data?.difficulty_level}</Text>
      </View>

      <TouchableOpacity style={styles.btnContainer} onPress={handleCourseNavigation}>
        <Text style={styles.btnText}>View Course</Text>
      </TouchableOpacity>
      {visible && (
        <VideoModal
          visible={visible}
          onClose={() => setVisible(false)}
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '98%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
  },
  thumbnailImg: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleText: {
    fontSize: 13,
    fontWeight: '500',
    marginVertical: 5,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  detailKeyText: {
    color: 'grey',
    fontSize: 12,
  },
  detailValueText: {
    color: 'grey',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  btnContainer: {
    backgroundColor: '#29ddff',
    borderRadius: 10,
    position: 'absolute',
    bottom: 5,
    width: '95%',
    alignSelf: 'center',
  },
  btnText: {
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
