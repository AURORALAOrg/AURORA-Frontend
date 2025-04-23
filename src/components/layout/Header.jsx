"use client"

import {
  Bell,
  Menu,
  Search,
  Settings,
  LogIn,
  LogOut,
  BookOpen,
  Lightbulb,
  Award,
  User,
  Bot,
  X
} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useWallet } from "../../context/WalletContext"
import { useAuth } from "@/context/AuthContext"
import { truncateAddress } from "../../utils/helpers"
import ConnectWalletButton from "./ui/connect-wallet-button"

const Header = ({ onMenuClick }) => {
  const { address } = useWallet()
  const { user, logout, isAuthenticated, isLoadingUser } = useAuth()
  const navigate = useNavigate()
  const searchRef = useRef(null)

  const [notifications, setNotifications] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredOptions, setFilteredOptions] = useState([])
  const [showFiltered, setShowFiltered] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const unreadCount = notifications.filter((n) => !n.isRead).length

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

  const routeMap = {
    courses: "/learning-content",
    practice: "/practiceSystem",
    resources: "/categories",
    community: "/people",
    achievements: "/certifications-obtained",
    settings: "/settings",
    notifications: "/notifications",
    grammar: "/grammar",
    vocabulary: "/vocabulary",
    speaking: "/speaking",
    listening: "/listening",
    reading: "/reading",
    games: "/games",
    challenges: "/challenges"
  }

  const handleNavClick = (key) => {
    const path = {
      'skills': '/skills',
      'grammar': '/grammar',
      'vocabulary': '/vocabulary',
      'business english': '/business-english',
      'community': '/community'
    }[key.toLowerCase()]
    
    if (path) {
      navigate(path)
      setIsMobileMenuOpen(false) // Cierra el menú móvil después de navegar
    }
    else console.warn("❗Ruta inválida desde Header:", key)
  }

  const handleSearchChange = (e) => {
    setShowFiltered(true)
    const query = e.target.value.toLowerCase()
    setSearchQuery(e.target.value)
    const filtered = learningOptions.filter((opt) =>
      opt.toLowerCase().includes(query)
    )
    setFilteredOptions(filtered)
  }

  const handleSearchOptionClick = (option) => {
    const path = routeMap[option]
    if (path) {
      navigate(path)
      setShowFiltered(false)
      setSearchQuery("")
      setIsOpen(false)
    }
  }

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, isRead: true }))
    )
  }

  // Cierra el dropdown cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowFiltered(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Previene el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  // Manejador del botón hamburguesa
  const handleMenuToggle = (event) => {
    if (onMenuClick && typeof onMenuClick === 'function') {
      onMenuClick(event);
    }
  };

  return (
    <>
      <header className="border-b border-[#e5e7eb] sticky top-0 bg-white z-50">
        <div className="container mx-auto px-2 sm:px-4 flex items-center justify-between h-16">
          {/* Botón hamburguesa (izquierda) - Visible en móvil y tablet */}
          <button 
              className="p-2 rounded-full hover:bg-gray-100 mr-4 items-center"
              onClick={handleMenuToggle}
            aria-label="Menú principal"
          >
            <Bot size={24} />
          </button>

     

          {/* Logo - Ajustado para responsive */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center cursor-pointer"
          >
            <div className="p-1 rounded">
              <img
                src="/logo.png" 
                alt="Aurora Logo"
                className="h-6 sm:h-7 md:h-8"
              />
            </div>
          </div>

          {/* Espacio flexible para centrar el logo en móvil/tablet */}
          <div className="flex-1 lg:hidden"></div>

          {/* Área de botones para dispositivos móviles y tablet pequeño */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Buscador móvil (solo icono) */}
            <button 
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>

            {/* Botón para menú de usuario/app */}
            <button 
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menú de usuario"
            >
              <Menu size={20} />
            </button>
          </div>

          

          {/* Navegación para tablet grande y desktop */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {['Skills', 'Grammar', 'Vocabulary', 'Business English', 'Community'].map((item) => (
              <button 
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Buscador (tablet grande y desktop) */}
          <div className="hidden lg:flex relative w-48 xl:w-64" ref={searchRef}>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Buscar contenido..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
              />
            </div>

            {/* Resultados de búsqueda */}
            {showFiltered && filteredOptions.length > 0 && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-60 overflow-y-auto">
                {filteredOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSearchOptionClick(option)}
                    className="text-left block w-full px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botones de autenticación (tablet grande y desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2 xl:space-x-4">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2"
                >
                  <User size={16} />
                  <span className="text-sm font-medium truncate max-w-[80px] xl:max-w-[150px]">
                    {user?.username || truncateAddress(address)}
                  </span>
                </button>
                <button 
                  onClick={logout}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <LogOut size={16} />
                  <span className="hidden xl:inline">Cerrar sesión</span>
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => navigate('/login')}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Log in
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="text-sm font-medium text-white bg-[#00b8d4] px-3 py-1.5 xl:px-4 xl:py-2 rounded hover:bg-[#00a5bd] transition-colors"
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>

        {/* Panel de búsqueda expandible */}
        {isOpen && (
          <div className="lg:hidden p-4 bg-white border-t border-gray-200 transition-all duration-300" ref={searchRef}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Buscar contenido..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                autoFocus
              />
              <button 
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} className="text-gray-400" />
              </button>
            </div>
            {/* Resultados de búsqueda */}
            {showFiltered && filteredOptions.length > 0 && (
              <div className="mt-2 bg-white rounded-md z-50 max-h-40 overflow-y-auto">
                {filteredOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSearchOptionClick(option)}
                    className="text-left block w-full px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Menú móvil y tablet */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-16 overflow-y-auto lg:hidden">
          <div className="p-4">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
            
            <nav className="flex flex-col space-y-4 mt-4">
              {['Skills', 'Grammar', 'Vocabulary', 'Business English', 'Community'].map((item) => (
                <button 
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2 border-b border-gray-100"
                >
                  {item}
                </button>
              ))}
            </nav>
            
            <div className="mt-8 pt-4 border-t border-gray-200">
              {isAuthenticated ? (
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 py-2">
                    <User size={20} />
                    <span className="text-md font-medium">
                      {user?.username || truncateAddress(address)}
                    </span>
                  </div>
                  <button 
                    onClick={logout}
                    className="flex items-center space-x-2 text-md font-medium text-gray-700 hover:text-gray-900 py-2"
                  >
                    <LogOut size={20} />
                    <span>Cerrar sesión</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={() => {
                      navigate('/login')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full text-md font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md py-3"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      navigate('/signup')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full text-md font-medium text-white bg-[#00b8d4] py-3 rounded-md hover:bg-[#00a5bd] transition-colors"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
