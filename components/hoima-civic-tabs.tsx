"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  MapPin,
  Users,
  Target,
  Heart,
  Building,
  GraduationCap,
  Stethoscope,
  Zap,
  Droplets,
  UserPlus,
  Phone,
  Mail,
  MapIcon,
  ChevronDown,
  ChevronUp,
  Book,
} from "lucide-react"
import { Parish, Promise } from "@prisma/client"

const parishes = [
  { name: "Bujumbura Parish", population: "12,500", description: "Central parish with main market area" },
  { name: "Kiryatete Parish", population: "8,200", description: "Agricultural hub with fertile lands" },
  { name: "Kyabigambire Parish", population: "9,800", description: "Growing residential area" },
  { name: "Mparo Parish", population: "7,600", description: "Traditional community center" },
  { name: "Kigorobya Parish", population: "11,200", description: "Commercial and trading center" },
  { name: "Buhimba Parish", population: "6,900", description: "Rural parish with fishing activities" },
]


const manifestoPromises = [
  {
    category: "Healthcare",
    icon: Stethoscope,
    promises: [
      "Establish 3 new health centers in underserved parishes",
      "Provide free medical camps every quarter",
      "Ensure 24/7 ambulance services for all villages",
      "Stock all health facilities with essential medicines",
    ],
  },
  {
    category: "Education",
    icon: GraduationCap,
    promises: [
      "Build 2 new secondary schools in rural parishes",
      "Provide free scholastic materials to all primary students",
      "Establish vocational training centers in each parish",
      "Implement adult literacy programs for parents",
    ],
  },
  {
    category: "Infrastructure",
    icon: Building,
    promises: [
      "Tarmac all major roads connecting parishes",
      "Install solar street lights in all trading centers",
      "Build modern markets in each parish",
      "Construct bridges over seasonal rivers",
    ],
  },
  {
    category: "Water & Sanitation",
    icon: Droplets,
    promises: [
      "Drill boreholes in every village without clean water",
      "Build public toilets in all trading centers",
      "Establish waste collection systems",
      "Protect all natural water sources from pollution",
    ],
  },
  {
    category: "Economic Development",
    icon: Target,
    promises: [
      "Establish microfinance schemes for small businesses",
      "Create youth employment programs",
      "Support farmers with modern agricultural tools",
      "Promote tourism in scenic areas of our constituency",
    ],
  },
  {
    category: "Energy",
    icon: Zap,
    promises: [
      "Connect all parishes to the national electricity grid",
      "Subsidize solar panel installation for households",
      "Establish charging stations for mobile phones",
      "Promote clean cooking energy solutions",
    ],
  },
]

