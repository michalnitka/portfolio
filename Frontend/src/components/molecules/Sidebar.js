import React from "react"
import NavLinks from "../atoms/NavLinks"
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <button type="button" className="closeBtn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="sideContainer">
        {isOpen && (
          <>
            <NavLinks styleClass="sidebarLinks" />
          </>
        )}
      </div>
    </aside>
  )
}

export default Sidebar