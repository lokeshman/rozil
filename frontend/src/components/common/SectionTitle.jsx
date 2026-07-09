export default function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`font-headline-md text-headline-md text-nightvision-neon mb-6 border-b border-glass-stroke pb-2 ${className}`}>
      {children}
    </h2>
  );
}
