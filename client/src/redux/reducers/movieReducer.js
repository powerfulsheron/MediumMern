const movieReducer = (state = {
    movies: []
},action) => {
    switch(action.type){
        case 'FETCH_MOVIES_RECEIVED':{
            return{
                ...state,
                movies: action.playload.movies,
                received: true
            }
        }
        default:
            return state;
    }
}

export default movieReducer;