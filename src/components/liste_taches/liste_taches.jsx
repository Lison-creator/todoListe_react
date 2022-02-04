import style from "./liste_taches.module.css";
import { nanoid } from 'nanoid';   //npm install nanoid
import { useState } from 'react';
import classNames from "classnames";



//On décompose l'objet JS "tache" pour qu'il soit plus simple à afficher
const Liste_taches_composant_Item = ({ id, nom, description, priorite, isFinished, onSupprimerTache, onTerminerTache }) => {
/* onSupprimerTache doit passer en paramètre car le destructuring ne permet pas de récupérer les propos */

    /* On applique ce style si la fonction "handleTerminer" est lancée */
    const styleTerminer = classNames({
        [style.tache]: true,
        [style.terminer]: isFinished
    })
    /* On applique ce style sur le select "urgent" */
    const stylePriorite = classNames({
        [style.priorite]: priorite === "urgent"
    })

    const handleTerminer = () => {
        const data = {
            id,
            nom,
            description,
            priorite,
            isFinished
        }

        onTerminerTache(data);
    }
    const handleSupprimer = () => {

        const data = {
            id,
            nom,
            description,
            priorite,
            isFinished
        }

        onSupprimerTache(data)
    }

    /* Affichage d'une tache : */


    return (

        <div className={styleTerminer} >

            <div className={style.flex}>
                <h3>{nom}</h3>
                <p>{description}</p>
                <p className={stylePriorite}>{priorite}</p>
            </div>


            <div className={style.flex}>
                <button className={style.button} onClick={handleTerminer} disabled = {isFinished} >Terminer</button>
                <button className={style.button} onClick={handleSupprimer}>Supprimer</button>
            </div>
        </div >
    )
};


const Liste_taches_composant = (props) => {


    /* Conversion des données vers des composants React avec la fonction .map de js (renvoie un tableau d'éléments) */
    const tachesJSX = props.tache.map(

        tache => <Liste_taches_composant_Item {...tache} key={tache.id}
                    onSupprimerTache={props.onSupprimerTache} onTerminerTache={props.onTerminerTache}/>
                    /* On est obligé de renvoyer le composant à son parent, on ne peut pas renvoyer à l'App directement (grand parent) */
    );

    console.log(tachesJSX);

    /* Affichage de la liste */
    return (
        <>
            <div>
                <h2>Liste des tâches</h2>
                <ul>
                    {tachesJSX}
                </ul>
            </div>

        </>)
}


Liste_taches_composant.defaultProps = {
    onTerminerTache: () => { } /* NOOP */
}
Liste_taches_composant.defaultProps = {
    onSupprimerTache: () => { } /* NOOP */
}
export default Liste_taches_composant;