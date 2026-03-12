import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
];

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.querySelectorAll('#mainmenu > li').forEach(li => {
            if (!li.querySelector('ul')) {
                li.classList.remove('has-child', 'menu-item-has-children');
            }
        });
    }, [location.pathname]);

    useEffect(() => { setMenuOpen(false); }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth > 992) setMenuOpen(false); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <style>{`
                .cd-hamburger { display: none !important; }
                .cd-backdrop { display: none !important; }
                #cd-mobile-nav { display: none !important; }
                @media (max-width: 992px) {
                    .cd-hamburger { display: flex !important; }
                    .cd-backdrop { display: block !important; }
                    #cd-mobile-nav { display: flex !important; }
                    #menu-btn { display: none !important; }

                    /* Hide desktop nav — theme JS never adds header-mobile on React,
                       so #mainmenu gets position:fixed and floats over the page */
                    .header-col-mid { display: none !important; }
                    #mainmenu { display: none !important; }
                }

                /* Override theme's "nav { height: 0 }" rule on mobile —
                   ensures our sidebar is never collapsed */
                #cd-mobile-nav.cd-sidebar {
                    height: 100vh !important;
                    min-height: 100vh !important;
                    max-height: 100vh !important;
                }

                /* Responsive sidebar width for very small phones */
                @media (max-width: 390px) {
                    .cd-sidebar { width: 88vw !important; }
                }

                /* Sidebar base */
                .cd-sidebar {
                    position: fixed !important;
                    top: 0 !important; right: 0 !important; bottom: 0 !important;
                    width: 300px !important;
                    z-index: 9999 !important;
                    background: #0d1117 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    box-shadow: -8px 0 40px rgba(0,0,0,0.6) !important;
                    transition: transform 0.38s cubic-bezier(0.4,0,0.2,1) !important;
                }
                .cd-sidebar-header {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    padding: 22px 24px 20px !important;
                    border-bottom: 1px solid rgba(255,255,255,0.08) !important;
                    flex-shrink: 0 !important;
                }
                .cd-sidebar-logo {
                    display: flex !important;
                    align-items: center !important;
                    gap: 10px !important;
                    text-decoration: none !important;
                }
                .cd-sidebar-logo span {
                    font-size: 18px !important;
                    font-weight: 700 !important;
                    color: #ffffff !important;
                    letter-spacing: 0.5px !important;
                }
                .cd-close-btn {
                    background: rgba(255,255,255,0.07) !important;
                    border: 1px solid rgba(255,255,255,0.15) !important;
                    border-radius: 8px !important;
                    color: #ffffff !important;
                    cursor: pointer !important;
                    width: 36px !important;
                    height: 36px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    font-size: 16px !important;
                    line-height: 1 !important;
                    flex-shrink: 0 !important;
                }
                .cd-close-btn:hover { background: rgba(255,255,255,0.14) !important; }

                /* Nav links */
                .cd-nav-list {
                    list-style: none !important;
                    padding: 12px 0 !important;
                    margin: 0 !important;
                    flex: 1 !important;
                    overflow-y: auto !important;
                }
                .cd-nav-list li {
                    display: block !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                #cd-mobile-nav .cd-nav-list li a,
                #cd-mobile-nav .cd-nav-list li a:visited,
                #cd-mobile-nav .cd-nav-list li a:link {
                    display: flex !important;
                    align-items: center !important;
                    padding: 14px 28px !important;
                    text-decoration: none !important;
                    color: rgba(255,255,255,0.85) !important;
                    -webkit-text-fill-color: rgba(255,255,255,0.85) !important;
                    border-left: 3px solid transparent !important;
                    background: transparent !important;
                    transition: all 0.2s ease !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                }
                #cd-mobile-nav .cd-nav-list li a:hover {
                    color: #ffffff !important;
                    -webkit-text-fill-color: #ffffff !important;
                    background: rgba(255,255,255,0.05) !important;
                    border-left-color: rgba(255,255,255,0.25) !important;
                }
                #cd-mobile-nav .cd-nav-list li a.cd-active {
                    color: var(--color-2, #00aaff) !important;
                    -webkit-text-fill-color: var(--color-2, #00aaff) !important;
                    border-left-color: var(--color-2, #00aaff) !important;
                    background: rgba(255,255,255,0.04) !important;
                }
                #cd-mobile-nav .cd-nav-list li a span {
                    color: inherit !important;
                    -webkit-text-fill-color: inherit !important;
                    opacity: 1 !important;
                }

                /* Footer */
                .cd-sidebar-footer {
                    padding: 20px 24px 28px !important;
                    border-top: 1px solid rgba(255,255,255,0.08) !important;
                    flex-shrink: 0 !important;
                }
                .cd-cta-btn {
                    display: block !important;
                    text-align: center !important;
                    padding: 13px 20px !important;
                    background: var(--color-2, #00aaff) !important;
                    color: #ffffff !important;
                    text-decoration: none !important;
                    border-radius: 6px !important;
                    font-weight: 600 !important;
                    font-size: 14px !important;
                    letter-spacing: 0.5px !important;
                    transition: opacity 0.2s !important;
                }
                .cd-cta-btn:hover { opacity: 0.85 !important; color: #fff !important; }
                .cd-social-row {
                    display: flex !important;
                    justify-content: center !important;
                    gap: 14px !important;
                    margin-top: 18px !important;
                }
                .cd-social-btn {
                    width: 36px !important;
                    height: 36px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    background: rgba(255,255,255,0.08) !important;
                    border: 1px solid rgba(255,255,255,0.12) !important;
                    border-radius: 50% !important;
                    color: rgba(255,255,255,0.7) !important;
                    font-size: 13px !important;
                    text-decoration: none !important;
                    transition: all 0.2s !important;
                }
                .cd-social-btn:hover {
                    background: var(--color-2, #00aaff) !important;
                    color: #fff !important;
                    border-color: transparent !important;
                }
            `}</style>

            <header className="transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex sm-pt10">
                                <div className="de-flex-col">
                                    <div id="logo">
                                        <Link
                                            to="/"
                                            onClick={(e) => {
                                                if (location.pathname === '/') {
                                                    e.preventDefault();
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }
                                            }}
                                            style={{fontSize:'28px',fontWeight:'700',color:'#fff',textDecoration:'none',display:'flex',alignItems:'center',gap:'10px'}}
                                        >
                                            <img src="/assets/images/background/CD Hydro Power logo-01.png" alt="CD HYDRO" style={{height:'45px'}} />
                                            <span>CD HYDRO</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="de-flex-col header-col-mid">
                                    <ul id="mainmenu">
                                        {navLinks.map(({ to, label }) => (
                                            <li key={to}><Link className="menu-item" to={to}>{label}<span></span></Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="de-flex-col">
                                    <div className="menu_side_area">
                                        <Link to="/get-a-quote" className="btn-main btn-line fx-slide hover-white"><span>Get a Quote</span></Link>
                                        <button
                                            onClick={() => setMenuOpen(true)}
                                            aria-label="Open navigation"
                                            className="cd-hamburger"
                                            style={{background:'none',border:'none',cursor:'pointer',padding:'6px 4px',marginLeft:'16px',flexDirection:'column',gap:'5px'}}
                                        >
                                            <span style={{display:'block',width:'24px',height:'2px',background:'#fff',borderRadius:'2px'}}></span>
                                            <span style={{display:'block',width:'16px',height:'2px',background:'#fff',borderRadius:'2px'}}></span>
                                            <span style={{display:'block',width:'24px',height:'2px',background:'#fff',borderRadius:'2px'}}></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Backdrop */}
            <div
                className="cd-backdrop"
                onClick={() => setMenuOpen(false)}
                style={{
                    position:'fixed', inset:0, zIndex:9998,
                    background:'rgba(0,0,0,0.55)',
                    backdropFilter:'blur(3px)',
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? 'all' : 'none',
                    transition:'opacity 0.35s ease',
                }}
            />

            {/* Slide-in Sidebar */}
            <nav
                id="cd-mobile-nav"
                className="cd-sidebar"
                style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
                aria-hidden={!menuOpen}
            >
                {/* Header */}
                <div className="cd-sidebar-header">
                    <div
                        onClick={() => {
                            setMenuOpen(false);
                            if (location.pathname === '/') {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                                navigate('/');
                            }
                        }}
                        style={{display:'flex',alignItems:'center',gap:'10px',cursor:'pointer'}}
                    >
                        <img src="/assets/images/background/CD Hydro Power logo-01.png" alt="CD HYDRO" style={{height:'36px'}} />
                        <span style={{fontSize:'18px',fontWeight:'700',color:'#ffffff',letterSpacing:'0.5px'}}>CD HYDRO</span>
                    </div>
                    <button className="cd-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close navigation">✕</button>
                </div>

                {/* Nav Links — using div+onClick so NO global a-tag CSS can interfere */}
                <div style={{flex:1, overflowY:'auto', padding:'12px 0'}}>
                    {navLinks.map(({ to, label }) => {
                        const isActive = location.pathname === to;
                        return (
                            <div
                                key={to}
                                onClick={() => navigate(to)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '14px 28px',
                                    cursor: 'pointer',
                                    borderLeft: `3px solid ${isActive ? 'var(--color-2,#00aaff)' : 'transparent'}`,
                                    background: isActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                                    transition: 'background 0.2s, border-color 0.2s',
                                }}
                                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderLeftColor = 'rgba(255,255,255,0.2)'; }}}
                                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeftColor = 'transparent'; }}}
                            >
                                <span style={{
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    letterSpacing: '0.3px',
                                    color: isActive ? 'var(--color-2,#00aaff)' : '#e8e8e8',
                                    userSelect: 'none',
                                }}>{label}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="cd-sidebar-footer">
                    <div
                        onClick={() => navigate('/get-a-quote')}
                        className="cd-cta-btn"
                        style={{cursor:'pointer'}}
                    >Get a Quote</div>
                    <div className="cd-social-row">
                        {[
                            { icon: 'fa-facebook-f',  href: '#' },
                            { icon: 'fa-x-twitter',   href: '#' },
                            { icon: 'fa-linkedin-in', href: '#' },
                            { icon: 'fa-youtube',     href: '#' },
                        ].map(({ icon, href }) => (
                            <a key={icon} href={href} className="cd-social-btn">
                                <i className={`fa-brands ${icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
