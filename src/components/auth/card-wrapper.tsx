"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";

interface CardWrapperProps {
  title: string;
  children: React.ReactNode;
  headerLable: string;
  backButtonLable: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  title,
  children,
  headerLable,
  backButtonLable,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header title={title} label={headerLable} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLable}></BackButton>
      </CardFooter>
    </Card>
  );
};
