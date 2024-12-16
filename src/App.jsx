import { useState } from 'react';
import { FileInput } from './components/FileInput';
import { ImageCropper } from './components/ImageCropper';

function App() {
  const [image, setImage] = useState('');
  const [currAction, setCurrAction] = useState('select-img');

  const onImageSelected = (selectedImage) => {
    setImage(selectedImage);
    setCurrAction('crop-img');
  };

  const onCropDone = (imgCroppedArea) => {};

  const onCropCancel = () => {};

  return (
    <div>
      {currAction === 'select-img' ? (
        <FileInput onImageSelected={onImageSelected} />
      ) : currAction === 'crop-img' ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
