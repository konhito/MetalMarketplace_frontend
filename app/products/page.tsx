import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Mail, Filter, Search } from "lucide-react"
import { Navigation } from "@/components/navigation"

const products = [
  {
    id: 1,
    name: "Steel Coil - Cold Rolled",
    material: "Steel",
    grade: "CR Grade",
    thickness: "0.5mm - 3mm",
    width: "600mm - 1500mm",
    seller: "Mumbai Steel Industries",
    phone: "+91 98765 43210",
    email: "contact@mumbaiSteel.com",
    location: "Mumbai, Maharashtra",
    price: "₹45,000/MT",
    minOrder: "5 MT",
  },
  {
    id: 2,
    name: "Copper Rod - 8mm",
    material: "Copper",
    grade: "C101",
    diameter: "8mm",
    length: "6m",
    seller: "Delhi Copper Works",
    phone: "+91 98765 43211",
    email: "sales@delhicopper.com",
    location: "Delhi, NCR",
    price: "₹720/kg",
    minOrder: "100 kg",
  },
  {
    id: 3,
    name: "Aluminum Sheet - 6061",
    material: "Aluminum",
    grade: "6061-T6",
    thickness: "1mm - 10mm",
    size: "4x8 ft",
    seller: "Bangalore Aluminum Co.",
    phone: "+91 98765 43212",
    email: "info@bangalorealuminum.com",
    location: "Bangalore, Karnataka",
    price: "₹280/kg",
    minOrder: "50 kg",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Material Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Materials" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="steel">Steel</SelectItem>
                      <SelectItem value="copper">Copper</SelectItem>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Grade</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Grades" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="304">304</SelectItem>
                      <SelectItem value="316">316</SelectItem>
                      <SelectItem value="mild">Mild Steel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input placeholder="Enter city" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <div className="flex gap-2">
                    <Input placeholder="Min" />
                    <Input placeholder="Max" />
                  </div>
                </div>

                <Button className="w-full bg-slate-800 hover:bg-slate-900">Apply Filters</Button>
              </div>
            </Card>
          </div>

          {/* Product Listings */}
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h1 className="text-2xl font-bold text-slate-800">Metal Products</h1>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input placeholder="Search products..." className="pl-10 w-64" />
                </div>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6">
              {products.map((product) => (
                <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold text-slate-800">{product.name}</h3>
                        <Badge variant="secondary">{product.material}</Badge>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm text-slate-600">
                        <div>
                          <span className="font-medium">Grade:</span> {product.grade}
                        </div>
                        <div>
                          <span className="font-medium">Min Order:</span> {product.minOrder}
                        </div>
                        {product.thickness && (
                          <div>
                            <span className="font-medium">Thickness:</span> {product.thickness}
                          </div>
                        )}
                        {product.diameter && (
                          <div>
                            <span className="font-medium">Diameter:</span> {product.diameter}
                          </div>
                        )}
                        {product.width && (
                          <div>
                            <span className="font-medium">Width:</span> {product.width}
                          </div>
                        )}
                        {product.size && (
                          <div>
                            <span className="font-medium">Size:</span> {product.size}
                          </div>
                        )}
                      </div>

                      <div className="text-2xl font-bold text-orange-600 mb-2">{product.price}</div>
                    </div>

                    <div className="lg:w-80 bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-2">{product.seller}</h4>
                      <p className="text-sm text-slate-600 mb-4">{product.location}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-slate-500" />
                          <span>{product.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-slate-500" />
                          <span className="truncate">{product.email}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
