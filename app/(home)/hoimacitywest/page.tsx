import { HoimaCivicTabs } from "@/components/hoima-civic-tabs"

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Hoima City West</h1>
          <p className="text-lg text-muted-foreground text-pretty">Building a Better Future Together</p>
        </div>
        <HoimaCivicTabs />
      </div>
    </main>
  )
}
