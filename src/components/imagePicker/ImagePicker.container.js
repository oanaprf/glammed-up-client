import { compose, withHandlers } from 'recompose';
import * as ExpoImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

import { withUseState, withOnMount } from '@@hocs';
import BaseImagePicker from './ImagePicker';

const ImagePicker = compose(
  withUseState('images', []),
  withOnMount(async () => {
    if (Platform.OS === 'ios') {
      await ExpoImagePicker.requestCameraRollPermissionsAsync();
    }
  }),
  withHandlers({
    onSelectImage: ({ images, setImages }) => async () => {
      const { cancelled, uri } = await ExpoImagePicker.launchImageLibraryAsync({
        mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!cancelled) {
        setImages([...images, uri]);
      }
    },
  })
)(BaseImagePicker);

export default ImagePicker;
