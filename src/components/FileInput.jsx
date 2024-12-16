import { useRef } from 'react';

export const FileInput = ({ onImageSelected }) => {
  const inputRef = useRef();

  const handleOnChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }

    console.log('opa');
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        className="invisible"
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
      />
      <button type="button" onClick={onChooseImg}>
        Choose an image
      </button>
    </div>
  );
};
