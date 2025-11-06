import { ThumbsUp, Clock, TrendingUp } from "lucide-react"
import { Phone, Bell, MessageSquare } from "lucide-react"
import { Calendar, Zap, Users, Target,} from "lucide-react"

 
 export const feature = [
    {
      icon: ThumbsUp,
      title: "Save Time And Money",
      highlight: true,
      description:'We ensure efficiency and high-quality outcomes across every booking.'
    },
    {
      icon: Clock,
      title: "24/7 Consultant Availability",
      highlight: false,
      description:'We ensure efficiency and high-quality outcomes across every booking.'

    },
    {
      icon: TrendingUp,
      title: "Scale Your Business",
      highlight: false,
      description:'We ensure efficiency and high-quality outcomes across every booking.'
    },
  ]

   export const leftCards = [
    {
      icon: Phone,
      title: "Call Center",
      description: "25-30 Dials per hour on all Lead types",
      highlight: true,
    },
    {
      icon: Bell,
      title: "Reminder Calls",
      description: "Reminder calls prior to Zoom meeting times",
      highlight: false,
    },
  ]
export const centerCards = [
    {
      icon: MessageSquare,
      title: "Weekend Dialing",
      description: "Providing Saturday and Sunday dialing as per agent's requirements",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Our Team is available and in Touch with agents directly 24/7",
    },
  ]
  
export const features = [
  {
    title: "QA Monitoring",
    description:
      "Track and evaluate every call for quality assurance, ensuring top-tier customer experience across all touchpoints.",
    icon: "🎧",
    image: "/assets/qa.jpg", // 👈 Add your custom image here
    instructions: [
      "Easily review call recordings and identify areas for agent improvement.",
      "Generate automated quality reports to maintain consistent service standards."
    ]
  },
  {
    title: "Professional Bookers",
    description:
      "Empower your booking agents with real-time data and AI-enhanced scheduling tools.",
    icon: "📅",
    image: "/assets/customer-service-representatives-with-headsets-wor.jpg", // 👈 Custom image
    instructions: [
      "Book appointments faster with AI-assisted scheduling and real-time updates.",
      "Keep your calendar organized while maximizing customer engagement."
    ]
  },
  {
    title: "Customer Insights",
    description:
      "Turn every interaction into valuable analytics for smarter business decisions.",
    icon: "📊",
    image: "/assets/customer-insight.jpg",
    instructions: [
      "Analyze customer behavior and team performance through smart analytics.",
      "Use data-driven insights to improve satisfaction and boost conversions."
    ]
  }
]


export const services = [
    {
      title: 'Planning & Briefing',
      icon: '📋',
      description:'Delivering excellence through innovation and strategy.'
    },
    {
      title: 'Execution',
      icon: '📞',
      description:'Delivering excellence through innovation and strategy.'
    },
    {
      title: 'Evaluation',
      icon: '📊',
      description:'Delivering excellence through innovation and strategy.'

    }
  ]
  export const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES" },
    { name: "ABOUT", path: "/about" },
    { name: "BLOG", path: "/blogs" },
  ]
export const benefits = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "30-40 hours per week with flexible working hours up to 8 hours daily",
    },
    {
      icon: Clock,
      title: "Quick Onboarding",
      description: "Get trained on your scripts and start booking appointments immediately",
    },
    {
      icon: Zap,
      title: "Zoom Integration",
      description: "Seamlessly schedule video appointments across your calendar",
    },
    {
      icon: Users,
      title: "Custom Training",
      description: "Personalized training based on your unique scripts and methods",
    },
    {
      icon: Target,
      title: "Lead Management",
      description: "Efficient lead handling and schedule optimization",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Real-time analytics and performance metrics",
    },
  ]