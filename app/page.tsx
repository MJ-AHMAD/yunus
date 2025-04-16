import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  Code,
  Users,
  CheckCircle,
  ChevronRight,
  Lightbulb,
  GraduationCap,
  Heart,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced with better visuals and clearer value proposition */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-5">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-xl">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
                Empowering Bangladesh's Digital Future
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Yunus Inspire</h1>
                <p className="text-xl md:text-2xl font-light max-w-[600px]">
                  Building a generation of skilled innovators through accessible education and technology
                </p>
              </div>
              <p className="max-w-[600px] text-zinc-100/90 md:text-lg">
                Inspired by Nobel Laureate Professor Muhammad Yunus, we provide free access to quality educational
                resources in technology, programming, and innovation for all Bangladeshi students.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-zinc-100 font-medium">
                  <Link href="/courses">
                    Start Learning Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-800 text-white hover:bg-emerald-900 border-none font-medium"
                >
                  <Link href="/about">Explore Our Mission</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden"
                    >
                      <Image
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        alt={`Student ${i}`}
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-100">
                  <span className="font-medium">10,000+</span> students already learning
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Digital+Bangladesh"
                  alt="Students learning digital skills"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <p className="text-white font-medium">Join the digital revolution in Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New section to showcase impact */}
      <section className="w-full py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600">10K+</p>
              <p className="text-sm md:text-base text-zinc-600">Active Students</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600">50+</p>
              <p className="text-sm md:text-base text-zinc-600">Free Courses</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600">95%</p>
              <p className="text-sm md:text-base text-zinc-600">Satisfaction Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600">24/7</p>
              <p className="text-sm md:text-base text-zinc-600">Learning Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Enhanced with better visuals */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Why Choose Us
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Empowering Digital Bangladesh
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                Our platform is designed to empower Bangladeshi students with the skills and knowledge needed to excel
                in the digital age and contribute to the nation's progress.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch max-w-5xl">
            <Card className="flex flex-col h-full border-2 border-emerald-50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-emerald-100 mb-4">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Free Quality Education</CardTitle>
                <CardDescription className="text-base">
                  Access to premium educational content at no cost
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Interactive courses in HTML, CSS, Python, and more</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Structured learning paths for beginners to advanced</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Certificates upon course completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full border-2 border-emerald-50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-emerald-100 mb-4">
                  <Code className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Interactive Learning Tools</CardTitle>
                <CardDescription className="text-base">
                  Modern tools to enhance your learning experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Live code editors with real-time feedback</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Downloadable resources and study guides</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Comprehensive video tutorials with subtitles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full border-2 border-emerald-50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-emerald-100 mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Community Support</CardTitle>
                <CardDescription className="text-base">Learn together with peers and mentors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Active forums and discussion boards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Mentorship programs with industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>Networking opportunities with peers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section - Enhanced with better visuals and content */}
      <section className="w-full py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700 mb-2">
                Featured Courses
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Start Your Learning Journey</h2>
              <p className="text-zinc-500 md:text-lg mt-2 max-w-[600px]">
                Explore our most popular courses designed to help you master in-demand skills
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="hidden md:flex">
              <Link href="/courses" className="gap-1">
                View All Courses <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course, index) => (
              <Card
                key={index}
                className="flex flex-col h-full overflow-hidden border-2 border-emerald-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-white/90 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">
                    {course.level}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <course.icon className="h-5 w-5 text-emerald-600" />
                    <span className="text-xs text-zinc-500">{course.category}</span>
                  </div>
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center justify-between text-sm text-zinc-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Link href={`/courses/${course.slug}`}>Enroll Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8 md:hidden">
            <Button asChild variant="outline" size="lg">
              <Link href="/courses" className="gap-1">
                View All Courses <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Enhanced with better layout */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Creating a generation of confident, skilled, and ethical leaders
              </h2>
              <p className="text-zinc-500 md:text-lg">
                We envision a future where every Bangladeshi student has the skills and confidence to drive innovation,
                unity, and sustainable development in Bangladesh.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3 shrink-0">
                    <Lightbulb className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Innovation-Driven</h3>
                    <p className="text-zinc-500 text-sm">Fostering creative thinking and problem-solving skills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3 shrink-0">
                    <GraduationCap className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Quality Education</h3>
                    <p className="text-zinc-500 text-sm">Providing world-class learning resources for all</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3 shrink-0">
                    <Heart className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Ethical Leadership</h3>
                    <p className="text-zinc-500 text-sm">Developing responsible leaders with strong values</p>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/about">Learn About Our Mission</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=240&text=Innovation"
                    alt="Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-56 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=224&width=240&text=Community"
                    alt="Community"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-56 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=224&width=240&text=Education"
                    alt="Education"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=240&text=Technology"
                    alt="Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New section */}
      <section className="w-full py-16 md:py-24 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Success Stories
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hear From Our Students</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-lg">
                Discover how Yunus Inspire has transformed the lives and careers of our students
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center border-2 border-emerald-50 shadow-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section - New section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700 mb-2">
                Latest Updates
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">News & Announcements</h2>
              <p className="text-zinc-500 md:text-lg mt-2 max-w-[600px]">
                Stay updated with the latest news and developments from Yunus Inspire
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/news" className="gap-1">
                View All News <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col h-full overflow-hidden border-2 border-emerald-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="text-xs text-zinc-500 mb-1">{item.date}</div>
                  <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-zinc-600 line-clamp-3">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild variant="ghost" className="gap-1 p-0">
                    <Link href={`/news/${item.slug}`}>
                      Read More <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8 md:hidden">
            <Button asChild variant="outline">
              <Link href="/news" className="gap-1">
                View All News <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section - New section */}
      <section className="w-full py-12 md:py-16 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter">Our Partners & Supporters</h2>
            <p className="max-w-[700px] text-zinc-500">
              Working together with leading organizations to create opportunities for Bangladeshi students
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="h-12 w-32 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              >
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with better design */}
      <section className="w-full py-16 md:py-24 bg-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/80 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community Today</h2>
              <p className="text-zinc-100/90 md:text-xl/relaxed">
                Start your learning journey and become part of a movement that's shaping the future of Bangladesh.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-zinc-100 font-medium">
                <Link href="/register">
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white bg-emerald-700 hover:bg-emerald-800"
              >
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </div>
            <p className="text-sm text-zinc-100/80 pt-4">
              No credit card required. Start learning immediately after signing up.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// New component for clock icon
