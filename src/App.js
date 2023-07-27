
import './App.css';
import icon1 from './images/icon1.png'

function App() {
  return (
    <div>
      <div className="headerContainer">
        {/* -------------------- NavBar -------------------- */}

        <div className="header">
          <div className="headerLeft">
            <p>MAISONCo</p>
          </div>
          <div className="headerCenter">
            <ul className="tabs">
              <li className="activeTab">APARTMENTS</li>
              <li>AMENITIES</li>
              <li>SERVICES</li>
              <li>NEIGHBOURHOOD</li>
              <li>TEAM</li>
              <li>GALLERY</li>
              <li>BLOG</li>
            </ul>
          </div>
          <div className="headerRight">
            <div>
              <p className="headerRighttext">EN / FR</p>
            </div>
            <div className="searchContainer">
              <input
                className="searchBar"
                type="search"
                placeholder="SCHEDULE A VISIT"
              />
              <img src={icon1} alt="" className="iconSearch" />
            </div>
          </div>
        </div>

        <div className="headText">
          <h2>
            Smart living <br/> With  5 Star Services
          </h2>
          <div className="detail">
          <p>CONVENIENT LOCATION - BEST PRICE</p>
          <p>-2 OR 3 BEDROOM APARTMENT</p>
          </div>
        </div>

        <div className="textBox">
            <p className="">OPENING HOURS</p>
            <p>MON - FRI: 10AM - 7PM / SAT: 10AM - 5PM / SUN: 1PM - 5PM</p>
        </div>
      </div>
    </div>
  );
}

export default App;
