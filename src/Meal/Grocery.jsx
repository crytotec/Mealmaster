import './style.css'
import { tablesdes } from '../Item3';

function Grocery() {
    return (
        <div>
            <h1>Description of How to Prepare Food</h1>
            <table>
                <thead>
                    <tr>
                        <th>Food name</th>
                        <th>Image</th>
                        <th>Ingredient</th>
                    </tr>
                </thead>
                <tbody>
                    {tablesdes.map((index) => (
                        <tr key={index.id}>
                            <td>{index.name}</td>
                            <td>
                                <img src={index.img} alt={index.alt}/>
                            </td>
                            <td>{index.ingredient}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Grocery;