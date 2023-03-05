import React, {useCallback, useMemo} from 'react';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  useBottomSheetSpringConfigs,
  BottomSheetHandle,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {useTheme} from '@react-navigation/native';
import {bottomSheetStyles} from './bottomSheet.style';
import dpr from '../../styles/DevicePixelRatio';

export const CustomBottomSheet = ({
  style = {},
  bottomSheetRef,
  snapPoint = [250],
  bgColor,
  indicatorColor,
  children,
}) => {
  const initialSnapPoints = useMemo(
    () => ['CONTENT_HEIGHT', ...snapPoint],
    [snapPoint],
  );
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const {colors} = useTheme();

  const bottomSheetStyle = bottomSheetStyles(colors, indicatorColor);

  const renderBackdrop = useCallback(props => {
    return (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.2}
      />
    );
  }, []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 700,
  });
  const renderBottomSheetHandle = () => {
    return (
      <BottomSheetHandle
        indicatorStyle={bottomSheetStyle.bottomSheetIndicator}
      />
    );
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      animationConfigs={animationConfigs}
      handleComponent={renderBottomSheetHandle}
      backgroundStyle={{
        backgroundColor: bgColor || '#f1f1f1',
        borderTopLeftRadius: dpr(28),
        borderTopRightRadius: dpr(28),
      }}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}>
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[bottomSheetStyle.contentContainer, style]}
        onLayout={handleContentLayout}>
        {children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
