import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDatabase,
  FaDocker,
  FaNodeJs
} from 'react-icons/fa'
import { SiSpringboot, SiPostgresql } from 'react-icons/si'
import profilePic from '../assets/511189885_122152698842590374_2245303771976655517_n.jpg'

function Home() {
  return (
    <div className="container">
      <div className="glass-card fade-in">
        
        {/* صورة البروفايل مع glow */}
        <div style={{ marginBottom: '2rem', position: 'relative', display: 'inline-block' }}>
          <div style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
            opacity: 0.7,
            filter: 'blur(15px)',
            zIndex: 0
          }}></div>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              border: '3px solid rgba(255,255,255,0.2)',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1,
              transition: 'all 0.3s'
            }}
            className="social-icon"
          />
        </div>

        {/* الاسم مع تدرج لوني */}
        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Ahmed Waleed
        </h1>

        {/* العنوان مع خط تحتي */}
        <div style={{ marginBottom: '1rem' }}>
          <span style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            padding: '0.3rem 1.2rem',
            borderRadius: '40px',
            fontSize: '0.9rem',
            fontWeight: '500',
            display: 'inline-block'
          }}>
            Backend Developer
          </span>
        </div>

        {/* الوصف */}
        <p style={{ fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto 1.5rem', opacity: 0.85, lineHeight: '1.6' }}>
          Building scalable, high-performance APIs with modern backend technologies
        </p>

        {/* المكان */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', opacity: 0.7 }}>
          <FaMapMarkerAlt size={18} />
          <span>Alexandria, Egypt</span>
        </div>

        {/* سوشال ميديا */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://github.com/amf5" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'white' }}>
            <FaGithub size={26} />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-khamis-014b52282/" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'white' }}>
            <FaLinkedin size={26} />
          </a>
          <a href="mailto:ahmedwalidamin648@gmail.com" className="social-icon" style={{ color: 'white' }}>
            <FaEnvelope size={26} />
          </a>
        </div>

        {/* زر المشاريع */}
        <div style={{ marginBottom: '2.5rem' }}>
          <a href="/projects" className="btn-primary">
            Explore My Work → 
          </a>
        </div>

        {/* كروت المهارات */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          <div className="skill-card">
            <SiSpringboot size={36} style={{ marginBottom: '1rem', color: '#6DB33F' }} />
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Backend</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Spring Boot, Node.js, Express</p>
          </div>

          <div className="skill-card">
            <SiPostgresql size={36} style={{ marginBottom: '1rem', color: '#336791' }} />
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Databases</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>PostgreSQL, MySQL, MongoDB, Redis</p>
          </div>

          <div className="skill-card">
            <FaDocker size={36} style={{ marginBottom: '1rem', color: '#2496ED' }} />
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>DevOps & Tools</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Docker, Git, JWT, Kafka, WebSocket</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home