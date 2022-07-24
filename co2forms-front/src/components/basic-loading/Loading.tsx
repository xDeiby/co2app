import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  loading: boolean;
  textLoading?: string;
}

export default function Loading({
  children,
  loading,
  textLoading = "Cargando...",
}: Props) {
  return (
    <>
      {loading ? (
        <div className="min-h-screen | grid | place-items-center | w-full">
          <h1 className="font-bold | text-3xl">{textLoading}</h1>
        </div>
      ) : (
        children
      )}
    </>
  );
}
