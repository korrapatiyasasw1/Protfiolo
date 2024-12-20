import React from 'react'
const PatientItem = ({ patient, onEdit, onDelete }) => {
    return (
      <PatientItemContainer>
        <div>
          <Strong>{patient.name}</Strong> - Age: {patient.age}, History:{" "}
          {patient.history}
        </div>
        <div>
          <Button onClick={() => onEdit(patient)}>Edit</Button>
          <Button danger onClick={() => onDelete(patient.id)}>
            Delete
          </Button>
        </div>
      </PatientItemContainer>
    );
  };
  const StudentButtons = ({Student,onEdit,onDelete})=>
  {
    return(
        <>
       
        </>
    )
  }

export default StudentButtons