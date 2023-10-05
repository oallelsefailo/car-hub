import React from "react";
import { useState } from "react";

function Rides() {

    const [photo, setPhoto] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [type, setType] = useState('')
    const [engine, setEngine] = useState('')
    const [drivetrain, setDrivetrain] = useState('')
    const [owner, setOwner] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/rides", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                photo,
                brand,
                model,
                year,
                type,
                engine,
                drivetrain,
                owner,
              }),
            });
      
            if (response.ok) {
              console.log("Ride Posted Successfully");
              setPhoto("");
              setBrand("");
              setModel("");
              setYear("");
              setType("");
              setEngine("");
              setDrivetrain("");
              setOwner("");
            } else {
              console.error("Failed to post ride");
            }
          } catch (error) {
            console.error(error);
          }
        };

    return (
        <div>
            <main>
                <h1>Rides</h1>
                <form method="POST" action="/rides">
                    <div>
                        <label>Photos: </label>
                        <input id='photos' name='photos' value= {photo} onChange={ (e)=> setPhoto(e.target.value)} />
                    </div>
                    <div>
                        <label>Brand: </label>
                        <input id='brand' name='brand' value= {brand} onChange={ (e)=> setBrand(e.target.value)} required />
                    </div>
                    <div>
                        <label>Model: </label>
                        <input id='model' name='model' value= {model} onChange={ (e)=> setModel(e.target.value)} required />
                    </div>
                    <div>
                        <label>Year: </label>
                        <input id='year' name='year' value= {year} onChange={ (e)=> setYear(e.target.value)} required />
                    </div>
                    <div>
                        <label>Type: </label>
                        <input id='type' name='type' value= {type} onChange={ (e)=> setType(e.target.value)} required />
                    </div>
                    <div>
                        <label>Engine: </label>
                        <input id='engine' name='engine' value= {engine} onChange={ (e)=> setEngine(e.target.value)} required />
                    </div>
                    <div>
                        <label>Drivetrain: </label>
                        <input id='drivetrain' name='drivetrain' value= {drivetrain} onChange={ (e)=> setDrivetrain(e.target.value)} required />
                    </div>
                    <div>
                        <label>Owner: </label>
                        <input id='owner' name='owner' value= {owner} onChange={ (e)=> setOwner(e.target.value)} required />
                    </div>
                </form>
                <input type="submit" onClick={handleSubmit} />
            </main>
        </div>
    )
}

export default Rides;