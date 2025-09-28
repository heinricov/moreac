import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  address?: string;
}

export default function ContactPage({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
  address = "Jl. Raya No. 1, Jakarta",
}: ContactProps) {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Address: </span>
                  {address}
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-5">
            {/* Form */}
            <Card className="bg-accent shadow-none py-0">
              <CardContent className="p-6 md:p-8">
                <form>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        placeholder="First name"
                        id="firstName"
                        className="mt-2 bg-white h-10 shadow-none"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        placeholder="Last name"
                        id="lastName"
                        className="mt-2 bg-white h-10 shadow-none"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="mt-2 bg-white h-10 shadow-none"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Message"
                        className="mt-2 bg-white shadow-none"
                        rows={6}
                      />
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <Checkbox id="acceptTerms" className="bg-background" />
                      <Label htmlFor="acceptTerms" className="gap-0">
                        You agree to our
                        <Link href="#" className="underline ml-1">
                          terms and conditions
                        </Link>
                        <span>.</span>
                      </Label>
                    </div>
                  </div>
                  <Button className="mt-6 w-full" size="lg">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
