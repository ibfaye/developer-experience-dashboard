'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Box,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  Code2,
  Command,
  Cpu,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  Globe2,
  LayoutDashboard,
  LifeBuoy,
  MoreHorizontal,
  PackageCheck,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Deployments', icon: Rocket, count: '12' },
  { label: 'Builds', icon: TerminalSquare },
  { label: 'Analytics', icon: Activity },
  { label: 'Team', icon: Users },
]

const contributors = [
  { initials: 'AK', name: 'Alex Kim', detail: 'Updated edge middleware', branch: 'main', time: '2m ago', tone: 'violet' },
  { initials: 'MP', name: 'Maya Patel', detail: 'Fixed checkout redirect', branch: 'feat/checkout', time: '18m ago', tone: 'cyan' },
  { initials: 'JR', name: 'Jon Rivera', detail: 'Added usage analytics', branch: 'feat/metrics', time: '41m ago', tone: 'blue' },
  { initials: 'SL', name: 'Sam Lee', detail: 'Refactored auth hooks', branch: 'chore/auth', time: '1h ago', tone: 'pink' },
]

const throughput = [42, 55, 48, 67, 61, 72, 58, 78, 66, 83, 74, 92, 84, 96, 89, 100, 91, 97]

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`glass-card ${className}`}>{children}</section>
}

