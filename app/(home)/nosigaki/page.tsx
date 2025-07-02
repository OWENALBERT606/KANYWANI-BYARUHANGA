export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-yellow-400">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-6xl font-bold text-yellow-800 mb-4 tracking-wide">N'OSIGAKI</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </header>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 border-4 border-yellow-300">
            <div className="relative rounded-xl overflow-hidden bg-black">
              <video
                className="w-full aspect-video"
                controls
                preload="metadata"
                poster="/placeholder.svg?height=720&width=1280"
              >
                <source
                  src="/john/nosigaki.mp4"
                  type="video/mp4"
                />
                <source
                  src="/john/nosigaki.mp4"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-yellow-800 mb-2">Featured Video</h2>
              <p className="text-yellow-700 text-lg">
                Experience the essence of nosigaki through this carefully curated video content.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-8">
          <div className="w-16 h-16 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="w-12 h-12 bg-yellow-500 rounded-full opacity-80 animate-pulse delay-75"></div>
          <div className="w-20 h-20 bg-yellow-300 rounded-full opacity-40 animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  )
}
