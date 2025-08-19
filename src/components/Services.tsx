import React, { useEffect, useRef } from 'react';
import { Home, Building2, Hammer, ClipboardCheck, Compass, Leaf } from 'lucide-react';

const Services: React.FC = () => {
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
      const elements = sectionRef.current.querySelectorAll('.fade-in, .scale-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, additions, and complete renovations designed around your lifestyle and budget.',
      features: ['Custom Design', 'Quality Materials', 'Timely Delivery']
    },
    {
      icon: Building2,
      title: 'Commercial Buildings',
      description: 'Professional office spaces, retail centers, and industrial facilities built to meet business needs.',
      features: ['Code Compliance', 'Budget Management', 'Project Coordination']
    },
    {
      icon: Hammer,
      title: 'Renovations',
      description: 'Transform existing spaces with our expert renovation services and modern design solutions.',
      features: ['Space Planning', 'Modern Updates', 'Minimal Disruption']
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Professional oversight ensuring your construction project stays on schedule and within budget.',
      features: ['Timeline Management', 'Quality Control', 'Regular Updates']
    },
    {
      icon: Compass,
      title: 'Design-Build',
      description: 'Integrated approach combining architectural design with construction for seamless execution.',
      features: ['Unified Process', 'Cost Efficiency', 'Single Responsibility']
    },
    {
      icon: Leaf,
      title: 'Sustainable Construction',
      description: 'Eco-friendly building solutions that reduce environmental impact and operating costs.',
      features: ['Green Materials', 'Energy Efficiency', 'LEED Certification']
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section"
      style={{
        background: `linear-gradient(135deg, var(--primary-sand) 0%, var(--sage-green) 100%)`,
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
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-title fade-in">
          <h2>Our Construction Services</h2>
          <p>We offer comprehensive construction solutions from initial planning to final completion, ensuring quality craftsmanship and exceptional client satisfaction at every step.</p>
        </div>

        <div className="grid grid-3" style={{ gap: '32px' }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="scale-in card"
                style={{
                  background: 'var(--white)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                {/* Service Icon */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, var(--dark-sage), var(--soft-blue))`,
                  borderRadius: '20px',
                  marginBottom: '24px',
                  boxShadow: '0 8px 25px rgba(122, 155, 142, 0.3)'
                }}>
                  <Icon size={36} style={{ color: 'var(--white)' }} />
                </div>

                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: 'var(--charcoal)'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  color: 'var(--medium-gray)',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {service.description}
                </p>

                {/* Feature List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--light-gray)'
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        color: 'var(--charcoal)',
                        fontWeight: '500'
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--dark-sage)',
                        borderRadius: '50%',
                        marginRight: '12px'
                      }} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(122, 155, 142, 0.1), transparent)',
                  transition: 'left 0.6s ease',
                  pointerEvents: 'none'
                }} />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          className="fade-in"
          style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '60px 40px',
            background: 'var(--white)',
            borderRadius: '20px',
            boxShadow: '0 20px 60px var(--shadow-light)'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '16px',
            color: 'var(--charcoal)'
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--medium-gray)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Get a free consultation and estimate for your construction project. Our team is ready to bring your vision to life.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              fontSize: '1.1rem',
              padding: '16px 40px'
            }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;