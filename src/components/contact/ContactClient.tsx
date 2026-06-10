"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PROJECT_TYPES, DESIGN_THEMES } from "@/lib/constants";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectName: "",
    projectType: "",
    designTheme: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const [focused, setFocused] = useState<Record<string, boolean>>({});

  const handleFocus = (field: string) =>
    setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field: string) =>
    setFocused((prev) => ({ ...prev, [field]: false }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/contact/thank-you");
    }, 1000);
  };

  const isLabelUp = (field: string) =>
    focused[field] || form[field as keyof typeof form] !== "";

  const inputClass =
    "border-0 border-b-2 border-gray-200 focus:border-primary bg-transparent outline-none py-3 w-full transition-colors duration-300 text-navy";

  const renderFloatingField = (
    name: string,
    label: string,
    type: string,
    required: boolean
  ) => (
    <div className="relative mb-8" key={name}>
      <label
        htmlFor={name}
        className={`absolute left-0 pointer-events-none origin-left transition-all duration-200 ${
          isLabelUp(name)
            ? "-translate-y-2 scale-75 text-primary"
            : "translate-y-3 scale-100 text-navy-100"
        }`}
      >
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={form[name as keyof typeof form]}
        onChange={handleChange}
        onFocus={() => handleFocus(name)}
        onBlur={() => handleBlur(name)}
        className={inputClass}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderFloatingField("name", "Full Name", "text", true)}
      {renderFloatingField("email", "Email Address", "email", true)}
      {renderFloatingField("phone", "Phone Number", "tel", false)}
      {renderFloatingField("projectName", "Project Name", "text", false)}

      <div className="mb-8">
        <p className="text-sm text-navy-100 font-medium mb-3">
          Project Type
        </p>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() =>
                setForm((prev) => ({ ...prev, projectType: type }))
              }
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all cursor-pointer ${
                form.projectType === type
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 text-navy-100 hover:border-primary-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm text-navy-100 font-medium mb-3">
          Design Theme
        </p>
        <div className="flex flex-wrap gap-2">
          {DESIGN_THEMES.map((theme) => (
            <button
              key={theme}
              type="button"
              onClick={() =>
                setForm((prev) => ({ ...prev, designTheme: theme }))
              }
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all cursor-pointer ${
                form.designTheme === theme
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 text-navy-100 hover:border-primary-300"
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      {renderFloatingField("budget", "Budget (RM)", "text", false)}

      <div className="relative mb-10">
        <label
          htmlFor="message"
          className={`absolute left-0 pointer-events-none origin-left transition-all duration-200 ${
            isLabelUp("message")
              ? "-translate-y-2 scale-75 text-primary"
              : "translate-y-3 scale-100 text-navy-100"
          }`}
        >
          Your Message<span className="text-primary ml-0.5">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          onFocus={() => handleFocus("message")}
          onBlur={() => handleBlur("message")}
          className={`${inputClass} min-h-[120px] resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-full font-semibold text-lg relative overflow-hidden group ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <span className="absolute inset-0 bg-primary-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        <span className="relative z-10">
          {isSubmitting ? "Sending..." : "Send Message"}
        </span>
      </button>
    </form>
  );
}
