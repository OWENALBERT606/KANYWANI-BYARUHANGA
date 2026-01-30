

import React from 'react'
import CustomCarousel from '@/components/slider'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { getVisitCount, registerVisit } from '@/actions/visitor-count'

export default async function Page() {
  // Register the visit and get the updated count
  await registerVisit()
  
  // Get the current count to display
  const visitCount = await getVisitCount()

  return (
    <div>
      {/* Visit Counter Display */}
      <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg z-50">
        <div className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />
          </svg>
          <span className="font-semibold">{visitCount.toLocaleString()} visits</span>
        </div>
      </div>

      <CustomCarousel />
      <PortfolioGallery />
    </div>
  )
}