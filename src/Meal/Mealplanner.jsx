import React from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import Edit from './Edit.module.css';

function Mealplanner({ add = [], setAdd }) {
    const Del = (mealId) => {
        const updatedMeals = add.filter((meal) => meal.id !== mealId);
        setAdd(updatedMeals);
        localStorage.setItem('meals', JSON.stringify(updatedMeals));
    };

    const convertImageToBase64 = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const dataURL = canvas.toDataURL('image/png');
                resolve(dataURL);
            };
            img.onerror = (error) => reject(error);
            img.src = url;
        });
    };

    const downloadPDF = async () => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text("Meal Planner", 20, 20);
        doc.setFontSize(16);

        // Preload images and update the meal list
        const mealsWithImages = await Promise.all(
            add.map(async (meal) => {
                const base64Image = await convertImageToBase64(meal.img);
                return { ...meal, img: base64Image };
            })
        );

        autoTable(doc, {
            startY: 30,
            head: [['Meal Name', 'Image', 'Category']],
            body: mealsWithImages.map(meal => [meal.name, '', meal.category]),
            columnStyles: {
                0: { cellWidth: 60 }, 
                1: { cellWidth: 50 }, 
                2: { cellWidth: 60 }, 
            },
            didDrawCell: (data) => {
                if (data.section === 'body' && data.column.index === 1) {
                    const meal = mealsWithImages[data.row.index];
                    if (meal?.img) {
                        const imgSize = 20;
                        const padding = 10;

                        doc.addImage(meal.img, 'PNG', data.cell.x + padding, data.cell.y + padding, imgSize, imgSize);
                    }
                }
            },
            margin: { top: 10 },
            styles: { cellPadding: 5, minCellHeight: 30 },
        });

        doc.save("meal_planner.pdf");
    };

    return (
        <div>
            <div className={Edit.Mealplanner}>
                <h2>Meal Planner</h2>
                <button onClick={downloadPDF} className={Edit.DownloadButton}>
                    Download All Meals as PDF
                </button>
                {add.length ? (
                    <table className={Edit.table}>
                        <thead>
                            <tr>
                                <th>Meal Name</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {add.map((meal) => (
                                <tr key={meal.id}>
                                    <td>{meal.name}</td>
                                    <td>
                                        <img src={meal.img} alt={meal.name} className={Edit.Mealimg} />
                                    </td>
                                    <td>{meal.category}</td>
                                    <td className={Edit.action}>
                                        <button onClick={() => Del(meal.id)} className={Edit.Delete}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="Empty">No meals added yet.</p>
                )}
            </div>
        </div>
    );
}

export default Mealplanner;
