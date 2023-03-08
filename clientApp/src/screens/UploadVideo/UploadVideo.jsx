import {View, FlatList} from 'react-native';
import React from 'react';
import UploadVideoStyle from './UploadVideo.style';
import UploadVideoContent from './UploadVideoContent';

const UploadVideo = () => {
  const uploadVideo = UploadVideoStyle();
  return (
    <View style={uploadVideo.cont}>
      <FlatList ListHeaderComponent={UploadVideoContent} />
    </View>
  );
};

export default UploadVideo;
