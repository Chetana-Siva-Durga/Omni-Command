import React from 'react';
import './App.css';
import img from "./img.jpg"; 
import  { useState, useEffect } from 'react';
import ommmm from "./ommmm.jpg"
import img1 from "./img1.jpg";
import me from "./me.jpg";
import venturePDF from "./assets/venture-journey.pdf";




const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ["home", "features", "about", "more", "myself", "contact"];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // close menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={img1} alt="OmniCommand Logo" />
      </div>

      <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
      </button>

      <ul className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec}`}
              className={activeSection === sec ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sec);
              }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};










const Features = () => {
  const featureList = [
    { title: "🔔Notification Optimizer", description: "AI filters and shows only what's important." },
    { title: "🎤Voice Command", description: "Use voice to mute, filter, or respond." },
    { title: "🔄Cross-App Integration", description: "Works across your favorite apps seamlessly." },
    { title: "🧠Learns Your Behavior", description: "Adapts to your preferences automatically." },
    { title: "🌐Multi-language Support", description: "Interact in your preferred language." },
    { title: "🔒Privacy First", description: "Your data stays secure and private." }
  ];

  return (
    <div className="features-section" id="features">
      <h2 className="features-heading">Key Features</h2>
      <div className="features-grid">
        {featureList.map((feature, index) => (
          <div className="feature-box" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div className="about-section" id="about">
    <h2>About OmniCommand</h2>
    <p className="subtitle">Revolutionizing how you interact with your smartphone through the power of voice</p>
    <div className="about-grid">
      <div className="mission-section">
        <h3>Our Mission</h3>
        <p>At OmniCommand, we're committed to empowering smartphone users with seamless voice control over all notifications, enhancing digital well-being and accessibility for everyone.</p>
        <h3>Problems We Solve</h3>
        <ul>
          <li>60% of users find app navigation inefficient</li>
          <li>40% feel frustrated by fragmented controls</li>
          <li>Manual navigation wastes time and frustrates professionals, the elderly</li>
        </ul>
      </div>
      <div className="info-cards">
        <div className="card">
          <h4>🎯 Target Audience</h4>
          <ul>
            <li>Tech-savvy adults</li>
            <li>Business professionals</li>
            <li>Elderly users</li>
            <li>Accessibility-focused users</li>
          </ul>
        </div>
        <div className="card">
          <h4>🧠 Technology</h4>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Natural Language Processing</li>
            <li>Voice Recognition</li>
            <li>Cloud Computing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// At top of file
// inside MoreInfo component
const handleDownload = async () => {
  try {
    const response = await fetch('/venture-journey.pdf');
    if (!response.ok) throw new Error('Network response was not ok');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'venture-journey.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Download failed:', err);
  }
};


const MoreInfo = () => (
  <section className="more-info" id="more">
    <div className="more-content">
      <div className="text-side">
        <h2>AI in Every Touch</h2>
        <p>OmniCommand simplifies the way you use your phone — speak, filter, and act instantly. All with an elegant, minimalist design.</p>

        {/* ✅ Download PDF Button */}
        <button onClick={handleDownload} className="download-btn">
  📄 Download PDF
</button>





      </div>

      <div className="image-side">
        <img src={img} alt="Omni usage" />
      </div>
    </div>
  </section>
);



const Myself = () => {
  return (
    <section className="myself-section" id="myself">
      <h2 className="section-title">Myself</h2>

      <div className="myself-content">
        {/* Left side: Contact info */}
        <div className="content-left">
          <p>
            Hi, I’m <strong>Y. Chetana Siva Durga</strong>, a Computer Science student at VIT-AP with a passion for solving real-world problems.</p>
            

          <div className="contact-box">
            <h3>Connect With Me</h3>
            <p><strong>Email:</strong> <a href="mailto:chetanasivadurga@gmail.com">chetanasivadurga@gmail.com</a></p>
            <p><strong>Phone:</strong> +91 9393045999</p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Chetana-Siva-Durga" target="_blank" rel="noopener noreferrer">
                Chetana-Siva-Durga
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://linkedin.com/in/chetana-siva-durga" target="_blank" rel="noopener noreferrer">
                chetana-siva-durga
              </a>
            </p>
          </div>
        </div>

        {/* Right side: Profile image */}
        <div className="content-right">
          <img
            src={me}
            alt="Y. Chetana"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
};







const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    // Send the form using fetch to Formspree
    const response = await fetch("https://formspree.io/f/myzjkwby", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>Got thoughts? If you're interested, drop us a message!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <div className="success-message">
          🎉 Thank you! Your message has been submitted successfully.
        </div>
      )}
    </section>
  );
};




const Footer = () => (
  <footer className="footer">
    © 2025 OmniCommand by Y. Chetana Siva Durga. All rights reserved.
  </footer>
);



const Omni = () => {
  return (
    <div>
      <Navbar />
      
      <div className="simple-hero" id="home">
        <div className="hero-text">
          <h1>OmniCommand</h1>
          <p>AI-powered voice control for smarter smartphone.</p>
          <p>Manage Apps effortlessly using your voice.</p>
        </div>
        <div className="hero-image">
          <img src={ommmm} alt="OmniCommand illustration" />
        </div>
      </div>

      <Features />
      <About />
      <MoreInfo />
      <Myself />
      <ContactSection />
      <Footer />
    </div>
  );
};




export default Omni;
