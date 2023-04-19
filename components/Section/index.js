export default function Section({ 
  children,
  align,
  onClick = () => {},
  border = true,
  flex = "none"
}) {
  return (
    <div className="px-4 lg:px-[22%] max-w bg-background-dark">
      <div className={`${flex ? 'flex' : 'flex-none'} px-[3%] py-4 lg:py-12 items-center gap-8 flex-col lg:flex-row lg:justify-${align}`}>
        {children}
      </div>
      {border && (<div className="lg:border-b-[1px] border-white"/>)}
    </div>
  );
}


