import style from "./liste_taches.module.css";
import { nanoid } from 'nanoid';   //npm install nanoid
import { useState } from 'react';


const handleTerminer = () => {
    console.log("évènement 'Terminer' ");
}
const handleSupprimer = () => {
    console.log("évènement 'Supprimer' ");
    

    /* Là ou id.tache === id.tache : supprimer.... */

}

//On décompose l'objet JS "tache" pour qu'il soit plus simple à afficher
const Liste_taches_composant_Item = ({ nom, description, priorite, isFinished }) => (

    <div className={style.tache}>
        
            < div className={style.flex}>
                <h3>{nom}</h3>
                <p>{description}</p>
            </div>
        

        <div className={style.flex}>
            <button className={style.button} onClick={handleTerminer} >Terminer</button>
            <button className={style.button} onClick={handleSupprimer}>Supprimer</button>
        </div>
    </div >
);

const Liste_taches_composant = (props) => {

    /* Hook qui contient le style qui change quand on clique sur "terminer" */
    const [style_terminer, setStyle_Terminer] = useState();

    /* Conversion des données vers des composants React avec la fonction .map de js (renvoie un tableau d'éléments) */
    const tachesJSX = props.tache.map(

        tache => <Liste_taches_composant_Item {...tache} key={tache.id} />
    );

    console.log(tachesJSX);

    /* Affichage de la liste */
    return (
        <>
            <h1>Liste des tâches</h1>
            <ul>
                {tachesJSX}
            </ul>
        </>)
}

export default Liste_taches_composant;