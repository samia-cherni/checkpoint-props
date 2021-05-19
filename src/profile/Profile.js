import React from 'react';
import PropTypes from 'prop-types';

const Profile=({fullName,profession,bio,handleName,children})=>{
    return(
        <div className="card m-3" style={{width: '18rem'}} onClick={()=>handleName(fullName)}>
            <div className="card-body">
            {children}
            <h5 className="card-title"style={{fontWeight:'bold'}}>{fullName}</h5>
                <p className="card-text">{bio}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{profession}</li>
            </ul>
        </div>
    );
}
Profile.defaultProps={
    fullName : "Jane Roe",
    bio : "Jane Roe is the New York Times best-selling writer of Ancestors Of The Future and Trust The Shadows. The author or coauthor of ten books, Jane has sold 8 million copies since 2015.",
    profession : "Author",
    children : <img src="/3.jpg" className="card-img-top" alt="profile" />
};
Profile.propTypes = {
    fullName : PropTypes.string.isRequired,
    bio : PropTypes.string.isRequired,
    profession : PropTypes.string.isRequired,
    handleName : PropTypes.func,
    children : PropTypes.element.isRequired
};
export default Profile;