import React, { Component } from "react";
import MoviesList from "./movies_list";
import omdbApi from '../utils/api';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie_name: "Titanic",
            movies_data: []
        };
    }

    handleInputChange = (e) => {
            this.setState({
            movie_name: e.target.value
        }, (cb) => {

        })
    }


    getMoviesList = (e) => {

        e.preventDefault();

        omdbApi.search(this.state.movie_name)
            .then(res => { this.setState({ movies_data: res.data.Search }); console.log('movie output result', res.data) })
            .catch(err => console.log('sss', err));
    }

    render() {
        console.log('movie data', this.state.movies_data);
        return (
            <div>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <form style={{ width: "50%", textAlign: "center", margin: "auto" }} onSubmit={(e) => { this.getMoviesList(e) }}>
                        <div className="form-group" >
                            <label htmlFor="search">Search for a Movie:</label>
                            <input
                                onChange={(e) => {
                                    this.handleInputChange(e)
                                }}
                                name="search"
                                type="text"
                                className="form-control"
                                placeholder="Search for a Movie"
                                id="search"
                            />
                            <br />
                            <button className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </form>
                    <MoviesList moviesmetadata = {this.state.movies_data} />
                </div>
            </div>
        );
    }
}

export default SearchBar;


