import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, Shield } from 'lucide-react';

interface AdminLoginProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ setIsLoggedIn }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      // Default credentials for demo
      if (credentials.username === 'admin' && credentials.password === 'buildmaster2024') {
        localStorage.setItem('adminToken', 'construction-admin-2024');
        setIsLoggedIn(true);
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--sage-green) 0%, var(--primary-blue) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div style={{
        background: 'var(--white)',
        borderRadius: '20px',
        padding: '50px 40px',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15)',
        width: '100%',
        maxWidth: '450px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: `linear-gradient(135deg, var(--dark-sage), var(--soft-blue))`,
            borderRadius: '20px',
            marginBottom: '24px',
            boxShadow: '0 10px 30px rgba(122, 155, 142, 0.3)'
          }}>
            <Shield size={40} style={{ color: 'var(--white)' }} />
          </div>
          
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--charcoal)',
            marginBottom: '8px'
          }}>
            Admin Login
          </h1>
          
          <p style={{
            color: 'var(--medium-gray)',
            fontSize: '1rem'
          }}>
            Access the BuildMaster admin panel
          </p>
        </div>

        {/* Demo Credentials Info */}
        <div style={{
          background: 'var(--primary-sand)',
          padding: '16px',
          borderRadius: '12px',
          marginBottom: '24px',
          border: '1px solid rgba(122, 155, 142, 0.2)'
        }}>
          <p style={{
            fontSize: '14px',
            color: 'var(--charcoal)',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            Demo Credentials:
          </p>
          <p style={{
            fontSize: '13px',
            color: 'var(--medium-gray)',
            margin: 0
          }}>
            Username: admin <br />
            Password: buildmaster2024
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#fee2e2',
            color: '#dc2626',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '24px',
            fontSize: '14px',
            border: '1px solid #fecaca'
          }}>
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
              fontWeight: '600',
              color: 'var(--charcoal)'
            }}>
              <User size={16} />
              Username
            </label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '2px solid var(--light-gray)',
                borderRadius: '8px',
                fontSize: '16px',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--dark-sage)';
                e.target.style.boxShadow = '0 0 0 4px rgba(122, 155, 142, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--light-gray)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
              fontWeight: '600',
              color: 'var(--charcoal)'
            }}>
              <Lock size={16} />
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '14px 50px 14px 16px',
                  border: '2px solid var(--light-gray)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--dark-sage)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(122, 155, 142, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--light-gray)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--medium-gray)',
                  padding: '4px'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '16px',
              background: isLoading ? 'var(--medium-gray)' : `linear-gradient(135deg, var(--dark-sage), var(--soft-blue))`,
              color: 'var(--white)',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(122, 155, 142, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            {isLoading ? (
              <>
                <div className="loading" />
                Logging in...
              </>
            ) : (
              <>
                <Lock size={18} />
                Login to Admin Panel
              </>
            )}
          </button>
        </form>

        {/* Back to Website */}
        <div style={{
          textAlign: 'center',
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid var(--light-gray)'
        }}>
          <a
            href="/"
            style={{
              color: 'var(--medium-gray)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--dark-sage)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medium-gray)';
            }}
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;