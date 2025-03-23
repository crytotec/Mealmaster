import Edit from './Edit.module.css';
import { Breakfast, Lunch, Dinner } from '../Item2';
import { useState } from 'react';

function Recipelibrary({ setAdd, add }) {
    const [selectedBreakfast, setSelectedBreakfast] = useState(null);
    const [selectedLunch, setSelectedLunch] = useState(null);
    const [selectedDinner, setSelectedDinner] = useState(null);
    const [findfood, setfindfood] = useState('');
    const [food, setFood] = useState([...Breakfast, ...Lunch, ...Dinner]);

    const updateAdd = (meal) => {
        if (!meal) {
            console.error('Error: Meal is undefined or null');
            return;
        }

        setAdd((prev) => {
            const checkExist = prev.find(item => item.id === meal.id);
            let updatedMeals;
            
            if (checkExist) {
                updatedMeals = prev.map((item) =>
                    item.id === meal.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                updatedMeals = [...prev, { ...meal, count: 1 }];
            }

            return updatedMeals;
        });
    };

    const Findmeal = () => {
        let Meal = [];
        if (findfood === 'Breakfast') {
            Meal = Breakfast;
        } else if (findfood === 'Lunch') {
            Meal = Lunch;
        } else if (findfood === 'Dinner') {
            Meal = Dinner;
        } else {
            Meal = [];
        }
        setFood(Meal);
    };

    const handleSelect = (meal) => {
        updateAdd(meal);
        if (findfood === 'Breakfast') {
            setSelectedBreakfast(meal);
            setSelectedLunch(null);
            setSelectedDinner(null);
        } else if (findfood === 'Lunch') {
            setSelectedLunch(meal);
            setSelectedBreakfast(null);
            setSelectedDinner(null);
        } else if (findfood === 'Dinner') {
            setSelectedDinner(meal);
            setSelectedBreakfast(null);
            setSelectedLunch(null);
        }
    };

    return (
        <div>
            <div className={Edit.form}>
                <form className={Edit.fix} onSubmit={(e) => { e.preventDefault(); Findmeal(); }}>
                    <label htmlFor='cuisine-selector'>Cuisine:</label>
                    <select onChange={(e) => setfindfood(e.target.value)} id='cuisine-selector'>
                        <option value=''>Select a cuisine</option>
                        <option value='Breakfast'>Select a Breakfast</option>
                        <option value='Lunch'>Select a Lunch</option>
                        <option value='Dinner'>Select a Dinner</option>
                    </select>
                    <button className={Edit.btn} type='submit'>Find food</button>
                </form>
            </div>

            <div className={Edit.recipecards}>
                {food.map((meal) => (
                    <div key={meal.id}>
                        <div className={Edit.recipe}>
                            <img src={meal.img} className={Edit.img} alt={meal.name} />
                            <p className={Edit.text}>{meal.name}</p>
                            <p className={Edit.text}>{meal.category}</p>
                            <button 
                                className={Edit.btn} 
                                onClick={() => handleSelect({ id: meal.id, img: meal.img, name: meal.name, category: meal.category })}
                                disabled={
                                    (findfood === 'Breakfast' && selectedBreakfast) ||
                                    (findfood === 'Lunch' && selectedLunch) ||
                                    (findfood === 'Dinner' && selectedDinner)
                                }
                            >
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recipelibrary;
