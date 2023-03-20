import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
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
import {validationSchema} from './formValidation';
import {usePostVideoMutation} from '../../features/api/apiSlice';

const UploadVideoContent = () => {
  const {colors} = useTheme();
  const uploadVideo = UploadVideoStyle();
  let visibilityOption = ['Public', 'Private', 'Unlisted'];
  let languageOption = ['Bangla', 'English', 'France'];
  let categoryOption = ['Education', 'Technology', 'Travel', 'Other'];

  const [postVideo, {isLoading}] = usePostVideoMutation();
  // console.log(data);
  const formik = useFormik({
    initialValues: {
      title: 'title1',
      description: 'desc',
      thumbnailUrl: 'test',
      videoFile: null,
      visibility: 1,
      language: 1,
      category: 1,
      recordingDate: null,
    },
    validationSchema: validationSchema,
    onSubmit: value => {
      const formData = new FormData();
      formData.append('title', value.title);
      formData.append('video', value.videoFile);
      postVideo(formData);
    },
  });
  const handleFileUpload = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [types.video],
      });
      formik.setFieldValue('videoFile', file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      }
    }
  };
  return (
    <View>
      <ScrollView>
        <Text style={uploadVideo.title}>Upload Video</Text>
        <CustomTextInput
          label="Video title"
          style={uploadVideo.mb}
          value={formik.values.title}
          onChangeText={formik.handleChange('title')}
        />
        <CustomTextInput
          label="Video description"
          style={uploadVideo.mb}
          value={formik.values.description}
          onChangeText={formik.handleChange('description')}
        />
        <CustomTextInput
          label="Thumbnail URL"
          style={uploadVideo.mb}
          value={formik.values.thumbnailUrl}
          onChangeText={formik.handleChange('thumbnailUrl')}
        />
        <CustomDocumentPicker
          label="Upload Video"
          style={uploadVideo.mb}
          icon={<FileIcon fill={colors.filePrimary} />}
          title={formik.values.videoFile?.name}
          onPress={handleFileUpload}
        />
        <SelectInput
          label="Visibility"
          style={uploadVideo.mb}
          icon={<RightIcon fill={colors.textQuaternaryVariant} />}
          title={visibilityOption[formik.values.visibility]}
          selectValue={formik.values.visibility}
          options={visibilityOption}
          setSelectValue={index => formik.setFieldValue('visibility', index)}
        />
        <SelectInput
          label="Language"
          style={uploadVideo.mb}
          icon={<RightIcon fill={colors.textQuaternaryVariant} />}
          title={languageOption[formik.values.language]}
          selectValue={formik.values.language}
          options={languageOption}
          setSelectValue={index => formik.setFieldValue('language', index)}
        />
        <SelectInput
          label="Category"
          style={uploadVideo.mb}
          icon={<RightIcon fill={colors.textQuaternaryVariant} />}
          title={categoryOption[formik.values.category]}
          selectValue={formik.values.category}
          options={categoryOption}
          setSelectValue={index => formik.setFieldValue('category', index)}
        />
        <CustomDatePicker
          label="Publish Date"
          icon={<DatePickerIcon fill={colors.textSecondaryVariant} />}
          value={formik.values.recordingDate}
          onConfirm={newDate => {
            const formatDate = moment(newDate).format('LL');
            formik.setFieldValue('recordingDate', formatDate);
          }}
        />
      </ScrollView>
      <Pressable
        android_ripple={{color: '#80b3ff'}}
        style={uploadVideo.uploadVideoBtn}
        onPress={formik.handleSubmit}>
        <Text style={uploadVideo.btnText}>
          {isLoading ? 'Loading...' : 'Upload Video'}
        </Text>
      </Pressable>

      {Object.keys(formik.errors).length > 0 && (
        <Text style={uploadVideo.error}>Fill up the required filed</Text>
      )}
    </View>
  );
};

export default UploadVideoContent;
