document.addEventListener('DOMContentLoaded', function() {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const appStoreUrl = "https://apps.apple.com/app/main-booth/id6739702104";
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    
    if (iOS) {
        window.location.href = appStoreUrl;
    } else {
        const messages = {
            'ko': 'Android 버전은 곧 출시될 예정입니다',
            'en': 'Android version coming soon',
            'ja': 'Androidバージョンは近日公開予定です',
            "ar": "نسخة Android ستصدر قريبًا",
            "da": "Android-version kommer snart",
            "de": "Android-Version kommt bald",
            "el": "Η έκδοση Android έρχεται σύντομα",
            "es": "La versión de Android estará disponible pronto",
            "es_ES": "La versión de Android estará disponible pronto",
            "fi": "Android-versio tulossa pian",
            "fr": "La version Android arrive bientôt",
            "hi": "Android संस्करण जल्द ही आ रहा है",
            "hu": "Az Android-verzió hamarosan elérhető",
            "it": "La versione Android sarà disponibile a breve",
            "ja": "Androidバージョンは近日公開予定です",
            "ko": "Android 버전은 곧 출시될 예정입니다",
            "nl": "Android-versie komt binnenkort",
            "no": "Android-versjonen kommer snart",
            "pl": "Wersja na Androida już wkrótce",
            "pt": "A versão Android estará disponível em breve",
            "ru": "Версия для Android скоро выйдет",
            "sv": "Android-versionen kommer snart",
            "th": "เวอร์ชัน Android จะเปิดให้ใช้งานเร็วๆ นี้",
            "zh": "Android版本即将推出",
            "zh_CN": "Android版本即将推出",
            "zh_TW": "Android 版本即將推出"
            // 다른 언어 추가 가능
        };
        document.getElementById('message').textContent = messages[lang] || messages['en'];
    }
}); 
