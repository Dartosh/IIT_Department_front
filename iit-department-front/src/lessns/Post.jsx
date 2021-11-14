import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    state = {
        post: [],
    }

    componentDidMount() {
        const id = this.props.match.params.id || '';

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    post: data,
                })
            })
    }

    render() {
        const { post } = this.state;
        const { title, body } = post;

        return (
            <Fragment>
                ...
            </Fragment>
        )
    }
}