import { useEffect, useState } from "react";

interface UseQueryReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  isError: boolean;
}

export function useQuery<T>(
  queryFn: (signal?: AbortSignal) => Promise<T>,
): UseQueryReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await queryFn(controller.signal);
        
        if (!controller.signal.aborted) {
          setData(res);
          setIsError(false);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [queryFn]);

  return {
    data,
    isLoading,
    error,
    isError,
  };
}
