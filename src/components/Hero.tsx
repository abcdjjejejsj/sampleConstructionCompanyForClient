import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
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
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="hero"
      style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, rgba(122, 155, 142, 0.1), rgba(139, 182, 199, 0.1)), 
                     linear-gradient(rgba(44, 62, 80, 0.3), rgba(44, 62, 80, 0.3)), 
                     url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop') center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        color: 'var(--white)'
      }}
    >
      {/* Background Pattern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(45deg, transparent 30%, rgba(245, 243, 240, 0.05) 31%, rgba(245, 243, 240, 0.05) 32%, transparent 33%)',
        backgroundSize: '20px 20px',
        opacity: 0.3
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          minHeight: '600px'
        }}>
          {/* Hero Content */}
          <div className="hero-content">
            <div className="fade-in" style={{ marginBottom: '24px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '8px 16px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <CheckCircle size={16} style={{ marginRight: '8px', color: 'var(--accent-gold)' }} />
                20+ Years of Excellence
              </span>
            </div>

            <h1 
              className="slide-in-left"
              style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Building Dreams into
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, var(--accent-gold), #f4d03f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Reality
              </span>
            </h1>

            <p 
              className="slide-in-left"
              style={{
                fontSize: '1.3rem',
                lineHeight: '1.6',
                marginBottom: '40px',
                opacity: '0.9',
                maxWidth: '500px'
              }}
            >
              Premier construction services combining innovative design, quality craftsmanship, and sustainable building practices for residential and commercial projects.
            </p>

            {/* Hero Stats */}
            <div 
              className="fade-in"
              style={{
                display: 'flex',
                gap: '40px',
                marginBottom: '40px'
              }}
            >
              {[
                { number: '500+', label: 'Projects' },
                { number: '20+', label: 'Years' },
                { number: '100%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--accent-gold)',
                    marginBottom: '4px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    opacity: '0.8',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Hero Buttons */}
            <div 
              className="slide-in-left"
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
              }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-gold), #f4d03f)',
                  color: 'var(--charcoal)',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Start Your Project
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-secondary"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'var(--white)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Play size={20} />
                View Projects
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="slide-in-right"
            style={{
              position: 'relative',
              height: '600px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            <img
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Modern Construction"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            
            {/* Floating Card */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '24px',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              color: 'var(--charcoal)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '8px' }}>
                Quality Guarantee
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>
                Lifetime warranty on all structural work
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-content {
            grid-column: 1 / -1;
            text-align: center;
          }
          .hero-content + div {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;