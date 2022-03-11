import Link from "next/link"
import Button from "../src/components/Button"

const index = () => {
  return (
    <>
      <ol>
        <li>
          <Button variant="primary" size="lg">
            <Link href={"/Login"}>
              <a>Sign in</a>
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="secondary" size="lg">
            <Link href={"/signup"}>
              <a>Sign up</a>
            </Link>
          </Button>
        </li>
      </ol>
    </>
  )
}

export default index
