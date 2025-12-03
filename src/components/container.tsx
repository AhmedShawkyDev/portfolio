
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`flex flex-col justify-center mx-44 items-center ${className}`}>
      {children}
    </div>
  )
}