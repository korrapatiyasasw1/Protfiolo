import { useSelector, useDispatch } from "react-redux";

import { AddPatient } from "./patientSlice";

export const usePatient=()=>{
    const patients=useSelector((state)=>state.patients.patients)
    const dispatch=useDispatch();

    const AddingPatient=()=>dispatch(AddPatient())
    return {patients,AddingPatient};
}