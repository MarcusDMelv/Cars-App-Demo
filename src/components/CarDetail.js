import React from "react";
import {Text,Image, View,Linking} from "react-native";
// TODO import Item / ItemSection js
import Item from "./Item";
import ItemSection from "./ItemSection";
import Button from "./Button";

//TODO functional component
const CarDetail = ({brand}) => {
    const {headerContainer, headerText, imageStyle} = styles;

    return(
        <Item>
            <ItemSection>
                <View style = {headerContainer}>
                    <Text style = {headerText}>{brand.brand}</Text>
                    <Text style = {headerText}>{brand.model[1].name}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image style = {imageStyle}
                    source={{ uri: brand.model[1].image}}/>
            </ItemSection>
            <ItemSection>
                <Button
                    buttonPress={ () => {
                        Linking.openURL(brand.model[1].url);
                    }}

                />
            </ItemSection>
        </Item>

    );
};


const styles ={
    headerContainer:{
        flexDirection:"column",
        justifyContent: "space-between"
    },
    headerText:{
      fontSize:18,
      fontWeight: '500',
      textTransform: 'uppercase'
    },
    imageStyle: {
        height: 300,
        flex:1,
        width:0
    },
    buttonStyle:{


    }
};
export default CarDetail;