import React from 'react';
import { Red, Blue, Green } from './styledcomps/Colors';

const colorPicker = ( color, index ) => {
    switch(color){
        case "red":
            return <Red key={index}/>;
        case "blue":
            return <Blue key={index}/>;
        case "green":
            return <Green key={index}/>;
        default:
            return <Red key={index}/>;
    }
};

export default colorPicker;