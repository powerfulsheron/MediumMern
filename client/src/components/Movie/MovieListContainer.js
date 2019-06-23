import React from "react";
import {connect} from "react-redux";
import MovieList from "./MovieList";
import {fetchMovies} from "../../redux/actions/movies";

class MovieListContainer extends React.Component {
    // state = {
    //     movies:[]
    // }

    componentDidMount(){
        fetch("http://localhost:3000/movies", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer ",
            },
            mode:'cors'})
            .then(response => {
                if(response.status !==200){
                    throw new Error('Unable to fetch')
                } else {
                    return response.json();
                }
            })
        .then(data => {
            this.setState({
                movies:data,
                received:true
            })

        })
        .catch(()=>console.log('Error'));
    }

    render(){
        return <>
        {!this.state.received&&<span>Loading...</span>}
        {this.state.received && <MovieList movies={this.props.movies}/>}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies,
        recevied: state.movieReducer.received
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        loadMovies: dispatch(fetchMovies(dispatch))
    }
}

//export default MovieListContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);