# Exercice 4 - Proptypes

1. Quel est l'intêret de passer des propriétés d'un composant à un autre en utilisant les `Proptypes` de React ?
    Cela permet de mieux nivelé le projet mais aussi d'aporté une clarté dans le code.

2. Nous avons choisis de passer une propriété `title` de type `string` à l'enfant `Header.jsx`. Pouvez vous me citer d'autres types que l'on pourrait passer en tant que propriété à un composant React ?
    Il ya :
        - .data
        - .results
        - .name
3. Lorsque l'on définit un composant React ayant des `props`, il existe un moyen de les ***typer*** et de les rendre ***obligatoire***. Sauriez-vous expliquer ce que `PropTypes` de la librairie React nous propose de faire cela ?
    PropTypes définit le type et les propriété obligatoires.

4. Lorsqu'une propriété d'un composant est dites ***non-obligatoire***, quelle serait selon vous le meilleur moyen de définir une valeur par défaut à un composant ? ***Pensez aux `PropTypes` de la lib React.***
    optional**type**": React.PropTypes.**type**,
