import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class BlogArticle extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            body: ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleBodyChange(e) {
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/blogs', this.state).then(response => {
            console.log(response);
        }).then(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Novo post</div>
    
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter blog name"
                                            className="form-control"
                                            onChange={this.handleNameChange.bind(this)}
                                            value={this.state.name}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            name="body"
                                            placeholder="Enter blog text"
                                            className="form-control"
                                            onChange={this.handleBodyChange.bind(this)}
                                            value={this.state.body}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-success">Salvar</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogArticle;