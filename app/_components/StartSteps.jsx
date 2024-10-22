const StartSteps = ({ number, text }) => {
    // Split the text into words
    const [firstWord, ...restWords] = text.split(' ');
    // Join the rest of the words back into a single string
    const restOfText = restWords.join(' ');
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] w-full gap-y-4 sm:gap-y-0 sm:gap-x-8">
        {/* First word with fixed width */}
        <div className="flex items-center  w-40 text-center h-min justify-center truncate text-ellipsis overflow-x-auto px-4 rounded-sm py-3 bg-[#323F5D]">
          <p className="font-bold text-lg text-white">{firstWord}</p>
        </div>
        
        {/* Rest of the text */}
        <p className="font-normal text-md md:text-lg justify-center text-slate-200 leading-[32px]">
          {restOfText}
        </p>
      </div>
    );
  };
  
  export default StartSteps;