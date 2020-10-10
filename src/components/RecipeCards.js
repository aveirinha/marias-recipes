import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"

import "./RecipeCards.scss"

const RecipeCards = ({ data }) => {
  return (
    <div className="recipe-cards-container">
      {data.edges
        .filter(({ node }) => node.frontmatter.topic !== "feature")
        .map(({ node }) => (
          <Link key={node.id} to={node.fields.slug} className="recipe-card">
            <Img
              className="recipe-thumbnail"
              sizes={node.frontmatter.image.childImageSharp.sizes}
            />
            <div className="recipe-description">
              <p className="recipe-date-topic">
                {node.frontmatter.date}&nbsp;&nbsp; / &nbsp;&nbsp;
                {node.frontmatter.topic}
              </p>
              <h3 className="recipe-title">{node.frontmatter.title}</h3>
              <p className="recipe-excerpt">{node.excerpt}</p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default RecipeCards
