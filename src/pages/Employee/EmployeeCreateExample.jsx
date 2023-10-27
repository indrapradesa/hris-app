import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Stepper from "../../components/form/Stepper";
import StepperControl from "../../components/form/StepperControl";
import Account from "../../components/form/steps/Account";
import Detail from "../../components/form/steps/Detail";
import Final from "../../components/form/steps/Final";

const EmployeeCreateExample = () => {

    const [open, setOpen] = useState(true);

    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Account Personal",
        "Personal Detail",
        "Complate",
    ];

    const displayStep = (step) => {
        switch(step) {
            case 1:
                return <Account />
            case 2:
                return <Detail />
            case 3:
                return <Final />
            default:
        }
    }

    const formList = [
        "Account Personal",
        "Personal Detail",
        "Complate",
    ];

    const initialValues = {
        name: "",
        lastName: "",
        address: "",
        city: "",
        terms: "",
        zip: "",
        username: "",
        password: "",
        confirmPassword: "",
    };

    const [values, setValues] = useState(initialValues);

    const [page, setpage] = useState(0);
    const formlength = formList.length;

    const handlePrev = () => {
        setpage(page === 0 ? formlength - 1 : page - 1);
    };

    const handleNext = () => {
        setpage(page === formlength ? formlength - 1 : page + 1);
    };

    const handleForm = () => {
        switch(page) {
            case 0:{
                return <Account formValues={values} onChange={onChange} />
            }
            case 1:{
                return <Detail formValues={values} onChange={onChange} option={citys}/>
            }
            case 2:{
                return <Final formValues={values} onChange={onChange} />
            }
            default:
                return null;
        }
    }

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;

        setValues({ ...values, [name]: type === 'checkbox' ? checked : value });
    }

    const citys = [
        {
            id: "0",
            name: "Paris",
        },
        {
            id: "1",
            name: "London",
        },
        {
            id: "2",
            name: "Waraw",
        },
        {
            id: "3",
            name: "Berlin",
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
            console.log("form", values);
        }, 2000);
        return response;
    }

    return (
        <>
            <div className="grid gap-4 place-content-center items-center h-screen place-items-center">
                <div>{handleForm()}</div>
                <div className="flex justify-between items-center">
                    <div className="grid grid-cols-2 gap-4 grid-col-2 place-content-center items-center">
                        <button className="bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md disabled:bg-gray-400 cursor-pointer" 
                            onClick={handlePrev} disabled={page === 0}>Prev</button>
                    </div>
                    {page === 2 ? (
                        <div>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    ) : (
                        <div>
                            <button className="bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md disabled:bg-gray-400 cursor-pointer" onClick={handleNext}>Next</button>
                        </div>
                    )}
                </div>
            </div>
            {/* <div className="flex">
                <Sidebar open={open} setOpen={setOpen} />
            </div> */}
        </>
    );
}

export default EmployeeCreateExample;