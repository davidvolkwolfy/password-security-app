const forbiddenWords = [ "Slovenija", "Ljubljana", "Maribor", "Triglav", "Janez", "Marija", "Novak", "Luka", "Doncic", "Olimpija",
  "Celje", "Kranj", "Koper", "Planica", "Prešeren", "Horvat", "Krajnc", "Potočnik", "Zupančič", "1991",
  "Bled", "Piran", "Mura", "Drava", "Sava", "Soča", "Sonce", "Luna", "Muri", "Pika", "Rex", "Dopust",
  "Morje", "Gora", "Kava", "Pivo", "Potica", "Golaž", "Kranjska", "Jesenice", "Pogačar", "Roglič",
  "Oblak", "Kopitar", "Gospod", "Mladost", "Ljubezen", "Sreča", "Geslo", "Slo123", "Gajser", "Dragic",
  "Garnbret", "Primoz", "Tadej", "Janja", "Anze", "Sampion", "Zmaga", "Planica2024", "Snops", "Borovnicke",
  "Cvicek", "Teran", "Gibanica", "Strukli", "Zganci", "Jota", "Radenska", "Cockta", "Malica", "Kosilo",
  "Zar", "Golaz123", "Triglav2864", "Adriatik", "Smarna", "Pohorje", "Krka", "Portoroz", "Bohinj",
  "Postojna", "Vrsic", "Goriska", "Stajerska", "Dolenjska", "Prekmurje", "Koroska", "BelaKrajina",
  "Lipica", "MojaSlovenija", "Domovina", "Medved", "Volk", "Lipicanec", "Cebela", "Panj", "Triglavski",
  "Planika", "Smreka", "Gozd", "Potok", "Jezero", "Cankar", "Valvasor", "Zdravljica", "Kultura", "Muzej",
  "Grad", "Vitez", "Kralj", "Matija", "Peter", "Klemen", "Mojca", "Spela", "Anka", "Katja", "Folk",
  "Pasta", "Festa", "Spila", "Cau", "Zivjo", "Servus", "Adijo", "Danes", "Jutri", "Vikend", "Svoboda",
  "Mir", "Druzina", "Otroci", "Hisa", "Avto", "Traktor", "Tomos", "Stala", "AdminSlo", "MojeGeslo",
  "Slovenec1", "Slovenka1", "ABCcdef", "Tipkovnica", "Brezveze", "Nevem", "Burja", "Megla", "Soncek",
  "Zima", "Kozolec", "Kurent", "Skocjan", "Zelenci", "Vogel", "Kanin", "Mangart", "VelikaPlanina",
  "Krvavec", "Rogla", "Terme", "Portoroz1", "Izola", "Ankaran", "Gorica", "MurskaSobota", "NovoMesto",
  "Ptuj", "Trbovlje", "Kamnik", "Domzale", "Velenje", "SkofjaLoka", "Kocevje", "Ribnica", "Golica",
  "Narcisa", "Resevna", "Lisca", "Kum", "Nanoc", "Slivnica", "Krim", "Martin", "Jozica", "Franci",
  "Primozic", "Vidmar", "Golob", "Kos", "Kovačič", "Hribar", "Mlakar", "Rus", "Knez", "Zmaj", "Zlatorog",
  "Kekec", "Bedanec", "MojcaLepo", "Slovenija123!", "Triglav1", "Janez1980", "Marija50", "Doncic77!",
  "Argeta", "Gorenje", "Elan", "Fructal", "Kuhinja", "Garaza", "Motorka", "Bograc", "Smorn", "Zlikrofi",
  "Ricet", "Spajza", "Gust", "Pubec", "Majstr", "Kraski", "Trta", "Vinograd", "Zidanica", "Cuk", "Gams",
  "Lojze", "Micka", "Francl", "Dobardan", "Super", "Veselje", "Navijac", "Zoga", "Smuci", "Kolo",
  "Petrol", "Makita", "Zebelj", "Kladivo", "Paloma", "Mercator", "Krof", "Miske", "Idrijski",
  "Prekmurska", "Fajn", "Lustno", "Sef", "Frajer", "Sneznik", "Nanos", "Oljka", "Klet", "Sokol",
  "Srna", "Jelen", "Postrv", "Scuka", "Tone", "Pepca", "Stefka", "Drago", "Slavko", "LahkoNoc",
  "SeVidimo", "Odlicno", "Ponos", "Pogum", "Upanje", "Delo", "Gol", "Kos", "Mreza", "Tekma",
  "Pohod", "Fitnes", "Zito", "Perutnina", "Lopata", "Skarje", "Stihl", "BujtaRepa", "Matevz",
  "Alpski", "Primorski", "Lastovka", "Muha", "Komar", "Mirko", "MojeGeslo1", "Lj1000", "Mb2000",
  "Slo1", "Kras", "Vreme", "Sneg123", "Prazniki", "Darilo", "Slovenec88", "123456", "password", "123456789", "qwerty", "12345", "12345678", "111111", "123123", "1234567", "priprava",
  "geslo", "geslo123", "slovenija", "ljubljana", "maribor", "triglav", "admin", "welcome", "letmein", "000000",
  "666666", "777777", "121212", "123321", "asdfgh", "zxcvbnm", "qwerasdf", "dragon", "monkey", "football",
  "soccer", "basketball", "baseball", "hockey", "superman", "batman", "starwars", "pokemon", "iloveyou", "sunshine",
  "princess", "angel", "sweetheart", "cookie", "flower", "summer", "winter", "spring", "autumn", "coffee",
  "water", "pizza", "cheese", "chocolate", "house", "money", "orange", "banana", "sonce", "luna",
  "pivo", "avto", "doma", "druzina", "varna123", "test123", "guest", "user", "login", "access",
  "secret", "change", "unknown", "computer", "keyboard", "master", "987654321", "654321", "1234567890", "qazwsx",
  "wsxedc", "yuiop", "poiuyt", "asdfjkl", "mnbvcxz", "1q2w3e", "zaq12wsx", "killer", "lover", "forever",
  "doncic77", "pogacar", "roglic", "olimpija", "viole", "janez", "marija", "novak", "1991", "slo123",
  "Slovenija123", "Slovenija2024", "Slovenija2025", "Slovenija2026", "qwertyuiop", "asdfghjkl", "yxcvbn", "zxcvbn", "yxcvbnm", "qaywsx",
  "qazwsx", "qwertz", "qwertzuiop", "mnbvcx", "lkjhgf", "1qaz", "2wsx", "3edc", "4rfv", "5tgb",
  "6yhn", "7ujm", "8ik", "dragons", "doncic", "luka77", "nba77", "oblak", "kopitar", "mura",
  "knapi", "grofje", "kosarka", "nogomet", "rokomat", "hokej", "odbojka", "skoki", "planica", "pokljuka",
  "prevc", "zmajcek", "vijolicni", "marko1985", "ana2010", "luka2015", "maja1990", "rok1988", "pika", "muri",
  "reks", "rex123", "nika", "zala", "neža", "žiga", "anže", "filip", "lara", "jan",
  "tilen", "matic", "atila", "medo", "kaja", "tjaša", "borut", "Triglav123", "Triglav2864", "Ljubljana1",
  "Ljubljana123", "Maribor1960", "Viole1989", "Olimpija1911", "Luka77", "Doncic77", "Janja1", "Maja123", "Janez1980", "Janez1970",
  "Marija123", "Mojca123", "Anze11", "Kopitar11", "Pogacar1", "Roglic1", "Planica2026", "Pivo123", "Kava123", "Union123",
  "Lasko123", "Geslo123", "MojeGeslo1", "VarnoGeslo!", "Dopust2025", "Poletje2026", "Zima2025", "Sonce123", "Luna123", "Muri123",
  "Pika123", "Rex123", "Ljubljana2026", "Maribor2026", "Koper2026", "Celje2026", "Kranj2026", "Slo123456", "Slovenija!", "Triglav!",
  "Ljubljana!", "Maribor!", "Jesen2025", "Pomlad2026", "Bled2026", "Piran2026", "Portoroz2026", "Dolenjska1", "Stajerska1", "Gorenjska1",
  "Prekmurje1", "Primorska1", "Koroska1", "Novak123", "Horvat123", "Krajnc123", "Zupancic123", "Kovacic123", "Potocnik123", "Golob123",
  "Mama123", "Oce123", "Brat123", "Sestra123", "Druzina1", "Domov2026", "Avto123", "Clio123", "Golf123", "Traktor1",
  "Sreca2026", "Ljubezen1", "Zdravje1", "Prazniki2025", "Bozic2025", "NovoLeto2026", "VelikaNoc2026", "PrviMaj2026", "Slo-123", "AdminSlo",
  "UserSlo", "TestSlo", "123456Slo", "Abc123Slo", "SlovenijaMoja", "MojaSlovenija", "TriglavMoj", "LjubljanaMoja", "MariborMoj", "Slo2026!",
  "Geslo2026!", "Vstop123", "Odjava123", "slovenc", "alpska", "lipica", "potica", "klobasa", "golaž", "jota",
  "union", "lasko", "kava", "vino", "teran", "refošk", "šmarnica", "prekmurska", "gibanica", "celje",
  "kranj", "koper", "velenje", "novo-mesto", "ptuj", "trbovlje", "kamnik", "jesenice", "izola", "piran",
  "bled", "bohinj", "portoroz", "murska", "sobota", "kocevje", "postojna", "skofja-loka", "domzale", "ajdovscina",
  "gorica", "stajerska", "gorenjska", "primorska", "dolenjska", "prekmurje", "koroska", "notranjska", "belakrajina", "nejc",
  "nina", "urska", "matej", "irena", "andrej", "mojca", "marko", "petra", "spela", "mlakar",
  "vidmar", "golob", "zeleni", "grofje", "zahovic", "osamosvojitev", "osmi-maj", "prešeren", "cankar", "finzgar",
  "kurent", "pust", "potop", "lipa", "sava", "drava", "soca", "krka", "morje", "gora",
  "hribi", "gozd", "zvezda", "vreme", "dez", "sneg", "mraz", "toplo", "macka", "storklja",
  "lipicanec", "veselje", "mir", "svoboda", "delo", "sluzba", "faks", "clio", "golf", "traktor",
  "gospod", "gospa", "otrok", "babica", "dedek", "sosed", "mojogeslo", "admin1", "prijava", "vstop",
  "odpri", "kljuc", "skrivnost", "pozabljeno", "ponedeljek", "torek", "sreda", "cetrtek", "petek", "sobota",
  "nedelja", "januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september",
  "oktober", "november", "december", "pomlad", "poletje", "jesen", "zima", "leto", "dan", "noc",
  "Slovenija1!", "Triglav2864", "Ljubljana2026", "Maribor1960", "Doncic77!", "Pogacar123", "PivoLasko1", "KavaZjutraj", "MojeGeslo123", "Geslo123456",
  "Dopust2026!", "Poletje2025", "Zima2026", "SonceSije1", "Dezuje123", "Slo-2026", "AdminSlo1", "UserSlovenija", "TestGeslo", "Vstop123!",
  "Prijava2026", "JanezNovak1", "MajaMaja1", "LukaDoncic77", "Planica2026", "BledOtok1", "PiranMorje", "Portoroz!", "Postojna123", "Snezak123",
  "Bozicek2025", "VelikaNoc!", "PrviMaj!", "VeselePraznike", "Srečno2026", "Ljubezen142", "Srce123!", "MuriMuca1", "PikaPes123", "RexLaja1",
  "TraktorJohnDeere", "Clio2026", "GolfGti1", "Gorenje123", "Krka1234", "Petrol1!", "Mercator1", "SparGeslo", "UnionPivo!", "Radenska3",
  "ZalaVoda1", "TriglavZavarovanje", "Telekom123", "A1geslo!", "Telemach1", "T2geslo", "Slovenec1", "Slovenka1", "Domovinca", "SlovenijaMoja1",
  "ZelenaDezela", "Gorje123", "VelenjeRudar", "MuraMura!", "Zmajcek123", "VioleMb1", "GreenDragons!", "CeljskiGrofje", "Karantanija1", "LjubljanaMoja",
  "MbJeNas", "Obala2026", "Gorenjska!", "Stajerska1!", "Prekmurje!", "DolenjskaCvick", "Koroska123", "BelaKrajina1", "Praznik123", "Vikend2026",
  "Ponedeljek!", "PetekZvecer", "Sobota123", "NedeljaMiza", "Januar2026", "MajSonce", "DecemberBozic", "PomladniDan", "Mladost123", "Sreca2026",
  "Zdravje1!", "MirVsem", "Svoboda1", "DruzinaPrva", "Otroci123", "BabicaDeda", "HisaMoja", "Vikendica1",
  "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970"];
  
const currentYear = new Date().getFullYear().toString();

function checkCustomConditions(pwd) {
    let fulfilled = [];
    let unfulfilled = [];

    // 1. Dolžina 14 znakov
    if (pwd.length >= 14) fulfilled.push("Dolžina gesla je vsaj 14 znakov.");
    else unfulfilled.push("Geslo mora biti dolgo vsaj 14 znakov.");

    // 2. Kompleksnost
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNum = /[0-9]/.test(pwd);
    const hasSpec = /[^a-zA-Z0-9]/.test(pwd);

    if (hasLower && hasUpper && hasNum && hasSpec) fulfilled.push("Vsebuje male, velike črke, številke in posebne znake.");
    else unfulfilled.push("Geslo mora vsebovati kombinacijo malih/velikih črk, številk in simbolov.");

    // 3. Predvidljivost in logična zaporedja
    const sequences = ['123', 'abc', 'qwer', 'asdf'];
    let hasSequence = sequences.some(s => pwd.toLowerCase().includes(s));
    if (!hasSequence) fulfilled.push("Ne vsebuje enostavnih logičnih zaporedij (npr. 123).");
    else unfulfilled.push("Geslo vsebuje predvidljiva zaporedja tipk ali znakov.");

    // Letni časi in pogoste besede
    let hasForbidden = forbiddenWords.some(w => pwd.toLowerCase().includes(w));
    if (!hasForbidden) fulfilled.push("Ne vsebuje letnih časov ali pogostih besed.");
    else unfulfilled.push("Geslo ne sme vsebovati letnih časov ali besed kot sta 'geslo', 'admin'.");

    // Letnice (2026, 2025, itd.)
    if (!pwd.includes(currentYear) && !pwd.includes("2025")) fulfilled.push("Ne vsebuje trenutne ali prejšnje letnice.");
    else unfulfilled.push("Geslo vsebuje letnico (npr. 2026), kar je predvidljivo.");

    return { fulfilled, unfulfilled };
}

function calculateEntropy(pwd) {
    let charset = 0;
    if (/[a-z]/.test(pwd)) charset += 26;
    if (/[A-Z]/.test(pwd)) charset += 26;
    if (/[0-9]/.test(pwd)) charset += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) charset += 32;
    return charset > 0 ? Math.floor(pwd.length * Math.log2(charset)) : 0;
}

document.getElementById('password').addEventListener('input', function() {
    const pwd = this.value;
    const res = zxcvbn(pwd);
    
    // Posodobitev števcev na prvi strani
    document.getElementById('charCount').innerText = 'Število znakov: ' + pwd.length;
    document.getElementById('lowerCount').innerText = 'Male črke: ' + (pwd.match(/[a-z]/g) || []).length;
    document.getElementById('upperCount').innerText = 'Velike črke: ' + (pwd.match(/[A-Z]/g) || []).length;
    document.getElementById('numberCount').innerText = 'Številke: ' + (pwd.match(/[0-9]/g) || []).length;
    document.getElementById('specialCount').innerText = 'Posebni znaki: ' + (pwd.match(/[^a-zA-Z0-9]/g) || []).length;

    const bar = document.getElementById('strengthBar');
    const colors = ['red', 'orange', 'yellow', '#99ff33', 'green'];
    bar.style.width = pwd.length > 0 ? (res.score + 1) * 20 + '%' : '0%';
    bar.style.backgroundColor = colors[res.score];

    // Priprava podatkov za skrita polja
    const conditions = checkCustomConditions(pwd);
    document.getElementById('zxcvbn_result').value = JSON.stringify(res);
    document.getElementById('entropy_hidden').value = calculateEntropy(pwd);
    document.getElementById('fulfilled_hidden').value = JSON.stringify(conditions.fulfilled);
    document.getElementById('unfulfilled_hidden').value = JSON.stringify(conditions.unfulfilled);
});

// Funkcije za gumba
function togglePasswordVisibility() {
    const input = document.getElementById('password');
    input.type = input.type === 'password' ? 'text' : 'password';
}

function generateAndFillPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    const pwd = Array.from({length: 16}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
    const input = document.getElementById('password');
    input.value = pwd;
    input.dispatchEvent(new Event('input'));
}

