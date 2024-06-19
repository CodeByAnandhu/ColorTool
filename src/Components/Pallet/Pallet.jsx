
import './Pallet.css';
import Colors from '../../Components/Colors/Colors';
import { useState } from 'react';

function Pallet() {
 
  const [iscopy, setIscopy] = useState(false);

  function timoutClipbordMessege() {
    setTimeout(() => {
      setIscopy(false);
    }, 2000);
  }


  const handleCopy = (hexCode) => {
    navigator.clipboard.writeText(hexCode).then(() => {
      setIscopy(true);
      timoutClipbordMessege();
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="Pallet">
      <h2>Recommended for you</h2>
      {
        Colors.map((color, index) => (
          <section key={index}>
            <div className="left">
              <p>{color.groupName}</p>
            </div>
            <div className="right">
              <div className="hex a" style={{ backgroundColor: color.color1 }} onClick={() => handleCopy(color.color1)}>
                <p>{color.color1}</p>
              </div>
              <div className="hex b" style={{ backgroundColor: color.color4 }} onClick={() => handleCopy(color.color4)}>
                <p>{color.color4}</p>
              </div>
              <div className="hex c" style={{ backgroundColor: color.color2 }} onClick={() => handleCopy(color.color2)}>
                <p>{color.color2}</p>
              </div>
              <div className="hex d" style={{ backgroundColor: color.color3 }} onClick={() => handleCopy(color.color3)}>
                <p>{color.color3}</p>
              </div>
            </div>
          </section>
        ))
      }

        
         {iscopy?<p className="copyedMessege">Copied to clipboard</p>:<></>} 
       

    </div>
  );
}

export default Pallet;
