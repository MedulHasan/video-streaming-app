import * as yup from 'yup';

export const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  visibility: yup.number().required('Visibility is required'),
  thumbnailUrl: yup.string().required('Thumbnail URL is required'),
  language: yup.number().required('Language is required'),
  recordingDate: yup.string().required('Recording date is required'),
  category: yup.number().required('Category is required'),
});
