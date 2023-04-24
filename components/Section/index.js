export default function Section({ 
  children,
  align,
  onClick = () => {},
  bigSpace = true,
  border = true,
  flex = "none"
}) {
  return (
    <section className="px-4 lg:px-[22%] max-w bg-background-dark lg:text-lg">
      <div className={`${flex ? 'flex' : 'flex-none'} ${bigSpace ? 'lg:py-12' : 'lg:py-8'} px-[3%] py-4 items-center gap-8 flex-col lg:flex-row lg:justify-${align}`}>
        {children}
      </div>
      {border && (<div className="lg:border-b-[1px] border-white"/>)}
    </section>
  );
}


