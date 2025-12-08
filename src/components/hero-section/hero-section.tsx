// "use client"

// import Image from "next/image";
// import Container from "../container";
// import hero from "@/src/assets/hero.png";
// import Link from "next/link";
// import { useLocale, useTranslations } from "next-intl";
// import { FaCloudDownloadAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const t = useTranslations("herosection");
//   const locale = useLocale();

//   return (
//     <Container className="lg:flex-row gap-5 justify-between w-full h-fit xl:h-screen lg:mt-0">
//       {/* Left Section */}
//       <div className="flex flex-col gap-6 lg:w-2/3 w-full">
//         {/* Name & Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-2xl xl:text-4xl text-foreground flex flex-wrap gap-4 font-semibold flex-col"
//         >
//           <div className="flex gap-2 items-center">
//             <span className="">{t("Name")}</span>
//             <span className="text-primary">{t("Ahmed")}</span>
//           </div>
//           {t("and")} <span className="text-primary">{t("developer")}</span>
//         </motion.div>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-xl text-primary-text font-medium lg:w-3/4 w-full"
//         >
//           {t("description")}
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex gap-4">
//           <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
//             <Link
//               href={`/${locale}/contacts`}
//               className="border px-4 py-2 border-primary w-fit hover:bg-primary text-foreground"
//             >
//               {t("contact")}
//             </Link>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
//             <a
//               className="border px-4 py-2 border-primary w-fit hover:bg-primary flex items-center gap-2 text-foreground"
//               target="_blank"
//               rel="noopener noreferrer"
//               download={true}
//               href="https://drive.google.com/file/d/1n-6YfCf1I5TKtAHNXBIzCNHgY-FpfNUh/view?usp=sharing"
//             >
//               {t("download")} <FaCloudDownloadAlt />
//             </a>
//           </motion.div>
//         </div>
//       </div>

//       {/* Right Section - Image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className="w-full lg:w-1/3 flex justify-center xl:justify-end"
//       >
//         <Link href={`/${locale}/about-me`}>
//           <Image src={hero} alt="Ahmed Shawky" width={400} height={400} />
//         </Link>
//       </motion.div>
//     </Container>
//   );
// }



import Image from "next/image";
import Container from "../container";
import hero from "@/src/assets/hero.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  const t = useTranslations("herosection");
  const locale = useLocale();

  return (
    <Container className="lg:flex-row gap-5 justify-between w-full h-fit xl:h-screen  lg:mt-0">
      <div className="flex flex-col gap-6 lg:w-2/3 w-full">
        <div className="text-2xl xl:text-4xl text-foreground  flex flex-wrap gap-4 font-semibold flex-col">
          <div className="flex gap-2">
            <span className="">{t("Name")}</span>
            <span className="text-primary"> {t("Ahmed")} </span></div>

          {t("and")}
          <span className="text-primary"> {t("developer")} </span>
        </div>
        <p className="text-xl text-primary-text font-medium lg:w-3/4 w-full">
          {t("description")}
        </p>
        <div className="flex gap-4">
          <Link
            href={`/${locale}/contacts`}
            className="border px-4 py-2 border-primary w-fit hover:bg-primary text-foreground">{t("contact")}</Link>

          <a
            className="border px-4 py-2 border-primary w-fit hover:bg-primary flex items-center gap-2 text-foreground"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
            href="https://drive.google.com/file/d/1n-6YfCf1I5TKtAHNXBIzCNHgY-FpfNUh/view?usp=sharing">{t("download")} <FaCloudDownloadAlt /></a>
        </div>
      </div>
      <Link
        href={`/${locale}/about-me`}
        className="w-full lg:w-1/3 flex justify-center xl:justify-end">
        <Image src={hero} alt="Ahmed Shawky" width={400} height={400} />
      </Link>
    </Container>
  )
}