export default function AnalyticsCard({ article }) {
  const isCyan = article.theme === 'terminal-cyan';
  const hoverBorderColor = isCyan ? 'hover:border-terminal-cyan' : 'hover:border-nightvision-neon';
  const hoverShadowColor = isCyan ? 'hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]' : 'hover:shadow-[0_0_15px_rgba(0,255,65,0.1)]';
  const textColor = isCyan ? 'text-terminal-cyan' : 'text-nightvision-neon';
  const borderColor = isCyan ? 'border-terminal-cyan/30' : 'border-nightvision-neon/30';
  const borderSolidColor = isCyan ? 'border-terminal-cyan' : 'border-nightvision-neon';

  return (
    <article className={`glass-panel group relative flex flex-col md:flex-row gap-6 p-1 transition-all duration-300 ${hoverBorderColor} ${hoverShadowColor}`}>
      <div className="w-full md:w-64 h-48 md:h-auto shrink-0 relative overflow-hidden bg-surface-container-highest flex items-center justify-center">
        {article.image ? (
          <img 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" 
            src={article.image} 
            alt={article.title}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-void-black to-surface-container-highest"></div>
            <span className="material-symbols-outlined text-nightvision-neon/20 text-[80px]">
              {article.icon}
            </span>
          </>
        )}
        <div className={`absolute top-2 left-2 px-2 py-1 bg-void-black/80 border ${borderSolidColor} font-label-sm text-[10px] ${textColor}`}>
          ID: {article.id}
        </div>
      </div>
      
      <div className="flex-grow p-5 md:p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className={`font-label-sm text-label-sm ${article.iconTheme ? `text-${article.iconTheme} bg-${article.theme}/10` : `${textColor} border ${borderColor}`} px-2 py-0.5 rounded-sm`}>
              SECTOR: {article.sector}
            </span>
          </div>
          <h3 className={`font-headline-md text-headline-md text-on-surface group-hover:${textColor} transition-colors mb-3`}>
            {article.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
            {article.description}
          </p>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-4 font-label-sm text-label-sm text-on-surface-variant">
            <span>{article.date}</span>
            <span className="w-1 h-1 bg-glass-stroke rounded-full"></span>
            <span>{article.readTime}</span>
          </div>
          <button className={`flex items-center gap-2 ${textColor} font-label-md text-label-md group-hover:translate-x-1 transition-transform`}>
            ACCESS_FILE <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </article>
  );
}
