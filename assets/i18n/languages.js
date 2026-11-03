/**
 * UVATIME i18n — language registry & browser locale map
 */
(function (global) {
  'use strict';

  global.UVATIME_I18N_LANGS = [
    { code: 'en', path: '', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'de', path: '/de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'da', path: '/da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
    { code: 'nl', path: '/nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
    { code: 'fr', path: '/fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'es', path: '/es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'it', path: '/it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
    { code: 'be', path: '/be', name: 'Belgian', nativeName: 'België', flag: '🇧🇪' }
  ];

  global.UVATIME_I18N_BROWSER_MAP = {
    'de': 'de',
    'de-DE': 'de',
    'de-AT': 'de',
    'de-CH': 'de',
    'da': 'da',
    'da-DK': 'da',
    'nl': 'nl',
    'nl-NL': 'nl',
    'nl-BE': 'be',
    'fr-BE': 'be',
    'fr': 'fr',
    'fr-FR': 'fr',
    'fr-CA': 'fr',
    'es': 'es',
    'es-ES': 'es',
    'es-MX': 'es',
    'it': 'it',
    'it-IT': 'it',
    'en': 'en',
    '*': 'en'
  };
})(typeof window !== 'undefined' ? window : globalThis);
