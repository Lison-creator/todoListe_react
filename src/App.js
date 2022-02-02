import logo from './logo.svg';
import './App.css';
import { nanoid } from 'nanoid';   //npm install nanoid
import { useState } from 'react';
import Ajout_tache_formulaire from "./components/ajouter_tache/ajouter_tache";
import Liste_taches_composant from "./components/liste_taches/liste_taches";

function App() {

  const liste_taches = [
    { id: nanoid(), nom: "Courses", description: "Aller au Delhaize", priorite: "urgent", isFinished:true },
    { id: nanoid(), nom: "Pharmacie", description: "Ordonnance à donner", priorite: "normal", isFinished:false },
    { id: nanoid(), nom: "Bibliothèque", description: "Rendre les livres à Ixelles", priorite: "normal", isFinished:false },
    { id: nanoid(), nom: "Plantes", description: "Arroser les plantes", priorite: "urgent", isFinished:false },
]
/* ajouter "is finished" */
console.log(liste_taches);


  return (< div className="App" >
      
      <h3>To-Do Liste</h3>
      <Ajout_tache_formulaire/>
      <Liste_taches_composant tache={liste_taches}/>

      <footer>©LisonFerné | 2022</footer>

  </div>

  );
}

export default App;

/* Lier la liste au formulaire grace aux onChange */