"use strict";

/**
 * @author Montalto Logan
 *
 * @date 09-July-2020
 */

// Liste déroulante dynamique

function Choix(form) {
    let i = form.Niveau.selectedIndex;
    if (i === 0) {
        for (i=0;i<8;i++) {
            form.Matieres.options[i].text="";
        }
        return;
    }
    form.Matieres.selectedIndex = 0;
    switch (i) {
        case 1 :
            var txt = new Array ('Français','Mathématiques');
            form.Matieres.options[0].text="-- Choisissez une matière ---";
            var f=document.formMatiere.Matieres;
            for (i=0;i<txt.length;i++) {
                f.length++;
                f.options[f.length-1].text = txt[i];
                form.Matieres.options[i+1].text=txt[i];
            }
            break;
        case 2 :
            var txt = new Array ('Sciences');
            form.Matieres.options[0].text="-- Choisissez une matière ---";
            var d=document.formMatiere.Matieres;
            for (i=0;i<txt.length;i++) {
                d.length++;
                d.options[d.length-1].text = txt[i];
                form.Matieres.options[i+1].text=txt[i];
            }
            break;
        case 3 :
            var txt = new Array ('Architecture','Biologie','Chimie', 'Droit', 'Géographie', 'Histoire', 'Psychologie');
            form.Matieres.options[0].text="-- Choisissez une matière ---";
            var c=document.formMatiere.Matieres;
            for (i=0;i<txt.length;i++) {
                c.length++;
                c.options[c.length-1].text = txt[i];
                form.Matieres.options[i+1].text=txt[i];
            }
            break;
    }
}

var coursParticuliers = new Object();

function initialiserPage() {
    coursParticuliers = {};
    document.querySelectorAll("section")[1].innerHTML = "<table><thead><th>Nom de l'élève</th><th>Date du cours</th><th>Professeur</th><th>Nombre d'heures de cours</th><th>Prix Total</th></thead><tbody id='cours_particuliers'></tbody></table>";
}
