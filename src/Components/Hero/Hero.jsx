import './Hero.css';
import { useState } from 'react';
function Hero() {

  
  const [image, setImage] = useState(null);
  const [colorPicker, setColorPicker] = useState(null);
  const [iscopy , setIscopy] = useState(false);

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

  function timoutClipbordMessege() {
    setTimeout(() => {
      setIscopy(false);
    }, 2000);
  }

  const handleCopy = () => {

    navigator.clipboard.writeText(colorPicker?colorPicker:'#d7c4f9').then(() => {
      setIscopy(true);
      timoutClipbordMessege();
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };
 

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <div className='hero'>
      <main>
        <div className="left">
          <img className='image'
            src={image ? URL.createObjectURL(image) : "/heroImg.jpeg"}
            onMouseEnter={loadEyeDropper} 
          />
          <button className='selectIamge'>
            <input type="file" onChange={handleImageChange} />Select image
          </button>
        </div>
        <div className="right">
          <div onClick={handleCopy} className="colorCard" style={{ backgroundColor: colorPicker }}>
            
          </div>
          <p onClick={handleCopy}>{colorPicker || '#d7c4f9'} </p>
        </div>
      </main>

      {iscopy?<p className="copyedMessege">Copied to clipboard</p>:<></>}
    </div>
  );
}

export default Hero;
