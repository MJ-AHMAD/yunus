import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Yunus Inspire</h1>
              <p className="max-w-[600px] text-zinc-100 md:text-xl/relaxed">
                Learn about our mission to empower Bangladeshi students and our inspiration from Nobel Laureate
                Professor Muhammad Yunus.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Inspirational image of Dr. Muhammad Yunus"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Our Mission
              </div>
              <p className="text-lg md:text-xl/relaxed lg:text-2xl/relaxed max-w-[600px] text-zinc-700 dark:text-zinc-300">
                "To inspire and enable Bangladeshi students by providing free, accessible, and innovative resources in
                technology and programming, ensuring every learner has the tools to unlock their potential and
                contribute meaningfully to a prosperous and equitable society."
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Our Vision
              </div>
              <p className="text-lg md:text-xl/relaxed lg:text-2xl/relaxed max-w-[600px] text-zinc-700 dark:text-zinc-300">
                "To establish a generation of confident, skilled, and ethical leaders who will drive innovation, unity,
                and sustainable progress, building a brighter future for Bangladesh while honoring the enduring legacy
                of Nobel Laureate Professor Muhammad Yunus."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Values</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                The principles that guide our initiative and shape our approach to education.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch py-8 max-w-5xl">
            {values.map((value) => (
              <Card key={value.name} className="flex flex-col h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-emerald-600">{value.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Our Founder
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Md Jafor Ahmad</h2>
              <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Md Jafor Ahmad, widely known as MJ Ahmad, is a visionary leader, social worker, and dedicated citizen of
                Bangladesh. Driven by a profound belief in the transformative potential of education, technology, and
                inclusivity, Md Jafor Ahmad has devoted his life to inspiring change and empowering the next generation.
              </p>
              <div className="flex space-x-4">
                <Link href="https://linkedin.com/in/jafor-ahmad" className="text-emerald-600 hover:text-emerald-700">
                  LinkedIn
                </Link>
                <Link href="https://github.com/MJ-AHMAD" className="text-emerald-600 hover:text-emerald-700">
                  GitHub
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Md Jafor Ahmad"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be a part of our journey to empower Bangladeshi students and build a brighter future together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-zinc-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    name: "Empowerment",
    description: "Students are empowered with knowledge, tools, and mentorship.",
  },
  {
    name: "Equality",
    description: "Ensuring equal access for all, irrespective of socio-economic background.",
  },
  {
    name: "Collaboration",
    description: "Encouraging teamwork and a shared vision for growth.",
  },
  {
    name: "Sustainability",
    description: "Promoting responsible and sustainable technological practices.",
  },
  {
    name: "Innovation",
    description: "Fostering creativity and problem-solving through modern technology.",
  },
]
