export const Hero = () => {
  return (
    <div className="hero">
      <span className="badge">
        We want you to forgot about taxes{" "}
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          />
        </svg>
      </span>

      <div className="hero-text">
        <h1>
          Magically simplify <br /> accounting and taxes
        </h1>
        <p>
          Automated bookkeeping. Effortless tax filing. Financial clarity.{" "}
          <br />
          Set up in 10 mins. Back to building by 1:30pm.
        </p>
      </div>
      <div className="hero-btn-con">
        <button className="hero-btn">Get Started</button>

        <button className="hero-btn-01">
          <span>Pricing</span>
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity=".5"
              strokeWidth="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
      </div>

      <p className="hero-tagline">For US-based startups.</p>

      <img
        className="hero-img"
        src="https://www.finta.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1023015%2F2880x1638%2F9ebda5ebab%2Fhero-ui-v6.png&w=3840&q=75"
        alt="hero-img"
      />
    </div>
  );
};
