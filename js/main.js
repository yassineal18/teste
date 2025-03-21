// Your OGADS LINK!!
var ogads_link = "https://drive-thirdparty.googleusercontent.com/128/type/application/zip";

// تعطيل الشروط المؤقتة للاختبار
console.log("OGAds link set to:", ogads_link);
$.magnificPopup.open({
    items: { src: '#ogads_locker' },
    type: 'inline',
    closeOnBgClick: false,
    enableEscapeKey: false,
    showCloseBtn: false
});
