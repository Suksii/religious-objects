import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './HomePage.scss';
import juznaRegija from "../../assets/img/j-regija.jpg";
import centralnaRegija from "../../assets/img/c-regija.jpg";
import sjevernaRegija from "../../assets/img/s-regija.jpg";

const HomePage = () => {

    const data = [
        {
            region: 'Južna regija',
            image: juznaRegija,
            link: '/juzna-regija'
        },
        {
            region: 'Srednja regija',
            image: centralnaRegija,
            link: '/srednja-regija'
        },
        {
            region: 'Sjeverna regija',
            image: sjevernaRegija,
            link: '/sjeverna-regija'
        }
    ];

    return (
        <div className="home-page">
            <p style={{ textAlign: "right", marginRight: "5px" }}>

            </p>
            <h1 className="title">Vjerski objekti u Crnoj Gori</h1>
            <div className="card-list">
                {data.map((region, index) => (
                    <Link to={region.link} key={index} className="card">
                        <h2>{region.region}</h2>
                        <img src={region.image} alt={region.region} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
