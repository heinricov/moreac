"use client";
import {
  GitBranch,
  Lightbulb,
  Download,
  Star,
  Users,
  Clock,
  Shield,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Step1 from "./download/step-1";
import UseProduct from "./download/use-product";

export const DownloadProduct = () => {
  const features = [
    {
      icon: <Download className="size-5" />,
      label: "Easy Setup",
      value: "5 min",
    },
    { icon: <Star className="size-5" />, label: "Rating", value: "4.9/5" },
    { icon: <Users className="size-5" />, label: "Users", value: "10K+" },
    {
      icon: <Shield className="size-5" />,
      label: "Security",
      value: "Enterprise",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8 sm:space-y-12 md:space-y-16">
            <Step1 />
            <UseProduct />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 order-first lg:order-last">
            <div className="sticky top-4 sm:top-6 md:top-8 space-y-4 sm:space-y-6">
              {/* Template Info Card */}
              <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <Separator />

                  {/* Overview */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                      <Lightbulb className="size-3 sm:size-4 text-primary" />
                      Overview
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Template modern dan profesional yang siap digunakan untuk
                      membangun website dengan teknologi terdepan. Dilengkapi
                      dengan komponen UI yang lengkap dan dokumentasi yang
                      detail.
                    </p>
                  </div>

                  <Separator />

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        Next.js
                      </Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        React
                      </Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        TypeScript
                      </Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        Tailwind
                      </Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        shadcn/ui
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  {/* Download Section */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                      Ready to Start?
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      <Button className="w-full text-xs sm:text-sm" size="sm">
                        <Download className="size-3 sm:size-4 mr-2" />
                        Download Template
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full text-xs sm:text-sm"
                        size="sm"
                      >
                        <GitBranch className="size-3 sm:size-4 mr-2" />
                        View Documentation
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Support */}
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      Need help or have questions?
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs sm:text-sm"
                    >
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
