import useFetch from '../../../hooks/useFetch';

export default function ArchivesHeader() {
  const { data } = useFetch('archives/header/');

  const header = data && data.length > 0 ? data[0] : {
    title: 'Assets & Portfolio',
    description: 'A centralized repository of technological deployments, cinematic operations, and infrastructural engineering projects executed under the Rozil Thapa mandate.',
    total_assets: '142',
    data_density: '8.4PB'
  };

  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{header.title}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">
          {header.description}
        </p>
      </div>
      <div className="flex gap-4">
        <div className="glass-panel px-6 py-4 border border-glass-stroke flex flex-col items-center">
          <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">TOTAL_ASSETS</span>
          <span className="font-headline-md text-headline-md text-nightvision-neon">{header.total_assets}</span>
        </div>
        <div className="glass-panel px-6 py-4 border border-glass-stroke flex flex-col items-center">
          <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">DATA_DENSITY</span>
          <span className="font-headline-md text-headline-md text-nightvision-neon">{header.data_density}</span>
        </div>
      </div>
    </div>
  );
}
