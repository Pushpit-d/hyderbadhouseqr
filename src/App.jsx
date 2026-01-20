function App() {
  return (
    <div style={styles.page}>
      {/* Dark Overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <div style={styles.content}>
        {/* Logo (no white circle) */}
        <img src="/logo.png" alt="Hyderbad House Logo" style={styles.logo} />

        {/* Restaurant Name */}
        <h1 style={styles.title}>Hyderbad House</h1>
        <p style={styles.subtitle}>Biryani Palace</p>

        {/* Buttons */}
        <a href="#" style={styles.primaryButton}>
          View Menu
        </a>

        <a
          href="https://g.page/r/CS3M8GDZ-_EHEBE/review"
          style={styles.primaryButton}>
          Give a Review
        </a>

        {/* Social Follow Text */}
        <p style={styles.followText}>Follow us on social media for updates</p>

        {/* Social Icons */}
        <div style={styles.socialRow}>
          <a
            href="https://www.instagram.com/hyderabad_house_omaha/"
            style={styles.socialButton}
            aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/hhomaha"
            style={styles.socialButton}
            aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" style={styles.socialButton} aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    backgroundImage: "url('/bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.7)", // darker background
  },

  content: {
    position: "relative",
    zIndex: 1,
    height: "100%",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
  },

  logo: {
    width: "80px",
    marginBottom: "14px",
    borderRadius: "15px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "1px",
    margin: 0,
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.9,
    marginTop: "6px",
    marginBottom: "26px",
  },

  primaryButton: {
    width: "100%",
    maxWidth: "320px",
    padding: "16px",
    marginBottom: "14px",
    backgroundColor: "#5aa305",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "35px",
    fontSize: "17px",
    fontWeight: "600",
  },

  followText: {
    fontSize: "14px",
    marginTop: "22px",
    marginBottom: "14px",
    opacity: 0.85,
  },

  socialRow: {
    display: "flex",
    gap: "20px",
  },

  socialButton: {
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    border: "2px solid #5aa305",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    color: "#fff",
    textDecoration: "none",
  },
};

export default App;
