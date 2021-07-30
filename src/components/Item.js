import React from "react";
import {Text, View} from "react-native";
//TODO make
const Item = (props) => {
    return <View style ={styles.viewStyle}>{props.children}</View>;
};
 const styles ={
     viewStyle: {
         borderWidth:1,
         borderColor: '#474747',
         borderBottomWidth: 0,
         shadowColor: 'black',
         shadowOffset: {width:1,height:1},
         shadowOpacity: 0.1,
         marginLeft:5,
         marginRight:5,
         marginTop: 10
     }
 };
export default Item;