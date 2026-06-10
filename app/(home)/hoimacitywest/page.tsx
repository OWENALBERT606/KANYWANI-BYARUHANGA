import { getParishes } from "@/actions/parishes";
import { getPromises } from "@/actions/promise";
import { getVillages } from "@/actions/villages";
import { HoimaCivicTabs } from "@/components/hoima-civic-tabs"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { Parish, Promise, Village } from "@prisma/client";

export default async function Home() {
    const parishes: Parish[] = (await getParishes()) || [];
        const villages: Village[] = (await getVillages()) || [];

      const parishOptions = parishes.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
      const villageOptions = villages.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
      const promises: Promise[] = (await getPromises()) || [];

    
  
  return (
    <main className="min-h-screen px-4 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Elections 2026 (Hoima City West)</h1>
          <p className="text-lg text-muted-foreground text-pretty">Building a Better Future Together</p>
        </div>
        <PortfolioGallery />
      </div>

      <div className="container mx-auto px-4 py-8">
        <HoimaCivicTabs villageOptions={villageOptions} parishOptions={parishOptions} promises={promises} villages={villages} parishes={parishes}/>
      </div>
    </main>
  )
}
