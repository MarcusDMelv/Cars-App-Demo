// TODO Create header of the APP
//import libraries
import React from "react";
import {Text,SafeAreaView} from "react-native";
//Todo consume parent prop
// create component
const Header= (props) =>{
    const {textStyle,viewStyle} = styles;
    return (
        <SafeAreaView style = {viewStyle}>
            <Text style ={textStyle}> {props.titleOfApp}</Text>
        </SafeAreaView>
    );
};


// style the view
const styles ={
    textStyle: {
        fontSize:35,
        color:"white",


    },
    viewStyle: {
        backgroundColor:'#474747',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:25,


    },
};
//render component
export default Header;