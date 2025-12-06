interface InputFieldProps {
  type: string;
  id: string;
  name: string;
  labelName: string;
}
export default function InputField({ type, id, name, labelName }: InputFieldProps) {
  return (
    <>
      <p className="flex flex-col justify-center items-start w-full gap-2">
        <label htmlFor={labelName}>{labelName}</label>
        <input type={type} id={id} name={name} required className="border w-full h-9 p-2" aria-required />
      </p>
      {/* <div className="relative w-full">
        <input
          type="text"
          id="name"
          name="name"
          placeholder=" "
          className="peer block w-full border border-primary-text bg-back text-white px-5 py-3 focus:outline-none"
        />

        <label
          htmlFor="name"
          className="
      absolute left-5 text-primary-text transition-all duration-200 pointer-events-none

      top-3
      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-gray-400

      peer-focus:-top-2.5
      peer-focus:text-primary
      peer-focus:text-sm

      peer-not-placeholder-shown:-top-2.5
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:text-primary

      peer-focus:bg-back
      peer-not-placeholder-shown:bg-back
      px-1
    "
        >
          Name
        </label>
      </div> */}

    </>
  );
}