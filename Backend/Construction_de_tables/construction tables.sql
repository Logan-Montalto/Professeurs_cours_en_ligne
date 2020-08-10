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
    constraint pk_Professeurs primary key (IdProfesseurs)
    constraint pk_Professeurs_Niveau Foreign key (idNiveau) references Niveau_cours (idNiveau)
);

create table Matieres (
    idMatieres char(3) not null,
    Matieres varchar(30) not null,
    constraint pk_Matieres primary key (IdMatieres)
);

create table Tranche_prix (
    idPrix ,

    constraint pk_Tranche_prix primary key (IdPrix)
);

create table Eleves (
    idEleves integer not null default AUTOINCREMENT,
    NomEleves varchar(50) not null,
    MDP varchar(50) not null,
    Nom varchar(40) not null,
    Prenom varchar(40) not null,
    constraint pk_Eleves primary key (IdEleves)
);

create table Profs_inscription (
    IdProfs integer not null default AUTOINCREMENT,
    NomProfs varchar(50) not null,
    MDP varchar(50) not null,
    Nom varchar(40) not null,
    Prenom varchar(40) not null,
    constraint pk_Profs_inscription primary key (IdUtilisateur)
);
