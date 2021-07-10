import { useState } from "react";

export const useOpenPok = () => {
  const [openPok, setOpenPok] = useState(null);

  return { openPok, setOpenPok };
};
