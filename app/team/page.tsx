'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, MoreHorizontal, Search, Zap, Users, GitBranch, ArrowUpRight } from 'lucide-react'

const teamMembers = [
  { name: 'Alex Kim', role: 'Lead Engineer', commits: 142, lastActive: '2m ago', avatar: 'AK', tone: 'violet' },
  { name: 'Maya Patel', role: 'Full Stack Dev', commits: 89, lastActive: '15m ago', avatar: 'MP', tone: 'cyan' },
  { name: 'Jon Rivera', role: 'DevOps Engineer', commits: 156, lastActive: '28m ago', avatar: 'JR', tone: 'blue' },
  { name: 'Sam Lee', role: 'QA Engineer', commits: 67, lastActive: '1h ago', avatar: 'SL', tone: 'pink' },
  { name: 'Jordan Chen', role: 'Product Manager', commits: 34, lastActive: '3h ago', avatar: 'JC', tone: 'blue' },
]

export default function TeamPage() {
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
        <header className="topbar"><div className="breadcrumbs"><span>Core Platform</span><span>/</span><strong>Team</strong></div><div className="top-actions"><button className="search-pill"><Search size={16} />Search <kbd>⌘ K</kbd></button><button className="icon-button"><Zap size={17} /></button></div></header>
        <div className="workspace">
          <div className="page-heading"><div><div className="live-label"><span className="live-dot" />Live</div><h1>Team <span>👥</span></h1><p>Manage team members and view contribution activity.</p></div></div>

          <div style={{ marginTop: '35px', display: 'grid', gridTemplateColumns: '1fr', gap: '9px' }}>
            {teamMembers.map(member => (
              <div key={member.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 18px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: '11px', fontWeight: 700, background: member.tone === 'violet' ? '#392d6b' : member.tone === 'cyan' ? '#164852' : member.tone === 'blue' ? '#213d68' : '#65334f', color: member.tone === 'violet' ? '#c8bdff' : member.tone === 'cyan' ? '#7aebec' : member.tone === 'blue' ? '#7dd4ff' : '#ffb4dc' }}>
                  {member.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 550, fontSize: '11px', color: '#eef1ff' }}>{member.name}</div>
                  <div style={{ fontSize: '10px', color: '#8b92b4', marginTop: '3px' }}>{member.role}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '10px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#dce0ff', fontWeight: 550 }}>{member.commits} commits</div>
                    <div style={{ color: '#8b92b4', marginTop: '3px' }}>{member.lastActive}</div>
                  </div>
                  <button style={{ border: '1px solid rgba(139,146,180,.18)', background: 'rgba(255,255,255,.035)', color: '#b4bad2', borderRadius: '6px', padding: '6px 9px', cursor: 'pointer', fontSize: '10px' }}>Manage</button>
                </div>
              </div>
            ))}
          </div>

          <footer><span>Shipyard control plane <b>•</b> All systems operational</span><span>API status <i className="pulse-dot" /></span></footer>
        </div>
      </div>
    </main>
  )
}
