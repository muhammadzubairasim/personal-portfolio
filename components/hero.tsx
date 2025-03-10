"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown, Download, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import porfolioImage from "@/public/assets/portfolio.dp.jpg"


export default function Hero() {
  const [text, setText] = useState("")
  const [fullText] = useState("Software Engineer")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index])
        setIndex((prevIndex) => prevIndex + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16 md:pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 z-10" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl transform -translate-y-1/2 rounded-full opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-t from-secondary/20 to-transparent blur-3xl transform translate-y-1/2 rounded-full opacity-30" />
      </div>

      <div className="container mx-auto max-w-5xl z-10">
        <div className="md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary text-lg font-medium"
              >
                Hello, I'm
              </motion.span>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Muhammad Zubair Asim
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="h-8 mt-2"
              >
                <p className="text-xl text-muted-foreground">
                  <span className="text-primary">{text}</span>
                  <span className="animate-blink">|</span>
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-muted-foreground max-w-md mt-4"
              >
                A passionate developer focused on building scalable and efficient solutions with modern technologies.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 mt-6"
            >
                <a
                  className="group cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  href="mailto:zubairasim7@gmail.com"
                >
                  Contact Me
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                className="group inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                href="/assets/Muhammad-Zubair-Asim-resume.pdf"
                download="Muhammad-Zubair-Asim-resume.pdf"
                >
                Download Resume
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mt-4">
              <Image
              src={porfolioImage}
              alt="Muhammad Zubair Asim"
              className="object-cover"
              priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <Link href="#projects">
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}

