import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Users, 
  FileText, 
  BarChart, 
  LogOut, 
  Save, 
  Edit, 
  Eye,
  Phone,
  Mail,
  MapPin,
  Building,
  Shield,
  Key,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AdminPanelProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ setIsLoggedIn }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [flatEnquiries, setFlatEnquiries] = useState<any[]>([]);
  const [savedMessage, setSavedMessage] = useState('');

  const [companyInfo, setCompanyInfo] = useState({
    name: 'BuildMaster Construction',
    phone: '(555) 123-4567',
    email: 'info@buildmaster.com',
    address: '123 Construction Blvd, Building City, BC 12345',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 3:00 PM',
    description: 'Building excellence through quality craftsmanship and professional service since 1998. Your trusted partner for all construction needs.',
    emergencyPhone: '(555) 123-4999'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Load flat enquiries on component mount
  React.useEffect(() => {
    const loadEnquiries = () => {
      const enquiries = JSON.parse(localStorage.getItem('flatEnquiries') || '[]');
      setFlatEnquiries(enquiries.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
    };
    
    loadEnquiries();
    
    // Refresh enquiries every 30 seconds
    const interval = setInterval(loadEnquiries, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
  };

  const handleSave = () => {
    // Simulate saving data
    setSavedMessage('Changes saved successfully!');
    setIsEditing(false);
    
    setTimeout(() => {
      setSavedMessage('');
    }, 3000);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    
    if (passwordData.currentPassword !== 'buildmaster2024') {
      alert('Current password is incorrect');
      return;
    }

    // Simulate password change
    alert('Password changed successfully!');
    setShowPasswordModal(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const stats = [
    { title: 'Total Projects', value: '487', change: '+12 this month', icon: Building },
    { title: 'Active Clients', value: '156', change: '+8 this week', icon: Users },
    { title: 'Flat Enquiries', value: flatEnquiries.length.toString(), change: `+${flatEnquiries.filter(e => {
      const today = new Date();
      const enquiryDate = new Date(e.timestamp);
      return enquiryDate.toDateString() === today.toDateString();
    }).length} today`, icon: Mail },
    { title: 'Team Members', value: '89', change: '+3 this month', icon: Users }
  ];

  const recentActivities = [
    { action: 'New project inquiry', details: 'Residential construction - $350K budget', time: '2 hours ago' },
    { action: 'Project completed', details: 'Downtown Office Complex', time: '1 day ago' },
    { action: 'Team member added', details: 'John Smith - Project Manager', time: '3 days ago' },
    { action: 'Client meeting scheduled', details: 'Luxury Estate Project Review', time: '1 week ago' }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'company', label: 'Company Info', icon: Settings },
    { id: 'enquiries', label: 'Flat Enquiries', icon: Mail },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'users', label: 'Team', icon: Users }
  ];

  const renderDashboard = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              style={{
                background: 'var(--white)',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px var(--shadow-light)',
                border: '1px solid rgba(122, 155, 142, 0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <Icon size={24} style={{ color: 'var(--dark-sage)' }} />
                <span style={{
                  fontSize: '12px',
                  color: 'var(--medium-gray)',
                  background: 'var(--primary-sand)',
                  padding: '4px 8px',
                  borderRadius: '12px'
                }}>
                  {stat.change}
                </span>
              </div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--charcoal)',
                marginBottom: '4px'
              }}>
                {stat.value}
              </h3>
              <p style={{
                color: 'var(--medium-gray)',
                fontSize: '14px'
              }}>
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>

      <div style={{
        background: 'var(--white)',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 15px var(--shadow-light)'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: 'var(--charcoal)',
          marginBottom: '24px'
        }}>
          Recent Activities
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                background: 'var(--primary-sand)',
                borderRadius: '8px'
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--dark-sage)',
                borderRadius: '50%'
              }} />
              <div style={{ flex: 1 }}>
                <p style={{
                  fontWeight: '600',
                  color: 'var(--charcoal)',
                  marginBottom: '4px'
                }}>
                  {activity.action}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--medium-gray)'
                }}>
                  {activity.details}
                </p>
              </div>
              <span style={{
                fontSize: '12px',
                color: 'var(--medium-gray)'
              }}>
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCompanyInfo = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: 'var(--charcoal)'
        }}>
          Company Information
        </h3>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => setShowPasswordModal(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'var(--charcoal)',
              color: 'var(--white)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            <Key size={16} />
            Change Password
          </button>
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'var(--dark-sage)',
                color: 'var(--white)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              <Edit size={16} />
              Edit Info
            </button>
          ) : (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleSave}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: 'var(--dark-sage)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                <Save size={16} />
                Save Changes
              </button>
              
              <button
                onClick={() => setIsEditing(false)}
                style={{
                  padding: '10px 20px',
                  background: 'var(--medium-gray)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {savedMessage && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          background: '#d1fae5',
          color: '#065f46',
          borderRadius: '8px',
          marginBottom: '24px',
          border: '1px solid #a7f3d0'
        }}>
          <CheckCircle size={16} />
          {savedMessage}
        </div>
      )}

      <div style={{
        background: 'var(--white)',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 4px 15px var(--shadow-light)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '32px'
        }}>
          <div>
            <div className="form-group">
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
                fontWeight: '600',
                color: 'var(--charcoal)'
              }}>
                <Building size={16} />
                Company Name
              </label>
              <input
                type="text"
                value={companyInfo.name}
                onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: isEditing ? '2px solid var(--light-gray)' : '2px solid transparent',
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: isEditing ? 'var(--white)' : 'var(--primary-sand)',
                  color: 'var(--charcoal)'
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
                <Phone size={16} />
                Phone Number
              </label>
              <input
                type="text"
                value={companyInfo.phone}
                onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: isEditing ? '2px solid var(--light-gray)' : '2px solid transparent',
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: isEditing ? 'var(--white)' : 'var(--primary-sand)',
                  color: 'var(--charcoal)'
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
                Email Address
              </label>
              <input
                type="email"
                value={companyInfo.email}
                onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: isEditing ? '2px solid var(--light-gray)' : '2px solid transparent',
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: isEditing ? 'var(--white)' : 'var(--primary-sand)',
                  color: 'var(--charcoal)'
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
                <Phone size={16} />
                Emergency Phone
              </label>
              <input
                type="text"
                value={companyInfo.emergencyPhone}
                onChange={(e) => setCompanyInfo({ ...companyInfo, emergencyPhone: e.target.value })}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: isEditing ? '2px solid var(--light-gray)' : '2px solid transparent',
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: isEditing ? 'var(--white)' : 'var(--primary-sand)',
                  color: 'var(--charcoal)'
                }}
              />
            </div>
          </div>

          <div>
            <div className="form-group">
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
                fontWeight: '600',
                color: 'var(--charcoal)'
              }}>
                <MapPin size={16} />
                Address
              </label>
              <textarea
                value={companyInfo.address}
                onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
                disabled={!isEditing}
                rows={3}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: isEditing ? '2px solid var(--light-gray)' : '2px solid transparent',
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: isEditing ? 'var(--white)' : 'var(--primary-sand)',
                  color: 'var(--charcoal)',
                  resize: 'vertical'
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
                Business Hours
              </label>
              <input
                type="text"
                value={companyInfo.hours}
                onChange={(e) => setCompanyInfo({ ...companyInfo, hours: e.target.value })}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: isEditing ? '2px solid var(--light-gray)' : '2px solid transparent',
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: isEditing ? 'var(--white)' : 'var(--primary-sand)',
                  color: 'var(--charcoal)'
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
                Company Description
              </label>
              <textarea
                value={companyInfo.description}
                onChange={(e) => setCompanyInfo({ ...companyInfo, description: e.target.value })}
                disabled={!isEditing}
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: isEditing ? '2px solid var(--light-gray)' : '2px solid transparent',
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: isEditing ? 'var(--white)' : 'var(--primary-sand)',
                  color: 'var(--charcoal)',
                  resize: 'vertical'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEnquiries = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--charcoal)'
          }}>
            Flat Enquiries
          </h3>
          <p style={{
            color: 'var(--medium-gray)',
            fontSize: '14px'
          }}>
            Manage customer enquiries for available flats
          </p>
        </div>
        
        <div style={{
          background: 'var(--primary-sand)',
          padding: '12px 20px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Mail size={20} style={{ color: 'var(--dark-sage)' }} />
          <span style={{ fontWeight: '600', color: 'var(--charcoal)' }}>
            {flatEnquiries.length} Total Enquiries
          </span>
        </div>
      </div>

      {flatEnquiries.length === 0 ? (
        <div style={{
          background: 'var(--white)',
          borderRadius: '12px',
          padding: '60px 40px',
          textAlign: 'center',
          boxShadow: '0 4px 15px var(--shadow-light)'
        }}>
          <Mail size={48} style={{ color: 'var(--medium-gray)', marginBottom: '16px' }} />
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--charcoal)',
            marginBottom: '8px'
          }}>
            No Enquiries Yet
          </h3>
          <p style={{ color: 'var(--medium-gray)' }}>
            Customer enquiries will appear here when they submit the flat enquiry form.
          </p>
        </div>
      ) : (
        <div style={{
          background: 'var(--white)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 15px var(--shadow-light)',
          overflowX: 'auto'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{
                borderBottom: '2px solid var(--light-gray)'
              }}>
                <th style={{
                  padding: '16px 12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--charcoal)',
                  fontSize: '14px'
                }}>
                  Customer
                </th>
                <th style={{
                  padding: '16px 12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--charcoal)',
                  fontSize: '14px'
                }}>
                  Flat Details
                </th>
                <th style={{
                  padding: '16px 12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--charcoal)',
                  fontSize: '14px'
                }}>
                  Contact
                </th>
                <th style={{
                  padding: '16px 12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--charcoal)',
                  fontSize: '14px'
                }}>
                  Date
                </th>
                <th style={{
                  padding: '16px 12px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: 'var(--charcoal)',
                  fontSize: '14px'
                }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {flatEnquiries.map((enquiry, index) => (
                <tr key={enquiry.id} style={{
                  borderBottom: '1px solid var(--light-gray)',
                  transition: 'background 0.2s ease'
                }}>
                  <td style={{ padding: '16px 12px' }}>
                    <div>
                      <div style={{
                        fontWeight: '600',
                        color: 'var(--charcoal)',
                        marginBottom: '4px'
                      }}>
                        {enquiry.name}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: 'var(--medium-gray)'
                      }}>
                        {enquiry.email}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <div>
                      <div style={{
                        fontWeight: '600',
                        color: 'var(--charcoal)',
                        marginBottom: '4px'
                      }}>
                        {enquiry.flatTitle}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: 'var(--medium-gray)'
                      }}>
                        {enquiry.flatPrice} • {enquiry.flatLocation}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <div style={{
                      fontSize: '13px',
                      color: 'var(--medium-gray)'
                    }}>
                      {enquiry.phone}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--dark-sage)',
                      textTransform: 'capitalize'
                    }}>
                      Prefers: {enquiry.preferredContact}
                    </div>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <div style={{
                      fontSize: '13px',
                      color: 'var(--medium-gray)'
                    }}>
                      {new Date(enquiry.timestamp).toLocaleDateString()}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--medium-gray)'
                    }}>
                      {new Date(enquiry.timestamp).toLocaleTimeString()}
                    </div>
                  </td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center'
                    }}>
                      <a
                        href={`mailto:${enquiry.email}?subject=Regarding your enquiry for ${enquiry.flatTitle}&body=Dear ${enquiry.name},%0D%0A%0D%0AThank you for your enquiry about ${enquiry.flatTitle} (${enquiry.flatPrice}) at ${enquiry.flatLocation}.%0D%0A%0D%0AWe would be happy to assist you further.%0D%0A%0D%0ABest regards,%0D%0ABuildMaster Construction Team`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '32px',
                          height: '32px',
                          background: 'var(--dark-sage)',
                          color: 'var(--white)',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        title="Send Email"
                      >
                        <Mail size={14} />
                      </a>
                      <a
                        href={`tel:${enquiry.phone}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '32px',
                          height: '32px',
                          background: 'var(--soft-blue)',
                          color: 'var(--white)',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        title="Call Customer"
                      >
                        <Phone size={14} />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'company':
        return renderCompanyInfo();
      case 'enquiries':
        return renderEnquiries();
      case 'projects':
        return (
          <div style={{
            background: 'var(--white)',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 4px 15px var(--shadow-light)'
          }}>
            <FileText size={48} style={{ color: 'var(--medium-gray)', marginBottom: '16px' }} />
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--charcoal)',
              marginBottom: '8px'
            }}>
              Project Management
            </h3>
            <p style={{ color: 'var(--medium-gray)' }}>
              Project management features will be available in the next update.
            </p>
          </div>
        );
      case 'users':
        return (
          <div style={{
            background: 'var(--white)',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 4px 15px var(--shadow-light)'
          }}>
            <Users size={48} style={{ color: 'var(--medium-gray)', marginBottom: '16px' }} />
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--charcoal)',
              marginBottom: '8px'
            }}>
              Team Management
            </h3>
            <p style={{ color: 'var(--medium-gray)' }}>
              Team management features will be available in the next update.
            </p>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--cream)',
      display: 'flex'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '280px',
        background: 'var(--white)',
        boxShadow: '4px 0 15px var(--shadow-light)',
        padding: '24px 0',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          marginBottom: '40px'
        }}>
          <Building size={32} style={{ color: 'var(--dark-sage)', marginRight: '12px' }} />
          <span style={{
            fontSize: '1.4rem',
            fontWeight: '700',
            color: 'var(--charcoal)'
          }}>
            Admin Panel
          </span>
        </div>

        {/* Admin Info */}
        <div style={{
          padding: '16px 24px',
          marginBottom: '24px',
          background: 'var(--primary-sand)',
          margin: '0 24px',
          borderRadius: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <Shield size={20} style={{ color: 'var(--dark-sage)' }} />
            <span style={{
              fontWeight: '600',
              color: 'var(--charcoal)'
            }}>
              Administrator
            </span>
          </div>
          <p style={{
            fontSize: '14px',
            color: 'var(--medium-gray)',
            margin: 0
          }}>
            admin@buildmaster.com
          </p>
        </div>

        {/* Navigation */}
        <nav>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 24px',
                  background: activeTab === tab.id ? 'var(--primary-sand)' : 'transparent',
                  border: 'none',
                  borderRight: activeTab === tab.id ? '3px solid var(--dark-sage)' : '3px solid transparent',
                  color: activeTab === tab.id ? 'var(--dark-sage)' : 'var(--medium-gray)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: activeTab === tab.id ? '600' : '500',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = 'var(--light-gray)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '24px',
          right: '24px'
        }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              background: 'var(--charcoal)',
              color: 'var(--white)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1a252f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--charcoal)';
            }}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '280px',
        flex: 1,
        padding: '24px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          background: 'var(--white)',
          padding: '20px 32px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px var(--shadow-light)'
        }}>
          <div>
            <h1 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: 'var(--charcoal)',
              marginBottom: '4px'
            }}>
              {tabs.find(tab => tab.id === activeTab)?.label || 'Dashboard'}
            </h1>
            <p style={{
              color: 'var(--medium-gray)',
              fontSize: '14px'
            }}>
              Manage your construction company website
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'var(--primary-sand)',
                color: 'var(--charcoal)',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              <Eye size={16} />
              View Website
            </a>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'var(--white)',
            borderRadius: '12px',
            padding: '32px',
            width: '100%',
            maxWidth: '500px',
            margin: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <Key size={24} style={{ color: 'var(--dark-sage)' }} />
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--charcoal)'
              }}>
                Change Password
              </h3>
            </div>

            <form onSubmit={handlePasswordChange}>
              <div className="form-group">
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: 'var(--charcoal)'
                }}>
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid var(--light-gray)',
                    borderRadius: '8px',
                    fontSize: '16px'
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
                  New Password
                </label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid var(--light-gray)',
                    borderRadius: '8px',
                    fontSize: '16px'
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
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid var(--light-gray)',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end'
              }}>
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  style={{
                    padding: '12px 24px',
                    background: 'var(--medium-gray)',
                    color: 'var(--white)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  style={{
                    padding: '12px 24px',
                    background: 'var(--dark-sage)',
                    color: 'var(--white)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;