const redirects = {
    "/staff-information.html": "/info/staff.html",
    "/staff-information": "/info/staff.html",

    "/gachapon.html": "/shops/gachapon.html",
    "/gachapon": "/shops/gachapon.html",
    "/gachapon-stock.html": "/shops/gachapon-stock.html",
    "/gachapon-stock": "/shops/gachapon-stock.html",

    "/achievements.html": "/activities/achievements.html",
    "/achievements": "/activities/achievements.html",
    "/shows.html": "/activities/shows.html",
    "/shows": "/activities/shows.html",
    "/petpets/petpet-days2.html": "/activities/petpet-day/calendar.html",
    "/petpets/petpet-days2": "/activities/petpet-day/calendar.html",

    "/kitten-season.html": "/events/kitten-season.html",
    "/kitten-season": "/events/kitten-season.html",

    "/petpets/lambda.html": "/info/petpets/alpha.html",
    "/petpets/lambda": "/info/petpets/alpha.html",
    "/petpets/lambda2.html": "/info/petpets/alpha.html",
    "/petpets/lambda2": "/info/petpets/alpha.html",
    "/petpets/alpha.html": "/info/petpets/alpha.html",
    "/petpets/alpha": "/info/petpets/alpha.html",
    "/petpets/eataf.html": "/info/petpets/eataf.html",
    "/petpets/eataf": "/info/petpets/eataf.html",
    "/petpets/phi.html": "/info/petpets/phi.html",
    "/petpets/phi": "/info/petpets/phi.html",
    "/petpets/omicron.html": "/info/petpets/omicron.html",
    "/petpets/omicron": "/info/petpets/omicron.html",
};

const currentUrl = window.location.href;

const path = currentUrl.pathname;
const params = currentUrl.searchParams;

for(const key in redirects){
    if(path.endsWith(key)){
        window.location.replace(`${redirects[key]}?${params.toString()}`);
    }
}