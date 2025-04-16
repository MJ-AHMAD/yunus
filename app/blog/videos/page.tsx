import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Play, User, Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Video Tutorials</h1>
              <p className="max-w-[700px] text-zinc-100 md:text-xl/relaxed">
                Learn programming, web development, and data science through video tutorials
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Videos</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video, index) => (
                  <VideoCard key={index} video={video} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos
                  .filter((video) => video.category === "Web Development")
                  .map((video, index) => (
                    <VideoCard key={index} video={video} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="programming" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos
                  .filter((video) => video.category === "Programming")
                  .map((video, index) => (
                    <VideoCard key={index} video={video} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="data" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos
                  .filter((video) => video.category === "Data Science")
                  .map((video, index) => (
                    <VideoCard key={index} video={video} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Popular Playlists</h2>
              <p className="text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed mt-2">
                Check out our best video series
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {playlists.map((playlist, index) => (
                <Card key={index} className="flex flex-col h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={playlist.image || "/placeholder.svg"}
                      alt={playlist.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {playlist.videoCount} videos
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{playlist.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{playlist.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <User className="h-4 w-4" />
                      <span>{playlist.instructor}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Link href={`/blog/videos/playlist/${playlist.slug}`}>View Playlist</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Share Your Knowledge</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Are you an expert? Help others by creating video tutorials on our platform
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">{video.category}</span>
          <span className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {video.date}
          </span>
        </div>
        <CardTitle className="line-clamp-2 text-base">{video.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">{video.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center text-sm">
            <User className="h-4 w-4 mr-1" />
            {video.instructor}
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href={`/blog/videos/${video.slug}`}>Watch</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

const videos = [
  {
    title: "Responsive Website Design with HTML and CSS",
    slug: "responsive-website-design-html-css",
    thumbnail: "/placeholder.svg?height=240&width=360",
    duration: "45 min",
    category: "Web Development",
    date: "June 15, 2025",
    instructor: "Rahim Khan",
    description: "In this video, we'll learn how to design a responsive website using HTML and CSS.",
  },
  {
    title: "Data Analysis with Python - Basic to Advanced",
    slug: "data-analysis-python-basic-advanced",
    thumbnail: "/placeholder.svg?height=240&width=360",
    duration: "1 hr 10 min",
    category: "Data Science",
    date: "June 12, 2025",
    instructor: "Nazmul Hasan",
    description: "Learn how to perform data analysis using the Python programming language.",
  },
  {
    title: "JavaScript Functions and Objects",
    slug: "javascript-functions-objects",
    thumbnail: "/placeholder.svg?height=240&width=360",
    duration: "55 min",
    category: "Programming",
    date: "June 10, 2025",
    instructor: "Farhana Akter",
    description: "Learn about JavaScript functions and objects in detail in this video tutorial.",
  },
  {
    title: "GitHub and Git - Beginner to Pro",
    slug: "github-git-beginner-pro",
    thumbnail: "/placeholder.svg?height=240&width=360",
    duration: "1 hr 20 min",
    category: "Web Development",
    date: "June 8, 2025",
    instructor: "Tanvir Ahmed",
    description: "Learn how to manage your code and collaborate with your team using Git and GitHub.",
  },
  {
    title: "Basic Concepts of Machine Learning",
    slug: "machine-learning-basic-concepts",
    thumbnail: "/placeholder.svg?height=240&width=360",
    duration: "1 hr 5 min",
    category: "Data Science",
    date: "June 5, 2025",
    instructor: "Sadia Islam",
    description: "Learn about the fundamental concepts, algorithms, and practical applications of machine learning.",
  },
  {
    title: "SQL Database - Queries and Manipulation",
    slug: "sql-database-query-manipulation",
    thumbnail: "/placeholder.svg?height=240&width=360",
    duration: "50 min",
    category: "Programming",
    date: "June 2, 2025",
    instructor: "Kamal Hossain",
    description: "Learn in detail about writing SQL database queries and data manipulation.",
  },
]

const playlists = [
  {
    title: "Full Stack Web Development Course",
    slug: "full-stack-web-development",
    image: "/placeholder.svg?height=240&width=360",
    description: "Learn full stack web development with HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    instructor: "Rahim Khan",
    videoCount: 45,
  },
  {
    title: "Python Programming - Zero to Hero",
    slug: "python-programming-zero-to-hero",
    image: "/placeholder.svg?height=240&width=360",
    description: "Learn the Python programming language from basic to advanced level.",
    instructor: "Nazmul Hasan",
    videoCount: 30,
  },
  {
    title: "Data Science and Machine Learning",
    slug: "data-science-machine-learning",
    image: "/placeholder.svg?height=240&width=360",
    description: "Learn from basic to advanced topics in data science and machine learning.",
    instructor: "Sadia Islam",
    videoCount: 35,
  },
]
