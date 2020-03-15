import React from 'react';

const Profile = props => (
  <div className="m-4">
    <img
      src={props.image}
      alt={props.image}
      className="border-solid border-6 border-white shadow-lg p-4"
    />
    <span className="serif text-center block p-4 text-xl">{props.name}</span>
  </div>
);

export default Profile;
