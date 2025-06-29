// "use client"

// import { useRef, useEffect } from "react"
// import Image from "next/image"

// export default function UnderDevelopmentPage() {
//   const video1Ref = useRef<HTMLVideoElement>(null)
//   const video2Ref = useRef<HTMLVideoElement>(null)

//   useEffect(() => {
//     const video1 = video1Ref.current
//     const video2 = video2Ref.current

//     if (video1 && video2) {
//       const handleVideo1End = () => {
//         video2.play()
//       }

//       video1.addEventListener("ended", handleVideo1End)

//       return () => {
//         video1.removeEventListener("ended", handleVideo1End)
//       }
//     }
//   }, [])

//   const handlePlaySequence = () => {
//     if (video1Ref.current && video2Ref.current) {
//       video2Ref.current.currentTime = 0
//       video1Ref.current.currentTime = 0
//       video1Ref.current.play()
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-900 to-yellow-400 flex flex-col items-center justify-center p-4">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Website Under Development</h1>
//         <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
//           We're working hard to bring you something amazing. Stay tuned!
//         </p>
//       </div>

//       {/* Video Component with Overlay Image */}
//       <div className="relative w-full max-w-4xl mx-auto">
//         {/* Overlay Image */}
//         {/* <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm rounded-lg p-2">
//           <Image
//             src="/john/IMG-20250614-WA0129.jpg"
//             alt="Development Logo"
//             width={120}
//             height={120}
//             className="rounded-lg shadow-lg"
//           />
//         </div> */}

//         {/* Video Container */}
//         <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
//           {/* Video 1 */}
//           <video
//             ref={video1Ref}
//             className="w-full h-auto"
//             controls
//             preload="metadata"
//             poster="/placeholder.svg?height=400&width=800"
//           >
//             <source src="/john/KB.mkv" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           {/* Video 2 (Hidden initially) */}
//           <video
//             ref={video2Ref}
//             className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500"
//             controls
//             preload="metadata"
//             poster="/placeholder.svg?height=400&width=800"
//             onPlay={() => {
//               if (video2Ref.current) {
//                 video2Ref.current.style.opacity = "1"
//               }
//               if (video1Ref.current) {
//                 video1Ref.current.style.opacity = "0"
//               }
//             }}
//             onEnded={() => {
//               if (video2Ref.current) {
//                 video2Ref.current.style.opacity = "0"
//               }
//               if (video1Ref.current) {
//                 video1Ref.current.style.opacity = "1"
//               }
//             }}
//           >
//             <source src="/john/KB.mkv" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Play Button */}
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={handlePlaySequence}
//             className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
//           >
//             Play Video Sequence
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-16 text-center">
//         <div className="flex items-center justify-center space-x-2 text-gray-400">
//           <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
//           <span className="text-sm">Coming Soon</span>
//           <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import { useRef, useEffect, useState } from "react"
import { X, Users } from "lucide-react"

export default function UnderDevelopmentPage() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const [visitCount, setVisitCount] = useState(0)
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)

  // Load visit count from localStorage and show welcome popup
  useEffect(() => {
    const storedCount = localStorage.getItem("visitCount")
    const currentCount = storedCount ? Number.parseInt(storedCount, 10) : 0
    setVisitCount(currentCount)
    setShowWelcomePopup(true)
  }, [])

  // Video sequence logic
  useEffect(() => {
    const video1 = video1Ref.current
    const video2 = video2Ref.current

    if (video1 && video2) {
      const handleVideo1End = () => {
        video2.play()
      }

      video1.addEventListener("ended", handleVideo1End)

      return () => {
        video1.removeEventListener("ended", handleVideo1End)
      }
    }
  }, [])

  const handlePlaySequence = () => {
    if (video1Ref.current && video2Ref.current) {
      video2Ref.current.currentTime = 0
      video1Ref.current.currentTime = 0
      video1Ref.current.play()
    }
  }

  const handleCloseWelcomePopup = () => {
    const newCount = visitCount + 1
    setVisitCount(newCount)
    localStorage.setItem("visitCount", newCount.toString())
    setShowWelcomePopup(false)
  }

  return (
    <div className="min-h-screen  bg-gradient-to-br from-yellow-400 via-yellow-900 to-yellow-400 flex flex-col items-center justify-center p-4">
      {/* Welcome Popup */}
      {showWelcomePopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-white relative">
              <button
                onClick={handleCloseWelcomePopup}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
                <p className="text-yellow-100">Thanks for visiting our development site</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-center mb-6">
                We're working hard to bring you something amazing. Your visit helps us track our progress and motivates
                our team!
              </p>
              <button
                onClick={handleCloseWelcomePopup}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Continue to Site
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Visit Counter */}
      <div className="absolute top-24 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
        <div className="flex items-center space-x-2">
          <Users size={20} />
          <span className="font-semibold">Visits: {visitCount}</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Website Under Development</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>

      {/* Video Component */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Video Container */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          {/* Video 1 */}
          <video
            ref={video1Ref}
            className="w-full h-auto"
            controls
            preload="metadata"
            poster="/placeholder.svg?height=400&width=800"
          >
            <source src="/john/KB.mkv" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video 2 (Hidden initially) */}
          <video
            ref={video2Ref}
            className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500"
            controls
            preload="metadata"
            poster="/placeholder.svg?height=400&width=800"
            onPlay={() => {
              if (video2Ref.current) {
                video2Ref.current.style.opacity = "1"
              }
              if (video1Ref.current) {
                video1Ref.current.style.opacity = "0"
              }
            }}
            onEnded={() => {
              if (video2Ref.current) {
                video2Ref.current.style.opacity = "0"
              }
              if (video1Ref.current) {
                video1Ref.current.style.opacity = "1"
              }
            }}
          >
            <source src="/john/KB.mkv" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Play Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePlaySequence}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Play Video Sequence
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-sm">Coming Soon</span>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
        </div>
      </div>
    </div>
  )
}
