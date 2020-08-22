"use strict";

/**
 * @author Montalto Logan
 *
 * @date 09-July-2020
 */

// Tableau Associatif

var primaire = {
    P01: {Nom: 'Farnsworth', Prenom: 'Hubert', Niveau: "Primaire", Matieres: "Mathématiques", Tarif: 7},
    P02: {Nom: 'Hoover', Prenom: 'Elizabeth', Niveau: "Primaire", Matieres: "Français", Tarif: 8},
    };

var secondaire = {
    SE01: {Nom: 'Tournesol', Prenom: 'Tryphon', Niveau: "Secondaire", Matieres:"Sciences", Tarif: 9},
};

var superieur = {
    SU01: {Nom: 'Dumbledore', Prenom: 'Albus', Niveau: "Supérieur", Matieres:"Psychologie", Tarif: 14},
    SU02: {Nom: 'Jones', Prenom: 'Indiana', Niveau: "Supérieur", Matieres:"Géographie", Tarif: 9},
    SU03: {Nom: 'Langdon', Prenom: 'Robert', Niveau: "Supérieur", Matieres:"Histoire", Tarif: 7},
    SU04: {Nom: 'McGonagall', Prenom: 'Minerva', Niveau: "Supérieur", Matieres:"Droit", Tarif: 11},
    SU05: {Nom: 'Suresh', Prenom: 'Mohinder', Niveau: "Supérieur", Matieres:"Chimie", Tarif: 10},
    SU06: {Nom: 'Mosby', Prenom: 'Ted', Niveau: "Supérieur", Matieres:"Architecture", Tarif: 13},
    SU07: {Nom: 'Xavier', Prenom: 'Charles', Niveau: "Supérieur", Matieres:"Biologie", Tarif: 15},
};

var niveau = [primaire, secondaire, superieur];

// tri matières

function initialisationPage() {
    console.log(tri());
}

// Liste déroulante dynamique pour le choix de la matière en fonction du niveau de cours

function Choix(form) {
    let n = form.Niveau.selectedIndex;
    form.Matieres.selectedIndex = 0;
    switch (n) {
        case 1 :
             document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var f=document.formMatiere.Matieres;
            for (let i in primaire) {
                f.length++;
                f.options[f.length-1].text = primaire[i].Matieres;
            }
            break;
        case 2 :
            document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var d=document.formMatiere.Matieres;
            for (let i in secondaire) {
                d.length++;
                d.options[d.length-1].text = secondaire[i].Matieres;
            }
            break;
        case 3 :
            document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var c=document.formMatiere.Matieres;
            for (let i in superieur) {
                c.length++;
                c.options[c.length-1].text = superieur[i].Matieres;
            }
            break;
    }
}

// Liste déroulante dynamique pour le choix du professeur en fonction de la matière et du niveau de cours

function Prof(form){
    document.formMatiere.Profs.innerHTML = "<option>--- Choisissez un professeur ---</option>";
    let matieresShort = document.formMatiere.Matieres;
    let matieresSelect = matieresShort.options[matieresShort.selectedIndex].text;

    let niveauShort = document.formMatiere.Niveau;
    let niveauSelect = niveau[niveauShort.selectedIndex-1];

    let y = document.formMatiere.Profs;

    for (let a in niveauSelect) {
        if (niveauSelect[a].Matieres === matieresSelect) {
            y.length++;
            y.options[y.length-1].text = niveauSelect[a].Nom + " " + niveauSelect[a].Prenom;
        }
    }
}

// Création du tableau de réservations de cours particuliers

let tableau = [];
function genererTableau(m, n, o) {
    let matieresTableau = document.formMatiere.Matieres;
    let matieresSelectTableau = matieresTableau.options[matieresTableau.selectedIndex].text;

    let niveauShort = document.formMatiere.Niveau;
    let niveauSelect = niveau[niveauShort.selectedIndex-1];

    let profTableau = document.formMatiere.Profs;
    let profSelectTableau = profTableau.options[profTableau.selectedIndex].text;

    let tarifTot = "";
    for (let i in niveauSelect) {
        var nomComplet = niveauSelect[i].Nom + " " + niveauSelect[i].Prenom;
        if ( nomComplet === profSelectTableau) {
            tarifTot = niveauSelect[i].Tarif * o;
            console.log(tarifTot);
        }
    }
    console.log(matieresSelectTableau);
    console.log(niveauSelect);
    console.log(profSelectTableau);

    let eleve = {nom: m, date: n, matiere: matieresSelectTableau, professeur: profSelectTableau, duree: o, prix: tarifTot};
    tableau.push(eleve);
    console.log(tableau);
}

function ajouterCoursParticuliers(form) {
    let nomEleve = form.nom.value;
    let date = form.date.value;
    let duree = form.duree.value;
    console.log(nomEleve);
    console.log(date);
    console.log(duree);
    genererTableau(nomEleve, date, duree);
    affichageReservations();
    return false;
}

function affichageReservations() {
    let ligne = "";
    for (let p in tableau) {
        ligne += "<tr><td>" + tableau[p].nom + "</td><td>" + tableau[p].date + "</td><td>" + tableau[p].matiere + "</td><td>" + tableau[p].professeur + "</td><td>" + tableau[p].duree + "</td><td>" + tableau[p].prix.toFixed(2) + "€" + "</td></tr>";
        console.log(ligne);
    }
    document.getElementById("cours_particuliers").innerHTML = ligne;
}

// Fontion de tri
let indexTache;
indexTache = Object.keys(superieur);
function tri() {
    indexTache.sort(function(a,b) {
        if (superieur[a].Matieres > superieur[b].Matieres) return 1;
        if (superieur[a].Matieres < superieur[b].Matieres) return -1;
        return 0;
        });
    return indexTache;
}
