import { userUrl } from "./Config";

export const addUser = async (userData)=>{
    const response =await fetch(
        `${userUrl}/student`,
    {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(userData)
            }

    );
    const user= await response.json();
    return user;
}

export const getUser=async()=>{
    const response = await fetch(
        `${userUrl}/student`
    );
    const users= await response.json();
    return users;
}

export const updateUser=async(userId,userData)=>{
    const response = await fetch(
        `${userUrl}/student/${userId}`,
        {
            method:'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(userData)
        }
    );
    const users= await response.json();
    return users;
}


export const getProfile =async (userId)=>{
    const response =await fetch(
        `${userUrl}/student/${userId}`
        );
        const users= await response.json();
        return users;
    
}

export const deleteUser = async(userId)=>{
    const response =await fetch(
        `${userUrl}/student/${userId}`,
    {
        method:'DELETE'
            }

    );
    const user= await response.json();
    return user;
}