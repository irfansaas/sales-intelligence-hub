'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Users, Target, AlertCircle, TrendingUp, BookOpen, 
  Trophy, Briefcase, Shield, ChevronRight, Menu, X, Home,
  BarChart, FileText, Lightbulb, MessageSquare, Zap, Globe,
  DollarSign, Clock, CheckCircle, ArrowRight, Star, Award
} from 'lucide-react'

export default function SalesIntelligenceHub() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null)
  const [selectedPersona, setSelectedPersona] = useState('all')

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'icp', label: 'Ideal Customer Profile', icon: Users },
    { id: 'problems', label: 'Problems & Pain Points', icon: AlertCircle },
    { id: 'impact', label: 'Business Impact', icon: TrendingUp },
    { id: 'metrics', label: 'KPIs & Metrics', icon: BarChart },
    { id: 'scripts', label: 'Sales Scripts', icon: MessageSquare },
    { id: 'stories', label: 'Success Stories', icon: Trophy },
    { id: 'technical', label: 'Technical Deep Dive', icon: Briefcase },
    { id: 'competitors', label: 'Competitive Intel', icon: Shield },
    { id: 'resources', label: 'Resources', icon: BookOpen },
  ]

  const personas = [
    { id: 'cio', title: 'CIO', department: 'Executive', responsibilities: ['Strategic IT planning', 'Budget management', 'Board reporting'] },
    { id: 'it_director', title: 'Director of IT', department: 'Operations', responsibilities: ['Daily operations', 'Cost control', 'Service stability'] },
    { id: 'cloud_engineer', title: 'Director of Cloud Engineering', department: 'Technical', responsibilities: ['Auto-scaling', 'Reserved instances', 'Architecture'] },
    { id: 'vp_finance', title: 'VP of Finance', department: 'Finance', responsibilities: ['Forecasting', 'Budget planning', 'Cost analysis'] },
    { id: 'msp_ceo', title: 'CEO/President (MSP)', department: 'MSP Leadership', responsibilities: ['Profitability', 'Client retention', 'Service margins'] },
  ]

  const problems = [
    {
      id: 'azure_costs',
      title: 'Uncontrolled Azure Compute and Storage Costs',
      severity: 'critical',
      affectedPersonas: ['cio', 'it_director', 'vp_finance', 'msp_ceo'],
      description: 'Enterprises consuming more Azure resources than required, leading to unpredictable spikes and budget overruns',
      metrics: ['Monthly Azure spend per user', 'Budget variance', 'VM utilization rate'],
      solution: 'Automated scaling, rightsizing recommendations, cost modeling, and real-time dashboards',
      impact: '40-75% reduction in Azure compute and storage costs'
    },
    {
      id: 'vm_performance',
      title: 'Poor VM Performance & User Experience',
      severity: 'high',
      affectedPersonas: ['it_director', 'cloud_engineer'],
      description: 'Inadequate VM sizing and configuration leading to slow performance and user complaints',
      metrics: ['User satisfaction scores', 'Ticket volume', 'Session performance'],
      solution: 'Dynamic performance optimization and automated resource allocation',
      impact: '60% reduction in performance-related tickets'
    },
    {
      id: 'security_compliance',
      title: 'Security & Compliance Gaps',
      severity: 'critical',
      affectedPersonas: ['cio', 'it_director'],
      description: 'Difficulty maintaining consistent security policies across Azure environments',
      metrics: ['Compliance audit scores', 'Security incidents', 'Policy violations'],
      solution: 'Automated security policies and compliance monitoring',
      impact: '95% compliance achievement rate'
    }
  ]

  const successStories = [
    {
      company: 'Fortune 500 Financial Services',
      problem: 'azure_costs',
      outcome: 'Reduced Azure costs by 62% in 3 months',
      savings: '$2.4M annually',
      testimonial: 'Nerdio transformed our Azure cost management completely'
    },
    {
      company: 'Global Healthcare Provider',
      problem: 'vm_performance',
      outcome: 'Improved VDI performance by 3x',
      savings: '$800K in productivity gains',
      testimonial: 'User satisfaction scores increased from 3.2 to 4.8'
    },
    {
      company: 'Leading MSP',
      problem: 'azure_costs',
      outcome: 'Increased margins by 35%',
      savings: '$1.2M additional profit',
      testimonial: 'We can now confidently quote Azure projects'
    }
  ]

  const competitorAnalysis = [
    {
      competitor: 'Competitor A',
      strengths: ['Market presence', 'Brand recognition'],
      weaknesses: ['Limited automation', 'Complex pricing', 'Poor MSP support'],
      differentiators: ['Nerdio: 75% more cost savings', 'Unified platform', 'MSP-ready']
    },
    {
      competitor: 'Competitor B',
      strengths: ['Feature rich', 'Enterprise focus'],
      weaknesses: ['Expensive', 'Steep learning curve', 'No auto-scaling'],
      differentiators: ['Nerdio: 50% faster deployment', 'Intuitive UI', 'Built-in optimization']
    }
  ]

  const renderDashboard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glassmorphism p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 text-green-400" />
            <span className="text-sm text-gray-400">This Month</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">$2.4M</h3>
          <p className="text-sm text-gray-400">Average Cost Savings</p>
          <div className="mt-4 flex items-center text-green-400">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">62% reduction</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glassmorphism p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-blue-400" />
            <span className="text-sm text-gray-400">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">847</h3>
          <p className="text-sm text-gray-400">Enterprise Customers</p>
          <div className="mt-4 flex items-center text-blue-400">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">23% growth QoQ</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glassmorphism p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <span className="text-sm text-gray-400">Current</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">94%</h3>
          <p className="text-sm text-gray-400">Win Rate vs Competition</p>
          <div className="mt-4 flex items-center text-yellow-400">
            <Award className="w-4 h-4 mr-1" />
            <span className="text-sm">Industry leader</span>
          </div>
        </motion.div>
      </div>

      <div className="glassmorphism p-6 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'View Problem Matrix', icon: AlertCircle, color: 'text-red-400' },
            { label: 'Access Sales Scripts', icon: MessageSquare, color: 'text-blue-400' },
            { label: 'Success Stories', icon: Trophy, color: 'text-yellow-400' },
            { label: 'ROI Calculator', icon: BarChart, color: 'text-green-400' }
          ].map((action, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-4 glassmorphism rounded-xl border border-white/10 hover:border-white/30 transition-all"
            >
              <action.icon className={`w-5 h-5 mr-2 ${action.color}`} />
              <span className="text-sm text-white">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glassmorphism p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Top Problems to Address</h3>
          <div className="space-y-3">
            {problems.slice(0, 3).map((problem) => (
              <div key={problem.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    problem.severity === 'critical' ? 'bg-red-400' : 'bg-yellow-400'
                  }`} />
                  <span className="text-sm text-white">{problem.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="glassmorphism p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Recent Wins</h3>
          <div className="space-y-3">
            {successStories.slice(0, 3).map((story, idx) => (
              <div key={idx} className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{story.company}</span>
                  <span className="text-xs text-green-400">{story.savings}</span>
                </div>
                <p className="text-xs text-gray-400">{story.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderICP = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="glassmorphism p-6 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Ideal Customer Profile</h2>
        
        <div className="mb-6">
          <select
            value={selectedPersona}
            onChange={(e) => setSelectedPersona(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          >
            <option value="all">All Personas</option>
            {personas.map(p => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas
            .filter(p => selectedPersona === 'all' || p.id === selectedPersona)
            .map((persona) => (
              <motion.div
                key={persona.id}
                whileHover={{ scale: 1.05 }}
                className="p-6 glassmorphism rounded-xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                  <span className="text-xs px-2 py-1 bg-blue-400/20 text-blue-400 rounded-full">
                    {persona.department}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{persona.title}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 font-medium">Key Responsibilities:</p>
                  <ul className="space-y-1">
                    {persona.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start">
                        <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-4 w-full py-2 px-4 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg text-sm transition-all">
                  View Details
                </button>
              </motion.div>
            ))}
        </div>
      </div>

      <div className="glassmorphism p-6 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Target Industries</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Retail', 'Government', 'Education', 'MSPs'].map((industry) => (
            <div key={industry} className="p-4 bg-white/5 rounded-lg text-center">
              <Globe className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <span className="text-sm text-white">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const renderProblems = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="glassmorphism p-6 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Problems & Pain Points</h2>
        
        <div className="space-y-4">
          {problems.map((problem) => (
            <motion.div
              key={problem.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProblem(problem.id === selectedProblem ? null : problem.id)}
              className="p-6 glassmorphism rounded-xl border border-white/10 cursor-pointer transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      problem.severity === 'critical' ? 'bg-red-400' : 'bg-yellow-400'
                    }`} />
                    <h3 className="text-lg font-bold text-white">{problem.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{problem.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {problem.affectedPersonas.map((personaId) => {
                      const persona = personas.find(p => p.id === personaId)
                      return (
                        <span key={personaId} className="text-xs px-2 py-1 bg-blue-400/20 text-blue-400 rounded-full">
                          {persona?.title}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                  selectedProblem === problem.id ? 'rotate-90' : ''
                }`} />
              </div>

              <AnimatePresence>
                {selectedProblem === problem.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Key Metrics Affected</h4>
                        <ul className="space-y-1">
                          {problem.metrics.map((metric, idx) => (
                            <li key={idx} className="text-xs text-gray-300 flex items-start">
                              <BarChart className="w-3 h-3 mr-2 mt-0.5 text-orange-400" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Our Solution</h4>
                        <p className="text-xs text-gray-300">{problem.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Expected Impact</h4>
                        <p className="text-sm font-bold text-green-400">{problem.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const renderSuccessStories = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="glassmorphism p-6 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Customer Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 glassmorphism rounded-xl border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <span className="text-lg font-bold text-green-400">{story.savings}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{story.company}</h3>
              <p className="text-sm text-gray-300 mb-3">{story.outcome}</p>
              <blockquote className="italic text-sm text-gray-400 border-l-2 border-yellow-400 pl-3">
                "{story.testimonial}"
              </blockquote>
              <button className="mt-4 w-full py-2 px-4 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-lg text-sm transition-all">
                Read Full Story
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const renderCompetitors = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="glassmorphism p-6 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Competitive Intelligence</h2>
        
        <div className="space-y-6">
          {competitorAnalysis.map((comp, idx) => (
            <div key={idx} className="p-6 glassmorphism rounded-xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">{comp.competitor}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Their Strengths</h4>
                  <ul className="space-y-1">
                    {comp.strengths.map((strength, sIdx) => (
                      <li key={sIdx} className="text-xs text-gray-300 flex items-start">
                        <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-yellow-400" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Their Weaknesses</h4>
                  <ul className="space-y-1">
                    {comp.weaknesses.map((weakness, wIdx) => (
                      <li key={wIdx} className="text-xs text-gray-300 flex items-start">
                        <X className="w-3 h-3 mr-2 mt-0.5 text-red-400" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Our Differentiators</h4>
                  <ul className="space-y-1">
                    {comp.differentiators.map((diff, dIdx) => (
                      <li key={dIdx} className="text-xs text-green-400 flex items-start">
                        <Star className="w-3 h-3 mr-2 mt-0.5" />
                        {diff}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard()
      case 'icp':
        return renderICP()
      case 'problems':
        return renderProblems()
      case 'stories':
        return renderSuccessStories()
      case 'competitors':
        return renderCompetitors()
      default:
        return (
          <div className="glassmorphism p-8 rounded-2xl border border-white/10 text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold text-white mb-2">Section Under Construction</h3>
            <p className="text-gray-400">This section will be populated with your specific content</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -280 }}
          animate={{ x: sidebarOpen ? 0 : -280 }}
          className="fixed left-0 top-0 h-full w-72 glassmorphism border-r border-white/10 z-40"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Zap className="w-8 h-8 text-yellow-400 mr-2" />
                <h1 className="text-xl font-bold text-white">Sales Intel Hub</h1>
              </div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-72' : 'ml-0'} transition-all`}>
          {/* Header */}
          <header className="glassmorphism border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="mr-4 text-white hover:bg-white/10 p-2 rounded-lg"
                >
                  <Menu className="w-5 h-5" />
                </button>
                
                <div className="relative flex-1 max-w-xl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search personas, problems, scripts..."
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4 ml-4">
                <button className="p-2 text-white hover:bg-white/10 rounded-lg">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-white hover:bg-white/10 rounded-lg">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}

// Add missing imports
import { Bell, Settings } from 'lucide-react'
