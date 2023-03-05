import {Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import CustomBottomSheet from '../../components/CustomBottomSheet/CustomBottomSheet';

const CreateBtmSheet = ({createBtmSheet}) => {
  //   const createBtmSheet = useRef(null);
  //   useEffect(() => {
  //     createBtmSheet?.current?.snapToIndex(0);
  //   }, [createBtmSheet]);
  return (
    <CustomBottomSheet bottomSheetRef={createBtmSheet} snapPoint={['30%']}>
      <Text>123</Text>
    </CustomBottomSheet>
  );
};

export default CreateBtmSheet;
