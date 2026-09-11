'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, MoreHorizontal, Search, Zap, Folder, Code2, ArrowUpRight } from 'lucide-react'

const projects = [
  { name: 'commerce-api', repo: 'github.com/org/commerce-api', status: 'Active', builds: 247, deploy: 'Production', members: 4 },
  { name: 'dashboard-web', repo: 'github.com/org/dashboard-web', status: 'Active', builds: 182, deploy: 'Production', members: 3 },
  { name: 'edge-worker', repo: 'github.com/org/edge-worker', status: 'Active', builds: 98, deploy: 'Production', members: 2 },
  { name: 'mobile-app', repo: 'github.com/org/mobile-app', status: 'Active', builds: 145, deploy: 'Staging', members: 5 },
  { name: 'analytics-service', repo: 'github.com/org/analytics-service', status: 'Archived', builds: 89, deploy: 'Archive', members: 2 },
]

export default function ProjectsPage() {
  const pathname = usePathname()

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark"><span /><span /><span /></div><span>shipyard</span><sup>beta</sup></div>
        <div className="workspace-switcher"><div className="workspace-logo">C</div><div><strong>Core Platform</strong><small>Workspace</small></div><ChevronDown size={15} /></div>
        <nav className="side-nav" aria-label="Primary navigation">
          <span className="nav-label">Control plane</span>
          <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}><Zap size={17} /><span>Overview</span></Link>
          <Link href="/deployments" className={`nav-item ${pathname === '/deployments' ? 'active' : ''}`}><ArrowUpRight size={17} /><span>Deployments</span><em>12</em></Link>
          <Link href="/builds" className={`nav-item ${pathname === '/builds' ? 'active' : ''}`}><Zap size={17} /><span>Builds</span></Link>
          <Link href="/analytics" className={`nav-item ${pathname === '/analytics' ? 'active' : ''}`}><Zap size={17} /><span>Analytics</span></Link>
          <Link href="/team" className={`nav-item ${pathname === '/team' ? 'active' : ''}`}><Zap size={17} /><span>Team</span></Link>
          <span className="nav-label nav-label-spaced">Manage</span>
          <Link href="/projects" className={`nav-item ${pathname === '/projects' ? 'active' : ''}`}><Zap size={17} /><span>Projects</span></Link>
          <Link href="/settings" className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}><Zap size={17} /><span>Settings</span></Link>
        </nav>
        <div className="sidebar-bottom"><div className="pro-card"><Zap size={17} /><div><strong>Shipyard Pro</strong><p>Unlock faster builds</p></div><ArrowUpRight size={15} /></div><button className="help-link"><Zap size={16} />Help center <span>⌘K</span></button><div className="user-row"><div className="avatar avatar-blue">JC</div><div><strong>Jordan Chen</strong><small>jordan@shipyard.dev</small></div><MoreHorizontal size={16} /></div></div>
      </aside>

      <div className="main-content">
        <header className="topbar"><div className="breadcrumbs"><span>Core Platform</span><span>/</span><strong>Projects</strong></div><div className="top-actions"><button className="search-pill"><Search size={16} />Search <kbd>⌘ K</kbd></button><button className="icon-button"><Zap size={17} /></button></div></header>
        <div className="workspace">
          <div className="page-heading"><div><div className="live-label"><span className="live-dot" />Live</div><h1>Projects <span>📁</span></h1><p>View and manage all projects in your workspace.</p></div></div>

          <div style={{ marginTop: '35px', display: 'grid', gridTemplateColumns: '1fr', gap: '9px' }}>
            {projects.map(project => (
              <div key={project.name} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr', gap: '16px', alignItems: 'center', padding: '15px 18px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <Folder size={16} style={{ color: '#b5aaff' }} />
                  <div style={{ fontWeight: 550, fontSize: '11px', color: '#eef1ff' }}>{project.name}</div>
                </div>
                <div style={{ fontSize: '10px', color: '#8b92b4' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Code2 size={11} />{project.repo}</div>
                </div>
                <div style={{ fontSize: '10px' }}>
                  <span style={{ background: '#27234a', color: '#c9c0ff', padding: '3px 8px', borderRadius: '12px', display: 'inline-block' }}>{project.status}</span>
                </div>
                <div style={{ fontSize: '10px', color: '#8b92b4', textAlign: 'center' }}><div style={{ color: '#dce0ff', fontWeight: 550 }}>{project.builds}</div><div style={{ fontSize: '9px' }}>builds</div></div>
                <div style={{ fontSize: '10px', color: '#8b92b4', textAlign: 'right' }}><div style={{ color: '#dce0ff', fontWeight: 550 }}>{project.deploy}</div><div style={{ fontSize: '9px' }}>{project.members} members</div></div>
              </div>
            ))}
          </div>

          <footer><span>Shipyard control plane <b>•</b> All systems operational</span><span>API status <i className="pulse-dot" /></span></footer>
        </div>
      </div>
    </main>
  )
}
