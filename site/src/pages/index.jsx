import React from "react"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import style from "./index.module.css"

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <h1>内容</h1>
        <h1>内容</h1>
        <h1>内容</h1>
      </main>
    </Layout>
  )
}
