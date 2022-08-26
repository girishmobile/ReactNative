import React from 'react';
export const navigationRef = React.createRef();
const navigate = (name, params) => {
    // first we can check current navigation is avialable then after navigate 
    if (!navigationRef.current)//current screen is available or 
        navigationRef.current.navigate(name, params);
}
export default {
    navigate
}
//it oneline exported so we can use in multiple time