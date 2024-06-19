import './Hero.css';
import { useState } from 'react';
function Hero() {

  
  const [image, setImage] = useState(null);
  const [colorPicker, setColorPicker] = useState(null);

  function loadEyeDropper() {
    if (window.EyeDropper) {
      const eyeDropper = new window.EyeDropper();
      eyeDropper.open()
        .then(result => {
          setColorPicker(result.sRGBHex);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.error('EyeDropper is not available.');
    }
  }
 

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <div className='hero'>
      <main>
        <div className="left">
          <img className='image'
            src={image ? URL.createObjectURL(image) : "/public/Greek Sunset – MagicPattern Wallpaper.jpeg"}
            onMouseEnter={loadEyeDropper} 
          />
          <button className='selectIamge'>
            <input type="file" onChange={handleImageChange} />Select image
          </button>
        </div>
        <div className="right">
          <div className="colorCard" style={{ backgroundColor: colorPicker }}>
            {/* Display color preview */}
          </div>
          <p>{colorPicker || '#d7c4f9'} </p>
        </div>
      </main>
    </div>
  );
}

export default Hero;
