import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';  


class BlogArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        
        axios.get('/api/blogs/' + this.props.match.params.id ).then(response => {
            this.setState({post : response.data });
        }).catch(error =>
            console.log(error));
    }

    render() {
        if (this.state.post) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">{this.state.post.name}</div>
        
                                <div className="card-body">
                                    <p>{this.state.post.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default BlogArticle;