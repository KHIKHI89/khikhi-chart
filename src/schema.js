export const schema =

{
  "VentesEmploye": {
    "table": "mv_stat_ventes_benef",
    "auth": [[]],
    "columns": {
      "Commande": {
        "type": "int(11)",
        "label": "Commande",
        "suffix": "",
        "filterable": false,
        "col": "Commande",
        "icon": "",
        "length": 1
      },
      "idLigneCommande": {
        "type": "int",
        "col": "Ligne_commande"
      },
      "DateCreation": {
        "type": "date",
        "label": "Date création",
        "suffix": "",
        "filterable": false,
        "col": "DateCreation",
        "icon": "date_range",
        "length": 2
      },
      "HeureCreation": {
        "type": "time",
        "label": "Heure création",
        "col": "HeureCreation",
        "icon": "schedule",
        "length": 1
      },
      "DateCloture": {
        "type": "date",
        "label": "Date cloture",
        "suffix": "",
        "filterable": false,
        "col": "DateCloture",
        "icon": "date_range",
        "length": 2
      },
      "HeureCloture": {
        "type": "time",
        "label": "Heure cloture",
        "col": "HeureCloture",
        "icon": "schedule",
        "length": 1
      },
      "Type":{
        "type":"set(Vente,Retour client, Virtuelle)",
        "col":"type",
        "label":"Type de commande"
      },
      "Pack":{
        "type":"varchar(20)",
        "col":"pack",
        "label":"Pack",
        "icon":"bookmarks"
      },
      "modePaiement":{
        "type":"set(Comptant,A terme,Par chèque)",
        "col":"mode_paiement"
      },
      "Etat":{
        "type":"enum(Préparée,Clôturée)",
        "col":"Etat"
      },
      "Client": {
        "type": "varchar(50)",
        "label": "Client",
        "suffix": "",
        "filterable": false,
        "col": "Client",
        "icon": "account_box",
        "length": 3
      },
      "CatClient":{
        "type":"varchar",
        "col":"categorie",
        "label":"Catégorie client",
        "icon":"contacts"
      },
      "Commune":{
        "type":"varchar",
        "col":"commune"
      },
      "Wilaya":{
        "type":"varchar",
        "col":"wilaya"
      },
      "idMagasin": {
        "type": "foreigns",
        "col": "id_magasin",
        "label": "Magasin",
        "length": 2,
        "foreign": {
          "table": "magasin",
          "primary": "id",
          "label": "intitule"
        }
      },
      "idVendeur": {
        "type": "foreigns",
        "col":"idVendeur",
        "label":"Vendeur",
        "icon":"directions_run",
        "foreign":{
          "table":"employe",
          "primary":"id",
          "label":"nom"
        }
      },
      "Vendeur": {
        "type": "varchar(101)",
        "label": "Vendeur",
        "suffix": "",
        "filterable": false,
        "col": "Vendeur",
        "icon": "directions_run",
        "length": 2
      },
      "idPreparateur":{
        "type":"foreigns",
        "col":"id_preparateur",
        "label":"Préparateur",
        "icon":"directions_run",
        "foreign":{
          "table":"employe",
          "primary":"id",
          "label":"nom"
        }
      },
      "Famille": {
        "type": "varchar(50)",
        "label": "Famille",
        "suffix": "",
        "filterable": false,
        "col": "Famille",
        "icon": "devices",
        "length": 2
      },
      "Marque": {
        "type": "varchar(50)",
        "label": "Marque",
        "suffix": "",
        "filterable": false,
        "col": "Marque",
        "icon": "printerest",
        "length": 2
      },
      "Modele": {
        "type": "varchar(50)",
        "label": "Modéle",
        "suffix": "",
        "filterable": false,
        "col": "Article",
        "icon": "category",
        "length": 2
      },
      "Couleur": {
        "type": "varchar(50)",
        "label": "Couleur",
        "suffix": "",
        "filterable": false,
        "col": "Couleur",
        "icon": "color",
        "length": 1
      },
      "Designation":{
        "type":"varchar",
        "col":"designation"
      },
      "idArticle": {
        "type": "int",
        "col": "idArticle",
        "length": 1
      },
      "Catalogue1":{
        "type":"varchar(255)",
        "col":"catalogue1"
      },
      "Catalogue2":{
        "type":"varchar(255)",
        "col":"catalogue2"
      },
      "Catalogue3":{
        "type":"varchar(255)",
        "col":"catalogue3"
      },
      "Cout": {
        "type": "decimal(12,2)",
        "label": "Cout",
        "suffix": "",
        "filterable": false,
        "col": "Cout",
        "icon": "money_off",
        "length": 1,
        "cond":[[
          {
            "variable":"autorisations",
            "operator":"contains",
            "value":503
          }
        ]]
      },
      "PU": {
        "type": "decimal(10,2)",
        "label": "Prix unitaire",
        "suffix": " da",
        "filterable": false,
        "col": "PU",
        "icon": "attach_money",
        "length": 1
      },
      "Reduction": {
        "type": "decimal(12,2)",
        "label": "Réduction",
        "suffix": "",
        "filterable": false,
        "col": "Reduction",
        "icon": "trending_down"
      },
      "Quantite": {
        "type": "decimal(12,2)",
        "label": "Quantité",
        "suffix": "",
        "filterable": false,
        "col": "Quantite",
        "icon": "grain",
        "length": 1
      },
      "Gratuits": {
        "type": "int(7)",
        "label": "Gratuits",
        "col": "qte_bonus",
        "icon": "redeem"
      },
      "PT": {
        "type": "decimal(10,2)",
        "label": "Prix Total",
        "col": "PT",
        "icon": "money",
        "suffix": " da"
      },
      "Benefice": {
        "type": "decimal(10,2)",
        "label": "Bénéfice",
        "col": "Benefice",
        "icon": "euro",
        "suffix": " da",
        "cond":[[
          {
            "variable":"autorisations",
            "operator":"contains",
            "value":304
          }
        ]]
      },
      "lat":{
        "type":"float",
        "col":"lat",
        "label":"Latitude"
      },
      "lng":{
        "type":"float",
        "col":"lng",
        "label":"Longitude"
      }
    },
    "where": [
      [
        {
          "col":"Etat",
          "operator":"<>",
          "value":"Annulée"
        },
        {
          "col": "Type",
          "operator": "<>",
          "value": "Retour fournisseur"
        },
        {
          "col":"idMagasin",
          "operator":"in",
          "value":"session(Mags)"
        }
      ],
      [
        {
          "col":"Etat",
          "operator":"<>",
          "value":"Annulée"
        },
        {
          "col": "Type",
          "operator": "<>",
          "value": "Retour fournisseur"
        },
        {
          "col":"idVendeur",
          "operator":"in",
          "value":"session(Users)"
        }
      ]
    ],
    "limit": [],
    "name": "Ventes",
    "cache_delay": "300"
  }}