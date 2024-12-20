// patientSlice.js
import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patients",
  initialState: {
    patients: [
      {
        id: 1,
        details: {
          name: "Yasaswini",
          age: 22,
        },
        contactInfo: {
          phone: "1234567890",
          email: "vinu@gmail.com",
        },
        address: {
          street: "MVP",
          city: "Vizg",
          state: "Ap",
        },
      },
    ],
  },
  reducers: {
    AddPatient: (state, action) => {
      state.patients.push(action.payload);
    },
  },
});

export const { AddPatient } = patientSlice.actions;
export default patientSlice.reducer;
