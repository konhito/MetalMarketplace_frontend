"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Package, BarChart3, Settings, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Reports", href: "/admin/reports", icon: FileText },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start text-white hover:text-white",
                    isActive && "bg-orange-500 hover:bg-orange-600",
                  )}
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
