import { HeaderImage } from "../images/headerImage";

type HeaderProps = {
  checkboxCount: number;
};

export const Header = ({checkboxCount}: HeaderProps) => {
  return (
    <header className="bg-slate-900 text-white p-2 flex items-center">
    <HeaderImage />
    <div className="text-left">
      <h1 className="text-2xl">TaskDo</h1>
      <p className="text-sm">{checkboxCount} tarefas pendentes</p>
    </div>
  </header>
  );
}