function MetricCard({ icon: Icon, label, value, change, positive = true, accent }: { icon: typeof Activity; label: string; value: string; change: string; positive?: boolean; accent: string }) {
  return (
    <GlassCard className="metric-card">
      <div className="metric-top"><span className={`metric-icon ${accent}`}><Icon size={17} /></span><button className="icon-button" aria-label={`More options for ${label}`}><MoreHorizontal size={17} /></button></div>
      <p className="eyebrow">{label}</p>
      <div className="metric-row"><strong>{value}</strong><span className={positive ? 'trend up' : 'trend down'}>{positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{change}</span></div>
      <div className="metric-line"><span style={{ width: positive ? '72%' : '49%' }} /></div>
    </GlassCard>
  )
}

export default function Page() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [range, setRange] = useState('7d')
  const [project, setProject] = useState('commerce-api')
  const [environment, setEnvironment] = useState('Production')
  const [refreshing, setRefreshing] = useState(false)
  const [deploying, setDeploying] = useState(false)
  const [notice, setNotice] = useState('')

  function refresh() {
    setRefreshing(true)
    setNotice('Syncing latest platform telemetry…')
    window.setTimeout(() => { setRefreshing(false); setNotice('Telemetry is up to date') }, 900)
  }

  function deploy() {
    setDeploying(true)
    setNotice('Deploy queued for commerce-api')
    window.setTimeout(() => { setDeploying(false); setNotice('Deployment completed successfully') }, 1400)
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark"><span /><span /><span /></div><span>shipyard</span><sup>beta</sup></div>
        <div className="workspace-switcher"><div className="workspace-logo">C</div><div><strong>Core Platform</strong><small>Workspace</small></div><ChevronDown size={15} /></div>
        <nav className="side-nav" aria-label="Primary navigation">
          <span className="nav-label">Control plane</span>
          {navItems.map(({ label, icon: Icon, count }) => <button key={label} onClick={() => setActiveNav(label)} className={`nav-item ${activeNav === label ? 'active' : ''}`}><Icon size={17} /><span>{label}</span>{count && <em>{count}</em>}</button>)}
          <span className="nav-label nav-label-spaced">Manage</span>
          <button className="nav-item"><Box size={17} /><span>Projects</span></button><button className="nav-item"><Settings2 size={17} /><span>Settings</span></button>
        </nav>
        <div className="sidebar-bottom"><div className="pro-card"><Sparkles size={17} /><div><strong>Shipyard Pro</strong><p>Unlock faster builds</p></div><ArrowUpRight size={15} /></div><button className="help-link"><LifeBuoy size={16} />Help center <span>⌘K</span></button><div className="user-row"><div className="avatar avatar-blue">JC</div><div><strong>Jordan Chen</strong><small>jordan@shipyard.dev</small></div><MoreHorizontal size={16} /></div></div>
      </aside>

      <div className="main-content">
        <header className="topbar"><div className="breadcrumbs"><span>Core Platform</span><span>/</span><strong>{activeNav}</strong></div><div className="top-actions"><button className="search-pill"><Search size={16} />Search <kbd>⌘ K</kbd></button><button className="icon-button"><Command size={17} /></button><button className="icon-button"><BellIcon /></button><div className="avatar avatar-blue">JC</div></div></header>
        <div className="workspace">
          <div className="page-heading"><div><div className="live-label"><span className="live-dot" />Live control plane</div><h1>Good morning, Jordan <span>✦</span></h1><p>Here&apos;s what&apos;s happening across your deployment fleet.</p></div><div className="heading-actions"><button className="button secondary" onClick={refresh}><RefreshCw size={15} className={refreshing ? 'spin' : ''} />Refresh</button><button className="button primary" onClick={deploy}><Rocket size={15} />{deploying ? 'Deploying…' : 'New deployment'}</button></div></div>
          {notice && <div className="toast"><Check size={14} />{notice}<button onClick={() => setNotice('')} aria-label="Dismiss notification"><X size={14} /></button></div>}
          <div className="filter-row"><div className="select-control"><GitBranch size={15} /><select value={project} onChange={(e) => setProject(e.target.value)} aria-label="Select project"><option value="commerce-api">commerce-api</option><option value="dashboard-web">dashboard-web</option><option value="edge-worker">edge-worker</option></select><ChevronDown size={14} /></div><div className="select-control"><Globe2 size={15} /><select value={environment} onChange={(e) => setEnvironment(e.target.value)} aria-label="Select environment"><option>Production</option><option>Preview</option><option>Development</option></select><ChevronDown size={14} /></div><div className="range-toggle" role="group" aria-label="Time range">{['24h', '7d', '30d'].map(item => <button key={item} onClick={() => setRange(item)} className={range === item ? 'selected' : ''}>{item}</button>)}</div><div className="filter-spacer" /><span className="updated"><span className="pulse-dot" />Updated just now</span></div>

          <div className="metric-grid"><MetricCard icon={Cpu} label="Active builds" value="24" change="12.8%" accent="purple" /><MetricCard icon={Clock3} label="Deploy latency" value="1m 42s" change="8.4%" positive={false} accent="cyan" /><MetricCard icon={Users} label="Contributors" value="86" change="18.2%" accent="blue" /><MetricCard icon={PackageCheck} label="Shipments" value="1,284" change="24.6%" accent="pink" /></div>

          <div className="primary-grid"><GlassCard className="throughput-card"><div className="card-heading"><div><div className="card-kicker"><span className="kicker-icon"><Zap size={13} /></span>Build throughput</div><h2>Deployments over time</h2></div><button className="icon-button"><MoreHorizontal size={17} /></button></div><div className="chart-legend"><span><i className="legend-builds" />Builds</span><span><i className="legend-deploys" />Deployments</span></div><div className="chart"><div className="y-axis"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><div className="chart-area"><div className="grid-lines" /> <svg viewBox="0 0 800 240" preserveAspectRatio="none" aria-label="Build throughput chart"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#7c5cff" stopOpacity=".30" /><stop offset="100%" stopColor="#7c5cff" stopOpacity="0" /></linearGradient></defs><path d="M0 157 C35 140 45 150 70 127 S120 147 145 112 S190 128 220 94 S260 112 290 86 S330 100 360 70 S410 91 438 55 S480 83 510 44 S550 68 580 35 S620 68 650 30 S700 47 730 24 S770 40 800 13 V240 H0Z" fill="url(#area)" /><path d="M0 157 C35 140 45 150 70 127 S120 147 145 112 S190 128 220 94 S260 112 290 86 S330 100 360 70 S410 91 438 55 S480 83 510 44 S550 68 580 35 S620 68 650 30 S700 47 730 24 S770 40 800 13" fill="none" stroke="#8b72ff" strokeWidth="3" /><path d="M0 190 C42 173 50 180 83 165 S130 182 162 143 S210 155 240 134 S280 151 315 120 S360 138 395 109 S430 133 465 92 S505 115 540 85 S580 110 618 68 S660 96 690 55 S740 86 800 42" fill="none" stroke="#39d8e6" strokeWidth="2" strokeDasharray="7 7" opacity=".9" /></svg><div className="x-axis"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></div></GlassCard><GlassCard className="pipeline-card"><div className="card-heading"><div><div className="card-kicker"><span className="kicker-icon cyan-bg"><GitPullRequest size={13} /></span>Pipeline health</div><h2>Current deployments</h2></div><button className="icon-button"><MoreHorizontal size={17} /></button></div><div className="pipeline-list"><PipelineRow name="commerce-api" branch="main" status="Live" color="green" time="2m ago" /><PipelineRow name="dashboard-web" branch="feat/analytics" status="Building" color="purple" time="1m 12s" /><PipelineRow name="edge-worker" branch="hotfix/cache" status="Live" color="green" time="23m ago" /><PipelineRow name="marketing-site" branch="main" status="Failed" color="red" time="45m ago" /></div><button className="text-button" onClick={() => setActiveNav('Deployments')}>View all deployments <ArrowUpRight size={14} /></button></GlassCard></div>

          <div className="secondary-grid"><GlassCard className="activity-card"><div className="card-heading"><div><div className="card-kicker"><span className="kicker-icon pink-bg"><GitCommitHorizontal size={13} /></span>Contributor activity</div><h2>Recent contributions</h2></div><button className="button mini secondary">Last 7 days <ChevronDown size={13} /></button></div><div className="contributor-list">{contributors.map(person => <div className="contributor" key={person.name}><div className={`avatar avatar-${person.tone}`}>{person.initials}</div><div className="contributor-main"><strong>{person.name}</strong><span>{person.detail}</span></div><div className="commit-meta"><span><GitBranch size={12} />{person.branch}</span><small>{person.time}</small></div></div>)}</div><button className="text-button" onClick={() => setActiveNav('Team')}>View contributor activity <ArrowUpRight size={14} /></button></GlassCard><GlassCard className="insight-card"><div className="insight-glow" /><div className="card-kicker"><span className="kicker-icon orange-bg"><ShieldCheck size={13} /></span>System insight</div><h2>Your fleet is<br /><span>operating smoothly.</span></h2><p>All production services are healthy. Build success rate is up and your team is shipping more frequently this week.</p><div className="health-score"><div className="score-ring"><strong>98</strong><small>/100</small></div><div><strong>Excellent health</strong><span>Across 4 projects</span></div></div><button className="button full secondary"><Activity size={15} />Open platform analytics</button></GlassCard></div>
          <footer><span>Shipyard control plane <b>•</b> All systems operational</span><span>API status <i className="pulse-dot" /></span></footer>
        </div>
      </div>
    </main>
  )
}

function PipelineRow({ name, branch, status, color, time }: { name: string; branch: string; status: string; color: string; time: string }) { return <div className="pipeline-row"><span className={`status-dot ${color}`} /><div className="pipeline-name"><strong>{name}</strong><span><GitBranch size={11} />{branch}</span></div><span className={`status-pill ${color}`}>{status}</span><small>{time}</small></div> }
function BellIcon() { return <CircleDot size={17} /> }
