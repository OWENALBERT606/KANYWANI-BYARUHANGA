import { MpomurroVideoGallery } from "@/components/mpomurro-video-gallery"

export default function MpomurroPage() {
  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-900 mb-4">Mpomurro</h1>
          <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
            Explore cutting-edge technology, modern lifestyle, and creative innovations
          </p>
        </header>
        <MpomurroVideoGallery />
      </div>
    </div>
  )
}
