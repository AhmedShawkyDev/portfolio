interface DotsProp {
  className?: string
}
export default function Dots({ className }: DotsProp) {
  return (
    <div className="flex flex-col items-center justify-center w-16 h-16  gap-2.5 ">
      <div className="grid grid-cols-5 gap-2.5">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <div key={index} className="flex flex-col gap-2.5">
              <span className={`w-1 h-1 bg-primary-text rounded-full ${className}`}></span>
              <span className={`w-1 h-1 bg-primary-text rounded-full ${className}`}></span>
              <span className={`w-1 h-1 bg-primary-text rounded-full ${className}`}></span>
              <span className={`w-1 h-1 bg-primary-text rounded-full ${className}`}></span>
              <span className={`w-1 h-1 bg-primary-text rounded-full ${className}`}></span>

            </div>
          )
        })}
      </div>
    </div>
  );
}