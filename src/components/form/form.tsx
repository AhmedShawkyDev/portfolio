// "use client";
// import { useState } from "react";

import InputField from "./input-field";

// export default function ContactForm() {
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // يمنع الصفحة من إعادة التحميل

//     const formData = new FormData(e.currentTarget);

//     const response = await fetch("https://formsubmit.co/ahmed.shawky.elnabawy@gmail.com", {
//       method: "POST",
//       body: formData,
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     if (response.ok) {
//       setSuccess(true);
//       e.currentTarget.reset();
//     } else {
//       alert("Something went wrong. Try again!");
//     }
//   };
//   console.log("success", success);

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//       <input type="text" name="name" required placeholder="Your Name" />
//       <input type="email" name="email" required placeholder="Your Email" />
//       <input type="text" name="title" required placeholder="Title" />
//       <textarea name="message" required placeholder="Message"></textarea>

//       <button type="submit" className="bg-primary text-white px-4 py-2">Submit</button>

//       {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
//     </form>
//   );
// }




export default function Form() {

  return (
    <>
      <form className="flex flex-col gap-4 w-full "
        action="https://formsubmit.co/takuxiso@maildim.com"
        method="POST">
        <InputField type="text" id="name" name="name" labelName="Name" />
        <InputField type="email" id="email" name="email" labelName="email" />
        <InputField type="text" id="title" name="title" labelName="title" />
        <input type="hidden" name="_captcha" value="false" />
        <p className="flex flex-col justify-center items-start w-full gap-2">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} required className="border w-full p-2 " placeholder="Message">
          </textarea>
        </p>

        <button
          type="submit"
          className="border px-4 py-2 border-primary w-fit hover:bg-primary text-foreground cursor-pointer">
          Submit</button>
      </form>
    </>
  )
}