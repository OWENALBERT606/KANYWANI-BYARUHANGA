import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Target, Calendar, Quote, ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/video-clips/hero-2.JPG')",
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Building a Community Beyond Politicking</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">Empowering Voices, Creating Impact</p>
          {/* <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-popover">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="border-l-4 border-primary pl-8 bg-card rounded-lg p-8 shadow-sm">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 text-balance">
              "Constructive Social Mobilization for posterity beyond politics"
            </blockquote>
            {/* <cite className="text-muted-foreground text-lg">— On Constructive Social Mobilization</cite> */}
          </div>
        </div>
      </section>

      {/* Community Impact Highlights */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Impact Through Action</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:bg-muted transition-colors duration-300 border-border">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Community Engagement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Facilitating town halls, neighborhood forums, and citizen advisory councils that give every voice a
                  platform in local decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:bg-muted transition-colors duration-300 border-border">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Social Cohesion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building programs that bring diverse communities together, fostering understanding and collaboration
                  across traditional divides.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:bg-muted transition-colors duration-300 border-border">
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Long-term Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developing sustainable policies and initiatives that prioritize future generations over short-term
                  political gains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Personal Journey */}
      {/* <section className="py-20 bg-popover">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">A Journey of Service</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="bg-accent text-accent-foreground text-lg px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Early Years
                </Badge>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border flex-1">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Grassroots Beginnings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Started as a community organizer, working directly with neighborhoods to address local issues and
                  build collective action around shared concerns.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="bg-accent text-accent-foreground text-lg px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Public Service
                </Badge>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border flex-1">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Expanding Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transitioned to formal public service roles, always maintaining focus on collaborative governance and
                  evidence-based policy making.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="bg-accent text-accent-foreground text-lg px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Today
                </Badge>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border flex-1">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Beyond Politics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Championing constructive social mobilization that transcends partisan boundaries, focusing on
                  sustainable solutions for our shared future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Community Testimonials */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Voices from the Community</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Finally, someone who listens first and speaks second. The town halls have given our neighborhood a
                  real voice in city planning."
                </p>
                <div className="text-sm font-medium text-card-foreground">— Maria Rodriguez, Local Business Owner</div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "The collaborative approach to policy-making has brought together groups that never talked before.
                  It's refreshing and effective."
                </p>
                <div className="text-sm font-medium text-card-foreground">— Dr. James Chen, Community Leader</div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "This isn't about left or right—it's about moving forward together. That's the kind of leadership we
                  need more of."
                </p>
                <div className="text-sm font-medium text-card-foreground">— Sarah Thompson, Parent & Educator</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Join the team for Constructive Change</h2>
          <p className="text-xl mb-8 opacity-90 text-balance">
            Together, we can build a future that serves everyone—beyond the limitations of traditional politics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Involved
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Learn About Our Initiatives
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
