import { NosigakiVideoGallery } from "@/components/nosigaki-video-gallery"

export default function Page() {
  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-900 mb-4">N'osigaki</h1>
          <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
            Discover nature's wonders through immersive documentaries and wildlife adventures
          </p>
        </header>
        <NosigakiVideoGallery />
      </div>
    </div>
  )
}
