import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/Seo"
import Layout from "../components/Layout"

import "../styles/recipe-template.scss"

export default ({ data }) => {
  const recipe = data.markdownRemark

  return (
    <Layout>
      <SEO title={recipe.frontmatter.title} />

      <div className="recipe-page-container">
        <Img
          className="recipe-image"
          sizes={recipe.frontmatter.image.childImageSharp.sizes}
        />

        <div className="container">
          <div className="recipe-content-container">
            <div className="recipe-details">
              <h1 className="font-header">{recipe.frontmatter.title}</h1>

              <div className="info">
                <h4 className="cooking-time">
                  <span role="img" aria-label="timer">
                    ⌛
                  </span>{" "}
                  {recipe.frontmatter.cookTime} cooking time
                </h4>

                <h4>
                  {recipe.frontmatter.author}{" "}
                  <span role="img" aria-label="calendar">
                    📆
                  </span>{" "}
                  {recipe.frontmatter.date}
                </h4>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: recipe.html }} />
          </div>
        </div>
      </div>

      <div className="recipe-image-footer-container">
        <Img
          className="recipe-image-footer"
          sizes={recipe.frontmatter.image.childImageSharp.sizes}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query recipeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        cookTime
        author
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
