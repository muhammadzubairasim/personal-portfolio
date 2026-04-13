import { NextResponse } from "next/server"

const MEDIUM_RSS_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zubairasim7"

export async function GET() {
  try {
    const res = await fetch(MEDIUM_RSS_URL, { next: { revalidate: 3600 } })
    const data = await res.json()

    if (data.status !== "ok") {
      return NextResponse.json(
        { error: "Failed to fetch articles" },
        { status: 502 }
      )
    }

    const posts = data.items.map(
      (item: {
        title: string
        pubDate: string
        link: string
        thumbnail: string
        description: string
        categories: string[]
        content: string
      }) => {
        // Extract first image from description/content HTML as fallback
        const imgMatch = (item.content || item.description).match(
          /<img[^>]+src=["']([^"']+)["']/
        )
        const image = item.thumbnail || (imgMatch ? imgMatch[1] : "")

        return {
          title: item.title,
          date: new Date(item.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          link: item.link,
          image,
          excerpt: item.description
            .replace(/<[^>]*>/g, "")
            .substring(0, 200)
            .trim() + "...",
          categories: item.categories,
        }
      }
    )

    return NextResponse.json(posts)
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    )
  }
}
