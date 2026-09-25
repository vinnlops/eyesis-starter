import {
  changeTheme,
  getThemeFamilies,
  nextThemeFamily,
  themes,
  toggleTheme,
  useIsDarkTheme,
} from "@/core/themes";
import { Button } from "@/shared/components";

function LandingPage() {
  return (
    <>
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
            rounded={"full"}
            textVariant={"muted-900"}
            className="shadow-box-1"
            bgVariant={"ghost"}
            onClick={toggleTheme}
          >
            Alternar
          </Button>
          <Button
            rounded={"full"}
            textVariant={"background"}
            className="shadow-box-1"
            bgVariant={"secondary"}
            onClick={nextThemeFamily}
          >
            Próximo Tema
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center content-center bg-primary gap-6 justify-center h-100 transition-backgrund transition-slow ease-responsive">
        <div className="flex flex-col">
          <h2 className="text-muted-100 shadow-text-1 tracking-widest text-5xl transition-all transition-slow ease-responsive">
            Temas dinâmicos
          </h2>
        </div>
        <div className="flex flex-row gap-3">
          {getThemeFamilies(useIsDarkTheme()).map((theme) => (
            <Button
              rounded={"full"}
              textVariant={"background"}
              className="shadow-box-1"
              style={{
                background: themes[theme].schema.primary,
              }}
              onClick={() => changeTheme(theme)}
            >
              <span className="capitalize">{themes[theme].family}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
