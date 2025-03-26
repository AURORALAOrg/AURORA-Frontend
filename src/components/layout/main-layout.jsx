"use client"

import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} headerHeight="64px" />

      {/* Main Content Container */}
      <div className="flex flex-col flex-1 w-full transition-all duration-300 ease-in-out">
        {/* Header - Fixed height */}
        <Header onMenuClick={toggleSidebar} />

        {/* Main Content - Flexible height with proper overflow */}
        <main
          className={`flex-1 p-4 sm:p-6 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? "lg:ml-64" : ""
            }`}
        >
          <div className="container mx-auto max-w-7xl">{children}</div>
        </main>

        {/* Footer - Adjusts with sidebar */}
        <Footer customClass={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "lg:ml-64" : ""}`} />
      </div>
    </div>
  )
}

export default MainLayout

