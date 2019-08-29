import React, { Component } from 'react';

import { getRestaurants } from '../Actions/Restaurants'
import { connect } from 'react-redux'
import '../App.css'

class Restaurantsnew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurants: []
        }
    }
 // eslint-disable-next-line
    componentDidMount() {
        // console.log('props',this.props)
        this.props.getRestaurants()
    }

    renderRestaurants = () => {
        if (this.props.restaurants) {
            return this.props.restaurants.map((restaurant, index) => {
                //   console.log( restaurant.id)
                return (<div key={index} align="left">
                    
                    <div className="container">
                        <div class="row mb-2">
                            <div class="col-sm-4">
                                
                                
                                    <img src={restaurant.image} alt="photos" width='350px' height='200px' />
                                    
                            
                            </div>
                            <div class="col-sm-8">
                                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div class="col p-4 d-flex flex-column position-static">
                                       
                                      <h3 class="mb-0">{restaurant.id}. {restaurant.name_en}/{restaurant.name_th}</h3>

                                      <br/><p class="mb-auto"><strong>Address</strong>: {restaurant.address}</p>
                                      <p class="mb-auto"><strong>Official</strong>: {restaurant.hours}</p>  
                                      <p class="mb-auto"><strong>Cuisines</strong>: {restaurant.cuisines}</p>
                                      <p class="mb-auto"><strong>Meals</strong>: {restaurant.meals}</p>
                                      <p class="mb-auto"><strong>Features</strong>: {restaurant.features}</p>
                                      <span> <a href={restaurant.tel}>Telephone</a> : {restaurant.tel}</span>
                                      <span>  <a href={restaurant.instagram}>Instagram</a> : {restaurant.instagram}</span>
                                      <span>  <a href={restaurant.facebook}>Facebook</a> : {restaurant.facebook}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>





                </div>
                )
            })
        }
    }
    render() {
        return (
            <div style={{ margin: '20px' }}>
                {this.renderRestaurants()}

            </div>




        );
    }
}

const mapStateToProps = ({ restaurants }) => {
    return { restaurants }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurants: () => dispatch(getRestaurants())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurantsnew);