"use client"

import { Bell, Menu, Search, Settings, LogIn, LogOut, BookOpen, Lightbulb, Award, User } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useWallet } from "../../context/WalletContext"
import { truncateAddress } from "../../utils/helpers"
import ConnectWalletButton from "./ui/connect-wallet-button"


const mockNotifications = [
  {
    id: "1",
    title: "New Course Available",
    message: "Introduction to Web3 Development is now available",
    timestamp: "2 hours ago",
    isRead: false,
  },
  {
    id: "2",
    title: "Assignment Due",
    message: "Your Blockchain Basics assignment is due tomorrow",
    timestamp: "1 day ago",
    isRead: true,
  },
  {
    id: "3",
    title: "Achievement Unlocked",
    message: "You completed Smart Contract Security module",
    timestamp: "3 days ago",
    isRead: false,
  },
]

const Header = ({ onMenuClick }) => {
  const { address } = useWallet()
  const [currentPage, setCurrentPage] = useState("home")
  // const [activeTooltip, setActiveTooltip] = useState(null)
  const [notifications, setNotifications] = useState(mockNotifications)
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredOptions, setFilteredOptions] = useState([])
  const [showFiltered, setShowFiltered] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const unreadCount = notifications.filter((n) => !n.isRead).length
  const navigate = useNavigate()

  const learningOptions = [
    "grammar",
    "vocabulary",
    "speaking",
    "listening",
    "reading",
    "games",
    "courses",
    "practice",
    "challenges",
    "achievements",
  ]

  const handleNavClick = (page) => {
    setCurrentPage(page)
    navigate(page)
  }

  const markAllAsRead = () => {
    setNotifications((prevNotifications) => prevNotifications.map((n) => ({ ...n, isRead: true })))
  }

  const handleChange = (e) => {
    setShowFiltered(true)
    const query = e.target.value.toLowerCase()
    setSearchQuery(e.target.value)
    const filteredOptionsinArray = learningOptions.filter((eachOption) => eachOption.toLowerCase().includes(query))
    setFilteredOptions(filteredOptionsinArray)
  }

  const handleLogin = () => {
    // console.log("Iniciando sesión...")
    // setIsLoggedIn(true)

    navigate("/login")
  }

  const handleLogout = () => {
    console.log("Cerrando sesión...")
    setIsLoggedIn(false)
    setShowProfileMenu(false)
  }

  return (
    <header className="h-16 border-b border-blue-100 bg-white px-6 shadow-sm">
      <div className="flex items-center justify-between h-full max-w-[1440px] mx-auto">
        {/* Logo and Menu Button */}
        <div className="flex items-center">
          <button
            className="p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg mr-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            onClick={onMenuClick}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center">
            <BookOpen className="h-7 w-7 text-blue-500 mr-2" />
            <span className="text-xl font-bold text-blue-700 hidden sm:inline">Aurora</span>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex ml-8 space-x-6">
            {["Courses", "Practice", "Resources", "Community"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${currentPage === item.toLowerCase() ? "text-blue-600 border-b-2 border-blue-500" : "text-gray-600"
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-blue-400" />
          </div>
          <input
            type="text"
            placeholder="Search for courses, topics, skills..."
            className="block w-full pl-10 pr-3 py-2 border border-blue-100 rounded-full bg-blue-50 text-sm placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            value={searchQuery}
            onChange={(e) => handleChange(e)}
          />
          {showFiltered && searchQuery.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-blue-100 rounded-lg shadow-lg cursor-pointer z-10">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    className="px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    key={index}
                    onClick={() => {
                      setSearchQuery(option)
                      navigate(`/${option}`)
                      setShowFiltered(false)
                    }}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-center">No results found for &quot;{searchQuery}&quot;</div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {/* Progress Indicator */}
          <div className="hidden md:flex items-center mr-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Lightbulb className="h-4 w-4 text-blue-500" />
            </div>
            <div className="ml-2">
              <div className="text-xs text-gray-500">Daily Progress</div>
              <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <button
            className="hidden sm:flex items-center justify-center h-9 w-9 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            onClick={() => handleNavClick("achievements")}
          >
            <Award className="h-5 w-5" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              className="relative flex items-center justify-center h-9 w-9 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-medium">
                  {unreadCount}
                </span>
              )}
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-blue-100 rounded-lg shadow-lg z-50">
                <div className="flex justify-between items-center px-4 py-3 border-b border-blue-100 bg-blue-50 rounded-t-lg">
                  <span className="font-semibold text-blue-700">Notifications</span>
                  <button className="text-xs text-blue-600 hover:text-blue-800 font-medium" onClick={markAllAsRead}>
                    Mark all as read
                  </button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 border-b border-blue-50 hover:bg-blue-50 transition-colors cursor-pointer ${!notification.isRead ? "bg-blue-50" : ""
                          }`}
                        onClick={() => navigate("/notifications")}
                      >
                        <div className="flex justify-between">
                          <p
                            className={`text-sm ${!notification.isRead ? "font-semibold text-blue-800" : "text-gray-700"}`}
                          >
                            {notification.title}
                          </p>
                          {!notification.isRead && <span className="h-2 w-2 bg-blue-500 rounded-full"></span>}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                        <span className="text-xs text-gray-400 mt-1 block">{notification.timestamp}</span>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-gray-500 text-center">No notifications</div>
                  )}
                </div>
                <div className="px-4 py-2 border-t border-blue-100 bg-blue-50 rounded-b-lg">
                  <button
                    className="text-xs text-blue-600 hover:text-blue-800 w-full text-center"
                    onClick={() => navigate("/notifications")}
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button
            onClick={() => handleNavClick("settings")}
            className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </button>

          {/* User Profile / Login */}
          {!isLoggedIn ? (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors shadow-sm"
            >
              <LogIn className="h-4 w-4" />
              <span className="text-sm font-medium">Login</span>
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <User className="h-5 w-5" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-blue-100 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 border-b border-blue-100">
                    <p className="text-sm font-medium text-gray-700">User Name</p>
                    <p className="text-xs text-gray-500 mt-1">user@example.com</p>
                  </div>

                  <div className="py-1">
                    <button
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 w-full text-left transition-colors"
                      onClick={() => navigate("/profile")}
                    >
                      Your Profile
                    </button>
                    <button
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 w-full text-left transition-colors"
                      onClick={() => navigate("/learning-path")}
                    >
                      Learning Path
                    </button>
                    <button
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 w-full text-left transition-colors"
                      onClick={() => navigate("/certificates")}
                    >
                      Certificates
                    </button>
                  </div>

                  {address && (
                    <div className="px-4 py-2 border-t border-blue-100">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>Wallet:</span>
                        <span className="font-medium">{truncateAddress(address)}</span>
                      </div>
                    </div>
                  )}

                  <div className="border-t border-blue-100">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Wallet Connection - Only show if not on small screens and not logged in */}
          <div className="hidden sm:block">
            <ConnectWalletButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

