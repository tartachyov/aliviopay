async function submitEmail(elementId) {
    let email = document.getElementById(elementId).value

    window.dataLayer = window.dataLayer || [];

    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {

        fbq('track', 'Lead');
        // gtag('event', 'Lead', { 'send_to': 'AW-796725197/NMJKCMuSlq0BEM2f9PsC' });

        var queries = {}
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] && pair[1]) {
                queries[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
        }

        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", "https://app.aliviopay.com/api/collectemail", true);
        // xhr.setRequestHeader("Content-Type", "text/plain");
        // xhr.onreadystatechange = function () {
        //     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        //         console.log(this.status)
        //     }
        // }
        // xhr.send(JSON.stringify({ email: email, queries: queries }));

        let link = 'https://app.aliviopay.com/?directemail=' + email
        if (query) {
            link += "&" + query
        }
        window.open(link, '_self');

        // var replaceBottom = document.getElementById("replace-bottom");
        // var newTextBottom = document.createElement("div");
        // var newTextBottomPrimary = document.createElement("div");
        // // var newTextBottomSecondary = document.createElement("div");
        // newTextBottomPrimary.innerHTML = "Muchas gracias, estaremos en contacto pronto.";
        // newTextBottomPrimary.setAttribute("class", "primary")
        // // newTextBottomSecondary.innerHTML = "If you do not receive email within a few minutes, please check your Spam folder.";
        // // newTextBottomSecondary.setAttribute("class", "secondary")
        // newTextBottom.appendChild(newTextBottomPrimary);
        // // newTextBottom.appendChild(newTextBottomSecondary);
        // newTextBottom.setAttribute("class", 'success-text-bottom')
        // replaceBottom.parentNode.replaceChild(newTextBottom, replace1);

    } else {
        document.getElementById(elementId).classList.add("error");
    }
}

function openSpreadsheet() {
    fbq('track', 'Click spreadsheet');
}