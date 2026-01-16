export const Navbar = () => {
  const navItems = [
    {
      label: "Founders",
    },
    {
      label: "Guide",
    },
    {
      label: "Pricing",
    },
    {
      label: "Log in",
    },
  ];

  return (
    <div className="navbar">
      <h1 className="logo">Finta</h1>
      <div className="nav-comp">
        {navItems.map((item) => (
          <a href="#" className="nav-items">
            {item.label}
          </a>
        ))}
        <button className="nav-btn">Get Started</button>
      </div>
    </div>
  );
};
