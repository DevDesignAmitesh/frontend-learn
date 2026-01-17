export const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      {/* badge */}
      <div
        className="flex justify-center items-center gap-2 
      bg-[#EDF2F6] hover:bg-[#E6E9EE] transition-all duration-200
      p-2 rounded-full text-xs font-semibold border border-neutral-300 cursor-pointer"
      >
        <span>We want you to forget about taxes</span>
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
      </div>

      <h1 className="text-6xl mt-12 font-semibold text-center max-w-2xl text-neutral-900 mx-auto">
        Magically simplify accounting and taxes
      </h1>

      <p className="text-lg mt-6 text-neutral-600 text-center max-w-xl">
        Automated bookkeeping. Effortless tax filing. Financial clarity. <br />{" "}
        Set up in 10 mins. Back to building by 10:35am.
      </p>

      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          className="py-2 px-4 text-[13px] font-semibold rounded-md 
          bg-[#2679F3] hover:bg-[#2262C7] text-white 
          shadow-lg transition-all duration-150 cursor-pointer"
        >
          Get Started
        </button>
        <button
          className="py-2 px-4 text-[13px] font-semibold rounded-md bg-transparent
          text-neutral-800 hover:bg-gray-200 transition-all duration-150 cursor-pointer flex justify-center items-center gap-2"
        >
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

      <p className="text-xs mt-6 text-neutral-400 text-center">
        For US-based startups.
      </p>
    </div>
  );
};
