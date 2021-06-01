import React, { useState, useCallback } from 'react';

export default function useInput() {
  const [input, setInput] = useState('');
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    [],
  );
  const onReset = useCallback(() => setInput(''), []);

  return [input, onChange, onReset] as [
    string,
    typeof onChange,
    typeof onReset,
  ];
}
