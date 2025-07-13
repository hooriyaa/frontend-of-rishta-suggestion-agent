// import React from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// export default function FormField({
//   id,
//   label,
//   value,
//   onChange,
//   textarea = false,
//   placeholder,
// }: {
//   id: string;
//   label: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//   textarea?: boolean;
//   placeholder?: string;
// }) {
//   return (
//     <div className="space-y-1">
//       <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
//         {label}
//       </Label>
//       {textarea ? (
//         <Textarea
//           id={id}
//           name={id}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//         />
//       ) : (
//         <Input
//           id={id}
//           name={id}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required
//         />
//       )}
//     </div>
//   );
// }


// components/FormField.tsx
"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
  placeholder?: string;
}

export default function FormField({
  id,
  label,
  value,
  onChange,
  textarea = false,
  placeholder,
}: Props) {
  const baseClasses =
    "w-full rounded-md bg-[#1E293B] border border-[#7C3AED] text-[#F1F5F9] placeholder:text-gray-400 focus:ring-[#7C3AED] focus:border-[#7C3AED]";
  return (
    <div className="space-y-1">
      <Label
        htmlFor={id}
        className="block text-sm font-medium text-[#F1F5F9]"
      >
        {label}
      </Label>

      {textarea ? (
        <Textarea
          id={id}
          name={id}
          className={baseClasses}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <Input
          id={id}
          name={id}
          className={baseClasses}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
}
