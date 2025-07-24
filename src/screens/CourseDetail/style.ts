import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  courseContainer: {
    backgroundColor: '#3566f1',
    height: '40%',
    borderRadius: 10,
    flex: 1,
  },
  heading: {
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  thumbnailImg: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  nameText: {
    color: '#FFF',
    fontWeight: '200',
    fontSize: 14,
  },
  bioText: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 12,
  },
  enrollBtn: {
    backgroundColor: '#7dd0f9',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  enrollText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  enrolledText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  moduleHeading: {
    fontSize: 16,
    marginVertical: 15,
    fontWeight: '700',
  },
});
