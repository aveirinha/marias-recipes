import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

const BlogCards = ({ data }) => {
  return (
    <div className="blog-container">
      {data.edges.filter(({node}) => node.frontmatter.topic !== "feature").map(
        ({node}) => (
          <Link key={node.id} to={node.fields.slug} style={{ textDecoration: 'none', color: 'inherit'}}>
            <div className="blog-card">
              <Img className="blog-thumbnail" sizes={node.frontmatter.image.childImageSharp.sizes} />
              <div className="blog-description">
                <p className="blog-date-topic">{node.frontmatter.date} &nbsp;&nbsp; ———— &nbsp;&nbsp;{node.frontmatter.topic}</p>
                <h3 className="blog-title">{node.frontmatter.title}</h3>
                <p className="blog-excerpt">{node.excerpt}</p> 
                <p className="read-more"> ——— Read More</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default BlogCards;