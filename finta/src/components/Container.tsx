export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative w-full max-w-5xl mx-auto h-full z-10">{children}</div>;
};
