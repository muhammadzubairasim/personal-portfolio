"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import emailjs from "@emailjs/browser"
import { Textarea } from "@/components/ui/textarea"
import { Github, Twitter, Linkedin, Mail, Send, Instagram, Phone } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_2d22htd",  // Replace with your EmailJS service ID
        "template_fs4g7ea", // Replace with your EmailJS template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          to_name:"Muhammad Zubair",
          message: formState.message,
        },
        "QmawDcbWMMGhU94bp" // Replace with your EmailJS public key
      )

      alert("Message sent successfully! ✅")
      setFormState({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("EmailJS error:", error)
      alert("Failed to send message. Please try again. ❌")
    }

    setIsSubmitting(false)
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/muhammadzubairasim", label: "GitHub" },
    { icon: Phone, href: "tel:+923074051817", label: "Phone" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhmmad-zubair-asim-345292231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Mail, href: "mailto:zubairasim7@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl transform -translate-y-1/2 rounded-full opacity-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently available for freelance work and full-time positions. If you have a project that needs
                some creative work, feel free to contact me.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:zubairasim7@gmail.com" className="font-medium">zubairasim7@gmail.com</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card hover:bg-primary/10 p-3 rounded-full transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-primary origin-left transform scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-card/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="min-h-[120px] bg-card/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full group hover:animate-shake">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

