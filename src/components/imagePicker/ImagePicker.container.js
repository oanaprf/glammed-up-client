import { compose, withHandlers, branch, renderComponent } from 'recompose';
import * as ExpoImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

import { withUseState, withOnMount } from '@@hocs';
import SingleImagePicker from './SingleImagePicker';
import MultipleImagePicker from './MultipleImagePicker';

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
  }),
  branch(
    ({ multiple }) => multiple,
    renderComponent(MultipleImagePicker),
    renderComponent(SingleImagePicker)
  )
)();

export default ImagePicker;
