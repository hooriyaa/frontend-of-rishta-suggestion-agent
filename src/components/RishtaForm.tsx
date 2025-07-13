// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import FormField from "./FormField";
// import FormWrapper from "./FormWrapper";
// import { Toaster, toast } from "sonner";

// export default function RishtaForm() {
//   const [formData, setFormData] = useState({ age: "", phone: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:8000/get-rishta", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       toast.success("Rishta response received!", { description: data.response });
//     } catch (err) {
//       toast.error("Failed to get rishta.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <FormWrapper>
//       <Toaster />
//       <h2 className="text-2xl font-semibold text-rose-700 text-center">
//         💍 Rishtey Wali Auntie Form
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4 w-full">
//         <FormField id="age" label="Age" value={formData.age} onChange={handleChange} placeholder="Enter your age" />
//         <FormField id="phone" label="WhatsApp Number" value={formData.phone} onChange={handleChange} placeholder="e.g. 923001234567" />
//         <FormField id="message" label="Message" value={formData.message} onChange={handleChange} textarea placeholder="Any preferences or details Auntie should know?" />
//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Sending..." : "Find My Rishta"}
//         </Button>
//       </form>
//     </FormWrapper>
//   );
// }




// components/RishtaForm.tsx
"use client";
import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import FormField from "./FormField";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

export default function RishtaForm() {
  const [formData, setFormData] = useState({
    age: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/get-rishta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      toast.success("Rishta response received!", {
        description: data.response,
      });
    } catch {
      toast.error("Failed to get rishta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <Toaster />
      <h2 className="text-2xl font-bold text-[#ffffff] text-center flex items-center justify-center gap-2">
        💍 Rishtey Wali Auntie Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <FormField
          id="age"
          label="Age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <FormField
          id="phone"
          label="WhatsApp Number"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. 923001234567"
        />
        <FormField
          id="message"
          label="Message"
          textarea
          value={formData.message}
          onChange={handleChange}
          placeholder="Any preferences or details Auntie should know?"
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#9333EA] hover:bg-[#7C3AED] text-white font-semibold transition-colors"
        >
          {loading ? "Sending..." : "Find My Rishta"}
        </Button>
      </form>
    </FormWrapper>
  );
}
