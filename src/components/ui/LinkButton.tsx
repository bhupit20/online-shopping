// components/LinkButton.tsx

import Link, { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "transparent";
  size?: "small" | "medium" | "large";
}

const baseStyles = "px-4 py-2 rounded-md transition duration-300";

const variantStyles = {
  outline: "border-2 border-black hover:bg-black hover:text-white",
  transparent: "bg-transparent",
};

const sizeStyles = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const LinkButton = ({
  href,
  children,
  className = "",
  variant = "outline",
  size = "medium",
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}  ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
