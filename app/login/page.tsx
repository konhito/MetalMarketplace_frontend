import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, Eye, ArrowLeft, Building, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-slate-900">MetalTrade</span>
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-slate-900 leading-tight">
                Welcome back to India's leading metal marketplace
              </h1>
              <p className="text-xl text-slate-600">
                Access your dashboard and continue trading with verified suppliers across the country.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Secure Platform</h3>
                <p className="text-sm text-slate-600">Bank-grade security for all transactions</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Verified Network</h3>
                <p className="text-sm text-slate-600">500+ trusted suppliers nationwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="p-8 shadow-xl border-0 rounded-2xl bg-white">
            <div className="space-y-6">
              {/* Mobile Logo */}
              <div className="lg:hidden text-center">
                <Link href="/" className="inline-flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">MetalTrade</span>
                </Link>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Sign In</h2>
                <p className="text-slate-600">Access your account to continue trading</p>
              </div>

              <form className="space-y-4">
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
                  <label className="text-sm font-semibold text-slate-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10 pr-10 h-12 rounded-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm text-slate-600">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                    Forgot password?
                  </Link>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg rounded-lg shadow-lg transition-all">
                  Sign In
                </Button>
              </form>

              <div className="relative">
                <Separator />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-slate-500">
                  Or continue with
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
                <span className="text-slate-600">Don't have an account? </span>
                <Link href="/register" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Sign up
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
  )
}
