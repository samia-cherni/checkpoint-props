import React from 'react';
import PropTypes from 'prop-types';

const Profile=(props)=>{
    return(
        <div className="card m-3" style={{width: '18rem'}} onClick={()=>props.showName(props.fullName)}>
            <div className="card-body">
            {props.children}
            <h5 className="card-title"style={{fontWeight:'bold'}}>{props.fullName}</h5>
                <p className="card-text">{props.bio}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.profession}</li>
            </ul>
        </div>
    );
}
Profile.defaultProps={
    fullName : "Jane Roe",
    bio : "Jane Roe is the New York Times best-selling writer of Ancestors Of The Future and Trust The Shadows. The author or coauthor of ten books, Jane has sold 8 million copies since 2015.",
    profession : "Author",
    children:<img src="/3.jpg" className="card-img-top" alt="profile" />,
    showName : ()=>{alert('Jane Roe');}
};
Profile.propTypes = {
    fullName : PropTypes.string.isRequired,
    bio : PropTypes.string.isRequired,
    profession : PropTypes.string.isRequired,
    showName : PropTypes.func,
    children : PropTypes.element.isRequired
};
export default Profile;