type inputType = {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password";
  value: string;
};
export const LabelledInput = ({
  label,
  placeholder,
  onChange,
  type,
  value,
}: inputType) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
};
