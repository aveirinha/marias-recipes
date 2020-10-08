import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

import "../styles/post-template.scss"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="post-page-container">
        <div className="post-image-container">
          <Img
            className="post-image"
            sizes={post.frontmatter.image.childImageSharp.sizes}
          />
        </div>

        <div className="container">
          <div className="post-content-container">
            <div className="post-details">
              <h1>{post.frontmatter.title}</h1>

              <h4 style={{ color: "rgb(165, 164, 164)", fontSize: "0.8em" }}>
                {post.frontmatter.date} - {post.frontmatter.cookTime} cooking
                time
              </h4>
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        cookTime
        image {
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
