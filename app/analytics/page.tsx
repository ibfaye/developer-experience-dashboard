'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, MoreHorizontal, Search, Zap, TrendingUp, BarChart3, ArrowUpRight } from 'lucide-react'

export default function AnalyticsPage() {
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
        <header className="topbar"><div className="breadcrumbs"><span>Core Platform</span><span>/</span><strong>Analytics</strong></div><div className="top-actions"><button className="search-pill"><Search size={16} />Search <kbd>⌘ K</kbd></button><button className="icon-button"><Zap size={17} /></button></div></header>
        <div className="workspace">
          <div className="page-heading"><div><div className="live-label"><span className="live-dot" />Live</div><h1>Analytics <span>📊</span></h1><p>Performance metrics and insights for your deployment pipeline.</p></div></div>

          <div style={{ marginTop: '35px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '13px' }}>
            <div style={{ padding: '18px 19px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}><TrendingUp size={14} style={{ color: '#7f87a9' }} /><span style={{ fontSize: '9px', color: '#8d95b6', textTransform: 'uppercase', letterSpacing: '1.1px' }}>Build success rate</span></div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#eef1ff', marginBottom: '8px' }}>98.4%</div>
              <div style={{ fontSize: '10px', color: '#45dbaa' }}>↑ 2.1% this week</div>
            </div>
            <div style={{ padding: '18px 19px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}><BarChart3 size={14} style={{ color: '#7f87a9' }} /><span style={{ fontSize: '9px', color: '#8d95b6', textTransform: 'uppercase', letterSpacing: '1.1px' }}>Avg build time</span></div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#eef1ff', marginBottom: '8px' }}>2m 32s</div>
              <div style={{ fontSize: '10px', color: '#45dbaa' }}>↓ 18s faster</div>
            </div>
            <div style={{ padding: '18px 19px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}><TrendingUp size={14} style={{ color: '#7f87a9' }} /><span style={{ fontSize: '9px', color: '#8d95b6', textTransform: 'uppercase', letterSpacing: '1.1px' }}>Deployments this week</span></div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#eef1ff', marginBottom: '8px' }}>127</div>
              <div style={{ fontSize: '10px', color: '#45dbaa' }}>↑ 34 more than last week</div>
            </div>
          </div>

          <div style={{ marginTop: '35px', padding: '18px 19px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: '#8b92b4' }}>
              <BarChart3 size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
              <p style={{ fontSize: '12px', margin: '0' }}>Interactive analytics dashboard coming soon</p>
              <p style={{ fontSize: '10px', color: '#626a8c', margin: '8px 0 0' }}>Real-time metrics powered by your platform data</p>
            </div>
          </div>

          <footer><span>Shipyard control plane <b>•</b> All systems operational</span><span>API status <i className="pulse-dot" /></span></footer>
        </div>
      </div>
    </main>
  )
}
