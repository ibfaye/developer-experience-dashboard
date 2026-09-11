'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  ChevronDown,
  MoreHorizontal,
  Search,
  Zap,
  CheckCircle,
  AlertCircle,
  Clock3,
  GitBranch,
  ArrowUpRight,
} from 'lucide-react'

const buildsList = [
  { id: 'build-001', name: 'Build #2847', branch: 'main', status: 'success', time: '1m ago', duration: '2m 15s', author: 'Alex Kim' },
  { id: 'build-002', name: 'Build #2846', branch: 'feat/checkout', status: 'success', time: '12m ago', duration: '2m 48s', author: 'Maya Patel' },
  { id: 'build-003', name: 'Build #2845', branch: 'feat/metrics', status: 'pending', time: '15m ago', duration: '—', author: 'Jon Rivera' },
  { id: 'build-004', name: 'Build #2844', branch: 'chore/auth', status: 'failed', time: '28m ago', duration: '3m 22s', author: 'Sam Lee' },
  { id: 'build-005', name: 'Build #2843', branch: 'main', status: 'success', time: '45m ago', duration: '2m 10s', author: 'Alex Kim' },
  { id: 'build-006', name: 'Build #2842', branch: 'feat/dark-mode', status: 'success', time: '1h ago', duration: '2m 35s', author: 'Maya Patel' },
  { id: 'build-007', name: 'Build #2841', branch: 'refactor/auth', status: 'success', time: '2h ago', duration: '2m 20s', author: 'Jon Rivera' },
  { id: 'build-008', name: 'Build #2840', branch: 'main', status: 'success', time: '3h ago', duration: '2m 18s', author: 'Sam Lee' },
]

function getStatusColor(status: string) {
  switch (status) {
    case 'success': return 'green'
    case 'failed': return 'red'
    case 'pending': return 'purple'
    default: return 'gray'
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'success': return <CheckCircle size={14} />
    case 'failed': return <AlertCircle size={14} />
    case 'pending': return <Clock3 size={14} />
    default: return null
  }
}

export default function BuildsPage() {
  const pathname = usePathname()
  const [filter, setFilter] = useState('all')

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
        <header className="topbar"><div className="breadcrumbs"><span>Core Platform</span><span>/</span><strong>Builds</strong></div><div className="top-actions"><button className="search-pill"><Search size={16} />Search <kbd>⌘ K</kbd></button><button className="icon-button"><Zap size={17} /></button></div></header>
        <div className="workspace">
          <div className="page-heading"><div><div className="live-label"><span className="live-dot" />Live</div><h1>Builds <span>⚙️</span></h1><p>Monitor build progress and status across your system.</p></div></div>

          <div className="filter-row"><div className="range-toggle" role="group" aria-label="Filter builds">{['all', 'success', 'failed', 'pending'].map(item => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'selected' : ''}>{item}</button>)}</div><div className="filter-spacer" /><span className="updated"><span className="pulse-dot" />Updated just now</span></div>

          <div style={{ marginTop: '21px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '9px' }}>
              {buildsList.map(build => (
                <div key={build.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 18px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
                  <span style={{ color: getStatusColor(build.status) === 'green' ? '#45dbaa' : getStatusColor(build.status) === 'red' ? '#ff7184' : '#a28fff' }}>
                    {getStatusIcon(build.status)}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 550, fontSize: '11px', color: '#eef1ff' }}>{build.name}</div>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '10px', color: '#8b92b4' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><GitBranch size={11} />{build.branch}</span>
                      <span>{build.author}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '10px' }}>
                    <div style={{ color: '#dce0ff', fontWeight: 550 }}>{build.duration}</div>
                    <div style={{ color: '#8b92b4', marginTop: '3px' }}>{build.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <footer><span>Shipyard control plane <b>•</b> All systems operational</span><span>API status <i className="pulse-dot" /></span></footer>
        </div>
      </div>
    </main>
  )
}
