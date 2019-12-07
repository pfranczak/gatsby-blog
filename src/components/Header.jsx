import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const TitleAndDescription = ({data: {title, description}}) => (
    <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </div>
);

export default () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            description
                        }
                    }
                }
            `}
            render={data => (<TitleAndDescription data={data.site.siteMetadata}/>)}
        />
    )
};