import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Blog from '../components/Blog/Blog';
import BlogArticle from '../components/Blog/BlogArticle';
import BlogArticlePost from '../components/Blog/BlogArticlePost';


import Example from '../components/Example';

class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/article-post">Novo Blog</Link>


                        <Route path="/" exact component={Example} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog/:id" exact render={props => <BlogArticle{...props} /> } />
                        <Route path="/article-post" exact component={BlogArticlePost} />

                    </div>
                </Router>
            </div>
        )
    }
}

export default Index;


if (document.getElementById('blog')) {
    ReactDOM.render(
        <Index />, document.getElementById('blog'));
}