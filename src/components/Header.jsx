export default function Header() {
  return (
    <header className="relative px-5 sm:px-10 z-[1] bg-slate-50 shadow-md">
      <div className="flex items-center container mx-auto min-h-[60px]">
        <div className="line"></div>
        <div className="logo">
          <h1 className="text-2xl font-semibold">Chef Virtual</h1>
          <p className="mt-[-4px] text-sm">Gerador de Receita</p>
        </div>
        <div className="line"></div>
      </div>
    </header>
  );
}
