// // components/ui/dropdown-menu.js
// import React, { useState } from 'react';

// export const DropdownMenu = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <div>
//         <button
//           onClick={toggleDropdown}
//           className="inline-flex top-20 justify-center w-full rounded-md border border-black-500 shadow-sm px-4 py-2 bg-white text-sm text-black-800 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//         >
//           select
//         </button>
//       </div>

//       {isOpen && (
//         <div className="absolute right-0 top-10 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 text-black ring-black ring-opacity-5">
//           <div className="py-1 text-black" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//             {children}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export const DropdownMenuContent = ({ children }) => {
//   return <div>{children}</div>;
// };

// export const DropdownMenuItem = ({ onClick, children }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//     >
//       {children}
//     </button>
//   );
// };

// export const DropdownMenuTrigger = ({ children }) => {
//   return <div>{children}</div>;
// };