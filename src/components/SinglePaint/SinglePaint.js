import React from "react";
import { useParams } from 'react-router-dom';
import PAINTING from "../App/PAINTING.json";
import Image from '../Image/Image'; 


const SinglePaint = (props) => {
    const { id } = useParams()
    const painting = PAINTING.find(item => item.id === id)
    console.log('painting:', painting);
    return (
        <div>
            <h2>{painting.name}</h2>
            <Image imgSrc={`/assets/img/${painting.image}`} alt={painting.name} />

        </div>
    );

};



export default SinglePaint;