import "./button.css"

export function CustomButton({children, variant="primary", onClick}) {
  return (
    <button 
      className={variant}
      onClick={onClick}
    >
      {children}
    </button>
  )
}