const manifestoDetails = {
  Healthcare: {
    importance:
      "Access to quality healthcare is a fundamental human right and the foundation of a thriving community. In Hoima City West, many of our people travel long distances to access basic medical services, often arriving too late for effective treatment.",
    impact:
      "Poor healthcare access leads to preventable deaths, especially among mothers and children. Families spend their savings on medical expenses, pushing them deeper into poverty. Our productivity as a community suffers when our people are sick and cannot work or attend school.",
    solution:
      "By establishing health centers in every parish and ensuring 24/7 ambulance services, we will save lives and reduce the financial burden on families. Free medical camps will provide preventive care, catching diseases early when they're easier and cheaper to treat.",
  },
  Education: {
    importance:
      "Education is the key that unlocks the door to opportunity and prosperity. Every child in Hoima City West deserves access to quality education, regardless of their family's economic status.",
    impact:
      "Limited educational facilities force our children to walk long distances to school, leading to high dropout rates. Many talented young people cannot pursue secondary education due to lack of nearby schools, perpetuating the cycle of poverty in our community.",
    solution:
      "Building new secondary schools and providing free scholastic materials will ensure no child is left behind. Vocational training centers will equip our youth with practical skills for immediate employment, while adult literacy programs will empower parents to support their children's education.",
  },
  Infrastructure: {
    importance:
      "Good roads, reliable electricity, and modern markets are the backbone of economic development. They connect our communities, facilitate trade, and attract investment to our constituency.",
    impact:
      "Poor roads make it difficult for farmers to transport their produce to markets, leading to post-harvest losses. Lack of proper infrastructure discourages businesses from investing in our area, limiting job opportunities for our people.",
    solution:
      "Tarmacking major roads will reduce transportation costs and time, making our agricultural products more competitive. Modern markets and solar street lights will create a conducive environment for business, attracting investors and creating jobs.",
  },
  "Water & Sanitation": {
    importance:
      "Clean water is life itself. Without access to safe drinking water and proper sanitation, our communities cannot thrive. Water-related diseases consume resources that could be used for development.",
    impact:
      "Many of our villages still lack access to clean water, forcing women and children to walk long distances to fetch water from unsafe sources. This leads to waterborne diseases like cholera and diarrhea, particularly affecting our children. Poor sanitation in trading centers creates health hazards and discourages business activities.",
    solution:
      "Drilling boreholes in every village will save time and lives, allowing women to engage in productive activities instead of walking long distances for water. Protected water sources and proper waste management will dramatically reduce disease outbreaks and healthcare costs.",
  },
  "Economic Development": {
    importance:
      "A thriving economy provides opportunities for all our people to improve their livelihoods. Small businesses are the engine of local economic growth, creating jobs and keeping money circulating within our community.",
    impact:
      "Limited access to capital prevents many of our people from starting or expanding businesses. Youth unemployment leads to rural-urban migration, depleting our constituency of its most energetic workforce. Farmers lack modern tools and techniques, limiting their productivity and income.",
    solution:
      "Microfinance schemes will provide affordable credit to small business owners and farmers. Youth employment programs will create opportunities for our young people to stay and contribute to local development. Modern agricultural tools will increase productivity and farmers' incomes.",
  },
  Energy: {
    importance:
      "Reliable electricity is essential for modern life and economic development. It powers businesses, schools, and health centers, and enables our people to access information and opportunities through technology.",
    impact:
      "Many of our parishes still lack electricity connection, limiting business hours to daylight and preventing the use of modern equipment. Students cannot study effectively at night, and health centers cannot provide quality services without reliable power.",
    solution:
      "Connecting all parishes to the national grid will transform our constituency, enabling 24-hour businesses and improving quality of life. Solar panel subsidies will provide affordable energy alternatives, while mobile phone charging stations will keep our communities connected.",
  },
}

