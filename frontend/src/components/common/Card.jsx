export default function Card({ children, className = '', withBrackets = false, ...props }) {
  return (
    <div className={`glass-panel ${className}`} {...props}>
      {withBrackets && (
        <>
          <div className="hud-bracket-tl"></div>
          <div className="hud-bracket-br"></div>
        </>
      )}
      {children}
    </div>
  );
}
