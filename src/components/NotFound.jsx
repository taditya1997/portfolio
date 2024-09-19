import ErrorBoundary from '@/components/ErrorBoundary';

export default function NotFound() {
  return <ErrorBoundary error="The page you're looking for doesn't exist." />;
}
