import AnalyticsCard from '../components/AnalyticsCard';
import useFetch from '../../../hooks/useFetch';
import { LoadingState, ErrorState, EmptyState } from '../../../components/common/StateDisplays';

export default function AnalyticsList() {
  const { data: articles, loading, error } = useFetch('intelligence/logs/');

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!articles || articles.length === 0) return <EmptyState message="NO LOGS FOUND" />;

  return (
    <div className="space-y-4">
      {articles.map(article => (
        <AnalyticsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
