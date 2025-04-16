import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Courses</h1>
              <p className="max-w-[600px] text-zinc-100 md:text-xl/relaxed">
                Choose from our range of courses to kickstart your learning journey!
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[250px] sm:h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Course banner"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.title} course={course} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="web" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === "Web Development")
                  .map((course) => (
                    <CourseCard key={course.title} course={course} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="programming" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === "Programming")
                  .map((course) => (
                    <CourseCard key={course.title} course={course} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="data" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === "Data Science")
                  .map((course) => (
                    <CourseCard key={course.title} course={course} />
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Learn?</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Enroll in our courses for free and start your journey to success.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/register">Create Free Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-full px-2 py-1 text-xs bg-emerald-100 text-emerald-800">{course.category}</div>
          <div className="rounded-full px-2 py-1 text-xs bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
            {course.level}
          </div>
        </div>
        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <div>{course.duration}</div>
          <div>{course.lessons} Lessons</div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enroll Now</Button>
      </CardFooter>
    </Card>
  )
}

const courses = [
  {
    title: "HTML & CSS Fundamentals",
    description: "Learn the building blocks of the web and create your first website.",
    image: "/placeholder.svg?height=240&width=360",
    category: "Web Development",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 12,
  },
  {
    title: "Python for Beginners",
    description: "Start your programming journey with Python, the most beginner-friendly language.",
    image: "/placeholder.svg?height=240&width=360",
    category: "Programming",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 18,
  },
  {
    title: "GitHub Essentials",
    description: "Learn how to use Git and GitHub to manage your code and collaborate with others.",
    image: "/placeholder.svg?height=240&width=360",
    category: "Web Development",
    level: "Beginner",
    duration: "2 weeks",
    lessons: 8,
  },
  {
    title: "Introduction to Data Science",
    description: "Discover the fundamentals of data analysis and visualization.",
    image: "/placeholder.svg?height=240&width=360",
    category: "Data Science",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 24,
  },
  {
    title: "JavaScript Basics",
    description: "Add interactivity to your websites with JavaScript fundamentals.",
    image: "/placeholder.svg?height=240&width=360",
    category: "Web Development",
    level: "Beginner",
    duration: "5 weeks",
    lessons: 15,
  },
  {
    title: "Data Analysis with Python",
    description: "Use Python libraries like Pandas and NumPy to analyze and visualize data.",
    image: "/placeholder.svg?height=240&width=360",
    category: "Data Science",
    level: "Intermediate",
    duration: "7 weeks",
    lessons: 21,
  },
]
