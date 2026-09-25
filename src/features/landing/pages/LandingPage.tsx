import { Button } from "@/shared/components";
import { HeaderSection } from "../components/sections/HeaderSection";
import { ThemesSection } from "../components/sections/ThemesSection";

function LandingPage() {
  return (
    <>
      <HeaderSection />

      <ThemesSection />

      <div className="flex flex-col items-center content-center gap-12 justify-center py-20">
        <div className="flex flex-col">
          <h2 className="text-muted-900 shadow-text-1 tracking-widest text-5xl transition-all transition-slow ease-responsive">
            Componentes
          </h2>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3 justify-center items-center">
              <h3 className="text-muted-900 shadow-text-1 tracking-widest text-4xl transition-all transition-slow ease-responsive">
                Botões
              </h3>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center">
              <Button
                rounded={"md"}
                className="shadow-box-1"
                bgVariant={"primary"}
              >
                Primary
              </Button>
              <Button
                rounded={"md"}
                className="shadow-box-1"
                bgVariant={"secondary"}
              >
                Secondary
              </Button>
              <Button
                rounded={"md"}
                className="shadow-box-1"
                bgVariant={"danger"}
              >
                danger
              </Button>
              <Button
                rounded={"md"}
                className="shadow-box-1"
                bgVariant={"outline"}
              >
                Outline
              </Button>
              <Button
                rounded={"md"}
                bgVariant={"ghost"}
              >
                Ghost
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
