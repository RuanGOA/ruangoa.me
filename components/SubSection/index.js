export default function SubSection({ title, children }) {
  return (
    <div className="text-white gap-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul>
        {children}
      </ul>
    </div>
  )
}
