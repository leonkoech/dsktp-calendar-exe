const Optional = () => {
  return (
    <div className="flex flex-grow w-full flex-col justify-around  items-center p-3 space-x-2 text-sm font-medium text-center">
      <div className="w-4/5">
        <span className="text-xs">
          These are optional settings. It is recommended to leave them as they
          are unless you know what you are doing
        </span>
      </div>
      <div>
        <button
          type="button"
          onClick={()=>process.exit()}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-12 py-1.5 text-center me-2 mb-2"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default Optional;
