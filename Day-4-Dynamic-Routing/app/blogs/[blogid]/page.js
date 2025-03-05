import React from "react"

async function Blog({ params }) {
  console.log(await params)
  const {blogid} = await params
  return <div>Blog PAge {blogid}</div>
}

export default Blog
