const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-primary-800 text-white shadow-sm shadow-primary-900/10 hover:bg-primary-900 focus:ring-primary-500 disabled:bg-primary-300',
    secondary: 'bg-sand-100 text-dark-900 hover:bg-sand-200 focus:ring-sand-400 disabled:bg-sand-100',
    outline: 'border border-primary-800 bg-white text-primary-800 hover:bg-primary-50 focus:ring-primary-500 disabled:border-primary-300 disabled:text-primary-300',
    ghost: 'text-primary-800 hover:bg-primary-50 focus:ring-primary-500 disabled:text-primary-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300',
  }

  const sizes = {
    sm: 'px-3.5 py-2 text-sm leading-none',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  }

  const buttonClass = `
    ${baseStyles}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClass}
      {...props}
    >
      {loading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
