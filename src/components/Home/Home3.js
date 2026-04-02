import React from 'react'
import Adrino from '../../Assets/adrino.jpg'
import Gopal from '../../Assets/gopal.jpg'
import azizurrehman from '../../Assets/azizurrehman.jpg'
import craig from '../../Assets/craig.png'
import mariana from '../../Assets/mariana.png'
import leo from '../../Assets/leo.png'
import seun from '../../Assets/seun.png'
import omar from '../../Assets/omar.png'
// import idress from '../../Assets/idress.png'

const Avatar = ({ initials }) => (
  <div
    style={{
      width: '5rem',
      height: '5rem',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #e27815, #a84f08)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.6rem',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '1rem',
      border: '2px solid #374151',
      flexShrink: 0,
    }}
  >
    {initials}
  </div>
)

const testimonials = [
  {
    img: Gopal,
    quote:
      "Working with this Engineer was an absolute pleasure! They delivered an exceptional website in record time with excellent communication. Highly recommended!",
    name: 'Gopal Dutt',
    role: 'Founder at Alchemist',
  },
  {
    img: Adrino,
    quote:
      "Fast, efficient, and incredibly talented! Exceeded all my expectations with swift delivery and top-notch web development skills. Looking forward to the next project!",
    name: 'Adriano Meza',
    role: 'CEO at BEEQUEENCOIN',
  },
  {
    img: azizurrehman,
    quote:
      "Exceptional results at lightning speed! Top niche skills in web development and clear communication set them apart. A true gem in Tech!",
    name: 'Aziz-ur Rehman',
    role: 'Head of Digital D and I, Apps4free Ltd',
  },
  {
    img: craig, quote:
      "Jibran brought our HACKERverse platform to life with remarkable precision. His full-stack & DevOps expertise meant zero downtime deployments. A rare engineer who thinks like a founder!",
    name: 'Craig Ellrod',
    role: 'Founder at HACKERverse',
  },
  {
    img: mariana, quote:
      "From day one Jibran understood our vision for HACKERverse. He delivered a scalable, secure AWS architecture that handled our rapid growth effortlessly. Highly skilled!",
    name: 'Mariana Padilla',
    role: 'CEO of HACKERverse',
  },
  {
    img: leo, quote:
      "Jibran built our core platform at Plutio with speed and quality I rarely see. His GenAI integrations gave us a real competitive edge ,  full stack, DevOps, and AI all in one!",
    name: 'Leo',
    role: 'Founder at Plutio',
  },
  {
    img: seun, quote:
      "Jibran is the developer every startup dreams of. He delivered SalesGuard's backend ahead of schedule with clean code and solid security practices baked in from the start.",
    name: 'Seun',
    role: 'Founder at SalesGuard',
  },
  {
    img: omar, quote:
      "Jibran's Gen AI expertise was exactly what Ocorp AI needed. He seamlessly integrated LLM pipelines and handled the full DevOps lifecycle ,  from CI/CD to cloud infrastructure.",
    name: 'Omar Gonzalez',
    role: 'Founder at Ocorp AI',
  },
  {
    initials: 'I',
    quote:
      "Jibran transformed our vision at Zayna into a polished, production-ready product. His secure coding practices and modern approach gave us confidence from day one.",
    name: 'Idress',
    role: 'CEO at Zayna',
  },
]

const TestimonialCard = ({ t }) => (
  <div
    style={{
      width: '320px',
      flexShrink: 0,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(226,120,21,0.25)',
      borderRadius: '16px',
      padding: '1.8rem',
      margin: '0 12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
    }}
  >
    {t.img ? (
      <img
        alt={t.name}
        src={t.img}
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
          border: '2px solid #374151',
        }}
      />
    ) : (
      <Avatar initials={t.initials} />
    )}
    <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
      "{t.quote}"
    </p>
    <span
      style={{
        display: 'block',
        width: '40px',
        height: '3px',
        borderRadius: '2px',
        background: '#e27815',
        marginBottom: '0.8rem',
      }}
    />
    <h2 style={{ color: '#e27815', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>
      {t.name}
    </h2>
    <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>{t.role}</p>
  </div>
)

const Home3 = () => {
  const doubled = [...testimonials, ...testimonials]

  return (
    <>
      <section
        style={{
          background: '#0d0d1a',
          padding: '60px 0',
          overflow: 'hidden',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1
            style={{
              fontSize: '2.4rem',
              fontWeight: 700,
              color: '#e27815',
              letterSpacing: '0.05em',
            }}
          >
            Testimonials
          </h1>
          <p style={{ color: '#9ca3af', marginTop: '0.4rem' }}>
            What founders &amp; leaders say about working with me
          </p>
        </div>

        <div style={{ overflow: 'hidden', position: 'relative' }}>
          {/* Left fade */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '120px',
              background: 'linear-gradient(to right, #0d0d1a, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          {/* Right fade */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '120px',
              background: 'linear-gradient(to left, #0d0d1a, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'testimonialScroll 80s linear infinite',
              paddingBottom: '12px',
            }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home3