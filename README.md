# Excuses de Dev

**Description**

"Excuses de Dev" est une application qui génère des excuses aléatoires. 

## Backend

Le backend est responsable de la gestion des excuses disponibles et de l'ajout de nouvelles excuses à la liste.

    Route de liste d'excuses: Permet de récupérer une liste d'excuses.
    Route d'ajout d'excuse: Permet d'ajouter une nouvelle excuse à la liste.

## Frontend

Le frontend offre une interface minimaliste pour générer et afficher les excuses.

L'interface comprend un titre, une phrase générée et un bouton pour générer une nouvelle excuse. Une fois la phrase générée, elle est affichée au centre de l'écran avec un bouton en dessous pour en générer une nouvelle.


**Routes**

    "/": Page principale "Les excuses de dev".
    "/lost": Page affichant "i’m lost" avec un gif au centre de la page. Redirection vers "/" après 5 secondes.
    "*": Page d’erreur 404.
    “/$http_code": Page affichant le message correspondant au code HTTP.

**Génération d'excuses**

Le bouton sélectionne aléatoirement une phrase à partir d'un tableau récupéré depuis le backend. Il vérifie également que la même phrase n'est pas renvoyée deux fois.

Un bouton ouvre une modale permettant de saisir une nouvelle excuse. En appuyant sur "Valider", l'excuse est enregistrée dans le backend et devient immédiatement disponible.

**Illusion de labeur**

Lors du clic sur le bouton, un loader est affiché avec un temps de chargement aléatoire entre 1 et 5 secondes avant d'afficher le résultat.

## Technologies Utilisées

    Backend: Node.js avec Express.js
    Frontend: React
    Stockage des excuses: Base de données MySQL

## Installation

    Cloner le dépôt Git.
    Installer les dépendances du backend avec npm install.
    Installer les dépendances du frontend avec npm install.
    Configurer la base de données grâce au ficher BDD.docx.
    Démarrer le serveur backend avec nodemon ./app.js .
    Démarrer le serveur frontend avec npm start.