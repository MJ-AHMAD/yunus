import Link from "next/link"
import { Linkedin, Facebook, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-zinc-50 dark:bg-zinc-950">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-600">Yunus Inspire</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Empowering the minds of Bangladesh, one dream at a time.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-zinc-500 dark:text-zinc-400">Email: mjahmad2024@outlook.com</li>
              <li className="text-zinc-500 dark:text-zinc-400">Phone: +8801336221217</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
            © 2025 Yunus Inspire. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
