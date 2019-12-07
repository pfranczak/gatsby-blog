import React from 'react';
import { graphql, Link } from 'gatsby';

export default ({data, pageContext}) => {
    console.log(data, pageContext)
    return (
        <div>
            tags here
        </div>
    )
};