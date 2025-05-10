import Input from "./Input";
import Review from "./Review";

const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="text-2xl font-black">Overral Rating</h1>

      <div className="gap-2">
        <Review />
        <p className="text-sm font-normal text-gray-500">Click to rate</p>
      </div>

      <Input
        title="Review title"
        placeholder="Example: Best service ever!"
        type="text"
      />

      <p>Would you recomend this product to your friend?</p>
      <div className="flex gap-4">
        <label className="flex cursor-pointer items-center">
          <input
            type="radio"
            name="recommend"
            className="mr-1.5 scale-150 accent-black"
          />
          <span>Yes</span>
        </label>
        <label className="flex cursor-pointer items-center">
          <input
            type="radio"
            name="recommend"
            className="mr-1.5 scale-150 accent-black"
          />
          <span>No</span>
        </label>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since I bought this product, I have been able to..."
        type="textarea"
      />

      <div className="flex gap-4">
        <div className="w-1/2">
          <Input title="Nickname" placeholder="Example: John Doe" type="text" />
        </div>
        <div className="w-1/2">
          <Input
            title="Email"
            placeholder="Example: john.doe@example.com"
            type="text"
          />
        </div>
      </div>
      <div>
        <label className="flex cursor-pointer items-center">
          <input type="checkbox" className="mr-4 scale-150 accent-black" />
          <span>I accept the terms and conditions</span>
        </label>
      </div>
      <p className="text-sm font-normal text-gray-500">
        You will be able to receive emails in connection with the review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing
      </p>

      <button className="font-popi mt-6 rounded-md bg-gray-900 p-4 text-white hover:bg-gray-800">
        Submit product review
      </button>
    </div>
  );
};

export default ReviewForm;
