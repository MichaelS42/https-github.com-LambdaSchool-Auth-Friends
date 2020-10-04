import React from 'react';

const Friends = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Email: {props.email}</h3>
            <h3>Age: {props.age}</h3>
        </div>
    )
}

export default Friends;