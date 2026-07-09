export default function StatusBadge({ children, theme = 'nightvision-neon', className = '' }) {
  const isCyan = theme === 'terminal-cyan';
  const isRed = theme === 'alert-red';
  
  let colors = 'text-nightvision-neon bg-nightvision-neon/10 border-nightvision-neon/30';
  if (isCyan) colors = 'text-terminal-cyan bg-terminal-cyan/10 border-terminal-cyan/30';
  if (isRed) colors = 'text-alert-red bg-alert-red/10 border-alert-red/30';

  return (
    <span className={`font-label-sm px-2 py-0.5 border ${colors} ${className}`}>
      {children}
    </span>
  );
}
