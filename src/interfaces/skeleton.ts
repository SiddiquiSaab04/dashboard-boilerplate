import type { CSSProperties, ReactNode } from "react";

export type SkeletonVariant = "text" | "circular" | "rectangular" | "rounded";
export type SkeletonAnimation = "pulse" | "wave" | "none";

export interface SkeletonProps {
  className?: string;
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface SkeletonTextProps {
  lines?: number;
  className?: string;
  lineHeight?: string | number;
  lastLineWidth?: string | number;
  gap?: string | number;
  animation?: SkeletonAnimation;
}

export interface SkeletonAvatarProps {
  size?: "sm" | "md" | "lg" | "xl" | number;
  variant?: "circular" | "rounded";
  className?: string;
  animation?: SkeletonAnimation;
  withText?: boolean;
}

export interface SkeletonCardProps {
  className?: string;
  animation?: SkeletonAnimation;
  hasHeader?: boolean;
  hasMedia?: boolean;
  hasFooter?: boolean;
  lines?: number;
}

export interface SkeletonMetricCardProps {
  className?: string;
  animation?: SkeletonAnimation;
}

export interface SkeletonTableProps {
  rows?: number;
  columns?: number;
  className?: string;
  animation?: SkeletonAnimation;
  showHeader?: boolean;
}

export interface SkeletonFormProps {
  fields?: number;
  className?: string;
  animation?: SkeletonAnimation;
  columns?: 1 | 2;
}
