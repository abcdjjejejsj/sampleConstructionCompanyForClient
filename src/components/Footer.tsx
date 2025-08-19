import React from 'react';
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
  };

  const services = [
    'Residential Construction',
    'Commercial Buildings',
    'Home Renovations',
    'Design-Build Services',
    'Project Management',
    'Sustainable Construction'
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Flats', id: 'flats' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--charcoal) 0%, #34495e 100%)',
      color: 'var(--white)',
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40L20 20v40h40L40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          paddingTop: '80px',
          paddingBottom: '60px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <Building size={32} style={{ color: 'var(--accent-gold)', marginRight: '12px' }} />
              <span style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--white)'
              }}>
                BuildMaster
              </span>
            </div>
            
            <p style={{
              lineHeight: '1.6',
              marginBottom: '24px',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '300px'
            }}>
              Building excellence through quality craftsmanship and professional service since 1998. Your trusted partner for all construction needs.
            </p>

            {/* Contact Info */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <Phone size={16} style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>(555) 123-4567</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <Mail size={16} style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>info@buildmaster.com</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <MapPin size={16} style={{ color: 'var(--accent-gold)', marginTop: '2px' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  123 Construction Blvd<br />
                  Building City, BC 12345
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'var(--white)'
              }}>
                Follow Us
              </h4>
              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        color: 'var(--white)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-gold)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              marginBottom: '24px',
              color: 'var(--white)',
              position: 'relative',
              paddingBottom: '12px'
            }}>
              Our Services
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50px',
                height: '3px',
                background: 'var(--accent-gold)',
                borderRadius: '2px'
              }} />
            </h3>
            
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href="#"
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-gold)';
                      e.currentTarget.style.paddingLeft = '8px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    <span style={{
                      width: '4px',
                      height: '4px',
                      background: 'var(--accent-gold)',
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              marginBottom: '24px',
              color: 'var(--white)',
              position: 'relative',
              paddingBottom: '12px'
            }}>
              Quick Links
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50px',
                height: '3px',
                background: 'var(--accent-gold)',
                borderRadius: '2px'
              }} />
            </h3>
            
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      padding: '0'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-gold)';
                      e.currentTarget.style.paddingLeft = '8px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    <span style={{
                      width: '4px',
                      height: '4px',
                      background: 'var(--accent-gold)',
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Admin Link */}
            <div style={{
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <a
                href="/admin"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                Admin Panel
              </a>
            </div>
          </div>

          {/* Newsletter & Certifications */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              marginBottom: '24px',
              color: 'var(--white)',
              position: 'relative',
              paddingBottom: '12px'
            }}>
              Stay Updated
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50px',
                height: '3px',
                background: 'var(--accent-gold)',
                borderRadius: '2px'
              }} />
            </h3>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Subscribe to our newsletter for construction tips, project updates, and industry news.
            </p>

            <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '32px'
            }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--white)',
                  fontSize: '14px'
                }}
              />
              <button
                style={{
                  padding: '12px 20px',
                  background: 'var(--accent-gold)',
                  color: 'var(--charcoal)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f4d03f';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--accent-gold)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Subscribe
              </button>
            </div>

            {/* Certifications */}
            <div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'var(--white)'
              }}>
                Certifications
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {['Licensed General Contractor', 'LEED Certified', 'Better Business Bureau A+', 'OSHA Certified'].map((cert, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: 'var(--accent-gold)',
                      borderRadius: '50%'
                    }} />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          paddingBottom: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '14px'
          }}>
            © {currentYear} BuildMaster Construction. All rights reserved.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 0 16px !important;
          }
          
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .container > div:last-child {
            flex-direction: column !important;
            text-align: center !important;
            gap: 16px !important;
          }
          
          .container > div:last-child > div {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;