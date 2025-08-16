import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/theme-provider";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const ExcalidrawPage = () => {
  const { theme } = useTheme()

  const savedData = localStorage.getItem('excalidraw')
  const initialData = savedData ? JSON.parse(savedData) : null

  return (
    <main className="flex flex-col h-dvh">
      <Navbar />
      <div className="flex-1 fixed inset-0 top-8">
        <Excalidraw
          initialData={initialData}
          onChange={(elements, appState) => {
            localStorage.setItem(
              "excalidraw",
              JSON.stringify({
                elements,
                appState: {
                  viewBackgroundColor: appState.viewBackgroundColor,
                  zoom: appState.zoom,
                },
              })
            )
          }}
          theme={theme === "dark" ? "dark" : "light"}
        />
      </div>
    </main>
  )
}

export default ExcalidrawPage
