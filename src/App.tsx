import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div>
      <Header />
      {/* coloquei a classe relative para teste */}
      <div className="flex max-w-[70rem] my-8 mx-auto py-0 px-4 items-start gap-x-4">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    </div>
  )
}

export default App
