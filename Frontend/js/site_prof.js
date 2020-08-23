"use strict";

/**
 * @author Montalto Logan
 *
 * @date 09-July-2020
 */

/* Tableau Associatif */

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

/**
 * Fonction qui va appeler les fonctions de tri au chargement de la page.
 */

function initialisationPage() {
    triPrimaire();
    triSecondaire();
    triSuperieur();
}

/**
 * Fonction qui exécute les instructions correspondantes au cas sélectionné avec à l'instruction switch
 *
 * @param form [La fonction sera appelée par l'évènement onChange]
 */

function Choix(form) {
    let n = form.Niveau.selectedIndex;
    form.Matieres.selectedIndex = 0;
    switch (n) {
        case 1 :
             document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var f=document.formMatiere.Matieres;
            for (let i = 0; i < indexPrimaire.length; i++) {
                f.length++;
                f.options[f.length-1].text = primaire[indexPrimaire[i]].Matieres;
            }
            break;
        case 2 :
            document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var d=document.formMatiere.Matieres;
            for (let i = 0; i < indexSecondaire.length; i++) {
                d.length++;
                d.options[d.length-1].text = secondaire[indexSecondaire[i]].Matieres;
            }
            break;
        case 3 :
            document.formMatiere.Matieres.innerHTML = "<option>--- Choisissez une matière ---</option>";
            var c=document.formMatiere.Matieres;
            for (let i = 0; i < indexSuperieur.length; i++) {
                c.length++;
                c.options[c.length-1].text = superieur[indexSuperieur[i]].Matieres;
            }
            break;
    }
}

/**
 * Fonction qui affiche les profs disponibles en fontion du niveau et de la matière
 *
 * @param form [La fonction sera appelée par l'évènement onChange]
 */

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

/**
 * Fonction qui va générer le tableau associatif de la réservation
 * avec le texte sélectionné de la liste déroulante des matières, le texte sélectionné de la liste déroulante des professeurs,
 * ainsi que le tarif total (le tarif du professeur étant récupéré via la liste déroulante des niveaux et des professeurs).
 * Ce tarif sera multiplié par la variable utilisée pour la durée pour avoir le prix total du cours particuliers.
 *
 * @param m [Nom de l'élève entré dans le formulaire]
 * @param n [Date sélectionnée dans le formulaire]
 * @param o [Durée sélectionnée dans le formulaire]
 */

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
        }
    }

    let eleve = {nom: m, date: n, matiere: matieresSelectTableau, professeur: profSelectTableau, duree: o, prix: tarifTot};
    tableau.push(eleve);
}

/**
 * Fonction qui affiche le tableau en tableau HTML
 * Dans le tableau, il y aura le nom, la date, la matière, le professeur, la durée en heure et le prix total du cours
 */

function affichageReservations() {
    let ligne = "";
    for (let p in tableau) {
        ligne += "<tr><td>" + tableau[p].nom + "</td><td>" + tableau[p].date + "</td><td>" + tableau[p].matiere + "</td><td>" + tableau[p].professeur + "</td><td>" + tableau[p].duree + " h " + "</td><td>" + tableau[p].prix.toFixed(2) + "€" + "</td></tr>";
    }
    document.getElementById("cours_particuliers").innerHTML = ligne;
}

/**
 * Fonction qui va récupérer les valeur du formulaire et les afficher
 * La fonction appelle la fonction genererTableau() avec les paramètres nomEleve, date, duree
 * La fonction appelle la fonction affichageReservation()
 *
 * @param form [La fonction sera appelée par l'évènement onSubmit]
 * @returns {boolean}
 */

function ajouterCoursParticuliers(form) {
    let nomEleve = form.nom.value;
    let date = form.date.value;
    let duree = form.duree.value;
    genererTableau(nomEleve, date, duree);
    affichageReservations();
    return false;
}

/**
 * Fonction de tri par ordre alphabétique pour les professeurs du niveau Primaire
 */

let indexPrimaire;
indexPrimaire = Object.keys(primaire);
function triPrimaire() {
    indexPrimaire.sort(function(a,b) {
        if (primaire[a].Matieres > primaire[b].Matieres) return 1;
        if (primaire[a].Matieres < primaire[b].Matieres) return -1;
        return 0;
    });
    return indexPrimaire;
}

/**
 * Fonction de tri par ordre alphabétique pour les professeurs du niveau Secondaire
 */

let indexSecondaire;
indexSecondaire = Object.keys(secondaire);
function triSecondaire() {
    indexSecondaire.sort(function(a,b) {
        if (secondaire[a].Matieres > secondaire[b].Matieres) return 1;
        if (secondaire[a].Matieres < secondaire[b].Matieres) return -1;
        return 0;
    });
    return indexSecondaire;
}

/**
 * Fonction de tri par ordre alphabétique pour les professeurs du niveau Supérieur
 */

let indexSuperieur;
indexSuperieur = Object.keys(superieur);
function triSuperieur() {
    indexSuperieur.sort(function(a,b) {
        if (superieur[a].Matieres > superieur[b].Matieres) return 1;
        if (superieur[a].Matieres < superieur[b].Matieres) return -1;
        return 0;
        });
    return indexSuperieur;
}



