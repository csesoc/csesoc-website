import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Terminal = () => {
  const [value, setValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Automatically select the end of the input as the custom
  // cursor only works at the end of the input.
  const setInputEnd = () => {
    if (inputRef.current) {
      const len = inputRef.current.value.length;
      inputRef.current.setSelectionRange(len, len);
    }
  };

  // Use localStorage to keep focus on the terminal if redirecting using terminal
  useEffect(() => {
    if (localStorage.getItem('fromTerminal') === 'true') {
      localStorage.removeItem('fromTerminal');
      if (inputRef.current) {
        inputRef.current.focus();
        setInputEnd();
        setInputFocused(true);
      }
    }
  }, []);

  const goToPage = (target: string) => {
    localStorage.setItem('fromTerminal', 'true');
    router.push(target);
  };

  // Checking for "Enter" and if so, changing to
  // the inputted page
  const handleKey = (key: string) => {
    if (key !== 'Enter') return;

    const cmd = value.toLowerCase().trim();

    if (['~', 'cd', 'cd ~', 'cd ..'].includes(cmd)) {
      goToPage('/');
    } else if (['cd about', 'cd about us', 'cd about_us'].includes(cmd)) {
      goToPage('/about');
    } else if (['cd events', 'cd event'].includes(cmd)) {
      goToPage('/events');
    } else if (['cd resources', 'cd resource'].includes(cmd)) {
      goToPage('/resources');
    } else if (['cd sponsors', 'cd sponsor'].includes(cmd)) {
      goToPage('/sponsors');
    } else if (['cd contact', 'cd contacts', 'cd contact us', 'cd contact_us'].includes(cmd)) {
      goToPage('/contact-us');
    } else if (cmd === 'cd constitution') {
      goToPage('/about/constitution');
    } else if (
      [
        'cd execs',
        'cd directors',
        'cd subcom',
        'cd execs directors subcom',
        'cd execs-directors-subcom',
        'cd execs_directors_subcom'
      ].includes(cmd)
    ) {
      goToPage('/about/execs-directors-subcom');
    } else if (['history', 'cd our history', 'cd our-history', 'cd our_history'].includes(cmd)) {
      goToPage('/about/our-history');
    } else if (
      ['cd faq', 'cd faqs', 'cd questions', 'cd frequently asked questions'].includes(cmd)
    ) {
      goToPage('/about/faqs');
    } else if (['cd election-guide', 'cd election guide', 'cd election'].includes(cmd)) {
      goToPage('/about/election-guide');
    }

    clearInput();
  };

  const clearInput = () => {
    setValue('');
  };

  return (
    <span className="relative">
      <input
        type="text"
        id="input"
        value={value}
        ref={inputRef}
        maxLength={40}
        className="absolute text-blue-500 p-0 m-0 bg-transparent outline-none caret-transparent w-[50vw] z-10"
        onKeyDown={(e) => {
          handleKey(e.key);
          setInputEnd();
        }}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setInputFocused(true)}
        onBlur={() => {
          clearInput();
          setInputFocused(false);
        }}
      />
      <span className="absolute w-[60vw] p-0 m-0 z-0">
        <span className="invisible whitespace-pre pointer-events-none text-base">{value}</span>
        <span
          id="cursor"
          className={`text-${
            inputFocused ? 'white' : 'gray-500'
          } pointer-events-none inline-block animate-blink p-0 m-0`}
        >
          _
        </span>
      </span>
    </span>
  );
};

export default Terminal;
