import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, MapPin, DollarSign, Users, CheckCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  duration: string;
  budget: string;
  teamSize: number;
  completionDate: string;
  features: string[];
  status: 'completed' | 'in-progress' | 'planning';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Luxury Waterfront Estate',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A stunning 6-bedroom waterfront estate featuring modern architecture, sustainable materials, and panoramic lake views.',
      location: 'Lake View Heights',
      duration: '18 months',
      budget: '$2.8M',
      teamSize: 25,
      completionDate: 'March 2024',
      features: ['Smart Home Technology', 'Solar Power System', 'Infinity Pool', 'Private Dock', 'Wine Cellar'],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern 15-story office building with LEED Gold certification and state-of-the-art amenities.',
      location: 'Downtown Business District',
      duration: '24 months',
      budget: '$45M',
      teamSize: 150,
      completionDate: 'June 2024',
      features: ['LEED Gold Certified', 'Rooftop Garden', 'Underground Parking', 'Conference Centers', 'Fitness Facility'],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Historic Home Renovation',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete restoration of a 1920s Victorian home while preserving original architectural details.',
      location: 'Heritage District',
      duration: '12 months',
      budget: '$850K',
      teamSize: 15,
      completionDate: 'September 2024',
      features: ['Heritage Preservation', 'Modern Kitchen', 'Updated Electrical', 'Restored Windows', 'Landscaping'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Eco-Friendly Townhomes',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sustainable townhome development featuring renewable energy and environmentally conscious design.',
      location: 'Green Valley',
      duration: '15 months',
      budget: '$3.2M',
      teamSize: 30,
      completionDate: 'December 2024',
      features: ['Solar Panels', 'Geothermal Heating', 'Rainwater Collection', 'Native Landscaping', 'EV Charging'],
      status: 'in-progress'
    },
    {
      id: 5,
      title: 'Shopping Center Expansion',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Major expansion of regional shopping center with new retail spaces and entertainment venues.',
      location: 'Suburban Mall District',
      duration: '20 months',
      budget: '$12M',
      teamSize: 80,
      completionDate: 'April 2025',
      features: ['Food Court', 'Cinema Complex', 'Retail Spaces', 'Parking Structure', 'Public Plaza'],
      status: 'in-progress'
    },
    {
      id: 6,
      title: 'Kitchen & Bath Remodel',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete transformation of master bathroom and kitchen with luxury finishes and modern amenities.',
      location: 'Maple Ridge',
      duration: '4 months',
      budget: '$180K',
      teamSize: 8,
      completionDate: 'February 2025',
      features: ['Marble Countertops', 'Heated Floors', 'Smart Appliances', 'Walk-in Shower', 'Custom Cabinetry'],
      status: 'planning'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'residential', label: 'Residential', count: projects.filter(p => p.category === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
    { id: 'renovation', label: 'Renovations', count: projects.filter(p => p.category === 'renovation').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'var(--dark-sage)';
      case 'in-progress':
        return 'var(--soft-blue)';
      case 'planning':
        return 'var(--accent-gold)';
      default:
        return 'var(--medium-gray)';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planning':
        return 'Planning';
      default:
        return 'Unknown';
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section"
      style={{
        background: 'var(--cream)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="section-title fade-in">
          <h2>Our Project Portfolio</h2>
          <p>Explore our diverse range of completed and ongoing construction projects, showcasing our expertise across residential, commercial, and renovation services.</p>
        </div>

        {/* Project Categories */}
        <div 
          className="fade-in"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '60px'
          }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              style={{
                padding: '12px 24px',
                border: activeFilter === category.id ? '2px solid var(--dark-sage)' : '2px solid var(--light-gray)',
                borderRadius: '50px',
                background: activeFilter === category.id ? 'var(--dark-sage)' : 'var(--white)',
                color: activeFilter === category.id ? 'var(--white)' : 'var(--charcoal)',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.borderColor = 'var(--dark-sage)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.borderColor = 'var(--light-gray)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {category.label}
              <span style={{
                background: activeFilter === category.id ? 'rgba(255,255,255,0.3)' : 'var(--light-gray)',
                color: activeFilter === category.id ? 'var(--white)' : 'var(--charcoal)',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '700'
              }}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="scale-in"
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'var(--white)',
                boxShadow: '0 10px 30px var(--shadow-light)',
                transition: 'all 0.4s ease',
                transitionDelay: `${index * 0.1}s`,
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 50px var(--shadow-medium)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px var(--shadow-light)';
              }}
            >
              {/* Project Image */}
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
                
                {/* Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: getStatusColor(project.status),
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
                  {getStatusLabel(project.status)}
                </div>

                {/* View Project Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '40px 20px 20px',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease'
                }}>
                  <button
                    style={{
                      background: 'var(--white)',
                      color: 'var(--charcoal)',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      margin: '0 auto'
                    }}
                  >
                    <ExternalLink size={16} />
                    View Project Details
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: 'var(--charcoal)'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  color: 'var(--medium-gray)',
                  lineHeight: '1.5',
                  marginBottom: '16px',
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>

                {/* Project Meta */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontSize: '0.85rem',
                  color: 'var(--medium-gray)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} />
                    {project.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
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
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: 'var(--white)',
              borderRadius: '20px',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ position: 'relative', height: '300px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px 20px 0 0'
                }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '32px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '24px'
              }}>
                <div>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '8px',
                    color: 'var(--charcoal)'
                  }}>
                    {selectedProject.title}
                  </h2>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: getStatusColor(selectedProject.status),
                    color: 'var(--white)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    <CheckCircle size={16} />
                    {getStatusLabel(selectedProject.status)}
                  </div>
                </div>
              </div>

              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: 'var(--medium-gray)',
                marginBottom: '32px'
              }}>
                {selectedProject.description}
              </p>

              {/* Project Details Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
                marginBottom: '32px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'var(--primary-sand)',
                  borderRadius: '12px'
                }}>
                  <MapPin size={20} style={{ color: 'var(--dark-sage)' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--medium-gray)' }}>Location</div>
                    <div style={{ fontWeight: '600' }}>{selectedProject.location}</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'var(--primary-blue)',
                  borderRadius: '12px'
                }}>
                  <Calendar size={20} style={{ color: 'var(--dark-sage)' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--medium-gray)' }}>Duration</div>
                    <div style={{ fontWeight: '600' }}>{selectedProject.duration}</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'var(--sage-green)',
                  borderRadius: '12px'
                }}>
                  <DollarSign size={20} style={{ color: 'var(--dark-sage)' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--medium-gray)' }}>Budget</div>
                    <div style={{ fontWeight: '600' }}>{selectedProject.budget}</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'var(--warm-gray)',
                  borderRadius: '12px'
                }}>
                  <Users size={20} style={{ color: 'var(--dark-sage)' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--medium-gray)' }}>Team Size</div>
                    <div style={{ fontWeight: '600' }}>{selectedProject.teamSize} professionals</div>
                  </div>
                </div>
              </div>

              {/* Project Features */}
              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: 'var(--charcoal)'
                }}>
                  Key Features
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px'
                }}>
                  {selectedProject.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 0'
                      }}
                    >
                      <CheckCircle size={16} style={{ color: 'var(--dark-sage)' }} />
                      <span style={{ fontWeight: '500' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scale-in:hover .project-overlay {
          transform: translateY(0) !important;
        }
        
        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;