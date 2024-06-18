import './Navbar.css'


function Navbar() {
  return (
    <div className="Navbar">
        <nav>
            <div className="left">
              <h4>ColorTool</h4>
            </div>

            <div className="right">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Community</li>
                <li>Pricing</li>
              </ul>
            </div>

        </nav>
    </div>
  )
}

export default Navbar
