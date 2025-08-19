import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      company: 'Lakeside Estate Project',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'BuildMaster exceeded all our expectations. They transformed our vision of a dream lakeside home into reality with incredible attention to detail. The team was professional, punctual, and delivered exceptional quality work within our budget and timeline.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechStart Solutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'Working with BuildMaster on our office expansion was seamless. They understood our business needs and delivered a modern, functional workspace that has improved our team productivity. Highly recommend them for any commercial project.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      company: 'Rodriguez Design Studio',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'As an interior designer, I work with many contractors, but BuildMaster stands out for their craftsmanship and collaboration. They bring creative solutions to challenges and always deliver stunning results that exceed client expectations.'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Property Developer',
      company: 'Thompson Developments',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'BuildMaster has been our go-to construction partner for over five years. Their reliability, quality workmanship, and project management skills are unmatched. They consistently deliver projects on time and within budget.'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Restaurant Owner',
      company: 'Bamboo Garden Restaurant',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'The renovation of our restaurant was completed flawlessly by BuildMaster. They worked around our schedule to minimize business disruption and created a beautiful, functional space that our customers love. Outstanding service!'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="section"
      style={{
        background: 'linear-gradient(135deg, var(--charcoal) 0%, #34495e 100%)',
        color: 'var(--white)',
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
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-title fade-in">
          <h2 style={{ color: 'var(--white)' }}>Client Testimonials</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about their BuildMaster experience.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="scale-in"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative'
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '60px 40px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            minHeight: '350px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* Quote Icon */}
            <Quote 
              size={60} 
              style={{ 
                position: 'absolute',
                top: '20px',
                left: '40px',
                color: 'var(--accent-gold)',
                opacity: 0.3
              }} 
            />

            <div style={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              {/* Stars */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '4px',
                marginBottom: '24px'
              }}>
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    style={{ 
                      fill: 'var(--accent-gold)', 
                      color: 'var(--accent-gold)' 
                    }} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p style={{
                fontSize: '1.3rem',
                lineHeight: '1.7',
                marginBottom: '32px',
                fontStyle: 'italic',
                maxWidth: '700px',
                margin: '0 auto 32px'
              }}>
                "{testimonials[currentSlide].text}"
              </p>

              {/* Client Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid var(--accent-gold)',
                  boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)'
                }}>
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '4px',
                    color: 'var(--white)'
                  }}>
                    {testimonials[currentSlide].name}
                  </h4>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {testimonials[currentSlide].role} - {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={24} style={{ color: 'var(--white)' }} />
            </button>

            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={24} style={{ color: 'var(--white)' }} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '40px'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentSlide === index ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentSlide !== index) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentSlide !== index) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  }
                }}
              />
            ))}
          </div>

          {/* Mini Testimonials */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginTop: '60px'
          }}>
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="fade-in"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transitionDelay: `${index * 0.1}s`
                }}
                onClick={() => goToSlide(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--accent-gold)'
                  }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div>
                    <h5 style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '2px'
                    }}>
                      {testimonial.name}
                    </h5>
                    <p style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container .scale-in button:first-of-type,
          .container .scale-in button:nth-of-type(2) {
            display: none;
          }
          
          .container .scale-in > div:first-child {
            padding: 40px 24px !important;
          }
          
          .container .scale-in .quote-icon {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;