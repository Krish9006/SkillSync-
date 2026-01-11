"use client";

const Card = ({
    children,
    className = '',
    hover = true,
    gradient = false,
    ...props
}) => {
    const baseStyles = "glass-card rounded-2xl p-6";
    const hoverStyles = hover ? "cursor-pointer" : "";
    const gradientStyles = gradient ? "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-brand-primary/5 before:to-brand-accent/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100" : "";

    return (
        <div
            className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
