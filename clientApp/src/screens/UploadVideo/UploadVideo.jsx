import {View, Text} from 'react-native';
import React from 'react';
import CustomTextInput from '../../components/CustomInput/CustomTextInput/CustomTextInput';
import UploadVideoStyle from './UploadVideo.style';
import CustomDocumentPicker from '../../components/CustomInput/CustomDocumentPicker/CustomDocumentPicker';
import SelectInput from '../../components/CustomInput/SelectInput/SelectInput';
import FileIcon from '../../assets/svg/attach-file.svg';
import RightIcon from '../../assets/svg/rightArrow.svg';
import {useTheme} from '@react-navigation/native';
import CustomDatePicker from '../../components/CustomInput/CustomDatePicker/CustomDatePicker';
import DatePickerIcon from '../../assets/svg/date-picker-icon.svg';

const UploadVideo = () => {
  const {colors} = useTheme();
  const uploadVideo = UploadVideoStyle();
  return (
    <View style={uploadVideo.cont}>
      <Text style={uploadVideo.title}>Upload Video</Text>
      <CustomTextInput label="Video title" style={uploadVideo.mb} />
      <CustomTextInput label="Video description" style={uploadVideo.mb} />
      <CustomTextInput label="Thumbnail URL" style={uploadVideo.mb} />
      <CustomDocumentPicker
        label="Upload Video"
        style={uploadVideo.mb}
        icon={<FileIcon fill={colors.filePrimary} />}
      />
      <SelectInput
        label="Visibility"
        style={uploadVideo.mb}
        icon={<RightIcon fill={colors.textQuaternaryVariant} />}
      />
      <SelectInput
        label="Language"
        style={uploadVideo.mb}
        icon={<RightIcon fill={colors.textQuaternaryVariant} />}
      />
      <SelectInput
        label="Category"
        style={uploadVideo.mb}
        icon={<RightIcon fill={colors.textQuaternaryVariant} />}
      />
      <CustomDatePicker
        text={'Custom'}
        isCustom={true}
        icon={<DatePickerIcon fill={colors.textSecondaryVariant} />}
      />
    </View>
  );
};

export default UploadVideo;
