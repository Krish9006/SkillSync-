"use client";

import { forwardRef } from 'react';

const Button = forwardRef(({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";

    const variants = {
        primary: "bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white shadow-2xl shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:scale-[1.02] border border-white/20 uppercase tracking-wide",
        secondary: "border-2 border-brand-primary/40 text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/20 focus:ring-brand-primary",
        ghost: "text-slate-300 hover:bg-white/10 hover:text-white focus:ring-white/20",
        outline: "border-2 border-white/10 text-white hover:bg-white/5 hover:border-white/30 focus:ring-white/20"
    };

    const sizes = {
        sm: "px-5 py-2.5 text-sm rounded-xl",
        md: "px-7 py-3.5 text-base rounded-2xl",
        lg: "px-10 py-5 text-lg rounded-2xl",
    };

    // Animated gradient overlay for primary button
    const gradientOverlay = variant === 'primary' ? (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    ) : null;

    return (
        <button
            ref={ref}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {gradientOverlay}
            <span className="relative z-10">{children}</span>
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
