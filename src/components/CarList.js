import React,{Component} from "react";
import {Text,SafeAreaView,ScrollView,Button} from "react-native";
//TODO
import axios from "axios";
//TODO import CarDetail.js
import CarDetail from "./CarDetail";
// class based component
//make https request with axios in didmount
class CarList extends Component {
    constructor() {
        super();
        this.state = {carList: [] };
    }
    componentDidMount() {
        axios.get('https://givecars.herokuapp.com/').then((response) => {
            this.setState({carList: response.data});
        });
    };

    renderList = () => {
        return this.state.carList.map((brand) => {
            return <CarDetail key={brand.model[1].name} brand={brand}/>;
        });
    };


    render(){
        console.log(this.state)
        return(
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}

export default CarList;


