import React from "react";

import { applyCommonPropsToChildren, cn } from "@/utils";

interface SwitchProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  className: string;
}

export function Switch({ className = "", children, ...props }: SwitchProps) {
  return (
    <section
      className={cn(className, "flex gap-1 items-center rounded p-0.5")}
      {...props}
    >
      {applyCommonPropsToChildren(children, { size: 20 })}
    </section>
  );
}
