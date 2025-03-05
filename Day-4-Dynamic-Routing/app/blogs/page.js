import Link from "next/link"

export default async function Blogs({ params }) {
  console.log(await params)
  return (
    <>
      <h1>All Blogs</h1>
      {["Blog-1", "Blog-2", "Blog-3"].map((blog, i) => (
        <p key={i}>
          <Link  href={`/blogs/${i}`}>
            {blog}
          </Link>
        </p>
      ))}
    </>
  )
}
