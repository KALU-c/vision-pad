import { cn } from "@/lib/utils"
import { getCurrentWindow } from "@tauri-apps/api/window"
import { Expand, Github, House, Shrink } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

const Navbar = () => {
  const appWindow = getCurrentWindow();

  const [isFullscreen, setFullscreen] = useState<boolean>(false);

  async function toggleFullscreen() {
    const isFullscreen = await appWindow.isFullscreen();
    setFullscreen(isFullscreen);
    if (isFullscreen) {
      await appWindow.setFullscreen(false);
    } else {
      await appWindow.setFullscreen(true);
    }
    setFullscreen(!isFullscreen);
  }

  return (
    <nav className="flex flex-row items-center justify-between px-2 py-1">
      <div className="flex flex-row gap-2 ">
        <Link to={'/'}>
          <Button size={'icon'} variant={'outline'} className="has-[>svg]:px-0 size-6">
            <House />
          </Button>
        </Link>

        <ModeToggle />

        <Button size={'icon'} variant={'outline'} className="has-[>svg]:px-0 size-6" onClick={toggleFullscreen}>
          <Expand
            className={cn(
              "h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out",
              isFullscreen ? "scale-0 -rotate-90" : "scale-100 rotate-0"
            )}
          />
          <Shrink
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out",
              isFullscreen ? "scale-100 rotate-0" : "scale-0 rotate-90"
            )}
          />
        </Button>
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
