import {View, Text} from 'react-native';
import React, {useState} from 'react';
import UploadVideoStyle from './UploadVideo.style';
import CustomTextInput from '../../components/CustomInput/CustomTextInput/CustomTextInput';
import CustomDocumentPicker from '../../components/CustomInput/CustomDocumentPicker/CustomDocumentPicker';
import {useTheme} from '@react-navigation/native';
import SelectInput from '../../components/CustomInput/SelectInput/SelectInput';
import CustomDatePicker from '../../components/CustomInput/CustomDatePicker/CustomDatePicker';
import moment from 'moment';
import FileIcon from '../../assets/svg/attach-file.svg';
import RightIcon from '../../assets/svg/rightArrow.svg';
import DatePickerIcon from '../../assets/svg/date-picker-icon.svg';

const UploadVideoContent = () => {
  const [date, setDate] = useState(null);
  const {colors} = useTheme();
  const uploadVideo = UploadVideoStyle();
  return (
    <View>
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
      {/* <SelectInput
        label="Language"
        style={uploadVideo.mb}
        icon={<RightIcon fill={colors.textQuaternaryVariant} />}
      />
      <SelectInput
        label="Category"
        style={uploadVideo.mb}
        icon={<RightIcon fill={colors.textQuaternaryVariant} />}
      /> */}
      <CustomDatePicker
        label="Publish Date"
        icon={<DatePickerIcon fill={colors.textSecondaryVariant} />}
        value={date}
        onConfirm={newDate => {
          const formatDate = moment(newDate).format('LL');
          setDate(formatDate);
        }}
      />
    </View>
  );
};

export default UploadVideoContent;
