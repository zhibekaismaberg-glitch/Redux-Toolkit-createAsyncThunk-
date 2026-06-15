import "./checkbox.css"

export function CustomCheckbox({checked, onChange}) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  )
}