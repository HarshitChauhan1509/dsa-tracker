const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} DSA Tracker</p>

        <div className="footer-links">
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;