import React, { useState, useEffect, useRef } from 'react';
import { Home, MapPin, DollarSign, Bed, Bath, Square, Send, CheckCircle, User, Mail, Phone, MessageCircle } from 'lucide-react';

interface Flat {
  id: number;
  title: string;
  type: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  features: string[];
  available: boolean;
}

const FlatEnquiry: React.FC = () => {
  const [selectedFlat, setSelectedFlat] = useState<Flat | null>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    visitDate: ''
  });

  const flats: Flat[] = [
    {
      id: 1,
      title: 'Luxury 3BHK Apartment',
      type: '3BHK',
      price: '₹85,00,000',
      location: 'Green Valley Heights',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,450 sq ft',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Modular Kitchen', 'Balcony', 'Parking', 'Gym Access', 'Swimming Pool'],
      available: true
    },
    {
      id: 2,
      title: 'Modern 2BHK Flat',
      type: '2BHK',
      price: '₹65,00,000',
      location: 'Sunrise Residency',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,100 sq ft',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Modern Kitchen', 'Balcony', 'Parking', 'Security', 'Garden View'],
      available: true
    },
    {
      id: 3,
      title: 'Spacious 4BHK Penthouse',
      type: '4BHK',
      price: '₹1,25,00,000',
      location: 'Sky Tower Complex',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,200 sq ft',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Terrace Garden', 'Premium Kitchen', '2 Parking', 'Club House', 'City View'],
      available: true
    },
    {
      id: 4,
      title: 'Cozy 1BHK Studio',
      type: '1BHK',
      price: '₹35,00,000',
      location: 'Metro View Apartments',
      bedrooms: 1,
      bathrooms: 1,
      area: '650 sq ft',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Compact Kitchen', 'Balcony', 'Metro Connectivity', 'Security', 'Power Backup'],
      available: true
    }
  ];

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

  const handleEnquiry = (flat: Flat) => {
    setSelectedFlat(flat);
    setShowEnquiryForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create enquiry object
    const enquiry = {
      id: Date.now(),
      flatId: selectedFlat?.id,
      flatTitle: selectedFlat?.title,
      flatPrice: selectedFlat?.price,
      flatLocation: selectedFlat?.location,
      ...enquiryData,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    // Save to localStorage (in a real app, this would be sent to a server)
    const existingEnquiries = JSON.parse(localStorage.getItem('flatEnquiries') || '[]');
    existingEnquiries.push(enquiry);
    localStorage.setItem('flatEnquiries', JSON.stringify(existingEnquiries));

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEnquiryData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredContact: 'email',
        visitDate: ''
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setShowEnquiryForm(false);
        setSelectedFlat(null);
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEnquiryData({
      ...enquiryData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="flats" 
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M40 40L20 20h40v40L40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-title fade-in">
          <h2>Available Flats</h2>
          <p>Discover your dream home from our collection of premium flats. Each property is carefully designed with modern amenities and prime locations.</p>
        </div>

        {/* Flats Grid */}
        <div className="grid grid-2" style={{ gap: '32px' }}>
          {flats.map((flat, index) => (
            <div
              key={flat.id}
              className="scale-in"
              style={{
                background: 'var(--white)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px var(--shadow-light)',
                transition: 'all 0.4s ease',
                transitionDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 60px var(--shadow-medium)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px var(--shadow-light)';
              }}
            >
              {/* Flat Image */}
              <div style={{ position: 'relative', height: '250px' }}>
                <img
                  src={flat.image}
                  alt={flat.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Available Badge */}
                {flat.available && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'var(--dark-sage)',
                    color: 'var(--white)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <CheckCircle size={14} />
                    Available
                  </div>
                )}

                {/* Price Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: 'var(--white)',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  fontSize: '1.1rem',
                  fontWeight: '700'
                }}>
                  {flat.price}
                </div>
              </div>

              {/* Flat Details */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: 'var(--charcoal)'
                }}>
                  {flat.title}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                  color: 'var(--medium-gray)'
                }}>
                  <MapPin size={16} />
                  <span>{flat.location}</span>
                </div>

                {/* Flat Specs */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  marginBottom: '20px',
                  padding: '16px',
                  background: 'var(--primary-sand)',
                  borderRadius: '12px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <Bed size={20} style={{ color: 'var(--dark-sage)', marginBottom: '4px' }} />
                    <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{flat.bedrooms} Bed</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Bath size={20} style={{ color: 'var(--dark-sage)', marginBottom: '4px' }} />
                    <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{flat.bathrooms} Bath</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Square size={20} style={{ color: 'var(--dark-sage)', marginBottom: '4px' }} />
                    <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{flat.area}</div>
                  </div>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '12px',
                    color: 'var(--charcoal)'
                  }}>
                    Key Features
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {flat.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        style={{
                          background: 'var(--sage-green)',
                          color: 'var(--charcoal)',
                          padding: '4px 12px',
                          borderRadius: '16px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                    {flat.features.length > 3 && (
                      <span style={{
                        color: 'var(--medium-gray)',
                        fontSize: '0.8rem',
                        padding: '4px 8px'
                      }}>
                        +{flat.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Enquiry Button */}
                <button
                  onClick={() => handleEnquiry(flat)}
                  disabled={!flat.available}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    opacity: flat.available ? 1 : 0.5,
                    cursor: flat.available ? 'pointer' : 'not-allowed'
                  }}
                >
                  <MessageCircle size={18} />
                  {flat.available ? 'Enquire Now' : 'Not Available'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && selectedFlat && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
            backdropFilter: 'blur(5px)'
          }}
          onClick={() => !isSubmitting && setShowEnquiryForm(false)}
        >
          <div
            style={{
              background: 'var(--white)',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '32px 32px 24px',
              borderBottom: '1px solid var(--light-gray)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <Home size={28} style={{ color: 'var(--dark-sage)' }} />
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: 'var(--charcoal)'
                }}>
                  Enquire About Flat
                </h3>
              </div>
              
              <div style={{
                background: 'var(--primary-sand)',
                padding: '16px',
                borderRadius: '12px'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--charcoal)',
                  marginBottom: '8px'
                }}>
                  {selectedFlat.title}
                </h4>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontSize: '0.9rem',
                  color: 'var(--medium-gray)'
                }}>
                  <span style={{ fontWeight: '600', color: 'var(--dark-sage)' }}>
                    {selectedFlat.price}
                  </span>
                  <span>•</span>
                  <span>{selectedFlat.location}</span>
                  <span>•</span>
                  <span>{selectedFlat.type}</span>
                </div>
              </div>

              <button
                onClick={() => setShowEnquiryForm(false)}
                disabled={isSubmitting}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--light-gray)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: 'var(--charcoal)'
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '32px' }}>
              {isSubmitted ? (
                <div style={{
                  textAlign: 'center',
                  padding: '40px 20px'
                }}>
                  <CheckCircle size={60} style={{ color: 'var(--dark-sage)', marginBottom: '24px' }} />
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--charcoal)',
                    marginBottom: '16px'
                  }}>
                    Enquiry Submitted Successfully!
                  </h3>
                  <p style={{
                    color: 'var(--medium-gray)',
                    fontSize: '1.1rem'
                  }}>
                    Thank you for your interest. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
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
                        value={enquiryData.name}
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
                        value={enquiryData.email}
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={enquiryData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
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
                        Preferred Contact Method
                      </label>
                      <select
                        name="preferredContact"
                        value={enquiryData.preferredContact}
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
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="whatsapp">WhatsApp</option>
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
                      Preferred Visit Date (Optional)
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      value={enquiryData.visitDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
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

                  <div className="form-group" style={{ marginBottom: '32px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--charcoal)'
                    }}>
                      Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      value={enquiryData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements, budget, or any specific questions..."
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '2px solid var(--light-gray)',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        resize: 'vertical',
                        minHeight: '100px'
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
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FlatEnquiry;