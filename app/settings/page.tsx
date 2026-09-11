'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, MoreHorizontal, Search, Zap, Settings as SettingsIcon, MessageSquare, Shield, Bell, ArrowUpRight } from 'lucide-react'

export default function SettingsPage() {
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
        <header className="topbar"><div className="breadcrumbs"><span>Core Platform</span><span>/</span><strong>Settings</strong></div><div className="top-actions"><button className="search-pill"><Search size={16} />Search <kbd>⌘ K</kbd></button><button className="icon-button"><Zap size={17} /></button></div></header>
        <div className="workspace">
          <div className="page-heading"><div><div className="live-label"><span className="live-dot" />Live</div><h1>Settings <span>⚙️</span></h1><p>Configure workspace settings and integrations.</p></div></div>

          <div style={{ marginTop: '35px', display: 'grid', gridTemplateColumns: '1fr', gap: '13px', maxWidth: '800px' }}>
            <div style={{ padding: '18px 19px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <SettingsIcon size={18} style={{ color: '#8b72ff' }} />
                  <div>
                    <div style={{ fontWeight: 550, fontSize: '11px', color: '#eef1ff' }}>General Settings</div>
                    <div style={{ fontSize: '10px', color: '#8b92b4', marginTop: '3px' }}>Workspace name, region, and billing</div>
                  </div>
                </div>
                <button style={{ border: '1px solid rgba(139,146,180,.18)', background: 'rgba(255,255,255,.035)', color: '#b4bad2', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '10px' }}>Configure</button>
              </div>
            </div>

            <div style={{ padding: '18px 19px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MessageSquare size={18} style={{ color: '#53d8e8' }} />
                  <div>
                    <div style={{ fontWeight: 550, fontSize: '11px', color: '#eef1ff' }}>Integrations</div>
                    <div style={{ fontSize: '10px', color: '#8b92b4', marginTop: '3px' }}>Connect Slack, GitHub, and other tools</div>
                  </div>
                </div>
                <button style={{ border: '1px solid rgba(139,146,180,.18)', background: 'rgba(255,255,255,.035)', color: '#b4bad2', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '10px' }}>Configure</button>
              </div>
            </div>

            <div style={{ padding: '18px 19px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Bell size={18} style={{ color: '#ff94c8' }} />
                  <div>
                    <div style={{ fontWeight: 550, fontSize: '11px', color: '#eef1ff' }}>Notifications</div>
                    <div style={{ fontSize: '10px', color: '#8b92b4', marginTop: '3px' }}>Build alerts, deploy notifications, and webhooks</div>
                  </div>
                </div>
                <button style={{ border: '1px solid rgba(139,146,180,.18)', background: 'rgba(255,255,255,.035)', color: '#b4bad2', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '10px' }}>Configure</button>
              </div>
            </div>

            <div style={{ padding: '18px 19px', background: 'rgba(255,255,255,.045)', border: '1px solid rgba(139,146,180,.16)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Shield size={18} style={{ color: '#ffa86a' }} />
                  <div>
                    <div style={{ fontWeight: 550, fontSize: '11px', color: '#eef1ff' }}>Security</div>
                    <div style={{ fontSize: '10px', color: '#8b92b4', marginTop: '3px' }}>API keys, SSH keys, and access control</div>
                  </div>
                </div>
                <button style={{ border: '1px solid rgba(139,146,180,.18)', background: 'rgba(255,255,255,.035)', color: '#b4bad2', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '10px' }}>Configure</button>
              </div>
            </div>
          </div>

          <footer><span>Shipyard control plane <b>•</b> All systems operational</span><span>API status <i className="pulse-dot" /></span></footer>
        </div>
      </div>
    </main>
  )
}
