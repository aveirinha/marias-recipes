import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"

const FeaturedRecipe = ({ data }) => {
  return (
    <div className="featured-recipe-container">
      {data.edges
        .filter(({ node }) => node.frontmatter.topic === "feature")
        .map(({ node }) => (
          <Link
            key={node.id}
            to={node.fields.slug}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="featured-recipe-card">
              <Img
                className="featured-recipe-thumbnail"
                sizes={node.frontmatter.image.childImageSharp.sizes}
              />
              <div className="featured-recipe-description">
                <h3 className="featured-recipe-title">
                  {node.frontmatter.title}
                </h3>
                <p className="featured-recipe-excerpt">{node.excerpt}</p>
                <p className="featured-read-more">
                  Read Recipe - {node.frontmatter.read}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default FeaturedRecipe
