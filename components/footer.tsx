import { Github, Twitter, Linkedin, Heart, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Muhammad Zubair Asim. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="https://github.com/muhammadzubairasim" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="tel:+923074051817" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Link>
            <Link href="https://www.linkedin.com/in/muhmmad-zubair-asim-345292231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-muted-foreground flex items-center">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>using Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

