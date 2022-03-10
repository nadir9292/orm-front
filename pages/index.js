import Link from "next/link"

const index = () => {
  return (
    <>
      <ol>
        <li>
          <Link href={"/Login"}>
            <a className="text-blue-600">Log in</a>
          </Link>
        </li>
        <li>
          <Link href={"/Sign-up"}>
            <a className="text-blue-600">Sign up</a>
          </Link>
        </li>
      </ol>
    </>
  )
}

export default index
