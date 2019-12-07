import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';

const Layout = ({data: {allMarkdownRemark: {edges}}}) => {
    return (
        <div>
            <Header/>
            {edges.map(({node: {frontmatter: {path, title, date}}}) => 
                <div key={path}>
                    <Link to={path}><h3>{title}</h3></Link>
                    <p>{date}</p>
                </div>
            )}
        </div>
    );
}

export const postsQuery = graphql`
    query HomepageQuery {
         allMarkdownRemark (
             sort: {order: DESC, fields: [frontmatter___date]}
         ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                    }
                }
            }
        }
    }
`;

export default Layout;
