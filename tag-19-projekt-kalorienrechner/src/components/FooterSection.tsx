

export default function FooterSection() {
    return (
      <footer>
        <img src="./src/img/Logo.png" alt="logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Process</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <div>
          <p>Back to Top</p>
          <button className="back-to-top">↑</button>
        </div>
      </footer>
    );
  }