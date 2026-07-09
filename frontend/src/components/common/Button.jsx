export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = "transition-all active:scale-[0.98]";
  const variants = {
    primary: "border border-nightvision-neon px-3 py-1 bg-nightvision-neon/10 text-nightvision-neon active:bg-nightvision-neon active:text-void-black font-label-md",
    outline: "border border-glass-stroke px-3 py-1 text-nightvision-neon hover:border-nightvision-neon font-label-md",
    action: "w-full bg-nightvision-neon text-void-black font-label-md font-bold py-3 border-2 border-nightvision-neon",
  };
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
