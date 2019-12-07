import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';

const Layout = ({data: {allMarkdownRemark: {edges}}}) => {
    return (
        <div>
            <Header/>
            {edges.map(({node: {frontmatter: {path, title, date}}}) => 
                <div key={path}>
                    <h3>{title}</h3>
                    <p>{date}</p>
                </div>
            )}
        </div>
    );
}

export const postsQuery = graphql`
    query HomepageQuery {
         allMarkdownRemark {
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
