"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ReactElement, ReactNode, useState } from "react"
import { Modal } from "./ui/modal"

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    description: "Flutter e-commerce store with Firebase as backend",
    image: "./assets/ecommerce.jpg",
    tags: ["Flutter", "Firebase", "Authentication", "GetX" , "Google-Provider"],
    github: "https://github.com/muhammadzubairasim/ecom-firebase",
    demo: null,
  },
  {
    id: 2,
    title: "Food Delivery App",
    description: "A comprehensive food delivery app that also serves as a social hub for group discussions and includes a payment gateway for seamless transactions.",
    image: "./assets/snackout-logo.png",
    tags: ["React Native", "Node.ts", "PostGreSQL", "Prisma" , "Alfa Payment Gateway" , "Socket.io"],
    github: null,
    demo: "https://play.google.com/store/apps/details?id=com.snackout&pli=1",
  },
  {
    id: 3,
    title: "Rider App",
    description:
      "A rider app for food delivery with real-time tracking, WebSocket integration, user authentication, and message encryption.",
    image: "./assets/snackout-rider.png",
    tags: ["Socket.io", "Express", "React Native", "NodeTS" ,"Real-time Tracking"],
    github: null,
    demo: "https://play.google.com/store/apps/details?id=com.snackriders",
  },
  {
    id: 4,
    title: "Notes App",
    description: "Note-taking application with local storage, tagging system, and full CRUD operations",
    image: "./assets/notes.jpg",
    tags: ["Angular", "TypeScript", "LocalStorage", "CRUD", "Tags"],
    github: "https://github.com/muhammadzubairasim/angular-notes-taking-app",
    demo: "https://muhammadzubairasim.github.io/angular-notes-taking-app/",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }
  const [modalVisible, setModalVisible] = useState(false);



  const showCode = (url: string | null) => {
    if (url) {
      window.open(url, '_blank')?.focus();
    }
    else {
      setModalVisible(true);
    }
  }

  const modalChildren = (): ReactNode => {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <div className="rounded-full bg-amber-100 p-3 mb-4">
          <AlertCircle className="w-10 h-10 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Access Restricted
        </h3>
        <p className="text-muted-foreground mb-4">
          This repository is private and cannot be shared due to company policies.
        </p>
        <Button
          variant="outline"
          onClick={() => setModalVisible(false)}
          className="mt-2 px-4 py-2 rounded-lg border-gray-300"
        >
          Close
        </Button>
      </div>
    );
  };






  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl transform -translate-y-1/2 rounded-full opacity-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects that showcase my skills and interests.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <Card className="h-full overflow-hidden group border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button onClick={() => showCode(project.github)}  variant="outline" size="sm" className="group/btn">
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    GitHub
                  </Button>
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    Live Demo
                    </a>}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} children={(modalChildren())}  />
    </section>
  )
}






