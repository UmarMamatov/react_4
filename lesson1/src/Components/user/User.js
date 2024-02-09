import React from 'react';

const User = ({name,age,fontColor}) => {
    console.log(name,age)
    return (
        <div>
            <p> name:{name}</p>
            <p style={{
                color: fontColor
            }}> age:{age}</p>
        </div>
    );
};

export default User;