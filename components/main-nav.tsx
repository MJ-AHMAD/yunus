import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        About Us
      </Link>
      <Link href="/courses" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Courses
      </Link>
      <Link
        href="/resources"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Resources
      </Link>
      <Link href="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Blog
      </Link>
      <Link href="/news" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        News
      </Link>
      <Link
        href="/community"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Community
      </Link>
      <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Contact Us
      </Link>
    </nav>
  )
}
