const redirects = {
    "/staff-information.html": "/info/staff.html",
    "/staff-information": "/info/staff.html"
};

const currentUrl = window.location.href;

for(const key in redirects){
    if(currentUrl.endsWith(key)){
        window.location.replace(redirects[key]);
    }
}