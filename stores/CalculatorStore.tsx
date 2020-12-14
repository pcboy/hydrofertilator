import { observable } from "mobx";
import { observer } from "mobx-react";

export const computeMl = (containerSize: number, dosage: number) =>
  ((dosage / 100000.0) * (containerSize * 1000));

class CalculatorStore {
  @observable containerLiters: number = 1;
}

export const calculatorStore = new CalculatorStore();
export default calculatorStore;
