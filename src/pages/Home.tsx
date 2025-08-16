import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function Home() {
  return (
    <main>
      <Link to={'tldraw'}>
        <Button>
          Tl draw
        </Button>
      </Link>
    </main>
  );
}

export default Home;
