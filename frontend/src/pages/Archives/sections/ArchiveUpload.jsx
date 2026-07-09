import Button from '../../../components/common/Button';

export default function ArchiveUpload() {
  return (
    <div className="glass-panel border border-glass-stroke p-panel-padding relative overflow-hidden flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nightvision-neon/40 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10">
        <span className="material-symbols-outlined text-nightvision-neon text-5xl mb-4">cloud_upload</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Ingest New Asset</h3>
        <p className="text-on-surface-variant text-body-md mb-6">Upload media files here to add to the digital portfolio.</p>
        <Button variant="action" className="px-8 py-3 w-auto mb-0 border bg-surface-container-highest hover:bg-nightvision-neon hover:text-void-black text-nightvision-neon">
          SELECT_SOURCE
        </Button>
      </div>
    </div>
  );
}
