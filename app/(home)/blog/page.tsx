import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockBlogPosts } from "@/lib/blog-data"
import { Clock, User } from "lucide-react"
import { getBlogs, getDashboardBlogs } from "@/actions/blogs"

export default async function BlogPage() {
  const blogs = (await getDashboardBlogs()) || [];
  console.log(blogs);
  const featuredPost = blogs[0]
  const otherPosts = blogs.slice(1)
  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 bg-background">

      <main className="container mx-auto px-4 py-8">
        {/* Featured Post */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.thumbnail|| "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{featuredPost.category?.name}</Badge>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl md:text-3xl leading-tight">{featuredPost.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{featuredPost.comments.length} responses</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                     Kanywani Byaruhanga
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-yellow-600 hover:bg-yellow-600/90">Read Full Article</Button>
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>

        {/* Other Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={post.thumbnail || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category.name}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.comments.length} responses</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Kanywani Byaruhanga
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full bg-transparent">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
