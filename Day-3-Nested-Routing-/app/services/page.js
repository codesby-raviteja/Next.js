import Link from "next/link"
import React from "react"

export default function Services() {
  // ROUTING AND NESTED ROUTING IS ALWAYS CASE SENSITIVE AND ALSO IT IS Good practice to use lowercase for routing

  return (
    <>
      <h1>Welcome to Services Page</h1>
      <p>
        <Link href={"/services/webservices"}>Web Services</Link>
      </p>
      <p>
        <Link href={"/services/app-services"}>App Services</Link>
      </p>
      <p>
        <Link href={"/services/design-services"}>Design Services</Link>
      </p>
      <p>
        <Link href={"/services/seo-services"}>SEO Services</Link>
      </p>
    </>
  )
}
