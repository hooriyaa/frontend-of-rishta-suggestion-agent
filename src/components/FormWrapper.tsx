// // components/FormWrapper.tsx
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import gsap from "gsap";
// import Image from "next/image";
// import auntieImage from "../../public/auntie.jpeg";
// import { Loader2 } from "lucide-react";

// export default function FormWrapper({ children }: { children: React.ReactNode }) {
//   const cardRef = useRef(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 4000);

//     return () => clearTimeout(timeout);
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       gsap.fromTo(
//         cardRef.current,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
//       );
//     }
//   }, [loading]);

//   const bgGradient = "bg-gradient-to-br from-pink-100 via-white to-blue-100";

//   if (loading) {
//     return (
//       <main className={`min-h-screen ${bgGradient} flex items-center justify-center p-4`}>
//         <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
//           <Image
//             src={auntieImage}
//             alt="Rishtey Wali Auntie"
//             width={300}
//             height={300}
//             className="rounded-full shadow-md border border-rose-300"
//           />
//           <Loader2 className="animate-spin text-rose-600 w-8 h-8" />
//           <p className="text-3xl font-semibold text-rose-700">Loading Auntie’s magic... 💫</p>
//           <p className="text-base text-rose-500 max-w-md px-4">
//             "Mashallah se Auntie ne hazaron rishtay milway hain – har ek me pyar, samajhdaari aur compatibility ka khayal rakha hai. 💕"
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className={`min-h-screen ${bgGradient} flex items-center justify-center p-4`}>
//       <Card ref={cardRef} className="w-full max-w-xl shadow-2xl rounded-2xl border border-pink-300">
//         <CardContent className="p-8">
//           <div className="flex flex-col items-center space-y-4">
//             <Image
//               src={auntieImage}
//               alt="Rishtey Wali Auntie"
//               width={160}
//               height={160}
//               className="rounded-full shadow-md border border-rose-300 object-cover"
//             />
//             {children}
//           </div>
//         </CardContent>
//       </Card>
//     </main>
//   );
// }

// components/FormWrapper.tsx
"use client";
import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import Image from "next/image";
import auntieImage from "../../public/auntie.jpeg";
import { Loader2 } from "lucide-react";

export default function FormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, [loading]);

  const bgColor = "bg-[#0F172A]"; // Background (Slate 900)
  const textColor = "text-[#F1F5F9]"; // Text (Gray 100)
  const cardBg = "bg-[#1E293B] border border-[#7C3AED]"; // Card background with primary border

  if (loading) {
    return (
      <main
        className={`min-h-screen ${bgColor} flex items-center justify-center p-4`}
      >
        <div
          className={`flex flex-col items-center text-center space-y-6 animate-fade-in ${textColor}`}
        >
          <Image
            src={auntieImage}
            alt="Rishtey Wali Auntie"
            width={300}
            height={300}
            className="rounded-full shadow-md border border-[#7C3AED]"
          />
          <Loader2 className="animate-spin text-[#7C3AED] w-12 h-12" />
          <p className="text-2xl font-bold">Loading Aunties magic... 💫</p>
          <p className="text-base max-w-md px-4 text-[#F1F5F9]">
            &ldquo;Mashallah se Auntie ne hazaron rishtay milway hain , har ek
            me pyar, samajhdaari aur compatibility ka khayal rakha hai.
            💕&rdquo;
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen ${bgColor} flex items-center justify-center p-4`}
    >
      <Card
        ref={cardRef}
        className={`w-full max-w-xl shadow-2xl rounded-3xl ${cardBg}`}
      >
        <CardContent className={`p-8 ${textColor}`}>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={auntieImage}
              alt="Rishtey Wali Auntie"
              width={160}
              height={160}
              className="rounded-full shadow-md border border-[#7C3AED] object-cover"
            />
            <div className="w-full">{children}</div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
