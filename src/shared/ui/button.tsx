import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "default" | "danger";
}

export default function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex cursor-pointer items-center font-bold transition-colors",
        {
          "rounded-3xl bg-green-500 px-4 py-2 text-white hover:bg-green-700 active:bg-green-300 active:text-black":
            variant === "primary",
          "rounded-3xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 active:bg-blue-300 active:text-black":
            variant === "default",
          "rounded-3xl bg-red-500 px-4 py-2 text-white hover:bg-red-700 active:bg-red-300 active:text-black":
            variant === "danger",
        },
      )}
    >
      {children}
    </button>
  );
}
