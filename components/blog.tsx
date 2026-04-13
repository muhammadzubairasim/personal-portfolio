"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  image: string
  link: string
  categories: string[]
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

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

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {!loading && featuredPost && (
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
                  {featuredPost.image ? (
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">No image</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{featuredPost.date}</span>
                    <span className="ml-4 px-2 py-1 bg-primary/20 text-primary rounded-md">Featured</span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                  <Button onClick={() => window.open(featuredPost.link, "_blank")?.focus()} className="w-fit group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
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
        )}
      </div>
    </section>
  )
}
