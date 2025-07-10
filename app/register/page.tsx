import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, User, Building, Phone, MapPin, ArrowLeft, CheckCircle, Star, Shield } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Building className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-slate-900">MetalTrade</span>
          </Link>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">Join India's Leading Metal Marketplace</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connect with verified suppliers and buyers. Start trading quality metals with transparent pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Benefits */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Why Join MetalTrade?</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Verified Network</h4>
                    <p className="text-sm text-slate-600">Access 500+ verified suppliers across India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Secure Trading</h4>
                    <p className="text-sm text-slate-600">Bank-grade security for all transactions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Quality Assured</h4>
                    <p className="text-sm text-slate-600">ISO certified materials with documentation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl">
              <h4 className="text-lg font-bold mb-4">Trusted by Industry Leaders</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-400">500+</div>
                  <div className="text-sm text-slate-300">Suppliers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">50K+</div>
                  <div className="text-sm text-slate-300">Tons Traded</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center & Right - Registration Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-xl border-0 rounded-2xl bg-white">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Your Account</h2>
                  <p className="text-slate-600">Choose your account type to get started</p>
                </div>

                {/* Account Type Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input type="radio" id="buyer" name="accountType" className="peer sr-only" defaultChecked />
                    <label
                      htmlFor="buyer"
                      className="flex flex-col items-center p-6 bg-slate-50 border-2 border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 peer-checked:border-orange-500 peer-checked:bg-orange-50 transition-all"
                    >
                      <User className="h-8 w-8 text-slate-600 peer-checked:text-orange-600 mb-3" />
                      <span className="font-semibold text-slate-900">I'm a Buyer</span>
                      <span className="text-sm text-slate-600 text-center">Looking to purchase metals</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input type="radio" id="seller" name="accountType" className="peer sr-only" />
                    <label
                      htmlFor="seller"
                      className="flex flex-col items-center p-6 bg-slate-50 border-2 border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 peer-checked:border-orange-500 peer-checked:bg-orange-50 transition-all"
                    >
                      <Building className="h-8 w-8 text-slate-600 peer-checked:text-orange-600 mb-3" />
                      <span className="font-semibold text-slate-900">I'm a Seller</span>
                      <span className="text-sm text-slate-600 text-center">Want to sell metals</span>
                    </label>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                          placeholder="Enter first name"
                          className="pl-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                          placeholder="Enter last name"
                          className="pl-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        placeholder="Enter phone number"
                        className="pl-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Company Name</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        placeholder="Enter company name"
                        className="pl-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">City</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                          placeholder="Enter city"
                          className="pl-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">State</label>
                      <Select>
                        <SelectTrigger className="h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="gujarat">Gujarat</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="password"
                        placeholder="Create a strong password"
                        className="pl-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="terms" className="mt-1" />
                      <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-orange-600 hover:text-orange-700 font-medium">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-orange-600 hover:text-orange-700 font-medium">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox id="marketing" className="mt-1" />
                      <label htmlFor="marketing" className="text-sm text-slate-600">
                        I want to receive updates about new features and market insights
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg rounded-lg shadow-lg transition-all">
                    Create Account
                  </Button>
                </form>

                <div className="relative">
                  <Separator />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-slate-500">
                    Or sign up with
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-2 border-slate-300 text-slate-700 hover:bg-slate-50 py-3 text-lg rounded-lg transition-all bg-transparent"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>

                <div className="text-center">
                  <span className="text-slate-600">Already have an account? </span>
                  <Link href="/login" className="text-orange-600 hover:text-orange-700 font-semibold">
                    Sign in
                  </Link>
                </div>
              </div>
            </Card>

            <div className="mt-6 text-center">
              <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
