import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const getEmployee = async() => {

    const employees = await axios.get(
        `${baseUrl}/employe?page=1`
    )

    return employees.data.data;
}

export const getDivision = async() => {

    const division = await axios.get(
        `${baseUrl}/division?page=1`
    )

    return division.data.data;
}

export const getJobTitle = async() => {

    const jobTitle = await axios.get(
        `${baseUrl}/role?page=1`
    )

    return jobTitle.data.data;
}
