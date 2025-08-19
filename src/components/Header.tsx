import React, { useState, useEffect } from 'react';
import { Building, Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: isScrolled ? 'rgba(254, 252, 248, 0.95)' : 'var(--white)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px var(--shadow-light)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(122, 155, 142, 0.1)'
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0',
          minHeight: '80px'
        }}>
          {/* Logo */}
          <div 
            className="logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.8rem',
              fontWeight: '700',
              color: 'var(--charcoal)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('home')}
          >
            <Building 
              size={32} 
              style={{ 
                color: 'var(--dark-sage)', 
                marginRight: '12px'
              }} 
            />
            <span>BuildMaster</span>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="desktop-nav"
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '32px'
            }}
          >
            {['Home', 'Services', 'Projects', 'Flats', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--charcoal)',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '8px 0',
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--dark-sage)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--charcoal)';
                }}
              >
                {item}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0',
                  height: '2px',
                  background: 'var(--dark-sage)',
                  transition: 'width 0.3s ease'
                }} />
              </button>
            ))}
          </nav>

          {/* Header Phone */}
          <div 
            className="header-phone"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--charcoal)',
              fontWeight: '600',
              fontSize: '16px'
            }}
          >
            <Phone 
              size={20} 
              style={{ 
                color: 'var(--dark-sage)', 
                marginRight: '8px'
              }} 
            />
            <span className="phone-number">(555) 123-4567</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--charcoal)',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}
          style={{
            display: 'none',
            flexDirection: 'column',
            background: 'var(--white)',
            boxShadow: '0 4px 20px var(--shadow-light)',
            borderRadius: '12px',
            padding: '24px',
            margin: '16px 0',
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
            opacity: isMobileMenuOpen ? 1 : 0,
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
            gap: '16px'
          }}
        >
          {['Home', 'Services', 'Projects', 'Flats', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--charcoal)',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '12px 16px',
                textAlign: 'left',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-sand)';
                e.currentTarget.style.color = 'var(--dark-sage)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.color = 'var(--charcoal)';
              }}
            >
              {item}
            </button>
          ))}
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            color: 'var(--charcoal)',
            fontWeight: '600',
            padding: '12px 16px',
            borderTop: '1px solid var(--light-gray)',
            marginTop: '8px'
          }}>
            <Phone 
              size={20} 
              style={{ 
                color: 'var(--dark-sage)', 
                marginRight: '8px'
              }} 
            />
            <span>(555) 123-4567</span>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .header-phone .phone-number {
            display: none;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;