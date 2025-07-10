"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="w-6 h-6 bg-white rounded-lg opacity-90"></div>
            </div>
            <span className="text-2xl font-bold text-slate-900">MetalTrade</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 relative group py-2"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/products"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 relative group py-2"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/sellers"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 relative group py-2"
            >
              Sellers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/login"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200"
            >
              Login
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="rounded-xl">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-slate-200/50">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200"
              >
                Products
              </Link>
              <Link
                href="/sellers"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200"
              >
                Sellers
              </Link>
              <Link
                href="/login"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200"
              >
                Login
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit px-6 py-2 rounded-xl shadow-lg mx-4">
                Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
