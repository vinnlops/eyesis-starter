import { nextThemeFamily, toggleTheme } from "@/core/themes";
import { Button } from "@/shared/components";

export function HeaderSection() {
  return (
    <div className="flex flex-col gap-6 justify-center h-screen">
      <div className="flex flex-col gap-1">
        <h1 className="text-primary shadow-text-1 tracking-widest text-6xl transition-all transition-slow ease-responsive">
          Eyesis Starter
        </h1>
        <p className="text-muted-400 transition-all transition-slow ease-responsive">
          Starter para projetos React
        </p>
      </div>
      <div className="flex flex-row gap-3 justify-center">
        <Button
          textVariant={"muted-900"}
          className="shadow-box-1"
          bgVariant={"ghost"}
          onClick={toggleTheme}
        >
          Alternar
        </Button>
        <Button
          textVariant={"background"}
          className="shadow-box-1"
          bgVariant={"secondary"}
          onClick={nextThemeFamily}
        >
          Próximo Tema
        </Button>
      </div>
    </div>
  );
}
