var browser = {
versions: function () {
var u = navigator.userAgent, app = navigator.appVersion;
return { 
ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
iPhone: u.indexOf('iPhone') > -1, 
iPad: u.indexOf('iPad') > -1, 
};
}(),
}
if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {

}
if (browser.versions.android) {
window.location.href = "https://lu66064.github.io/v1.html";
}