import React from "react";

export function Title({ children }: React.PropsWithChildren) {
  return (
    <div className="prose mb-6 max-w-min mx-auto">
      <h2 className="relative text-info-content p-1 bg-info rounded shadow-inner pointer-events-none">
        {children}
      </h2>
    </div>
  );
}
