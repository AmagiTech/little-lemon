import imgBruchetta from '../assets/img/bruchetta.svg';
import imgLemonDesert from '../assets/img/lemon dessert.jpg';
import imgGreekSalad from '../assets/img/greek salad.jpg';
import SpecialCard from '../components/SpecialsCard';
import { useState } from 'react';

function Specials(props) {

    let specialDishes = useState([{
        title: 'Greek Salad',
        image: imgGreekSalad,
        subtitle: '$12.99',
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago styles feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        title: 'Bruchetta',
        image: imgBruchetta,
        subtitle: '$12.99',
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago styles feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        title: 'Lemon Dessert',
        image: imgLemonDesert,
        subtitle: '$12.99',
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago styles feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    ]);

    const specialCards = specialDishes.map((q,index) => {
        return <SpecialCard key={q.title} title={q.title} subtitle={q.subtitle} image={q.image} text={q.text}></SpecialCard>});

    return (
        <div className="container px-4 py-5">
            <div className="row">
                <h1>asdsadas</h1>
                {specialCards}
            </div>
        </div>
    );
}

export default Specials;
