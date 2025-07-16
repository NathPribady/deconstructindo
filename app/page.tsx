import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DeconstructedShapesBackground from "@/components/deconstructed-shapes-background"
import {
  Users,
  Feather,
  BookOpen,
  Twitter,
  Instagram,
  HelpCircle,
  Scale,
  Brain,
  History,
  ShieldHalf,
  Lightbulb,
  Sprout,
  FlaskConical,
  GraduationCap,
  FileText,
  Mic,
  Globe2,
  Flame,
  UserCheck,
  MessageCircle,
  ExternalLink,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const curriculumSections = [
  {
    id: "intellectual-genesis",
    title: "Origins of Nationalism",
    subtitle: "Identity and its Parallel Lives",
    icon: <GraduationCap className="h-6 w-6 text-blue-400" />,
    description:
      "To understand the idea of Indonesia, we must first begin to grapple with nationalism. We start with Benedict Anderson's argument that far from being a given, nations are communities that must be imagined into existence.",
    recommendedReadings: [
      {
        title:
          "Reading Imagined Communities Amid a Resurgence of Nationalism, by Samuel Clowes Huneke (2024). New Republic.",
        url: "https://newrepublic.com/article/179786/reading-imagined-communities-amid-resurgence-nationalism",
      },
    ],
    mainSources: ["Imagined Communities, by Benedict Anderson (1983)"],
  },
  {
    id: "restless-space",
    title: "The Restless Space Between Worlds",
    subtitle: "Indonesia and its First Stirrings",
    icon: <Globe2 className="h-6 w-6 text-purple-400" />,
    description:
      "Dutch rule as well as a rapidly globalizing world led to the birth of a new elite caught between multiple worlds, fraught with tensions of unbelonging that propelled these individuals to imagine a new kind of identity. To understand this, we'll enlist as our psychological guides some of the most eloquent figures of the period – Soewardi Soerjaningrat and R. A. Kartini – as well as two giants of Indonesian literature: Marah Rusli, and Pramoedya Ananta Toer.",
    recommendedReadings: [
      {
        title: "If Only I Were a Netherlander, by Soewardi Soerjaningrat (1913).",
        url: "https://drive.google.com/file/d/1jKd5I1xZQE8St1koQnjY4b2hbQiANY1n/view?usp=sharing",
        altUrl: "https://www.berdikarionline.com/kalau-saya-seorang-belanda-als-ik-eens-nederlander-was/",
        altLabel: "Indonesian",
      },
      {
        title: "'Nyai' Ontosoroh, by Ariel Heryanto (2022). Kompas.",
        url: "https://arielheryanto.com/2022/04/18/nyai-ontosoroh/",
      },
    ],
    mainSources: [
      {
        title: "Letters of a Javanese Princess, by R. A. Kartini (1921) (Letters V, VIII)",
        url: "https://www.gutenberg.org/files/34647/34647-h/34647-h.htm",
      },
      "Anak dan Kemenakan, by Marah Rusli (1956)",
      "Bumi Manusia, by Pramoedya Ananta Toer (1980)",
    ],
  },
  {
    id: "indonesia-menggugat-1",
    title: "Indonesia Menggugat, Part I",
    subtitle: "The Dutch Colonial System",
    icon: <FileText className="h-6 w-6 text-red-400" />,
    description:
      "We begin to tease out the idea of Indonesia by engaging with its clearest and most forceful champion and articulator: Sukarno. Dragged in front of a Dutch court, he embarks on his landmark defense – not just of himself – but as the spokesperson of a people beggared by colonial rule. This defense – Indonesia's gugatan – begins with an indictment of the Dutch colonial system, not just as a system of domination, but of capitalist extraction.",
    recommendedReadings: [
      {
        title: "Consider Nutmeg, by Oliver Thring (2010). The Guardian.",
        url: "https://www.theguardian.com/lifeandstyle/wordofmouth/2010/sep/14/consider-nutmeg",
      },
      {
        title: "Karl Polanyi Explains it All, by Robert Kuttner (2014). The American Prospect.",
        url: "https://prospect.org/power/karl-polanyi-explains/",
      },
    ],
    mainSources: ["Indonesia Menggugat, by Sukarno (1930)"],
  },
  {
    id: "indonesia-menggugat-2",
    title: "Indonesia Menggugat, Part II",
    subtitle: "Imagining Indonesia",
    icon: <Lightbulb className="h-6 w-6 text-yellow-400" />,
    description:
      "Sukarno's defense culminates in a manifesto for Indonesian nationhood and independence. Far from being a mere rejection of Dutch rule, this was also an active attempt to create a genuinely new sense of identity. We'll explore the contours of this new identity by exploring the latter portions of Sukarno's defense speech, as well as his other speeches and writings.",
    recommendedReadings: [],
    mainSources: [
      "Indonesia Menggugat, by Sukarno (1930)",
      "Lahirnya Pancasila, by Sukarno (1945)",
      "Marhaen and Proletarian, by Sukarno (1957)",
    ],
  },
  {
    id: "guest-speaker",
    title: "Guest speaker! (maybe...)",
    subtitle: "",
    icon: <Mic className="h-6 w-6 text-green-400" />,
    description:
      "Stay tuned for potential guest speakers who will share their expertise and insights on Indonesian history and nationalism.",
    recommendedReadings: [],
    mainSources: [],
  },
  {
    id: "nationalism-discontents",
    title: "The Masses Enter the Fray",
    subtitle: "The War of Independence",
    icon: <Users className="h-6 w-6 text-cyan-400" />,
    description:
      "So far, we have focused on an Indonesia conceptualized by its elite. But what of its masses? Today we explore how Indonesian-ness was understood and experienced by the greater mass of a society deeply unfamiliar with the cultural headspace of its elite. We look at its deeply emotive and symbolic content, and how the Japanese invasion supercharged these elements into a nationwide movement.",
    recommendedReadings: [
      {
        title:
          '"The East" in a transnational context: The Indonesian War of Independence in film, by Arnoud Arps (2021). New Mandala.',
        url: "https://www.newmandala.org/the-east-in-a-transnational-context-the-indonesian-war-of-independence-in-indonesian-and-dutch-films/",
      },
    ],
    mainSources: [
      "Java in a Time of Revolution, by Benedict Anderson (1972)",
      "Protest Movements in Rural Java, by Sartono Kartodirdjo (1973)",
    ],
  },
  {
    id: "bersiap-psychology",
    title: "Bersiap: Sjahrir and Malaka",
    subtitle: "The Psychology of Revolution",
    icon: <Flame className="h-6 w-6 text-orange-400" />,
    description:
      "What is revolution? Is it an act of heroic rebirth where the demons of the past are exorcised by the angels of the new, or a raging fire that devours everything in its path? These debates will come to the fore as Indonesia steers its way through its own national revolution, one that we will trace through the confrontation between two major figures of the revolution: Sutan Sjahrir, and Tan Malaka.",
    recommendedReadings: [
      {
        title:
          "Bersiap: A Shared History of Mass Violence that Haunts Indonesia and the Netherlands, by Ariel Heryanto (2022). The Conversation.",
        url: "https://theconversation.com/bersiap-a-shared-history-of-mass-violence-that-haunts-indonesia-and-the-netherlands-176477",
        altUrl:
          "https://theconversation.com/kapan-siap-menghadapi-bersiap-mendalami-polemik-periode-kekerasan-pasca-proklamasi-indonesia-175836",
        altLabel: "Indonesian",
      },
      {
        title: "Bhimrao Ambedkar's Rare TV Appearance: 'The Social Structure Must Change.' BBC News India, Youtube.",
        url: "https://www.youtube.com/watch?v=WS7P9TKDZ2k",
      },
    ],
    mainSources: ["Perjuangan Kita, by Sutan Sjahrir (1947)", "Muslihat, by Tan Malaka (1945)"],
  },
  {
    id: "which-indonesian",
    title: "Which Indonesian?",
    subtitle: "The Arab and Chinese Minorities",
    icon: <UserCheck className="h-6 w-6 text-indigo-400" />,
    description:
      "Nationalism is an inherently unifying and totalizing force. But what happens when other identities begin to encroach on certain visions of what it means to be Indonesian? We'll see this in later modules with ethnic regionalisms and ideological clashes. Today though, we'll pay special attention on that most distant frontier of Indonesian identity and those who inhabit that uneasy space: its Arab and Chinese minorities.",
    recommendedReadings: [],
    mainSources: [],
  },
]

const overviewCurriculumData = [
  {
    id: "nationalism-idea",
    title: "Nationalism and the Idea of Indonesia",
    icon: <Feather className="h-5 w-5 text-cyan-400" />,
    description:
      "The grasping for Indonesian national identity was in many ways a quest for home by a generation stranded in a land made alien by Dutch imperial rule. Its legacy is the idea of Indonesia, an idea marked by both immense creative potency as well as sharp internal contradictions.",
    keyThemes: [
      "Creating an Indonesian Identity",
      "Colonial Legacies",
      "Revolution and its Lived Experience",
      "Nationalism and its Discontents",
    ],
  },
  {
    id: "indigenous-traditions",
    title: "Indigenous Traditions & Philosophies",
    icon: <Sprout className="h-5 w-5 text-green-400" />,
    description:
      "Journey through the rich tapestry of Indonesia's indigenous mythologies, spiritual practices, and diverse schools of thought that form its cultural bedrock.",
    keyThemes: ["Creation Myths", "Local Wisdom", "Syncretic Beliefs", "Diverse Philosophies"],
  },
  {
    id: "global-currents",
    title: "Global Intellectual Currents",
    icon: <Lightbulb className="h-5 w-5 text-yellow-400" />,
    description:
      "The Indonesian Revolution was as much a product of Enlightenment modernity as it was a reaction against it. Explore the origins of these pivotal global currents that finally made their way to Indonesian shores to fuel an anti-colonial uprising.",
    keyThemes: [
      "Enlightenment and Revolution",
      "Islamic Reform and Modernism",
      "The Specter of Marxism",
      "Adopting and Critiquing the Modern",
    ],
  },
  {
    id: "revolution-contest-indonesia",
    title: "Revolution and the Contest for Indonesia",
    icon: <Users className="h-5 w-5 text-purple-400" />,
    description:
      "The period between 1900-50 – encompassing Indonesia's national awakening and revolution – was marked by a remarkable synthesis between global intellectual currents and local traditions. But this was also a process where these different currents competed to find a place under the banner of 'Indonesian-ness.' The main legacy of this period still lives on: a conception of Indonesia that is simultaneously unifying and exclusionary.",
    keyThemes: [
      "The Arbitration of Nationalism",
      "Islam and Religion in Indonesia",
      "Class Struggle and the Left",
      "Nationalism as Exclusion",
    ],
  },
]

const teamMembers = [
  {
    name: "Derrick Gozal",
    credentials: "MA in QMSS, Columbia University",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQFVdBaPHkZ42A/profile-displayphoto-shrink_800_800/B4EZdAj6LmHsAk-/0/1749134845059?e=1754524800&v=beta&t=MZlDsXzYjtqe9sgJclGL-EtPmF5At1xWBwz6L3JVkKg",
    interests: "Intellectual History & Economic Sociology",
    interestIcon: <History className="h-4 w-4 mr-1.5 text-amber-400" />,
  },
  {
    name: "Alberta Christina Pertiwi",
    credentials: "MA in Human Rights Studies, Columbia University",
    imageUrl: "https://u.cubeupload.com/hahahihi/WhatsAppImage2025060.jpeg",
    interests: "Social Justice, Anthropology & Indigeneity",
    interestIcon: <Scale className="h-4 w-4 mr-1.5 text-green-400" />,
  },
  {
    name: "Nathanael Pribady",
    credentials: "MS in Learning Analytics, Columbia University",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQFSbjgmE4J-wQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729617994315?e=1754524800&v=beta&t=ATjeBKImn6Js53-uT6bJeqapz-oaoLh6ms5CKACw33M",
    interests: "Trauma-Informed Pedagogy & Critical Disability Studies",
    interestIcon: <ShieldHalf className="h-4 w-4 mr-1.5 text-rose-400" />,
  },
  {
    name: "Alsya Feydra",
    credentials: "MA in Islamic Studies, Columbia University",
    imageUrl: "https://u.cubeupload.com/hahahihi/WhatsAppImage2025061.jpg",
    interests: "Muslim Identities & Societies in Southeast Asia",
    interestIcon: <Brain className="h-4 w-4 mr-1.5 text-sky-400" />,
  },
  {
    name: "Brian Melchior",
    credentials: "PhD in History, Princeton University",
    imageUrl: "https://u.cubeupload.com/hahahihi/WhatsAppImage2025060.jpg",
    interests: "Intellectual History & History of Science",
    interestIcon: <FlaskConical className="h-4 w-4 mr-1.5 text-indigo-400" />,
  },
]

const navigationItems = [
  { name: "About", href: "#why-deconstruct" },
  { name: "Overview", href: "#curriculum-preview" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Team", href: "#team" },
]

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-stone-200">
      <DeconstructedShapesBackground />
      <Image
        src="/images/cosmic-background.png"
        alt="Cosmic background with a celestial body and stars"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 -z-10 opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 -z-10"></div>

      {/* Enhanced Header */}
      <header className="fixed top-0 left-0 right-0 p-2 sm:p-3 md:p-4 z-50 bg-black/20 backdrop-blur-md border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" aria-label="Deconstructing Indonesia Home" className="flex items-center group">
            <span className="text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
              Deconstructing Indonesia
            </span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-stone-300 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden text-stone-300 hover:text-white p-2">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <main className="relative">
        {/* Simplified Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-4 pt-16 sm:pt-20 pb-8 sm:pb-12">
          <div className="w-full max-w-5xl mx-auto text-center space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-400 font-medium animate-fade-in">
                For the sociopaths who want more school
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-none animate-fade-in-up">
                Deconstructing
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Indonesia
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
              Intellectual and social histories of the birth and life of a nation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30 group w-full sm:w-auto"
              >
                <Link href="https://chat.whatsapp.com/LBVh4U4iSk7GIC40h5PevI" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Join WhatsApp Group
                  <ExternalLink className="h-4 w-4 ml-2 opacity-70" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:border-red-400 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/20 group w-full sm:w-auto bg-transparent"
              >
                <Link href="https://www.youtube.com/@deconstructindo" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5 mr-2 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch Past Sessions
                  <ExternalLink className="h-4 w-4 ml-2 opacity-70" />
                </Link>
              </Button>

              <div className="flex items-center space-x-4 sm:space-x-6">
                <Link
                  href="https://x.com/deconstructindo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X (formerly Twitter)"
                  className="text-stone-400 hover:text-pink-400 transition-all duration-300 p-3 rounded-full hover:bg-stone-800/50 group"
                >
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="https://instagram.com/deconstructindo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="text-stone-400 hover:text-purple-400 transition-all duration-300 p-3 rounded-full hover:bg-stone-800/50 group"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Why Deconstruct Section - Better Design */}
        <section
          id="why-deconstruct"
          className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black/60 to-black/40 scroll-mt-20 relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse animation-delay-200"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-pink-400/20 rounded-full animate-pulse animation-delay-400"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Question */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-500/20 rounded-full">
                    <HelpCircle className="h-5 w-5 mr-2 text-sky-400" />
                    <span className="text-sm font-medium text-sky-300 uppercase tracking-wider">The Question</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Why Deconstruct{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                      Indonesia?
                    </span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                  <p>
                    <span className="text-2xl font-bold text-white">What is Indonesia?</span> The answer seems
                    obvious—open up a map and there you have it.
                  </p>

                  <p>
                    But what is it <em className="text-cyan-400">really?</em> A collection of islands? A land inhabited
                    by a certain people? A polity that embodies certain cultural values and norms?
                  </p>
                </div>
              </div>

              {/* Right side - Answer */}
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-stone-900/90 to-stone-800/70 backdrop-blur-md border border-stone-700/50 rounded-2xl shadow-2xl p-8 hover:shadow-purple-500/10 transition-all duration-500">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full">
                      <Lightbulb className="h-5 w-5 mr-2 text-purple-400" />
                      <span className="text-sm font-medium text-purple-300 uppercase tracking-wider">Our Approach</span>
                    </div>

                    <div className="space-y-4 text-stone-300 leading-relaxed">
                      <p>
                        Try to hammer out an actual definition and we find ourselves stranded with these questions—a
                        vagueness that has actual consequences in a world where the idea of Indonesia is often invoked
                        to compel people to do all sorts of things.
                      </p>

                      <p className="text-white font-medium">
                        This is an idea then, that is worthwhile dissecting further, something we'll be doing by delving
                        into the history of its formative period:{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                          the Indonesian National Revolution.
                        </span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-700/50">
                      <div className="flex items-center text-sm text-stone-400">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                        Intellectual history meets critical analysis
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Overview Section */}
        <section id="curriculum-preview" className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-black/60 to-black/80">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 flex items-center justify-center">
                <BookOpen className="h-12 w-12 mr-4 text-purple-400" />A Glimpse into the Journey
              </h2>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                Explore the broader curriculum modules that will guide our intellectual exploration
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-6">
              {overviewCurriculumData.map((part) => (
                <AccordionItem
                  key={part.id}
                  value={part.id}
                  className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-md border border-stone-700/60 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/30"
                >
                  <AccordionTrigger className="px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold hover:no-underline text-stone-200 hover:text-white transition-all duration-300 data-[state=open]:text-white data-[state=open]:bg-gradient-to-r data-[state=open]:from-purple-600/20 data-[state=open]:via-pink-600/20 data-[state=open]:to-red-600/20 group">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-stone-800/50 group-hover:bg-purple-800/30 transition-colors">
                        {part.icon}
                      </div>
                      <span className="text-left">{part.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-2 text-stone-300 bg-gradient-to-br from-stone-900/40 to-stone-800/20">
                    <p className="mb-6 text-base leading-relaxed">{part.description}</p>
                    <div>
                      <h4 className="font-semibold text-stone-100 text-sm uppercase tracking-wider mb-3 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2 text-yellow-400" />
                        Key Themes
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {part.keyThemes.map((theme, index) => (
                          <div key={index} className="flex items-center text-sm bg-stone-800/30 rounded-lg px-3 py-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                            {theme}
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Enhanced Curriculum Section - Now Second */}
        <section
          id="curriculum"
          className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-500">
                Part I: Nationalism and the Idea of Indonesia
              </h2>
              <p className="text-lg sm:text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
                Detailed curriculum breakdown for our first module — a deep dive into the intellectual foundations of
                Indonesian nationalism
              </p>
            </div>

            <div className="space-y-6">
              {curriculumSections.map((section, index) => (
                <Card
                  key={section.id}
                  className="group bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-md border border-stone-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/20 hover:border-purple-500/30"
                >
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-stone-800 to-stone-700 group-hover:from-purple-900/50 group-hover:to-purple-800/50 transition-all duration-300 flex-shrink-0">
                        {section.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="font-bold text-stone-100 text-xl leading-tight group-hover:text-white transition-colors">
                          {section.title}
                        </CardTitle>
                        {section.subtitle && (
                          <CardDescription className="text-base text-stone-400 italic mt-2 group-hover:text-stone-300 transition-colors">
                            {section.subtitle}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    {section.description && (
                      <p className="text-base text-stone-300 leading-relaxed mb-6 group-hover:text-stone-200 transition-colors">
                        {section.description}
                      </p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.recommendedReadings.length > 0 && (
                        <div>
                          <h5 className="text-sm font-semibold text-stone-200 mb-3 flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-cyan-400" />
                            Recommended Reading
                          </h5>
                          <ul className="text-sm text-stone-400 space-y-3">
                            {section.recommendedReadings.map((reading, idx) => (
                              <li
                                key={idx}
                                className="pl-3 border-l-2 border-stone-700 group-hover:border-cyan-400/50 transition-colors"
                              >
                                {typeof reading === "string" ? (
                                  reading
                                ) : (
                                  <div className="space-y-1">
                                    <Link
                                      href={reading.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-dotted underline-offset-2"
                                    >
                                      {reading.title}
                                    </Link>
                                    {reading.altUrl && (
                                      <div className="text-xs">
                                        <span className="text-stone-500">Also available in </span>
                                        <Link
                                          href={reading.altUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-dotted underline-offset-2"
                                        >
                                          {reading.altLabel || "Alternative"}
                                        </Link>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.mainSources.length > 0 && (
                        <div>
                          <h5 className="text-sm font-semibold text-stone-200 mb-3 flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-purple-400" />
                            {section.recommendedReadings.length > 0 ? "Primary Sources" : "Readings"}
                          </h5>
                          <ul className="text-sm text-stone-400 space-y-3">
                            {section.mainSources.map((source, idx) => (
                              <li
                                key={idx}
                                className="pl-3 border-l-2 border-stone-700 group-hover:border-purple-400/50 transition-colors"
                              >
                                {typeof source === "string" ? (
                                  source
                                ) : (
                                  <Link
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-dotted underline-offset-2"
                                  >
                                    {source.title}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Team Section */}
        <section id="team" className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-black/40 to-black/60">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">The Minds Behind It</h2>
              <p className="text-lg sm:text-xl text-stone-300 leading-relaxed max-w-4xl mx-auto">
                We are a group of curious Indonesian students and workers driven by a shared desire to critically
                examine and deconstruct the often propagandized narratives of Indonesian history. Our aim is to foster a
                deeper, more nuanced understanding of our past.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={member.name}
                  className="group bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-md border border-stone-700/50 rounded-2xl shadow-2xl text-center overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20 hover:border-purple-500/30 flex flex-col"
                >
                  <CardHeader className="p-0">
                    <div className="relative w-full h-64 sm:h-72 bg-stone-800/50 overflow-hidden">
                      {member.imageUrl ? (
                        <Image
                          src={member.imageUrl || "/placeholder.svg"}
                          alt={`Photo of ${member.name}`}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Users className="h-24 w-24 text-stone-500/70" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-stone-400 group-hover:text-stone-300 transition-colors">
                        {member.credentials}
                      </CardDescription>
                    </div>

                    {member.interests && (
                      <div className="mt-4 pt-4 border-t border-stone-700/50 group-hover:border-purple-500/30 transition-colors">
                        <p className="text-sm text-stone-300 flex items-center justify-center group-hover:text-white transition-colors">
                          {member.interestIcon}
                          <span className="ml-2">{member.interests}</span>
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="py-12 text-center text-stone-500 bg-black/80 border-t border-stone-800/50">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Deconstructing Indonesia. All Rights Reserved (conceptually).
            </p>
            <p className="text-xs mt-2 text-stone-600">
              Built with curiosity, critical thinking, and a desire to understand our complex past.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
