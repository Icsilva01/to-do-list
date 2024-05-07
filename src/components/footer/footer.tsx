import { GrGithub, GrLinkedin } from "react-icons/gr";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white p-2 text-center flex justify-center gap-2 items-center flex-col">
      <p>2024 © Desenvolvido por Icaro Silva | Projeto fictício sem fins comerciais.</p>
      <div className="flex gap-2">
      <a href="https://www.linkedin.com/in/icaroggsilva">
      <GrLinkedin />
      </a>
      <a href="https://github.com/Icsilva01">
      <GrGithub />
      </a>
      </div>
    </footer>
  );
}