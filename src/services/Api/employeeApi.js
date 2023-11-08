import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const getEmployee = async() => {

    const employees = await axios.get(
        `${baseUrl}/employee?page=1`
    )

    return employees.data.data;
}

export const storeEmployee = async(e) => {

    const employeesNew = await axios.post(
        `${baseUrl}/employee/store`, e
    )

    return employeesNew.data.data;
}


export const getBranch = async() => {

    const branch = await axios.get(
        `${baseUrl}/branchs`
    )

    return branch.data.data;
}

export const getRole= async() => {

    const role = await axios.get(
        `${baseUrl}/role`
    )

    return role.data.data;
}

export const getLevel = async() => {

    const level = await axios.get(
        `${baseUrl}/division`
    )

    return level.data.data;
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

export const getProvince = async() => {
    const province = await axios.get(
        `${baseUrl}/zone/provinces`
    )

    return province.data.data;
}

export const getRegenciesByProvince = async(e) => {
    const regencies = await axios.get(`${baseUrl}/zone/${e}/regencies`)
    // console.log(regencies)
    return regencies.data.data;
}

export const getDistrictByRegencie= async(e) => {
    const district = await axios.get(`${baseUrl}/zone/${e}/districts`)
    // console.log(district)
    return district.data.data;
}

export const getVillageByDistrict = async(e) => {
    const village = await axios.get(`${baseUrl}/zone/${e}/villages`)
    // console.log(village)
    return village.data.data;
}
