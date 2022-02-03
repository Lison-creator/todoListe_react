import logo from './logo.svg';
import './App.css';
import { nanoid } from 'nanoid';   //npm install nanoid
import { useState } from 'react';
import Ajout_tache_formulaire from "./components/ajouter_tache/ajouter_tache";
import Liste_taches_composant from "./components/liste_taches/liste_taches";

function App() {

  const [liste_taches, setListeTaches] = useState(
    [
      { id: nanoid(), nom: "Courses", description: "Aller au Delhaize", priorite: "urgent", isFinished: true },
      { id: nanoid(), nom: "Pharmacie", description: "Ordonnance à donner", priorite: "normal", isFinished: false },
      { id: nanoid(), nom: "Bibliothèque", description: "Rendre les livres à Ixelles", priorite: "normal", isFinished: false },
      { id: nanoid(), nom: "Plantes", description: "Arroser les plantes", priorite: "urgent", isFinished: false },
    ]
  )


  /* Ici: ce qu'il se passe quand on ajoute */

  const handleNouvelleTache = (nouvelleTache) => {

    console.log("handleNouvelleTache", nouvelleTache);
    setListeTaches(l => l.concat(nouvelleTache));
  }

  const handleTerminer = (props) => {
    /* //TODO Ecrire ce qu'il se passe quand une tache est terminée = supprimer le bouton */

    /* Le style change: */
    props.isFinished = true;
    console.log("évènement 'Terminer' ");
  }

  const handleSupprimer = (thisTache) => {
    /* //TODO Ecrire ce qu'il se passe quand une tache est supprimée = supprimer de la liste */

    setListeTaches(l => l.pop(thisTache));
    console.log("évènement 'Supprimer' ");

  }

  return (
    < div className="App" >
      <h1>To-Do Liste</h1>
      <div className="flex"> {/* Flex ici */}

        <Ajout_tache_formulaire onAjoutTache={handleNouvelleTache} />
        <Liste_taches_composant onTerminerTache={handleTerminer} onSupprimerTache={handleSupprimer} tache={liste_taches} />

      </div>

      <footer>©LisonFerné | 2022</footer>

    </div>

  );
}

export default App;

/* Lier la liste au formulaire grace aux onChange */