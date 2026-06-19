import Link from "next/link";

export default function NotFound(){

    return (

        <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>404</h1>

      <p>Looks like you're lost.</p>

      <Link href="/">
        Go Back Home
      </Link>
    </div>

    )

}