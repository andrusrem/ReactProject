import axios from 'axios';
import React from 'react';

export async function GetActivities(url)
{
    const request = await axios.get(url).catch(function (error) {
        console.log(error);
    });
    return request.data;
}

export async function GetActivityById(id, url)
{
    const { data } = await axios.get(url, id).catch(function (error) {
        console.log(error);
    });
    return data;
}

export async function CreateNewActivity(url, body)
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

export async function EditActivity(url, body)
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

export async function DeleteActivity(url, id)
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