"use server"

import { db } from "@/prisma/db"


// Increment and return visit count
export async function registerVisit() {
  try {
    // Ensure row exists
    await db.visitCount.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, count: 0 },
    })

    // Increment count
    const updated = await db.visitCount.update({
      where: { id: 1 },
      data: { count: { increment: 1 } },
    })

    return updated.count
  } catch (error) {
    console.error("Error incrementing visit count:", error)
    return null
  }
}

// Get the current count without incrementing
export async function getVisitCount() {
  try {
    const result = await db.visitCount.findUnique({ where: { id: 1 } })
    return result?.count ?? 0
  } catch (error) {
    console.error("Error getting visit count:", error)
    return 0
  }
}
