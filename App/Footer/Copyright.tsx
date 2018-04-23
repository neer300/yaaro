import * as React from 'react';

const divStyle = {
    left: 0,
    bottom: 0,
    width: '100%',
    "background-color": "red",
    color: "white",
    "text-align": "center"
};
export default class Copyright extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <h1>Copyright 2018</h1>
            </div>
        );
    }
}