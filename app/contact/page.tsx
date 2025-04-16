import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-zinc-100 md:text-xl/relaxed">
                Have questions or suggestions? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" placeholder="Your email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject of your message" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" className="min-h-32" />
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  You can also reach out to us using the following contact details.
                </p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Mail className="h-6 w-6 text-emerald-600" />
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      <Link href="mailto:mjahmad2024@outlook.com" className="text-emerald-600 hover:underline">
                        mjahmad2024@outlook.com
                      </Link>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Phone className="h-6 w-6 text-emerald-600" />
                    <CardTitle>Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      <Link href="tel:+8801336221217" className="text-emerald-600 hover:underline">
                        +880 133 622 1217
                      </Link>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                    <CardTitle>Social Media</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm flex gap-4">
                      <Link href="https://linkedin.com/in/jafor-ahmad" className="text-emerald-600 hover:underline">
                        LinkedIn
                      </Link>
                      <Link href="https://facebook.com/mj.ahmad.768732" className="text-emerald-600 hover:underline">
                        Facebook
                      </Link>
                      <Link href="https://github.com/MJ-AHMAD" className="text-emerald-600 hover:underline">
                        GitHub
                      </Link>
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Find answers to the most common questions about Yunus Inspire.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "Who can enroll in these courses?",
    answer:
      "Our courses are open to all Bangladeshi students, regardless of their background or prior knowledge. We welcome learners of all levels.",
  },
  {
    question: "Are the courses really free?",
    answer:
      "Yes, all our courses are completely free of charge. We believe in providing equal access to quality education for all.",
  },
  {
    question: "How do I start learning?",
    answer:
      "Simply create an account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately after enrollment.",
  },
  {
    question: "Can I get a certificate after completing a course?",
    answer:
      "Yes, upon successful completion of a course, you will receive a digital certificate that you can add to your CV or portfolio.",
  },
  {
    question: "How can I contribute to Yunus Inspire?",
    answer:
      "We welcome contributions in various forms - whether you want to volunteer as a mentor, create course content, or provide financial support. Contact us to learn more.",
  },
  {
    question: "Is there support available if I get stuck?",
    answer:
      "Yes, we have a community forum where you can ask questions and get help from mentors and fellow learners. We're here to support your learning journey.",
  },
]
