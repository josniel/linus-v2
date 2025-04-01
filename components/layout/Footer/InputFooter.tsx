'use client';
import { useState } from 'react';
const InputFooter = () => {
  const [value, setValue] = useState('');
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
        title="Email"
        type="email"
        className={`relative w-full bg-white rounded-lg [box-shadow:4px_4px_0px_0px_#000] py-1 pl-8 pr-2 text-sm font-normal focus:outline-1 focus:outline-picton-blue-400 focus:ring-1 transition-all`}
        placeholder={'Example@Something.com'}
        minLength={10}
        spellCheck="false"
      />
      <span className="icon-letter text-sm text-[#121212] absolute left-2 top-1/2 -translate-y-1/2"></span>
    </div>
  );
};

export default InputFooter;
