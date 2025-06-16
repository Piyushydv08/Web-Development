import React from 'react'

const ChildComp = React.memo(
    (props) => {

        console.log("Child Component go re-rendered again")

        return (
            <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
            </div>
        )
    }
);

export default ChildComp
//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nhi toh nhi honge

//if u r sending a function, then react.memo would not be able to save you from re-rendering