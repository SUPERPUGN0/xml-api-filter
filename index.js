// browser lang
const htmlTag = document.querySelector('html');
const lang = htmlTag.lang;

// check browser languageg
let parsedLang;
switch (lang) {
    case 'it-IT':
        parsedLang = 'it';
        break;
    case 'fr-FR':
        parsedLang = 'fr';
        break;
    case 'de-DE':
        parsedLang = 'de';
        break;
    case 'en-US':
        parsedLang = 'en';
        break;
    default:
        parsedLang = 'de';
}

// regions object
const regions = {
    0: {
        de: 'Aargau',
        fr: 'Argovie',
        it: 'Argovia',
        en: 'Aargau',
        id: 8
    },
    1: {
        de: 'Appenzell Ausserrhoden',
        fr: 'Appenzell Rhodes-Extérieures',
        it: 'Appenzello Esterno',
        en: 'Appenzell Ausserrhoden',
        id: 22
    },
    2: {
        de: 'Appenzell Innerrhoden',
        fr: 'Appenzell Rhodes-Intérieures',
        it: 'Appenzello Interno',
        en: 'Appenzell Innerrhoden',
        id: 22
    },
    3: {
        de: 'Basel-Landschaft',
        fr: 'Bâle-Campagne',
        it: 'Basilea Campagna',
        en: 'Basel-Landschaft',
        id: 10
    },
    4: {
        de: 'Basel-Stadt',
        fr: 'Bâle-Ville',
        it: 'Basilea Città',
        en: 'Basel-Stadt',
        id: 10
    },
    5: {
        de: 'Bern',
        fr: 'Berne',
        it: 'Berna',
        en: 'Bern',
        id: 9
    },
    6: {
        de: 'Freiburg',
        fr: 'Fribourg',
        it: 'Friburgo',
        en: 'Fribourg',
        id: 18
    },
    7: {
        de: 'Genf',
        fr: 'Genève',
        it: 'Ginevra',
        en: 'Geneva',
        id: 16
    },
    8: {
        de: 'Glarus',
        fr: 'Glaris',
        it: 'Glarona',
        en: 'Glarus',
        id: 11
    },
    9: {
        de: 'Graubünden',
        fr: 'Grisons',
        it: 'Grigioni',
        en: 'Graubünden',
        id: 24
    },
    10: {
        de: 'Jura',
        fr: 'Jura',
        it: 'Giura',
        en: 'Jura',
        id: 17
    },
    11: {
        de: 'Luzern',
        fr: 'Lucerne',
        it: 'Lucerna',
        en: 'Lucerne',
        id: 11
    },
    12: {
        de: 'Neuenburg',
        fr: 'Neuchâtel',
        it: 'Neuchâtel',
        en: 'Neuchâtel',
        id: 17
    },
    13: {
        de: 'Nidwalden',
        fr: 'Nidwald',
        it: 'Nidvaldo',
        en: 'Nidwalden',
        id: 11
    },
    14: {
        de: 'Obwalden',
        fr: 'Obwald',
        it: 'Obvaldo',
        en: 'Obwalden',
        id: 11
    },
    15: {
        de: 'St. Gallen',
        fr: 'Saint-Gall',
        it: 'San Gallo',
        en: 'St. Gallen',
        id: 22
    },
    16: {
        de: 'Schaffhausen',
        fr: 'Schaffhouse',
        it: 'Sciaffusa',
        en: 'Schaffhausen',
        id: 6
    },
    17: {
        de: 'Schwyz',
        fr: 'Schwytz',
        it: 'Svitto',
        en: 'Schwyz',
        id: 11
    },
    18: {
        de: 'Solothurn',
        fr: 'Soleure',
        it: 'Soletta',
        en: 'Solothurn',
        id: 8
    },
    19: {
        de: 'Thurgau',
        fr: 'Thurgovie',
        it: 'Turgovia',
        en: 'Thurgau',
        id: 21
    },
    20: {
        de: 'Ticino',
        fr: 'Tessin',
        it: 'Ticino',
        en: 'Ticino',
        id: 13
    },
    21: {
        de: 'Uri',
        fr: 'Uri',
        it: 'Uri',
        en: 'Uri',
        id: 11
    },
    22: {
        de: 'Vaud',
        fr: 'Vaud',
        it: 'Vaud',
        en: 'Vaud',
        id: 19
    },
    23: {
        de: 'Wallis',
        fr: 'Valais',
        it: 'Vallese',
        en: 'Valais',
        id: 15
    },
    24: {
        de: 'Zug',
        fr: 'Zoug',
        it: 'Zugo',
        en: 'Zug',
        id: 11
    },
    25: {
        de: 'Zürich',
        fr: 'Zurich',
        it: 'Zurigo',
        en: 'Zurich',
        id: 5
    }
};

const branches = {
    0: {
        de: 'Banken/ Finanzinstitute',
        fr: 'Banques/Instituts financiers',
        it: 'Banche/Istituti finanziari',
        en: 'Banks/Financial institutions',
        id: 1
    },
    1: {
        de: 'Baugewerbe/Immobilien',
        fr: 'Construction/Immobilier',
        it: 'Edilizia/Immobiliare',
        en: 'Construction/Real estate',
        id: 2
    },
    2: {
        de: 'Beratung diverse',
        fr: 'Conseil divers',
        it: 'Consulenza diversa',
        en: 'Various consulting',
        id: 3
    },
    3: {
        de: 'Bildungswesen/Formation',
        fr: 'Enseignement/Formation',
        it: 'Istruzione/Formazione',
        en: 'Education/Training',
        id: 4
    },
    4: {
        de: 'Chemie/Pharma',
        fr: 'Chimie/Pharma',
        it: 'Chimica/Farmaceutica',
        en: 'Chemicals/Pharmaceuticals',
        id: 5
    },
    5: {
        de: 'Detail-/Grosshandel',
        fr: 'Commerce de détail/gros',
        it: 'Commercio al dettaglio/all\'ingrosso',
        en: 'Retail/Wholesale trade',
        id: 6
    },
    6: {
        de: 'Dienstleistungen allgemein',
        fr: 'Services généraux',
        it: 'Servizi generali',
        en: 'General services',
        id: 7
    },
    7: {
        de: 'Energie-/Wasserwirtschaft',
        fr: 'Energie/Hydroélectricité',
        it: 'Energia/Idroelettrica',
        en: 'Energy/Water industry',
        id: 8
    },
    8: {
        de: 'Gastgewerbe/Hotellerie',
        fr: 'Hôtellerie/Gastronomie',
        it: 'Ristorazione/Alberghiero',
        en: 'Hospitality/Hotels',
        id: 9
    },
    9: {
        de: 'Gesundheits-/Sozialwesen',
        fr: 'Santé/Social',
        it: 'Salute/Sociale',
        en: 'Health/Social services',
        id: 10
    },
    10: {
        de: 'Gewerbe/Handwerk allgemein',
        fr: 'Métiers/Artisanat général',
        it: 'Artigianato/Commercio generale',
        en: 'Crafts/Trade in general',
        id: 11
    },
    11: {
        de: 'Industrie diverse',
        fr: 'Industrie diverse',
        it: 'Industria diversa',
        en: 'Various industries',
        id: 12
    },
    12: {
        de: 'Informatik/Telekommunikation',
        fr: 'Informatique/Télécommunication',
        it: 'Informatica/Telecomunicazioni',
        en: 'Information Technology/Telecommunications',
        id: 13
    },
    13: {
        de: 'Land-/Forstwirtschaft/Holz',
        fr: 'Agriculture/Foresterie/Bois',
        it: 'Agricoltura/Silvicoltura/Legno',
        en: 'Agriculture/Forestry/Wood',
        id: 14
    },
    14: {
        de: 'Medien/Druckerei/Verlage',
        fr: 'Médias/Imprimeries/Édition',
        it: 'Media/Stamperie/Editoria',
        en: 'Media/Printing/Publishing',
        id: 15
    },
    15: {
        de: 'Öffentliche Verwaltung/Verbände',
        fr: 'Administration publique/Associations',
        it: 'Amministrazione pubblica/Associazioni',
        en: 'Public administration/Associations',
        id: 16
    },
    16: {
        de: 'Tourismus/Reisen/Freizeit',
        fr: 'Tourisme/Voyages/Loisirs',
        it: 'Turismo/Viaggi/Tempi liberi',
        en: 'Tourism/Travel/Leisure',
        id: 17
    },
    17: {
        de: 'Transport/Logistik',
        fr: 'Transport/Logistique',
        it: 'Trasporti/Logistica',
        en: 'Transportation/Logistics',
        id: 18
    },
    18: {
        de: 'Rechts-/Wirtschaftsberatung',
        fr: 'Conseil juridique/Conseil économique',
        it: 'Consulenza legale/economica',
        en: 'Legal/Economic consulting',
        id: 19
    },
    19: {
        de: 'Versicherungen',
        fr: 'Assurances',
        it: 'Assicurazioni',
        en: 'Insurance',
        id: 20
    },
    20: {
        de: 'Konsum-/Luxusgüterindustrie',
        fr: 'Industrie des biens de consommation/luxe',
        it: 'Industria dei beni di consumo/lusso',
        en: 'Consumer/Luxury goods industry',
        id: 21
    },
    21: {
        de: 'Maschinen-/Anlagenbau',
        fr: 'Construction de machines/Installations',
        it: 'Costruzione di macchine/impianti',
        en: 'Machine/Plant engineering',
        id: 22
    },
    22: {
        de: 'Medizinaltechnik',
        fr: 'Technologie médicale',
        it: 'Tecnologia medica',
        en: 'Medical technology',
        id: 23
    },
    23: {
        de: 'Personalberatung',
        fr: 'Conseil en personnel',
        it: 'Società di reclutamento',
        en: 'Recruitment agency/Staffing',
        id: 24
    }
};

// languages
const languages = ['english', 'german', 'french', 'italian'];

// global variables
const activeFilters = {
    language: 'all',
    region: 'all',
    branche: 'all'
};

// languages filter object
const languageFilterObj = {
    selector: document.createElement('select'),

    appendSelector: function (where) {
        where.appendChild(this.selector);
    },

    changeLanguage: function (language) {
        switch (language) {
            case ('italian'):
                activeFilters.language = 'it';
                break;
            case ('german'):
                activeFilters.language = 'de';
                break;
            case ('french'):
                activeFilters.language = 'fr';
                break;
            case ('english'):
                activeFilters.language = 'en';
                break;
            default:
                activeFilters.language = 'all'
        };
        renderObj.render();

    },

    addSelectorOptions: function (array) {
        // append default option
        const firstOption = document.createElement('option');
        firstOption.innerText = 'Select language';
        this.selector.appendChild(firstOption);

        // append language options
        array.forEach(element => {
            const newOption = document.createElement('option');
            newOption.innerText = element;
            this.selector.appendChild(newOption);
            newOption.addEventListener('click', () => {
                this.changeLanguage(element);
            })
        })
    },
};

// region filter object
const regionFilterObj = {
    selector: document.createElement('select'),

    appendSelector: function (where) {
        where.appendChild(this.selector);
    },

    changeRegion: function (regionId) {
        activeFilters.region = regions[regionId].id;
        renderObj.render();
    },

    addSelectorOptions: function (array) {
        // append default option
        const firstOption = document.createElement('option');
        firstOption.innerText = 'Select region';
        this.selector.appendChild(firstOption);

        // append regions option
        let i = 0;
        array.forEach(element => {
            const newOption = document.createElement('option');
            newOption.innerText = element;
            newOption.value = i;
            i++;
            this.selector.appendChild(newOption);
            newOption.addEventListener('click', () => {
                this.changeRegion(newOption.value);
            })
        })
    },

    getRegionsName: function (lang) {
        let translatedRegions = [];
        for (const id in regions) {
            translatedRegions.push(regions[id][lang]);
        }

        return translatedRegions;
    }
};

// branche filter object
const brancheFilterObj = {
    selector: document.createElement('select'),

    appendSelector: function (where) {
        where.appendChild(this.selector);
    },

    changeBranche: function (brancheId) {
        activeFilters.branche = branches[brancheId].id;
        renderObj.render();
    },

    addSelectorOptions: function (array) {
        // append default option
        const firstOption = document.createElement('option');
        firstOption.innerText = 'Select branche';
        this.selector.appendChild(firstOption);

        // append branches option
        let i = 0;
        array.forEach(element => {
            const newOption = document.createElement('option');
            newOption.innerText = element;
            newOption.value = i;
            i++;
            this.selector.appendChild(newOption);
            newOption.addEventListener('click', () => {
                this.changeBranche(newOption.value);
            })
        })
    },

    getBranchesName: function (lang) {
        let translatedBranches = [];
        for (const id in branches) {
            translatedBranches.push(branches[id][lang]);
        }

        return translatedBranches;
    }
};

// define main container
const jobWallContainer = document.getElementById('jobwall');
const jStyle = jobWallContainer.style;
jStyle.display = 'flex';
jStyle.flexDirection = 'column';
jStyle.width = '100%';

// define filters container
const filterDiv = document.createElement('div');
filterDiv.id = 'filter-container';
jobWallContainer.appendChild(filterDiv);

// define jobs container
const jobsContainer = document.createElement('div');
jobsContainer.id = 'jobs-container';
jobWallContainer.appendChild(jobsContainer);

// define jobs array
const jobs = [];

// jobs render object
const renderObj = {
    jobs: {},

    updateJobs: function (array) {
        this.jobs = array;
    },

    render: function () {
        clearRenderedJobs();
        this.updateJobs(jobs);

        // filter language
        if (activeFilters.language !== 'all') {
            this.jobs = this.jobs.filter(job => job.sprache === activeFilters.language);
        }

        // filter region
        if (activeFilters.region !== 'all') {
            this.jobs = this.jobs.filter(job => job.region.includes(activeFilters.region));

        }

        // filter branche
        if (activeFilters.branche !== 'all') {
            this.jobs = this.jobs.filter(job => job.branche.includes(activeFilters.branche));

        }

        this.jobs.forEach(job => {
            jobsContainer.appendChild(generateJob(job));

        });

    },

}

// clear func
const clearRenderedJobs = () => {
    while (jobsContainer.firstChild) {
        jobsContainer.removeChild(jobsContainer.firstChild);
    }
}

// reset button
const reset = document.createElement('button');
reset.innerText = 'reset';
reset.onclick = () => {
    activeFilters.language = 'all';
    activeFilters.region = 'all';
    activeFilters.branche = 'all';
    renderObj.render()
};
filterDiv.appendChild(reset);

// job card generator function
const generateJob = param => {
    // create card div container
    const cardDiv = document.createElement('div');
    cardDiv.id = 'cardDiv';

    // display and append id
    const id = document.createElement('p');
    id.innerText = param.id;
    cardDiv.appendChild(id);

    // display and append titel
    const titel = document.createElement('p');
    titel.innerText = param.titel;
    cardDiv.appendChild(titel);

    // display and append vorspann
    const vorspann = document.createElement('p');
    vorspann.innerHTML = param.vorspann;
    cardDiv.appendChild(vorspann);

    // display and append beruf
    const beruf = document.createElement('p');
    beruf.innerText = param.beruf;
    cardDiv.appendChild(beruf);

    // display button
    const pageButton = document.createElement('button');
    pageButton.innerText = 'See Job Offer';
    pageButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(param.pageUrl, "_blank");
    });
    cardDiv.appendChild(pageButton);

    // style

    // card
    cardDiv.style.width = '25%';
    cardDiv.style.margin = '1%';
    cardDiv.style.display = 'flex';
    cardDiv.style.flexDirection = 'column';
    cardDiv.style.alignItems = 'center';
    cardDiv.style.borderRadius = '8px';
    cardDiv.style.padding = '1.2%';
    cardDiv.style.background = '#F5F5F5';

    // button
    pageButton.style.background = '#fbb92d';
    pageButton.style.border = '2px solid #cb2e3a';
    pageButton.style.borderRadius = '8px';
    pageButton.style.padding = '2%';
    pageButton.style.fontWeight = 'bold';

    return cardDiv;
}

fetch('./data.xml')
    .then(response => response.text())
    .then(xmlString => {
        const xmlDocument = new DOMParser().parseFromString(xmlString, 'text/xml');
        const inserate = xmlDocument.querySelectorAll('INSERAT');

        // create an object for each job offer
        for (const inserat of inserate) {
            const id = inserat.querySelector('INSERATID').textContent;
            const titel = inserat.querySelector('TITEL').textContent;
            const vorspann = inserat.querySelector('VORSPANN').textContent;
            const beruf = inserat.querySelector('BERUF').textContent;
            const text = inserat.querySelector('TEXT').textContent;
            const artderarbeit = inserat.querySelector('ARTDERARBEIT').textContent;
            const plz = inserat.querySelector('PLZ').textContent;
            const ort = inserat.querySelector('ORT').textContent;
            const kontakt = inserat.querySelector('KONTAKT').textContent;
            const telefon = inserat.querySelector('TELEFON').textContent;
            const email = inserat.querySelector('EMAIL').textContent;
            const bewerben_url = inserat.querySelector('BEWERBEN_URL').textContent;
            const sprache = inserat.querySelector('SPRACHE').textContent;
            const region = inserat.querySelector('REGION').textContent;
            const branche = inserat.querySelector('BRANCHE').textContent;
            const pageUrl = inserat.querySelector('DIREKT_URL').textContent;

            const cardParam = { pageUrl, branche, sprache, region, id, titel, vorspann, artderarbeit, plz, beruf, bewerben_url, text, ort, kontakt, telefon, email };

            // add job's card to jobs array
            jobs.push(cardParam);

        }

        // display language filter
        languageFilterObj.appendSelector(filterDiv);
        languageFilterObj.addSelectorOptions(languages);

        // display region filter
        regionFilterObj.appendSelector(filterDiv);
        const regionsArray = regionFilterObj.getRegionsName(parsedLang);
        regionFilterObj.addSelectorOptions(regionsArray);
        renderObj.render();

        // display branche filter
        brancheFilterObj.appendSelector(filterDiv);
        const branchesArray = brancheFilterObj.getBranchesName(parsedLang);
        brancheFilterObj.addSelectorOptions(branchesArray);
        renderObj.render();

    })
    .catch(err => console.log(`L'errore è ${err}`))

//
// -*-*-*-* STYLE -*-*-*-*
//

// filterDiv
filterDiv.style.background = '#fbb92d';
filterDiv.style.width = '100%';
filterDiv.style.minHeight = '100px';
filterDiv.style.display = 'flex';
filterDiv.style.justifyContent = 'center';
filterDiv.style.alignItems = 'center';
filterDiv.style.gap = '2%';
filterDiv.style.minHeight = '100px';

// language filter
languageFilterObj.selector.style.height = '50px';

// region filter
regionFilterObj.selector.style.height = '50px';

// branche filter
brancheFilterObj.selector.style.height = '50px';

// reset button
reset.style.height = '50px';

// for the job card's style section see the generateJob function

// jobs container
jobsContainer.style.display = 'flex';
jobsContainer.style.flexWrap = 'wrap';
jobsContainer.style.justifyContent = 'space-evenly';