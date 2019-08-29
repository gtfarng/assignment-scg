import axios from 'axios'

export const getRestaurantsSuccess = restaurants => ({   type: 'GET_RESTAURANTS_SUCCESS',   restaurants});
export const getRestaurantsFailed = () => ({ type: 'GET_RESTAURANTS_FAILED'});

export const getRestaurants = () => async (dispatch) => {
   try {
      // console.log('get restaurant new')
       const response = await axios.get(`https://assignment-scg-backend.glitch.me/api/restaurants/bangsue`)
       const responseBody = await response.data;
     //  console.log('response: ', responseBody)
       dispatch(getRestaurantsSuccess(responseBody));
   } catch (error) {
      // console.error(error);
       dispatch(getRestaurantsFailed());
   }
}

