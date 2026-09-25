import {
  changeTheme,
  getThemeFamilies,
  themes,
  useIsDarkTheme,
} from "@/core/themes";
import { Button } from "@/shared/components";

export function ThemesSection() {
  return (
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
  );
}
