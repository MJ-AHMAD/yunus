import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MessageSquare, Users, Award } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h1>
              <p className="max-w-[700px] text-zinc-100 md:text-xl/relaxed">
                Connect with fellow learners, share knowledge, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="forum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="forum">Discussion Forum</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="success">Success Stories</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="forum" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-emerald-600" />
                        <CardTitle>Discussion Forum</CardTitle>
                      </div>
                      <CardDescription>Join the conversation and get help from the community</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {forumTopics.map((topic, index) => (
                          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium hover:text-emerald-600">
                                  <Link href="#">{topic.title}</Link>
                                </h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{topic.preview}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                    Posted by {topic.author}
                                  </span>
                                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{topic.date}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="inline-block px-2 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-800">
                                  {topic.replies} replies
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                        <Link href="#">View All Topics</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-emerald-600" />
                        <CardTitle>Community Stats</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm">Members</span>
                          <span className="font-medium">1,245</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Topics</span>
                          <span className="font-medium">356</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Replies</span>
                          <span className="font-medium">4,512</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Active Users</span>
                          <span className="font-medium">289</span>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-medium mb-2">Top Contributors</h4>
                        <ul className="space-y-2">
                          {topContributors.map((contributor, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-xs">
                                {index + 1}
                              </div>
                              <span>{contributor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">Join Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-emerald-600" />
                        <CardTitle className="text-base">{event.title}</CardTitle>
                      </div>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{event.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${event.isFree ? "bg-emerald-100 text-emerald-800" : "bg-zinc-100 dark:bg-zinc-800"}`}
                        >
                          {event.isFree ? "Free" : "Paid"}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-800">
                          {event.format}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                        <Link href="#">Register Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="success" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {successStories.map((story, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-emerald-600" />
                        <CardTitle className="text-base">{story.name}</CardTitle>
                      </div>
                      <CardDescription>{story.achievement}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{story.quote}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">Read Full Story</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community Today</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Connect with fellow learners, share knowledge, and grow together in our supportive community.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/register">Create Account</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const forumTopics = [
  {
    title: "How to start with HTML and CSS?",
    preview:
      "Hi everyone, I'm new to web development and would like to know the best way to start learning HTML and CSS...",
    author: "newLearner123",
    date: "2 days ago",
    replies: 15,
  },
  {
    title: "Python error: IndentationError",
    preview: "I'm getting this error in my Python code and I can't figure out what's wrong. Here's my code snippet...",
    author: "pythonBeginner",
    date: "1 day ago",
    replies: 8,
  },
  {
    title: "Git merge conflict help needed",
    preview:
      "I'm facing merge conflicts when trying to merge my feature branch into main. How do I resolve these conflicts?",
    author: "gitUser42",
    date: "3 days ago",
    replies: 12,
  },
  {
    title: "Resources for learning data visualization",
    preview:
      "Can anyone recommend good resources for learning data visualization with Python? I've completed the basic Python course...",
    author: "dataLover",
    date: "5 days ago",
    replies: 7,
  },
  {
    title: "JavaScript DOM manipulation practice exercises",
    preview:
      "Looking for some practice exercises to improve my DOM manipulation skills with JavaScript. Any suggestions?",
    author: "jsLearner",
    date: "1 week ago",
    replies: 20,
  },
]

const topContributors = ["codeMaster007", "webDevExpert", "pythonGuru", "helpfulMentor", "techEnthusiast"]

const events = [
  {
    title: "Web Development Bootcamp",
    date: "June 15, 2025",
    description: "A 4-hour intensive bootcamp covering HTML, CSS, and JavaScript fundamentals. Perfect for beginners!",
    format: "Online",
    isFree: true,
  },
  {
    title: "Python Challenge Week",
    date: "July 1-7, 2025",
    description: "Join our week-long Python coding challenge with daily problems to solve and improve your skills.",
    format: "Online",
    isFree: true,
  },
  {
    title: "Data Science Workshop",
    date: "August 20, 2025",
    description: "Learn data analysis and visualization techniques with hands-on exercises using real datasets.",
    format: "Hybrid",
    isFree: false,
  },
  {
    title: "GitHub Collaboration Workshop",
    date: "September 5, 2025",
    description: "Master collaborative coding with Git and GitHub in this hands-on workshop led by industry experts.",
    format: "Online",
    isFree: true,
  },
  {
    title: "Tech Career Fair",
    date: "October 10, 2025",
    description: "Connect with tech companies and explore career opportunities in the technology sector.",
    format: "In-person",
    isFree: true,
  },
  {
    title: "Hackathon: Build for Bangladesh",
    date: "November 15-16, 2025",
    description: "A 48-hour hackathon to build solutions that address local challenges in Bangladesh.",
    format: "Hybrid",
    isFree: true,
  },
]

const successStories = [
  {
    name: "Rahima Khan",
    achievement: "Web Developer at Tech Innovators",
    quote:
      "Yunus Inspire gave me the foundation I needed to start my career in web development. The free courses and supportive community changed my life.",
    image: "/placeholder.svg?height=240&width=360",
  },
  {
    name: "Kamal Ahmed",
    achievement: "Freelance Python Developer",
    quote:
      "After completing the Python course, I started freelancing and now earn a steady income. I'm grateful for the quality education I received for free.",
    image: "/placeholder.svg?height=240&width=360",
  },
  {
    name: "Nusrat Jahan",
    achievement: "Data Analyst at Global Solutions",
    quote:
      "The data science course opened doors I never thought possible. Now I work with international clients and help solve real-world problems.",
    image: "/placeholder.svg?height=240&width=360",
  },
  {
    name: "Farid Rahman",
    achievement: "Startup Founder",
    quote:
      "The knowledge and network I gained through Yunus Inspire helped me launch my own tech startup. Now I'm creating jobs for others.",
    image: "/placeholder.svg?height=240&width=360",
  },
  {
    name: "Sadia Akter",
    achievement: "Open Source Contributor",
    quote:
      "I learned GitHub through the free courses and now contribute to open source projects. It's amazing to be part of the global coding community.",
    image: "/placeholder.svg?height=240&width=360",
  },
  {
    name: "Mohammed Ali",
    achievement: "Teaching Assistant at Yunus Inspire",
    quote:
      "I started as a student and now I'm giving back as a teaching assistant. The ripple effect of knowledge sharing is powerful.",
    image: "/placeholder.svg?height=240&width=360",
  },
]