function Clock({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

// Enhanced course data
const featuredCourses = [
  {
    title: "HTML & CSS Fundamentals",
    slug: "html-css-fundamentals",
    description: "Learn the building blocks of web development and create your first website.",
    image: "/placeholder.svg?height=192&width=384&text=HTML+CSS",
    category: "Web Development",
    level: "Beginner",
    duration: "4 weeks",
    students: 1245,
    icon: Code,
  },
  {
    title: "Python for Beginners",
    slug: "python-beginners",
    description: "Start your programming journey with Python, the most beginner-friendly language for new coders.",
    image: "/placeholder.svg?height=192&width=384&text=Python",
    category: "Programming",
    level: "Beginner",
    duration: "6 weeks",
    students: 2130,
    icon: Code,
  },
  {
    title: "Data Science Essentials",
    slug: "data-science-essentials",
    description: "Learn the fundamentals of data analysis, visualization, and machine learning.",
    image: "/placeholder.svg?height=192&width=384&text=Data+Science",
    category: "Data Science",
    level: "Intermediate",
    duration: "8 weeks",
    students: 875,
    icon: BookOpen,
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Build cross-platform mobile applications using modern frameworks.",
    image: "/placeholder.svg?height=192&width=384&text=Mobile+Dev",
    category: "App Development",
    level: "Intermediate",
    duration: "10 weeks",
    students: 650,
    icon: Code,
  },
]

// Testimonial data
const testimonials = [
  {
    name: "Rahima Khan",
    role: "Web Developer at TechFirm",
    quote:
      "Yunus Inspire changed my life. I went from knowing nothing about coding to landing a job as a web developer in just 6 months.",
    avatar: "/placeholder.svg?height=80&width=80&text=RK",
  },
  {
    name: "Kamal Ahmed",
    role: "Freelance Programmer",
    quote:
      "The quality of education is exceptional. I've tried many platforms, but none compare to the depth and clarity of courses offered here.",
    avatar: "/placeholder.svg?height=80&width=80&text=KA",
  },
  {
    name: "Nusrat Jahan",
    role: "Data Analyst",
    quote:
      "As a woman in tech, I found the community incredibly supportive. The mentorship program helped me navigate challenges and build confidence.",
    avatar: "/placeholder.svg?height=80&width=80&text=NJ",
  },
]

// News data
const newsItems = [
  {
    title: "Yunus Inspire Launches New AI Course Series",
    slug: "ai-course-series-launch",
    excerpt:
      "We're excited to announce our new series of courses focused on artificial intelligence and machine learning, designed specifically for Bangladeshi students.",
    image: "/placeholder.svg?height=192&width=384&text=AI+Courses",
    date: "June 15, 2025",
    category: "Courses",
  },
  {
    title: "Partnership with Leading Tech Companies to Provide Internships",
    slug: "tech-internship-partnerships",
    excerpt:
      "Yunus Inspire has partnered with several leading tech companies to provide internship opportunities for our top-performing students.",
    image: "/placeholder.svg?height=192&width=384&text=Partnerships",
    date: "June 10, 2025",
    category: "Opportunities",
  },
  {
    title: "Digital Bangladesh Initiative Connects Rural Schools",
    slug: "digital-bangladesh-rural-schools",
    excerpt:
      "Our outreach program has successfully connected 50 rural schools to digital learning resources, impacting over 5,000 students.",
    image: "/placeholder.svg?height=192&width=384&text=Rural+Education",
    date: "June 5, 2025",
    category: "Impact",
  },
]

// Partners data
const partners = [
  {
    name: "Tech Company A",
    logo: "/placeholder.svg?height=48&width=128&text=Partner+1",
  },
  {
    name: "University B",
    logo: "/placeholder.svg?height=48&width=128&text=Partner+2",
  },
  {
    name: "Foundation C",
    logo: "/placeholder.svg?height=48&width=128&text=Partner+3",
  },
  {
    name: "Government Initiative D",
    logo: "/placeholder.svg?height=48&width=128&text=Partner+4",
  },
  {
    name: "Global Organization E",
    logo: "/placeholder.svg?height=48&width=128&text=Partner+5",
  },
]
