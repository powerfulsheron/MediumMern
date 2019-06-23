import React from "react";

const MovieList = ({movies}) => <ul>
    {
        movies.map((item, index)=>
        <li key={index}>
            {item.title}
        </li>
        )
    }
</ul>;

export default MovieList;