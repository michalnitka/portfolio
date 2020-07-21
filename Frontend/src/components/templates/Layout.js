import React from "react"
import NavBar from "../organisms/NavBar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout
