import { createContext } from 'react';
import {db} from './src/auth/firebase';

export const loadAllCenter = async ()=>{
    const {docs} = await db.collection("centers").get();
    return docs.map((doc)=> {const id= doc.id; return {...doc.data(),id}});

}

export const getDetail=(centers,centerId,nameField="")=>{
    const center=centers.find(d=>d.id===centerId);
    return center[nameField];
}
export const getFeatures= async()=>{
    const {docs}= await db.collection("features").get();
    return  docs.map((doc)=> {const id= doc.id; return {...doc.data(),id}});
}
export const getMarketings= async()=>{
    const {docs}= await db.collection("marketings").get();
    return  docs.map((doc)=> {const id= doc.id; return {...doc.data(),id}});
}
export const getAllCenterNames=(centers)=>{
    return centers.map(data=>data.name);
}

export const getGeneralInfo=(centers=[],centerId="")=>{

    if(!centerId){
       return centers.map(v=>{const {id,name, address,contact,date,description,kindService,children,waitlisted,services} = v;;
       return {id,name, address,contact,date,description,kindService,children,waitlisted,services};})
    }
    const center=centers.find(d=>d.id===centerId);
    const {id,name, address,contact,date,description,kindService,children,waitlisted,services} = center;
    return {id,name, address,contact,date,description,kindService,children,waitlisted,services};
}
