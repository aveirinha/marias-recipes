import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <div className="container main">
      <SEO title="404 - Not found" />
      <h1 className="font-header">Not Found</h1>
      <p>
        Nothing cooking here! <Link to="/">Go Home</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
