import React from "react";

//profile can be a stateless functional component, it doesnt do much
const Profile = () => {
  return (
    <div className="profile">
      <p>
        <img
          alt="Sam Thompson"
          src="https://portfolio-cms.sam-thompson.info/sites/default/files/pictures/2019-02/sam%20and%20frances.jpg"
        />
      </p>
      <h3>Sam Thompson</h3>
      <p>
        Professional and highly experienced full stack web developer. Currently
        living in Dallas Texas and working remotely.
      </p>
    </div>
  );
};

export default Profile;
