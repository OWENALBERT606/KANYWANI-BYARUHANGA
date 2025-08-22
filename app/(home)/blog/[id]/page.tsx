import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockBlogPosts } from "@/lib/blog-data"
import { Clock, User, ArrowLeft } from "lucide-react"
import { CommentSection } from "@/components/comment-section"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default async function BlogPostPage({params}: {params: Promise<{ id: string }>}):Promise<any> {
      const {id}=await params;
  const post = mockBlogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-foreground">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} min read</span>
            </div>
            <time className="text-sm">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Post Content */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>

        {/* Comments Section */}
        <CommentSection postId={post.id} />
      </main>
    </div>
  )
}
