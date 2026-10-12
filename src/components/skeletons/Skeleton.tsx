import React from "react";
import type {
  SkeletonProps,
  SkeletonTextProps,
  SkeletonAvatarProps,
  SkeletonCardProps,
  SkeletonMetricCardProps,
  SkeletonTableProps,
  SkeletonFormProps,
} from "../../interfaces/skeleton";

/**
 * Base Skeleton Primitive
 * Provides customizable shapes, dimensions, and shimmer/pulse animations.
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  variant = "rounded",
  animation = "wave",
  width,
  height,
  style,
  children,
}) => {
  const variantStyles = {
    text: "rounded-md h-4 w-full",
    circular: "rounded-full aspect-square",
    rectangular: "rounded-none",
    rounded: "rounded-xl",
  }[variant];

  const animationStyles = {
    pulse: "animate-pulse",
    wave: "animate-shimmer",
    none: "",
  }[animation];

  const inlineStyles: React.CSSProperties = {
    ...(width !== undefined ? { width: typeof width === "number" ? `${width}px` : width } : {}),
    ...(height !== undefined ? { height: typeof height === "number" ? `${height}px` : height } : {}),
    ...style,
  };

  return (
    <div
      aria-hidden="true"
      className={`bg-slate-200/80 relative overflow-hidden transition-colors ${variantStyles} ${animationStyles} ${className}`}
      style={inlineStyles}
    >
      {children}
    </div>
  );
};

/**
 * SkeletonText
 * Multi-line paragraph placeholder with custom lines and a realistic shorter last line.
 */
export const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 3,
  className = "",
  lineHeight = 16,
  lastLineWidth = "65%",
  gap = 10,
  animation = "wave",
}) => {
  return (
    <div
      className={`flex flex-col w-full ${className}`}
      style={{ gap: typeof gap === "number" ? `${gap}px` : gap }}
    >
      {Array.from({ length: lines }).map((_, index) => {
        const isLastLine = index === lines - 1 && lines > 1;
        return (
          <Skeleton
            key={index}
            variant="text"
            animation={animation}
            height={lineHeight}
            width={isLastLine ? lastLineWidth : "100%"}
          />
        );
      })}
    </div>
  );
};

/**
 * SkeletonAvatar
 * Circular or rounded avatar placeholder, optionally with adjacent user details.
 */
export const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
  size = "md",
  variant = "circular",
  className = "",
  animation = "wave",
  withText = false,
}) => {
  const sizeMap: Record<string, number> = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
  };

  const dimension = typeof size === "number" ? size : sizeMap[size] || 40;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Skeleton
        variant={variant}
        animation={animation}
        width={dimension}
        height={dimension}
      />
      {withText && (
        <div className="flex flex-col gap-2 flex-1 min-w-[120px]">
          <Skeleton variant="text" animation={animation} width="70%" height={14} />
          <Skeleton variant="text" animation={animation} width="45%" height={11} />
        </div>
      )}
    </div>
  );
};

/**
 * SkeletonMetricCard
 * Optimized for dashboard KPI / Metric statistics cards (e.g. Sales, Users, Revenue).
 */
export const SkeletonMetricCard: React.FC<SkeletonMetricCardProps> = ({
  className = "",
  animation = "wave",
}) => {
  return (
    <div
      className={`p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center justify-between">
        <Skeleton variant="text" animation={animation} width="40%" height={14} />
        <Skeleton variant="rounded" animation={animation} width={36} height={36} className="rounded-xl" />
      </div>
      <div className="mt-4 mb-3">
        <Skeleton variant="text" animation={animation} width="60%" height={28} />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton variant="rounded" animation={animation} width={50} height={18} className="rounded-full" />
        <Skeleton variant="text" animation={animation} width="40%" height={12} />
      </div>
    </div>
  );
};

/**
 * SkeletonCard
 * Generic content card with optional header, media cover, text body, and footer.
 */
export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  className = "",
  animation = "wave",
  hasHeader = true,
  hasMedia = false,
  hasFooter = true,
  lines = 3,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-4 ${className}`}
    >
      {hasHeader && (
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <SkeletonAvatar size="sm" withText animation={animation} />
          <Skeleton variant="rounded" animation={animation} width={24} height={24} />
        </div>
      )}

      {hasMedia && (
        <Skeleton
          variant="rounded"
          animation={animation}
          height={160}
          className="w-full rounded-xl"
        />
      )}

      <SkeletonText lines={lines} animation={animation} />

      {hasFooter && (
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <Skeleton variant="text" animation={animation} width="25%" height={14} />
          <Skeleton variant="rounded" animation={animation} width={80} height={32} className="rounded-lg" />
        </div>
      )}
    </div>
  );
};

/**
 * SkeletonTable
 * Placeholder for data tables with responsive column headers and rows.
 */
export const SkeletonTable: React.FC<SkeletonTableProps> = ({
  rows = 5,
  columns = 4,
  className = "",
  animation = "wave",
  showHeader = true,
}) => {
  return (
    <div className={`w-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm ${className}`}>
      {showHeader && (
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-slate-100/70 border-b border-slate-200">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="col-span-12 sm:col-span-6 md:col-span-3 flex items-center"
            >
              <Skeleton
                variant="text"
                animation={animation}
                width={`${55 + (colIndex % 3) * 15}%`}
                height={14}
              />
            </div>
          ))}
        </div>
      )}

      <div className="divide-y divide-slate-100">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-12 gap-4 px-6 py-4 items-center"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="col-span-12 sm:col-span-6 md:col-span-3 flex items-center"
              >
                {colIndex === 0 ? (
                  <SkeletonAvatar size="sm" withText animation={animation} />
                ) : (
                  <Skeleton
                    variant="text"
                    animation={animation}
                    width={`${40 + ((rowIndex + colIndex) % 4) * 15}%`}
                    height={14}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * SkeletonForm
 * Placeholder for form controls, input fields, labels, and action buttons.
 */
export const SkeletonForm: React.FC<SkeletonFormProps> = ({
  fields = 4,
  className = "",
  animation = "wave",
  columns = 2,
}) => {
  const gridClass = columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "flex flex-col gap-5";

  return (
    <div className={`p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 ${className}`}>
      <div className={gridClass}>
        {Array.from({ length: fields }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Skeleton variant="text" animation={animation} width="30%" height={14} />
            <Skeleton variant="rounded" animation={animation} height={42} className="w-full rounded-xl" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
        <Skeleton variant="rounded" animation={animation} width={90} height={38} className="rounded-xl" />
        <Skeleton variant="rounded" animation={animation} width={110} height={38} className="rounded-xl" />
      </div>
    </div>
  );
};

export default Skeleton;
