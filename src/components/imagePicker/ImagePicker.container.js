import { compose, withHandlers, branch, renderComponent } from 'recompose';
import * as ExpoImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

import { withUseState, withOnMount } from '@@hocs';
import SingleImagePicker from './SingleImagePicker';
import MultipleImagePicker from './MultipleImagePicker';

const ImagePicker = compose(
  withUseState('images', ({ images }) => images || []),
  withOnMount(async () => {
    if (Platform.OS === 'ios') {
      await ExpoImagePicker.requestCameraRollPermissionsAsync();
    }
  }),
  withHandlers({
    onSelectImage: ({ images, setImages, onSelectImage }) => async () => {
      const {
        cancelled,
        uri,
        base64,
      } = await ExpoImagePicker.launchImageLibraryAsync({
        mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0,
        base64: true,
      });
      if (!cancelled) {
        onSelectImage && onSelectImage(base64);
        setImages([...images, uri]);
      }
    },
  }),
  branch(
    ({ multiple }) => multiple,
    renderComponent(MultipleImagePicker),
    renderComponent(SingleImagePicker)
  )
)();

export default ImagePicker;
