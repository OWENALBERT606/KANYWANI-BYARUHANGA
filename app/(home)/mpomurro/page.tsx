import { getMpomurros } from "@/actions/mpomurro";
import { MpomurroVideoGallery } from "@/components/mpomurro-video-gallery"
import { Mpomurro } from "@prisma/client";

export default async function MpomurroPage() {
   const mpomurros: Mpomurro[] = (await getMpomurros()) || [];
  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-900 mb-4">Mpomurro</h1>
          <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
            The wisdom of politics lies in shaping governance with justice, adapting to modern realities, and inspiring creative solutions for the people
          </p>
        </header>
        <MpomurroVideoGallery mpomurros={mpomurros} />
      </div>
    </div>
  )
}
