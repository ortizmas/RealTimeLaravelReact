import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';  
import { Link } from 'react-router-dom';


class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        axios.get('/api/blogs').then(response => {
            this.setState({
                blogs: response.data
            })
        }).catch(errors => {
            console.log(errors);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Blog Component !!</div>
    
                            <div className="card-body">
                                <h4>Listado de blogs</h4>
                                <ul className="list-group">
                                    {this.state.blogs.map(blog => 
                                        // <li className="list-group-item" key={blog.id}>{blog.body}</li>
                                        <Link key={blog.id} to={"/blog/" + blog.id}>{blog.name}</Link>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog