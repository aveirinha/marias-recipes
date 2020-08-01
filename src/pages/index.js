import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import RecipeCards from "../components/RecipeCards"
import FeaturedRecipe from "../components/FeaturedRecipe"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Recipes by Maria" />
      <FeaturedRecipe data={data.recipe} />
      <RecipeCards data={data.recipe} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    recipe: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/recipes/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            read
            topic
            image {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
