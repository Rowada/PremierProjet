function inscription() {
    var user = {};

    //
    // AFFECTE LES VALEURS A UN OBJET USER
    //

    user.name = document.getElementById("name").value;
    user.lastname = document.getElementById("lastname").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    user.connected = false;

    //
    //  RECUPERE LA LISTE D'OBJET UTILISATEUR
    //

    var users = recupListeUsers();

    //
    //  REGARDE SI L'ADRESSE MAIL EST DEJA UTILISER SI OUI ALERT DEJA UTILISER
    //

    for (var use in users) {
        if (users[use].email == document.getElementById("email").value) {
            alert("Cette adresse mail est déjà utiliser pour un autre compte.")
        } else {
            users.push(user);
            saveUsers(users);
        }
    }
}