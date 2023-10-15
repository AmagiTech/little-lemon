import imgBruchetta from '../../../assets/img/bruchetta.svg';
import imgLemonDesert from '../../../assets/img/lemon dessert.jpg';
import imgGreekSalad from '../../../assets/img/greek salad.jpg';
import SpecialCard from '../Home/SpecialsCard';
import { useState } from 'react';
import React from "react";

function Specials(props) {

    let [specialDishes, setSpecialDishes] = useState([{
        title: 'Greek Salad',
        image: imgGreekSalad,
        subtitle: '$12.99',
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago styles feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        title: 'Bruchetta',
        image: imgBruchetta,
        subtitle: '$5.89',
        text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasdoned with salt and olive oil.'
    },
    {
        title: 'Lemon Dessert',
        image: imgLemonDesert,
        subtitle: '$5.00',
        text: "Ths comes straight from grandma's recipe book. every last ingredient has been sourced and is as authentic as can be imagined."
    },
    ]);


    return (
        <div className="container px-4 py-5">
            <div className='d-flex justify-content-between'>
                <h2>This Week Specials</h2>
                <button className='btn btn-yellow self-align-end'>Online Menu</button>
            </div>

            <div className='d-flex justify-content-around'>
                {specialDishes.map((dish, i) => {
                    console.log(dish);
                    return <SpecialCard key={dish.title}
                        title={dish.title}
                        image={dish.image}
                        text={dish.text}
                        subtitle={dish.subtitle} />
                })}
            </div>

        </div>
    );
}

export default Specials;
