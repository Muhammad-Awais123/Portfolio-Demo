export const projects = [
  {
    id: 'ai-saas-platform',
    title: 'AI Analytics & Intelligence SaaS',
    description: 'A comprehensive cloud dashboard providing real-time natural language query processing, AI generation pipelines, and dynamic charting.',
    category: 'Full Stack',
    image: '/images/projects/project-01.jpg',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Python', 'OpenAI', 'PostgreSQL'],
    liveUrl: 'https://example.com/demo1',
    githubUrl: 'https://github.com/example/ai-saas',
    featured: true,
    details: {
      client: 'Apex Analytics Corp',
      timeline: '4 Months',
      role: 'Lead Full-Stack Architect',
      challenge: 'Handling massive real-time event ingestion while delivering sub-second interactive visualization rendering.',
      solution: 'Constructed an event-driven architecture using WebSockets, edge caching, and optimized Canvas render trees.'
    }
  },
  {
    id: 'fintech-crypto-wallet',
    title: 'Decentralized Wealth & Vault App',
    description: 'High-security multi-chain crypto asset management platform with automated yield farming strategy engine.',
    category: 'Web3 & Fintech',
    image: '/images/projects/project-02.jpg',
    tags: ['React', 'TypeScript', 'Ethers.js', 'TailwindCSS', 'Framer Motion'],
    liveUrl: 'https://example.com/demo2',
    githubUrl: 'https://github.com/example/defi-vault',
    featured: true,
    details: {
      client: 'BlockVault Inc',
      timeline: '3 Months',
      role: 'Frontend Lead',
      challenge: 'Providing institutional-grade security feedback without overwhelming retail users.',
      solution: 'Engineered a multi-step verification pipeline with dynamic simulation of transaction slippage.'
    }
  },
  {
    id: 'ecommerce-3d-experience',
    title: 'Spatial Commerce & 3D Configurator',
    description: 'Interactive 3D product showcase allowing custom spatial configurations, dynamic lighting, and instant checkout.',
    category: 'Creative Tech',
    image: '/images/projects/project-03.jpg',
    tags: ['Three.js', 'React Three Fiber', 'TailwindCSS', 'Zustand'],
    liveUrl: 'https://example.com/demo3',
    githubUrl: 'https://github.com/example/spatial-store',
    featured: true,
    details: {
      client: 'Vanguard Atelier',
      timeline: '2.5 Months',
      role: 'Creative Developer',
      challenge: 'Achieving 60 FPS performance on mobile devices with high-polygon geometry.',
      solution: 'Used progressive level-of-detail (LOD) rendering and baked occlusion maps.'
    }
  },
  {
    id: 'collaborative-workspace',
    title: 'Team Canvas & Whiteboard Suite',
    description: 'Real-time collaborative diagramming and knowledge management software for remote engineering teams.',
    category: 'Productivity',
    image: '/images/projects/project-04.jpg',
    tags: ['React', 'WebRTC', 'CRDTs', 'Node.js', 'TailwindCSS'],
    liveUrl: 'https://example.com/demo4',
    githubUrl: 'https://github.com/example/team-canvas',
    featured: false,
    details: {
      client: 'SyncFlow Systems',
      timeline: '5 Months',
      role: 'Full-Stack Developer',
      challenge: 'Resolving simultaneous conflict-free document edits with zero latency perception.',
      solution: 'Implemented Yjs-based CRDTs with WebSocket mesh fallback.'
    }
  },
  {
    id: 'healthcare-telehealth-portal',
    title: 'Precision Health & Diagnostic Suite',
    description: 'HIPAA-compliant telemedicine portal featuring asynchronous triage, encrypted file sharing, and video consultations.',
    category: 'Healthcare',
    image: '/images/projects/project-05.jpg',
    tags: ['React', 'TailwindCSS', 'WebRTC', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com/demo5',
    githubUrl: 'https://github.com/example/telehealth-core',
    featured: false,
    details: {
      client: 'CareGrid Medical',
      timeline: '6 Months',
      role: 'Senior Engineer',
      challenge: 'Ensuring absolute regulatory compliance and accessibility standards.',
      solution: 'Passed stringent third-party penetration audits and WCAG 2.1 AAA accessibility testing.'
    }
  }
];
