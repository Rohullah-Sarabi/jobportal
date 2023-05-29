import Image from "next/image";
const Search = () => {
  return (
    <div class="py-2 h-20 w-full flex justify-center items-center">
      <input
        class="w-4/12 h-5/6 rounded-xl px-2"
        type="search"
        name="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
