import React from "react";
import {Text,TouchableOpacity} from "react-native";

//TODO Functional Button Component

const Button = props =>{
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity onPress={props.buttonPress} style ={buttonStyle}>
            <Text style={textStyle}> More Details</Text>
        </TouchableOpacity>
    );
};

export default Button;


const styles = {
    buttonStyle: {
        backgroundColor:'#474747',
    },

    textStyle:{
        color:'white',
        fontSize : 18,
    }
}