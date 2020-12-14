import * as React from "react";
import { calculatorStore } from "../../stores/CalculatorStore";

export const handleChangeNumber = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  key: string
): number => {
  const value = e.target.value != "" ? parseFloat(e.target.value) : 0;
  calculatorStore[key] = value;
  return value;
};
