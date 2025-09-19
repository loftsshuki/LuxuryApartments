import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Globe, TrendingUp, Shield, Users, Code, DollarSign, BarChart3, Building, Network, Zap } from 'lucide-react';

const CompassDomainDAO = () => {
  const [expandedSections, setExpandedSections] = useState({});
  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      id: 'foundation',
      title: 'Base Network Foundation',
      icon: <Network className="w-6 h-6" />,
      content: `Base network, launched by Coinbase in August 2023, has emerged as the ideal platform for domain DAOs with its combination of low transaction costs ($0.10-0.30 per transaction versus $20+ on Ethereum), full EVM compatibility, and access to 110 million Coinbase users. The network's architecture on Optimism's OP Stack provides 4x throughput increases since launch while maintaining security through optimistic rollup technology.`
    },
    {
      id: 'architecture',
      title: 'Smart Contract Architecture',
      icon: <Code className="w-6 h-6" />,
      content: `The optimal DAO architecture employs a dual-token model separating governance from utility, preventing the concentration risks that plagued early DAOs. The governance token (DGOV) maintains a fixed supply of 100 million tokens with voting rights and revenue sharing, while utility tokens (DUTIL) represent fractional ownership in specific domains.`
    },
    {
      id: 'legal',
      title: 'Legal Framework',
      icon: <Shield className="w-6 h-6" />,
      content: `The regulatory landscape demands careful structuring combining a Wyoming Decentralized Unincorporated Nonprofit Association (DUNA) for governance with a Marshall Islands DAO LLC for asset holding and business operations. This dual structure separates governance from business operations, providing regulatory flexibility and tax optimization.`
    },
    {
      id: 'economics',
      title: 'Economic Model',
      icon: <TrendingUp className="w-6 h-6" />,
      content: `Financial modeling projects 16-25% annual returns for NFT holders in base scenarios, with optimistic projections reaching 80%+ during portfolio growth phases. The model accounts for $662,000 in Year 1 fixed costs against $716,000 projected revenue from a 1,000-domain portfolio.`
    }
  ];

  const stats = [
    { label: 'Gas Cost per NFT', value: '$0.10-0.50', description: 'vs $50-200 on Ethereum' },
    { label: 'Projected Returns', value: '16-25%', description: 'Annual for NFT holders' },
    { label: 'Portfolio Target', value: '1,000+', description: 'Premium domains' },
    { label: 'Initial Raise', value: '$2-5M', description: 'Through NFT sales' }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      timeline: 'Months 1-3',
      title: 'Foundation',
      items: ['Legal entity formation', 'Smart contract development', 'Initial domain portfolio', 'Community building']
    },
    {
      phase: 'Phase 2', 
      timeline: 'Months 4-6',
      title: 'Launch',
      items: ['NFT sale execution', 'Governance activation', 'Liquidity pools', 'Revenue distribution']
    },
    {
      phase: 'Phase 3',
      timeline: 'Months 7-12', 
      title: 'Scale',
      items: ['Portfolio expansion', 'Revenue diversification', 'Strategic partnerships', 'Technology enhancement']
    },
    {
      phase: 'Phase 4',
      timeline: 'Year 2+',
      title: 'Expansion',
      items: ['Cross-chain deployment', 'AI automation', 'Institutional partnerships', 'Public offerings']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Domain DAO Blueprint</h1>
              <p className="text-lg text-slate-600 mt-1">Building the Future of Digital Real Estate on Base Network</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
            <p className="text-blue-100 leading-relaxed">
              The convergence of premium web domains, blockchain governance, and NFT capital markets presents a compelling 
              opportunity to democratize access to digital real estate worth billions. This comprehensive blueprint provides 
              the technical architecture, legal frameworks, and economic models for launching a domain-holding DAO on Base network.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-600 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Key Sections */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Framework</h2>
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                </div>
                {expandedSections[section.id] ? 
                  <ChevronDown className="w-5 h-5 text-slate-400" /> : 
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                }
              </button>
              {expandedSections[section.id] && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="bg-slate-900 rounded-xl p-6 mb-12">
          <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
            <Code className="w-5 h-5 mr-2" />
            Smart Contract Architecture
          </h3>
          <pre className="text-green-400 text-sm overflow-x-auto">
{`// Core DAO governance contract
contract DomainDAO is Governor, GovernorCountingSimple, GovernorVotes {
    
    constructor(IVotes _token, TimelockController _timelock) 
        Governor("DomainDAO")
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4) // 4% quorum
        GovernorTimelockControl(_timelock)
    {}

    function votingDelay() public pure override returns (uint256) {
        return 7200; // 1 day with 12-second blocks
    }
}`}
          </pre>
        </div>

        {/* Roadmap */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Roadmap</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {phase.phase}
                  </div>
                  <div className="text-sm text-slate-500">{phase.timeline}</div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-slate-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Projections */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-12">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
            Financial Projections
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">$716K</div>
              <div className="text-sm text-slate-600">Year 1 Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">$662K</div>
              <div className="text-sm text-slate-600">Year 1 Costs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">Month 8</div>
              <div className="text-sm text-slate-600">Breakeven Point</div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <p className="text-sm text-slate-700">
              <strong>Revenue Distribution Formula:</strong> Revenue Share = Base Share × Time Multiplier × Participation Bonus
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Domain-holding DAOs represent more than financial innovation - they democratize access to digital 
            infrastructure previously monopolized by corporations and wealthy investors. The convergence creates 
            a unique window of opportunity for first movers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Download Full Blueprint
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500">
          <p className="text-sm">
            This comprehensive analysis combines technical architecture, regulatory compliance, 
            and operational excellence for sustainable DAO deployment on Base network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompassDomainDAO;