import config from 'config';


function getArticles() {
    // const requestOptions = {
    //     method: 'GET'
    // };

    // return fetch(`${config.apiUrl}/articles`, requestOptions)
    //     .then(handleResponse)
    //     .then(content => {
    //         // login successful if there's a jwt token in the response
    //         localStorage.setItem('articles', JSON.stringify(content.articles));
    //         return content.articles;
    //     });
    return new Promise(function (resolve, reject) {
        resolve([
            {
                id: 2,
                title: "[NOUS Y SERONS] J'agis pour ma plage",
                author: {
                    firstname: "Laura",
                    lastname: "Turquet",
                },
                img: require("@/assets/images/news/2.png"),
                created_at: new Date(2022, 4, 24),
                content:
                    "A l'occasion de la signature de la Charte de la PLAGE SANS PLASTIQUE du Ministère de la Transition Ecologique, la Ville de Dunkerque organise le 31 mai 2022 sur la place du Centenaire un évènement à destination des scolaires le 31 mai et du grand public le 11 juin.",
                fullContent:
                    "A l'occasion de la signature de la Charte de la PLAGE SANS PLASTIQUE du Ministère de la Transition Ecologique, la Ville de Dunkerque organise le 31 mai 2022 sur la place du Centenaire un évènement à destination des scolaires le 31 mai et du grand public le 11 juin.<br /><br />Associations & organismes présents : J'agis à mon échelle / The SeaCleaners des Hauts de France / CPIE Flandre Maritime / WWF-France / Halle aux sucres / L'Eau du Dunkerquois / / Les Ramasseurs ainsi que les services civiques de la Ville de Dunkerque<br /><br />Rejoignez-nous pour agir à votre échelle pour notre plage et donc notre planète"
            },
            {
                id: 1,
                title: "C'est reparti en 2022!",
                author: {
                    firstname: "Laura",
                    lastname: "Turquet",
                },
                img: require("@/assets/images/news/1.png"),
                created_at: new Date(2022, 4, 24),
                content:
                    "Du 30 juillet au 10 août, Laura, présidente de l'association J'agis à mon échelle, s'élancera pour une nouvelle éco-aventure, un tour du Nord-Pas-de-Calais en courant à la rencontre des initiatives éco-positives.",
                fullContent:
                    "Du 30 juillet au 10 août, Laura, présidente de l'association J'agis à mon échelle, s'élancera pour une nouvelle éco-aventure, un tour du Nord-Pas-de-Calais en courant à la rencontre des initiatives éco-positives.<br /><br />En décembre 2021, elle se lançait le défi de courir 8 marathons en 8 jours dans le but de sensibiliser les plus jeunes aux enjeux environnementaux. Course le matin, interventions dans les écoles l'après-midi, logement chez l'habitant le soir, cette semaine folle fût une aventure enrichissante humainement, émotionnellement et sportivement.<br /><br />C'est pour ces raisons qu'elle décide de profiter de nouveau de ses congés pour se lancer dans une nouvelle aventure, 12 marathons en 12 jours pour partir à la rencontre des initiatives éco-positives, les promouvoir et aider d'autres porteurs de projets à s'en inspirer.<br /><br />Elle partira de Dunkerque, sa ville natale, le 30 juillet pour une boucle de plus de 450 kilomètres dans les départements du Nord et du Pas-de-Calais.<br /><br />Comme pour sa première aventure, elle est à la recherche de logements chez l'habitant dans ses villes étapes mais aussi d'un maximum d'accompagnateurs coureurs ou cyclistes pour l'accompagner lors des étapes. <br /><br />N'hésitez pas à nous contacter si vous êtes intéressés.<br />Préparons nos guiboles, bientôt plus de pétrôle !",
            },
            {
                id: 3,
                title: "[NOUS Y ETIONS] Sensibilisation à l'APF - Foyer de vie Les Salines (Saint-Pol-sur-Mer)",
                author: {
                    firstname: "Laura",
                    lastname: "Turquet",
                },
                img: require("@/assets/images/news/3.png"),
                created_at: new Date(2022, 4, 24),
                content: "Nous sommes intervenus dans le Foyer de vie Les Salines pour une sensibilisation aux écogestes et à l'impact des déchets pour la nature.",
                fullContent: "Nous sommes intervenus dans le Foyer de vie Les Salines pour une sensibilisation aux écogestes et à l'impact des déchets pour la nature.<br />Nous y retournerons prochainement pour des ateliers plus spécifiques comme des fabrications de tawashis et de shampoings solides qui ont particulièrement intéressés les résidents. Nous pouvons tous agir à notre échelle pour notre planète !<br /><br />Si vous souhaitez que nous intervenions dans votre établissement, n'hésitez pas à nous contacter.",
            },
        ]);
    });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const articleService = {
    getArticles,
};
