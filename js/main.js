const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const flag = document.getElementById('currency_flag');
const swap = document.getElementById('swap');
const second_flag = document.getElementById('second_currency_flag');
const API_URL = "https://api.exchangeratesapi.io/latest";

// Currency placeholders
let html = '';
let open_bracket = ' (';
let close_bracket = ')';
let canadian_dollar = 'Canadian Dollar';
let hong_kong_dollar = 'Honk Kong Dollar'
let icelandic_krona = 'Icelandic Krona'
let phillipine_peso = 'Philippine Peso'
let danish_krone = 'Danish Krone'
let hungarian_forint = 'Hungarian Forint'
let czech_kruna = 'Czech Kruna'
let australian_dollar = 'Australian Dollar'
let romanian_leu = 'Romanian Leu'
let swedish_krona = 'Swedish Krona'
let indonesian_rupiah = 'Indonesian Rupiah'
let indian_rupee = 'Indian Rupee'
let brazilian_real = 'Brazilian Real'
let russian_ruble = 'Russian Ruble'
let croatian_kuna = 'Croatian Kunar'
let japanese_yen = 'Japanese Yen'
let thai_baht = 'Thai Baht'
let swiss_franc = 'Swiss Franc'
let singapore_dollar = 'Singapore Dollar'
let poland_zloty = 'Poland Zloty'
let bulgarian_lev = 'Bulgarian Lev'
let turkish_lira = 'Turkish Lira'
let chinese_yuan = 'Chinese Yuan'
let norwegian_krone = 'Norwegian Krone'
let new_zealand_dollar = 'New Zealand Dollar'
let south_african_rand = 'South African Rand'
let united_states_dollar = 'United States Dollar'
let mexican_peso = 'Mexican Peso'
let israeli_new_shekel = 'Israeli New Shekel'
let great_britain_pound = 'Great Britain Pound'
let south_korean_won = 'South Korean Won'
let malaysian_ringgit = 'Malaysian Ringgit'

