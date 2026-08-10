import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer — Mobile App Development</h4>
                <h5>Sheba Fintech Limited</h5>
              </div>
              <h3 style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}>2025 to Present</h3>
            </div>
            <p>
              Managing Flutter applications (Sheba XYZ, Sheba Manager, digiGO) serving
              500K+ users with 99.5% uptime. Optimizing CI/CD pipelines, integrating
              SDKs and RESTful APIs for card payment and KYC/eKYC flows. Managing
              backend with Docker, AWS, Firebase, and Kong.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile Application Developer</h4>
                <h5>Techzency · Dhaka</h5>
              </div>
              <h3 style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}>2024 to 2025</h3>
            </div>
            <p>
              Built Flutter-based cross-platform apps with real-time chat, payments, and
              social features, improving performance by 30% and engagement by 40%, and
              developed a blockchain system with wallet integration, transaction tracking,
              and Web3 smart contracts using MetaMask authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
