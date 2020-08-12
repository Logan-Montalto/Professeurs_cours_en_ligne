Create table Niveau_cours (
    idNiveau char(3) not null,
    Niveau varchar(50) not null,
    constraint pk_Niveau_cours primary key (IdNiveau)
);

create table Professeurs (
    idProfesseurs char(3) not null,
    Nom varchar(30) not null,
    Prenom varchar(30) not null,
    Image long varchar not null,
    idNiveau char(3) not null,
    constraint pk_Professeurs primary key (IdProfesseurs),
    constraint pk_Professeurs_Niveau_cours Foreign key (idNiveau) references Niveau_cours (idNiveau)
);

create table Matieres (
    idMatieres char(3) not null,
    Matieres varchar(30) not null,
    constraint pk_Matieres primary key (IdMatieres)
);

create table Matieres_professeurs (
    idProfesseurs char(3) not null,
    idMatieres char(3) not null,
    constraint pk_Matieres_professeurs primary key (idProfesseurs, idMatieres),
    constraint pk_Matieres_professeurs_professeurs foreign key (idProfesseurs) references Professeurs (idProfesseurs),
    constraint pk_Matieres_professeurs_matieres foreign key (idMatieres) references Matieres (idMatieres)
);

create table Tranche_prix (
    idPrix char(4) not null,
    Prix varchar(30) not null,
    constraint pk_Tranche_prix primary key (IdPrix)
);

create table Tranche_prix_profs (
    idProfesseurs char(3) not null,
    idPrix char(4) not null,
    constraint pk_Tranche_prix_profs primary key (idProfesseurs, idPrix),
    constraint pk_Tranche_prix_profs_professeurs foreign key (idProfesseurs) references Professeurs (idProfesseurs),
    constraint pk_Tranche_prix_profs_tranche_prix foreign key (idPrix) references Tranche_prix (idPrix)
);

create table Eleves (
    idEleves integer not null default AUTOINCREMENT,
    NomEleves varchar(50) not null,
    MDP varchar(50) not null,
    Nom varchar(40) not null,
    Prenom varchar(40) not null,
    constraint pk_Eleves primary key (IdEleves)
);

'
create table Profs_inscription (
    IdProfesseurs integer not null default AUTOINCREMENT,
    NomProfs varchar(50) not null,
    MDP varchar(50) not null,
    Nom varchar(40) not null,
    Prenom varchar(40) not null,
    constraint pk_Profs_inscription primary key (IdProfs)
);'

create table Cours_particuliers (
    idProfesseurs char(3) not null,
    idNiveau varchar(50) not null,
    idMatieres varchar(30) not null,
    idEleves varchar(50) not null,
    constraint pk_Cours_particuliers primary key (idProfesseurs, idNiveau, idMatieres, idEleves),
    constraint pk_Cours_particuliers_professeurs foreign key (idProfesseurs) references Professeurs (idProfesseurs),
    constraint pk_Cours_particuliers_Niveau_cours foreign key (idNiveau) references Niveau_cours (idNiveau),
    constraint pk_Cours_particuliers_matieres foreign key (idMatieres) references Matieres (idMatieres),
    constraint pk_Cours_particuliers_Eleves foreign key (idEleves) references Eleves (idEleves)
);