export function HoimaCivicTabs({parishes,promises,villages}: {parishes: Parish[],villages:any, promises: Promise[]}) {

  const [activeTab, setActiveTab] = useState("parishes")
  const [expandedParish, setExpandedParish] = useState<string | null>(null)
  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    phone: "",
    email: "",
    parish: "",
    village: "",
    motivation: "",
  })

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration submitted:", registrationData)
    alert("Thank you for joining our movement! We will contact you soon.")
    setRegistrationData({
      fullName: "",
      phone: "",
      email: "",
      parish: "",
      village: "",
      motivation: "",
    })
  }

  const getVillagesForParish = (parishId: string) => {
    return villages.filter((village:any) => village.parishId === parishId)
  }

  const toggleParishExpansion = (parishName: string) => {
    setExpandedParish(expandedParish === parishName ? null : parishName)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-card">
          <TabsTrigger
            value="parishes"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 animate-fade-in"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Parishes
          </TabsTrigger>
          <TabsTrigger
            value="manifesto"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 animate-fade-in"
          >
            <Heart className="w-4 h-4 mr-2" />
            Manifesto
          </TabsTrigger>
          <TabsTrigger
            value="join"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 animate-fade-in"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Join Us
          </TabsTrigger>
        </TabsList>

        <TabsContent value="parishes" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parishes.map((parish, index) => (
              <Card
                key={parish.name}
                className="hover:shadow-lg transition-all duration-300 animate-slide-up border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    {parish.name}
                  </CardTitle>
                  <CardDescription>{parish.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Population: {parish.population}
                    </Badge>
                  </div>
                  <Button
                    onClick={() => toggleParishExpansion(parish.name)}
                    className="w-full bg-yellow-500 hover:bg-accent/90 text-accent-foreground"
                  >
                    {expandedParish === parish.name ? (
                      <ChevronUp className="w-4 h-4 mr-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 mr-2" />
                    )}
                    {expandedParish === parish.id ? "Hide" : "Show"} Villages (
                    {getVillagesForParish(parish.id).length})
                  </Button>

                  {expandedParish === parish.name && (
                   
                    <div className="mt-4 space-y-2 animate-fade-in">
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-sm text-foreground mb-3">Villages in {parish.name}:</h4>
                        <div className="space-y-2">
                          {getVillagesForParish(parish.id).map((village:any, villageIndex:any) => (
                            <div
                              key={village.id}
                              className="flex items-center justify-between p-2 bg-muted/50 rounded-md animate-slide-up"
                              style={{ animationDelay: `${villageIndex * 50}ms` }}
                            >
                              <div className="flex items-center gap-2">
                                <Users className="w-3 h-3 text-accent" />
                                <span className="text-sm font-medium text-foreground">{village.name}</span>
                              </div>
                              <Badge variant="outline" className="border-accent text-black text-xs">
                                {village.houseHolds} Households
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="manifesto" className="animate-fade-in">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">My Commitment to Hoima City West</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
                Together, we will transform our constituency into a model of development, prosperity, and unity. These
                are my promises to you, the people of Hoima City West.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {promises.map((category, categoryIndex) => {
                const IconComponent = Book
                return (
                  <Card
                    key={category.title}
                    className="hover:shadow-lg transition-all duration-300 animate-slide-up border-l-4 border-l-accent"
                    style={{ animationDelay: `${categoryIndex * 150}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-foreground">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <IconComponent className="w-6 h-6 text-yellow-600" />
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.commitments.map((promise, promiseIndex) => (
                          <li
                            key={promiseIndex}
                            className="flex items-start gap-3 animate-fade-in"
                            style={{ animationDelay: `${categoryIndex * 150 + promiseIndex * 100}ms` }}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground text-pretty">{promise}</span>
                          </li>
                        ))}
                      </ul>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                            Learn More About {category.title}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3 text-xl">
                              <div className="p-2 rounded-lg bg-accent/10">
                                <IconComponent className="w-6 h-6 text-yellow-600" />
                              </div>
                              {category.title} Development Plan
                            </DialogTitle>
                            <DialogDescription>
                              Understanding the importance and impact of {category.title.toLowerCase()} in our
                              community
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Why This Matters</h4>
                              <p className="text-muted-foreground text-pretty">
                                {category.why}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Current Impact on Our Community</h4>
                              <p className="text-muted-foreground text-pretty">
                                {category.impact}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                              <p className="text-muted-foreground text-pretty">
                                {category.solution}
                              </p>
                            </div>
                            <div className="bg-primary/5 p-4 rounded-lg">
                              <h4 className="font-semibold text-foreground mb-2">My Specific Commitments:</h4>
                              <ul className="space-y-2">
                                {category.commitments.map((promise, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span className="text-sm text-foreground">{promise}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Together We Build Tomorrow</h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Your voice matters. Your dreams matter. Let's work hand in hand to make Hoima City West a beacon of
                    progress and prosperity for all.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Heart className="w-4 h-4 mr-2" />
                    Join Our Movement
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="join" className="animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Join Our Movement</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Be part of the change you want to see in Hoima City West. Together, we can build a better future for our
                community.
              </p>
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <UserPlus className="w-6 h-6 text-primary" />
                  </div>
                  Register as a Movement Member
                </CardTitle>
                <CardDescription>
                  Fill out the form below to officially join our movement and stay updated on our progress.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegistration} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={registrationData.fullName}
                        onChange={(e) => setRegistrationData({ ...registrationData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          value={registrationData.phone}
                          onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })}
                          placeholder="+256 700 000 000"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={registrationData.email}
                        onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parish">Parish *</Label>
                      <div className="relative">
                        <MapIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="parish"
                          value={registrationData.parish}
                          onChange={(e) => setRegistrationData({ ...registrationData, parish: e.target.value })}
                          placeholder="Select your parish"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="village">Village *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="village"
                          value={registrationData.village}
                          onChange={(e) => setRegistrationData({ ...registrationData, village: e.target.value })}
                          placeholder="Enter your village"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join our movement?</Label>
                    <Textarea
                      id="motivation"
                      value={registrationData.motivation}
                      onChange={(e) => setRegistrationData({ ...registrationData, motivation: e.target.value })}
                      placeholder="Tell us what motivates you to be part of this change..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join the Movement
                  </Button>
                </form>

                <div className="mt-8 p-4 bg-accent/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      You'll receive regular updates on our development projects
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      Invitations to community meetings and events
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      Opportunities to volunteer and contribute to community projects
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      Direct communication channel with our leadership team
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
