import React from "react";

import { cn } from "@/utils";

interface EquipmentLabelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title: string;
}

export function EquipmentLabel({
  className,
  title,
  children,
}: EquipmentLabelProps) {
  return (
    <section
      className={cn("absolute left-1/2 -translate-x-2/4 top-12", className)}
    >
      <div className="prose mb-4 max-w-min mx-auto">
        <h2 className="text-info-content p-1 bg-info rounded shadow-inner pointer-events-none">
          {title}
        </h2>
        <div className="max-w-max mx-auto">{children}</div>
      </div>
    </section>
  );
}
