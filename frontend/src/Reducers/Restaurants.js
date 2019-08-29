export const restaurantsReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_RESTAURANTS_SUCCESS':
          //  console.log('action: ', action.restaurants)
            return action.restaurants
        case 'GET_RESTAURANTS_FAILED':
          //  console.log('action: Failed')
            return action.restaurants     
        default:
            return state
    }
}
