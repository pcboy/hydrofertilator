import * as React from "react";

import {
  InputAdornment,
  Input,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import { observer } from "mobx-react";

import { calculatorStore, computeMl } from "../../stores/CalculatorStore";
import { SCalculator } from "./SCalculator";
import { handleChangeNumber } from "./Utils";
import ArmorSi from "../../assets/armor-si.png";
import { GEDosages } from "./GEDosages";

const Calculator = observer(() => {
  return (
    <div className="container" style={{ padding: "1rem" }}>
      <SCalculator>
        <h1>Hydroponics Fertilizer Calculator</h1>
        <div className="columns is-multiline is-mobile justify-center">
          <div className="column is-narrow">Container size:</div>
          <div className="column is-narrow">
            <Input
              type="number"
              style={{ width: "50%" }}
              value={calculatorStore.containerLiters}
              onChange={(e) => handleChangeNumber(e, "containerLiters")}
              label="Container size"
              endAdornment={
                <InputAdornment position="end">Liters</InputAdornment>
              }
            />
          </div>
        </div>

        <GEDosages style={{ marginBottom: "2rem", marginTop: "4rem" }} />

        <div className="columns">
          <div
            className="column is-2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <b>Armor Si</b>
            <img className="bottle" src={ArmorSi} />
          </div>
          <div className="column align-items-center">
            <div className="dosages">
              Mild Strength: {computeMl(calculatorStore.containerLiters, 25)} ml
              <br />
              Full Strength: {computeMl(calculatorStore.containerLiters, 50)} ml
              <br />
              Maximum Strength:{" "}
              {computeMl(calculatorStore.containerLiters, 100)} ml
            </div>
          </div>
        </div>
      </SCalculator>
    </div>
  );
});

export default Calculator;
