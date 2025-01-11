document.addEventListener('DOMContentLoaded', function() {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const appStoreUrl = "https://apps.apple.com/app/main-booth/id6739702104";
    
    if (iOS) {
        window.location.href = appStoreUrl;
    } else {
        document.getElementById('message').textContent = "Android 버전은 곧 출시될 예정입니다";
    }
});
