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
import DocumentPicker, {types} from 'react-native-document-picker';

const UploadVideoContent = () => {
  const {colors} = useTheme();
  const uploadVideo = UploadVideoStyle();

  const [videoInfo, setVideoInfo] = useState(null);
  const handleVideoInfo = (name, text) => {
    setVideoInfo({
      ...videoInfo,
      [name]: text,
    });
  };

  const [file, setFile] = useState(null);

  let visibilityOption = ['Public', 'Private', 'Unlisted'];
  const [visibility, setVisibility] = useState(0);
  let languageOption = ['Bangla', 'English', 'France'];
  const [language, setLanguage] = useState(0);
  let categoryOption = ['Education', 'Technology', 'Travel', 'Other'];
  const [category, setCategory] = useState(0);

  const [date, setDate] = useState(null);
  const handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [types.video],
      });

      setFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
      }
    }
  };
  return (
    <View>
      <Text style={uploadVideo.title}>Upload Video</Text>
      <CustomTextInput
        onChangeText={text => handleVideoInfo('title', text)}
        label="Video title"
        style={uploadVideo.mb}
      />
      <CustomTextInput
        onChangeText={text => handleVideoInfo('description', text)}
        label="Video description"
        style={uploadVideo.mb}
      />
      <CustomTextInput
        onChangeText={text => handleVideoInfo('thumbnail', text)}
        label="Thumbnail URL"
        style={uploadVideo.mb}
      />
      <CustomDocumentPicker
        title={file?.name}
        label="Upload Video"
        onPress={handleFileUpload}
        style={uploadVideo.mb}
        icon={<FileIcon fill={colors.filePrimary} />}
      />
      <SelectInput
        title={visibilityOption[visibility]}
        label="Visibility"
        style={uploadVideo.mb}
        selectValue={visibility}
        setSelectValue={setVisibility}
        options={visibilityOption}
        icon={<RightIcon fill={colors.textQuaternaryVariant} />}
      />
      <SelectInput
        title={languageOption[language]}
        label="Language"
        selectValue={language}
        setSelectValue={setLanguage}
        options={languageOption}
        style={uploadVideo.mb}
        icon={<RightIcon fill={colors.textQuaternaryVariant} />}
      />
      <SelectInput
        title={categoryOption[category]}
        label="Category"
        style={uploadVideo.mb}
        selectValue={category}
        setSelectValue={setCategory}
        options={categoryOption}
        icon={<RightIcon fill={colors.textQuaternaryVariant} />}
      />
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
