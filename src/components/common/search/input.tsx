"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function SearchInput() {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // * close dropdown when clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleQueryInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e?.target.value as string;
      setQuery(value);

      if (value.trim() !== "" && value.length > 0) {
        setIsOpen(true);
      }
    },
    []
  );

  return (
    <div ref={dropdownRef} className="w-85 h-9 flex relative">
      <div className="flex flex-grow border border-brown-900/40 rounded-none focus-within:border-brown-900 focus-within:shadow-[inset_0_0_0_1px_theme('color.brown.900')]">
        <input
          value={query}
          ref={inputRef}
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          onChange={handleQueryInput}
          placeholder="Search recipe"
          className="flex flex-1 h-full text-base font-medium px-3 outline-none"
        />
      </div>
      {isOpen ? (
        <div className="w-full h-80 bg-brown-100 border border-brown-900/40 mt-[1px] absolute top-full"></div>
      ) : null}
    </div>
  );
}

export { SearchInput };
