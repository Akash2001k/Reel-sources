import React, { useState } from 'react'
import './ThemeChanger.css'

const ThemeChanger = () => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () =>{
    setTheme(!theme)
  }

  return (
    <div className={`parent_div ${theme?"light":"dark"}`}>
      <nav>
        <h2>Navbar</h2>
        <div>
            <button onClick={changeTheme}>
                {theme?"Dark":"Light"} Mode
            </button>
        </div>
      </nav>
      <main>
        <h1>Hello, I am Akash</h1>
        <p>Full Stack Developer</p>
      </main>
    </div>
  )
}

export default ThemeChanger
