import React, { useEffect, useRef } from 'react';
import { Users, Award, Clock, Target, Shield, Handshake } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '25+', label: 'Years Experience', icon: Clock },
    { number: '100+', label: 'Team Members', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Award }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in every project, with rigorous testing and inspection processes.'
    },
    {
      icon: Handshake,
      title: 'Client Partnership',
      description: 'Building long-term relationships through transparent communication and collaborative project management.'
    },
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Recognized leader in construction innovation with multiple industry awards and certifications.'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section"
      style={{
        background: `linear-gradient(135deg, var(--sage-green) 0%, var(--primary-blue) 100%)`,
        position: 'relative'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20L0 0h40v40L20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-title fade-in">
          <h2>About BuildMaster Construction</h2>
          <p>With over 25 years of excellence in the construction industry, we've built our reputation on quality craftsmanship, innovative solutions, and unwavering commitment to client satisfaction.</p>
        </div>

        {/* Main About Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '80px'
        }}>
          {/* About Text */}
          <div className="slide-in-left">
            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              marginBottom: '24px',
              color: 'var(--charcoal)',
              lineHeight: '1.2'
            }}>
              Building Excellence Since 1998
            </h3>
            
            <div style={{ marginBottom: '32px' }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--medium-gray)',
                marginBottom: '20px'
              }}>
                Founded in 1998, BuildMaster Construction has grown from a small local contractor to one of the region's most trusted construction companies. Our journey began with a simple vision: to deliver exceptional quality construction services while building lasting relationships with our clients.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--medium-gray)',
                marginBottom: '20px'
              }}>
                What sets us apart is our commitment to innovation, sustainability, and craftsmanship. We combine traditional building expertise with modern technology and eco-friendly practices to create spaces that are not only beautiful but also functional and environmentally responsible.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--medium-gray)'
              }}>
                Our team of experienced professionals takes pride in every project, whether it's a custom home, commercial building, or renovation project. We believe that great construction starts with great relationships, and we're committed to earning your trust through transparency, reliability, and exceptional service.
              </p>
            </div>

            {/* Mission Statement */}
            <div style={{
              padding: '24px',
              background: 'var(--white)',
              borderRadius: '12px',
              borderLeft: '5px solid var(--dark-sage)',
              boxShadow: '0 10px 30px var(--shadow-light)'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: 'var(--charcoal)'
              }}>
                Our Mission
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--medium-gray)',
                fontStyle: 'italic'
              }}>
                "To transform our clients' visions into reality through innovative construction solutions, exceptional craftsmanship, and unwavering commitment to quality, safety, and sustainability."
              </p>
            </div>
          </div>

          {/* About Images */}
          <div className="slide-in-right">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              height: '500px'
            }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px var(--shadow-medium)'
              }}>
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Construction Team"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  flex: 1,
                  boxShadow: '0 15px 40px var(--shadow-medium)'
                }}>
                  <img
                    src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Construction Process"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  flex: 1,
                  boxShadow: '0 15px 40px var(--shadow-medium)'
                }}>
                  <img
                    src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Modern Building"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Statistics */}
        <div 
          className="fade-in"
          style={{
            background: 'var(--white)',
            padding: '60px 40px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px var(--shadow-light)',
            marginBottom: '80px'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '50px',
            color: 'var(--charcoal)'
          }}>
            Our Impact in Numbers
          </h3>
          
          <div className="grid grid-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="scale-in"
                  style={{
                    textAlign: 'center',
                    padding: '30px 20px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, var(--primary-sand), var(--sage-green))`,
                    transition: 'transform 0.3s ease',
                    transitionDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <Icon 
                    size={40} 
                    style={{ 
                      color: 'var(--dark-sage)', 
                      marginBottom: '16px' 
                    }} 
                  />
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'var(--charcoal)',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: 'var(--medium-gray)',
                    fontWeight: '600'
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Values */}
        <div className="fade-in">
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '50px',
            color: 'var(--charcoal)'
          }}>
            Our Core Values
          </h3>
          
          <div className="grid grid-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card scale-in"
                  style={{
                    textAlign: 'center',
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px',
                    background: `linear-gradient(135deg, var(--dark-sage), var(--soft-blue))`,
                    borderRadius: '18px',
                    marginBottom: '24px',
                    boxShadow: '0 8px 25px rgba(122, 155, 142, 0.3)'
                  }}>
                    <Icon size={32} style={{ color: 'var(--white)' }} />
                  </div>
                  
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '16px',
                    color: 'var(--charcoal)'
                  }}>
                    {value.title}
                  </h4>
                  
                  <p style={{
                    color: 'var(--medium-gray)',
                    lineHeight: '1.6'
                  }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          .grid-4 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;