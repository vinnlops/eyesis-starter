"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  bgVariants,
  buttonStyles,
  defaultTextVariants,
  roundeds,
  scaleAnimateStyle,
  sizes,
  textVariants,
  type ButtonBGVariant,
  type ButtonSize,
  type ButtonTextVariant,
  type RoundedVariants,
} from "./button.styles";

export type {
  ButtonBGVariant,
  ButtonSize,
  ButtonTextVariant,
  RoundedVariants,
} from "./button.styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgVariant?: ButtonBGVariant | false;

  textVariant?: ButtonTextVariant | false;
  size?: ButtonSize | false;
  rounded?: RoundedVariants | false;
  transition?: boolean;
  fullWidth?: boolean;
  scaleAnimate?: boolean;

  unstyled?: boolean;
  loading?: boolean;
  loadingContent?: ReactNode;

  loadingIcon?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      type = "button",
      bgVariant = "primary",
      textVariant,
      size = "md",
      rounded = "md",
      transition = true,
      fullWidth = false,
      scaleAnimate = true,
      unstyled = false,
      loading = false,
      loadingContent,
      loadingIcon,
      startIcon,
      endIcon,
      disabled,
      className,
      children,
      "aria-busy": ariaBusy,
      ...props
    },
    ref,
  ) {
    const resolvedText =
      textVariant ??
      (bgVariant === false ? false : defaultTextVariants[bgVariant]);

    const spinner =
      loadingIcon !== undefined ? (
        loadingIcon
      ) : unstyled ? null : (
        <span aria-hidden="true" className={buttonStyles.spinner} />
      );

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading ? true : ariaBusy}
        className={
          unstyled
            ? className
            : twMerge(
                buttonStyles.base,
                bgVariant !== false && bgVariants[bgVariant],
                resolvedText !== false && textVariants[resolvedText],
                size !== false && sizes[size],
                rounded !== false && roundeds[rounded],
                transition && buttonStyles.transition,
                fullWidth && buttonStyles.fullWidth,
                scaleAnimate && scaleAnimateStyle,
                className,
              )
        }
      >
        {loading ? spinner : startIcon}
        {loading && loadingContent !== undefined ? loadingContent : children}
        {!loading && endIcon}
      </button>
    );
  },
);

Button.displayName = "Button";
