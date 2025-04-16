"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full">
        <div className="flex flex-col space-y-4 pt-6">
          <Link href="/" className="text-lg font-medium hover:text-emerald-600" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium hover:text-emerald-600" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="/courses" className="text-lg font-medium hover:text-emerald-600" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link href="/resources" className="text-lg font-medium hover:text-emerald-600" onClick={() => setOpen(false)}>
            Resources
          </Link>
          <Link href="/blog" className="text-lg font-medium hover:text-emerald-600" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/news" className="text-lg font-medium hover:text-emerald-600" onClick={() => setOpen(false)}>
            News
          </Link>
          <Link href="/community" className="text-lg font-medium hover:text-emerald-600" onClick={() => setOpen(false)}>
            Community
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-emerald-600" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
