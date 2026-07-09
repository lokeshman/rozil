import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

/**
 * Custom hook for data fetching wrapped over React Query.
 * Handles caching, deduplication, and retries automatically.
 * 
 * @param {string} endpoint - API endpoint relative to base URL
 * @param {Array} dependencies - Additional dependencies for the query key
 * @returns {Object} { data, loading, error }
 */
export default function useFetch(endpoint, dependencies = [], options = {}) {
  const queryKey = endpoint ? [endpoint, ...dependencies] : null;

  const { data, isPending: loading, error } = useQuery({
    queryKey,
    queryFn: async ({ signal }) => {
      const response = await api.get(endpoint, {
        ...options,
        signal,
      });
      return response.data;
    },
    enabled: !!endpoint,
  });

  return {
    data,
    loading,
    error: error ? error.message || 'An error occurred while fetching data.' : null,
  };
}
