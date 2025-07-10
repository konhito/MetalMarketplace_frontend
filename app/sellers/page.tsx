import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Phone, Mail, Star, CheckCircle, Building, Filter, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

const sellers = [
  {
    id: 1,
    name: "Mumbai Steel Industries",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    reviews: 156,
    verified: true,
    specialties: ["Steel Coils", "Sheets", "Pipes"],
    experience: "15+ years",
    phone: "+91 98765 43210",
    email: "contact@mumbaiSteel.com",
    description: "Leading supplier of high-quality steel products with ISO certification and nationwide delivery.",
    products: 245,
    completedOrders: 1200,
    responseTime: "< 2 hours",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Delhi Copper Works",
    location: "Delhi, NCR",
    rating: 4.9,
    reviews: 203,
    verified: true,
    specialties: ["Copper Rods", "Wires", "Sheets"],
    experience: "12+ years",
    phone: "+91 98765 43211",
    email: "sales@delhicopper.com",
    description: "Premium copper products manufacturer with advanced quality testing and fast delivery.",
    products: 189,
    completedOrders: 890,
    responseTime: "< 1 hour",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Bangalore Aluminum Co.",
    location: "Bangalore, Karnataka",
    rating: 4.7,
    reviews: 134,
    verified: true,
    specialties: ["Aluminum Sheets", "Extrusions", "Foils"],
    experience: "20+ years",
    phone: "+91 98765 43212",
    email: "info@bangalorealuminum.com",
    description: "Specialized in aluminum products with custom fabrication services and technical support.",
    products: 167,
    completedOrders: 756,
    responseTime: "< 3 hours",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Chennai Metal Traders",
    location: "Chennai, Tamil Nadu",
    rating: 4.6,
    reviews: 98,
    verified: true,
    specialties: ["Stainless Steel", "Brass", "Bronze"],
    experience: "10+ years",
    phone: "+91 98765 43213",
    email: "orders@chennaimetal.com",
    description: "Comprehensive metal trading company with competitive pricing and reliable supply chain.",
    products: 298,
    completedOrders: 654,
    responseTime: "< 4 hours",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function SellersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Verified Metal Suppliers</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect with India's most trusted metal suppliers. All sellers are verified with quality certifications
              and proven track records.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <Card className="p-6 shadow-lg border-0 rounded-2xl bg-white max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Search suppliers by name or material..."
                    className="pl-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                  />
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20">
                    <SelectValue placeholder="Material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="steel">Steel</SelectItem>
                    <SelectItem value="copper">Copper</SelectItem>
                    <SelectItem value="aluminum">Aluminum</SelectItem>
                    <SelectItem value="brass">Brass</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Sellers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">500+ Verified Suppliers</h2>
              <p className="text-slate-600">Showing results for all locations and materials</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="orders">Most Orders</SelectItem>
                  <SelectItem value="response">Fastest Response</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sellers.map((seller) => (
              <Card
                key={seller.id}
                className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl bg-white"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center">
                        <Building className="h-8 w-8 text-slate-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-slate-900">{seller.name}</h3>
                          {seller.verified && <CheckCircle className="h-5 w-5 text-green-500" />}
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 mb-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{seller.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-semibold text-slate-900">{seller.rating}</span>
                          </div>
                          <span className="text-sm text-slate-600">({seller.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">{seller.experience}</Badge>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">{seller.description}</p>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {seller.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{seller.products}</div>
                      <div className="text-sm text-slate-600">Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{seller.completedOrders}</div>
                      <div className="text-sm text-slate-600">Orders</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600">{seller.responseTime}</div>
                      <div className="text-sm text-slate-600">Response</div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="h-4 w-4" />
                      <span>{seller.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="h-4 w-4" />
                      <span>{seller.email}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-200">
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">View Products</Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 bg-transparent"
            >
              Load More Suppliers
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Become a Verified Supplier?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our network of trusted suppliers and reach thousands of buyers across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">Apply as Supplier</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
