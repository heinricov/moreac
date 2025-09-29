import { Github, NodeJs, VsCode } from "../logo-tech";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Step1() {
  const tools = [
    {
      name: "Visual Studio Code",
      shortName: "VsCode",
      description:
        "Aplikasi IDE modern untuk mengedit kode dengan fitur lengkap dan ekstensi yang powerful.",
      icon: <VsCode className="size-10" />,
      downloadUrl: "https://code.visualstudio.com/",
      version: "Latest",
    },
    {
      name: "Node.js",
      shortName: "NodeJs",
      description:
        "Runtime JavaScript yang memungkinkan menjalankan JavaScript di server-side untuk aplikasi web.",
      icon: <NodeJs className="size-10" />,
      downloadUrl: "https://nodejs.org/",
      version: "LTS",
    },
    {
      name: "GitHub",
      shortName: "Github",
      description:
        "Platform untuk mengelola kode sumber, kolaborasi tim, dan version control dengan Git.",
      icon: <Github className="size-10" />,
      downloadUrl: "https://github.com/",
      version: "Free",
    },
  ];

  return (
    <section className="px-4 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Download className="size-3 sm:size-4" />
            Prerequisites
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Yang Harus Di Install
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Pastikan Anda telah menginstall tools berikut sebelum memulai
            implementasi template.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <Card
              key={tool.shortName}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="size-8 sm:size-10">{tool.icon}</div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-muted/50 text-muted-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                      {tool.version}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs sm:text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(tool.downloadUrl, "_blank")}
                  >
                    <ExternalLink className="size-3 sm:size-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
