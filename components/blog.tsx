"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "React useState: Why Your State Update Isn't Instant & How to Solve It!",
    excerpt:
      "React's useState setter function doesn't update the state immediately because state updates are asynchronous. If your UI isn't reflecting changes as expected, you might be facing stale state issues or misunderstanding React's batching mechanism. This guide explores why this happens and how to fix it using functional updates, useEffect, and best practices.",
    date: "September 8, 2023",
    image: "/assets/blog-useState.webp",
    featured: true,
    link: "https://docs.google.com/document/d/1bBna0Gt2UsolViiHcHJPRvHYoB1pPIkMnKRETXQpXvY/edit?usp=sharing"
  },
  {
    id: 2,
    title: "How to Fix the Error 'Cannot Set Headers After They Are Sent to the Client' in JavaScript?",
    excerpt: "A common challenge in Node.js development is the 'Cannot set headers after they are sent to the client' error. This guide explains why it happens, how to prevent it, and best practices for handling multiple responses properly in your backend.",
    date: "September 17, 2022",
    image: "/assets/blog-node-res.webp",
    featured: false,
    link: "https://docs.google.com/document/d/1xDujYEgIMfryucfcKnrc-2qsUOtTL63h4I5KfDPCszY/edit?usp=sharing"
  },  
  {
    id: 3,
    title: "(Outdated) How to Fix the Error 'Component Definition is Missing Display Name' in React?",
    excerpt: "If you've encountered a 'Component definition is missing displayname' perplexing error, join us to unravel its secrets and find the ultimate solution. We'll also explore how some new releases of React or Babel can automatically handle (or at least mitigate) this scenario, and the manual steps you can take to define a proper 'displayName' for more effective debugging.",
    date: "September 17, 2022",
    image: "/assets/blog-displayName.webp",
    featured: false,
    link: "https://docs.google.com/document/d/1VKzs4lwd1uPJ0dyw-afrCqcH1awRcOFY0_LWY4D11WM/edit?usp=sharing"
  },
  {
    id: 4,
    title: "How to Fix 'AttributeError: Module Numpy Has No Attribute Bool'?",
    excerpt: "Learn what the 'AttributeError: module 'numpy' has no attribute 'bool'' error in Python means, its common causes, and suitable solutions, through this guide.",
    date: "October 4, 2023",
    image: "/assets/blog-numpy.webp",
    featured: false,
    link: "https://docs.google.com/document/d/1zyLtW477Fe5Vwb7ZZzHljv2TqpJNen29LT-6ywF3OMk/edit?usp=sharing"
  }
  
]

export default function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section id="blog" className="py-20 bg-background/50 relative">
      <div className="absolute bottom-0 left-0 w-full md:w-[500px] md:h-[500px] bg-gradient-to-t from-secondary/10 to-transparent blur-3xl transform translate-y-1/2 rounded-full opacity-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, ideas, and insights about web development, design, and technology.
          </p>
        </motion.div>

        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{featuredPost.date}</span>
                    <span className="ml-4 px-2 py-1 bg-primary/20 text-primary rounded-md">Featured</span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                  <Button onClick={()=>{ window.open(featuredPost.link , "_blank")?.focus() } } className="w-fit group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <a href={post.link} target="_blank" className="text-primary hover:underline group inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

