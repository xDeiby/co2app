import { ReactNode } from "react";

export default function ModalLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      className="grid | place-items-center | fixed | inset-0 | z-10"
    >
      {children}
    </div>
  );
}
