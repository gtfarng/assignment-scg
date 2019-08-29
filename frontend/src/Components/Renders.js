import React, {Component} from 'react';
import {store} from "../Components/Restaurants";
import {connect} from "react-redux";
import {getRestaurants,  getRestaurant } from "../Actions/index"

class Renders extends Component {

    componentDidMount = () => {
        this.props.getRestaurants()
        console.log("enable")
    }

    renderRestaurant = () => {
        if ( this.props.restaurantsData )
            return  this.props.restaurantsData.map( (restaurant,index) =>
                (<li key={index}>
                    {restaurant.id} {restaurant.name_en} {restaurant.name_th}
                    
                </li>)
            )
    }


    render() {
        return (
            <div style={{margin: '20px'}}>
                <h2>Render Restaurants</h2>

                

                <ul>
                    { this.renderRestaurant()}
                </ul>

               




            </div>
        );
    }
}


const mapStateToProps = ( action  ) => {
    return {
        restaurantsData: action.restaurantsData,
        name_en:action.restaurantsData.name_en,
        name_th:action.restaurantsData.name_th,
        address:action.restaurantsData.address,
        hours:action.restaurantsData.hours,
        tel:action.restaurantsData.tel,
        cuisines:action.restaurantsData.cuisines,
        meals:action.restaurantsData.meals,
        Dinner:action.restaurantsData.Dinner,
        features:action.restaurantsData.features,
        image:action.restaurantsData.image, 
        instagram:action.restaurantsData.instagram, 
        facebook:action.restaurantsData.facebook
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurants:   () => store.dispatch(getRestaurants()),     
        getRestaurant:  (id) => store.dispatch(getRestaurant(id))
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Renders);