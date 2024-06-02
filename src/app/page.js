"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";

export default function App(props) {
  const [code, setCode] = useState("");

  useEffect(() => {
    // Check if code exists in local storage
    const storedCode = localStorage.getItem("uniqueCode");
    if (storedCode) {
      // If code exists, set it in the state
      setCode(storedCode);
    }
  }, []);

  const generateUniqueCode = () => {
    // Generate three random strings of 19 characters each
    const part1 = Math.random().toString(36).substring(2, 21);
    const part2 = Math.random().toString(36).substring(2, 21);
    const part3 = Math.random().toString(36).substring(2, 21);
    
    // Join the parts with periods
    return `${part1}.${part2}.${part3}`;
  };
  const handleClick = () => {
    // Generate a new random code if it's empty, otherwise keep the current code
    const uniqueCode = code ? code : generateUniqueCode();
    // Save the code in local storage
    localStorage.setItem("uniqueCode", uniqueCode);
    // Set the code in the state
    setCode(uniqueCode);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-center flex-col items-center h-screen">
        <p className='mb-20'>{code}</p>
        <Button color="primary" onClick={handleClick}>Claim</Button>
      </div>
    </div>
  );
}
