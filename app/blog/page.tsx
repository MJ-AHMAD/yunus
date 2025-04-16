import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Yunus Inspire Blog</h1>
              <p className="max-w-[700px] text-zinc-100 md:text-xl/relaxed">
                Articles and tutorials on education, technology, and innovation
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/blog/videos">Watch Video Tutorials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex overflow-x-auto pb-4 mb-4 space-x-4 no-scrollbar">
            <Button variant="outline" className="rounded-full">
              All Articles
            </Button>
            <Button variant="outline" className="rounded-full">
              Web Development
            </Button>
            <Button variant="outline" className="rounded-full">
              Programming
            </Button>
            <Button variant="outline" className="rounded-full">
              Data Science
            </Button>
            <Button variant="outline" className="rounded-full">
              Artificial Intelligence
            </Button>
            <Button variant="outline" className="rounded-full">
              Career Tips
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Featured Articles</h2>
              <p className="text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed mt-2">
                Our best and most popular articles
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="flex flex-col h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                      <User className="h-4 w-4 ml-2" />
                      <span>{post.author}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="ghost" className="gap-1">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Recent Articles</h2>
              <p className="text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed mt-2">Our latest published articles</p>
            </div>
            <div className="grid gap-8 w-full">
              {recentPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="md:grid md:grid-cols-[1fr_2fr] gap-6">
                    <div className="relative h-48 md:h-full w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                        <User className="h-4 w-4 ml-2" />
                        <span>{post.author}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                      <p className="text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-100 text-emerald-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button asChild variant="ghost" className="gap-1 p-0">
                        <Link href={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center w-full mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog/archive">View All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Be the first to know about new articles, tutorials, and resources
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Your email address"
                  type="email"
                />
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                We won't share your email. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const featuredPosts = [
  {
    title: "Build Your First Website with HTML and CSS",
    slug: "first-website-with-html-css",
    excerpt:
      "In this article, we'll learn how to create a simple website using HTML and CSS. Starting from the very basics, we'll guide you step by step.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 10, 2025",
    author: "Rahim Khan",
  },
  {
    title: "Data Analysis with Python: A Beginner's Guide",
    slug: "data-analysis-with-python-beginners-guide",
    excerpt:
      "Learn how to perform data analysis using the Python programming language. Using pandas, numpy, and matplotlib libraries for data processing and visualization.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 5, 2025",
    author: "Nazmul Hasan",
  },
  {
    title: "JavaScript Frameworks: React, Vue, and Angular Compared",
    slug: "javascript-frameworks-comparison",
    excerpt:
      "What are the differences between JavaScript frameworks? Which one is more suitable for your project? In this article, we compare React, Vue, and Angular.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 1, 2025",
    author: "Farhana Akter",
  },
]

const recentPosts = [
  {
    title: "Code Management with GitHub and Git",
    slug: "github-git-code-management",
    excerpt:
      "Learn how to manage your code and collaborate with your team using Git and GitHub. A detailed discussion of version control systems.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 12, 2025",
    author: "Tanvir Ahmed",
    readTime: "8 min read",
    tags: ["GitHub", "Version Control", "Collaboration"],
  },
  {
    title: "AI and Machine Learning: Career Opportunities in Bangladesh",
    slug: "ai-ml-career-bangladesh",
    excerpt:
      "What kind of career opportunities are available in the artificial intelligence and machine learning sector in Bangladesh? How to prepare yourself and which skills to learn?",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 8, 2025",
    author: "Sadia Islam",
    readTime: "12 min read",
    tags: ["AI", "Machine Learning", "Career"],
  },
  {
    title: "Freelancing: Earning Online with Programming Skills",
    slug: "freelancing-programming-skills",
    excerpt:
      "How to earn online by freelancing with programming skills? Which platforms to use and how to get started - a complete guide.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 3, 2025",
    author: "Kamal Hossain",
    readTime: "10 min read",
    tags: ["Freelancing", "Remote Work", "Income"],
  },
]
