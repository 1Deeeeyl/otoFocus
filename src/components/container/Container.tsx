type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`max-w-screen-xl min-h-screen mx-auto px-6 flex flex-col xl:px-0 py-16  ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
}
