import { House } from "lucide-react"
import { Link } from "react-router"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4">
      <Link to={'/'}>
        <Button size={'icon'} variant={'outline'} className="has-[>svg]:px-0 size-6 rounded-xs">
          <House />
        </Button>
      </Link>
    </nav>
  )
}

export default Navbar