async function currency() {
    const res = await fetch(API_URL);
    const data = await res.json();
    const keys = Object.keys(data.rates);
    const rates = data.rates;

    // Map collected data to display on drop down menu
    keys.map(item => {
        if (item == 'CAD') {
            return html += `<option value=${item}>${canadian_dollar.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'HKD') {
            return html += `<option value=${item}>${hong_kong_dollar.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'ISK') {
            return html += `<option value=${item}>${icelandic_krona.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'PHP') {
            return html += `<option value=${item}>${phillipine_peso.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'DKK') {
            return html += `<option value=${item}>${danish_krone.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'HUF') {
            return html += `<option value=${item}>${hungarian_forint.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'CZK') {
            return html += `<option value=${item}>${czech_kruna.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'AUD') {
            return html += `<option value=${item}>${australian_dollar.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'RON') {
            return html += `<option value=${item}>${romanian_leu.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'SEK') {
            return html += `<option value=${item}>${swedish_krona.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'IDR') {
            return html += `<option value=${item}>${indonesian_rupiah.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'INR') {
            return html += `<option value=${item}>${indian_rupee.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'BRL') {
            return html += `<option value=${item}>${brazilian_real.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'RUB') {
            return html += `<option value=${item}>${russian_ruble.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'HRK') {
            return html += `<option value=${item}>${croatian_kuna.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'JPY') {
            return html += `<option value=${item}>${japanese_yen.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'THB') {
            return html += `<option value=${item}>${thai_baht.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'CHF') {
            return html += `<option value=${item}>${swiss_franc.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'SGD') {
            return html += `<option value=${item}>${singapore_dollar.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'PLN') {
            return html += `<option value=${item}>${poland_zloty.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'BGN') {
            return html += `<option value=${item}>${bulgarian_lev.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'TRY') {
            return html += `<option value=${item}>${turkish_lira.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'CNY') {
            return html += `<option value=${item}>${chinese_yuan.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'NOK') {
            return html += `<option value=${item}>${norwegian_krone.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'NZD') {
            return html += `<option value=${item}>${new_zealand_dollar.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'ZAR') {
            return html += `<option value=${item}>${south_african_rand.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'USD') {
            return html += `<option value=${item}>${united_states_dollar.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'MXN') {
            return html += `<option value=${item}>${mexican_peso.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'ILS') {
            return html += `<option value=${item}>${israeli_new_shekel.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'GBP') {
            return html += `<option value=${item}>${great_britain_pound.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'KRW') {
            return html += `<option value=${item}>${south_korean_won.concat(open_bracket,item,close_bracket)}</option>`;
        }
        else if (item == 'MYR') {
            return html += `<option value=${item}>${malaysian_ringgit.concat(open_bracket,item,close_bracket)}</option>`;
        }
    });

    // Dropdown menu
    for (let i = 0; i < select.length; i++) {
        select[i].innerHTML = html;
    }

    // Auto updates
    input[0].addEventListener('keyup', () => {
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    });

    input[1].addEventListener('keyup', () => {
        input[0].value = input[1].value;
    });

    input[0].addEventListener('change', () => {
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    });

    input[1].addEventListener('change', () => {
        input[0].value = input[1].value;
    });

    document.addEventListener('mouseover', function () {
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    });
};

function change_flag(){
    var current_flag = document.getElementById('first_select').value;
    if (current_flag == 'CAD') {
        flag.src = "https://cdn.countryflags.com/thumbs/canada/flag-round-250.png";
    }
    else if (current_flag == 'HKD') {
        flag.src = "https://cdn.countryflags.com/thumbs/hongkong/flag-round-250.png";
    }
    else if (current_flag == 'ISK') {
        flag.src = "https://cdn.countryflags.com/thumbs/iceland/flag-round-250.png";
    }
    else if (current_flag == 'PHP') {
        flag.src = "https://cdn.countryflags.com/thumbs/philippines/flag-round-250.png";
    }
    else if (current_flag == 'DKK') {
        flag.src = "https://cdn.countryflags.com/thumbs/denmark/flag-round-250.png";
    }
    else if (current_flag == 'HUF') {
        flag.src = "https://cdn.countryflags.com/thumbs/hungary/flag-round-250.png";
    }
    else if (current_flag == 'CZK') {
        flag.src = "https://cdn.countryflags.com/thumbs/czech-republic/flag-round-250.png";
    }
    else if (current_flag == 'AUD') {
        flag.src = "https://cdn.countryflags.com/thumbs/australia/flag-round-250.png";
    }
    else if (current_flag == 'RON') {
        flag.src = "https://cdn.countryflags.com/thumbs/romania/flag-round-250.png";
    }
    else if (current_flag == 'SEK') {
        flag.src = "https://cdn.countryflags.com/thumbs/sweden/flag-round-250.png";
    }
    else if (current_flag == 'IDR') {
        flag.src = "https://cdn.countryflags.com/thumbs/indonesia/flag-round-250.png";
    }
    else if (current_flag == 'INR') {
        flag.src = "https://cdn.countryflags.com/thumbs/india/flag-round-250.png";
    }
    else if (current_flag == 'BRL') {
        flag.src = "https://cdn.countryflags.com/thumbs/brazil/flag-round-250.png";
    }
    else if (current_flag == 'RUB') {
        flag.src = "https://cdn.countryflags.com/thumbs/russia/flag-round-250.png";
    }
    else if (current_flag == 'HRK') {
        flag.src = "https://cdn.countryflags.com/thumbs/croatia/flag-round-250.png";
    }
    else if (current_flag == 'JPY') {
        flag.src = "https://cdn.countryflags.com/thumbs/japan/flag-round-250.png";
    }
    else if (current_flag == 'THB') {
        flag.src = "https://cdn.countryflags.com/thumbs/thailand/flag-round-250.png";
    }
    else if (current_flag == 'CHF') {
        flag.src = "https://cdn.countryflags.com/thumbs/switzerland/flag-round-250.png";
    }
    else if (current_flag == 'SGD') {
        flag.src = "https://cdn.countryflags.com/thumbs/singapore/flag-round-250.png";
    }
    else if (current_flag == 'PLN') {
        flag.src = "https://cdn.countryflags.com/thumbs/poland/flag-round-250.png";
    }
    else if (current_flag == 'BGN') {
        flag.src = "https://cdn.countryflags.com/thumbs/bulgaria/flag-round-250.png";
    }
    else if (current_flag == 'TRY') {
        flag.src = "https://cdn.countryflags.com/thumbs/turkey/flag-round-250.png";
    }
    else if (current_flag == 'CNY') {
        flag.src = "https://cdn.countryflags.com/thumbs/china/flag-round-250.png";
    }
    else if (current_flag == 'NOK') {
        flag.src = "https://cdn.countryflags.com/thumbs/norway/flag-round-250.png";
    }
    else if (current_flag == 'NZD') {
        flag.src = "https://cdn.countryflags.com/thumbs/new-zealand/flag-round-250.png";
    }
    else if (current_flag == 'ZAR') {
        flag.src = "https://cdn.countryflags.com/thumbs/south-africa/flag-round-250.png";
    }
    else if (current_flag == 'USD') {
        flag.src = "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png";
    }
    else if (current_flag == 'MXN') {
        flag.src = "https://cdn.countryflags.com/thumbs/mexico/flag-round-250.png";
    }
    else if (current_flag == 'ILS') {
        flag.src = "https://cdn.countryflags.com/thumbs/israel/flag-round-250.png";
    }
    else if (current_flag == 'GBP') {
        flag.src = "https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png";
    }
    else if (current_flag == 'KRW') {
        flag.src = "https://cdn.countryflags.com/thumbs/south-korea/flag-round-250.png";
    }
    else if (current_flag == 'MYR') {
        flag.src = "https://cdn.countryflags.com/thumbs/malaysia/flag-round-250.png";
    }
}

function second_change_flag(){
    var current_flag = document.getElementById('second_select').value;
    if (current_flag == 'CAD') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/canada/flag-round-250.png";
    }
    else if (current_flag == 'HKD') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/hongkong/flag-round-250.png";
    }
    else if (current_flag == 'ISK') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/iceland/flag-round-250.png";
    }
    else if (current_flag == 'PHP') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/philippines/flag-round-250.png";
    }
    else if (current_flag == 'DKK') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/denmark/flag-round-250.png";
    }
    else if (current_flag == 'HUF') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/hungary/flag-round-250.png";
    }
    else if (current_flag == 'CZK') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/czech-republic/flag-round-250.png";
    }
    else if (current_flag == 'AUD') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/australia/flag-round-250.png";
    }
    else if (current_flag == 'RON') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/romania/flag-round-250.png";
    }
    else if (current_flag == 'SEK') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/sweden/flag-round-250.png";
    }
    else if (current_flag == 'IDR') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/indonesia/flag-round-250.png";
    }
    else if (current_flag == 'INR') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/india/flag-round-250.png";
    }
    else if (current_flag == 'BRL') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/brazil/flag-round-250.png";
    }
    else if (current_flag == 'RUB') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/russia/flag-round-250.png";
    }
    else if (current_flag == 'HRK') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/croatia/flag-round-250.png";
    }
    else if (current_flag == 'JPY') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/japan/flag-round-250.png";
    }
    else if (current_flag == 'THB') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/thailand/flag-round-250.png";
    }
    else if (current_flag == 'CHF') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/switzerland/flag-round-250.png";
    }
    else if (current_flag == 'SGD') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/singapore/flag-round-250.png";
    }
    else if (current_flag == 'PLN') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/poland/flag-round-250.png";
    }
    else if (current_flag == 'BGN') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/bulgaria/flag-round-250.png";
    }
    else if (current_flag == 'TRY') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/turkey/flag-round-250.png";
    }
    else if (current_flag == 'CNY') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/china/flag-round-250.png";
    }
    else if (current_flag == 'NOK') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/norway/flag-round-250.png";
    }
    else if (current_flag == 'NZD') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/new-zealand/flag-round-250.png";
    }
    else if (current_flag == 'ZAR') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/south-africa/flag-round-250.png";
    }
    else if (current_flag == 'USD') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png";
    }
    else if (current_flag == 'MXN') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/mexico/flag-round-250.png";
    }
    else if (current_flag == 'ILS') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/israel/flag-round-250.png";
    }
    else if (current_flag == 'GBP') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png";
    }
    else if (current_flag == 'KRW') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/south-korea/flag-round-250.png";
    }
    else if (current_flag == 'MYR') {
        second_flag.src = "https://cdn.countryflags.com/thumbs/malaysia/flag-round-250.png";
    }
}

function swap_currency(){
    // Swap Flags
    let temp = flag.src;
    flag.src = second_flag.src;
    second_flag.src = temp;

    // Swap Values
    let temp_value = document.getElementById('first_select').value;
    document.getElementById('first_select').value = document.getElementById('second_select').value;
    document.getElementById('second_select').value = temp_value;
}

currency();