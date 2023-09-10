import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import { posts } from "./mocks/posts"

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col my-8 mx-auto py-0 px-4 items-start gap-x-4 md:max-w-[70rem] md:flex-row">
        <div className="w-full md:w-64">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-3 md:flex-1">
          {posts.map(({ id, author, content, publishedAt }) => (
            <Post
              key={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
