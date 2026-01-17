interface LinksProps {
  label: string;
  href: string;
}

const links: Array<LinksProps> = [
  {
    label: "Founders",
    href: "#",
  },
  {
    label: "Guide",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Log in",
    href: "#",
  },
];

export const Header = () => {
  return (
    <header className="w-full py-3 flex justify-between">
      <img
        height={100}
        width={100}
        src="/logo.svg"
        className="object-cover object-center scale-[.65] cursor-pointer"
      />
      <div className="flex justify-center items-center gap-6">
        {links.map((item) => (
          <a
            className="text-neutral-700 hover:text-neutral-500 text-[13px] font-semibold"
            href={item.href}
          >
            {item.label}
          </a>
        ))}

        <button
          className="py-2 px-4 text-[13px] font-semibold rounded-md 
          bg-[#2679F3] hover:bg-[#2262C7] text-white 
          shadow-lg transition-all duration-150 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};
