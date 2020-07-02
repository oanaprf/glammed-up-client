import {
  compose,
  withHandlers,
  branch,
  renderComponent,
  withPropsOnChange,
} from 'recompose';
import * as ExpoImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

import { withUseState, withOnMount } from '@@hocs';
import SingleImagePicker from './SingleImagePicker';
import MultipleImagePicker from './MultipleImagePicker';

const ImagePicker = compose(
  withOnMount(async () => {
    if (Platform.OS === 'ios') {
      await ExpoImagePicker.requestCameraRollPermissionsAsync();
    }
  }),
  withUseState('images', ({ images }) => images),
  withPropsOnChange(['images'], ({ images, setImages }) => setImages(images)),
  withHandlers({
    onSelectImage: ({
      images,
      setImages,
      onSelectImage,
      multiple,
    }) => async () => {
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
        setImages([...(multiple ? images : []), uri]);
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
