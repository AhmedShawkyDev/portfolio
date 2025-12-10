
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`flex flex-col justify-center mx-4 lg:mx-22 xl:mx-44 items-center mt-10 lg:mt-20 ${className}`}>
      {children}
    </div>
  )
}