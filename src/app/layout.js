import Head from "next/head";
import "@/styles/style.scss";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <Head>
        <title>Monster Free NextJs Admin Template by Wrappixel</title>
        <meta name="description" content="Monster Free NextJs Admin Template by Wrappixel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}