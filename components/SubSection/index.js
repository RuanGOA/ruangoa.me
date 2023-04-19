export default function SubSection({ title, children }) {
  return (
    <div className="text-white text-lg gap-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul>
        {children}
      </ul>
    </div>
  )
}
