import Button from '../../../components/common/Button';

export default function AnalyticsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-glass-stroke pb-6 mb-8">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2 uppercase tracking-tight">
          Analytics Briefs
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Archived technical insights and operational guidelines.
        </p>
      </div>
      
      <div className="flex items-center gap-4 font-label-md text-label-md text-nightvision-neon">
        <span className="opacity-60">SORT:</span>
        <Button variant="primary">RECENCY</Button>
        <Button variant="outline">RISK_LEVEL</Button>
      </div>
    </div>
  );
}
