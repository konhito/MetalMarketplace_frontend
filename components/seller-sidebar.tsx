"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Package, Plus, Upload, BarChart3, Settings, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  { name: "My Inventory", href: "/seller/dashboard", icon: Package },
  { name: "Add Product", href: "/seller/add-product", icon: Plus },
  { name: "Upload Excel", href: "/seller/upload", icon: Upload },
  { name: "Analytics", href: "/seller/analytics", icon: BarChart3 },
  { name: "Profile", href: "/seller/profile", icon: User },
  { name: "Settings", href: "/seller/settings", icon: Settings },
]

export function SellerSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-slate-200 min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-6">Seller Panel</h2>
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn("w-full justify-start", isActive && "bg-orange-500 hover:bg-orange-600")}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
