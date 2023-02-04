import { useLocation } from 'react-router-dom';

/**
 * Pathname Hook
 */
export const usePathname = (): string => {
  const { pathname } = useLocation();
  return pathname;
};
