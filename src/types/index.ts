import { LazyExoticComponent, PropsWithChildren } from 'react';

/**
 * Props With Children (React 18)
 */
export type Children = PropsWithChildren;

/**
 * React Lazy Load - Code Splitting
 */
export type Lazy = LazyExoticComponent<() => JSX.Element>;
