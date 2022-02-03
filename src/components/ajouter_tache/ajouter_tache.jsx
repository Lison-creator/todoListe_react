import style from "./ajouter_tache.module.css";
import { useState } from 'react';
import classNames from "classnames";
import { nanoid } from "nanoid";

const Ajout_tache_formulaire = (props) => {

    const [nom, setNom] = useState("");
    const [description, setDescription] = useState("");
    const [priorite, setPriorite] = useState("normal");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: nanoid(),
            nom,
            description,
            priorite,
            isFinished : false
        }
        /* Le but ==> prévenir le parent (l'app) quand on fait quelque chose */

        console.log("Ajouter une tache");
        props.onAjoutTache(data);


        handleResetForm();

        /* Priorité: if sur la variable priorité
        Aussi: si le submit est onclick; gérer l'évènement OnClick sur le submit. */

    }

    /* Facultatif: bouton reset du formulaire */

    const handleResetForm = (e) => {

        setNom('');
        setDescription('');
        setPriorite('normal');

    }
    return (
        <>
        <div className={style.ajouterTacheBloc}>
            <h2>Ajouter une tâche</h2>
            <form className={style.myForm}>
                <div>
                    {/* Nom */}
                    <div className={style.ajouterTexte}>
                        <label htmlFor="nom">Nom de la tâche</label>

                        {/* On cherche à lier le State et le formulaire de sorte que l'html modifie le State */}
                        <input type="text" id="nom" onChange={(e) => setNom(e.target.value)} value={nom} />
                    </div>

                    {/* Description */}
                    <div className={style.description}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="décrivez la tâche" onChange={(e) => setDescription(e.target.value)} value={description}> Description</textarea>
                    </div>

                    {/* Priorité */}
                    <div>
                        <label htmlFor="priorite">Priorité</label>
                        <select id="priorite" onChange={(e) => setPriorite(e.target.value)} value={priorite}>
                            <option value="normal">Normal</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>
                </div>

                <div>
                    <input onClick={handleSubmit} className={style.button} type="submit" value="Ajouter" />
                </div>
            </form>
        </div>
            

        </>);
};


Ajout_tache_formulaire.defaultProps = {
    onAjoutTache: () => { } /* NOOP */  
}

export default Ajout_tache_formulaire;

