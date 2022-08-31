import Magnify from "./Magnify";

const Search = () => {
  return (
    <form className="justify-center align-center flex">
      <div>
        <input
          type={"search"}
          className="placeholder:px-4 bg-custom-200 dark:bg-background-800 rounded-sm"
          placeholder={'Try "MARCO DUST" '}
        />
      </div>
    </form>
  );
};

export default Search;
