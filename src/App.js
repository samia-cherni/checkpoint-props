import React from "react";
import Profile from "./profile/Profile";

function App() {
  const handleName = name => alert(`${name}`);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-mycolor">
        <span className="navbar-brand mb-0 h1">MyWebsite.com</span>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <Profile handleName={handleName}></Profile>
          </div>
          <div className="col">
            <Profile
              fullName="Lilly Grey"
              bio="Lilly Grey is a working designer as well as a design trainer and author. Her design firm, provides design services for web, logo, and print."
              profession="Designer"
              handleName={handleName}
            >
              <img src="1.jpg" className="card-img-top" alt="profile" />
            </Profile>
          </div>
          <div className="col">
            <Profile
              fullName="John Smith"
              bio="John Smith has been listed as one of Fast Company’s “Most Innovative Business People” and one of Fortune’s “40 under 40.” He is an early-stage technology investor/advisor."
              profession="Business man"
              handleName={handleName}
            >
              <img src="2.jpg" className="card-img-top" alt="profile" />
            </Profile>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p style={{textAlign:'center',fontWeight:'bold',color: 'grey'}}>&#169; 2021</p>
      </div>
    </div>
  );
}

export default App;
