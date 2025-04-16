import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Digital Bangladesh News</h1>
              <p className="max-w-[700px] text-zinc-100 md:text-xl/relaxed">
                Latest updates and developments in Digital Bangladesh's journey towards innovation and progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All News</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="innovation">Innovation</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="policy">Policy</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              {/* Featured News */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Featured News</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {featuredNews.map((news, index) => (
                    <FeaturedNewsCard key={index} news={news} />
                  ))}
                </div>
              </div>

              {/* Latest News */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Latest News</h2>
                <div className="grid gap-6">
                  {latestNews.map((news, index) => (
                    <NewsCard key={index} news={news} />
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button asChild variant="outline" size="lg">
                    <Link href="/news/archive">View All News</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-0">
              <div className="grid gap-6">
                {latestNews
                  .concat(featuredNews)
                  .filter((news) => news.category === "Technology")
                  .map((news, index) => (
                    <NewsCard key={index} news={news} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="innovation" className="mt-0">
              <div className="grid gap-6">
                {latestNews
                  .concat(featuredNews)
                  .filter((news) => news.category === "Innovation")
                  .map((news, index) => (
                    <NewsCard key={index} news={news} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <div className="grid gap-6">
                {latestNews
                  .concat(featuredNews)
                  .filter((news) => news.category === "Education")
                  .map((news, index) => (
                    <NewsCard key={index} news={news} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="policy" className="mt-0">
              <div className="grid gap-6">
                {latestNews
                  .concat(featuredNews)
                  .filter((news) => news.category === "Policy")
                  .map((news, index) => (
                    <NewsCard key={index} news={news} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Subscribe to our newsletter to receive the latest news and updates about Digital Bangladesh
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

function FeaturedNewsCard({ news }: { news: (typeof featuredNews)[0] }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
        <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">{news.category}</div>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{news.date}</span>
        </div>
        <CardTitle className="line-clamp-2">{news.title}</CardTitle>
        <CardDescription className="line-clamp-3">{news.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild variant="ghost" className="gap-1">
          <Link href={`/news/${news.slug}`}>
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function NewsCard({ news }: { news: (typeof latestNews)[0] | (typeof featuredNews)[0] }) {
  return (
    <Card className="overflow-hidden">
      <div className="md:grid md:grid-cols-[1fr_2fr] gap-6">
        <div className="relative h-48 md:h-full w-full">
          <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
          <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
            {news.category}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
            <Calendar className="h-4 w-4" />
            <span>{news.date}</span>
            <User className="h-4 w-4 ml-2" />
            <span>{news.author}</span>
            <Clock className="h-4 w-4 ml-2" />
            <span>{news.readTime}</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">{news.title}</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-3">{news.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {news.tags &&
              news.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-100 text-emerald-800"
                >
                  {tag}
                </span>
              ))}
          </div>
          <Button asChild variant="ghost" className="gap-1 p-0">
            <Link href={`/news/${news.slug}`}>
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

const featuredNews = [
  {
    title: "Bangladesh Launches National AI Strategy to Boost Digital Economy",
    slug: "bangladesh-national-ai-strategy",
    excerpt:
      "The government of Bangladesh has unveiled a comprehensive National AI Strategy aimed at positioning the country as a regional leader in artificial intelligence innovation and adoption.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 15, 2025",
    author: "Tanvir Ahmed",
    readTime: "8 min read",
    category: "Technology",
    tags: ["AI", "Digital Economy", "Innovation"],
  },
  {
    title: "Digital Bangladesh Initiative Connects 5,000 Rural Schools to High-Speed Internet",
    slug: "digital-bangladesh-rural-schools-internet",
    excerpt:
      "A major milestone in the Digital Bangladesh vision has been achieved with the successful connection of 5,000 rural schools to high-speed internet, benefiting over 2 million students.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 10, 2025",
    author: "Sadia Islam",
    readTime: "6 min read",
    category: "Education",
    tags: ["Education", "Rural Development", "Internet Access"],
  },
  {
    title: "Bangladesh's IT Exports Surpass $2 Billion Mark for the First Time",
    slug: "bangladesh-it-exports-milestone",
    excerpt:
      "In a significant achievement for the country's digital economy, Bangladesh's IT and ITES exports have crossed the $2 billion threshold, marking a 25% year-on-year growth.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 5, 2025",
    author: "Rahim Khan",
    readTime: "7 min read",
    category: "Technology",
    tags: ["IT Exports", "Economy", "Growth"],
  },
]

const latestNews = [
  {
    title: "New Policy Framework to Accelerate Digital Transformation in Public Services",
    slug: "policy-framework-digital-transformation",
    excerpt:
      "The government has introduced a comprehensive policy framework aimed at accelerating the digital transformation of public services, enhancing efficiency, transparency, and accessibility.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 18, 2025",
    author: "Nazmul Hasan",
    readTime: "10 min read",
    category: "Policy",
    tags: ["Digital Transformation", "Public Services", "Governance"],
  },
  {
    title: "Bangladesh Hosts International Conference on Smart Cities and Sustainable Development",
    slug: "bangladesh-smart-cities-conference",
    excerpt:
      "Leading experts and policymakers from around the world gathered in Dhaka for a three-day international conference on smart cities and sustainable development, showcasing Bangladesh's progress in urban digital innovation.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 14, 2025",
    author: "Farhana Akter",
    readTime: "9 min read",
    category: "Innovation",
    tags: ["Smart Cities", "Sustainable Development", "Urban Planning"],
  },
  {
    title: "Digital Skills Training Program Reaches 100,000 Youth Across Bangladesh",
    slug: "digital-skills-training-milestone",
    excerpt:
      "A nationwide digital skills training program has successfully trained 100,000 young people across Bangladesh, equipping them with essential skills for the digital economy and improving their employability.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 12, 2025",
    author: "Kamal Hossain",
    readTime: "7 min read",
    category: "Education",
    tags: ["Digital Skills", "Youth Development", "Employment"],
  },
  {
    title: "Bangladesh Unveils New Cybersecurity Framework to Protect Digital Infrastructure",
    slug: "bangladesh-cybersecurity-framework",
    excerpt:
      "In response to growing cyber threats, Bangladesh has launched a comprehensive cybersecurity framework aimed at protecting critical digital infrastructure and ensuring the safety of digital services.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 8, 2025",
    author: "Tanvir Ahmed",
    readTime: "8 min read",
    category: "Policy",
    tags: ["Cybersecurity", "Digital Infrastructure", "Security"],
  },
  {
    title: "Bangladesh's First Blockchain-Based Land Registry System Goes Live",
    slug: "blockchain-land-registry-system",
    excerpt:
      "In a major step towards digital governance, Bangladesh has launched its first blockchain-based land registry system, aimed at reducing fraud, increasing transparency, and streamlining property transactions.",
    image: "/placeholder.svg?height=240&width=360",
    date: "June 5, 2025",
    author: "Sadia Islam",
    readTime: "6 min read",
    category: "Innovation",
    tags: ["Blockchain", "Land Registry", "Governance"],
  },
]
