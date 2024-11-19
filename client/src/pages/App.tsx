'use client'

import { useState, useEffect } from 'react'
import { GitlabIcon as GitHub, Mail, Twitter, ExternalLink, Linkedin, MessageCircle, Moon, Sun, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const writtenWork = [
  {
    id: 'neural-network-guide',
    title: "Time to Finality: Best Metric For Blockchain Speed",
    date: "2024-01-15",
    excerpt: "An introduction to the concept of Time to Finality (TTF) and why it's a better metric for blockchain speed than transaction per second.",
    link: "https://www.avax.network/blog/time-to-finality-ttf-the-ultimate-metric-for-blockchain-speed"
  },
  {
    id: 'system-design-guide',
    title: "Avalanche Subnets, Polygon Supernets, & Cosmos App Chains: Research Report",
    date: "2023-07-31",
    excerpt: "A research report on Avalanche Subnets, Polygon Supernets, and Cosmos App Chains. Delving into the technical details of each, spanning consensus mechanisms, security, costs and more.",
    link: "https://medium.com/@avaxdevelopers/avalanche-subnets-polygon-supernets-cosmos-app-chains-research-report-35b0a6cb830f"
  },
  {
    id: 'sleep-deprived-coding',
    title: "Deploying a Distributed EVM Layer 1 Blockchain using Avalanche, Docker, and GitHub Codespaces",
    date: "2023-11-02",
    excerpt: "A step by step guide to deploying a distributed EVM Layer 1 blockchain using Avalanche, Docker, and GitHub Codespaces.",
    link: "https://dev.to/usmanasim/deploying-a-distributed-evm-layer-1-blockchain-using-avalanche-docker-and-github-codespaces-5eo6"
  }
]

const talks = [
  {
    title: "Consensus 2024: Custom Virtual Machines, Powerful Consensus Mechanisms, and 100k TPS on Avalanche",
    event: "In Person Talk",
    location: "Austin, TX",
    link: "https://x.com/asimfiles/status/1801282893064614282",
  },
  {
    title: "Scaling Enterprise Systems with Avalanche: UDC Developer Conference 2023",
    event: "In Person Talk",
    location: "Seoul, South Korea",
    link: "https://www.youtube.com/watch?v=o4it_zJDhLk&t=73s",
  },
  {
    title: "Do It Yourself: Blockchain Creation @ ETHDenver 2024",
    event: "In Person Talk",
    location: "Denver, CO",
    link: "https://www.youtube.com/watch?v=SSzRBfljjGA",
  },
  {
    title: "Avalanche: The L1 Launchpad @ ETH CC 2024",
    event: "In Person Talk",
    location: "Brussels, Belgium",
    link: "https://www.youtube.com/watch?v=1knOqRex_Ag",
  },
  {
    title: "Encode Club 'Future of University' Hackathon Workshop",
    event: "Hackathon",
    location: "Online",
    link: "https://www.youtube.com/watch?v=9UkeaKDJqSs&t=121s",
  },
  {
    title: "Blockchain Infrastructure as a Service @ Subnet Show",
    event: "Podcast",
    location: "Online",
    link: "https://www.youtube.com/watch?v=49KjlAHtt94",
  },
  {
    title: "Theory Thursdays @ ETHDenver 2023",
    event: "Hackathon",
    location: "Denver, CO",
    link: "https://www.youtube.com/watch?v=mIOcSc1owYs",
  }
]

type Selection = 'about' | 'written-work' | 'talks' | 'contact'

export default function Component() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeSection, setActiveSection] = useState<Selection>('about')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showAllTalks, setShowAllTalks] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSectionClick = (section: Selection) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-green-400' : 'bg-gray-100 text-gray-800'} p-4 md:p-8 font-mono transition-colors duration-300`}>
      <main className="max-w-4xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <h1 
            className="text-6xl font-bold mb-8"
            style={{
              color: isDarkMode ? '#4ade80' : '#15803d',
              textShadow: isDarkMode ? '0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00' : 'none',
            }}
          >
            usman.asim
          </h1>
          <Button
            onClick={() => setIsDarkMode(!isDarkMode)}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </header>

        <Tabs defaultValue="about" className="mb-12">
          <TabsList>
            {['about', 'written-work', 'talks', 'contact'].map((item) => (
              <TabsTrigger key={item} value={item} onClick={() => handleSectionClick(item as Selection)}>
                {item}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="about">
            <Card>
              <CardContent className="space-y-4 pt-6">
                <p className="font-bold">SYSTEM STATUS: OPERATIONAL</p>
                <p>LOCATION: /dev/world/internet</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Working on making the world a better place</li>
                  <li>Spent the past 5 years in the world of Distributed Systems, Blockchain, Traditional Finance, and AI</li>
                  <li>Specialized in turning impossible into "done"</li>
                  <li>Known for speaking fluent English, Urdu, JavaScript, Hindi, Python, and Solidity</li>
                  <li>Writer in my free time</li>
                  <li>Enjoy playing basketball, reading, and learning new things</li>
                  <li>Currently based in San Francisco, but originally from Southern California</li>
                  <li>Notable time spent at:</li>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ava Labs: building the Avalanche Protocol</li>
                    <li>Chainstack: working on high power blockchain infrastructure</li>
                    <li>JP Morgan: dabbling in Traditional Finance</li>
                    <li>University of California, San Diego: making friends</li>
                  </ul>
                </ul>
                <p className={`${isDarkMode ? 'text-green-600' : 'text-gray-500'} text-sm mt-2`}>
                  For more on my previous employers:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><a href="https://www.avax.network/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Ava Labs</a></li>
                  <li><a href="https://chainstack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Chainstack</a></li>
                  <li><a href="https://www.jpmorgan.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">JP Morgan</a></li>
                  <li><a href="https://ucsd.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">University of California, San Diego</a></li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="written-work">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-8">
                  {writtenWork.map((work) => (
                    <article key={work.id} className="group">
                      <a href={work.link} className="block space-y-2" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                          &gt; {work.title}
                        </h3>
                        <div className="text-sm opacity-70">
                          {work.date}
                        </div>
                        <p>{work.excerpt}</p>
                        <div className="text-blue-400 group-hover:text-blue-300 inline-flex items-center">
                          READ_MORE.exe <ExternalLink className="ml-1 w-4 h-4" />
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="talks">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  {(showAllTalks ? talks : talks.slice(0, 4)).map((talk, index) => (
                    <a 
                      key={index}
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={`block border p-4 rounded-lg hover:bg-gray-800/50 transition-all group cursor-pointer`}
                    >
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                        {talk.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm mb-3">
                        <span className="px-2 py-1 bg-green-900/30 rounded">
                          {talk.event}
                        </span>
                        <span className="px-2 py-1 bg-green-900/30 rounded">
                          {talk.location}
                        </span>
                      </div>
                      <div className="text-blue-400 group-hover:text-blue-300 inline-flex items-center">
                        <span className="group-hover:underline">&gt; view_talk</span>
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
                
                {talks.length > 4 && (
                  <Button
                    onClick={() => setShowAllTalks(!showAllTalks)}
                    className="mt-6"
                  >
                    {showAllTalks ? (
                      <>Show Less</>
                    ) : (
                      <><ChevronDown className="mr-2 h-4 w-4" /> Show More</>
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardContent className="space-y-6 pt-6">
                <p>Best way to reach me:</p>
                <a 
                  href="https://t.me/usmanas27" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message me on Telegram
                </a>

                <div className="flex space-x-6 mt-8">
                  <a 
                    href="https://github.com/usmaneth" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-400 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GitHub className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://twitter.com/asimfiles" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-400 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/usman-asim-2200a41a4/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="mailto:usmanasim27@gmail.com" 
                    className="hover:text-blue-400 transition-colors"
                    aria-label="Email Contact"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="text-center text-sm mt-8 opacity-70">
          <p>SYSTEM TIME: {currentTime.toLocaleTimeString()}</p>
          <p>© 2024 - Running on-chain.exe v4.2.0</p>
        </footer>
      </main>
    </div>
  )
}
