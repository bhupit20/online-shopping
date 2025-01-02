import React from "react";
import { ROUTES_ENUM } from "@/enums/routes";
import LinkButton from "./LinkButton";

interface INotFoundProps {
  headerText?: string;
  linkButtonText?: string;
  redirectTo: ROUTES_ENUM;
}

const NotFound = ({
  headerText,
  linkButtonText,
  redirectTo,
}: INotFoundProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-10">{headerText}</h2>
      <LinkButton
        href={redirectTo}
        className="text-2xl flex items-center gap-2.5 hover:text-red transition-all"
        variant="outline"
        size="large"
      >
        {linkButtonText}
      </LinkButton>
    </div>
  );
};

export default NotFound;
