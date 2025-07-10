"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import {
  MessageCircle,
  Search,
  Shield,
  ArrowRight,
  CheckCircle,
  Phone,
  Factory,
  Package,
  Building,
  Zap,
  DollarSign,
  Handshake,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Industrial Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center text-white">
          <div className="max-w-7xl mx-auto">
            {/* Animated badge */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 font-medium text-lg">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse" />
                India's Leading B2B Metal Marketplace
              </span>
            </div>

            {/* Main headline with smaller, different text */}
            <div className="space-y-6 mb-12">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="block mb-2">India's Premier</span>
                <span className="block mb-2">B2B Metal Marketplace</span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300">
                    Direct. Transparent. Reliable.
                  </span>
                </span>
              </h1>

              <div className="animate-fade-in-up space-y-4" style={{ animationDelay: "0.6s" }}>
                <p className="text-xl md:text-2xl font-medium text-gray-200">
                  Connect with <span className="text-blue-400 font-bold">500+ verified suppliers</span> across India
                </p>

                <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Get competitive prices, flexible financing, and quality-assured metals delivered to your doorstep
                </p>
              </div>
            </div>

            {/* Smaller CTA Button */}
            <div className="animate-fade-in-up mb-16" style={{ animationDelay: "0.8s" }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 group border-2 border-blue-500"
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-gray-300">
                <div className="flex items-center gap-4 group hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <span className="font-semibold text-lg">500+ Verified Suppliers</span>
                </div>
                <div className="flex items-center gap-4 group hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <span className="font-semibold text-lg">ISO Certified Platform</span>
                </div>
                <div className="flex items-center gap-4 group hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                    <Package className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span className="font-semibold text-lg">20K+ Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center space-y-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-500 transition-colors shadow-lg">
                <Package className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Wide range of products</h3>
              <p className="text-gray-300 leading-relaxed">
                Access to over 20,000 SKUs of metals with various processing services, all available in one place
              </p>
            </div>

            <div className="text-center space-y-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-500 transition-colors shadow-lg">
                <Handshake className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Direct dealing</h3>
              <p className="text-gray-300 leading-relaxed">
                Buy directly from stockiest owners with no middlemen, ensuring competitive prices and faster delivery
              </p>
            </div>

            <div className="text-center space-y-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-500 transition-colors shadow-lg">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Flexible financing solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Get financing solutions tailored to your targets, with up to 1Cr renewable limit for any number of deals
              </p>
            </div>

            <div className="text-center space-y-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-500 transition-colors shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">No collateral required</h3>
              <p className="text-gray-300 leading-relaxed">
                Financing available without collateral, with 30-60 days of invoice financing and low monthly interest
                payments of 1-1.5%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Source metal products in a <span className="text-blue-600">hassle-free way</span> with the best prices
                  available on the market
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Connect directly with verified suppliers across India and get transparent pricing with guaranteed
                  quality assurance.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Direct access to 500+ verified suppliers</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Real-time pricing and inventory updates</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Quality certification and compliance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg">
                  Start Sourcing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg rounded-lg bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Request Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Steel manufacturing facility"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Find Your Metal Requirements</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Search through thousands of products from verified suppliers across India
              </p>
            </div>

            <Card className="p-8 lg:p-12 shadow-xl border-0 rounded-2xl bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Material Type</label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500/20">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="steel">Steel</SelectItem>
                      <SelectItem value="copper">Copper</SelectItem>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                      <SelectItem value="brass">Brass</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Grade</label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500/20">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="304">304</SelectItem>
                      <SelectItem value="316">316</SelectItem>
                      <SelectItem value="mild">Mild Steel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Quantity</label>
                  <Input
                    placeholder="Min quantity"
                    className="h-12 rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Location</label>
                  <Input
                    placeholder="Enter city"
                    className="h-12 rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 text-lg rounded-lg shadow-lg transition-all">
                <Search className="h-5 w-5 mr-3" />
                Search Products
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">How MetalTrade Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple, transparent process to connect buyers with verified suppliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Search & Compare</h3>
              <p className="text-slate-600 leading-relaxed">
                Browse through thousands of metal products from verified suppliers. Compare prices, specifications, and
                delivery terms.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Connect & Negotiate</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect directly with suppliers through our platform. Negotiate prices, quantities, and terms that work
                for your business.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Secure & Deliver</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete transactions securely with our financing options. Track your orders and receive quality-assured
                materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of businesses transforming their metal procurement
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-6xl font-bold text-blue-400">500+</div>
              <div className="text-slate-300 text-lg">Verified Suppliers</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-bold text-blue-400">20K+</div>
              <div className="text-slate-300 text-lg">Product SKUs</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-bold text-blue-400">50K+</div>
              <div className="text-slate-300 text-lg">Tons Traded</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-bold text-blue-400">25+</div>
              <div className="text-slate-300 text-lg">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Supplying quality metals to diverse sectors across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Construction</h3>
              <p className="text-sm text-slate-600">Steel beams, rebar, structural materials</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Manufacturing</h3>
              <p className="text-sm text-slate-600">Raw materials, sheets, coils</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Electrical</h3>
              <p className="text-sm text-slate-600">Copper wires, aluminum conductors</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Packaging</h3>
              <p className="text-sm text-slate-600">Aluminum foils, tin plates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Transform Your Metal Procurement?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Join India's fastest-growing B2B metal marketplace and connect with verified suppliers today
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-4 text-lg rounded-lg transition-all bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Instant onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-2xl transition-all hover:scale-110">
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
