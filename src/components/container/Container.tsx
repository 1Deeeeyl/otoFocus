type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-screen-xl min-h-screen mx-auto flex justify-center items-center${className || ""}`}>
      {children}
    </div>
  );
}
