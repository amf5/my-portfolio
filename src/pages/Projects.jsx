import {
  ExternalLink,
  BotMessageSquare,
  Server,
  Sparkles,
  GraduationCap,
  Ticket
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Ticket Platform',
    icon: <Ticket size={48} />,
    tech: 'Spring Boot · PostgreSQL · Keycloak · JPA',
    description: 'Digital event ticket management platform with QR code validation and role-based access control',
    features: [
      'QR code ticket validation',
      'Role-based authentication with Keycloak',
      'Event and ticket management'
    ],
    github: 'https://github.com/amf5/TicketAPP'
  },

  {
    id: 2,
    title: 'Story AI',
    icon: <Sparkles size={48} />,
    tech: 'Spring Boot · FastAPI · Kafka · WebSocket',
    description: 'AI-powered platform that converts stories into animated cartoon videos',
    features: [
      'AI story-to-video generation',
      'Real-time progress updates',
      'Cloud media storage with Cloudinary'
    ],
    github: 'https://github.com/amf5/storyaiAPP'
  },

  {
    id: 3,
    title: 'Learning Platform',
    icon: <GraduationCap size={48} />,
    tech: 'Node.js · Express · PostgreSQL · Redis',
    description: 'Full-featured online learning platform with payments, chat, and AI integrations',
    features: [
      'Stripe payment integration',
      'Real-time course chat system',
      'AI-generated video descriptions'
    ],
    github: 'https://github.com/amf5/platform_learning'
  }
]

function Projects() {
  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        My Projects 🚀
      </h1>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {projects.map((project) => (
          <div key={project.id} className="glass-card" style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>

              <div style={{ color: 'white' }}>
                {project.icon}
              </div>

              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                  {project.title}
                </h2>

                <p style={{ color: '#ddd', marginBottom: '1rem' }}>
                  {project.tech}
                </p>

                <p style={{ marginBottom: '1rem' }}>
                  {project.description}
                </p>

                <h3>Features:</h3>
                <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'white',
                    color: '#667eea',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  <FaGithub size={18} /> GitHub
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'underline' }}>
          ← Back to Home
        </a>
      </div>
    </div>
  )
}

export default Projects