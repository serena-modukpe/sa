import Swal from "sweetalert2";
import $ from "jquery"

// Fonction pour afficher les messages d'erreur avec SweetAlert
export function afficherMessagesErreur(errors) {
    let messageErreur = '';

    // Parcourir les clés de l'objet erreur
    for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
            // Concaténer les messages d'erreur pour chaque clé
            messageErreur += `${key}: ${errors[key].join('<br>')}\n`; // Utilisation de '<br>' pour aller à la ligne
        }
    }

    // Afficher les messages d'erreur dans une boîte de dialogue SweetAlert
    Swal.fire({
        icon: 'error',
        title: 'Erreur de validation',
        html: messageErreur,
        toast: true,
        position: "top-end",
        timer: 10000,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Fermer',
        timerProgressBar: true,
    });
}



export function afficherMessagesSuccess(message) {
    Swal.fire({
        icon: "success",
        title: message,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "green",
        color: "white",
        iconColor: "white",
    });
}


export function afficherOneMessageError(message) {
    Swal.fire({
        icon: "error",
        title: message,
    });
}






export function setDataTable(){
     // initialize datatable
     $(document).ready(function () {
        $('.data-table').DataTable({
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            layout: {
                topStart: 'buttons'
            },
            "ordering": true,
            "language": {
                "sProcessing": "Traitement en cours ...",
                "sLengthMenu": "Afficher _MENU_ lignes",
                "sZeroRecords": "Aucun résultat trouvé",
                "sEmptyTable": "Aucune donnée disponible",
                "sLengthMenu": "Afficher &nbsp; _MENU_ &nbsp;",
                "sInfo": "_START_ ... _END_/_TOTAL_ &eacute;l&eacute;ments",
                "sInfoEmpty": "Aucune ligne affichée",
                "sInfoFiltered": "(Filtrer un maximum de _MAX_)",
                "sInfoPostFix": "",
                "sSearch": "Recherche",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Chargement...",
                "oPaginate": {
                    "sFirst": "Premier",
                    "sLast": "Dernier",
                    "sNext": "Suivant",
                    "sPrevious": "Précédent"
                },
                "oAria": {
                    "sSortAscending": ": Trier par ordre croissant",
                    "sSortDescending": ": Trier par ordre décroissant"
                }

            },
            dom: '<"float-left"l><"float-right"f>Brti<"float-right"p>',
            //   stateSave : true,
            order: [
                [0, "asc"]
            ],
            processing: true,
            serverSide: false,
            retrieve: true,
            //paging: false
        });
    
    });
}

export function filterStatut(liste_statuts) {
    const filteredData = liste_statuts.filter((option) => (option.libelle == "ACTIF" || option.libelle == "INACTIF" || option.libelle == "En attente"))

    return filteredData;
}
