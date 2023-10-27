import React from 'react'
import { useForm, useStep } from "react";

//rafc
export const MultiStepForm = () => {

    const defaultData = {
        firstNama : "",
        lastNama : "",
        nickNama : "",
    }

    const steps = [
        { id: 'names' },
        { id: 'address' },
        { id: 'contact' },
        { id: 'review' },
        { id: 'submit' },
    ]

    const [FormData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialSteps: 0
    });

    console.log(step);

  return (
    <div>MultiStepForm</div>
  )
}