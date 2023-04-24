/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Resturant = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?&page=1&limit=20"
            )
            .then((res) => setData(res.data.data));
    }, []);
    return (
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-4 gap-4 m-4">
            {data.map((el) => {
                return (
                    <div key={el.id} className="border p-8 m-5  cursor-pointer">
                       
                        <Card value='resturant' image={el.image} type={el.type.toUpperCase()} name={el.name.toUpperCase()} />
                        <p>Rs: {el.price_starts_from}/ Starting</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Resturant;
