import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Nav from "../components/Nav"

export default ({ data }) => {
  const post = data.markdownRemark;
  
  return (
    <div>
      <Nav post={true}/>
        <div className="post-page-container">
          <div className="post-page-flex-container">
            <div className="post-image-container">
              <Img className="post-image" sizes={post.frontmatter.image.childImageSharp.sizes} />
            </div>
            
            <div className="post-content-container">
              <h1>{post.frontmatter.title}</h1>
              <h4 style={{color: 'rgb(165, 164, 164)', fontSize: '0.8em'}}>{post.frontmatter.date} - {post.frontmatter.read}</h4>
              <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
            </div>
          </div>
          
        </div>
    </div>
  );
};

export const query = graphql`query PostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      date
      read
      image {
        childImageSharp{
            sizes(maxWidth: 630) {
                ...GatsbyImageSharpSizes
            }
        }
    }
    }
  }
}`;