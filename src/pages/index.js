import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Project from "../components/Project"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>
    <Project></Project>
    <Skills></Skills>
    <About></About>
    <Promotion></Promotion>
    <Footer></Footer>
    
  </Layout>
)

export default IndexPage
