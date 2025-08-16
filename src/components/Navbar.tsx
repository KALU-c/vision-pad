import { House } from "lucide-react"
import { Link } from "react-router"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-2 px-2 py-1">
      <Link to={'/'}>
        <Button size={'icon'} variant={'outline'} className="has-[>svg]:px-0 size-6">
          <House />
        </Button>
      </Link>

      <ModeToggle />
    </nav>
  )
}

export default Navbar
