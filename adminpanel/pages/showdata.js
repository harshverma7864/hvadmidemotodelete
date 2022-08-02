import React from 'react'
import { MongoClient } from "mongodb";
// import mongoose from 'mongoose'
import { useState } from 'react';
import Product from "../models/Product"



const showdata = ({ result }) => {


    return (
        <>
          <h1>hello sir</h1>
        <div>
          {/* {
            result.map((e)=>{
                return(
                    <>
                    <div>{e.email}</div>
                    </>
                )
            })
          } */}

          {result.email}
          </div>
        </>
    )

}


export async function getServerSideProps() {


  const client = await 
  MongoClient.connect(
    "mongodb://localhost:27017/HomelyVirtual");
  const db = client.db();
  const yourCollection = db.collection("Products");
  const result = await yourCollection.findOne();
  
  
    // Pass data to the page via props
    return { props: {result : JSON.parse(JSON.stringify(result))}}
  }



export default showdata