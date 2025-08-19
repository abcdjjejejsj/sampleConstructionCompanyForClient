import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      const elements = sectionRef.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['(555) 123-4567', '(555) 123-4568'],
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@buildmaster.com', 'projects@buildmaster.com'],
      link: 'mailto:info@buildmaster.com'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['123 Construction Blvd', 'Building City, BC 12345'],
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 3:00 PM'],
      link: '#'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section"
      style={{
        background: `linear-gradient(135deg, var(--warm-gray) 0%, var(--primary-sand) 100%)`,
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-title fade-in">
          <h2>Get In Touch</h2>
          <p>Ready to start your construction project? Contact us today for a free consultation and detailed estimate. Our team is here to bring your vision to life.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div className="slide-in-left">
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '24px',
              color: 'var(--charcoal)'
            }}>
              Let's Build Something Amazing Together
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: 'var(--medium-gray)',
              marginBottom: '40px'
            }}>
              Whether you're planning a new home, commercial building, or renovation project, our experienced team is ready to help. Contact us to discuss your vision and get started.
            </p>

            {/* Contact Info Cards */}
            <div style={{
              display: 'grid',
              gap: '24px',
              marginBottom: '40px'
            }}>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '24px',
                      background: 'var(--white)',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px var(--shadow-light)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 12px 35px var(--shadow-medium)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = '0 8px 25px var(--shadow-light)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      background: `linear-gradient(135deg, var(--dark-sage), var(--soft-blue))`,
                      borderRadius: '10px',
                      flexShrink: 0
                    }}>
                      <Icon size={24} style={{ color: 'var(--white)' }} />
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        marginBottom: '8px',
                        color: 'var(--charcoal)'
                      }}>
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p 
                          key={detailIndex}
                          style={{
                            color: 'var(--medium-gray)',
                            marginBottom: detailIndex === 0 ? '4px' : '0',
                            fontWeight: '500'
                          }}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <div style={{
              padding: '24px',
              background: `linear-gradient(135deg, var(--dark-sage), var(--soft-blue))`,
              borderRadius: '16px',
              color: 'var(--white)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '8px'
              }}>
                24/7 Emergency Service
              </h4>
              <p style={{
                marginBottom: '16px',
                opacity: '0.9'
              }}>
                Need urgent construction assistance?
              </p>
              <a
                href="tel:+15551234999"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--white)',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1.1rem'
                }}
              >
                <Phone size={20} />
                (555) 123-4999
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <div style={{
              background: 'var(--white)',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px var(--shadow-light)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '32px'
              }}>
                <MessageCircle size={28} style={{ color: 'var(--dark-sage)' }} />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--charcoal)'
                }}>
                  Request Free Consultation
                </h3>
              </div>

              {isSubmitted && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px',
                  background: `linear-gradient(135deg, var(--dark-sage), var(--soft-blue))`,
                  color: 'var(--white)',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}>
                  <CheckCircle size={20} />
                  <span>Thank you! We'll contact you within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-2" style={{ marginBottom: '24px' }}>
                  <div className="form-group">
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--charcoal)'
                    }}>
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '2px solid var(--light-gray)',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--charcoal)'
                    }}>
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '2px solid var(--light-gray)',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-2" style={{ marginBottom: '24px' }}>
                  <div className="form-group">
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--charcoal)'
                    }}>
                      <Phone size={16} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '2px solid var(--light-gray)',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--charcoal)'
                    }}>
                      Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '2px solid var(--light-gray)',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        background: 'var(--white)'
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="design-build">Design-Build Services</option>
                      <option value="consultation">Consultation Only</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: 'var(--charcoal)'
                  }}>
                    Project Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid var(--light-gray)',
                      borderRadius: '8px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      background: 'var(--white)'
                    }}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="over-1m">Over $1,000,000</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '32px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: 'var(--charcoal)'
                  }}>
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid var(--light-gray)',
                      borderRadius: '8px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '1.1rem',
                    padding: '16px 32px',
                    background: isSubmitting ? 'var(--medium-gray)' : `linear-gradient(135deg, var(--dark-sage), var(--soft-blue))`,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--medium-gray)',
                textAlign: 'center',
                marginTop: '16px'
              }}>
                We'll respond within 24 hours. Emergency? Call{' '}
                <a 
                  href="tel:+15551234999"
                  style={{ 
                    color: 'var(--dark-sage)', 
                    textDecoration: 'none',
                    fontWeight: '600' 
                  }}
                >
                  (555) 123-4999
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div 
          className="fade-in"
          style={{
            marginTop: '80px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px var(--shadow-light)',
            height: '400px'
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256835825!2d-73.9878449241645!3d40.74844047138979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623861234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BuildMaster Construction Office Location"
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;