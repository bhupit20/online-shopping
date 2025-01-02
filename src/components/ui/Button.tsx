import { ButtonHTMLAttributes, ReactNode } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
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

const Button = ({
  children,
  className = "",
  variant = "outline",
  size = "medium",
  ...props
}: Button) => {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}  ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
