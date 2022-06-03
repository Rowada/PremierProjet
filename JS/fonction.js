
//
//  FONCTION DE CREATION D'UN COOKIE
//

function setCookie(name, value, days) {
    var expires ="";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

//
//  RECUPERATION DU COOKIE
//

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while ( c.charAt(0) == ' ' ) c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

//
// SAUVEGARDE DE L'INSCRIPTION DANS LE COOKIE
//

function saveUsers(users) {
    
    var cookiePersos = JSON.stringify(users, 'UTF-8');
    setCookie('cookiePersos', cookiePersos, 150);
}

//
// RECUPERER LA CHAINE DU COOKIE ET LA CONVERTIE EN OBJET
//

function recupListeUsers() {
    var users = getCookie("cookiePersos");
    if (users) {
        return users = JSON.parse(users, 'UTF-8');
    } else {
        return users = [];
    }
}

//
// CONNECTION DE L'UTILISATEUR
//

function connection() {
    
    const email = document.getElementById('emailco');
    const password = document.getElementById('passwordco');
    
    var users = recupListeUsers();

    for (var use in users) {
        //
        // COMPARE L'ADRESSE MAIL DE L'INPUT AUX ADRESSES MAIL DANS L'OBJET
        //
        // RECUPERE LE BON OBJET UTILISATEUR SINON RENVOIE QUE L'ADRESSE EST INTROUVABLE
        //
        if (users[use].email == email.value) {
            //
            // COMPARE LE MOT DE PASSE DANS L'OBJET CONNU A CELUI ENTRER PAR LE CLIENT
            //
            // SI LE MOT DE PASSE EST CORRECTE AFFICHE LE PRENOM DE L'UTILISATEUR SINON RENVOIE MOT DE PASSE INCORRECT
            //
            if (users[use].password == password.value) {
                //
                // CREER ET AFFICHER LA CARD HTML ICI
                //
                alert(users[use].name);
            } else {
                alert("Mot de passe incorrect veuillez reessayer");
            }
        } else {
            alert("Cette email nous est inconnu");
        }
    }
}