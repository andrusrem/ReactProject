import axios from 'axios';

export async function GetAccommodations(url)
{
    const request = await axios.get(url).catch(function (error) {
        console.log(error);
    });
    return request.data;
}

export async function GetAccommodationById(id, url)
{
    const { data } = await axios.get(url, id).catch(function (error) {
        console.log(error);
    });
    return data;
}

export async function CreateNewAccommodation(url, body)
{
    if(body == null)
    {
        console.error("Error:Nullable body error");
    }
    const request = await axios.post(url, body).catch(function (error) {
        console.log(error);
    });
    return request;
}

export async function EditAccommodation(url, body)
{
    if(body == null)
    {
        console.error("Error:Nullable body error");
    }
    const request = await axios.edit(url, body).catch(function (error) {
        console.log(error);
    });
    return request;
}

export async function DeleteAccommodation(url, id)
{
    if(id == null)
    {
        console.error("Error: Nullable ID error");
    }
    const request = await axios.delete(url, id).catch(function (error) {
        console.log(error);
    });
    return request
}