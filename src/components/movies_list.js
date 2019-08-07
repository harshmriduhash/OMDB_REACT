import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies_data: []
        };
    }

    componentWillReceiveProps(nextProps){
        console.log('props', nextProps)
        if(nextProps.moviesmetadata.length > 0  ){
        this.setState({
            movies_data : nextProps.moviesmetadata
        })
    }
    }
    render() {
        let moviesArray = [];
        console.log('satte', this.state.movies_data)

        if (this.state.movies_data.length > 0) {

            this.state.movies_data.map((data) => {
                moviesArray.push(
                    <Card>
                        <Card.Img variant="top" src={data.Poster} />
                        <Card.Body>
                            <Card.Title>{data.Title}</Card.Title>
                         
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{data.Year}</small>
                        </Card.Footer>
                    </Card>
                );
            })
        };
        console.log('movies meta datta array', moviesArray)

        return (
            <div>
                <CardGroup>
                    {moviesArray}
                </CardGroup>
            </div>
        );
    }
}

export default MoviesList;


