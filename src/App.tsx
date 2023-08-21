import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div>
      <Header/>
      {/* <div className="max-w-[70rem] my-8 mx-auto bg-green-500 py-0 px-4 grid grid-cols-2 gap-x-4 items-start">
        <div className="bg-pink-600 w-64">1</div>
        <div className="bg-purple-600 col-span-1">2</div>
      </div> */}
      <div className="flex max-w-[70rem] my-8 mx-auto py-0 px-4 items-start gap-x-4">
        <div className="w-64">
          <Sidebar/>
        </div>
        <div className="flex-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sunt dicta, similique inventore impedit possimus minus asperiores natus qui, eius perferendis ex architecto! Dicta sit deleniti aperiam tenetur, quae expedita.
        Repudiandae aliquid similique odit impedit suscipit dicta dolore laboriosam nam necessitatibus accusantium quae quo, nihil ipsa dolorem eius sunt consequuntur commodi quod nesciunt, nisi sapiente perspiciatis voluptates? Illum, corporis placeat!</div>
      </div>
    </div>
  )
}

export default App
