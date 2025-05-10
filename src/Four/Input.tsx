interface InputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}

const Input = ({ title, placeholder, type }: InputProps) => {
  return (
    <div>
      <label htmlFor="review" className="font-popi text-sm font-semibold">
        {title}
      </label>
      {type === "text" ? (
        <input
          id={title}
        placeholder={placeholder}
          className="mt-1 w-full rounded-md border-2 border-gray-300 p-4 py-3"
        ></input>
      ) : (
        <textarea
          id={title}
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-2 border-gray-300 p-4 py-3"
        ></textarea>
      )}
    </div>
  );
};

export default Input;
