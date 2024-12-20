import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../PatientHistory/patientSlice"; 

export const store = configureStore({
  reducer: {
    patients: patientReducer, 
  },
});
