import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, Code } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learning Resources</h1>
              <p className="max-w-[700px] text-zinc-100 md:text-xl/relaxed">
                Access a wide range of free resources to enhance your learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
                <TabsTrigger value="guides">Study Guides</TabsTrigger>
                <TabsTrigger value="code-editor">Code Editor</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Video className="h-5 w-5 text-emerald-600" />
                      <CardTitle>Video Tutorials</CardTitle>
                    </div>
                    <CardDescription>Learn through comprehensive video lessons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Our video tutorials cover a wide range of topics, from web development basics to advanced
                      programming concepts. Watch at your own pace and learn visually.
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="#tutorials">Browse Videos</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-emerald-600" />
                      <CardTitle>Downloadable Guides</CardTitle>
                    </div>
                    <CardDescription>PDF guides for offline learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Download our comprehensive study guides and cheat sheets to enhance your learning. Perfect for
                      offline studying or quick reference during practice.
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="#guides">Download Guides</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-emerald-600" />
                      <CardTitle>Interactive Code Editor</CardTitle>
                    </div>
                    <CardDescription>Practice coding in real-time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Our interactive code editor allows you to write, test, and debug your code directly in the
                      browser. Perfect for practicing your programming skills.
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Link href="#code-editor">Try Code Editor</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tutorials" className="mt-0">
              <div id="tutorials" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videoTutorials.map((tutorial, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Video className="h-5 w-5 text-emerald-600" />
                        <CardTitle className="text-base">{tutorial.title}</CardTitle>
                      </div>
                      <CardDescription>{tutorial.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{tutorial.description}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={tutorial.link}>Watch Video</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-0">
              <div id="guides" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {studyGuides.map((guide, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-emerald-600" />
                        <CardTitle className="text-base">{guide.title}</CardTitle>
                      </div>
                      <CardDescription>{guide.pages} pages</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{guide.description}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={guide.link}>Download PDF</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="code-editor" className="mt-0">
              <div id="code-editor" className="flex flex-col items-center space-y-4">
                <Card className="w-full max-w-4xl">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-emerald-600" />
                      <CardTitle>Interactive Code Editor</CardTitle>
                    </div>
                    <CardDescription>Practice your coding skills in real-time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-zinc-950 text-zinc-50 p-4 rounded-md font-mono h-64 text-sm overflow-auto">
                      {`// Welcome to the Yunus Inspire Code Editor
// Choose a language and start coding!

function greet() {
  let name = prompt("What's your name?");
  console.log("Hello, " + name + "! Welcome to Yunus Inspire.");
}

// Click Run to execute the code
greet();`}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <select className="px-3 py-2 border rounded-md text-sm">
                      <option>JavaScript</option>
                      <option>Python</option>
                      <option>HTML/CSS</option>
                      <option>SQL</option>
                    </select>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Run Code</Button>
                  </CardFooter>
                </Card>
                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
                  Our interactive code editor supports multiple programming languages and allows you to practice coding
                  directly in your browser. No installation required. Save your progress and share your code with
                  others.
                </p>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/resources/tutorials">View Related Tutorials</Link>
                </Button>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need More Help?</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Join our community forum to get help from mentors and fellow learners.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/community">Join Community Forum</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const videoTutorials = [
  {
    title: "HTML Basics - Building Your First Webpage",
    duration: "45 minutes",
    description: "Learn how to create your first HTML webpage from scratch with this beginner-friendly tutorial.",
    link: "#",
  },
  {
    title: "CSS Styling Fundamentals",
    duration: "52 minutes",
    description: "Master the basics of CSS styling to make your webpages look professional and attractive.",
    link: "#",
  },
  {
    title: "Python Basics - Variables and Data Types",
    duration: "38 minutes",
    description: "Start your Python journey by understanding variables, data types, and basic operations.",
    link: "#",
  },
  {
    title: "Introduction to GitHub",
    duration: "30 minutes",
    description: "Learn how to use GitHub for version control and collaboration on coding projects.",
    link: "#",
  },
  {
    title: "JavaScript Functions and Events",
    duration: "55 minutes",
    description: "Understand how to create and use functions, and handle events in JavaScript.",
    link: "#",
  },
  {
    title: "Data Visualization with Python",
    duration: "62 minutes",
    description:
      "Explore how to create beautiful data visualizations using Python libraries like Matplotlib and Seaborn.",
    link: "#",
  },
]

const studyGuides = [
  {
    title: "HTML Cheat Sheet",
    pages: 15,
    description: "A comprehensive reference guide for all HTML tags and attributes you need to know.",
    link: "#",
  },
  {
    title: "CSS Quick Reference",
    pages: 20,
    description: "A complete guide to CSS properties, selectors, and values for styling your webpages.",
    link: "#",
  },
  {
    title: "Python Programming Guide",
    pages: 45,
    description: "From basic syntax to advanced concepts, this guide covers everything you need to know about Python.",
    link: "#",
  },
  {
    title: "Git and GitHub Workflow Guide",
    pages: 25,
    description: "Learn the best practices for version control with Git and collaboration with GitHub.",
    link: "#",
  },
  {
    title: "Data Science Handbook",
    pages: 60,
    description: "A comprehensive guide to data science concepts, tools, and techniques for beginners.",
    link: "#",
  },
  {
    title: "Web Development Roadmap",
    pages: 30,
    description: "A step-by-step guide to becoming a proficient web developer, from beginner to advanced.",
    link: "#",
  },
]
