import { Github, House } from "lucide-react"
import { Link } from "react-router"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-2 py-1">
      <div className="flex flex-row gap-2 ">
        <Link to={'/'}>
          <Button size={'icon'} variant={'outline'} className="has-[>svg]:px-0 size-6">
            <House />
          </Button>
        </Link>

        <ModeToggle />
      </div>

      <a href="https://github.com/KALU-c" target="_blank" rel="noopener noreferrer">
        <Button size={'icon'} variant={'outline'} className="has-[>svg]:px-0 size-6">
          <Github />
        </Button>
      </a>
    </nav>
  )
}

export default Navbar
