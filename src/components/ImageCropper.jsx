import { useState } from 'react';
import Cropper from 'react-easy-crop';

export const ImageCropper = ({ image, onCropDone, onCropCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <div className="relative">
      <div className="w-[320px] h-[160px]">
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: '100%',
              height: '60%',
              backgroundColor: '#fff',
            },
          }}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <button onClick={onCropCancel}>Cancel</button>
        <button onClick={() => onCropDone(croppedArea)}>Crop</button>
      </div>
    </div>
  );
};
