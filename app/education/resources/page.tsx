"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download, FileText, Video, Headphones, ImageIcon } from "lucide-react"
import { EducationNav } from "@/components/education-nav"
import { useState } from "react"

export default function EducationalResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="min-h-screen bg-background">
      <EducationNav />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Educational Resources</h1>
          <p className="text-xl text-muted-foreground mb-8">Download materials for offline learning and reference</p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search educational resources..." className="pl-10" />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={activeFilter === "All" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveFilter("All")}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === "Language" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveFilter("Language")}
            >
              Language
            </Button>
            <Button 
              variant={activeFilter === "Mathematics" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveFilter("Mathematics")}
            >
              Mathematics
            </Button>
            <Button 
              variant={activeFilter === "English" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveFilter("English")}
            >
              English
            </Button>
            <Button 
              variant={activeFilter === "History" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveFilter("History")}
            >
              History
            </Button>
            <Button 
              variant={activeFilter === "Science" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveFilter("Science")}
            >
              Science
            </Button>
            <Button 
              variant={activeFilter === "Technology" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveFilter("Technology")}
            >
              Technology
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">3,855</div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">24</div>
              <div className="text-sm text-muted-foreground">Available Resources</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Subject Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource Card 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-32 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: "url('/myanmar-students-learning.jpg')" }}
                >
                  <div className="h-full bg-black/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Myanmar Language Grammar Guide</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Comprehensive guide to Myanmar grammar rules and usage
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Language</Badge>
                  <Badge variant="outline">PDF 2.5 MB</Badge>
                  <Badge variant="outline">All Levels</Badge>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">1,250 downloads</span>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </CardContent>
            </Card>

            {/* Resource Card 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-32 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: "url('/myanmar-math-class.jpg')" }}
                >
                  <div className="h-full bg-black/20 rounded-lg flex items-center justify-center">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Video className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Basic Mathematics Video Series</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Step-by-step video lessons for fundamental math concepts
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Mathematics</Badge>
                  <Badge variant="outline">Video 45 MB</Badge>
                  <Badge variant="outline">Primary</Badge>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">890 downloads</span>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </CardContent>
            </Card>

            {/* Resource Card 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-32 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: "url('/myanmar-students-learning.jpg')" }}
                >
                  <div className="h-full bg-black/20 rounded-lg flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">English Pronunciation Audio Guide</h3>
                    <p className="text-sm text-muted-foreground mb-3">Audio lessons for proper English pronunciation</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">English</Badge>
                  <Badge variant="outline">Audio 12 MB</Badge>
                  <Badge variant="outline">Beginner</Badge>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">670 downloads</span>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </CardContent>
            </Card>

            {/* Resource Card 4 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-32 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: "url('/myanmar-students-learning.jpg')" }}
                >
                  <div className="h-full bg-black/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-chart-3" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Myanmar History Timeline</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Interactive timeline of Myanmar's historical events
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">History</Badge>
                  <Badge variant="outline">Interactive 8 MB</Badge>
                  <Badge variant="outline">Secondary</Badge>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">445 downloads</span>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </CardContent>
            </Card>

            {/* Resource Card 5 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-32 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: "url('/myanmar-students-learning.jpg')" }}
                >
                  <div className="h-full bg-black/20 rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-chart-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Science Experiment Illustrations</h3>
                    <p className="text-sm text-muted-foreground mb-3">Visual guides for safe science experiments</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Science</Badge>
                  <Badge variant="outline">Images 15 MB</Badge>
                  <Badge variant="outline">All Levels</Badge>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">320 downloads</span>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </CardContent>
            </Card>

            {/* Resource Card 6 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-32 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: "url('/myanmar-computer-training.jpg')" }}
                >
                  <div className="h-full bg-black/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-chart-5/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-chart-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Computer Basics Handbook</h3>
                    <p className="text-sm text-muted-foreground mb-3">Introduction to computers and digital literacy</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Technology</Badge>
                  <Badge variant="outline">PDF 5.2 MB</Badge>
                  <Badge variant="outline">Beginner</Badge>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">280 downloads</span>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offline Learning CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Perfect for Offline Learning</h2>
          <p className="text-muted-foreground">
            All resources are optimized for offline use. Download them when you have internet access and study anytime,
            anywhere in rural Myanmar.
          </p>
        </div>
      </section>
    </div>
  )
}
