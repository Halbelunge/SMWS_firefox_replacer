const distilleryMap = {
  "1": "Glenfarclas",
  "2": "Glenlivet",
  "3": "Bowmore",
  "4": "Highland Park",
  "5": "Auchentoshan",
  "6": "Macduff",
  "7": "Longmorn",
  "8": "Tamdhu",
  "9": "Glen Grant",
  "10": "Bunnahabhain",
  "11": "Tomatin",
  "12": "Benriach",
  "13": "Dalmore",
  "14": "Talisker",
  "15": "Glenfiddich",
  "16": "Glenturret",
  "17": "Scapa",
  "18": "Inchgower",
  "19": "Glen Garioch",
  "20": "Inverleven",
  "21": "Glenglassaugh",
  "22": "Glenkinchie",
  "23": "Bruichladdich",
  "24": "Macallan",
  "25": "Rosebank",
  "26": "Clynelish",
  "27": "Springbank",
  "28": "Tullibardine",
  "29": "Laphroaig",
  "30": "Glenrothes",
  "31": "Isle of Jura",
  "32": "Edradour",
  "33": "Ardbeg",
  "34": "Tamnavulin",
  "35": "Glen Moray",
  "36": "Benrinnes",
  "37": "Cragganmore",
  "38": "Caperdonich",
  "39": "Linkwood",
  "40": "Balvenie",
  "41": "Dailuaine",
  "42": "Tobermory",
  "43": "Port Ellen",
  "44": "Craigellachie",
  "45": "Dallas Dhu",
  "46": "Glenlossie",
  "47": "Benromach",
  "48": "Balmenach",
  "49": "St Magdalene",
  "50": "Bladnoch",
  "51": "Bushmills",
  "52": "Old Pulteney",
  "53": "Caol Ila",
  "54": "Aberlour",
  "55": "Royal Brackla",
  "56": "Coleburn",
  "57": "Glen Mhor",
  "58": "Strathisla",
  "59": "Teaninich",
  "60": "Aberfeldy",
  "61": "Brora",
  "62": "Glenlochy",
  "63": "Glentauchers",
  "64": "Mannochmore",
  "65": "Imperial",
  "66": "Ardmore",
  "67": "Banff",
  "68": "Blair Athol",
  "69": "Glen Albyn",
  "70": "Balblair",
  "71": "Glenburgie",
  "72": "Miltonduff",
  "73": "Aultmore",
  "74": "North Port (Brechin)",
  "75": "Glenury Royal",
  "76": "Mortlach",
  "77": "Glen Ord",
  "78": "Ben Nevis",
  "79": "Deanston",
  "80": "Glen Spey",
  "81": "Glen Keith",
  "82": "Glencadam",
  "83": "Convalmore",
  "84": "Glendullan",
  "85": "Glen Elgin",
  "86": "Glenesk",
  "87": "Millburn",
  "88": "Speyburn",
  "89": "Tomintoul",
  "90": "Pittyvaich",
  "91": "Dufftown (again)",
  "92": "Lochside",
  "93": "Glen Scotia",
  "94": "Fettercairn",
  "95": "Auchroisk",
  "96": "Glendronach",
  "97": "Littlemill",
  "98": "Inverleven",
  "99": "Glenugie",
  "100": "Strathmill",
  "101": "Knockando",
  "102": "Dalwhinnie",
  "103": "Royal Lochnagar",
  "104": "Glenburgie",
  "105": "Tormore",
  "106": "Cardhu",
  "107": "Glenallachie",
  "108": "Allt-a-Bhainne",
  "109": "Miltonduff (Mosstowie)",
  "110": "Oban",
  "111": "Lagavulin",
  "112": "Loch Lomond (Inchmurrin/Inchmoan)",
  "113": "Braeval",
  "114": "Springbank (Longrow)",
  "115": "Knockdhu (AnCnoc)",
  "116": "Yoichi (Japan)",
  "117": "Cooley (Unpeated)",
  "118": "Cooley / Connemara(Peated)",
  "119": "Yamazuki (Japan)",
  "120": "Hakushu (Japan",
  "121": "Isle of Aeean",
  "122": "Loch Lomand (Croftengea)",
  "123": "Glengoyne",
  "124": "Miyagikyo (Japan)",
  "125": "Glenmorangie",
  "126": "Springbank",
  "127": "Bruichladdich (Port Charlotte)",
  "128": "Penderyn",
  "129": "Kilchoman",
  "130": "Chichibz (Japan)",
  "131": "Hanyu (Japan)",
  "132": "Kaeuizawa (Japan)",
  "133": "Westland",
  "134": "Paul John (India)",
  "135": "Loch Lomond",
  "136": "Eden Mill",
  "137": "St. George's",
  "138": "Nantou",
  "139": "Kavalan",
  "140": "Balcones",
  "141": "Fary Lochan",
  "142": "Brueckelen Distilling",
  "143": "Copperworks Distilling Co.",
  "144": "High Coast Distillery",
  "145": "Smögen Whisky",
  "146": "Cotswolds",
  "147": "Archie Rose",
  "148": "Starward",
  "149": "Ardnamurchan",
  "150": "West Cork Distillers",
  "151": "Mackmyra",
  "152": "Shelter Point",
  "153": "Thy (Denmark)",
  "154": "Mosgaard Whisky",
  "155": "Milk&Honey Distillers",
  "156": "Glasgows Distillery",
  "157": "Distillerie de Werenghem",
  "158": "Yuza Distillery",	
  "159": "Mars Shinshu",
  "160": "Mars Tsunuki",
  "161": "Nc'nean Distillery",
  "162": "Isle of Raasay",	
  "163": "Isle of Harris Distillery",
  "164": "Penderyb (double distilled)",
  "165": "Wolfburn (peated)"
};

const distilleryMap_grain = {
  "G1": "North British",
  "G2": "Carsebridge (Closed)",
  "G3": "Caledonian (Closed)",
  "G4": "Cameronbridge",
  "G5": "Invergordon",	
  "G6": "Port Dundas (Closed)",
  "G7": "Girvan",
  "G8": "Cambus (Closed)",
  "G9": "Loch Lomond",
  "G10": "Strathclyde",
  "G11": "Nikka Coffey Grain"
};

const distilleryMap_bourbon = {
  "B1": "Heaven Hill",	
  "B2": "New Bernheim",	
  "B3": "Rock Town",
  "B4": "FEW Spirits",	
  "B5": "George Dickel (Cascade Hollow)",
  "B6": "Finger Lakes Distilling",
  "B7": "MGP (Midwest Grain Products)",
  "B8": "Woodinville Whiskey Co."
};

const distilleryMap_rye = {
  "RW1": "FEW Spirits",	
  "RW2": "Finger Lakes Distilling",
  "RW3": "New York Distilling Co.",
  "RW4": "Peerless Distillery",
  "RW5": "MGP (Lux Row Distillers sourcing from MGP)",
  "RW6": "Kyrö Distillery",
  "RW7": "Journeyman Distillery"
};

const distilleryMap_corn = {
  "CW1": "Heaven Hill Distillery",
  "CW2": "Balcones	Texas"
};

const distilleryMap_rum = {
  "R1": "Monymusk",
  "R2": "Demerara Distillers (El Dorado)",	  "R3": "West Indies Rum",	
  "R4": "Trinidad Distillers (Angostura)",	  "R5": "Long Pond",
  "R6": "Foursquare",
  "R7": "Hampden",
  "R8": "Compañía Licorera de Nicaragua (Flor de Caña)",
  "R9": "Varela Hermanos (Ron Abuelo)",
  "R10": "Trinidad Distiller’s",
  "R11": "Worthy Park",
  "R12": "Travellers",
  "R13": "Caroni",
  "R14": "Uitvlugt"
};

function replaceDistilleryCodes(node = document.body) {
  const regex_singlemalt = /(?<!: )(?<![\d$€£¥])\b(\d{1,3})\.(\d+)\b(?![\d$€£¥%])/g;

stockValue = searchStockInfo();
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);

  let current;
  while (current = walker.nextNode()) {
    const newText = current.nodeValue.replace(regex_singlemalt, (match, code, bottle) => {
      // nur ersetzen, wenn die ID in der Map existiert
      if (!distilleryMap.hasOwnProperty(code)) {
        return match; // keine Änderung
      }
      const name = distilleryMap[code];
      return `${name}: ${code}.${bottle}-${stockValue}`;
    });

    if (newText !== current.nodeValue) {
      current.nodeValue = newText;
    }
  }
}


function searchStockInfo() {

    const html = document.documentElement.innerHTML;

    // Stock-Zahl aus dem HTML holen
    const stockMatch = html.match(/"stock"\s*:\s*(\d+)/);
    const stockValue = stockMatch ? stockMatch[1] : null;

if (!stockValue) return 'x'; // kein stock gefunden
return stockValue;
}

function replaceStockInfo(){
  stockValue = searchStockInfo();

  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);

  let current;
  while (current = walker.nextNode()) {
    const newText = current.nodeValue.replace('STOCK', (match, stock) => {
      // nur ersetzen, wenn die ID in der Map existiert
      return `${match}: ${stockValue}`;
    });

    if (newText !== current.nodeValue) {
      current.nodeValue = newText;
    }
  }

}



// Initiale Verzögerung (10 Sekunden)
//setTimeout(() => {
//  replaceDistilleryCodes();
//}, 10000);

// Alle 60 Sekunden erneut ausführen
setInterval(() => {
  replaceDistilleryCodes();
  replaceStockInfo()
}, 1000);
