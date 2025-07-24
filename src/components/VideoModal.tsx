import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<Props> = ({ visible, onClose, videoUrl }) => {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Video
            source={{ uri: videoUrl }}
            style={styles.video}
            resizeMode="contain"
            controls
            paused={false}
          />

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default VideoModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: 'black',
    borderRadius: 12,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 12,
    zIndex: 1,
    padding: 4,
  },
  closeText: {
    fontSize: 24,
    color: 'white',
  },
});
