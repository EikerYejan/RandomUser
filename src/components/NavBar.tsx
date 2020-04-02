import React from "react"

import github from "../assets/images/github.webp"
import "../assets/styles/components/NavBar.scss"

type NavbarProps = {
  username: string
}

const NavBar: React.FC<NavbarProps> = ({ username }) => (
  <div id="navbar">
    <p>
      Hello <b>{username}</b>, its great to have you back
    </p>
    <a
      href="https://github.com/EikerYejan/RandomUser"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={github} alt="github-icon" />
    </a>
  </div>
)

export default NavBar
