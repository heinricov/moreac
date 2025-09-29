"use client";
import {
  CheckCircle,
  Copy,
  Download,
  FileText,
  GitBranch,
  Play,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function UseProduct() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const steps = [
    {
      id: 1,
      title: "Download Template",
      description: "Download template yang sudah disediakan dalam format ZIP",
      icon: <Download className="size-6" />,
      details: [
        "Klik tombol download untuk mendapatkan file ZIP",
        "Extract file ZIP ke folder project Anda",
        "Pastikan semua file ter-extract dengan benar",
      ],
      code: "wget https://example.com/template.zip\nunzip template.zip\ncd template",
    },
    {
      id: 2,
      title: "Install Dependencies",
      description:
        "Install semua dependencies yang diperlukan untuk menjalankan project",
      icon: <Settings className="size-6" />,
      details: [
        "Buka terminal di folder project",
        "Jalankan perintah: npm install",
        "Tunggu hingga semua package ter-install",
      ],
      code: "npm install",
    },
    {
      id: 3,
      title: "Setup Environment",
      description: "Konfigurasi environment variables dan pengaturan project",
      icon: <FileText className="size-6" />,
      details: [
        "Copy file .env.example menjadi .env.local",
        "Isi environment variables sesuai kebutuhan",
        "Konfigurasi database jika diperlukan",
      ],
      code: "cp .env.example .env.local\n# Edit .env.local dengan konfigurasi Anda",
    },
    {
      id: 4,
      title: "Run Development Server",
      description: "Jalankan development server untuk melihat hasil",
      icon: <Play className="size-6" />,
      details: [
        "Jalankan perintah: npm run dev",
        "Buka browser dan akses http://localhost:3000",
        "Template siap digunakan dan dikustomisasi",
      ],
      code: "npm run dev",
    },
    {
      id: 5,
      title: "Customize & Deploy",
      description:
        "Kustomisasi template sesuai kebutuhan dan deploy ke production",
      icon: <GitBranch className="size-6" />,
      details: [
        "Edit komponen dan styling sesuai brand Anda",
        "Update konten dan data sesuai kebutuhan",
        "Deploy ke platform seperti Vercel, Netlify, atau hosting lainnya",
      ],
      code: "# Deploy ke Vercel\nnpx vercel\n\n# Atau deploy ke Netlify\ngit push origin main",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <CheckCircle className="size-3 sm:size-4" />
            Step-by-Step Guide
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent px-4">
            Cara Menggunakan Template
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Ikuti panduan lengkap ini untuk mengimplementasikan template dengan
            mudah dan efisien.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className="relative overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0 relative">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <div className="size-6 sm:size-7 md:size-8">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-background border-2 border-primary text-primary rounded-full text-xs sm:text-sm font-bold shadow-md">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6">
                <div className="ml-0 sm:ml-4 md:ml-8 lg:ml-22">
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                      Langkah-langkah Detail
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                            <CheckCircle className="size-4 sm:size-5 text-emerald-500" />
                          </div>
                          <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Code Snippet */}
                  <div className="bg-gradient-to-r from-muted/80 to-muted/60 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-border/50 shadow-inner">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground ml-2">
                          Terminal Commands
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(step.code, index)}
                        className="h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-200 self-start sm:self-auto"
                      >
                        {copiedIndex === index ? (
                          <>
                            <CheckCircle className="size-3 sm:size-4 mr-1 sm:mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="size-3 sm:size-4 mr-1 sm:mr-2" />
                            Copy Code
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="bg-background/50 rounded-md sm:rounded-lg p-3 sm:p-4 border border-border/30">
                      <pre className="text-xs sm:text-sm font-mono text-foreground whitespace-pre-wrap overflow-x-auto leading-relaxed">
                        <code className="text-foreground">{step.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Connection line to next step */}
              {index < steps.length - 1 && (
                <div className="absolute left-4 sm:left-6 md:left-8 top-20 sm:top-22 md:top-24 w-0.5 h-8 sm:h-10 md:h-12 bg-gradient-to-b from-primary/30 to-primary/10"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20 shadow-xl">
            <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Siap Memulai Implementasi?
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                  Template sudah siap digunakan. Ikuti langkah-langkah di atas
                  untuk mendapatkan hasil terbaik dan mulai membangun project
                  Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Download Template Sekarang
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    Lihat Dokumentasi
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
