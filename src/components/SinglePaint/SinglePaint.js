import React from "react";
import { useParams } from 'react-router-dom';
import PAINTING from "../App/PAINTING.json";
import Image from '../Image/Image'; 
import './SinglePaint.css';

const SinglePaint = (props) => {
    const { id } = useParams()
    const painting = PAINTING.find(item => item.id === id)
    console.log('painting:', painting);
    return (
        <div className="painting-detail">
            <h2>{painting.name}</h2>
            <img src={`/assets/img/${painting.image}`} alt={painting.name} className="painting-detail-img" />


        </div>
    );

};



export default SinglePaint;