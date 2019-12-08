import React from 'react';
import { Link } from 'gatsby';

export default ({data, pageContext}) => {
    const {tagName, posts} = pageContext;
    return (
        <div>
            <h1>Posts about {tagName}</h1>
            <ul>
                {posts.map(({frontmatter}) => {
                    const {path, title} = frontmatter;
                    return (
                            <li key={path}><Link to={path}>{title}</Link></li>
                    )})
                }
            </ul>
        </div>
    )
};