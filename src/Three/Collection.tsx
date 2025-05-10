const Collections = () => {
  const TAGS = ["Profile", "New York", "Relax", "Person", "Fashion"];

  return (
    <div className="bg-gray-250 w-full rounded-lg p-16 font-[#0E0E38] shadow-lg">
      <h1 className="font-meri text-3xl font-bold">Popular Collection</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        {TAGS.map((tag) => (
          <a
            key={tag}
            className="cursor-pointer rounded-lg bg-gray-50 px-4 py-2 hover:text-blue-300"
          >
            {tag}
          </a>
        ))}
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 rounded-3xl bg-white p-6">
          <div>
            <img
              src="https://placewaifu.com/image/100"
              className="aspect-video w-full rounded-2xl"
              alt=""
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
            <img
              src="https://placewaifu.com/image/300"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
            <img
              src="https://placewaifu.com/image/400"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="flex pt-4">
            <p className="font-popi grow text-2xl font-medium">People</p>
            <p className="font-popi flex items-center text-2xl font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="col-span-1 rounded-3xl bg-white p-6">
          <div>
            <img
              src="https://placewaifu.com/image/500"
              className="aspect-video w-full rounded-2xl"
              alt=""
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/600"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
            <img
              src="https://placewaifu.com/image/700"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
            <img
              src="https://placewaifu.com/image/800"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="flex pt-4">
            <p className="font-popi grow text-2xl font-medium">People</p>
            <p className="font-popi flex items-center text-2xl font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="col-span-1 rounded-3xl bg-white p-6">
          <div>
            <img
              src="https://placewaifu.com/image/900"
              className="aspect-video w-full rounded-2xl"
              alt=""
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/1000"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
            <img
              src="https://placewaifu.com/image/120"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
            <img
              src="https://placewaifu.com/image/110"
              className="aspect-video w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="flex pt-4">
            <p className="font-popi grow text-2xl font-medium">People</p>
            <p className="font-popi flex items-center text-2xl font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
