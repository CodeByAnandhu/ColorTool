import './Pallet.css'

function Pallet() {
  return (
    <div className="Pallet">
     
     <h2>Recomment for you</h2>

     <section>
            
         <div className="left">
            <p>Dark Sapphire Blue</p>
         </div>
         <div className="right">
            <div className="hex a"></div>
            <div className="hex b"></div>
            <div className="hex c"></div>
            <div className="hex d"></div>
         </div>
     
     </section>
     <section style={{marginBottom:"50px"}}>

         <div className="left">
            <p>Dark Avocado Green</p>
         </div>
         <div className="right">
            <div className="hex e"></div>
            <div className="hex f"></div>
            <div className="hex g"></div>
            <div className="hex h"></div>
         </div>
     
     </section>

    </div>
  )
}

export default Pallet
