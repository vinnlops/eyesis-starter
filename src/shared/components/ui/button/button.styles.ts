export const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 font-medium enabled:cursor-pointer",
  transition: "transition-all transition-normal ease-responsive will-change-transform",
  fullWidth: "w-full",
  spinner: "size-3.5 shrink-0 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none",
} as const;

export const bgVariants = {
  primary: "bg-primary enabled:hover:bg-primary/90 enabled:active:bg-primary/80",
  secondary: "bg-secondary enabled:hover:bg-secondary-90 enabled:active:secondary/80",
  ghost: "bg-transparent enabled:hover:bg-muted-100 enabled:active:bg-muted-200/70",
  danger: "bg-red-500 enabled:hover:bg-red-500/90 enabled:active:bg-red-600",
  outline: "border border-muted-200 bg-transparent enabled:hover:bg-muted-100 enabled:active:bg-muted-200/70",
  plain: "",
} as const;

export const textVariants = {
  "muted-100": "text-muted-100",
  "muted-900": "text-muted-900",
  "muted-500": "text-muted-500 enabled:hover:text-muted-800",
  "muted-700": "text-muted-700",
  primary: "text-primary",
  secondary: "text-secondary",
  background: "text-background",
  white: "text-white",
  plain: "",
} as const;

export const sizes = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
  icon: "size-10 p-0",
} as const;

export const roundeds = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
} as const;

export type ButtonBGVariant = keyof typeof bgVariants;
export type ButtonTextVariant = keyof typeof textVariants;
export type ButtonSize = keyof typeof sizes;
export type RoundedVariants = keyof typeof roundeds;

export const defaultTextVariants = {
  primary: "muted-100",
  secondary: "muted-900",
  ghost: "muted-500",
  danger: "white",
  outline: "muted-700",
  plain: "plain",
} as const satisfies Record<ButtonBGVariant, ButtonTextVariant>;

export const scaleAnimateStyle = "scale-100 hover:scale-105 active:scale-95"
