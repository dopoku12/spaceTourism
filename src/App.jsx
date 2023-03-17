
import { Outlet } from "react-router-dom";
import Nav from './components/Nav'

function App() {
  return (
    <div className='app text-white'>
      <header>
        <Nav />
      </header>
      <main>
        <div>
          So, you want to travel to
        </div >

        <div>
          Space
        </div>

        <div>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
          Explore
        </div>
        <Outlet />

      </main>

    </div>
  )
}

export default App
