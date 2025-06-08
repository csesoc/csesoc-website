import { useRouter } from "next/router";
import { useRef, useState } from "react";

const Terminal = () => {
  // Store the value of the input
  const [value, setValue] = useState("");

  // Automatically select the end of the input as the custom
  // cursor only works at the end of the input.
  const inputRef = useRef<HTMLInputElement>(null);
  const setInputEnd = () => {
    if (inputRef.current) {
      const len = inputRef.current.value.length;
      inputRef.current.setSelectionRange(len, len);
    }
  }

  // Keep track of if the input is focused
  const [inputFocused, setInputFocused] = useState(false);

  // Using the router to change pages seamlessly
  const router = useRouter();
  const goToPage = (target: string) => {
    router.push(target);
  };
  
  // Checking for "Enter" and if so, changing to
  // the inputted page
  const handleKey = (key: string) => {
    if (key !== "Enter") return;

    if (value.toLowerCase() === "~"
      || value.toLowerCase() === "cd"
      || value.toLowerCase() === "cd ~"
      || value.toLowerCase() === "cd .."
    ) {
      goToPage("/");
    } else if (value.toLowerCase() === "cd about"
      || value.toLowerCase() === "cd about us"
      || value.toLowerCase() === "cd about_us"
    ) {
      goToPage("/about");
    } else if (value.toLowerCase() === "cd events"
      || value.toLowerCase() === "cd event"
    ) {
      goToPage("/events");
    } else if (value.toLowerCase() === "cd resources"
      || value.toLowerCase() === "cd resource"
    ) {
      goToPage("/resources");
    } else if (value.toLowerCase() === "cd sponsors"
      || value.toLowerCase() === "cd sponsor"
    ) {
      goToPage("/sponsors");
    } else if (value.toLowerCase() === "cd contact"
      || value.toLowerCase() === "cd contacts"
      || value.toLowerCase() === "cd contact us"
      || value.toLowerCase() === "cd contact_us"
    ) {
      goToPage("/contact-us");
    }

    clearInput()
  };

  const clearInput = () => {
    setValue("");
  };

  return (
    // Using relative + absolute to overlap the `input` and `span`
    <span className="relative">
      {/* The input */}
      <input type="text" id="input" value={value} ref={inputRef} maxLength={40}
        className="absolute text-blue-500 p-0 m-0 bg-transparent outline-none caret-transparent w-[50vw] z-10"
        onKeyDown={(e) => {
          handleKey(e.key)
          setInputEnd()
        }}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setInputFocused(true)}
        onBlur={() => {
          clearInput()
          setInputFocused(false)
        }}
      ></input>
      {/* The custom cursor */}
      <span className="absolute w-[60vw] p-0 m-0 z-0">
        {/* The invisable span that is the same length as the input */}
        <span
          className="invisible whitespace-pre pointer-events-none text-base"
        >{value}</span>
        {/* The custom cursor */}
        <span id="cursor" className={`text-${inputFocused ? "white" : "gray-500"} pointer-events-none inline-block animate-blink p-0 m-0`}>_</span>
      </span>
    </span>
  )
}

export default Terminal
