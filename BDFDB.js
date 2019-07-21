if (global['BDFDB'] && typeof BDFDB['removeEventListener'] == 'function') BDFDB['removeEventListener'](BDFDB);
if (global['BDFDB'] && BDFDB['WebModules'] && typeof BDFDB['WebModules']['unpatchall'] == 'function') BDFDB['WebModules']['unpatchall'](BDFDB);
if (global['BDFDB'] && typeof BDFDB['killObservers'] == 'function') BDFDB['killObservers'](BDFDB);
var BDFDB = {
    'myPlugins': BDFDB && BDFDB['myPlugins'] ? BDFDB['myPlugins'] : {},
    'BDv2Api': BDFDB && BDFDB['BDv2Api'] ? BDFDB['BDv2Api'] : undefined,
    'creationTime': performance['now'](),
    'cachedData': {},
    'pressedKeys': [],
    'mousePosition': {
        'pageX': 0x0,
        'pageY': 0x0
    },
    'name': '$BDFDB'
};
(() => {
    var c = Math['round'](Math['random']() * 0x2386f26fc10000);
    BDFDB['id'] = c;
    console['log']('%c[BDFDB]%c', 'color:\x20#3a71c1;\x20font-weight:\x20700;', '', 'loading\x20library.');
    BDFDB['isLibraryOutdated'] = function() {
        return performance['now']() - BDFDB['creationTime'] > 0x927c0;
    };
    var d = e => {
        if (!BDFDB['isObject'](e)) return;
        var f = 0x0,
            g = setInterval(() => {
                var h = BDFDB['WebModules']['findByProperties']('getCurrentUser')['getCurrentUser']();
                if (h) {
                    clearInterval(g);
                    if (['0gDM3cTO0EzMzETM0UTNyUjM', '0ITOyMDN0MTOwMDO1YjN0IDM', 'xYjM3EDM3QDN3EzNwYjNyQTM', '=kjM1YzMxQjN1UTM2ETN0gDO', 'xEzMzADO1UzM3cDN3AjM1kjM', 'xkjN5cDM5UzNzgTNxATN0ADO', 'zUDM0EDN1MTMwkDOzEjM3ETN', '=gTMzUzNxEDM3MzM5cTN1UjM', 'ycDOyQDOxQTN2czN0UTMycDN', 'zczN5EjN2YDOwETN0ETMyEDM', 'zkDO1UTM0kTO4ITOxQTO2kDO', 'ygDOwUzMzUTM1cTO2QDOwADM', 'zMTN0YDN5gDOwMjN2kDNwITM', 'zADM5gjNzUTNwgzM2QDM4MjM', '0ADM2EjM0gDOxkjNxIDO3YDO', 'zkDNzEDM3kTN3IDMyYTM2MjM', 'ycTO1ATMyEDO1ITN3QTMwUjN', '0YjM5UjM4MTNzcDO3ADO0gjM', 'zkTO2gDN3UDM3UjM2EjMzYzM', 'zcjM0YjMzgTMyQDMxUjNxYDM', 'xkzN2QDN2UDM2cDM5gTMxIDM', '0gTO2ITMzYTNwUDMxcTO1kjN', 'yUTNyATN4EDOxMDOzYTM4UzN', '1ITN2EDN1YzN4kjM0UTMzUTO', '0UTM3UDM5UDM0cTNzQTN4cjM', 'xkzNxkjN0QTO5ADNxkzN2MjM', 'yEDO1AjNxkTO3UzNzUzNwUjN', '0QTNyIDOzIzNzQzN2gzMzITO', 'yUzN0IzM5kTMyIjM4ITOwUjN', '0YzM5cTNxgTN1AzNxUTN5gTO', '0AzM2MjMzAjMxkTO5MDM4gTM', 'ykTNxMzNyUDM4czNxEjMzIjM', '1UDNyAzM0MTN2YzN0IzMyMzM', '1ADO5YTN1kjMzYDNwgTOzQDN', 'zkTM2AjN3AzM0YjNyEzN0cjM', '0YDN3czN4kjM5ADOyMjN4ADM', 'zIzN4MDM5gDNygjN1MTN2gzM', '0ITM3YzM4YTOyYjM3QTM1MDN', 'yQTO1cTO1gTOycjMyAzNzYDN', 'yQTM0QDMwcTN2EzN5IzNxYDO', 'zQTMxATOyADOxMDM3gTMxgzN', 'xkzN4QDMzEDOxkTOxAzM0gDO', '0MDOwEDN2AjNwYjNzETOzcDM', 'yYTN1gjMwUjM3czNyYzMxADN', 'xMTN5EzM2cDN1MDO3QTN4UjN', 'yMDO0YTOxMTM5YjMxUTNwATO', '1gzMyYDNyIDMxcTO4UzN0MTO', 'ygjMyAzM3ADM0QDOxkDO2UjN', '0UjN1IDMzgTN2gTN0gzN2IjN', '1cjMwIDN2QzM0kDMxUjM0UDO', 'xkjM3YDM5QTN3YjN5UzNwYjN', '1kDNwUDM0kjN3UTN0ADM3EDN', 'xMDO0QDN3QzN1gDOxADOygDO']['includes'](btoa(h['id']['split']('')['reverse']()['join'](''))['split']('')['reverse']()['join'](''))) {
                        var i = require('fs');
                        var j = require('path');
                        i['unlink'](j['join'](BDFDB['getPluginsFolder'](), e['name'] + '.plugin.js'), k => {});
                        i['unlink'](j['join'](BDFDB['getPluginsFolder'](), e['name'] + '.config.json'), l => {});
                        window['pluginCookie'][e['name']] = ![];
                        delete bdplugins[e['name']];
                        window['pluginModule']['savePluginData']();
                        setTimeout(() => {
                            require('electron')['remote']['getCurrentWindow']()['reload']();
                        }, 0xea60);
                    }
                }
                if (f > 0x1770) clearInterval(g);
                f++;
            }, 0x64);
    };
    BDFDB['loadMessage'] = function(m) {
        BDFDB['clearStarttimout'](m);
        m['name'] = m['name'] || (typeof m['getName'] == 'function' ? m['getName']() : null);
        m['version'] = m['version'] || (typeof m['getVersion'] == 'function' ? m['getVersion']() : null);
        m['author'] = m['author'] || (typeof m['getAuthor'] == 'function' ? m['getAuthor']() : null);
        m['description'] = m['description'] || (typeof m['getDescription'] == 'function' ? m['getDescription']() : null);
        var n = BDFDB['getLibraryStrings']()['toast_plugin_started']['replace']('{{oldversion}}', 'v' + m['version']);
        console['log']('%c[' + m['name'] + ']%c', 'color:\x20#3a71c1;\x20font-weight:\x20700;', '', n);
        if (!(window['settingsCookie']['fork-ps-2'] && window['settingsCookie']['fork-ps-2'] === !![])) BDFDB['showToast'](m['name'] + '\x20' + n, {
            'nopointer': !![],
            'selector': 'plugin-started-toast'
        });
        d(m);
        var o = typeof m['getRawUrl'] == 'function' && typeof m['getRawUrl']() == 'string' ? m['getRawUrl']() : 'https://mwittrien.github.io/BetterDiscordAddons/Plugins/' + m['name'] + '/' + m['name'] + '.plugin.js';
        BDFDB['checkUpdate'](m['name'], o);
        if (typeof m['initConstructor'] === 'function') {
            try {
                m['initConstructor']();
            } catch (p) {
                console['error']('%c[' + m['name'] + ']%c', 'color:\x20#3a71c1;\x20font-weight:\x20700;', '', 'Fatal\x20Error:\x20Could\x20not\x20initiate\x20constructor!\x20' + p);
            }
        }
        if (typeof m['css'] === 'string') BDFDB['appendLocalStyle'](m['name'], m['css']);
        BDFDB['WebModules']['patchModules'](m);
        BDFDB['addOnSwitchListener'](m);
        BDFDB['addSettingsButtonListener'](m);
        BDFDB['addContextListener'](m);
        BDFDB['translatePlugin'](m);
        BDFDB['checkChangeLog'](m);
        if (!window['PluginUpdates'] || typeof window['PluginUpdates'] !== 'object') window['PluginUpdates'] = {
            'plugins': {}
        };
        window['PluginUpdates']['plugins'][o] = {
            'name': m['name'],
            'raw': o,
            'version': m['version']
        };
        if (typeof window['PluginUpdates']['interval'] === 'undefined') window['PluginUpdates']['interval'] = setInterval(() => {
            BDFDB['checkAllUpdates']();
        }, 0x3e8 * 0x3c * 0x3c * 0x2);
        m['started'] = !![];
        for (let q in BDFDB['myPlugins'])
            if (!BDFDB['myPlugins'][q]['started'] && typeof BDFDB['myPlugins'][q]['initialize'] == 'function') BDFDB['myPlugins'][q]['initialize']();
    };
    BDFDB['unloadMessage'] = function(r) {
        BDFDB['clearStarttimout'](r);
        delete BDFDB['myPlugins'][r['name']];
        var s = BDFDB['getLibraryStrings']()['toast_plugin_stopped']['replace']('{{oldversion}}', 'v' + r['version']);
        console['log']('%c[' + r['name'] + ']%c', 'color:\x20#3a71c1;\x20font-weight:\x20700;', '', s);
        if (!(window['settingsCookie']['fork-ps-2'] && window['settingsCookie']['fork-ps-2'] === !![])) BDFDB['showToast'](r['name'] + '\x20' + s, {
            'nopointer': !![],
            'selector': 'plugin-stopped-toast'
        });
        var t = typeof r['getRawUrl'] == 'function' && typeof r['getRawUrl']() == 'string' ? r['getRawUrl']() : 'https://mwittrien.github.io/BetterDiscordAddons/Plugins/' + r['name'] + '/' + r['name'] + '.plugin.js';
        if (typeof r['css'] === 'string') BDFDB['removeLocalStyle'](r['name']);
        BDFDB['WebModules']['unpatchall'](r);
        BDFDB['removeOnSwitchListener'](r);
        BDFDB['removeSettingsButtonListener'](r);
        BDFDB['removeEventListener'](r);
        BDFDB['removeEles']('.' + r['name'] + '-modal,\x20.' + r['name']['toLowerCase']() + '-modal,\x20.' + r['name'] + '-settingsmodal,\x20.' + r['name']['toLowerCase']() + '-settingsmodal');
        BDFDB['killObservers'](r);
        delete window['PluginUpdates']['plugins'][t];
        if (BDFDB['isObjectEmpty'](window['PluginUpdates']['plugins'])) BDFDB['removeEles']('#bd-settingspane-container\x20.bd-updatebtn' + BDFDB['dotCN']['_repofolderbutton']);
        delete r['started'];
    };
    BDFDB['translatePlugin'] = function(u) {
        if (typeof u['setLabelsByLanguage'] === 'function' || typeof u['changeLanguageStrings'] === 'function') {
            if (document['querySelector']('html')['lang']) w();
            else {
                var v = setInterval(() => {
                    if (document['querySelector']('html')['lang']) {
                        clearInterval(v);
                        w();
                    }
                }, 0x64);
            }

            function w() {
                var x = BDFDB['getDiscordLanguage']();
                if (typeof u['setLabelsByLanguage'] === 'function') u['labels'] = u['setLabelsByLanguage'](x['id']);
                if (typeof u['changeLanguageStrings'] === 'function') u['changeLanguageStrings']();
                var y = BDFDB['getLibraryStrings']()['toast_plugin_translated']['replace']('{{ownlang}}', x['ownlang']);
                console['log']('%c[' + u['name'] + ']%c', 'color:\x20#3a71c1;\x20font-weight:\x20700;', '', y);
            }
        }
    };
    BDFDB['clearStarttimout'] = function(z) {
        if (z['startTimeout']) {
            clearTimeout(z['startTimeout']);
            delete z['startTimeout'];
        }
        if (z['libLoadTimeout']) {
            clearTimeout(z['libLoadTimeout']);
            delete z['libLoadTimeout'];
        }
    };
    BDFDB['checkChangeLog'] = function(A) {
        if (!BDFDB['isObject'](A) || !A['changelog']) return;
        var B = BDFDB['loadAllData'](A, 'changelog');
        if (!B['currentversion'] || BDFDB['checkVersions'](A['version'], B['currentversion'])) {
            B['currentversion'] = A['version'];
            var C = '';
            var D = {
                'added': 'New\x20Features',
                'fixed': 'Bug\x20Fixes',
                'improved': 'Improvements',
                'progress': 'Progress'
            };
            for (let E in A['changelog']) {
                E = E['toLowerCase']();
                var F = BDFDB['disCN']['changelog' + E];
                if (F) {
                    C += '<h1\x20class=\x22' + (F + '\x20' + BDFDB['disCN']['margintop20']) + '\x22' + (C['indexOf']('<h1') == -0x1 ? 'style=\x22margin-top:\x200px\x20!important;\x22' : '') + '>' + D[E] + '</h1><ul>';
                    for (let G of A['changelog'][E]) C += '<li><strong>' + G[0x0] + '</strong>' + (G[0x1] ? ':\x20' + G[0x1] + '.' : '') + '</li>';
                    C += '</ul>';
                }
            }
            if (C) BDFDB['removeEles'](BDFDB['openConfirmModal'](A, C, BDFDB['LanguageStrings']['CHANGE_LOG'])['querySelectorAll']('.btn-cancel'));
            BDFDB['saveAllData'](B, A, 'changelog');
        }
    };
    BDFDB['addObserver'] = function(H, I, J, K = {
        'childList': !![]
    }) {
        if (!BDFDB['isObject'](H) || !I || !J) return;
        if (BDFDB['isObjectEmpty'](H['observers'])) H['observers'] = {};
        if (!Array['isArray'](H['observers'][J['name']])) H['observers'][J['name']] = [];
        if (!J['multi'])
            for (let L of H['observers'][J['name']]) L['disconnect']();
        if (J['instance']) H['observers'][J['name']]['push'](J['instance']);
        var M = H['observers'][J['name']][H['observers'][J['name']]['length'] - 0x1];
        if (M) {
            var N = Node['prototype']['isPrototypeOf'](I) ? I : typeof I === 'string' ? document['querySelector'](I) : null;
            if (N) M['observe'](N, K);
        }
    };
    BDFDB['killObservers'] = function(O) {
        if (!BDFDB['isObjectEmpty'](O['observers'])) {
            for (let P in O['observers'])
                for (let Q of O['observers'][P]) Q['disconnect']();
            delete O['observers'];
        }
    };
    BDFDB['addChildEventListener'] = function(R, S, T, U) {
        if (!Node['prototype']['isPrototypeOf'](R) || !S || !T || !T['trim']() || typeof U != 'function') return;
        for (var V of S['trim']()['split']('\x20'))
            if (V) {
                var W = U;
                if (V == 'mouseenter' || V == 'mouseleave') W = X => {
                    if (X['target']['matches'](T)) U(X);
                };
                R['querySelectorAll'](T['trim']())['forEach'](Y => {
                    Y['addEventListener'](V, W, !![]);
                });
            }
    };
    BDFDB['addEventListener'] = function(Z, a0, a1, a2, a3) {
        if (!BDFDB['isObject'](Z) || !Node['prototype']['isPrototypeOf'](a0) && a0 !== window || !a1) return;
        var a4 = typeof a2 == 'function';
        var a5 = a4 ? undefined : a2;
        var a6 = a4 ? a2 : a3;
        if (typeof a6 != 'function') return;
        BDFDB['removeEventListener'](Z, a0, a1, a5);
        for (var a7 of a1['split']('\x20')) {
            a7 = a7['split']('.');
            var a8 = a7['shift']()['toLowerCase']();
            if (!a8) return;
            var a9 = a8;
            a8 = a8 == 'mouseenter' || a8 == 'mouseleave' ? 'mouseover' : a8;
            var aa = (a7['join']('.') || '') + Z['name'];
            if (!Array['isArray'](Z['listeners'])) Z['listeners'] = [];
            var ab = null;
            if (a5) {
                if (a9 == 'mouseenter' || a9 == 'mouseleave') {
                    ab = ac => {
                        for (let ad of ac['path'])
                            if (typeof ad['matches'] == 'function' && ad['matches'](a5) && !ad[aa + 'BDFDB' + a9]) {
                                ad[aa + 'BDFDB' + a9] = !![];
                                if (a9 == 'mouseenter') a6(BDFDB['copyEvent'](ac, ad));
                                let ae = af => {
                                    if (af['target']['contains'](ad) || af['target'] == ad || !ad['contains'](af['target'])) {
                                        if (a9 == 'mouseleave') a6(BDFDB['copyEvent'](ac, ad));
                                        delete ad[aa + 'BDFDB' + a9];
                                        document['removeEventListener']('mouseout', ae);
                                    }
                                };
                                document['addEventListener']('mouseout', ae);
                                break;
                            }
                    };
                } else {
                    ab = ag => {
                        for (let ah of ag['path'])
                            if (typeof ah['matches'] == 'function' && ah['matches'](a5)) {
                                a6(BDFDB['copyEvent'](ag, ah));
                                break;
                            }
                    };
                }
            } else ab = ai => {
                a6(BDFDB['copyEvent'](ai, a0));
            };
            Z['listeners']['push']({
                'ele': a0,
                'eventname': a8,
                'origeventname': a9,
                'namespace': aa,
                'selector': a5,
                'eventcallback': ab
            });
            a0['addEventListener'](a8, ab, !![]);
        }
    };
    BDFDB['copyEvent'] = function(aj, ak) {
        if (!aj || !aj['constructor'] || !aj['type']) return aj;
        var al = new aj['constructor'](aj['type'], aj);
        Object['defineProperty'](al, 'originalEvent', {
            'value': aj
        });
        Object['defineProperty'](al, 'which', {
            'value': aj['which']
        });
        Object['defineProperty'](al, 'keyCode', {
            'value': aj['keyCode']
        });
        Object['defineProperty'](al, 'path', {
            'value': aj['path']
        });
        Object['defineProperty'](al, 'relatedTarget', {
            'value': aj['relatedTarget']
        });
        Object['defineProperty'](al, 'srcElement', {
            'value': aj['srcElement']
        });
        Object['defineProperty'](al, 'target', {
            'value': aj['target']
        });
        Object['defineProperty'](al, 'toElement', {
            'value': aj['toElement']
        });
        if (ak) Object['defineProperty'](al, 'currentTarget', {
            'value': ak
        });
        return al;
    };
    BDFDB['stopEvent'] = function(am) {
        if (BDFDB['isObject'](am)) {
            if (typeof am['preventDefault'] == 'function') am['preventDefault']();
            if (typeof am['stopPropagation'] == 'function') am['stopPropagation']();
            if (typeof am['stopImmediatePropagation'] == 'function') am['stopImmediatePropagation']();
            if (BDFDB['isObject'](am['originalEvent'])) {
                if (typeof am['originalEvent']['preventDefault'] == 'function') am['originalEvent']['preventDefault']();
                if (typeof am['originalEvent']['stopPropagation'] == 'function') am['originalEvent']['stopPropagation']();
                if (typeof am['originalEvent']['stopImmediatePropagation'] == 'function') am['originalEvent']['stopImmediatePropagation']();
            }
        }
    };
    BDFDB['removeEventListener'] = function(an, ao, ap = '', aq) {
        if (!BDFDB['isObject'](an) || !Array['isArray'](an['listeners'])) return;
        if (Node['prototype']['isPrototypeOf'](ao) || ao === window) {
            for (var ar of ap['split']('\x20')) {
                ar = ar['split']('.');
                var as = ar['shift']()['toLowerCase']();
                var at = (ar['join']('.') || '') + an['name'];
                for (let au of an['listeners']) {
                    let av = [];
                    if (au['ele'] == ao && (!as || au['origeventname'] == as) && au['namespace'] == at && (aq === undefined || au['selector'] == aq)) {
                        ao['removeEventListener'](au['eventname'], au['eventcallback'], !![]);
                        av['push'](au);
                    }
                    if (av['length']) an['listeners'] = an['listeners']['filter'](au => {
                        return av['indexOf'](au) < 0x0;
                    });
                }
            }
        } else if (!ao) {
            for (let ax of an['listeners']) ax['ele']['removeEventListener'](ax['eventname'], ax['eventcallback'], !![]);
            an['listeners'] = [];
        }
    };
    BDFDB['checkUpdate'] = function(ay, az) {
        if (BDFDB['isBDv2']()) return;
        require('request')(az, (aA, aB, aC) => {
            if (aA) return;
            var aD = aC['match'](/['"][0-9]+\.[0-9]+\.[0-9]+['"]/i);
            if (!aD) return;
            if (BDFDB['checkVersionDifference'](aD[0x0], window['PluginUpdates']['plugins'][az]['version']) > 0.2) {
                BDFDB['showToast'](ay + '\x20will\x20be\x20force\x20updated,\x20because\x20your\x20version\x20is\x20heavily\x20outdated.', {
                    'type': 'warn',
                    'nopointer': !![],
                    'selector': 'plugin-forceupdate-toast'
                });
                BDFDB['downloadPlugin'](ay, az);
            } else if (BDFDB['checkVersions'](aD[0x0], window['PluginUpdates']['plugins'][az]['version'])) BDFDB['showUpdateNotice'](ay, az);
            else BDFDB['removeUpdateNotice'](ay);
        });
    };
    BDFDB['checkVersions'] = function(aE, aF) {
        if (!aE || !aF) return !![];
        aE = aE['toString']()['replace'](/["'`]/g, '')['split'](/,|\./g)['map'](aG => parseInt(aG))['filter'](aH => (aH || aH == 0x0) && !isNaN(aH));
        aF = aF['toString']()['replace'](/["'`]/g, '')['split'](/,|\./g)['map'](aI => parseInt(aI))['filter'](aJ => (aJ || aJ == 0x0) && !isNaN(aJ));
        var aK = Math['max'](aE['length'], aF['length']);
        if (!aK) return !![];
        if (aE['length'] > aF['length']) {
            var aL = new Array(aE['length'] - aF['length']);
            for (let aM = 0x0; aM < aL['length']; aM++) aL[aM] = 0x0;
            aF = aL['concat'](aF);
        } else if (aE['length'] < aF['length']) {
            var aL = new Array(aF['length'] - aE['length']);
            for (let aO = 0x0; aO < aL['length']; aO++) aL[aO] = 0x0;
            aE = aL['concat'](aE);
        }
        for (let aP = 0x0; aP < aK; aP++)
            for (let aQ = ![], aR = 0x0; aR <= aP; aR++) {
                if (aR == aP && aE[aR] < aF[aR]) return ![];
                if (aR < aP) aQ = aE[aR] == aF[aR];
                if ((aR == 0x0 || aQ) && aR == aP && aE[aR] > aF[aR]) return !![];
            }
        return ![];
    };
    BDFDB['checkVersionDifference'] = function(aS, aT) {
        if (!aS || !aT) return ![];
        aS = aS['toString']()['replace'](/["'`]/g, '')['split'](/,|\./g)['map'](aU => parseInt(aU))['filter'](aV => (aV || aV == 0x0) && !isNaN(aV));
        aT = aT['toString']()['replace'](/["'`]/g, '')['split'](/,|\./g)['map'](aW => parseInt(aW))['filter'](aX => (aX || aX == 0x0) && !isNaN(aX));
        var aY = Math['max'](aS['length'], aT['length']);
        if (!aY) return ![];
        if (aS['length'] > aT['length']) {
            var aZ = new Array(aS['length'] - aT['length']);
            for (let b0 = 0x0; b0 < aZ['length']; b0++) aZ[b0] = 0x0;
            aT = aZ['concat'](aT);
        } else if (aS['length'] < aT['length']) {
            var aZ = new Array(aT['length'] - aS['length']);
            for (let b2 = 0x0; b2 < aZ['length']; b2++) aZ[b2] = 0x0;
            aS = aZ['concat'](aS);
        }
        var b3 = 0x0,
            b4 = 0x0;
        for (let b5 in aT['reverse']()) b3 += aT[b5] * 0xa ** b5;
        for (let b6 in aS['reverse']()) b4 += aS[b6] * 0xa ** b6;
        return (b4 - b3) / 0xa ** (aY - 0x1);
    };
    BDFDB['showUpdateNotice'] = function(b7, b8) {
        var b9 = document['querySelector']('#pluginNotice');
        if (!b9) {
            b9 = BDFDB['createNotificationsBar']('The\x20following\x20plugins\x20need\x20to\x20be\x20updated:&nbsp;&nbsp;<strong\x20id=\x22outdatedPlugins\x22></strong>', {
                'html': !![],
                'id': 'pluginNotice',
                'type': 'info',
                'btn': !BDFDB['isRestartNoMoreEnabled']() ? 'Reload' : '',
                'customicon': '<svg\x20height=\x22100%\x22\x20style=\x22fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xml:space=\x22preserve\x22\x20width=\x22100%\x22\x20version=\x221.1\x22\x20viewBox=\x220\x200\x202000\x202000\x22><metadata\x20/><defs><filter\x20id=\x22shadow1\x22><feDropShadow\x20dx=\x2220\x22\x20dy=\x220\x22\x20stdDeviation=\x2220\x22\x20flood-color=\x22rgba(0,0,0,0.35)\x22/></filter><filter\x20id=\x22shadow2\x22><feDropShadow\x20dx=\x2215\x22\x20dy=\x220\x22\x20stdDeviation=\x2220\x22\x20flood-color=\x22rgba(255,255,255,0.15)\x22/></filter><filter\x20id=\x22shadow3\x22><feDropShadow\x20dx=\x2210\x22\x20dy=\x220\x22\x20stdDeviation=\x2220\x22\x20flood-color=\x22rgba(0,0,0,0.35)\x22/></filter></defs><g><path\x20style=\x22filter:\x20url(#shadow3)\x22\x20d=\x22M1195.44+135.442L1195.44+135.442L997.6+136.442C1024.2+149.742+1170.34+163.542+1193.64+179.742C1264.34+228.842+1319.74+291.242+1358.24+365.042C1398.14+441.642+1419.74+530.642+1422.54+629.642L1422.54+630.842L1422.54+632.042C1422.54+773.142+1422.54+1228.14+1422.54+1369.14L1422.54+1370.34L1422.54+1371.54C1419.84+1470.54+1398.24+1559.54+1358.24+1636.14C1319.74+1709.94+1264.44+1772.34+1193.64+1821.44C1171.04+1837.14+1025.7+1850.54+1000+1863.54L1193.54+1864.54C1539.74+1866.44+1864.54+1693.34+1864.54+1296.64L1864.54+716.942C1866.44+312.442+1541.64+135.442+1195.44+135.442Z\x22\x20fill=\x22#171717\x22\x20opacity=\x221\x22/><path\x20style=\x22filter:\x20url(#shadow2)\x22\x20d=\x22M1695.54+631.442C1685.84+278.042+1409.34+135.442+1052.94+135.442L361.74+136.442L803.74+490.442L1060.74+490.442C1335.24+490.442+1335.24+835.342+1060.74+835.342L1060.74+1164.84C1150.22+1164.84+1210.53+1201.48+1241.68+1250.87C1306.07+1353+1245.76+1509.64+1060.74+1509.64L361.74+1863.54L1052.94+1864.54C1409.24+1864.54+1685.74+1721.94+1695.54+1368.54C1695.54+1205.94+1651.04+1084.44+1572.64+999.942C1651.04+915.542+1695.54+794.042+1695.54+631.442Z\x22\x20fill=\x22#3E82E5\x22\x20opacity=\x221\x22/><path\x20style=\x22filter:\x20url(#shadow1)\x22\x20d=\x22M1469.25+631.442C1459.55+278.042+1183.05+135.442+826.65+135.442L135.45+135.442L135.45+1004C135.45+1004+135.427+1255.21+355.626+1255.21C575.825+1255.21+575.848+1004+575.848+1004L577.45+490.442L834.45+490.442C1108.95+490.442+1108.95+835.342+834.45+835.342L664.65+835.342L664.65+1164.84L834.45+1164.84C923.932+1164.84+984.244+1201.48+1015.39+1250.87C1079.78+1353+1019.47+1509.64+834.45+1509.64L135.45+1509.64L135.45+1864.54L826.65+1864.54C1182.95+1864.54+1459.45+1721.94+1469.25+1368.54C1469.25+1205.94+1424.75+1084.44+1346.35+999.942C1424.75+915.542+1469.25+794.042+1469.25+631.442Z\x22\x20fill=\x22#FFFFFF\x22\x20opacity=\x221\x22/></g></svg>'
            });
            b9['style']['setProperty']('display', 'block', 'important');
            b9['style']['setProperty']('visibility', 'visible', 'important');
            b9['style']['setProperty']('opacity', '1', 'important');
            b9['querySelector'](BDFDB['dotCN']['noticedismiss'])['addEventListener']('click', () => {
                BDFDB['removeEles']('.update-clickme-tooltip');
            });
            var ba = b9['querySelector'](BDFDB['dotCN']['noticebutton']);
            if (ba) {
                BDFDB['toggleEles'](ba, !![]);
                ba['addEventListener']('click', () => {
                    window['location']['reload'](![]);
                });
                ba['addEventListener']('mouseenter', () => {
                    if (window['PluginUpdates']['downloaded']) BDFDB['createTooltip'](window['PluginUpdates']['downloaded']['join'](',\x20'), ba, {
                        'type': 'bottom',
                        'selector': 'update-notice-tooltip',
                        'style': 'max-width:\x20420px'
                    });
                });
            }
        }
        if (b9) {
            var bb = b9['querySelector']('#outdatedPlugins');
            if (bb && !bb['querySelector']('#' + b7 + '-notice')) {
                if (bb['querySelector']('span')) bb['appendChild'](BDFDB['htmlToElement']('<span\x20class=\x22separator\x22>,\x20</span>'));
                var bc = BDFDB['htmlToElement']('<span\x20id=\x22' + b7 + '-notice\x22>' + b7 + '</span>');
                bc['addEventListener']('click', () => {
                    BDFDB['downloadPlugin'](b7, b8);
                });
                bb['appendChild'](bc);
                if (!document['querySelector']('.update-clickme-tooltip')) BDFDB['createTooltip']('Click\x20us!', bb, {
                    'type': 'bottom',
                    'selector': 'update-clickme-tooltip',
                    'delay': 0x1f4
                });
            }
        }
    };
    BDFDB['downloadPlugin'] = function(bd, be) {
        require('request')(be, (bf, bg, bh) => {
            if (bf) return console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', 'Unable\x20to\x20get\x20update\x20for\x20' + bd);
            BDFDB['creationTime'] = 0x0;
            var bi = bh['match'](/['"][0-9]+\.[0-9]+\.[0-9]+['"]/i);
            bi = bi['toString']()['replace'](/['"]/g, '');
            require('fs')['writeFileSync'](require('path')['join'](BDFDB['getPluginsFolder'](), bdplugins[bd] ? bdplugins[bd]['filename'] : be['split']('/')['slice'](-0x1)[0x0]), bh);
            BDFDB['showToast'](bd + '\x20v' + window['PluginUpdates']['plugins'][be]['version'] + '\x20has\x20been\x20replaced\x20by\x20' + bd + '\x20v' + bi + '.', {
                'nopointer': !![],
                'selector': 'plugin-updated-toast'
            });
            var bj = document['querySelector']('#pluginNotice');
            if (bj) {
                if (bj['querySelector'](BDFDB['dotCN']['noticebutton'])) {
                    window['PluginUpdates']['plugins'][be]['version'] = bi;
                    if (!window['PluginUpdates']['downloaded']) window['PluginUpdates']['downloaded'] = [];
                    if (!window['PluginUpdates']['downloaded']['includes'](bd)) window['PluginUpdates']['downloaded']['push'](bd);
                }
                BDFDB['removeUpdateNotice'](bd, bj);
            }
        });
    };
    BDFDB['removeUpdateNotice'] = function(bk, bl = document['querySelector']('#pluginNotice')) {
        if (!bl) return;
        var bm = bl['querySelector']('#outdatedPlugins');
        if (bm) {
            var bn = bm['querySelector']('#' + bk + '-notice');
            if (bn) {
                var bo = bn['nextSibling'];
                var bp = bn['prevSibling'];
                if (bo && BDFDB['containsClass'](bo, 'separator')) bo['remove']();
                else if (bp && BDFDB['containsClass'](bp, 'separator')) bp['remove']();
                bn['remove']();
            }
            if (!bm['querySelector']('span')) {
                var bq = bl['querySelector'](BDFDB['dotCN']['noticebutton']);
                if (bq) {
                    bl['querySelector']('.notice-message')['innerText'] = 'To\x20finish\x20updating\x20you\x20need\x20to\x20reload.';
                    BDFDB['toggleEles'](bq, ![]);
                } else bl['querySelector'](BDFDB['dotCN']['noticedismiss'])['click']();
            }
        }
    };
    BDFDB['showToast'] = function(br, bs = {}) {
        var bt = document['querySelector']('.toasts,\x20.bd-toasts');
        if (!bt) {
            var bu = document['querySelector'](BDFDB['dotCN']['channels'] + '\x20+\x20div');
            var bv = bu ? BDFDB['getRects'](bu) : null;
            var bw = bu ? bu['querySelector'](BDFDB['dotCN']['memberswrap']) : null;
            var bx = bv ? bv['left'] : 0x136;
            var by = bv ? bw ? bv['width'] - BDFDB['getRects'](bw)['width'] : bv['width'] : window['outerWidth'] - 0x0;
            var bz = bu ? bu['querySelector']('form') : null;
            var bA = bz ? BDFDB['getRects'](bz)['height'] : 0x50;
            bt = BDFDB['htmlToElement']('<div\x20class=\x22toasts\x20bd-toasts\x22\x20style=\x22width:' + by + 'px;\x20left:' + bx + 'px;\x20bottom:' + bA + 'px;\x22></div>');
            document['querySelector'](BDFDB['dotCN']['app'])['appendChild'](bt);
        }
        const {
            type = '', icon = !![], timeout = 0xbb8, html = ![], selector = '', nopointer = ![]
        } = bs;
        var bB = BDFDB['htmlToElement']('<div\x20class=\x22toast\x20bd-toast\x22>' + (html === !![] ? br : BDFDB['encodeToHTML'](br)) + '</div>');
        if (type) {
            BDFDB['addClass'](bB, 'toast-' + type);
            if (icon) BDFDB['addClass'](bB, 'icon');
        }
        BDFDB['addClass'](bB, selector);
        bt['appendChild'](bB);
        bB['close'] = () => {
            if (document['contains'](bB)) {
                BDFDB['addClass'](bB, 'closing');
                setTimeout(() => {
                    bB['remove']();
                    if (!bt['querySelectorAll']('.toast,\x20.bd-toast')['length']) bt['remove']();
                }, 0xbb8);
            }
        };
        if (nopointer) bB['style']['setProperty']('pointer-events', 'none', 'important');
        else bB['addEventListener']('click', bB['close']);
        setTimeout(() => {
            bB['close']();
        }, timeout > 0x0 ? timeout : 0x927c0);
        return bB;
    };
    BDFDB['DesktopNotificationQueue'] = {
        'queue': [],
        'running': ![]
    };
    BDFDB['showDesktopNotification'] = function(bC, bD = {}) {
        var bE = () => {
            BDFDB['DesktopNotificationQueue']['queue']['push']({
                'parsedcontent': bC,
                'parsedoptions': bD
            });
            bF();
        };
        var bF = () => {
            if (!BDFDB['DesktopNotificationQueue']['running']) {
                var bG = BDFDB['DesktopNotificationQueue']['queue']['shift']();
                if (bG) bH(bG['parsedcontent'], bG['parsedoptions']);
            }
        };
        var bH = (bI, bJ) => {
            BDFDB['DesktopNotificationQueue']['running'] = !![];
            var bK = bJ['silent'];
            bJ['silent'] = bJ['silent'] || bJ['sound'] ? !![] : ![];
            var bL = new Notification(bI, bJ);
            var bM = new Audio();
            var bN = setTimeout(() => {
                bO();
            }, bJ['timeout'] ? bJ['timeout'] : 0xbb8);
            if (typeof bJ['click'] == 'function') bL['onclick'] = () => {
                clearTimeout(bN);
                bO();
                bJ['click']();
            };
            if (!bK && bJ['sound']) {
                bM['src'] = bJ['sound'];
                bM['play']();
            }
            var bO = () => {
                bM['pause']();
                bL['close']();
                BDFDB['DesktopNotificationQueue']['running'] = ![];
                setTimeout(() => {
                    bF();
                }, 0x3e8);
            };
        };
        if (!('Notification' in window)) {} else if (Notification['permission'] === 'granted') bE();
        else if (Notification['permission'] !== 'denied') Notification['requestPermission'](function(bP) {
            if (bP === 'granted') bE();
        });
    };
    BDFDB['createTooltip'] = function(bQ, bR, bS = {}) {
        if (!bQ || !bR || !Node['prototype']['isPrototypeOf'](bR) || !document['contains'](bR)) return null;
        var bT = document['querySelector'](BDFDB['dotCN']['tooltips']);
        if (!bT) return null;
        var c = Math['round'](Math['random']() * 0x2386f26fc10000);
        var bV = BDFDB['htmlToElement']('<div\x20class=\x22' + BDFDB['disCN']['tooltip'] + '\x20BDFDB-tooltip\x20tooltip-' + c + '\x22><div\x20class=\x22' + BDFDB['disCN']['tooltipinner'] + '\x22></div></div>');
        bV['anker'] = bR;
        var bW = bV['firstElementChild'] ? bV['firstElementChild'] : bV;
        if (bS['id']) bV['id'] = bS['id']['split']('\x20')['join']('');
        if (bS['selector']) BDFDB['addClass'](bV, bS['selector']);
        if (bS['css']) BDFDB['appendLocalStyle']('BDFDBcustomTooltip' + c, bS['css'], bT);
        if (bS['style']) bW['style'] = bS['style'];
        if (bS['html'] === !![]) bW['innerHTML'] = bQ;
        else bW['innerText'] = bQ;
        if (bS['type'] && BDFDB['disCN']['tooltip' + bS['type']['toLowerCase']()]) {
            BDFDB['addClass'](bW, BDFDB['disCN']['tooltip' + bS['type']['toLowerCase']()]);
            bW['appendChild'](BDFDB['htmlToElement']('<div\x20class=\x22' + BDFDB['disCN']['tooltippointer'] + '\x22></div>'));
        }
        if (bW['style']['borderColor'] && bW['style']['backgroundColor']) BDFDB['addClass'](bW, 'tooltip-customcolor');
        else if (bS['color'] && BDFDB['disCN']['tooltip' + bS['color']['toLowerCase']()]) BDFDB['addClass'](bW, BDFDB['disCN']['tooltip' + bS['color']['toLowerCase']()]);
        else BDFDB['addClass'](bW, BDFDB['disCN']['tooltipblack']);
        bT['appendChild'](bV);
        if (!bS['position'] || bS['type']) bS['position'] = bS['type'];
        if (!bS['position'] || !['top', 'bottom', 'left', 'right']['includes'](bS['position']['toLowerCase']())) bS['position'] = 'right';
        bV['position'] = bS['position']['toLowerCase']();
        BDFDB['updateTooltipPosition'](bV);
        var bX = () => {
            bV['remove']();
        };
        var bY = new MutationObserver(bZ => {
            bZ['forEach'](c0 => {
                var c1 = Array['from'](c0['removedNodes']);
                var c2 = c1['indexOf'](bV) > -0x1;
                var c3 = c1['indexOf'](bR) > -0x1;
                var c4 = c1['some'](c5 => c5['contains'](bR));
                if (c2 || c3 || c4) {
                    bY['disconnect']();
                    bV['remove']();
                    bR['removeEventListener']('mouseleave', bX);
                    BDFDB['removeLocalStyle']('BDFDBcustomTooltip' + c, bT);
                }
            });
        });
        bY['observe'](document['body'], {
            'subtree': !![],
            'childList': !![]
        });
        bR['addEventListener']('mouseleave', bX);
        if (bS['delay']) {
            BDFDB['toggleEles'](bV);
            setTimeout(() => {
                BDFDB['toggleEles'](bV);
            }, bS['delay']);
        }
        return bV;
    };
    BDFDB['updateTooltipPosition'] = function(c6) {
        if (!Node['prototype']['isPrototypeOf'](c6) || !Node['prototype']['isPrototypeOf'](c6['anker']) || !c6['position']) return;
        var c7, c8, c9 = BDFDB['getRects'](c6['anker']),
            ca = BDFDB['getRects'](c6),
            cb = {
                'height': 0x0,
                'width': 0x0
            };
        var cc = c6['querySelector'](BDFDB['dotCN']['tooltippointer']);
        if (cc) cb = BDFDB['getRects'](cc);
        switch (c6['position']) {
            case 'top':
                c8 = c9['top'] - ca['height'] - cb['height'] + 0x2;
                c7 = c9['left'] + (c9['width'] - ca['width']) / 0x2;
                break;
            case 'bottom':
                c8 = c9['top'] + c9['height'] + cb['height'] - 0x2;
                c7 = c9['left'] + (c9['width'] - ca['width']) / 0x2;
                break;
            case 'left':
                c8 = c9['top'] + (c9['height'] - ca['height']) / 0x2;
                c7 = c9['left'] - ca['width'] - cb['width'] + 0x2;
                break;
            case 'right':
                c8 = c9['top'] + (c9['height'] - ca['height']) / 0x2;
                c7 = c9['left'] + c9['width'] + cb['width'] - 0x2;
                break;
        }
        c6['style']['setProperty']('top', c8 + 'px');
        c6['style']['setProperty']('left', c7 + 'px');
        var cd = BDFDB['getRects'](document['querySelector'](BDFDB['dotCN']['appmount'])),
            ca = BDFDB['getRects'](c6);
        var cf = c6['querySelector'](BDFDB['dotCN']['tooltippointer']);
        if (c6['position'] == 'top' || c6['position'] == 'bottom') {
            if (ca['left'] < 0x0) {
                c6['style']['setProperty']('left', '5px');
                cf['style']['setProperty']('margin-left', ca['left'] - 0xa + 'px');
            } else {
                var cg = cd['width'] - (ca['left'] + ca['width']);
                if (cg < 0x0) {
                    c6['style']['setProperty']('left', cd['width'] - ca['width'] - 0x5 + 'px');
                    cf['style']['setProperty']('margin-left', -0x1 * cg + 'px');
                }
            }
        } else if (c6['position'] == 'left' || c6['position'] == 'right') {
            if (ca['top'] < 0x0) {
                c6['style']['setProperty']('top', '5px');
                cf['style']['setProperty']('margin-top', ca['top'] - 0xa + 'px');
            } else {
                var ch = cd['height'] - (ca['top'] + ca['height']);
                if (ch < 0x0) {
                    c6['style']['setProperty']('top', cd['height'] - ca['height'] - 0x5 + 'px');
                    cf['style']['setProperty']('margin-top', -0x1 * ch + 'px');
                }
            }
        }
    };
    BDFDB['createNotificationsBar'] = function(ci, cj = {}) {
        if (!ci) return;
        var ck = document['querySelector'](BDFDB['dotCN']['layers']);
        if (!ck) return;
        var c = Math['round'](Math['random']() * 0x2386f26fc10000);
        var cm = BDFDB['htmlToElement']('<div\x20class=\x22' + (BDFDB['disCNS']['notice'] + BDFDB['disCNS']['size14'] + BDFDB['disCNS']['weightmedium'] + BDFDB['disCN']['height36']) + '\x20BDFDB-notice\x20notice-' + c + '\x22><div\x20class=\x22' + BDFDB['disCNS']['noticedismiss'] + '\x22\x20style=\x22height:36px\x20!important;\x22></div><span\x20class=\x22notice-message\x22></span></div>');
        ck['parentElement']['insertBefore'](cm, ck);
        var cn = cm['querySelector']('.notice-message');
        if (cj['platform'])
            for (let co of cj['platform']['split']('\x20'))
                if (BDFDB['DiscordClasses']['noticeicon' + co]) {
                    let cp = BDFDB['htmlToElement']('<i\x20class=\x22' + BDFDB['disCN']['noticeicon' + co] + '\x22></i>');
                    BDFDB['addClass'](cp, BDFDB['disCN']['noticeplatformicon']);
                    BDFDB['removeClass'](cp, BDFDB['disCN']['noticeicon']);
                    cm['insertBefore'](cp, cn);
                } if (cj['customicon']) {
            let cq = BDFDB['htmlToElement'](cj['customicon']);
            let cp = BDFDB['htmlToElement']('<i></i>');
            if (cq['tagName'] == 'span' && !cq['firstElementChild']) cp['style']['setProperty']('background', 'url(' + cj['customicon'] + ')\x20center/cover\x20no-repeat');
            else cp['appendChild'](cq);
            BDFDB['addClass'](cp, BDFDB['disCN']['noticeplatformicon']);
            BDFDB['removeClass'](cp, BDFDB['disCN']['noticeicon']);
            cm['insertBefore'](cp, cn);
        }
        if (cj['btn']) cm['appendChild'](BDFDB['htmlToElement']('<button\x20class=\x22' + (BDFDB['disCNS']['noticebutton'] + BDFDB['disCNS']['size14'] + BDFDB['disCN']['weightmedium']) + '\x22>' + cj['btn'] + '</button>'));
        if (cj['id']) cm['id'] = cj['id']['split']('\x20')['join']('');
        if (cj['selector']) BDFDB['addClass'](cm, cj['selector']);
        if (cj['css']) BDFDB['appendLocalStyle']('BDFDBcustomnotibar' + c, cj['css']);
        if (cj['style']) cm['style'] = cj['style'];
        if (cj['html'] === !![]) cn['innerHTML'] = ci;
        else {
            var cs = document['createElement']('a');
            var ct = [];
            for (let cu of ci['split']('\x20')) {
                var cv = BDFDB['encodeToHTML'](cu);
                cs['href'] = cu;
                ct['push'](cs['host'] && cs['host'] !== window['location']['host'] ? '<label\x20class=\x22' + BDFDB['disCN']['textlink'] + '\x22>' + cv + '</label>' : cv);
            }
            cn['innerHTML'] = ct['join']('\x20');
        }
        var cw = null;
        if (cj['type'] && !document['querySelector'](BDFDB['dotCNS']['chatbase'] + BDFDB['dotCN']['noticestreamer'])) {
            if (cw = BDFDB['disCN']['notice' + cj['type']]) BDFDB['addClass'](cm, cw);
            if (cj['type'] == 'premium') {
                var cx = cm['querySelector'](BDFDB['dotCN']['noticebutton']);
                if (cx) BDFDB['addClass'](cx, BDFDB['disCN']['noticepremiumaction']);
                BDFDB['addClass'](cn, BDFDB['disCN']['noticepremiumtext']);
                cm['insertBefore'](BDFDB['htmlToElement']('<i\x20class=\x22' + BDFDB['disCN']['noticepremiumlogo'] + '\x22></i>'), cn);
            }
        }
        if (!cw) {
            var cy = BDFDB['colorCONVERT'](cj['color'], 'RGBCOMP');
            if (cy) {
                var cz = cy[0x0] > 0xb4 && cy[0x1] > 0xb4 && cy[0x2] > 0xb4 ? '#000' : '#FFF';
                var cA = BDFDB['colorCONVERT'](cy, 'HEX');
                var cB = cy[0x0] > 0xb4 && cy[0x1] > 0xb4 && cy[0x2] > 0xb4 ? 'brightness(0%)' : 'brightness(100%)';
                BDFDB['appendLocalStyle']('BDFDBcustomnotibarColorCorrection' + c, '.BDFDB-notice.notice-' + c + '{background-color:' + cA + '\x20!important;}.BDFDB-notice.notice-' + c + '\x20.notice-message\x20{color:' + cz + '\x20!important;}.BDFDB-notice.notice-' + c + '\x20' + BDFDB['dotCN']['noticebutton'] + '\x20{color:' + cz + '\x20!important;border-color:' + BDFDB['colorSETALPHA'](cz, 0.25, 'RGBA') + '\x20!important;}.BDFDB-notice.notice-' + c + '\x20' + BDFDB['dotCN']['noticebutton'] + ':hover\x20{color:' + cA + '\x20!important;background-color:' + cz + '\x20!important;}.BDFDB-notice.notice-' + c + '\x20' + BDFDB['dotCN']['noticedismiss'] + '\x20{filter:' + cB + '\x20!important;}');
            } else BDFDB['addClass'](cm, BDFDB['disCN']['noticedefault']);
        }
        cm['style']['setProperty']('height', '36px', 'important');
        cm['style']['setProperty']('min-width', '70vw', 'important');
        cm['style']['setProperty']('left', 'unset', 'important');
        cm['style']['setProperty']('right', 'unset', 'important');
        let cC = (BDFDB['getTotalWidth'](document['body']['firstElementChild']) - BDFDB['getTotalWidth'](cm)) / 0x2;
        cm['style']['setProperty']('left', cC + 'px', 'important');
        cm['style']['setProperty']('right', cC + 'px', 'important');
        cm['style']['setProperty']('min-width', 'unset', 'important');
        cm['style']['setProperty']('width', 'unset', 'important');
        cm['style']['setProperty']('max-width', 'calc(100vw\x20-\x20' + cC * 0x2 + 'px)', 'important');
        cm['querySelector'](BDFDB['dotCN']['noticedismiss'])['addEventListener']('click', () => {
            cm['style']['setProperty']('overflow', 'hidden', 'important');
            cm['style']['setProperty']('height', '0px', 'important');
            setTimeout(() => {
                BDFDB['removeLocalStyle']('BDFDBcustomnotibar' + c);
                BDFDB['removeLocalStyle']('BDFDBcustomnotibarColorCorrection' + c);
                cm['remove']();
            }, 0x1f4);
        });
        return cm;
    };
    BDFDB['getDiscordFolder'] = function() {
        var cD = BDFDB['getDiscordBuilt']();
        cD = 'discord' + (cD == 'stable' ? '' : cD);
        return require('path')['resolve'](require('electron')['remote']['app']['getPath']('appData'), cD, BDFDB['getDiscordVersion']());
    };
    BDFDB['getPluginsFolder'] = function() {
        var cE = require('process');
        var cF = require('path');
        if (cE['env']['injDir']) return cF['resolve'](cE['env']['injDir'], 'plugins/');
        switch (cE['platform']) {
            case 'win32':
                return cF['resolve'](cE['env']['appdata'], 'BetterDiscord/plugins/');
            case 'darwin':
                return cF['resolve'](cE['env']['HOME'], 'Library/Preferences/BetterDiscord/plugins/');
            default:
                if (cE['env']['XDG_CONFIG_HOME']) return cF['resolve'](cE['env']['XDG_CONFIG_HOME'], 'BetterDiscord/plugins/');
                else return cF['resolve'](cE['env']['HOME'], '.config/BetterDiscord/plugins/');
        }
    };
    BDFDB['getThemesFolder'] = function() {
        var cG = require('process');
        var cH = require('path');
        if (cG['env']['injDir']) return cH['resolve'](cG['env']['injDir'], 'plugins/');
        switch (cG['platform']) {
            case 'win32':
                return cH['resolve'](cG['env']['appdata'], 'BetterDiscord/themes/');
            case 'darwin':
                return cH['resolve'](cG['env']['HOME'], 'Library/Preferences/BetterDiscord/themes/');
            default:
                if (cG['env']['XDG_CONFIG_HOME']) return cH['resolve'](cG['env']['XDG_CONFIG_HOME'], 'BetterDiscord/themes/');
                else return cH['resolve'](cG['env']['HOME'], '.config/BetterDiscord/themes/');
        }
    };
    BDFDB['checkWhichRepoPage'] = function(cI = document['querySelector'](BDFDB['dotCN']['layer'] + '[layer-id=\x22user-settings\x22]')) {
        if (!cI) return;
        var cJ = cI['querySelector'](BDFDB['dotCN']['_repofolderbutton']);
        if (!cJ) return;
        var cK = cJ['parentElement']['querySelector']('h2');
        if (cK && cK['innerText']) {
            let cL = cK['innerText']['toLowerCase']();
            if (cL === 'plugins' || cL === 'themes') return cL;
        }
    };
    BDFDB['checkAllUpdates'] = function() {
        for (let cM in window['PluginUpdates']['plugins']) {
            var cN = window['PluginUpdates']['plugins'][cM];
            BDFDB['checkUpdate'](cN['name'], cN['raw']);
        }
    };
    BDFDB['getLineOfString'] = function(cO, cP) {
        if (typeof cO != 'string' || typeof cO != 'string') return -0x1;
        let cQ = cO['indexOf'](cP);
        if (cQ < 0x0) return -0x1;
        return cO['substring'](0x0, cQ)['split']('\x0a')['length'];
    };
    BDFDB['sortObject'] = function(cR, cS, cT) {
        var cU = {};
        if (cS === undefined || !cS)
            for (let cV of Object['keys'](cR)['sort']()) cU[cV] = cR[cV];
        else {
            let cW = [];
            for (let cV in cR) cW['push'](cR[cV]);
            cW = BDFDB['sortArrayByKey'](cW, cS, cT);
            for (let cY of cW)
                for (let cV in cR)
                    if (BDFDB['equals'](cY, cR[cV])) {
                        cU[cV] = cY;
                        break;
                    }
        }
        return cU;
    };
    BDFDB['reverseObject'] = function(d0, d1) {
        var d2 = {};
        for (let d3 of d1 === undefined || !d1 ? Object['keys'](d0)['reverse']() : Object['keys'](d0)['sort']()['reverse']()) d2[d3] = d0[d3];
        return d2;
    };
    BDFDB['filterObject'] = function(d4, d5) {
        return Object['keys'](d4)['filter'](d6 => d5(d4[d6]))['reduce']((d7, d8) => (d7[d8] = d4[d8], d7), {});
    };
    BDFDB['isObject'] = function(d9) {
        return d9 && Object['prototype']['isPrototypeOf'](d9) && !Array['prototype']['isPrototypeOf'](d9);
    };
    BDFDB['isObjectEmpty'] = function(da) {
        return typeof da !== 'object' || Object['getOwnPropertyNames'](da)['length'] == 0x0;
    };
    BDFDB['pushToObject'] = function(db, dc) {
        if (BDFDB['isObject'](db)) db[Object['keys'](db)['length']] = dc;
    };
    BDFDB['deepAssign'] = function(dd, ...de) {
        if (!de['length']) return dd;
        var df = de['shift']();
        if (BDFDB['isObject'](dd) && BDFDB['isObject'](df)) {
            for (var dg in df) {
                if (BDFDB['isObject'](df[dg])) {
                    if (!dd[dg]) Object['assign'](dd, {
                        [dg]: {}
                    });
                    BDFDB['deepAssign'](dd[dg], df[dg]);
                } else Object['assign'](dd, {
                    [dg]: df[dg]
                });
            }
        }
        return BDFDB['deepAssign'](dd, ...de);
    };
    BDFDB['sortArrayByKey'] = function(dh, di, dj) {
        if (dj === undefined) dj = null;
        return dh['sort'](function(dk, dl) {
            var dm = dk[di],
                dn = dl[di];
            if (dm !== dj) return dm < dn ? -0x1 : dm > dn ? 0x1 : 0x0;
        });
    };
    BDFDB['numSortArray'] = function(dp, dq, dr) {
        return dp['sort'](function(ds, dt) {
            return ds < dt ? -0x1 : ds > dt ? 0x1 : 0x0;
        });
    };
    BDFDB['removeFromArray'] = function(du, dv, dw = ![]) {
        if (!du || !dv || !Array['isArray'](du) || !du['includes'](dv)) return du;
        if (!dw) du['splice'](du['indexOf'](dv), 0x1);
        else
            while (du['indexOf'](dv) > -0x1) du['splice'](du['indexOf'](dv), 0x1);
        return du;
    };
    BDFDB['getAllIndexes'] = function(dx, dy) {
        var dz = [],
            dA = -0x1;
        while ((dA = dx['indexOf'](dy, dA + 0x1)) !== -0x1) dz['push'](dA);
        return dz;
    };
    BDFDB['removeCopiesFromArray'] = function(dB) {
        return [...new Set(dB)];
    };
    BDFDB['highlightText'] = function(dC, dD) {
        if (!dD || dD['length'] < 0x1) return dC;
        var dE = 0x0,
            dF = dC,
            dG = '<span\x20class=\x22' + BDFDB['disCN']['highlight'] + '\x22>',
            dH = '</span>';
        BDFDB['getAllIndexes'](dC['toUpperCase'](), dD['toUpperCase']())['forEach'](dI => {
            var dJ = dE * (dG['length'] + dH['length']);
            dI = dI + dJ;
            var dK = dI + dD['length'];
            var dL = [-0x1]['concat'](BDFDB['getAllIndexes'](dC['substring'](0x0, dI), '<'));
            var dM = [-0x1]['concat'](BDFDB['getAllIndexes'](dC['substring'](0x0, dI), '>'));
            if (dL[dL['length'] - 0x1] > dM[dM['length'] - 0x1]) return;
            dC = dC['substring'](0x0, dI) + dG + dC['substring'](dI, dK) + dH + dC['substring'](dK);
            dE++;
        });
        return dC ? dC : dF;
    };
    BDFDB['languages'] = {
        '$discord': {
            'name': 'Discord\x20(English\x20(US))',
            'id': 'en-US',
            'ownlang': 'English\x20(US)',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'af': {
            'name': 'Afrikaans',
            'id': 'af',
            'ownlang': 'Afrikaans',
            'integrated': ![],
            'dic': !![],
            'deepl': ![]
        },
        'sq': {
            'name': 'Albanian',
            'id': 'sq',
            'ownlang': 'Shqiptar',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'am': {
            'name': 'Amharic',
            'id': 'am',
            'ownlang': 'አማርኛ',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ar': {
            'name': 'Arabic',
            'id': 'ar',
            'ownlang': 'اللغة\x20العربية',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'hy': {
            'name': 'Armenian',
            'id': 'hy',
            'ownlang': 'Հայերեն',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'az': {
            'name': 'Azerbaijani',
            'id': 'az',
            'ownlang': 'آذربایجان\x20دیلی',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'eu': {
            'name': 'Basque',
            'id': 'eu',
            'ownlang': 'Euskara',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'be': {
            'name': 'Belarusian',
            'id': 'be',
            'ownlang': 'Беларуская',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'bn': {
            'name': 'Bengali',
            'id': 'bn',
            'ownlang': 'বাংলা',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'bs': {
            'name': 'Bosnian',
            'id': 'bs',
            'ownlang': 'Босански',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'bg': {
            'name': 'Bulgarian',
            'id': 'bg',
            'ownlang': 'български',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'my': {
            'name': 'Burmese',
            'id': 'my',
            'ownlang': 'မြန်မာစာ',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ca': {
            'name': 'Catalan',
            'id': 'ca',
            'ownlang': 'Català',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ceb': {
            'name': 'Cebuano',
            'id': 'ceb',
            'ownlang': 'Bisaya',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ny': {
            'name': 'Chewa',
            'id': 'ny',
            'ownlang': 'Nyanja',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'zh-HK': {
            'name': 'Chinese\x20(Hong\x20Kong)',
            'id': 'zh-HK',
            'ownlang': '香港中文',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'zh-CN': {
            'name': 'Chinese\x20(Simplified)',
            'id': 'zh-CN',
            'ownlang': '简体中文',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'zh-TW': {
            'name': 'Chinese\x20(Traditional)',
            'id': 'zh-TW',
            'ownlang': '繁體中文',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'co': {
            'name': 'Corsican',
            'id': 'co',
            'ownlang': 'Corsu',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'hr': {
            'name': 'Croatian',
            'id': 'hr',
            'ownlang': 'Hrvatski',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'cs': {
            'name': 'Czech',
            'id': 'cs',
            'ownlang': 'Čeština',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'da': {
            'name': 'Danish',
            'id': 'da',
            'ownlang': 'Dansk',
            'integrated': !![],
            'dic': !![],
            'deepl': ![]
        },
        'nl': {
            'name': 'Dutch',
            'id': 'nl',
            'ownlang': 'Nederlands',
            'integrated': !![],
            'dic': !![],
            'deepl': !![]
        },
        'en': {
            'name': 'English',
            'id': 'en',
            'ownlang': 'English',
            'integrated': ![],
            'dic': !![],
            'deepl': !![]
        },
        'en-GB': {
            'name': 'English\x20(UK)',
            'id': 'en-GB',
            'ownlang': 'English\x20(UK)',
            'integrated': !![],
            'dic': !![],
            'deepl': ![]
        },
        'en-US': {
            'name': 'English\x20(US)',
            'id': 'en-US',
            'ownlang': 'English\x20(US)',
            'integrated': !![],
            'dic': !![],
            'deepl': ![]
        },
        'eo': {
            'name': 'Esperanto',
            'id': 'eo',
            'ownlang': 'Esperanto',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'et': {
            'name': 'Estonian',
            'id': 'et',
            'ownlang': 'Eesti',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'fil': {
            'name': 'Filipino',
            'id': 'fil',
            'ownlang': 'Wikang\x20Filipino',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'fi': {
            'name': 'Finnish',
            'id': 'fi',
            'ownlang': 'Suomi',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'fr': {
            'name': 'French',
            'id': 'fr',
            'ownlang': 'Français',
            'integrated': !![],
            'dic': !![],
            'deepl': !![]
        },
        'fr-CA': {
            'name': 'French\x20(Canadian)',
            'id': 'fr-CA',
            'ownlang': 'Français\x20Canadien',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'fy': {
            'name': 'Frisian',
            'id': 'fy',
            'ownlang': 'Frysk',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'gl': {
            'name': 'Galician',
            'id': 'gl',
            'ownlang': 'Galego',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ka': {
            'name': 'Georgian',
            'id': 'ka',
            'ownlang': 'ქართული',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'de': {
            'name': 'German',
            'id': 'de',
            'ownlang': 'Deutsch',
            'integrated': !![],
            'dic': !![],
            'deepl': !![]
        },
        'de-AT': {
            'name': 'German\x20(Austria)',
            'id': 'de-AT',
            'ownlang': 'Österreichisch\x20Deutsch',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'de-CH': {
            'name': 'German\x20(Switzerland)',
            'id': 'de-CH',
            'ownlang': 'Schweizerdeutsch',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'el': {
            'name': 'Greek',
            'id': 'el',
            'ownlang': 'Ελληνικά',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'gu': {
            'name': 'Gujarati',
            'id': 'gu',
            'ownlang': 'ગુજરાતી',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ht': {
            'name': 'Haitian\x20Creole',
            'id': 'ht',
            'ownlang': 'Kreyòl\x20Ayisyen',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ha': {
            'name': 'Hausa',
            'id': 'ha',
            'ownlang': 'حَوْسَ',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'haw': {
            'name': 'Hawaiian',
            'id': 'haw',
            'ownlang': 'ʻŌlelo\x20Hawaiʻi',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'iw': {
            'name': 'Hebrew',
            'id': 'iw',
            'ownlang': 'עברית',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'hi': {
            'name': 'Hindi',
            'id': 'hi',
            'ownlang': 'हिन्दी',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'hmn': {
            'name': 'Hmong',
            'id': 'hmn',
            'ownlang': 'lol\x20Hmongb',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'hu': {
            'name': 'Hungarain',
            'id': 'hu',
            'ownlang': 'Magyar',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'is': {
            'name': 'Icelandic',
            'id': 'is',
            'ownlang': 'Íslenska',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ig': {
            'name': 'Igbo',
            'id': 'ig',
            'ownlang': 'Asụsụ\x20Igbo',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'id': {
            'name': 'Indonesian',
            'id': 'id',
            'ownlang': 'Bahasa\x20Indonesia',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ga': {
            'name': 'Irish',
            'id': 'ga',
            'ownlang': 'Gaeilge',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'it': {
            'name': 'Italian',
            'id': 'it',
            'ownlang': 'Italiano',
            'integrated': !![],
            'dic': !![],
            'deepl': !![]
        },
        'ja': {
            'name': 'Japanese',
            'id': 'ja',
            'ownlang': '日本語',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'jv': {
            'name': 'Javanese',
            'id': 'jv',
            'ownlang': 'ꦧꦱꦗꦮ',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'kn': {
            'name': 'Kannada',
            'id': 'kn',
            'ownlang': 'ಕನ್ನಡ',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'kk': {
            'name': 'Kazakh',
            'id': 'kk',
            'ownlang': 'Қазақ\x20Tілі',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'km': {
            'name': 'Khmer',
            'id': 'km',
            'ownlang': 'ភាសាខ្មែរ',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ko': {
            'name': 'Korean',
            'id': 'ko',
            'ownlang': '한국어',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'ku': {
            'name': 'Kurdish',
            'id': 'ku',
            'ownlang': 'کوردی',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ky': {
            'name': 'Kyrgyz',
            'id': 'ky',
            'ownlang': 'кыргызча',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'lo': {
            'name': 'Lao',
            'id': 'lo',
            'ownlang': 'ພາສາລາວ',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'la': {
            'name': 'Latin',
            'id': 'la',
            'ownlang': 'Latina',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'lv': {
            'name': 'Latvian',
            'id': 'lv',
            'ownlang': 'Latviešu',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'lt': {
            'name': 'Lithuanian',
            'id': 'lt',
            'ownlang': 'Lietuvių',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'lb': {
            'name': 'Luxembourgish',
            'id': 'lb',
            'ownlang': 'Lëtzebuergesch',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'mk': {
            'name': 'Macedonian',
            'id': 'mk',
            'ownlang': 'Mакедонски',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'mg': {
            'name': 'Malagasy',
            'id': 'mg',
            'ownlang': 'Malagasy',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ms': {
            'name': 'Malay',
            'id': 'ms',
            'ownlang': 'بهاس\x20ملايو',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ml': {
            'name': 'Malayalam',
            'id': 'ml',
            'ownlang': 'മലയാളം',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'mt': {
            'name': 'Maltese',
            'id': 'mt',
            'ownlang': 'Malti',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'mi': {
            'name': 'Maori',
            'id': 'mi',
            'ownlang': 'te\x20Reo\x20Māori',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'mr': {
            'name': 'Marathi',
            'id': 'mr',
            'ownlang': 'मराठी',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'mn': {
            'name': 'Mongolian',
            'id': 'mn',
            'ownlang': 'Монгол\x20Хэл',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ne': {
            'name': 'Nepali',
            'id': 'ne',
            'ownlang': 'नेपाली',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'no': {
            'name': 'Norwegian',
            'id': 'no',
            'ownlang': 'Norsk',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'ps': {
            'name': 'Pashto',
            'id': 'ps',
            'ownlang': 'پښتو',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'fa': {
            'name': 'Persian',
            'id': 'fa',
            'ownlang': 'فارسی',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'pl': {
            'name': 'Polish',
            'id': 'pl',
            'ownlang': 'Polski',
            'integrated': !![],
            'dic': ![],
            'deepl': !![]
        },
        'pt': {
            'name': 'Portuguese',
            'id': 'pt',
            'ownlang': 'Português',
            'integrated': ![],
            'dic': !![],
            'deepl': !![]
        },
        'pt-BR': {
            'name': 'Portuguese\x20(Brazil)',
            'id': 'pt-BR',
            'ownlang': 'Português\x20do\x20Brasil',
            'integrated': !![],
            'dic': !![],
            'deepl': ![]
        },
        'pt-PT': {
            'name': 'Portuguese\x20(Portugal)',
            'id': 'pt-PT',
            'ownlang': 'Português\x20do\x20Portugal',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'pa': {
            'name': 'Punjabi',
            'id': 'pa',
            'ownlang': 'पंजाबी',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ro': {
            'name': 'Romanian',
            'id': 'ro',
            'ownlang': 'Română',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ru': {
            'name': 'Russian',
            'id': 'ru',
            'ownlang': 'Pусский',
            'integrated': !![],
            'dic': !![],
            'deepl': !![]
        },
        'sm': {
            'name': 'Samoan',
            'id': 'sm',
            'ownlang': 'Gagana\x20Sāmoa',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'gd': {
            'name': 'Scottish\x20Gaelic',
            'id': 'gd',
            'ownlang': 'Gàidhlig',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'sr': {
            'name': 'Serbian',
            'id': 'sr',
            'ownlang': 'Српски',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'st': {
            'name': 'Sotho',
            'id': 'st',
            'ownlang': 'Sesotho',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'sn': {
            'name': 'Shona',
            'id': 'sn',
            'ownlang': 'Shona',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'sd': {
            'name': 'Sindhi',
            'id': 'sd',
            'ownlang': 'سنڌي',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'si': {
            'name': 'Sinhala',
            'id': 'si',
            'ownlang': 'සිංහල',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'sk': {
            'name': 'Slovak',
            'id': 'sk',
            'ownlang': 'Slovenčina',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'sl': {
            'name': 'Slovenian',
            'id': 'sl',
            'ownlang': 'Slovenščina',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'es': {
            'name': 'Spanish',
            'id': 'es',
            'ownlang': 'Español',
            'integrated': !![],
            'dic': !![],
            'deepl': !![]
        },
        'es-419': {
            'name': 'Spanish\x20(Latin\x20America)',
            'id': 'es-419',
            'ownlang': 'Español\x20latinoamericano',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'sw': {
            'name': 'Swahili',
            'id': 'sw',
            'ownlang': 'Kiswahili',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'sv': {
            'name': 'Swedish',
            'id': 'sv',
            'ownlang': 'Svenska',
            'integrated': !![],
            'dic': !![],
            'deepl': ![]
        },
        'tg': {
            'name': 'Tajik',
            'id': 'tg',
            'ownlang': 'тоҷикӣ',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'ta': {
            'name': 'Tamil',
            'id': 'ta',
            'ownlang': 'தமிழ்',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'te': {
            'name': 'Telugu',
            'id': 'te',
            'ownlang': 'తెలుగు',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'th': {
            'name': 'Thai',
            'id': 'th',
            'ownlang': 'ภาษาไทย',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'tr': {
            'name': 'Turkish',
            'id': 'tr',
            'ownlang': 'Türkçe',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'uk': {
            'name': 'Ukrainian',
            'id': 'uk',
            'ownlang': 'Yкраїнський',
            'integrated': !![],
            'dic': ![],
            'deepl': ![]
        },
        'ur': {
            'name': 'Urdu',
            'id': 'ur',
            'ownlang': 'اُردُو',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'uz': {
            'name': 'Uzbek',
            'id': 'uz',
            'ownlang': 'اوزبیک',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'vi': {
            'name': 'Vietnamese',
            'id': 'vi',
            'ownlang': 'Tiếng\x20Việt\x20Nam',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'cy': {
            'name': 'Welsh',
            'id': 'cy',
            'ownlang': 'Cymraeg',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'xh': {
            'name': 'Xhosa',
            'id': 'xh',
            'ownlang': 'Xhosa',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'yi': {
            'name': 'Yiddish',
            'id': 'yi',
            'ownlang': 'ייִדיש\x20ייִדיש‬',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'yo': {
            'name': 'Yoruba',
            'id': 'yo',
            'ownlang': 'Èdè\x20Yorùbá',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        },
        'zu': {
            'name': 'Zulu',
            'id': 'zu',
            'ownlang': 'Zulu',
            'integrated': ![],
            'dic': ![],
            'deepl': ![]
        }
    };
    var dN = setInterval(() => {
        if (document['querySelector']('html')['lang']) {
            clearInterval(dN);
            var dO = BDFDB['getDiscordLanguage']();
            BDFDB['languages']['$discord']['name'] = 'Discord\x20(' + dO['name'] + ')';
            BDFDB['languages']['$discord']['id'] = dO['id'];
            BDFDB['languages']['$discord']['ownlang'] = dO['ownlang'];
        }
    }, 0x64);
    BDFDB['getDiscordBuilt'] = function() {
        if (BDFDB['getDiscordBuilt']['built']) return BDFDB['getDiscordBuilt']['built'];
        else {
            var dP = null;
            try {
                dP = require(require('electron')['remote']['app']['getAppPath']() + '/build_info.json')['releaseChannel']['toLowerCase']();
            } catch (dQ) {
                try {
                    dP = require(require('electron')['remote']['app']['getAppPath']()['replace']('app.asar', '') + '/build_info.json')['releaseChannel']['toLowerCase']();
                } catch (dR) {
                    var dS = BDFDB['getDiscordVersion']();
                    if (dS) {
                        dS = dS['split']('.');
                        if (dS['length'] == 0x3 && !isNaN(dS = parseInt(dS[0x2]))) dP = dS > 0x12c ? 'stable' : da > 0xc8 ? 'canary' : 'ptb';
                        else dP = 'stable';
                    } else dP = 'stable';
                }
            }
            BDFDB['getDiscordBuilt']['built'] = dP;
            return dP;
        }
    };
    BDFDB['getDiscordVersion'] = function() {
        if (BDFDB['getDiscordBuilt']['version']) return BDFDB['getDiscordBuilt']['version'];
        else {
            var dT = null;
            try {
                dT = require('electron')['remote']['app']['getVersion']();
            } catch (dU) {
                dU = '';
            }
            BDFDB['getDiscordBuilt']['version'] = dT;
            return dT;
        }
    };
    BDFDB['getDiscordLanguage'] = function() {
        var dV = document['querySelector']('html')['lang'] || 'en-US';
        var dW = dV['split']('-');
        var dX = dW[0x0];
        var dY = dW[0x1] || '';
        dV = dY && dX['toUpperCase']() !== dY['toUpperCase']() ? dX + '-' + dY : dX;
        return BDFDB['languages'][dV] || BDFDB['languages'][dX] || BDFDB['languages']['en-US'];
    };
    BDFDB['getDiscordTheme'] = function() {
        return document['querySelectorAll'](BDFDB['dotCN']['themelight'])['length'] >= document['querySelectorAll'](BDFDB['dotCN']['themedark'])['length'] ? BDFDB['disCN']['themelight'] : BDFDB['disCN']['themedark'];
    };
    BDFDB['getDiscordMode'] = function() {
        return document['querySelectorAll'](BDFDB['dotCN']['messagegroupcompact'])['length'] >= document['querySelectorAll'](BDFDB['dotCN']['messagegroupcozy'])['length'] ? 'compact' : 'cozy';
    };
    BDFDB['getDiscordZoomFactor'] = function() {
        var dZ = BDFDB['getRects'](document['body']['firstElementChild']);
        var e0 = Math['round'](0x64 * window['outerWidth'] / dZ['width']);
        var e1 = Math['round'](0x64 * window['outerHeight'] / dZ['height']);
        return e0 < e1 ? e0 : e1;
    };
    BDFDB['getDiscordFontScale'] = function() {
        return parseInt(document['firstElementChild']['style']['fontSize']['replace']('%', ''));
    };
    BDFDB['isColorBlindModeEnabled'] = function() {
        return !!document['querySelector']('[mask=\x22url(#svg-mask-status-idle)\x22],[mask=\x22url(#svg-mask-status-dnd)\x22],[mask=\x22url(#svg-mask-status-offline)\x22],[mask=\x22url(#svg-mask-status-streaming)\x22]');
    };
    BDFDB['getReactInstance'] = function(e2) {
        if (!BDFDB['isObject'](e2)) return null;
        return e2[Object['keys'](e2)['find'](e3 => e3['startsWith']('__reactInternalInstance'))];
    };
    BDFDB['getReactValue'] = function(e4, e5) {
        if (!e4 || !e5) return null;
        let e6 = Node['prototype']['isPrototypeOf'](e4) ? BDFDB['getReactInstance'](e4) : e4;
        if (!BDFDB['isObject'](e6)) return null;
        let e7 = e6;
        for (let e8 of e5['split']('.')['filter'](e9 => e9)) {
            e7 = e7[e8];
            if (e7 == undefined) return null;
        }
        return e7;
    };
    BDFDB['getOwnerInstance'] = function(ea) {
        if (ea === undefined) return null;
        if (!ea['node'] && !ea['instance'] || !ea['name'] && (!ea['props'] || !Array['isArray'](ea['props']))) return null;
        var eb = ea['instance'] || BDFDB['getReactInstance'](ea['node']);
        if (!eb) return null;
        ea['name'] = ea['name'] && !Array['isArray'](ea['name']) ? Array['of'](ea['name']) : ea['name'];
        var ec = -0x1;
        var ed = ea['depth'] === undefined ? 0xf : ea['depth'];
        var ee = ea['up'] === undefined ? ![] : ea['up'];
        var ef = performance['now']();
        var eg = ea['time'] === undefined ? 0x96 : ea['time'];
        var eh = ee ? {
            'return': !![],
            'sibling': !![],
            '_reactInternalFiber': !![]
        } : {
            'child': !![],
            'sibling': !![],
            '_reactInternalFiber': !![]
        };
        var ei = {};
        var ej = em(eb);
        if (ea['all']) {
            for (let ek in ei) {
                if (ea['group'])
                    for (let eb in ei[ek]) delete ei[ek][eb]['BDFDBreactSearch'];
                else delete ei[ek]['BDFDBreactSearch'];
            }
            return ei;
        } else return ej;

        function em(eb) {
            ec++;
            if (!eb || Node['prototype']['isPrototypeOf'](eb) || BDFDB['getReactInstance'](eb) || ec > ed || performance['now']() - ef > eg) ep = null;
            else {
                var eo = Object['getOwnPropertyNames'](eb);
                var ep = null;
                for (let eq = 0x0; ep == null && eq < eo['length']; eq++) {
                    var er = eo[eq];
                    var es = eb[er];
                    var et = eb['stateNode'] ? eb['stateNode'] : eb['return'] ? eb['return']['stateNode'] : null;
                    if (et && !Node['prototype']['isPrototypeOf'](et) && (eb['type'] && ea['name'] && ea['name']['some'](eu => eb['type']['displayName'] === eu['split']('\x20')[0x0] || eb['type']['name'] === eu['split']('\x20')[0x0]) || ea['props'] && ea['props']['every'](ev => et[ev] !== undefined) || ea['defaultProps'] && ea['defaultProps']['every'](ew => et[ew] !== undefined))) {
                        if (ea['all'] === undefined || !ea['all']) ep = et;
                        else if (ea['all']) {
                            if (ea['noCopies'] === undefined || !ea['noCopies'] || ea['noCopies'] && !et['BDFDBreactSearch']) {
                                et['BDFDBreactSearch'] = !![];
                                if (ea['group']) {
                                    if (ea['name'] && eb['type'] && (eb['type']['displayName'] || eb['type']['name'])) {
                                        var ex = 'Default';
                                        for (let ey of ea['name'])
                                            if (eb['type']['displayName'] === ey['split']('\x20')[0x0] || eb['type']['name'] === ey['split']('\x20')[0x0]) {
                                                ex = ey;
                                                break;
                                            } if (typeof ei[ex] == 'undefined') ei[ex] = {};
                                        BDFDB['pushToObject'](ei[ex], et);
                                    }
                                } else BDFDB['pushToObject'](ei, et);
                            }
                        }
                    }
                    if (ep == null && (typeof es === 'object' || typeof es === 'function') && eh[er]) ep = em(es);
                }
            }
            ec--;
            return ep;
        }
    };
    BDFDB['getKeyInformation'] = function(ez) {
        if (ez === undefined) return null;
        if (!ez['node'] && !ez['instance'] || !ez['key']) return null;
        var eA = ez['instance'] || BDFDB['getReactInstance'](ez['node']);
        if (!eA) return null;
        var eB = -0x1;
        var eC = ez['depth'] === undefined ? 0xf : ez['depth'];
        var eD = performance['now']();
        var eE = ez['time'] === undefined ? 0x96 : ez['time'];
        var eF = {
            'props': !![],
            'state': !![],
            'stateNode': !![],
            'refs': !![],
            'updater': !![],
            'prototype': !![],
            'type': !![],
            'children': ez['up'] ? ![] : !![],
            'type': !![],
            'memoizedProps': !![],
            'memoizedState': !![],
            'child': ez['up'] ? ![] : !![],
            'return': ez['up'] ? !![] : ![],
            'sibling': ez['up'] ? ![] : !![],
            'firstEffect': !![]
        };
        var eG = {
            'contextSection': !![]
        };
        if (typeof ez['whitelist'] === 'object') Object['assign'](eF, ez['whiteList']);
        if (typeof ez['blacklist'] === 'object') Object['assign'](eG, ez['blacklist']);
        var eH = [];
        var eI = eJ(eA);
        if (ez['all']) return eH;
        else return eI;

        function eJ(eA) {
            eB++;
            if (!eA || Node['prototype']['isPrototypeOf'](eA) || BDFDB['getReactInstance'](eA) || eB > eC || performance['now']() - eD > eE) eM = null;
            else {
                var eL = Object['getOwnPropertyNames'](eA);
                var eM = null;
                for (let eN = 0x0; eM == null && eN < eL['length']; eN++) {
                    var eO = eL[eN];
                    if (eO && !eG[eO]) {
                        var eP = eA[eO];
                        if (ez['key'] === eO && (ez['value'] === undefined || ez['value'] === eP)) {
                            if (ez['all'] === undefined || !ez['all']) eM = eP;
                            else if (ez['all']) {
                                if (ez['noCopies'] === undefined || !ez['noCopies']) eH['push'](eP);
                                else if (ez['noCopies']) {
                                    var eQ = ![];
                                    for (let eR of eH)
                                        if (BDFDB['equals'](eP, eR)) {
                                            eQ = !![];
                                            break;
                                        } if (!eQ) eH['push'](eP);
                                }
                            }
                        } else if ((typeof eP === 'object' || typeof eP === 'function') && (eF[eO] || eO[0x0] == '.' || !isNaN(eO[0x0]))) eM = eJ(eP);
                    }
                }
            }
            eB--;
            return eM;
        }
    };
    BDFDB['WebModules'] = {};
    BDFDB['WebModules']['find'] = function(eS) {
        if (!BDFDB['WebModules']['find']['req']) {
            const c = 'BDFDB-WebModules';
            const eU = typeof window['webpackJsonp'] == 'function' ? window['webpackJsonp']([], {
                [c]: (eV, eW, eU) => eW['default'] = eU
            }, [c])['default'] : window['webpackJsonp']['push']([
                [], {
                    [c]: (eY, eZ, eU) => eY['exports'] = eU
                },
                [
                    [c]
                ]
            ]);
            delete eU['m'][c];
            delete eU['c'][c];
            BDFDB['WebModules']['find']['req'] = eU;
        }
        for (let f1 in BDFDB['WebModules']['find']['req']['c']) {
            if (BDFDB['WebModules']['find']['req']['c']['hasOwnProperty'](f1)) {
                var f2 = BDFDB['WebModules']['find']['req']['c'][f1]['exports'];
                if (f2 && f2['__esModule'] && f2['default'] && eS(f2['default'])) return f2['default'];
                if (f2 && eS(f2)) return f2;
            }
        }
    };
    BDFDB['WebModules']['cachedData'] = {
        'prop': {},
        'name': {},
        'proto': {}
    };
    BDFDB['WebModules']['findByProperties'] = function(f3) {
        f3 = Array['isArray'](f3) ? f3 : Array['from'](arguments);
        var f4 = JSON['stringify'](f3);
        if (BDFDB['WebModules']['cachedData']['prop'][f4]) return BDFDB['WebModules']['cachedData']['prop'][f4];
        else {
            var f5 = BDFDB['WebModules']['find'](f5 => f3['every'](f7 => f5[f7] !== undefined));
            if (f5) {
                BDFDB['WebModules']['cachedData']['prop'][f4] = f5;
                return f5;
            } else console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', f4 + '\x20[properties]\x20not\x20found\x20in\x20WebModules');
        }
    };
    BDFDB['WebModules']['findByName'] = function(f8) {
        var f9 = JSON['stringify'](f8);
        if (BDFDB['WebModules']['cachedData']['name'][f9]) return BDFDB['WebModules']['cachedData']['name'][f9];
        else {
            var fa = BDFDB['WebModules']['find'](fa => fa['displayName'] === f8);
            if (fa) {
                BDFDB['WebModules']['cachedData']['name'][f9] = fa;
                return fa;
            } else console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', f9 + '\x20[name]\x20not\x20found\x20in\x20WebModules');
        }
    };
    BDFDB['WebModules']['findByPrototypes'] = function(fc) {
        fc = Array['isArray'](fc) ? fc : Array['from'](arguments);
        var fd = JSON['stringify'](fc);
        if (BDFDB['WebModules']['cachedData']['proto'][fd]) return BDFDB['WebModules']['cachedData']['proto'][fd];
        else {
            var fe = BDFDB['WebModules']['find'](fe => fe['prototype'] && fc['every'](fg => fe['prototype'][fg] !== undefined));
            if (fe) {
                BDFDB['WebModules']['cachedData']['proto'][fd] = fe;
                return fe;
            } else console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', fd + '\x20[prototypes]\x20not\x20found\x20in\x20WebModules');
        }
    };
    BDFDB['WebModules']['patchtypes'] = ['before', 'instead', 'after'];
    BDFDB['WebModules']['patchmap'] = {
        'Account': 'FluxContainer(Account)',
        'BannedCard': 'BannedUser',
        'InvitationCard': 'InviteRow',
        'InviteCard': 'InviteRow',
        'PopoutContainer': 'Popout',
        'MemberCard': 'Member',
        'Note': 'FluxContainer(Note)',
        'WebhookCard': 'Webhook'
    };
    BDFDB['WebModules']['notfindablemodules'] = {
        'AuthWrapper': 'loginscreen',
        'BannedCard': 'guildsettingsbannedcard',
        'ChannelMember': 'member',
        'CircleIconButton': 'guildbuttoncontainer',
        'EmojiPicker': 'emojipicker',
        'FriendsOnline': 'friendsonline',
        'FriendRow': 'friendsrow',
        'Guild': 'guildcontainer',
        'GuildHeader': 'guildheader',
        'InstantInviteModal': 'invitemodalwrapper',
        'InvitationCard': 'invitemodalinviterow',
        'InviteCard': 'guildsettingsinvitecard',
        'PopoutContainer': 'popout',
        'PrivateChannelCall': 'callcurrentcontainer',
        'MemberCard': 'guildsettingsmembercard',
        'Message': 'message',
        'MessageOptionPopout': 'optionpopout',
        'MessageUsername': 'messageusername',
        'NameTag': 'nametag',
        'SearchResults': 'searchresultswrap',
        'TypingUsers': 'typing',
        'UserPopout': 'userpopout',
        'V2C_List': '_repolist',
        'V2C_PluginCard': '_repoheader',
        'V2C_ThemeCard': '_repoheader'
    };
    BDFDB['WebModules']['patch'] = function(fh, fi, fj, fk) {
        if (!fh || !fi || !fj || !Object['keys'](fk)['some'](fl => BDFDB['WebModules']['patchtypes']['includes'](fl))) return null;
        const fm = (typeof fj === 'string' ? fj : fj['name'])['toLowerCase']();
        const fn = (fo, fp) => (...fq) => {
            try {
                return fo(...fq);
            } catch (fr) {
                console['error']('Error\x20occurred\x20in\x20' + fp, fr);
            }
        };
        if (!fh['BDFDBpatch']) fh['BDFDBpatch'] = {};
        fi = Array['isArray'](fi) ? fi : Array['of'](fi);
        for (let fs of fi) {
            if (!fh[fs]) fh[fs] = () => {};
            const ft = fh[fs];
            if (!fh['BDFDBpatch'][fs]) {
                fh['BDFDBpatch'][fs] = {};
                for (let fu of BDFDB['WebModules']['patchtypes']) fh['BDFDBpatch'][fs][fu] = {};
                fh['BDFDBpatch'][fs]['originalMethod'] = ft;
                fh[fs] = function() {
                    const fv = {
                        'thisObject': this,
                        'methodArguments': arguments,
                        'originalMethod': ft,
                        'originalMethodName': fs,
                        'callOriginalMethod': () => fv['returnValue'] = fv['originalMethod']['apply'](fv['thisObject'], fv['methodArguments'])
                    };
                    if (global['BDFDB'] && typeof BDFDB === 'object' && BDFDB['loaded'] && fh['BDFDBpatch'][fs]) {
                        if (!BDFDB['isObjectEmpty'](fh['BDFDBpatch'][fs]['before']))
                            for (let c in BDFDB['sortObject'](fh['BDFDBpatch'][fs]['before'])) {
                                fn(fh['BDFDBpatch'][fs]['before'][c], '`before`\x20callback\x20of\x20' + fh[fs]['displayName'])(fv);
                            }
                        if (BDFDB['isObjectEmpty'](fh['BDFDBpatch'][fs]['instead'])) fv['callOriginalMethod']();
                        else
                            for (let c in BDFDB['sortObject'](fh['BDFDBpatch'][fs]['instead'])) {
                                const fy = fn(fh['BDFDBpatch'][fs]['instead'][c], '`instead`\x20callback\x20of\x20' + fh[fs]['displayName'])(fv);
                                if (fy !== undefined) fv['returnValue'] = fy;
                            }
                        if (!BDFDB['isObjectEmpty'](fh['BDFDBpatch'][fs]['after']))
                            for (let c in BDFDB['sortObject'](fh['BDFDBpatch'][fs]['after'])) {
                                fn(fh['BDFDBpatch'][fs]['after'][c], '`after`\x20callback\x20of\x20' + fh[fs]['displayName'])(fv);
                            }
                    } else fv['callOriginalMethod']();
                    return fv['returnValue'];
                };
            }
            for (let fA of BDFDB['WebModules']['patchtypes'])
                if (typeof fk[fA] == 'function') fh['BDFDBpatch'][fs][fA][fm] = fk[fA];
        }
        const fB = () => {
            BDFDB['WebModules']['unpatch'](fh, fi, fj);
        };
        if (fj && typeof fj == 'object') {
            if (!Array['isArray'](fj['patchCancels'])) fj['patchCancels'] = [];
            fj['patchCancels']['push'](fB);
        }
        return fB;
    };
    BDFDB['WebModules']['unpatch'] = function(fC, fD, fE) {
        if (!fC || !fC['BDFDBpatch']) return;
        const fF = !fE ? null : (typeof fE === 'string' ? fE : fE['name'])['toLowerCase']();
        fD = Array['isArray'](fD) ? fD : Array['of'](fD);
        for (let fG of fD) {
            if (fC[fG] && fC['BDFDBpatch'][fG]) {
                for (let fH of BDFDB['WebModules']['patchtypes']) {
                    if (fF) delete fC['BDFDBpatch'][fG][fH][fF];
                    else delete fC['BDFDBpatch'][fG][fH];
                }
                var fI = !![];
                for (let fH of BDFDB['WebModules']['patchtypes'])
                    if (!BDFDB['isObjectEmpty'](fC['BDFDBpatch'][fG][fH])) fI = ![];
                if (fI) {
                    fC[fG] = fC['BDFDBpatch'][fG]['originalMethod'];
                    delete fC['BDFDBpatch'][fG];
                    if (BDFDB['isObjectEmpty'](fC['BDFDBpatch'])) delete fC['BDFDBpatch'];
                }
            }
        }
    };
    BDFDB['WebModules']['unpatchall'] = function(fK) {
        if (BDFDB['isObject'](fK) && Array['isArray'](fK['patchCancels']))
            for (let fL of fK['patchCancels']) fL();
    };
    BDFDB['WebModules']['forceAllUpdates'] = function(fM, fN) {
        fN = fN && BDFDB['WebModules']['patchmap'][fN] ? BDFDB['WebModules']['patchmap'][fN] + '\x20' + fN : fN;
        if (BDFDB['isObject'](fM) && BDFDB['isObject'](fM['patchModules']) && (!fN || fM['patchModules'][fN])) {
            const fO = document['querySelector'](BDFDB['dotCN']['app']);
            const fP = document['querySelector']('#bd-settingspane-container\x20' + BDFDB['dotCN']['scrollerwrap']);
            if (fO) {
                var fQ = [];
                for (let fR in fM['patchModules']) {
                    var fS = Array['isArray'](fM['patchModules'][fR]) ? fM['patchModules'][fR] : Array['of'](fM['patchModules'][fR]);
                    if (fS['includes']('componentDidUpdate') || fS['includes']('componentDidMount') || fS['includes']('render')) fQ['push'](fR);
                }
                fQ = fN ? fQ['filter'](fT => fT == fN) : fQ;
                if (fQ['length'] > 0x0) {
                    const fU = BDFDB['getOwnerInstance']({
                        'node': fO,
                        'name': fQ,
                        'all': !![],
                        'noCopies': !![],
                        'group': !![],
                        'depth': 0x5f5e0ff,
                        'time': 0x5f5e0ff
                    });
                    for (let fR in fU)
                        for (let fW in fU[fR]) BDFDB['WebModules']['initiateProcess'](fM, fU[fR][fW], fR, ['componentDidUpdate', 'componentDidMount', 'render']);
                    if (fP) {
                        const fX = BDFDB['getOwnerInstance']({
                            'node': fP,
                            'name': fQ,
                            'all': !![],
                            'noCopies': !![],
                            'group': !![],
                            'depth': 0x5f5e0ff,
                            'time': 0x5f5e0ff
                        });
                        for (let fR in fX)
                            for (let fW in fX[fR]) BDFDB['WebModules']['initiateProcess'](fM, fX[fR][fW], fR, ['componentDidUpdate', 'componentDidMount', 'render']);
                    }
                }
            }
        }
    };
    BDFDB['WebModules']['patchModules'] = function(g0) {
        if (BDFDB['isObject'](g0) && BDFDB['isObject'](g0['patchModules'])) {
            for (let g1 in g0['patchModules']) {
                var g2 = BDFDB['WebModules']['patchmap'][g1];
                if (g2) {
                    g0['patchModules'][g2 + '\x20' + g1] = g0['patchModules'][g1];
                    delete g0['patchModules'][g1];
                    if (!BDFDB['WebModules']['notfindablemodules'][g1]) g5(BDFDB['WebModules']['findByName'](g2), g2 + '\x20' + g1);
                } else if (!BDFDB['WebModules']['notfindablemodules'][g1]) g5(BDFDB['WebModules']['findByName'](g1), g1);
            }
            for (let g1 in BDFDB['WebModules']['notfindablemodules']) {
                var g4 = BDFDB['WebModules']['patchmap'][g1] ? BDFDB['WebModules']['patchmap'][g1] + '\x20' + g1 : g1;
                if (BDFDB['DiscordClasses'][BDFDB['WebModules']['notfindablemodules'][g1]] && g0['patchModules'][g4]) gc(BDFDB['WebModules']['notfindablemodules'][g1], g4);
            }

            function g5(g6, g1) {
                if (g6) {
                    var g4 = g1['split']('\x20')[0x0];
                    g6 = g6['displayName'] == g4 ? g6 : BDFDB['getOwnerInstance']({
                        'instance': g6,
                        'name': g4,
                        'up': !![]
                    });
                    if (g6) {
                        var g9 = g6['_reactInternalFiber'] && g6['_reactInternalFiber']['type'] ? g6['_reactInternalFiber']['type'] : g6;
                        var ga = {};
                        ga[g0['name'] == '$BDFDB' ? 'before' : 'after'] = gb => {
                            if (global['BDFDB'] && typeof BDFDB === 'object' && BDFDB['loaded']) BDFDB['WebModules']['initiateProcess'](g0, gb['thisObject'], g1, [gb['originalMethodName']]);
                        };
                        BDFDB['WebModules']['patch'](g9['prototype'], g0['patchModules'][g1], g0, ga);
                    }
                }
            }

            function gc(gd, g1) {
                var gf = ![];
                const gg = document['querySelector'](BDFDB['dotCN']['app']);
                const gh = document['querySelector']('#bd-settingspane-container\x20' + BDFDB['dotCN']['scrollerwrap']);
                if (gg) {
                    var gi = BDFDB['getOwnerInstance']({
                        'node': gg,
                        'name': g1,
                        'depth': 0x5f5e0ff,
                        'time': 0x5f5e0ff
                    });
                    if (gi) {
                        gf = !![];
                        g5(gi, g1);
                    }
                }
                if (!gf && gh) {
                    var gj = BDFDB['getOwnerInstance']({
                        'node': gh,
                        'name': g1,
                        'depth': 0x5f5e0ff,
                        'time': 0x5f5e0ff
                    });
                    if (gj) {
                        gf = !![];
                        g5(gj, g1);
                    }
                }
                if (!gf) {
                    var gk = ![],
                        gl = new MutationObserver(gm => {
                            gm['forEach'](gn => {
                                gn['addedNodes']['forEach'](go => {
                                    var gp = null;
                                    if (!gk && go['tagName'] && (gp = BDFDB['containsClass'](go, BDFDB['disCN'][gd]) ? go : go['querySelector'](BDFDB['dotCN'][gd])) != null) {
                                        instance = BDFDB['getReactInstance'](gp);
                                        if (gq(instance, g1)) {
                                            gk = !![];
                                            gl['disconnect']();
                                            g5(instance, g1);
                                            BDFDB['WebModules']['forceAllUpdates'](g0, g1);
                                        }
                                    }
                                });
                            });
                        });
                    BDFDB['addObserver'](g0, BDFDB['dotCN']['appmount'], {
                        'name': 'checkForInstanceObserver',
                        'instance': gl,
                        'multi': !![]
                    }, {
                        'childList': !![],
                        'subtree': !![]
                    });
                }
            }

            function gq(gr, g1) {
                if (!gr) return ![];
                gr = gr['displayName'] == g1 ? gr : BDFDB['getOwnerInstance']({
                    'instance': gr,
                    'name': g1,
                    'up': !![]
                });
                return gr && (g1 != 'V2C_PluginCard' && g1 != 'V2C_ThemeCard' || g1 == 'V2C_PluginCard' && BDFDB['checkWhichRepoPage']() == 'plugins' || g1 == 'V2C_ThemeCard' && BDFDB['checkWhichRepoPage']() == 'themes');
            }
        }
    };
    BDFDB['WebModules']['initiateProcess'] = function(gt, gu, gv, gw) {
        if (BDFDB['isObject'](gt) && gu) {
            gt = gt['name'] == '$BDFDB' ? se : gt;
            gv = (gv['split']('\x20')[0x1] || gv)['replace'](/[^A-z0-9]|_/g, '');
            gv = gv[0x0]['toUpperCase']() + gv['slice'](0x1);
            if (typeof gt['process' + gv] == 'function') {
                var gx = BDFDB['React']['findDOMNodeSafe'](gu);
                if (gx) gt['process' + gv](gu, gx, gw);
                else setImmediate(() => {
                    gx = BDFDB['React']['findDOMNodeSafe'](gu);
                    if (gx) gt['process' + gv](gu, gx, gw);
                });
            }
        }
    };
    var gy = BDFDB['WebModules']['findByProperties']('createElement', 'cloneElement');
    var gz = BDFDB['WebModules']['findByProperties']('render', 'findDOMNode');
    if (gy && gz) {
        BDFDB['React'] = Object['assign']({}, gy, gz);
        BDFDB['React']['findDOMNodeSafe'] = function(gA) {
            if (!gA || !gA['updater'] || typeof gA['updater']['isMounted'] !== 'function' || !gA['updater']['isMounted'](gA)) return null;
            var gB = gz['findDOMNode'](gA) || BDFDB['getReactValue'](gA, 'child.stateNode');
            return Node['prototype']['isPrototypeOf'](gB) ? gB : null;
        };
    };
    BDFDB['addOnSwitchListener'] = function(gC) {
        if (typeof gC['onSwitch'] === 'function') {
            BDFDB['removeOnSwitchListener'](gC);
            var gD = document['querySelector'](BDFDB['dotCN']['guildswrapper'] + '\x20+\x20*\x20>\x20' + BDFDB['dotCN']['chatspacer']);
            if (gD) {
                var gE = new MutationObserver(gF => {
                    gF['forEach'](gG => {
                        if (gG['target'] && BDFDB['containsClass'](gG['target'], BDFDB['disCN']['nochannel'])) gC['onSwitch']();
                    });
                });
                var gH = gD['querySelector'](BDFDB['dotCNC']['chat'] + BDFDB['dotCN']['nochannel']);
                if (gH) gE['observe'](gH, {
                    'attributes': !![]
                });
                gC['onSwitchFix'] = new MutationObserver(gI => {
                    gI['forEach'](gJ => {
                        if (gJ['addedNodes']) {
                            gJ['addedNodes']['forEach'](gK => {
                                if (BDFDB['containsClass'](gK, BDFDB['disCN']['chat'], BDFDB['disCN']['nochannel'], ![])) gE['observe'](gK, {
                                    'attributes': !![]
                                });
                            });
                        }
                    });
                });
                gC['onSwitchFix']['observe'](gD, {
                    'childList': !![]
                });
            }
        }
    };
    BDFDB['removeOnSwitchListener'] = function(gL) {
        if (typeof gL['onSwitch'] === 'function' && BDFDB['isObject'](gL['onSwitchFix'])) {
            gL['onSwitchFix']['disconnect']();
            delete gL['onSwitchFix'];
        }
    };
    BDFDB['addContextListener'] = function(gM) {
        for (let gN of ['User', 'Guild', 'Channel', 'GroupDM', 'Message', 'Native', 'UserSettingsCog']) {
            if (typeof gM['on' + gN + 'Context'] === 'function' || typeof gM['on' + gN + 'ContextMenu'] === 'function') {
                if (gN == 'GroupDM') {
                    var gO = ![],
                        gP = new MutationObserver(gQ => {
                            gQ['forEach'](gR => {
                                gR['addedNodes']['forEach'](gS => {
                                    var gT = null;
                                    if (!gO && gS['tagName'] && (gT = BDFDB['containsClass'](gS, BDFDB['disCN']['contextmenu']) ? gS : gS['querySelector'](BDFDB['dotCN']['contextmenu'])) != null) {
                                        var gU = BDFDB['getReactInstance'](gT);
                                        if (gU && gU['return'] && gU['return']['type'] && gU['return']['type']['displayName'] == gN + 'ContextMenu') {
                                            gO = !![];
                                            gP['disconnect']();
                                            gV(gN, gU['return']['type']);
                                            gZ(gN, gU['return']['stateNode'], gU['stateNode']);
                                        }
                                    }
                                });
                            });
                        });
                    BDFDB['addObserver'](gM, BDFDB['dotCN']['appmount'], {
                        'name': 'checkForContextObserver',
                        'instance': gP,
                        'multi': !![]
                    }, {
                        'childList': !![],
                        'subtree': !![]
                    });
                } else gV(gN, BDFDB['WebModules']['findByName'](gN + 'ContextMenu'));
            }
        }

        function gV(gN, gX) {
            if (gX && gX['prototype']) BDFDB['WebModules']['patch'](gX['prototype'], 'componentDidMount', gM, {
                'after': gY => {
                    gZ(gN, gY['thisObject'], BDFDB['React']['findDOMNodeSafe'](gY['thisObject']));
                }
            });
        }

        function gZ(gN, h1, h2) {
            if (h1 && h2) {
                if (typeof gM['on' + gN + 'Context'] === 'function') gM['on' + gN + 'Context'](h1, h2);
                if (typeof gM['on' + gN + 'ContextMenu'] === 'function') gM['on' + gN + 'ContextMenu'](h1, h2);
                BDFDB['initElements'](h2, gM);
                BDFDB['updateContextPosition'](h2);
            }
        }
    };
    BDFDB['addSettingsButtonListener'] = function(h3) {
        if (BDFDB['isBDv2']() && typeof h3['getSettingsPanel'] === 'function') {
            BDFDB['removeSettingsButtonListener'](h3);
            BDFDB['appendSettingsButton'](h3);
            var h4 = document['querySelector']('.bd-content-region\x20>\x20.bd-content');
            if (h4) {
                h3['settingsButtonObserver'] = new MutationObserver(h5 => {
                    h5['forEach'](h6 => {
                        if (h6['addedNodes']) {
                            h6['addedNodes']['forEach'](h7 => {
                                if (h7['tagName'] && BDFDB['containsClass'](h7, 'active')) BDFDB['appendSettingsButton'](h3);
                            });
                        }
                    });
                });
                h3['settingsButtonObserver']['observe'](h4, {
                    'childList': !![]
                });
            }
        }
    };
    BDFDB['appendSettingsButton'] = function(h8) {
        var h9 = document['querySelector'](BDFDB['dotCN']['_bdv2card'] + '[data-plugin-id=' + h8['id'] + ']');
        if (h9) {
            var ha = BDFDB['htmlToElement']('<div\x20class=\x22BDFDB-settingsbutton\x20' + (BDFDB['disCNS']['_bdv2button'] + BDFDB['disCN']['_bdv2hastooltip']) + '\x22><span\x20class=\x22' + BDFDB['disCN']['_bdv2materialdesignicon'] + '\x22><svg\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22M12,15.5C10.07,15.5\x208.5,13.93\x208.5,12C8.5,10.07\x2010.07,8.5\x2012,8.5C13.93,8.5\x2015.5,10.07\x2015.5,12C15.5,13.93\x2013.93,15.5\x2012,15.5M19.43,12.97C19.47,12.65\x2019.5,12.33\x2019.5,12C19.5,11.67\x2019.47,11.34\x2019.43,11L21.54,9.37C21.73,9.22\x2021.78,8.95\x2021.66,8.73L19.66,5.27C19.54,5.05\x2019.27,4.96\x2019.05,5.05L16.56,6.05C16.04,5.66\x2015.5,5.32\x2014.87,5.07L14.5,2.42C14.46,2.18\x2014.25,2\x2014,2H10C9.75,2\x209.54,2.18\x209.5,2.42L9.13,5.07C8.5,5.32\x207.96,5.66\x207.44,6.05L4.95,5.05C4.73,4.96\x204.46,5.05\x204.34,5.27L2.34,8.73C2.21,8.95\x202.27,9.22\x202.46,9.37L4.57,11C4.53,11.34\x204.5,11.67\x204.5,12C4.5,12.33\x204.53,12.65\x204.57,12.97L2.46,14.63C2.27,14.78\x202.21,15.05\x202.34,15.27L4.34,18.73C4.46,18.95\x204.73,19.03\x204.95,18.95L7.44,17.94C7.96,18.34\x208.5,18.68\x209.13,18.93L9.5,21.58C9.54,21.82\x209.75,22\x2010,22H14C14.25,22\x2014.46,21.82\x2014.5,21.58L14.87,18.93C15.5,18.67\x2016.04,18.34\x2016.56,17.94L19.05,18.95C19.27,19.03\x2019.54,18.95\x2019.66,18.73L21.66,15.27C21.78,15.05\x2021.73,14.78\x2021.54,14.63L19.43,12.97Z\x22></path></svg></span></div>');
            h9['insertBefore'](ha, h9['querySelector'](BDFDB['d']['_bdv2button']));
            ha['addEventListener']('mouseenter', () => {
                BDFDB['createTooltip']('Settings', ha, {
                    'type': 'top'
                });
                BDFDB['addClass'](ha, BDFDB['disCN']['_bdv2tooltipopen']);
            });
            ha['addEventListener']('mouseleave', () => {
                BDFDB['removeClass'](ha, BDFDB['disCN']['_bdv2tooltipopen']);
            });
            ha['addEventListener']('click', () => {
                var hb = BDFDB['htmlToElement']('<span\x20class=\x22BDFDB-modal\x20BDFDB-settingsmodal\x20' + h8['id'] + '-settingsmodal\x22><div\x20class=\x22' + BDFDB['disCN']['backdrop'] + '\x22></div><div\x20class=\x22' + BDFDB['disCN']['modal'] + '\x22><div\x20class=\x22' + BDFDB['disCN']['modalinner'] + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['modalsub'] + BDFDB['disCN']['modalsizemedium']) + '\x22\x20style=\x22width:600px\x20!important;\x22><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['aligncenter'] + BDFDB['disCNS']['nowrap'] + BDFDB['disCN']['modalheader']) + '\x22\x20style=\x22flex:0\x200\x20auto;\x22><div\x20class=\x22' + BDFDB['disCN']['flexchild'] + '\x22\x20style=\x22flex:1\x201\x20auto;\x22><h4\x20class=\x22' + (BDFDB['disCNS']['h4'] + BDFDB['disCNS']['headertitle'] + BDFDB['disCNS']['size16'] + BDFDB['disCNS']['height20'] + BDFDB['disCNS']['weightsemibold'] + BDFDB['disCNS']['defaultcolor'] + BDFDB['disCNS']['h4defaultmargin'] + BDFDB['disCN']['marginreset']) + '\x22>' + h8['name'] + '\x20Settings</h4></div><button\x20type=\x22button\x22\x20class=\x22' + (BDFDB['disCNS']['modalclose'] + BDFDB['disCNS']['flexchild'] + BDFDB['disCNS']['button'] + BDFDB['disCNS']['buttonlookblank'] + BDFDB['disCNS']['buttoncolorbrand'] + BDFDB['disCN']['buttongrow']) + '\x22><div\x20class=\x22' + BDFDB['disCN']['buttoncontents'] + '\x22><svg\x20class=\x22\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2012\x2012\x22><g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22><path\x20d=\x22M0\x200h12v12H0\x22></path><path\x20class=\x22fill\x22\x20fill=\x22currentColor\x22\x20d=\x22M9.5\x203.205L8.795\x202.5\x206\x205.295\x203.205\x202.5l-.705.705L5.295\x206\x202.5\x208.795l.705.705L6\x206.705\x208.795\x209.5l.705-.705L6.705\x206\x22></path></g></svg></div></button></div><div\x20class=\x22' + (BDFDB['disCNS']['scrollerwrap'] + BDFDB['disCNS']['modalcontent'] + BDFDB['disCNS']['scrollerthemed'] + BDFDB['disCN']['themeghosthairline']) + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['scroller'] + BDFDB['disCN']['modalsubinner']) + '\x22></div></div></div></div></div></span>');
                var hc = h8['getSettingsPanel']();
                hb['querySelector'](BDFDB['dotCN']['modalsubinner'])['appendChild'](typeof hc == 'string' ? BDFDB['htmlToElement'](hc) : hc);
                if (typeof h8['onSettingsClosed'] === 'function') BDFDB['addChildEventListener'](hb, 'click', BDFDB['dotCNC']['modalclose'] + BDFDB['dotCN']['backdrop'], () => {
                    h8['onSettingsClosed']();
                });
                BDFDB['appendModal'](hb);
            });
        }
    };
    BDFDB['removeSettingsButtonListener'] = function(hd) {
        if (BDFDB['isBDv2']() && typeof hd['settingsButtonObserver'] === 'object') {
            BDFDB['removeEles']('.bd-card[data-plugin-id=' + hd['id'] + ']\x20.BDFDB-settingsbutton');
            hd['settingsButtonObserver']['disconnect']();
            delete hd['settingsButtonObserver'];
        }
    };
    var he = {},
        hf = BDFDB['WebModules']['findByProperties']('Messages'),
        hg = hf ? Object['assign']({}, hf['_proxyContext']['defaultMessages']) : {};
    BDFDB['LanguageStrings'] = new Proxy(hg, {
        'get': function(hh, hi) {
            var hj = hf['Messages'][hi];
            if (!hj) console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', hi + '\x20not\x20found\x20in\x20BDFDB.LanguageStrings');
            else {
                var hk = typeof hj == 'object' ? hj['format'](Object['assign']({}, he)) : hj;
                if (typeof hk == 'string') return hk;
                else if (Array['isArray'](hk)) {
                    var hl = '';
                    for (let hm of hk) {
                        if (typeof hm == 'string') hl += BDFDB['encodeToHTML'](hm);
                        else if (BDFDB['isObject'](hm) && hm['props']) hl += '<' + hm['type'] + '>' + BDFDB['encodeToHTML'](hm['props']['children'][0x0]['toString']()) + '</' + hm['type'] + '>';
                    }
                    return hl;
                } else console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', hi + '\x20could\x20not\x20be\x20parsed\x20from\x20BDFDB.LanguageStrings');
            }
            return '';
        }
    });
    BDFDB['LanguageStringsCheck'] = new Proxy(hg, {
        'get': function(hn, ho) {
            return hf['Messages'][ho];
        }
    });
    BDFDB['LanguageStringsFormat'] = function(hp, hq) {
        if (hp && hq) {
            var hr = hf['Messages'][hp];
            if (hr && typeof hr == 'object' && typeof hr['format'] == 'function') {
                try {
                    var hs = {};
                    for (let ht in he) hs[ht] = hq;
                    var hu = hr['format'](hs);
                    if (typeof hu == 'string') return hu;
                    else if (Array['isArray'](hu)) {
                        var hv = '';
                        for (let hw of hu) {
                            if (typeof hw == 'string') hv += BDFDB['encodeToHTML'](hw);
                            else if (BDFDB['isObject'](hw) && hw['props']) hv += '<' + hw['type'] + '>' + BDFDB['encodeToHTML'](hw['props']['children'][0x0]['toString']()) + '</' + hw['type'] + '>';
                        }
                        return hv;
                    }
                } catch (hx) {
                    console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', hp + '\x20failed\x20to\x20format\x20string\x20in\x20BDFDB.LanguageStrings');
                }
            } else console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', hp + '\x20is\x20not\x20a\x20formatable\x20string\x20in\x20BDFDB.LanguageStrings');
        } else console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', hp + '\x20enter\x20a\x20valid\x20key\x20and\x20value\x20to\x20format\x20the\x20string');
        return '';
    };
    if (hf)
        for (let hy in hg) {
            try {
                BDFDB['LanguageStrings'][hy];
            } catch (hz) {
                let hA = hz['toString']()['split']('for:\x20')[0x1];
                if (hA && typeof hA == 'string' && !he[hA]) he[hA] = '{{' + hA['toLowerCase']() + '}}';
            }
        };
    BDFDB['equals'] = function(hB, hC, hD) {
        var hE = -0x1;
        if (hD === undefined || typeof hD !== 'boolean') hD = ![];
        return hF(hB, hC);

        function hF(hG, hH) {
            hE++;
            var hI = !![];
            if (hE > 0x3e8) hI = null;
            else {
                if (typeof hG !== typeof hH) hI = ![];
                else if (typeof hG === 'undefined') hI = !![];
                else if (typeof hG === 'symbol') hI = !![];
                else if (typeof hG === 'boolean') hI = hG == hH;
                else if (typeof hG === 'string') hI = hG == hH;
                else if (typeof hG === 'number') {
                    if (isNaN(hG) || isNaN(hH)) hI = isNaN(hG) == isNaN(hH);
                    else hI = hG == hH;
                } else if (!hG && !hH) hI = !![];
                else if (!hG || !hH) hI = ![];
                else if (typeof hG === 'function' || typeof hG === 'object') {
                    var hJ = Object['getOwnPropertyNames'](hG);
                    var hK = Object['getOwnPropertyNames'](hH);
                    if (hJ['length'] !== hK['length']) hI = ![];
                    else
                        for (let hL = 0x0; hI === !![] && hL < hJ['length']; hL++) {
                            if (hD) hI = hF(hG[hJ[hL]], hH[hK[hL]]);
                            else hI = hF(hG[hJ[hL]], hH[hJ[hL]]);
                        }
                }
            }
            hE--;
            return hI;
        }
    };
    var hM = BDFDB['WebModules']['findByProperties']('getCurrentUser')['getCurrentUser']();
    BDFDB['myData'] = new Proxy(hM || {}, {
        'get': function(hN, hO) {
            if (!hM) hM = BDFDB['WebModules']['findByProperties']('getCurrentUser')['getCurrentUser']();
            return hM ? hM[hO] : null;
        }
    });
    BDFDB['getGuildIcon'] = function(c) {
        var hQ = BDFDB['WebModules']['findByProperties']('getGuild', 'getGuilds')['getGuild'](typeof c == 'number' ? c['toFixed']() : c);
        if (!hQ || !hQ['icon']) return null;
        return BDFDB['WebModules']['findByProperties']('getGuildIconURL')['getGuildIconURL'](hQ)['split']('?')[0x0];
    };
    BDFDB['getGuildBanner'] = function(c) {
        var hS = BDFDB['WebModules']['findByProperties']('getGuild', 'getGuilds')['getGuild'](typeof c == 'number' ? c['toFixed']() : c);
        if (!hS || !hS['banner']) return null;
        return BDFDB['WebModules']['findByProperties']('getGuildBannerURL')['getGuildBannerURL'](hS)['split']('?')[0x0];
    };
    BDFDB['getUserStatus'] = function(c = BDFDB['myData']['id']) {
        c = typeof c == 'number' ? c['toFixed']() : c;
        var hU = BDFDB['WebModules']['findByProperties']('getApplicationActivity', 'getStatus');
        return BDFDB['WebModules']['findByProperties']('isStreaming')['isStreaming'](hU['getApplicationActivity'](c)) ? 'streaming' : hU['getStatus'](c);
    };
    BDFDB['getUserStatusColor'] = function(hV) {
        hV = typeof hV == 'string' ? hV['toLowerCase']() : null;
        switch (hV) {
            case 'online':
                return '#43b581';
            case 'idle':
                return '#faa61a';
            case 'dnd':
                return '#f04747';
            case 'streaming':
                return '#593695';
            default:
                return '#747f8d';
        }
    };
    BDFDB['getUserAvatar'] = function(c = BDFDB['myData']['id']) {
        var hX = BDFDB['WebModules']['findByProperties']('getUser', 'getUsers')['getUser'](typeof c == 'number' ? c['toFixed']() : c);
        if (!hX) return 'https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png';
        else return ((hX['avatar'] ? '' : 'https://discordapp.com') + BDFDB['WebModules']['findByProperties']('getUserAvatarURL')['getUserAvatarURL'](hX))['split']('?')[0x0];
    };
    BDFDB['Permissions'] = BDFDB['WebModules']['findByProperties']('Permissions', 'ActivityTypes')['Permissions'];
    BDFDB['isUserAllowedTo'] = function(hY, c = BDFDB['myData']['id'], i0 = BDFDB['WebModules']['findByProperties']('getLastSelectedChannelId')['getChannelId']()) {
        if (!BDFDB['Permissions'][hY]) console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', hY + '\x20not\x20found\x20in\x20Permissions');
        else {
            var i1 = BDFDB['WebModules']['findByProperties']('getChannels')['getChannel'](i0);
            if (i1) return BDFDB['WebModules']['findByProperties']('getChannelPermissions', 'canUser')['canUser'](c, BDFDB['Permissions'][hY], i1);
        }
        return ![];
    };
    BDFDB['getChannelIcon'] = function(c) {
        var i3 = BDFDB['WebModules']['findByProperties']('getChannel', 'getChannels')['getChannel'](c = typeof c == 'number' ? c['toFixed']() : c);
        if (!i3) return null;
        if (!i3['icon']) return i3['type'] == 0x1 ? BDFDB['getUserAvatar'](i3['recipients'][0x0]) : i3['type'] == 0x3 ? 'https://discordapp.com/assets/f046e2247d730629309457e902d5c5b3.svg' : null;
        return BDFDB['WebModules']['findByProperties']('getChannelIconURL')['getChannelIconURL'](i3)['split']('?')[0x0];
    };
    BDFDB['getParsedLength'] = function(i4, i5 = BDFDB['WebModules']['findByProperties']('getLastSelectedChannelId')['getChannelId']()) {
        if (!i4) return 0x0;
        var i6 = BDFDB['WebModules']['findByProperties']('getChannels', 'getChannel')['getChannel'](i5);
        var i7 = i4['indexOf']('/') == 0x0 || i4['indexOf']('s/') == 0x0 || i4['indexOf']('+:') == 0x0 ? i4['length'] : BDFDB['WebModules']['findByProperties']('parse', 'isMentioned')['parse'](i6, i4)['content']['length'];
        return i7 > i4['length'] ? i7 : i4['length'];
    };
    BDFDB['readServerList'] = function() {
        var i8 = [],
            i9 = BDFDB['getOwnerInstance']({
                'node': document['querySelector'](BDFDB['dotCN']['guilds']),
                'name': 'Guild',
                'all': !![],
                'noCopies': !![],
                'depth': 0x5f5e0ff,
                'time': 0x5f5e0ff
            });
        for (let ia in i9)
            if (i9[ia]['props'] && i9[ia]['props']['guild'] && i9[ia]['_reactInternalFiber']['child']) i8['push'](Object['assign'](new i9[ia]['props']['guild']['constructor'](i9[ia]['props']['guild']), {
                'div': BDFDB['React']['findDOMNodeSafe'](i9[ia]),
                'instance': i9[ia]
            }));
        return i8;
    };
    BDFDB['readUnreadServerList'] = function(ib) {
        var ic = [];
        for (let id of ib === undefined || !Array['isArray'](ib) ? BDFDB['readServerList']() : ib) {
            let ie = Node['prototype']['isPrototypeOf'](id) ? id : id && id['div'] ? id['div'] : null;
            let ig = BDFDB['getReactValue'](ie, 'return.stateNode.props');
            if (ig && (ig['unread'] || ig['badge'] > 0x0)) ic['push'](id);
        }
        return ic;
    };
    BDFDB['readMutedServerList'] = function(ih) {
        var ii = [],
            ij = BDFDB['WebModules']['findByProperties']('isGuildOrCategoryOrChannelMuted');
        for (let ik of ih === undefined || !Array['isArray'](ih) ? BDFDB['readServerList']() : ih) {
            let il = Node['prototype']['isPrototypeOf'](ik) ? ik : ik && ik['div'] ? ik['div'] : null;
            let c = BDFDB['getReactValue'](il, 'return.stateNode.props.guild.id');
            if (c && ij['isGuildOrCategoryOrChannelMuted'](c)) ii['push'](ik);
        }
        return ii;
    };
    BDFDB['getSelectedServer'] = function() {
        var io = BDFDB['WebModules']['findByProperties']('getGuilds')['getGuild'](BDFDB['WebModules']['findByProperties']('getLastSelectedGuildId')['getGuildId']());
        if (io) return BDFDB['getServerData'](io['id']) || Object['assign'](new io['constructor'](io), {
            'div': null,
            'instance': null
        });
        else return null;
    };
    BDFDB['getServerID'] = function(ip) {
        if (!Node['prototype']['isPrototypeOf'](ip) || !BDFDB['getReactInstance'](ip)) return;
        let iq = BDFDB['getParentEle'](BDFDB['dotCN']['guildouter'], ip);
        if (!iq) return;
        var ir = iq['querySelector'](BDFDB['dotCN']['guildiconwrapper']);
        var c = ir && ir['href'] ? ir['href']['split']('/')['slice'](-0x2)[0x0] : null;
        return c && !isNaN(parseInt(c)) ? c['toString']() : null;
    };
    BDFDB['getServerDiv'] = function(it) {
        if (!it) return null;
        if (Node['prototype']['isPrototypeOf'](it)) return BDFDB['getParentEle'](BDFDB['dotCN']['guildouter'], it);
        else {
            let c = typeof it == 'object' ? it['id'] : it;
            if (c) return BDFDB['getParentEle'](BDFDB['dotCN']['guildouter'], document['querySelector'](BDFDB['dotCNS']['guilds'] + BDFDB['dotCN']['guildiconwrapper'] + '[href*=\x22/channels/' + c + '\x22]'));
        }
        return null;
    };
    BDFDB['getServerData'] = function(iv) {
        if (!iv) return null;
        let c = Node['prototype']['isPrototypeOf'](iv) ? BDFDB['getServerID'](iv) : typeof iv == 'object' ? iv['id'] : iv;
        c = typeof c == 'number' ? c['toFixed']() : c;
        for (let ix of BDFDB['readServerList']())
            if (ix && ix['id'] == c) return ix;
        return null;
    };
    BDFDB['readChannelList'] = function() {
        var iy = [],
            iz = BDFDB['getOwnerInstance']({
                'node': document['querySelector'](BDFDB['dotCN']['channels']),
                'name': ['ChannelCategoryItem', 'ChannelItem', 'PrivateChannel'],
                'all': !![],
                'noCopies': !![],
                'depth': 0x5f5e0ff,
                'time': 0x5f5e0ff
            });
        for (let iA in iz)
            if (iz[iA]['props'] && !iz[iA]['props']['ispin'] && iz[iA]['props']['channel'] && iz[iA]['_reactInternalFiber']['return']) {
                var iB = BDFDB['React']['findDOMNodeSafe'](iz[iA]);
                iB = iB && BDFDB['containsClass'](iB['parentElement'], BDFDB['disCN']['categorycontainerdefault'], BDFDB['disCN']['channelcontainerdefault'], ![]) ? iB['parentElement'] : iB;
                iy['push'](Object['assign'](new iz[iA]['props']['channel']['constructor'](iz[iA]['props']['channel']), {
                    'div': iB,
                    'instance': iz[iA]
                }));
            } return iy;
    };
    BDFDB['getSelectedChannel'] = function() {
        var iC = BDFDB['WebModules']['findByProperties']('getChannels')['getChannel'](BDFDB['WebModules']['findByProperties']('getLastSelectedChannelId')['getChannelId']());
        if (iC) return BDFDB['getChannelData'](iC['id']) || Object['assign'](new iC['constructor'](iC), {
            'div': null,
            'instance': null
        });
        else return null;
    };
    BDFDB['getChannelID'] = function(iD) {
        if (!Node['prototype']['isPrototypeOf'](iD) || !BDFDB['getReactInstance'](iD)) return;
        iD = BDFDB['getParentEle'](BDFDB['dotCNC']['categorycontainerdefault'] + BDFDB['dotCNC']['channelcontainerdefault'] + BDFDB['dotCN']['dmchannel'], iD);
        if (!iD) return;
        var iE = BDFDB['getKeyInformation']({
            'node': iD,
            'key': 'channel'
        });
        return iE ? iE['id']['toString']() : null;
    };
    BDFDB['getChannelDiv'] = function(iF) {
        if (!iF) return null;
        let iG = BDFDB['getChannelData'](iF);
        return iG ? iG['div'] : null;
    };
    BDFDB['getChannelData'] = function(iH) {
        if (!iH) return null;
        let c = Node['prototype']['isPrototypeOf'](iH) ? BDFDB['getChannelID'](iH) : typeof iH == 'object' ? iH['id'] : iH;
        c = typeof c == 'number' ? c['toFixed']() : c;
        for (let iJ of BDFDB['readChannelList']())
            if (iJ && iJ['id'] == c) return iJ;
        return null;
    };
    BDFDB['readDmList'] = function() {
        var iK = [],
            iL = BDFDB['getOwnerInstance']({
                'node': document['querySelector'](BDFDB['dotCN']['guilds']),
                'name': 'DirectMessage',
                'all': !![],
                'noCopies': !![],
                'depth': 0x5f5e0ff,
                'time': 0x5f5e0ff
            });
        for (let iM in iL)
            if (iL[iM]['props'] && iL[iM]['props']['channel'] && iL[iM]['_reactInternalFiber']['child']) iK['push'](Object['assign'](new iL[iM]['props']['channel']['constructor'](iL[iM]['props']['channel']), {
                'div': BDFDB['React']['findDOMNodeSafe'](iL[iM]),
                'instance': iL[iM]
            }));
        return iK;
    };
    BDFDB['getDmID'] = function(iN) {
        if (!Node['prototype']['isPrototypeOf'](iN) || !BDFDB['getReactInstance'](iN)) return;
        let iO = BDFDB['getParentEle'](BDFDB['dotCN']['guildouter'], iN);
        if (!iO) return;
        var iP = iO['querySelector'](BDFDB['dotCN']['guildiconwrapper']);
        var c = iP && iP['href'] ? iP['href']['split']('/')['slice'](-0x1)[0x0] : null;
        return c && !isNaN(parseInt(c)) ? c['toString']() : null;
    };
    BDFDB['getDmDiv'] = function(iR) {
        if (!iR) return null;
        if (Node['prototype']['isPrototypeOf'](iR)) {
            var iS = BDFDB['getParentEle'](BDFDB['dotCN']['guildouter'], iR);
            return iS ? iS['parentElement'] : iS;
        } else {
            let c = typeof iR == 'object' ? iR['id'] : iR;
            if (c) {
                var iS = BDFDB['getParentEle'](BDFDB['dotCN']['guildouter'], document['querySelector'](BDFDB['dotCNS']['guilds'] + BDFDB['dotCN']['dmpill'] + '\x20+\x20*\x20' + BDFDB['dotCN']['guildiconwrapper'] + '[href*=\x22/channels/@me/' + c + '\x22]'));
                return iS && BDFDB ? iS['parentElement'] : iS;
            }
        }
        return null;
    };
    BDFDB['getDmData'] = function(iV) {
        if (!iV) return null;
        let c = Node['prototype']['isPrototypeOf'](iV) ? BDFDB['getDmID'](iV) : typeof iV == 'object' ? iV['id'] : iV;
        c = typeof c == 'number' ? c['toFixed']() : c;
        for (let iX of BDFDB['readDmList']())
            if (iX && iX['id'] == c) return iX;
        return null;
    };
    BDFDB['markChannelAsRead'] = function(iY) {
        if (!iY) return;
        var iZ = BDFDB['WebModules']['findByProperties']('getOldestUnreadMessageId');
        var j0 = BDFDB['WebModules']['findByProperties']('ack', 'localAck');
        if (!iZ || !j0) return;
        for (let j1 of Array['isArray'](iY) ? iY : typeof iY == 'string' || typeof iY == 'number' ? Array['of'](iY) : Array['from'](iY)) {
            let c = Node['prototype']['isPrototypeOf'](j1) ? BDFDB['getChannelID'](j1) || BDFDB['getDmID'](j1) : j1 && typeof j1 == 'object' ? j1['id'] : j1;
            if (c) {
                let j3 = iZ['getOldestUnreadMessageId'](c);
                if (j3) j0['ack'](c, !![], !![]);
            }
        }
    };
    BDFDB['markGuildAsRead'] = function(j4) {
        if (!j4) return;
        var j5 = BDFDB['WebModules']['findByProperties']('markGuildAsRead');
        if (!j5) return;
        for (let j6 of Array['isArray'](j4) ? j4 : typeof j4 == 'string' || typeof j4 == 'number' ? Array['of'](j4) : Array['from'](j4)) {
            let c = Node['prototype']['isPrototypeOf'](j6) ? BDFDB['getServerID'](j6) : j6 && typeof j6 == 'object' ? j6['id'] : j6;
            if (c) j5['markGuildAsRead'](c);
        }
    };
    BDFDB['saveAllData'] = function(j8, j9, ja) {
        var jb = require('fs'),
            jc, jd;
        if (!BDFDB['isBDv2']()) {
            jd = typeof j9 === 'string' ? j9 : j9['name'];
            jc = require('path')['join'](BDFDB['getPluginsFolder'](), jd + '.config.json');
        } else {
            jd = typeof j9 === 'string' ? j9['toLowerCase']() : null;
            var je = jd ? BDFDB['Plugins'][jd] ? BDFDB['Plugins'][jd]['contentPath'] : null : j9['contentPath'];
            if (!je) return;
            jc = require('path')['join'](je, 'settings.json');
        }
        var jf = jb['existsSync'](jc);
        var jg = !jf ? {} : typeof BDFDB['cachedData'][jd] !== 'undefined' ? BDFDB['cachedData'][jd] : BDFDB['readConfig'](jc);
        jg[ja] = j8;
        if (BDFDB['isObjectEmpty'](jg[ja])) delete jg[ja];
        if (BDFDB['isObjectEmpty'](jg)) {
            delete BDFDB['cachedData'][jd];
            if (jf) jb['unlinkSync'](jc);
        } else {
            BDFDB['cachedData'][jd] = jg;
            jb['writeFileSync'](jc, JSON['stringify'](jg, null, '\x09'));
        }
    };
    BDFDB['loadAllData'] = function(jh, ji) {
        var jj = require('fs'),
            jk, jl;
        if (!BDFDB['isBDv2']()) {
            jl = typeof jh === 'string' ? jh : jh['name'];
            jk = require('path')['join'](BDFDB['getPluginsFolder'](), jl + '.config.json');
        } else {
            jl = typeof jh === 'string' ? jh['toLowerCase']() : null;
            var jm = jl ? BDFDB['Plugins'][jl] ? BDFDB['Plugins'][jl]['contentPath'] : null : jh['contentPath'];
            if (!jm) return {};
            jk = require('path')['join'](jm, 'settings.json');
        }
        if (!jj['existsSync'](jk)) {
            delete BDFDB['cachedData'][jl];
            return {};
        }
        var jn = typeof BDFDB['cachedData'][jl] !== 'undefined' ? BDFDB['cachedData'][jl] : BDFDB['readConfig'](jk);
        BDFDB['cachedData'][jl] = jn;
        return jn && typeof jn[ji] !== 'undefined' ? jn[ji] : {};
    };
    BDFDB['removeAllData'] = function(jo, jp) {
        var jq = require('fs'),
            jr, js;
        if (!BDFDB['isBDv2']()) {
            js = typeof jo === 'string' ? jo : jo['name'];
            jr = require('path')['join'](BDFDB['getPluginsFolder'](), js + '.config.json');
        } else {
            js = typeof jo === 'string' ? jo['toLowerCase']() : null;
            var jt = js ? BDFDB['Plugins'][js] ? BDFDB['Plugins'][js]['contentPath'] : null : jo['contentPath'];
            if (!jt) return;
            jr = require('path')['join'](jt, 'settings.json');
        }
        var ju = jq['existsSync'](jr);
        var jv = !ju ? {} : typeof BDFDB['cachedData'][js] !== 'undefined' ? BDFDB['cachedData'][js] : BDFDB['readConfig'](jr);
        delete jv[jp];
        if (BDFDB['isObjectEmpty'](jv)) {
            delete BDFDB['cachedData'][js];
            if (ju) jq['unlinkSync'](jr);
        } else {
            BDFDB['cachedData'][js] = jv;
            jq['writeFileSync'](jr, JSON['stringify'](jv, null, '\x09'));
        }
    };
    BDFDB['getAllData'] = function(jw, jx) {
        if (!BDFDB['isObject'](jw) || !jw['defaults'] || !jw['defaults'][jx]) return {};
        var jy = BDFDB['loadAllData'](jw, jx),
            jz = {},
            jA = ![];
        for (let jB in jw['defaults'][jx]) {
            if (jy[jB] == null) {
                jz[jB] = jw['defaults'][jx][jB]['value'];
                jA = !![];
            } else jz[jB] = jy[jB];
        }
        if (jA) BDFDB['saveAllData'](jz, jw, jx);
        return jz;
    };
    BDFDB['readConfig'] = function(jC) {
        try {
            return JSON['parse'](require('fs')['readFileSync'](jC));
        } catch (jD) {
            return {};
        }
    };
    BDFDB['saveData'] = function(c, jF, jG, jH) {
        var jI = BDFDB['loadAllData'](jG, jH);
        jI[c] = jF;
        BDFDB['saveAllData'](jI, jG, jH);
    };
    BDFDB['loadData'] = function(c, jK, jL) {
        var jM = BDFDB['loadAllData'](jK, jL);
        var jN = jM[c];
        return jN === undefined ? null : jN;
    };
    BDFDB['removeData'] = function(c, jP, jQ) {
        var jR = BDFDB['loadAllData'](jP, jQ);
        delete jR[c];
        BDFDB['saveAllData'](jR, jP, jQ);
    };
    BDFDB['getData'] = function(c, jT, jU) {
        var jV = BDFDB['getAllData'](jT, jU);
        var jW = jV[c];
        return jW === undefined ? null : jW;
    };
    BDFDB['appendWebScript'] = function(jX, jY) {
        if (!jY && !document['head']['querySelector']('bd-head\x20bd-scripts')) document['head']['appendChild'](BDFDB['htmlToElement']('<bd-head><bd-scripts></bd-scripts></bd-head>'));
        jY = jY || document['head']['querySelector']('bd-head\x20bd-scripts') || document['head'];
        jY = Node['prototype']['isPrototypeOf'](jY) ? jY : document['head'];
        BDFDB['removeWebScript'](jX, jY);
        jY['appendChild'](BDFDB['htmlToElement']('<script\x20src=\x22' + jX + '\x22></script>'));
    };
    BDFDB['removeWebScript'] = function(jZ, k0) {
        k0 = k0 || document['head']['querySelector']('bd-head\x20bd-scripts') || document['head'];
        k0 = Node['prototype']['isPrototypeOf'](k0) ? k0 : document['head'];
        BDFDB['removeEles'](k0['querySelectorAll']('script[src=\x22' + jZ + '\x22]'));
    };
    BDFDB['appendWebStyle'] = function(k1, k2) {
        if (!k2 && !document['head']['querySelector']('bd-head\x20bd-styles')) document['head']['appendChild'](BDFDB['htmlToElement']('<bd-head><bd-styles></bd-styles></bd-head>'));
        k2 = k2 || document['head']['querySelector']('bd-head\x20bd-styles') || document['head'];
        k2 = Node['prototype']['isPrototypeOf'](k2) ? k2 : document['head'];
        BDFDB['removeWebStyle'](k1, k2);
        k2['appendChild'](BDFDB['htmlToElement']('<link\x20type=\x22text/css\x22\x20rel=\x22Stylesheet\x22\x20href=\x22' + k1 + '\x22></link>'));
    };
    BDFDB['removeWebStyle'] = function(k3, k4) {
        k4 = k4 || document['head']['querySelector']('bd-head\x20bd-styles') || document['head'];
        k4 = Node['prototype']['isPrototypeOf'](k4) ? k4 : document['head'];
        BDFDB['removeEles'](k4['querySelectorAll']('link[href=\x22' + k3 + '\x22]'));
    };
    BDFDB['appendLocalStyle'] = function(c, k6, k7) {
        if (!k7 && !document['head']['querySelector']('bd-head\x20bd-styles')) document['head']['appendChild'](BDFDB['htmlToElement']('<bd-head><bd-styles></bd-styles></bd-head>'));
        k7 = k7 || document['head']['querySelector']('bd-head\x20bd-styles') || document['head'];
        k7 = Node['prototype']['isPrototypeOf'](k7) ? k7 : document['head'];
        BDFDB['removeLocalStyle'](c, k7);
        k7['appendChild'](BDFDB['htmlToElement']('<style\x20id=\x22' + c + 'CSS\x22>' + k6['replace'](/\t|\r|\n/g, '') + '</style>'));
    };
    BDFDB['removeLocalStyle'] = function(c, k9) {
        k9 = k9 || document['head']['querySelector']('bd-head\x20bd-styles') || document['head'];
        k9 = Node['prototype']['isPrototypeOf'](k9) ? k9 : document['head'];
        BDFDB['removeEles'](k9['querySelectorAll']('style[id=\x22' + c + 'CSS\x22]'));
    };
    BDFDB['formatBytes'] = function(ka, kb) {
        ka = parseInt(ka);
        if (isNaN(ka) || ka < 0x0) return '0\x20Bytes';
        if (ka == 0x1) return '1\x20Byte';
        var kc = Math['floor'](Math['log'](ka) / Math['log'](0x400));
        return parseFloat((ka / Math['pow'](0x400, kc))['toFixed'](kb < 0x1 ? 0x0 : kb > 0x14 ? 0x14 : kb || 0x2)) + '\x20' + ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][kc];
    };
    BDFDB['colorCONVERT'] = function(kd, ke, kf) {
        if (!kd) return null;
        ke = ke === undefined || !ke ? ke = 'RGBCOMP' : ke['toUpperCase']();
        kf = kf === undefined || !kf || !['RGB', 'RGBA', 'RGBCOMP', 'HSL', 'HSLA', 'HSLCOMP']['includes'](kf['toUpperCase']()) ? BDFDB['colorTYPE'](kd) : kf['toUpperCase']();
        if (ke == 'RGBCOMP') {
            switch (kf) {
                case 'RGBCOMP':
                    if (kd['length'] == 0x3) return kP(kd);
                    else if (kd['length'] == 0x4) {
                        var kg = kS(kd['pop']());
                        return kP(kd)['concat'](kg);
                    }
                    case 'RGB':
                        return kP(kd['replace'](/\s/g, '')['slice'](0x4, -0x1)['split'](','));
                    case 'RGBA':
                        var kh = kd['replace'](/\s/g, '')['slice'](0x5, -0x1)['split'](',');
                        var kg = kS(kh['pop']());
                        return kP(kh)['concat'](kg);
                    case 'HSLCOMP':
                        if (kd['length'] == 0x3) return BDFDB['colorCONVERT']('hsl(' + kd['join'](',') + ')', 'RGBCOMP');
                        else if (kd['length'] == 0x4) {
                            var kg = kS(jg['pop']());
                            return BDFDB['colorCONVERT']('hsl(' + jg['join'](',') + ')', 'RGBCOMP')['concat'](kg);
                        }
                        case 'HSL':
                            var kk = kW(kd['replace'](/\s/g, '')['slice'](0x4, -0x1)['split'](','));
                            var kl, km, kn, ko, kp, kq, kr, ks;
                            var kt = kk[0x0] / 0x168,
                                ku = parseInt(kk[0x1]) / 0x64,
                                kv = parseInt(kk[0x2]) / 0x64;
                            ko = Math['floor'](kt * 0x6);
                            kp = kt * 0x6 - ko;
                            kq = kv * (0x1 - ku);
                            kr = kv * (0x1 - kp * ku);
                            ks = kv * (0x1 - (0x1 - kp) * ku);
                            switch (ko % 0x6) {
                                case 0x0:
                                    kl = kv, km = ks, kn = kq;
                                    break;
                                case 0x1:
                                    kl = kr, km = kv, kn = kq;
                                    break;
                                case 0x2:
                                    kl = kq, km = kv, kn = ks;
                                    break;
                                case 0x3:
                                    kl = kq, km = kr, kn = kv;
                                    break;
                                case 0x4:
                                    kl = ks, km = kq, kn = kv;
                                    break;
                                case 0x5:
                                    kl = kv, km = kq, kn = kr;
                                    break;
                            }
                            return [Math['round'](kl * 0xff), Math['round'](km * 0xff), Math['round'](kn * 0xff)];
                        case 'HSLA':
                            var kk = kd['replace'](/\s/g, '')['slice'](0x5, -0x1)['split'](',');
                            var kg = kS(kk['pop']());
                            return BDFDB['colorCONVERT']('hsl(' + kk['join'](',') + ')', 'RGBCOMP')['concat'](kg);
                        case 'HEX':
                            var ky = /^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$|^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i ['exec'](kd);
                            return [parseInt(ky[0x1] + ky[0x1] || ky[0x4], 0x10)['toString'](), parseInt(ky[0x2] + ky[0x2] || ky[0x5], 0x10)['toString'](), parseInt(ky[0x3] + ky[0x3] || ky[0x6], 0x10)['toString']()];
                        default:
                            return null;
            }
        } else {
            var kz = kf == 'RGBCOMP' ? kd : BDFDB['colorCONVERT'](kd, 'RGBCOMP', kf);
            if (kz) switch (ke) {
                case 'RGB':
                    return 'rgb(' + kP(kz['slice'](0x0, 0x3))['join'](',') + ')';
                case 'RGBA':
                    kz = kz['slice'](0x0, 0x4);
                    var kg = kz['length'] == 0x4 ? kS(kz['pop']()) : 0x1;
                    return 'rgba(' + kP(kz)['concat'](kg)['join'](',') + ')';
                case 'HSLCOMP':
                    var kg = kz['length'] == 0x4 ? kS(kz['pop']()) : null;
                    var kk = kW(BDFDB['colorCONVERT'](kz, 'HSL')['replace'](/\s/g, '')['split'](','));
                    return kg ? kk['concat'](kg) : kk;
                case 'HSL':
                    var kl = kN(kz[0x0]),
                        km = kN(kz[0x1]),
                        kn = kN(kz[0x2]);
                    var kG = Math['max'](kl, km, kn),
                        kH = Math['min'](kl, km, kn),
                        kI = kG - kH,
                        kt, ku = kG === 0x0 ? 0x0 : kI / kG,
                        kv = kG / 0xff;
                    switch (kG) {
                        case kH:
                            kt = 0x0;
                            break;
                        case kl:
                            kt = km - kn + kI * (km < kn ? 0x6 : 0x0);
                            kt /= 0x6 * kI;
                            break;
                        case km:
                            kt = kn - kl + kI * 0x2;
                            kt /= 0x6 * kI;
                            break;
                        case kn:
                            kt = kl - km + kI * 0x4;
                            kt /= 0x6 * kI;
                            break;
                    }
                    return 'hsl(' + kW([Math['round'](kt * 0x168), ku * 0x64, kv * 0x64])['join'](',') + ')';
                case 'HSLA':
                    var kM = kz['length'] == 0x4 ? kS(kz['pop']()) : 0x1;
                    return 'hsla(' + BDFDB['colorCONVERT'](kz, 'HSL')['slice'](0x4, -0x1)['split'](',')['concat'](kM)['join'](',') + ')';
                case 'HEX':
                    return ('#' + (0x1000000 + (kz[0x2] | kz[0x1] << 0x8 | kz[0x0] << 0x10))['toString'](0x10)['slice'](0x1))['toUpperCase']();
                default:
                    return null;
            }
        }

        function kN(kp) {
            kp = parseInt(kp['toString']()['replace'](/[^0-9\-]/g, ''));
            return isNaN(kp) || kp > 0xff ? 0xff : kp < 0x0 ? 0x0 : kp;
        };

        function kP(kh) {
            return kh['map'](kp => {
                return kN(kp);
            });
        };

        function kS(kg) {
            kg = kg['toString']();
            kg = (kg['indexOf']('%') > -0x1 ? 0.01 : 0x1) * parseFloat(kg['replace'](/[^0-9\.\-]/g, ''));
            return isNaN(kg) || kg > 0x1 ? 0x1 : kg < 0x0 ? 0x0 : kg;
        };

        function kU(kV) {
            kV = parseFloat(kV['toString']()['replace'](/[^0-9\.\-]/g, ''));
            return (isNaN(kV) || kV > 0x64 ? 0x64 : kV < 0x0 ? 0x0 : kV) + '%';
        };

        function kW(kh) {
            let kt = parseFloat(kh['shift']()['toString']()['replace'](/[^0-9\.\-]/g, ''));
            kt = isNaN(kt) || kt > 0x168 ? 0x168 : kt < 0x0 ? 0x0 : kt;
            return [kt]['concat'](kh['map'](kZ => {
                return kU(kZ);
            }));
        };
    };
    BDFDB['colorSETALPHA'] = function(l0, l1, l2) {
        var l3 = BDFDB['colorCONVERT'](l0, 'RGBCOMP');
        if (l3) {
            l1 = l1['toString']();
            l1 = (l1['indexOf']('%') > -0x1 ? 0.01 : 0x1) * parseFloat(l1['replace'](/[^0-9\.\-]/g, ''));
            l1 = isNaN(l1) || l1 > 0x1 ? 0x1 : l1 < 0x0 ? 0x0 : l1;
            l3[0x3] = l1;
            l2 = (l2 || BDFDB['colorTYPE'](l0))['toUpperCase']();
            l2 = l2 == 'HSL' || l2 == 'RGB' ? l2 + 'A' : l2;
            return BDFDB['colorCONVERT'](l3, l2);
        }
        return null;
    };
    BDFDB['colorCHANGE'] = function(l4, l5, l6) {
        l5 = parseFloat(l5);
        if (l4 && typeof l5 == 'number' && !isNaN(l5)) {
            var l7 = BDFDB['colorCONVERT'](l4, 'RGBCOMP');
            if (l7) {
                if (parseInt(l5) !== l5) {
                    l5 = l5['toString']();
                    l5 = (l5['indexOf']('%') > -0x1 ? 0.01 : 0x1) * parseFloat(l5['replace'](/[^0-9\.\-]/g, ''));
                    l5 = isNaN(l5) ? 0x0 : l5;
                    return BDFDB['colorCONVERT']([Math['round'](l7[0x0] * (0x1 + l5)), Math['round'](l7[0x1] * (0x1 + l5)), Math['round'](l7[0x2] * (0x1 + l5))], l6 || BDFDB['colorTYPE'](l4));
                } else return BDFDB['colorCONVERT']([Math['round'](l7[0x0] + l5), Math['round'](l7[0x1] + l5), Math['round'](l7[0x2] + l5)], l6 || BDFDB['colorTYPE'](l4));
            }
        }
        return null;
    };
    BDFDB['colorINV'] = function(l8, l9) {
        if (l8) {
            var la = BDFDB['colorCONVERT'](l8, 'RGBCOMP');
            if (la) return BDFDB['colorCONVERT']([0xff - la[0x0], 0xff - la[0x1], 0xff - la[0x2]], l9 || BDFDB['colorTYPE'](l8));
        }
        return null;
    };
    BDFDB['colorCOMPARE'] = function(lb, lc) {
        if (lb && lc) {
            lb = BDFDB['colorCONVERT'](lb, 'RGBCOMP');
            lc = BDFDB['colorCONVERT'](lc, 'RGBCOMP');
            if (lb && lc) return BDFDB['equals'](lb, lc);
        }
        return null;
    };
    BDFDB['colorISBRIGHT'] = function(ld, le = 0xa0) {
        ld = BDFDB['colorCONVERT'](ld, 'RGBCOMP');
        if (!ld) return ![];
        return parseInt(le) < Math['sqrt'](0.299 * ld[0x0] ** 0x2 + 0.587 * ld[0x1] ** 0x2 + 0.144 * ld[0x2] ** 0x2);
    };
    BDFDB['colorTYPE'] = function(lf) {
        if (lf) {
            if (typeof lf === 'object' && (lf['length'] == 0x3 || lf['length'] == 0x4)) {
                if (lh(lf)) return 'RGBCOMP';
                else if (lk(lf)) return 'HSLCOMP';
            } else if (typeof lf === 'string') {
                if (/^#[0-9a-f]{3}$|^#[0-9a-f]{6}$/i ['test'](lf)) return 'HEX';
                else {
                    lf = lf['toUpperCase']();
                    var lg = lf['replace'](/[^0-9\.\-\,\%]/g, '')['split'](',');
                    if (lf['indexOf']('RGB(') == 0x0 && lg['length'] == 0x3 && lh(lg)) return 'RGB';
                    else if (lf['indexOf']('RGBA(') == 0x0 && lg['length'] == 0x4 && lh(lg)) return 'RGBA';
                    else if (lf['indexOf']('HSL(') == 0x0 && lg['length'] == 0x3 && lk(lg)) return 'HSL';
                    else if (lf['indexOf']('HSLA(') == 0x0 && lg['length'] == 0x4 && lk(lg)) return 'HSLA';
                }
            }
        }
        return null;

        function lh(lg) {
            return lg['slice'](0x0, 0x3)['every'](lj => lj['toString']()['indexOf']('%') == -0x1 && parseFloat(lj) == parseInt(lj));
        };

        function lk(lg) {
            return lg['slice'](0x1, 0x3)['every'](lm => lm['toString']()['indexOf']('%') == lm['length'] - 0x1);
        };
    };
    BDFDB['setInnerText'] = function(ln, lo) {
        if (!ln || !Node['prototype']['isPrototypeOf'](ln)) return;
        var lp = null;
        for (let lq of ln['childNodes'])
            if (lq['nodeType'] == Node['TEXT_NODE']) {
                lp = lq;
                break;
            } if (lp) lp['textContent'] = lo;
        else {
            lp = document['createTextNode'](lo);
            ln['appendChild'](lp);
        }
    };
    BDFDB['getInnerText'] = function(lr) {
        if (!lr || !Node['prototype']['isPrototypeOf'](lr)) return;
        for (let ls of lr['childNodes'])
            if (ls['nodeType'] == Node['TEXT_NODE']) return ls['textContent'];
    };
    BDFDB['getParentEle'] = function(lt, lu) {
        var lv = null;
        if (Node['prototype']['isPrototypeOf'](lu) && lt) {
            var lw = NodeList['prototype']['isPrototypeOf'](lt) ? lt : typeof lt == 'string' ? document['querySelectorAll'](lt) : null;
            if (lw)
                for (let lx of lw)
                    if (lx['contains'](lu)) {
                        lv = lx;
                        break;
                    }
        }
        return lv;
    };
    BDFDB['getRects'] = function(ly) {
        var lz = {};
        if (Node['prototype']['isPrototypeOf'](ly) && ly['nodeType'] != Node['TEXT_NODE']) {
            var lA = BDFDB['isEleHidden'](ly);
            if (lA) BDFDB['toggleEles'](ly);
            lz = ly['getBoundingClientRect']();
            if (lA) BDFDB['toggleEles'](ly);
        }
        return lz;
    };
    BDFDB['getTotalHeight'] = function(lB) {
        if (Node['prototype']['isPrototypeOf'](lB) && lB['nodeType'] != Node['TEXT_NODE']) {
            var lC = BDFDB['getRects'](lB);
            var lD = getComputedStyle(lB);
            return lC['height'] + parseInt(lD['marginTop']) + parseInt(lD['marginBottom']);
        }
        return 0x0;
    };
    BDFDB['getTotalWidth'] = function(lE) {
        if (Node['prototype']['isPrototypeOf'](lE) && lE['nodeType'] != Node['TEXT_NODE']) {
            var lF = BDFDB['getRects'](lE);
            var lG = getComputedStyle(lE);
            return lF['width'] + parseInt(lG['marginLeft']) + parseInt(lG['marginRight']);
        }
        return 0x0;
    };
    BDFDB['isEleHidden'] = function(lH) {
        if (Node['prototype']['isPrototypeOf'](lH) && lH['nodeType'] != Node['TEXT_NODE']) return getComputedStyle(lH, null)['getPropertyValue']('display') == 'none';
    };
    BDFDB['toggleEles'] = function(...lI) {
        if (!lI) return;
        var lJ = lI['pop']();
        if (typeof lJ != 'boolean') {
            lI['push'](lJ);
            lJ = undefined;
        }
        if (!lI['length']) return;
        for (let lK of lI)
            for (let lL of Array['isArray'](lK) ? lK : Array['of'](lK)) {
                if (!lL) {} else if (Node['prototype']['isPrototypeOf'](lL)) lP(lL);
                else if (NodeList['prototype']['isPrototypeOf'](lL))
                    for (let lM of lL) lP(lM);
                else if (typeof lL == 'string')
                    for (let lN of lL['split'](','))
                        if (lN && (lN = lN['trim']()))
                            for (let lM of document['querySelectorAll'](lN)) lP(lM);
            }

        function lP(lQ) {
            if (!lQ || !Node['prototype']['isPrototypeOf'](lQ)) return;
            var lR = lJ === undefined ? !BDFDB['isEleHidden'](lQ) : !lJ;
            if (lR) lQ['style']['setProperty']('display', 'none', 'important');
            else lQ['style']['removeProperty']('display');
        }
    };
    BDFDB['removeEles'] = function(...lS) {
        for (let lT of lS)
            for (let lU of Array['isArray'](lT) ? lT : Array['of'](lT)) {
                if (!lU) {} else if (Node['prototype']['isPrototypeOf'](lU)) lU['remove']();
                else if (NodeList['prototype']['isPrototypeOf'](lU)) {
                    lU = Array['from'](lU);
                    while (lU['length']) lU['shift']()['remove']();
                } else if (typeof lU == 'string')
                    for (let lV of lU['split'](','))
                        if (lV && (lV = lV['trim']())) {
                            let lW = Array['from'](document['querySelectorAll'](lV));
                            while (lW['length']) lW['shift']()['remove']();
                        }
            }
    };
    BDFDB['addClass'] = function(lX, ...lY) {
        if (!lX || !lY) return;
        for (let lZ of Array['isArray'](lX) ? lX : Array['of'](lX)) {
            if (!lZ) {} else if (Node['prototype']['isPrototypeOf'](lZ)) m3(lZ);
            else if (NodeList['prototype']['isPrototypeOf'](lZ))
                for (let m0 of lZ) m3(m0);
            else if (typeof lZ == 'string')
                for (let m1 of lZ['split'](','))
                    if (m1 && (m1 = m1['trim']()))
                        for (let m2 of document['querySelectorAll'](m1)) m3(m2);
        }

        function m3(m4) {
            if (m4 && m4['classList'])
                for (let m5 of lY)
                    for (let m6 of Array['isArray'](m5) ? m5 : Array['of'](m5))
                        if (typeof m6 == 'string')
                            for (let m7 of m6['split']('\x20'))
                                if (m7) m4['classList']['add'](m7);
        }
    };
    BDFDB['removeClass'] = function(m8, ...m9) {
        if (!m8 || !m9) return;
        for (let ma of Array['isArray'](m8) ? m8 : Array['of'](m8)) {
            if (!ma) {} else if (Node['prototype']['isPrototypeOf'](ma)) me(ma);
            else if (NodeList['prototype']['isPrototypeOf'](ma))
                for (let mb of ma) me(mb);
            else if (typeof ma == 'string')
                for (let mc of ma['split'](','))
                    if (mc && (mc = mc['trim']()))
                        for (let md of document['querySelectorAll'](mc)) me(md);
        }

        function me(mf) {
            if (mf && mf['classList'])
                for (let mg of m9)
                    for (let mh of Array['isArray'](mg) ? mg : Array['of'](mg))
                        if (typeof mh == 'string')
                            for (let mi of mh['split']('\x20'))
                                if (mi) mf['classList']['remove'](mi);
        }
    };
    BDFDB['toggleClass'] = function(mj, ...mk) {
        if (!mj || !mk) return;
        var ml = mk['pop']();
        if (typeof ml != 'boolean') {
            mk['push'](ml);
            ml = undefined;
        }
        if (!mk['length']) return;
        for (let mm of Array['isArray'](mj) ? mj : Array['of'](mj)) {
            if (!mm) {} else if (Node['prototype']['isPrototypeOf'](mm)) mq(mm);
            else if (NodeList['prototype']['isPrototypeOf'](mm))
                for (let mn of mm) mq(mn);
            else if (typeof mm == 'string')
                for (let mo of mm['split'](','))
                    if (mo && (mo = mo['trim']()))
                        for (let mp of document['querySelectorAll'](mo)) mq(mp);
        }

        function mq(mr) {
            if (mr && mr['classList'])
                for (let ms of mk)
                    for (let mt of Array['isArray'](ms) ? ms : Array['of'](ms))
                        if (typeof mt == 'string')
                            for (let mu of mt['split']('\x20'))
                                if (mu) mr['classList']['toggle'](mu, ml);
        }
    };
    BDFDB['containsClass'] = function(mv, ...mw) {
        if (!mv || !mw) return;
        var mx = mw['pop']();
        if (typeof mx != 'boolean') {
            mw['push'](mx);
            mx = !![];
        }
        if (!mw['length']) return;
        var my = undefined;
        for (let mz of Array['isArray'](mv) ? mv : Array['of'](mv)) {
            if (!mz) {} else if (Node['prototype']['isPrototypeOf'](mz)) mD(mz);
            else if (NodeList['prototype']['isPrototypeOf'](mz))
                for (let mA of mz) mD(mA);
            else if (typeof mz == 'string')
                for (let mB of mz['split'](','))
                    if (mB && (mB = mB['trim']()))
                        for (let mC of document['querySelectorAll'](mB)) mD(mC);
        }
        return my;

        function mD(mE) {
            if (mE && mE['classList'])
                for (let mF of mw)
                    if (typeof mF == 'string')
                        for (let mG of mF['split']('\x20'))
                            if (mG) {
                                if (my === undefined) my = mx;
                                if (mx && !mE['classList']['contains'](mG)) my = ![];
                                if (!mx && mE['classList']['contains'](mG)) my = !![];
                            }
        }
    };
    BDFDB['replaceClass'] = function(mH, mI, mJ) {
        if (!mH || typeof mI != 'string' || typeof mJ != 'string') return;
        for (let mK of Array['isArray'](mH) ? mH : Array['of'](mH)) {
            if (!mK) {} else if (Node['prototype']['isPrototypeOf'](mK)) mO(mK);
            else if (NodeList['prototype']['isPrototypeOf'](mK))
                for (let mL of mK) mO(mL);
            else if (typeof mK == 'string')
                for (let mM of mK['split'](','))
                    if (mM && (mM = mM['trim']()))
                        for (let mN of document['querySelectorAll'](mM)) mO(mN);
        }

        function mO(mP) {
            if (mP && mP['tagName'] && mP['className']) mP['className'] = mP['className']['replace'](new RegExp(mI, 'g'), mJ)['trim']();
        }
    };
    BDFDB['removeClasses'] = function(...mQ) {
        for (let mR of mQ)
            for (let mS of Array['isArray'](mR) ? mR : Array['of'](mR)) {
                if (!mS) {} else if (typeof mS == 'string')
                    for (let mT of mS['split'](','))
                        if (mT && (mT = mT['replace'](/\.|\s/g, ''))) BDFDB['removeClass'](document['querySelectorAll']('.' + mT), mT);
            }
    };
    BDFDB['htmlToElement'] = function(mU) {
        if (!mU || !mU['trim']()) return null;
        let mV = document['createElement']('template');
        mV['innerHTML'] = mU['replace'](/\t|\n|\r/g, '');
        if (mV['content']['childElementCount'] == 0x1) return mV['content']['firstElementChild'];
        else {
            var mW = document['createElement']('span');
            var mX = Array['from'](mV['content']['childNodes']);
            while (mX['length']) mW['appendChild'](mX['shift']());
            return mW;
        }
    };
    BDFDB['encodeToHTML'] = function(mY) {
        var mZ = document['createElement']('div');
        mZ['innerText'] = mY;
        return mZ['innerHTML'];
    };
    BDFDB['regEscape'] = function(n0) {
        return n0['replace'](/([\-\/\\\^\$\*\+\?\.\(\)\|\[\]\{\}])/g, '\x5c$1');
    };
    BDFDB['insertNRST'] = function(n1) {
        return n1['replace'](/\\r/g, '\x0d')['replace'](/\\n/g, '\x0a')['replace'](/\\t/g, '\x09')['replace'](/\\s/g, '\x20');
    };
    BDFDB['triggerSend'] = function(n2) {
        if (!n2) return;
        setImmediate(() => {
            var n3 = new KeyboardEvent('keypress', {
                'key': 'Enter',
                'code': 'Enter',
                'which': 0xd,
                'keyCode': 0xd,
                'bubbles': !![]
            });
            Object['defineProperty'](n3, 'keyCode', {
                'value': 0xd
            });
            Object['defineProperty'](n3, 'which', {
                'value': 0xd
            });
            n2['dispatchEvent'](n3);
        });
    };
    BDFDB['initElements'] = function(n4, n5) {
        if (!Node['prototype']['isPrototypeOf'](n4)) return;
        if (BDFDB['containsClass'](n4, 'DevilBro-settings')) BDFDB['addClass'](n4, 'BDFDB-settings');
        var n6 = BDFDB['WebModules']['findByProperties']('spring');
        var n7 = BDFDB['getDiscordTheme']() == BDFDB['disCN']['themelight'];
        var n8 = BDFDB['getLibraryStrings']();
        n4['querySelectorAll'](BDFDB['dotCN']['switchinner'])['forEach'](n9 => {
            o8(n9, ![]);
            ot(n9, 'click', na => {
                o8(n9, !![]);
            });
        });
        n4['querySelectorAll'](BDFDB['dotCNS']['checkboxwrapper'] + BDFDB['dotCN']['checkboxinput'])['forEach'](nb => {
            oi(nb, ![]);
            ot(nb, 'click', nc => {
                oi(nb, !![]);
            });
        });
        n4['querySelectorAll'](BDFDB['dotCN']['giffavoritebutton'])['forEach'](nd => {
            om(nd);
            ot(nd, 'click', ne => {
                BDFDB['toggleClass'](nd, BDFDB['disCN']['giffavoriteselected']);
                om(nd);
            });
        });
        n4['querySelectorAll']('.file-navigator')['forEach'](nf => {
            ot(nf, 'click', ng => {
                var nh = nf['querySelector']('input[type=\x22file\x22]');
                if (nh) nh['click']();
            });
        });
        n4['querySelectorAll']('input[type=\x22file\x22]')['forEach'](ni => {
            ot(ni, 'change', nj => {
                var nk = ni['parentElement']['parentElement']['querySelector']('input[type=\x22text\x22]');
                var nl = ni['files'][0x0];
                if (nk && nl) nk['value'] = nl['path'];
            });
        });
        n4['querySelectorAll'](BDFDB['dotCN']['input'])['forEach'](nm => {
            ot(nm, 'keydown', nn => {
                nn['stopPropagation']();
            });
        });
        n4['querySelectorAll'](BDFDB['dotCNS']['searchbar'] + BDFDB['dotCN']['searchbarinput'])['forEach'](no => {
            no['setAttribute']('placeholder', n8['search_placeholder']);
            ot(no, 'keyup', np => {
                let nq = no['parentElement']['querySelectorAll'](BDFDB['dotCN']['searchbaricon']);
                BDFDB['toggleClass'](nq[0x0], BDFDB['disCN']['searchbarvisible'], no['value']['length'] == 0x0);
                BDFDB['toggleClass'](nq[0x1], BDFDB['disCN']['searchbarvisible'], no['value']['length'] > 0x0);
            });
        });
        n4['querySelectorAll'](BDFDB['dotCNS']['searchbar'] + BDFDB['dotCN']['searchbarclear'])['forEach'](nr => {
            ot(nr, 'click', ns => {
                if (BDFDB['containsClass'](nr, BDFDB['disCN']['searchbarvisible'])) {
                    var nt = BDFDB['getParentEle'](BDFDB['dotCN']['searchbar'], nr)['querySelector'](BDFDB['dotCN']['searchbarinput']);
                    nt['value'] = '';
                    nt['dispatchEvent'](new Event('change'));
                    nt['dispatchEvent'](new Event('input'));
                    nt['dispatchEvent'](new Event('keydown'));
                    nt['dispatchEvent'](new Event('keyup'));
                    nt['dispatchEvent'](new Event('keypressed'));
                    BDFDB['addClass'](nr['parentElement']['querySelectorAll'](BDFDB['dotCN']['searchbaricon'])[0x0], BDFDB['disCN']['searchbarvisible']);
                    BDFDB['removeClass'](nr, BDFDB['disCN']['searchbarvisible']);
                }
            });
        });
        n4['querySelectorAll']('.numberinput-button-up')['forEach'](nu => {
            ot(nu, 'click', nv => {
                var nw = nu['parentElement']['parentElement']['querySelector']('input');
                var nx = parseInt(nw['getAttribute']('min'));
                var ny = parseInt(nw['getAttribute']('max'));
                var nz = parseInt(nw['value']) + 0x1;
                if (isNaN(ny) || !isNaN(ny) && nz <= ny) {
                    BDFDB['addClass'](nu['parentElement'], 'pressed');
                    clearTimeout(nu['parentElement']['pressedTimeout']);
                    nw['value'] = isNaN(nx) || !isNaN(nx) && nz >= nx ? nz : nx;
                    nw['dispatchEvent'](new Event('change'));
                    nw['dispatchEvent'](new Event('input'));
                    nw['dispatchEvent'](new Event('keydown'));
                    nw['dispatchEvent'](new Event('keyup'));
                    nw['dispatchEvent'](new Event('keypressed'));
                    nu['parentElement']['pressedTimeout'] = setTimeout(() => {
                        BDFDB['removeClass'](nu['parentElement'], 'pressed');
                    }, 0xbb8);
                }
            });
        });
        n4['querySelectorAll']('.numberinput-button-down')['forEach'](nA => {
            ot(nA, 'click', nB => {
                var nC = nA['parentElement']['parentElement']['querySelector']('input');
                var nD = parseInt(nC['getAttribute']('min'));
                var nE = parseInt(nC['getAttribute']('max'));
                var nF = parseInt(nC['value']) - 0x1;
                if (isNaN(nD) || !isNaN(nD) && nF >= nD) {
                    BDFDB['addClass'](nA['parentElement'], 'pressed');
                    clearTimeout(nA['parentElement']['pressedTimeout']);
                    nC['value'] = isNaN(nE) || !isNaN(nE) && nF <= nE ? nF : nE;
                    nC['dispatchEvent'](new Event('change'));
                    nC['dispatchEvent'](new Event('input'));
                    nC['dispatchEvent'](new Event('keydown'));
                    nC['dispatchEvent'](new Event('keyup'));
                    nC['dispatchEvent'](new Event('keypressed'));
                    nA['parentElement']['pressedTimeout'] = setTimeout(() => {
                        BDFDB['removeClass'](nA['parentElement'], 'pressed');
                    }, 0xbb8);
                }
            });
        });
        n4['querySelectorAll']('.amount-input')['forEach'](nG => {
            ot(nG, 'input', nH => {
                if (BDFDB['isObject'](n5)) {
                    var nI = nG['getAttribute']('option');
                    var nJ = parseInt(nG['value']);
                    var nK = parseInt(nG['getAttribute']('min'));
                    var nL = parseInt(nG['getAttribute']('max'));
                    if (nI && !isNaN(nJ) && (isNaN(nK) || !isNaN(nK) && nJ >= nK) && (isNaN(nL) || !isNaN(nL) && nJ <= nL)) {
                        BDFDB['saveData'](nI, nJ, n5, 'amounts');
                        n5['SettingsUpdated'] = !![];
                    }
                }
            });
        });
        n4['querySelectorAll'](BDFDB['dotCNC']['tabbaritem'] + BDFDB['dotCN']['tabbarheaderitem'])['forEach'](nM => {
            oq(nM, nM['parentElement']['querySelector'](BDFDB['dotCNC']['tabbaritem'] + BDFDB['dotCN']['tabbarheaderitem']) == nM ? 0x2 : 0x0);
            ot(nM, 'click', nN => {
                BDFDB['removeClass'](n4['querySelectorAll']('.tab-content.open'), 'open');
                nM['parentElement']['querySelectorAll'](BDFDB['dotCNC']['tabbaritem'] + BDFDB['dotCN']['tabbarheaderitem'])['forEach'](nM => {
                    oq(nM, 0x0);
                });
                var nP = n4['querySelector']('.tab-content[tab=\x22' + nM['getAttribute']('tab') + '\x22]');
                if (nP) BDFDB['addClass'](nP, 'open');
                oq(nM, 0x2);
            });
            ot(nM, 'mouseenter', nQ => {
                if (!BDFDB['containsClass'](nM, BDFDB['disCN']['settingsitemselected'])) oq(nM, 0x1);
            });
            ot(nM, 'mouseleave', nR => {
                if (!BDFDB['containsClass'](nM, BDFDB['disCN']['settingsitemselected'])) oq(nM, 0x0);
            });
        });
        n4['querySelectorAll']('.BDFDB-textscrollwrapper')['forEach'](nS => {
            var nT = nS['querySelector']('.BDFDB-textscroll');
            if (nT) {
                if (BDFDB['containsClass'](nS['parentElement'], BDFDB['disCN']['contextmenuitemsubmenu'])) nS['style']['setProperty']('margin-right', '10px');
                if (BDFDB['getRects'](nS)['width'] > 0x64) nS['style']['setProperty']('text-overflow', 'ellipsis', 'important');
                nS['style']['setProperty']('position', 'relative', 'important');
                nS['style']['setProperty']('display', 'block', 'important');
                nS['style']['setProperty']('overflow', 'hidden', 'important');
                nT['style']['setProperty']('left', '0px', 'important');
                nT['style']['setProperty']('position', 'relative', 'important');
                nT['style']['setProperty']('white-space', 'nowrap', 'important');
                nT['style']['setProperty']('display', 'inline', 'important');
                var nU, nV;
                ot(nS, 'mouseenter', nW => {
                    if (BDFDB['getRects'](nS)['width'] < BDFDB['getRects'](nT)['width']) {
                        BDFDB['addClass'](nS, 'scrolling');
                        if (!nV || !nU) nY();
                        nU(0x1);
                        nT['style']['setProperty']('display', 'block', 'important');
                    }
                });
                ot(nS, 'mouseleave', nX => {
                    if (BDFDB['containsClass'](nS, 'scrolling')) {
                        BDFDB['removeClass'](nS, 'scrolling');
                        nT['style']['setProperty']('display', 'inline', 'important');
                        if (!nV || !nU) nY();
                        nU(0x0);
                    }
                });

                function nY() {
                    nV = new n6['Value'](0x0);
                    nV['interpolate']({
                        'inputRange': [0x0, 0x1],
                        'outputRange': [0x0, (BDFDB['getRects'](nT)['width'] - BDFDB['getRects'](nS)['width']) * -0x1]
                    })['addListener'](nZ => {
                        nT['style']['setProperty']('left', nZ['value'] + 'px', 'important');
                    });
                    nU = o0 => {
                        var o1 = o0 + parseFloat(nT['style']['getPropertyValue']('left')) / (BDFDB['getRects'](nT)['width'] - BDFDB['getRects'](nS)['width']);
                        o1 = isNaN(o1) || !isFinite(o1) ? o0 : o1;
                        o1 *= BDFDB['getRects'](nT)['width'] / (BDFDB['getRects'](nS)['width'] * 0x2);
                        n6['parallel']([n6['timing'](nV, {
                            'toValue': o0,
                            'duration': Math['sqrt'](o1 ** 0x2) * 0xfa0 / (nS['getAttribute']('speed') || 0x1)
                        })])['start']();
                    };
                }
            }
        });
        BDFDB['removeClass'](n4['querySelectorAll']('.tab-content'), 'open');
        BDFDB['addClass'](n4['querySelector']('.tab-content'), 'open');
        n4['querySelectorAll']('.btn-save\x20' + BDFDB['dotCN']['buttoncontents'])['forEach'](o2 => {
            o2['innerText'] = n8['btn_save_text'];
        });
        n4['querySelectorAll']('.btn-cancel\x20' + BDFDB['dotCN']['buttoncontents'])['forEach'](o3 => {
            o3['innerText'] = n8['btn_cancel_text'];
        });
        n4['querySelectorAll']('.btn-all\x20' + BDFDB['dotCN']['buttoncontents'])['forEach'](o4 => {
            o4['innerText'] = n8['btn_all_text'];
        });
        n4['querySelectorAll']('.btn-add\x20' + BDFDB['dotCN']['buttoncontents'])['forEach'](o5 => {
            o5['innerText'] = n8['btn_add_text'];
        });
        n4['querySelectorAll']('.btn-ok\x20' + BDFDB['dotCN']['buttoncontents'])['forEach'](o6 => {
            o6['innerText'] = n8['btn_ok_text'];
        });
        n4['querySelectorAll']('.file-navigator\x20' + BDFDB['dotCN']['buttoncontents'])['forEach'](o7 => {
            o7['innerText'] = n8['file_navigator_text'];
        });
        if (n7) {
            BDFDB['replaceClass'](n4['querySelectorAll'](BDFDB['dotCN']['selectcontroldark']), BDFDB['disCN']['selectcontroldark'], BDFDB['disCN']['selectcontrollight']);
            BDFDB['replaceClass'](n4['querySelectorAll'](BDFDB['dotCN']['selectsingledark']), BDFDB['disCN']['selectsingledark'], BDFDB['disCN']['selectsinglelight']);
            BDFDB['replaceClass'](n4['querySelectorAll'](BDFDB['dotCN']['selectarrowcontainerdark']), BDFDB['disCN']['selectarrowcontainerdark'], BDFDB['disCN']['selectarrowcontainerlight']);
        } else {
            BDFDB['replaceClass'](n4['querySelectorAll'](BDFDB['dotCN']['selectcontrollight']), BDFDB['disCN']['selectcontrollight'], BDFDB['disCN']['selectcontroldark']);
            BDFDB['replaceClass'](n4['querySelectorAll'](BDFDB['dotCN']['selectsinglelight']), BDFDB['disCN']['selectsinglelight'], BDFDB['disCN']['selectsingledark']);
            BDFDB['replaceClass'](n4['querySelectorAll'](BDFDB['dotCN']['selectarrowcontainerlight']), BDFDB['disCN']['selectarrowcontainerlight'], BDFDB['disCN']['selectarrowcontainerdark']);
        }

        function o8(o9, oa) {
            var ob = o9['checked'];
            BDFDB['toggleClass'](o9['parentElement'], BDFDB['disCN']['switchvaluechecked'], ob);
            BDFDB['toggleClass'](o9['parentElement'], BDFDB['disCN']['switchvalueunchecked'], !ob);
            if (oa && BDFDB['isObject'](n5) && BDFDB['containsClass'](o9, 'settings-switch')) {
                let oc = o9['getAttribute']('value')['trim']()['split']('\x20')['filter'](od => od);
                let oe = oc['shift']();
                if (oe) {
                    var of = BDFDB['loadAllData'](n5, oe);
                    var og = '';
                    for (let oh of oc) og += '{\x22' + oh + '\x22:';
                    og += ob + '}' ['repeat'](oc['length']);
                    og = JSON['parse'](og);
                    if (BDFDB['isObject'](og)) BDFDB['deepAssign']( of , og);
                    else of = og;
                    BDFDB['saveAllData']( of , n5, oe);
                    n5['SettingsUpdated'] = !![];
                }
            }
        };

        function oi(oj) {
            var ok = oj['parentElement']['querySelector'](BDFDB['dotCN']['checkbox']);
            var ol = ok['querySelector']('polyline');
            if (oj['checked']) {
                BDFDB['addClass'](ok, BDFDB['disCN']['checkboxchecked']);
                ok['style']['setProperty']('background-color', 'rgb(67,\x20181,\x20129)');
                ok['style']['setProperty']('border-color', 'rgb(67,\x20181,\x20129)');
                ol['setAttribute']('stroke', '#ffffff');
            } else {
                BDFDB['removeClass'](ok, BDFDB['disCN']['checkboxchecked']);
                ok['style']['removeProperty']('background-color');
                ok['style']['removeProperty']('border-color');
                ol['setAttribute']('stroke', 'transparent');
            }
        };

        function om(on) {
            var oo = BDFDB['containsClass'](on, BDFDB['disCN']['giffavoriteselected']);
            var op = on['querySelector'](BDFDB['dotCN']['giffavoriteicon']);
            op['setAttribute']('name', oo ? 'FavoriteFilled' : 'Favorite');
            op['innerHTML'] = oo ? '<path\x20d=\x22M0,0H24V24H0Z\x22\x20fill=\x22none\x22></path><path\x20fill=\x22currentColor\x22\x20d=\x22M12.5,17.6l3.6,2.2a1,1,0,0,0,1.5-1.1l-1-4.1a1,1,0,0,1,.3-1l3.2-2.8A1,1,0,0,0,19.5,9l-4.2-.4a.87.87,0,0,1-.8-.6L12.9,4.1a1.05,1.05,0,0,0-1.9,0l-1.6,4a1,1,0,0,1-.8.6L4.4,9a1.06,1.06,0,0,0-.6,1.8L7,13.6a.91.91,0,0,1,.3,1l-1,4.1a1,1,0,0,0,1.5,1.1l3.6-2.2A1.08,1.08,0,0,1,12.5,17.6Z\x22></path>' : '<path\x20fill=\x22currentColor\x22\x20d=\x22M19.6,9l-4.2-0.4c-0.4,0-0.7-0.3-0.8-0.6l-1.6-3.9c-0.3-0.8-1.5-0.8-1.8,0L9.4,8.1C9.3,8.4,9,8.6,8.6,8.7L4.4,9c-0.9,0.1-1.2,1.2-0.6,1.8L7,13.6c0.3,0.2,0.4,0.6,0.3,1l-1,4.1c-0.2,0.9,0.7,1.5,1.5,1.1l3.6-2.2c0.3-0.2,0.7-0.2,1,0l3.6,2.2c0.8,0.5,1.7-0.2,1.5-1.1l-1-4.1c-0.1-0.4,0-0.7,0.3-1l3.2-2.8C20.9,10.2,20.5,9.1,19.6,9zM12,15.4l-3.8,2.3l1-4.3l-3.3-2.9l4.4-0.4l1.7-4l1.7,4l4.4,0.4l-3.3,2.9l1,4.3L12,15.4z\x22></path>';
            if (oo) {
                BDFDB['addClass'](on, BDFDB['disCN']['giffavoriteshowpulse']);
                setTimeout(() => {
                    BDFDB['removeClass'](on, BDFDB['disCN']['giffavoriteshowpulse']);
                }, 0x1f4);
            }
        };

        function oq(or, os) {
            switch (os) {
                case 0x0:
                    BDFDB['removeClass'](or, BDFDB['disCN']['settingsitemselected']);
                    or['style']['setProperty']('border-color', 'transparent');
                    or['style']['setProperty']('color', n7 ? 'rgba(79,\x2084,\x2092,\x200.4)' : 'rgba(255,\x20255,\x20255,\x200.4)');
                    break;
                case 0x1:
                    BDFDB['removeClass'](or, BDFDB['disCN']['settingsitemselected']);
                    or['style']['setProperty']('border-color', n7 ? 'rgba(79,\x2084,\x2092,\x200.6)' : 'rgba(255,\x20255,\x20255,\x200.6)');
                    or['style']['setProperty']('color', n7 ? 'rgba(79,\x2084,\x2092,\x200.6)' : 'rgba(255,\x20255,\x20255,\x200.6)');
                    break;
                case 0x2:
                    BDFDB['addClass'](or, BDFDB['disCN']['settingsitemselected']);
                    or['style']['setProperty']('border-color', n7 ? 'rgb(79,\x2084,\x2092)' : 'rgb(255,\x20255,\x20255)');
                    or['style']['setProperty']('color', n7 ? 'rgb(79,\x2084,\x2092)' : 'rgb(255,\x20255,\x20255)');
                    break;
            }
        };

        function ot(ou, ov, ow) {
            if (!ou['BDFDBinitElementsListeners']) ou['BDFDBinitElementsListeners'] = {};
            if (ou['BDFDBinitElementsListeners'][ov]) ou['removeEventListener'](ov, ou['BDFDBinitElementsListeners'][ov]);
            ou['BDFDBinitElementsListeners'][ov] = ow;
            ou['addEventListener'](ov, ow, !![]);
        };
    };
    BDFDB['appendModal'] = function(ox) {
        if (!Node['prototype']['isPrototypeOf'](ox)) return;
        if (BDFDB['containsClass'](ox, 'DevilBro-modal')) BDFDB['addClass'](ox, 'BDFDB-modal');
        if (!BDFDB['appendModal']['modals']) BDFDB['appendModal']['modals'] = BDFDB['React']['findDOMNodeSafe'](BDFDB['getOwnerInstance']({
            'node': document['querySelector'](BDFDB['dotCN']['app']),
            'name': 'Modals'
        }));
        if (!BDFDB['appendModal']['modals']) return;
        var oy = BDFDB['containsClass'](ox, BDFDB['disCN']['modal']) ? ox : ox['querySelector'](BDFDB['dotCN']['modal']);
        var oz = oy ? oy['previousSibling'] : null;
        if (oz) {}
        var oA = BDFDB['WebModules']['findByProperties']('spring');
        var oB = new oA['Value'](0x0);
        oB['interpolate']({
            'inputRange': [0x0, 0x1],
            'outputRange': [0x0, 0x1]
        })['addListener'](oC => {
            if (oy) oy['style']['setProperty']('opacity', '' + oC['value']);
        });
        var oD = new oA['Value'](0x0);
        oD['interpolate']({
            'inputRange': [0x0, 0x1],
            'outputRange': [0.7, 0x1]
        })['addListener'](oE => {
            if (oy) oy['style']['setProperty']('transform', 'scale(' + oE['value'] + ')\x20translateZ(0px)');
        });
        var oF = new oA['Value'](0x0);
        oF['interpolate']({
            'inputRange': [0x0, 0x1],
            'outputRange': [0x0, 0.85]
        })['addListener'](oG => {
            if (oz) {
                oz['style']['setProperty']('opacity', '' + oG['value']);
                oz['style']['setProperty']('background-color', 'rgb(0,\x200,\x200)');
                oz['style']['setProperty']('z-index', '1000');
                oz['style']['setProperty']('transform', 'translateZ(0px)');
            }
        });
        var oH = oI => {
            oA['parallel']([oA['timing'](oB, {
                'toValue': oI,
                'duration': 0xfa,
                'easing': oA['Easing']['inOut'](oA['Easing']['ease'])
            }), oA['timing'](oD, {
                'toValue': oI,
                'duration': 0xfa,
                'easing': oA['Easing']['inOut'](oA['Easing']['ease'])
            }), oA['timing'](oF, {
                'toValue': oI,
                'duration': 0xc8,
                'delay': 0x32
            })])['start']();
        };
        var oJ = oK => {
            if (!document['contains'](ox)) document['removeEventListener']('keydown', oJ);
            else if (oK['which'] == 0x1b && oz) oz['click']();
        };
        document['addEventListener']('keydown', oJ);
        BDFDB['addChildEventListener'](ox, 'click', BDFDB['dotCNC']['backdrop'] + BDFDB['dotCNC']['modalclose'] + '.btn-close,\x20.btn-save,\x20.btn-send,\x20.btn-cancel,\x20.btn-ok', () => {
            document['removeEventListener']('keydown', oJ);
            oH(0x0);
            setTimeout(() => {
                ox['remove']();
            }, 0x12c);
        });
        BDFDB['appendModal']['modals']['appendChild'](ox);
        BDFDB['initElements'](ox);
        oH(0x1);
    };
    BDFDB['createSearchBar'] = function(oL = 'small') {
        if (typeof oL != 'string' || !['small', 'medium', 'large']['includes'](oL['toLowerCase']())) oL = 'small';
        var oM = BDFDB['DiscordClassModules']['SearchBar'][oL] ? '\x20' + BDFDB['disCN']['searchbar' + oL] : '';
        var oN = BDFDB['htmlToElement']('<div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['alignstretch'] + BDFDB['disCNS']['nowrap'] + BDFDB['disCN']['searchbar'] + oM) + '\x22\x20style=\x22flex:\x201\x201\x20auto;\x22><div\x20class=\x22' + BDFDB['disCN']['searchbarinner'] + '\x22><input\x20class=\x22' + BDFDB['disCN']['searchbarinput'] + '\x22\x20type=\x22text\x22\x20spellcheck=\x22false\x22\x20placeholder=\x22\x22\x20value=\x22\x22><div\x20tabindex=\x220\x22\x20class=\x22' + (BDFDB['disCN']['searchbariconlayout'] + oM) + '\x22\x20role=\x22button\x22><div\x20class=\x22' + BDFDB['disCN']['searchbariconwrap'] + '\x22><svg\x20name=\x22Search\x22\x20class=\x22' + (BDFDB['disCNS']['searchbaricon'] + BDFDB['disCN']['searchbarvisible']) + '\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2018\x2018\x22><g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M3.60091481,7.20297313\x20C3.60091481,5.20983419\x205.20983419,3.60091481\x207.20297313,3.60091481\x20C9.19611206,3.60091481\x2010.8050314,5.20983419\x2010.8050314,7.20297313\x20C10.8050314,9.19611206\x209.19611206,10.8050314\x207.20297313,10.8050314\x20C5.20983419,10.8050314\x203.60091481,9.19611206\x203.60091481,7.20297313\x20Z\x20M12.0057176,10.8050314\x20L11.3733562,10.8050314\x20L11.1492281,10.5889079\x20C11.9336764,9.67638651\x2012.4059463,8.49170955\x2012.4059463,7.20297313\x20C12.4059463,4.32933105\x2010.0766152,2\x207.20297313,2\x20C4.32933105,2\x202,4.32933105\x202,7.20297313\x20C2,10.0766152\x204.32933105,12.4059463\x207.20297313,12.4059463\x20C8.49170955,12.4059463\x209.67638651,11.9336764\x2010.5889079,11.1492281\x20L10.8050314,11.3733562\x20L10.8050314,12.0057176\x20L14.8073185,16\x20L16,14.8073185\x20L12.2102538,11.0099776\x20L12.0057176,10.8050314\x20Z\x22></path></g></svg><svg\x20name=\x22Clear\x22\x20class=\x22' + (BDFDB['disCNS']['searchbaricon'] + BDFDB['disCN']['searchbarclear']) + '\x22\x20width=\x2212\x22\x20height=\x2212\x22\x20viewBox=\x220\x200\x2012\x2012\x22><g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22><path\x20d=\x22M0\x200h12v12H0\x22></path><path\x20class=\x22fill\x22\x20fill=\x22currentColor\x22\x20d=\x22M9.5\x203.205L8.795\x202.5\x206\x205.295\x203.205\x202.5l-.705.705L5.295\x206\x202.5\x208.795l.705.705L6\x206.705\x208.795\x209.5l.705-.705L6.705\x206\x22></path></g></svg></div></div></div></div>');
        BDFDB['initElements'](oN);
        return oN;
    };
    BDFDB['createSelectMenu'] = function(oO, oP, oQ = '', oR = BDFDB['getDiscordTheme']() == BDFDB['disCN']['themedark']) {
        if (typeof oO != 'string' || typeof oP != 'string' && typeof oP != 'number') return BDFDB['htmlToElement']('<div></div>');
        var oS = oR ? 'dark' : 'light';
        return '<div\x20class=\x22' + BDFDB['disCN']['selectwrap'] + '\x20BDFDB-select\x22\x20style=\x22flex:\x201\x201\x20auto;\x22><div\x20class=\x22' + BDFDB['disCN']['select'] + '\x22\x20type=\x22' + oQ + '\x22\x20value=\x22' + oP + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['selectcontrol'] + BDFDB['disCN']['selectcontrol' + oS]) + '\x22><div\x20class=\x22' + BDFDB['disCN']['selectvalue'] + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['alignbaseline'] + BDFDB['disCNS']['nowrap'] + BDFDB['disCNS']['selectsingle'] + BDFDB['disCN']['selectsingle' + oS]) + '\x22>' + oO + '</div><input\x20readonly=\x22\x22\x20tabindex=\x220\x22\x20class=\x22' + BDFDB['disCN']['selectdummyinput'] + '\x22\x20value=\x22\x22></div><div\x20class=\x22' + BDFDB['disCN']['selectarrowzone'] + '\x22><div\x20aria-hidden=\x22true\x22\x20class=\x22' + (BDFDB['disCNS']['selectarrowcontainer'] + BDFDB['disCN']['selectarrowcontainer' + oS]) + '\x22><svg\x20height=\x2220\x22\x20width=\x2220\x22\x20viewBox=\x220\x200\x2020\x2020\x22\x20aria-hidden=\x22true\x22\x20focusable=\x22false\x22\x20class=\x22' + BDFDB['disCN']['selectarrow'] + '\x22><path\x20d=\x22M4.516\x207.548c0.436-0.446\x201.043-0.481\x201.576\x200l3.908\x203.747\x203.908-3.747c0.533-0.481\x201.141-0.446\x201.574\x200\x200.436\x200.445\x200.408\x201.197\x200\x201.615-0.406\x200.418-4.695\x204.502-4.695\x204.502-0.217\x200.223-0.502\x200.335-0.787\x200.335s-0.57-0.112-0.789-0.335c0\x200-4.287-4.084-4.695-4.502s-0.436-1.17\x200-1.615z\x22></path></svg></div></div></div></div></div>';
    };
    BDFDB['openDropdownMenu'] = function(oT, oU, oV, oW, oX = '', oY = BDFDB['getDiscordTheme']() == BDFDB['disCN']['themedark']) {
        if (typeof oU != 'function' || typeof oV != 'function' || !oW || typeof oW != 'object') return;
        let oZ = oT['currentTarget'];
        let p0 = oZ['parentElement'];
        if (BDFDB['containsClass'](p0, BDFDB['disCN']['selectisopen'])) return;
        BDFDB['addClass'](p0, BDFDB['disCN']['selectisopen']);
        var p1 = p0['getAttribute']('type');
        var p2 = p0['getAttribute']('value');
        var p3 = oY ? 'dark' : 'light';
        var p4 = '<div\x20class=\x22' + (BDFDB['disCNS']['selectmenuouter'] + BDFDB['disCN']['selectmenuouter' + p3]) + '\x22><div\x20class=\x22' + BDFDB['disCN']['selectmenu'] + '\x22>';
        for (var p5 in oW) p4 += '<div\x20value=\x22' + p5 + '\x22\x20class=\x22' + (BDFDB['disCNS']['selectoption'] + (p5 == p2 ? BDFDB['disCN']['selectoptionselect' + p3] : BDFDB['disCN']['selectoption' + p3])) + '\x22\x20style=\x22flex:\x201\x201\x20auto;\x20display:\x20flex;\x22>' + oV(p5) + '</div>';
        p4 += '</div></div>';
        var p6 = BDFDB['htmlToElement'](p4);
        if (oX) BDFDB['addClass'](p6, oX);
        p0['appendChild'](p6);
        BDFDB['addChildEventListener'](p6, 'mouseenter', BDFDB['dotCN']['selectoption'] + BDFDB['notCN']['selectoptionselectlight'] + BDFDB['notCN']['selectoptionselectdark'], p7 => {
            if (oY) {
                BDFDB['removeClass'](p7['currentTarget'], BDFDB['disCN']['selectoptiondark']);
                BDFDB['addClass'](p7['currentTarget'], BDFDB['disCN']['selectoptionhoverdark']);
            } else {
                BDFDB['removeClass'](p7['currentTarget'], BDFDB['disCN']['selectoptionlight']);
                BDFDB['addClass'](p7['currentTarget'], BDFDB['disCN']['selectoptionhoverlight']);
            }
        });
        BDFDB['addChildEventListener'](p6, 'mouseleave', BDFDB['dotCN']['selectoption'] + BDFDB['notCN']['selectoptionselectlight'] + BDFDB['notCN']['selectoptionselectdark'], p8 => {
            if (oY) {
                BDFDB['removeClass'](p8['currentTarget'], BDFDB['disCN']['selectoptionhoverdark']);
                BDFDB['addClass'](p8['currentTarget'], BDFDB['disCN']['selectoptiondark']);
            } else {
                BDFDB['removeClass'](p8['currentTarget'], BDFDB['disCN']['selectoptionhoverlight']);
                BDFDB['addClass'](p8['currentTarget'], BDFDB['disCN']['selectoptionlight']);
            }
        });
        BDFDB['addChildEventListener'](p6, 'mousedown', BDFDB['dotCN']['selectoption'], p9 => {
            var pa = p9['currentTarget']['getAttribute']('value');
            p0['setAttribute']('value', pa);
            oU(p0, p1, pa);
        });
        var pb = pc => {
            if (pc['target']['parentElement'] != p6) {
                document['removeEventListener']('mousedown', pb);
                p6['remove']();
                setTimeout(() => {
                    BDFDB['removeClass'](p0, BDFDB['disCN']['selectisopen']);
                }, 0x64);
            }
        };
        document['addEventListener']('mousedown', pb);
    };
    BDFDB['openConfirmModal'] = function() {
        if (arguments['length'] < 0x2) return;
        var pd = arguments[0x0];
        var pe = arguments[0x1];
        if (!BDFDB['isObject'](pd) || !pe) return;
        var pf = typeof arguments[0x2] == 'function' ? arguments[0x2] : typeof arguments[0x3] == 'function' ? arguments[0x3] : null;
        var pg = typeof arguments[0x2] == 'string' ? arguments[0x2] : 'Are\x20you\x20sure?';
        let ph = BDFDB['htmlToElement']('<span\x20class=\x22' + pd['name'] + '-modal\x20BDFDB-confirmation-modal\x20BDFDB-modal\x22><div\x20class=\x22' + BDFDB['disCN']['backdrop'] + '\x22></div><div\x20class=\x22' + BDFDB['disCN']['modal'] + '\x22><div\x20class=\x22' + BDFDB['disCN']['modalinner'] + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['modalsub'] + BDFDB['disCNS']['modalmini'] + BDFDB['disCN']['modalminisize']) + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['aligncenter'] + BDFDB['disCNS']['nowrap'] + BDFDB['disCN']['modalheader']) + '\x22\x20style=\x22flex:0\x200\x20auto;\x22><div\x20class=\x22' + BDFDB['disCN']['flexchild'] + '\x22\x20style=\x22flex:1\x201\x20auto;\x22><h4\x20class=\x22' + (BDFDB['disCNS']['h4'] + BDFDB['disCNS']['headertitle'] + BDFDB['disCNS']['size16'] + BDFDB['disCNS']['height20'] + BDFDB['disCNS']['weightsemibold'] + BDFDB['disCNS']['defaultcolor'] + BDFDB['disCNS']['h4defaultmargin'] + BDFDB['disCN']['marginreset']) + '\x22>' + pg + '</h4><div\x20class=\x22' + (BDFDB['disCNS']['modalguildname'] + BDFDB['disCNS']['small'] + BDFDB['disCNS']['size12'] + BDFDB['disCNS']['height16'] + BDFDB['disCN']['primary']) + '\x22>' + pd['name'] + '</div></div><button\x20type=\x22button\x22\x20class=\x22' + (BDFDB['disCNS']['modalclose'] + BDFDB['disCNS']['flexchild'] + BDFDB['disCNS']['button'] + BDFDB['disCNS']['buttonlookblank'] + BDFDB['disCNS']['buttoncolorbrand'] + BDFDB['disCN']['buttongrow']) + '\x22><div\x20class=\x22' + BDFDB['disCN']['buttoncontents'] + '\x22><svg\x20class=\x22\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2012\x2012\x22><g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22><path\x20d=\x22M0\x200h12v12H0\x22></path><path\x20class=\x22fill\x22\x20fill=\x22currentColor\x22\x20d=\x22M9.5\x203.205L8.795\x202.5\x206\x205.295\x203.205\x202.5l-.705.705L5.295\x206\x202.5\x208.795l.705.705L6\x206.705\x208.795\x209.5l.705-.705L6.705\x206\x22></path></g></svg></div></button></div><div\x20class=\x22' + (BDFDB['disCNS']['scrollerwrap'] + BDFDB['disCNS']['modalcontent'] + BDFDB['disCNS']['scrollerthemed'] + BDFDB['disCN']['themeghosthairline']) + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['scroller'] + BDFDB['disCNS']['modalsubinner'] + BDFDB['disCN']['modalminicontent']) + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['medium'] + BDFDB['disCNS']['size16'] + BDFDB['disCNS']['height20'] + BDFDB['disCNS']['primary'] + BDFDB['disCN']['selectable']) + 'message-content\x22\x20style=\x22padding-bottom:20px;\x22>' + pe + '</div></div>\x20</div><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontalreverse'] + BDFDB['disCNS']['horizontalreverse2'] + BDFDB['disCNS']['directionrowreverse'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['alignstretch'] + BDFDB['disCNS']['nowrap'] + BDFDB['disCN']['modalfooter']) + '\x22><button\x20type=\x22button\x22\x20class=\x22btn-ok\x20' + (BDFDB['disCNS']['button'] + BDFDB['disCNS']['buttonlookfilled'] + BDFDB['disCNS']['buttoncolorbrand'] + BDFDB['disCNS']['buttonsizemedium'] + BDFDB['disCN']['buttongrow']) + '\x22><div\x20class=\x22' + BDFDB['disCN']['buttoncontents'] + '\x22></div></button><button\x20type=\x22button\x22\x20class=\x22btn-cancel\x20' + (BDFDB['disCNS']['button'] + BDFDB['disCNS']['buttonlooklink'] + BDFDB['disCNS']['buttoncolorwhite'] + BDFDB['disCNS']['buttonsizemedium'] + BDFDB['disCN']['buttongrow']) + '\x22><div\x20class=\x22' + BDFDB['disCN']['buttoncontents'] + '\x22></div></button></div></div></div></div></span>');
        BDFDB['appendModal'](ph);
        if (typeof pf == 'function') ph['querySelector']('.btn-ok')['addEventListener']('click', () => {
            setTimeout(() => {
                pf();
            }, 0x12c);
        });
        return ph;
    };
    BDFDB['updateContextPosition'] = function(pi, pj = BDFDB['mousePosition']) {
        if (!Node['prototype']['isPrototypeOf'](pi)) return;
        var pk = BDFDB['getRects'](document['querySelector'](BDFDB['dotCN']['appmount']));
        var pl = BDFDB['getRects'](pi);
        var pm = {
            'pageX': pj['pageX'] - pl['width'],
            'pageY': pj['pageY'] - pl['height']
        };
        pi['style']['setProperty']('left', (pj['pageX'] + pl['width'] > pk['width'] ? pm['pageX'] < 0x0 ? 0xa : pm['pageX'] : pj['pageX']) + 'px');
        pi['style']['setProperty']('top', (pj['pageY'] + pl['height'] > pk['height'] ? pm['pageY'] < 0x0 ? 0xa : pm['pageY'] : pj['pageY']) + 'px');
        BDFDB['initElements'](pi);
    };
    BDFDB['appendContextMenu'] = function(pn, po = BDFDB['mousePosition']) {
        if (!Node['prototype']['isPrototypeOf'](pn)) return;
        var pp = document['querySelector'](BDFDB['dotCN']['tooltips']);
        if (!pp) return;
        pp['parentElement']['insertBefore'](pn, pp);
        var pq = BDFDB['getRects'](document['querySelector'](BDFDB['dotCN']['appmount']));
        var pr = BDFDB['getRects'](pn);
        BDFDB['toggleClass'](pn, 'invertX', po['pageX'] + pr['width'] > pq['width']);
        BDFDB['toggleClass'](pn, 'invertY', po['pageY'] + pr['height'] > pq['height']);
        BDFDB['toggleClass'](pn, BDFDB['disCN']['contextmenuinvertchildx'], po['pageX'] + pr['width'] > pq['width']);
        BDFDB['addClass'](pn, BDFDB['getDiscordTheme']());
        BDFDB['updateContextPosition'](pn, po);
        var ps = pt => {
            if (!document['contains'](pn)) document['removeEventListener']('mousedown', ps);
            else if (!pn['contains'](pt['target'])) {
                document['removeEventListener']('mousedown', ps);
                pn['remove']();
            } else {
                var pu = BDFDB['getParentEle'](BDFDB['dotCN']['contextmenuitem'], pt['target']);
                if (pu && !BDFDB['containsClass'](pu, BDFDB['disCN']['contextmenuitemdisabled'], BDFDB['disCN']['contextmenuitemsubmenu'], BDFDB['disCN']['contextmenuitemtoggle'], BDFDB['disCN']['contextmenuitemslider'], ![])) document['removeEventListener']('mousedown', ps);
            }
        };
        document['addEventListener']('mousedown', ps);
        BDFDB['initElements'](pn);
    };
    BDFDB['closeContextMenu'] = function(pv) {
        if (!BDFDB['isObject'](pv)) return;
        var pw = Node['prototype']['isPrototypeOf'](pv) ? BDFDB['getOwnerInstance']({
            'node': pv,
            'name': 'ContextMenu',
            'up': !![]
        }) : BDFDB['getOwnerInstance']({
            'instance': pv,
            'name': 'ContextMenu',
            'up': !![]
        });
        if (BDFDB['isObject'](pw) && pw['props'] && typeof pw['props']['closeContextMenu'] == 'function') pw['props']['closeContextMenu']();
    };
    BDFDB['appendSubMenu'] = function(px, py) {
        if (!Node['prototype']['isPrototypeOf'](px) || !Node['prototype']['isPrototypeOf'](py)) return;
        px['appendChild'](py);
        var pz = BDFDB['getRects'](px);
        var pA = BDFDB['getRects'](py);
        py['style']['setProperty']('left', pz['left'] + 'px');
        py['style']['setProperty']('top', (pz['top'] + pA['height'] > window['outerHeight'] ? pz['top'] - pA['height'] + pz['height'] : pz['top']) + 'px');
        BDFDB['addClass'](py, BDFDB['getDiscordTheme']());
        var pB = () => {
            px['removeEventListener']('mouseleave', pB);
            py['remove']();
        };
        px['addEventListener']('mouseleave', pB);
        BDFDB['initElements'](py);
    };
    BDFDB['setContextHint'] = function(pC, pD) {
        if (!pD || !Node['prototype']['isPrototypeOf'](pC)) return;
        var pE = pC['querySelector'](BDFDB['dotCN']['contextmenuhint']);
        if (pE) {
            pC['style']['setProperty']('position', 'relative', 'important');
            pE['innerHTML'] = '<div\x20class=\x22BDFDB-textscrollwrapper\x22\x20speed=3><div\x20class=\x22BDFDB-textscroll\x22>' + BDFDB['encodeToHTML'](pD) + '</div></div>';
            if (!BDFDB['containsClass'](pE['previousElementSibling'], 'BDFDB-textscrollwrapper')) {
                BDFDB['addClass'](pE['previousElementSibling'], 'BDFDB-textscrollwrapper');
                pE['previousElementSibling']['setAttribute']('speed', 0x3);
                pE['previousElementSibling']['innerHTML'] = '<div\x20class=\x22BDFDB-textscroll\x22>' + BDFDB['encodeToHTML'](pE['previousElementSibling']['innerText']) + '</div>';
            }
            var pF = BDFDB['getRects'](pC)['width'] - (parseFloat(getComputedStyle(pC)['paddingLeft']) + parseFloat(getComputedStyle(pC)['paddingRight']));
            pE['previousElementSibling']['style']['setProperty']('width', pF - 0x24 + 'px', 'important');
            pE['previousElementSibling']['style']['setProperty']('max-width', pF - 0x24 + 'px', 'important');
            pE['style']['setProperty']('position', 'absolute', 'important');
            pE['style']['setProperty']('top', getComputedStyle(pC)['paddingTop'], 'important');
            pE['style']['setProperty']('right', getComputedStyle(pC)['paddingRight'], 'important');
            pE['style']['setProperty']('width', '32px', 'important');
            pE['style']['setProperty']('max-width', '32px', 'important');
        }
    };
    BDFDB['openGuildContextMenu'] = function(pG, pH = BDFDB['mousePosition']) {
        var pI = BDFDB['getParentEle'](BDFDB['dotCN']['guildouter'], pG);
        if (!pI) return;
        var pJ = BDFDB['getReactValue'](pI, 'return.stateNode.handleContextMenu');
        if (pJ) pJ({
            'currentTarget': pI,
            'target': pI,
            'preventDefault': pK => pK,
            'stopPropagation': pL => pL,
            'pageX': pH['pageX'],
            'pageY': pH['pageY']
        });
    };
    BDFDB['createMessageOptionPopout'] = function(pM) {
        if (!pM) return;
        var pN = document['querySelector'](BDFDB['dotCN']['popouts']);
        if (!pN) return;
        pM = BDFDB['containsClass'](pM, BDFDB['disCN']['optionpopoutbutton']) ? pM : pM['querySelector'](BDFDB['dotCN']['optionpopoutbutton']);
        var pO = BDFDB['getReactInstance'](BDFDB['getParentEle'](BDFDB['dotCN']['messagebuttoncontainer'], pM));
        pO = pO && pO['child'] ? pO['child'] : null;
        pO = pO && pO['stateNode'] && typeof pO['stateNode']['renderReactionPopout'] == 'function' ? pO['sibling'] : pO;
        if (pO && pO['stateNode'] && typeof pO['stateNode']['renderOptionPopout'] == 'function') {
            BDFDB['addClass'](pM, 'popout-open');
            var pP = BDFDB['htmlToElement']('<div\x20role=\x22dialog\x22\x20class=\x22' + (BDFDB['disCNS']['popoutnoarrow'] + BDFDB['disCNS']['popout'] + BDFDB['disCNS']['popoutbottom'] + BDFDB['disCN']['popoutarrowalignmenttop']) + '\x22\x20style=\x22z-index:1001;\x20visibility:visible;\x20transform:translateX(-50%)\x20translateY(0%)\x20translateZ(0px);\x22></div>');
            pN['appendChild'](pP);
            var pQ = pO['stateNode']['renderOptionPopout'](pO['stateNode']['props']);
            pQ['props']['target'] = pM;
            pQ['props']['onClose'] = () => {
                BDFDB['removeClass'](pM, 'popout-open');
                pP['remove']();
            };
            BDFDB['React']['render'](pQ, pP);
            var pR = BDFDB['getRects'](pM);
            pP['style']['setProperty']('left', pR['left'] + pR['width'] / 0x2 + 'px');
            pP['style']['setProperty']('top', pR['top'] + pR['height'] / 0x2 + 'px');
            var pS = pT => {
                document['removeEventListener']('mousedown', pS);
                if (!pP['contains'](pT['target'])) pQ['props']['onClose']();
            };
            document['addEventListener']('mousedown', pS);
        }
    };
    BDFDB['createSortPopout'] = function(pU, pV, pW) {
        if (!pU || !pV || typeof pW != 'function' || BDFDB['containsClass'](pU, 'popout-open')) return;
        var pX = document['querySelector'](BDFDB['dotCN']['popouts']);
        var pY = pU['querySelector'](BDFDB['dotCNC']['quickselectvalue'] + BDFDB['dotCN']['recentmentionsmentionfiltervalue']);
        if (!pX || !pY) return;
        BDFDB['addClass'](pU, 'popout-open');
        var pZ = BDFDB['htmlToElement'](pV);
        var q0 = BDFDB['getRects'](pU);
        pZ['style']['setProperty']('left', q0['left'] + q0['width'] + 'px');
        pZ['style']['setProperty']('top', q0['top'] + BDFDB['getRects'](pY)['height'] + 'px');
        BDFDB['addClass'](pZ['querySelector'](BDFDB['dotCN']['contextmenu']), BDFDB['getDiscordTheme']());
        BDFDB['addChildEventListener'](pZ, 'click', BDFDB['dotCN']['contextmenuitem'], q1 => {
            pY['innerText'] = q1['currentTarget']['innerText'];
            pY['setAttribute']('option', q1['currentTarget']['getAttribute']('option'));
            document['removeEventListener']('mousedown', q2);
            pZ['remove']();
            setTimeout(() => {
                BDFDB['removeClass'](pU, 'popout-open');
            }, 0x12c);
            pW();
        });
        pX['appendChild'](pZ);
        var q2 = q3 => {
            if (!document['contains'](pZ)) document['removeEventListener']('mousedown', q2);
            else if (!pZ['contains'](q3['target'])) {
                document['removeEventListener']('mousedown', q2);
                pZ['remove']();
                setTimeout(() => {
                    BDFDB['removeClass'](pU, 'popout-open');
                }, 0x12c);
            }
        };
        document['addEventListener']('mousedown', q2);
    };
    BDFDB['setColorSwatches'] = function(q4, q5) {
        if (!Node['prototype']['isPrototypeOf'](q4)) return;
        var q6 = q4['querySelector']('.swatches:not([swatchnr])');
        if (!q6) return;
        q6['setAttribute']('swatchnr', parseInt(q4['querySelectorAll']('.swatches[swatchnr]')['length'] + 0x1));
        var q7 = ['rgb(82,233,30)', 'rgb(46,204,113)', 'rgb(26,188,156)', 'rgb(52,152,219)', 'rgb(52,84,219)', 'rgb(134,30,233)', 'rgb(155,89,182)', 'rgb(233,30,99)', 'rgb(233,65,30)', 'rgb(231,76,60)', 'rgb(230,126,34)', 'rgb(241,196,15)', 'rgb(199,204,205)', 'rgb(112,128,136)', 'rgb(99,99,99)', 'rgb(255,255,255)', 'rgb(59,173,20)', 'rgb(31,139,76)', 'rgb(17,128,106)', 'rgb(32,102,148)', 'rgb(32,57,148)', 'rgb(109,20,173)', 'rgb(113,54,138)', 'rgb(173,20,87)', 'rgb(173,32,20)', 'rgb(153,45,34)', 'rgb(168,67,0)', 'rgb(194,124,14)', 'rgb(151,156,159)', 'rgb(93,104,109)', 'rgb(44,44,44)'];
        q6['appendChild'](BDFDB['htmlToElement']('<div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['alignstretch'] + BDFDB['disCNS']['nowrap'] + BDFDB['disCN']['margintop4']) + '\x22\x20style=\x22flex:1\x201\x20auto;\x22><div\x20class=\x22ui-color-picker-swatch\x20large\x20color\x20custom\x22\x20style=\x22background-color:rgb(0,\x200,\x200);\x22><svg\x20class=\x22color-picker-dropper\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2214\x22\x20height=\x2214\x22\x20viewBox=\x220\x200\x2016\x2016\x22><path\x20class=\x22color-picker-dropper-fg\x22\x20fill=\x22currentColor\x22\x20style=\x22color:rgb(255,255,255)\x20!important;\x22\x20d=\x22M14.994\x201.006C13.858-.257\x2011.904-.3\x2010.72.89L8.637\x202.975l-.696-.697-1.387\x201.388\x205.557\x205.557\x201.387-1.388-.697-.697\x201.964-1.964c1.13-1.13\x201.3-2.985.23-4.168zm-13.25\x2010.25c-.225.224-.408.48-.55.764L.02\x2014.37l1.39\x201.39\x202.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813\x204.803z\x22></path></svg></div><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['alignstretch'] + BDFDB['disCN']['wrap']) + '\x20ui-color-picker-row\x22\x20style=\x22flex:1\x201\x20auto;\x22><div\x20class=\x22ui-color-picker-swatch\x20small\x20nocolor\x22></div>' + q7['map'](q8 => '<div\x20class=\x22ui-color-picker-swatch\x20small\x20color\x22\x20style=\x22background-color:\x20' + q8 + ';\x22></div>')['join']('') + '</div></div>'));
        if (q5 && !BDFDB['colorCOMPARE'](q5, [0x0, 0x0, 0x0, 0x0])) {
            var q9 = q7['indexOf'](BDFDB['colorCONVERT'](q5, 'RGB'));
            qc(q9 > -0x1 ? q6['querySelectorAll']('.ui-color-picker-swatch.small.color')[q9] : q6['querySelector']('.ui-color-picker-swatch.large.custom'), q5, !![]);
        } else qc(q6['querySelector']('.ui-color-picker-swatch.small.nocolor'), null, !![]);
        BDFDB['addChildEventListener'](q6, 'click', '.ui-color-picker-swatch', qa => {
            if (BDFDB['containsClass'](q6, 'disabled')) return;
            else if (BDFDB['containsClass'](qa['currentTarget'], 'custom')) {
                BDFDB['openColorPicker'](qa['currentTarget']['style']['backgroundColor'])['then'](qb => {
                    qc(q6['querySelector']('.ui-color-picker-swatch.selected'), null, ![]);
                    qc(q6['querySelector']('.ui-color-picker-swatch.custom'), qb, !![]);
                });
            } else {
                qc(q6['querySelector']('.ui-color-picker-swatch.selected'), null, ![]);
                qc(qa['currentTarget'], qa['currentTarget']['style']['getPropertyValue']('background-color'), !![]);
            }
        });

        function qc(qd, qe, qf) {
            if (!qd) return;
            if (qf) {
                BDFDB['addClass'](qd, 'selected');
                if (qe) qd['style']['setProperty']('border-color', BDFDB['colorINV'](qe, 'RGB'), 'important');
                else qd['style']['removeProperty']('border-color');
                if (qe && BDFDB['containsClass'](qd, 'custom')) {
                    var qg = BDFDB['colorCONVERT'](qe, 'RGBCOMP');
                    qd['style']['setProperty']('background-color', BDFDB['colorCONVERT'](qe, 'RGB'), 'important');
                    qd['querySelector']('.color-picker-dropper-fg')['style']['setProperty']('color', qg[0x0] > 0x96 && qg[0x1] > 0x96 && qg[0x2] > 0x96 ? '#000' : '#FFF', 'important');
                }
            } else {
                BDFDB['removeClass'](qd, 'selected');
                qd['style']['removeProperty']('border-color');
            }
        }
    };
    BDFDB['getSwatchColor'] = function(qh, qi) {
        if (!Node['prototype']['isPrototypeOf'](qh)) return;
        var qj = qh['querySelector']('.swatches[swatchnr=\x22' + qi + '\x22]\x20.ui-color-picker-swatch.selected');
        return qj ? BDFDB['colorCONVERT'](qj['style']['getPropertyValue']('background-color'), 'RGBCOMP') : null;
    };
    BDFDB['openColorPicker'] = function(qk) {
        return new Promise(ql => {
            qk = BDFDB['colorCONVERT'](qk, 'RGB') || 'rgb(0,0,0)';
            var qm = BDFDB['getLibraryStrings']();
            var qn = {
                'HEX': {
                    'type': 'text',
                    'name': 'hex',
                    'group': 'HEX',
                    'min': null,
                    'max': null,
                    'length': 0x7,
                    'unit': '',
                    'default': '#000000'
                },
                'R': {
                    'type': 'number',
                    'name': 'red',
                    'group': 'RGB',
                    'min': 0x0,
                    'max': 0xff,
                    'length': null,
                    'unit': '',
                    'default': 0x0
                },
                'G': {
                    'type': 'number',
                    'name': 'green',
                    'group': 'RGB',
                    'min': 0x0,
                    'max': 0xff,
                    'length': null,
                    'unit': '',
                    'default': 0x0
                },
                'B': {
                    'type': 'number',
                    'name': 'blue',
                    'group': 'RGB',
                    'min': 0x0,
                    'max': 0xff,
                    'length': null,
                    'unit': '',
                    'default': 0x0
                },
                'H': {
                    'type': 'number',
                    'name': 'hue',
                    'group': 'HSL',
                    'min': 0x0,
                    'max': 0x168,
                    'length': null,
                    'unit': '°',
                    'default': 0x0
                },
                'S': {
                    'type': 'number',
                    'name': 'saturation',
                    'group': 'HSL',
                    'min': 0x0,
                    'max': 0x64,
                    'length': null,
                    'unit': '%',
                    'default': 0x0
                },
                'L': {
                    'type': 'number',
                    'name': 'lightness',
                    'group': 'HSL',
                    'min': 0x0,
                    'max': 0x64,
                    'length': null,
                    'unit': '%',
                    'default': 0x0
                }
            };
            var qo = BDFDB['htmlToElement']('<span\x20class=\x22colorpicker-modal\x20BDFDB-modal\x22><div\x20class=\x22' + BDFDB['disCN']['backdrop'] + '\x22></div><div\x20class=\x22' + BDFDB['disCN']['modal'] + '\x22><div\x20class=\x22' + BDFDB['disCN']['modalinner'] + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['modalsub'] + BDFDB['disCN']['modalsizemedium']) + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['aligncenter'] + BDFDB['disCNS']['nowrap'] + BDFDB['disCN']['modalheader']) + '\x22\x20style=\x22flex:0\x200\x20auto;\x22><div\x20class=\x22' + BDFDB['disCN']['flexchild'] + '\x22\x20style=\x22flex:1\x201\x20auto;\x22><h4\x20class=\x22' + (BDFDB['disCNS']['h4'] + BDFDB['disCNS']['headertitle'] + BDFDB['disCNS']['size16'] + BDFDB['disCNS']['height20'] + BDFDB['disCNS']['weightsemibold'] + BDFDB['disCNS']['defaultcolor'] + BDFDB['disCNS']['h4defaultmargin'] + BDFDB['disCN']['marginreset']) + '\x22>' + qm['colorpicker_modal_header_text'] + '</h4></div><button\x20type=\x22button\x22\x20class=\x22' + (BDFDB['disCNS']['modalclose'] + BDFDB['disCNS']['flexchild'] + BDFDB['disCNS']['button'] + BDFDB['disCNS']['buttonlookblank'] + BDFDB['disCNS']['buttoncolorbrand'] + BDFDB['disCN']['buttongrow']) + '\x22><div\x20class=\x22' + BDFDB['disCN']['buttoncontents'] + '\x22><svg\x20class=\x22\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20viewBox=\x220\x200\x2012\x2012\x22><g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22><path\x20d=\x22M0\x200h12v12H0\x22></path><path\x20class=\x22fill\x22\x20fill=\x22currentColor\x22\x20d=\x22M9.5\x203.205L8.795\x202.5\x206\x205.295\x203.205\x202.5l-.705.705L5.295\x206\x202.5\x208.795l.705.705L6\x206.705\x208.795\x209.5l.705-.705L6.705\x206\x22></path></g></svg></div></button></div><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['vertical'] + BDFDB['disCNS']['modalsubinner'] + BDFDB['disCNS']['directioncolumn'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['alignstretch'] + BDFDB['disCN']['nowrap']) + '\x20colorpicker-container\x22\x20style=\x22flex:1\x201\x20auto;\x22><div\x20class=\x22colorpicker-color\x22><div\x20class=\x22colorpicker-white\x22\x20style=\x22background:linear-gradient(to\x20right,\x20#fff,\x20transparent)\x20!important;\x22><div\x20class=\x22colorpicker-black\x22\x20style=\x22background:linear-gradient(to\x20top,\x20#000,\x20transparent)\x20!important;\x22><div\x20class=\x22colorpicker-pickercursor\x22\x20style=\x22left:-999999px;\x20top:-999999px;\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22><circle\x20cx=\x227\x22\x20cy=\x227\x22\x20r=\x226\x22\x20style=\x22color:black\x20!important;\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22\x20/></svg></div><div\x20class=\x22colorpicker-pickerpane\x22></div></div></div></div><div\x20class=\x22colorpicker-slider\x22\x20style=\x22background:linear-gradient(to\x20top,\x20#f00\x200%,\x20#ff0\x2017%,\x20#0f0\x2033%,\x20#0ff\x2050%,\x20#00f\x2067%,\x20#f0f\x2083%,\x20#f00\x20100%)\x20!important;\x22><div\x20class=\x22colorpicker-slidercursor\x22\x20style=\x22top:-999999px;\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22><path\x20style=\x22color:grey\x20!important;\x22\x20stroke=\x22currentColor\x22\x20fill=\x22white\x22\x20d=\x22M\x200\x200,\x20l\x205\x205,\x20l\x20-5\x205,\x20m\x2031\x200,\x20l\x20-5\x20-5,\x20l\x205\x20-5\x22></path></svg></div><div\x20class=\x22colorpicker-sliderpane\x22></div></div><div\x20class=\x22colorpicker-controls\x22><div\x20class=\x22colorpicker-previewcontainer\x22><div\x20class=\x22colorpicker-preview-0\x20selected\x22\x20style=\x22background-color:#808080;\x22></div><div\x20class=\x22colorpicker-preview-2\x22\x20style=\x22background-color:#808080;\x22></div></div><div\x20class=\x22colorpicker-inputs\x20' + (BDFDB['disCNS']['card'] + BDFDB['disCN']['cardprimaryeditable']) + '\x22>' + Object['keys'](qn)['map']((qp, qq) => '<div\x20class=\x22colorpicker-input\x20' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCNS']['aligncenter'] + BDFDB['disCNS']['justifycenter'] + BDFDB['disCNS']['margintop4'] + BDFDB['disCNS']['marginbottom4'] + BDFDB['disCN']['nowrap']) + '\x22><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCN']['nowrap']) + '\x22\x20style=\x22flex:1\x201\x2020%\x22><h5\x20class=\x22' + (BDFDB['disCNS']['h5'] + BDFDB['disCNS']['size12'] + BDFDB['disCNS']['height16'] + BDFDB['disCN']['weightsemibold']) + '\x22>' + qp + ':</h5></div><div\x20class=\x22' + (qn[qp]['type'] == 'number' ? 'inputNumberWrapper\x20inputNumberWrapperMini\x20' : '') + (BDFDB['disCNS']['inputwrapper'] + BDFDB['disCNS']['vertical'] + BDFDB['disCNS']['flex'] + BDFDB['disCN']['directioncolumn']) + '\x22\x20style=\x22flex:1\x201\x2070%;\x22>' + (qn[qp]['type'] == 'number' ? '<span\x20class=\x22numberinput-buttons-zone\x22><span\x20class=\x22numberinput-button-up\x22></span><span\x20class=\x22numberinput-button-down\x22></span></span>' : '') + '<input\x20type=\x22' + qn[qp]['type'] + '\x22' + (!isNaN(qn[qp]['min']) && qn[qp]['min'] !== null ? '\x20min=\x22' + qn[qp]['min'] + '\x22' : '') + (!isNaN(qn[qp]['max']) && qn[qp]['max'] !== null ? '\x20max=\x22' + qn[qp]['max'] + '\x22' : '') + (!isNaN(qn[qp]['length']) && qn[qp]['length'] !== null ? '\x20maxlength=\x22' + qn[qp]['length'] + '\x22' : '') + '\x20group=\x22' + qn[qp]['group'] + '\x22\x20placeholder=\x22' + qn[qp]['default'] + '\x22\x20class=\x22' + (BDFDB['disCNS']['inputmini'] + BDFDB['disCNS']['input'] + BDFDB['disCN']['size16']) + '\x20colorpicker-' + qn[qp]['name'] + '\x22></div><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontal'] + BDFDB['disCNS']['horizontal2'] + BDFDB['disCNS']['directionrow'] + BDFDB['disCN']['nowrap']) + '\x22\x20style=\x22flex:1\x201\x2010%\x22><h5\x20class=\x22' + (BDFDB['disCNS']['h5'] + BDFDB['disCNS']['size12'] + BDFDB['disCNS']['height16'] + BDFDB['disCN']['weightsemibold']) + '\x22>' + qn[qp]['unit'] + '</h5></div></div>')['join']('') + '</div></div></div><div\x20class=\x22' + (BDFDB['disCNS']['flex'] + BDFDB['disCNS']['flex2'] + BDFDB['disCNS']['horizontalreverse'] + BDFDB['disCNS']['horizontalreverse2'] + BDFDB['disCNS']['directionrowreverse'] + BDFDB['disCNS']['justifystart'] + BDFDB['disCNS']['alignstretch'] + BDFDB['disCNS']['nowrap'] + BDFDB['disCN']['modalfooter']) + '\x22><button\x20type=\x22button\x22\x20class=\x22btn-ok\x20' + (BDFDB['disCNS']['button'] + BDFDB['disCNS']['buttonlookfilled'] + BDFDB['disCNS']['buttoncolorbrand'] + BDFDB['disCNS']['buttonsizemedium'] + BDFDB['disCN']['buttongrow']) + '\x22><div\x20class=\x22' + BDFDB['disCN']['buttoncontents'] + '\x22></div></button></div></div></div></div></span>');
            BDFDB['appendModal'](qo);
            BDFDB['addChildEventListener'](qo, 'click', '.btn-ok', () => {
                ql(qo['querySelector']('[class^=\x22colorpicker-preview-\x22].selected')['style']['getPropertyValue']('background-color'));
            });
            BDFDB['addChildEventListener'](qo, 'click', BDFDB['dotCNC']['backdrop'] + BDFDB['dotCN']['modalclose'], () => {
                ql(null);
            });
            var qr = '#000000',
                qs = 0x0,
                qt = 0x0,
                qu = 0x0,
                qv = 0x0,
                qw = 0x0,
                qx = 0x0;
            var qy = qo['querySelector']('.colorpicker-hex');
            var qz = qo['querySelector']('.colorpicker-hue');
            var qA = qo['querySelector']('.colorpicker-saturation');
            var qB = qo['querySelector']('.colorpicker-lightness');
            var qC = qo['querySelector']('.colorpicker-red');
            var qD = qo['querySelector']('.colorpicker-green');
            var qE = qo['querySelector']('.colorpicker-blue');
            var qF = qo['querySelector']('.colorpicker-pickerpane');
            var qG = qo['querySelector']('.colorpicker-pickercursor');
            var qH = qo['querySelector']('circle');
            var qI = qo['querySelector']('.colorpicker-sliderpane');
            var qJ = qo['querySelector']('.colorpicker-slidercursor');
            var qK = qo['querySelector']('path');
            var qL = 0x0;
            var qM = 0x0;
            var qN, qO, qP, qQ, qR, qS;
            var qT = 0x0;
            var qU, qV, qW;
            [qv, qw, qx] = BDFDB['colorCONVERT'](qk, 'HSLCOMP');
            rp();
            setTimeout(() => {
                ri();
            }, 0x12c);
            qF['addEventListener']('mousedown', qX => {
                BDFDB['appendLocalStyle']('BDFDBcrossHairColorPicker', '*\x20{cursor:crosshair\x20!important;}');
                r8(qX['button']);
                rj();
                qL = qX['clientX'] - qN;
                qM = qX['clientY'] - qO;
                ro();
                qw = BDFDB['mapRange']([qP - qN, qQ - qN], [0x0, 0x64], qL) + '%';
                qx = BDFDB['mapRange']([qR - qO, qS - qO], [0x64, 0x0], qM) + '%';
                rp();
                var qY = () => {
                    BDFDB['removeLocalStyle']('BDFDBcrossHairColorPicker');
                    document['removeEventListener']('mouseup', qY);
                    document['removeEventListener']('mousemove', qZ);
                };
                var qZ = r0 => {
                    qL = r0['clientX'] > qQ ? qQ - qN : r0['clientX'] < qP ? qP - qN : r0['clientX'] - qN;
                    qM = r0['clientY'] > qS ? qS - qO : r0['clientY'] < qR ? qR - qO : r0['clientY'] - qO;
                    ro();
                    qw = BDFDB['mapRange']([qP - qN, qQ - qN], [0x0, 0x64], qL) + '%';
                    qx = BDFDB['mapRange']([qR - qO, qS - qO], [0x64, 0x0], qM) + '%';
                    rp();
                };
                document['addEventListener']('mouseup', qY);
                document['addEventListener']('mousemove', qZ);
            });
            qI['addEventListener']('mousedown', r1 => {
                BDFDB['appendLocalStyle']('BDFDBcrossHairColorPicker', '*\x20{cursor:crosshair\x20!important;}');
                r8(r1['button']);
                rj();
                qT = r1['clientY'] - qU;
                ro();
                qv = BDFDB['mapRange']([qV - qU, qW - qU], [0x168, 0x0], qT);
                rp();
                var r2 = () => {
                    BDFDB['removeLocalStyle']('BDFDBcrossHairColorPicker');
                    document['removeEventListener']('mouseup', r2);
                    document['removeEventListener']('mousemove', r3);
                };
                var r3 = r4 => {
                    qT = r4['clientY'] > qW ? qW - qU : r4['clientY'] < qV ? qV - qU : r4['clientY'] - qU;
                    ro();
                    qv = BDFDB['mapRange']([qV - qU, qW - qU], [0x168, 0x0], qT);
                    rp();
                };
                document['addEventListener']('mouseup', r2);
                document['addEventListener']('mousemove', r3);
            });
            BDFDB['addChildEventListener'](qo, 'input', BDFDB['dotCN']['inputmini'], r5 => {
                rb(r5['currentTarget']['getAttribute']('group'));
            });
            BDFDB['addChildEventListener'](qo, 'click', '[class^=\x22colorpicker-preview-\x22]', r6 => {
                var r7 = qo['querySelector']('[class^=\x22colorpicker-preview-\x22].selected');
                r7['style']['setProperty']('border-color', 'transparent');
                BDFDB['removeClass'](r7, 'selected');
                BDFDB['addClass'](r6['currentTarget'], 'selected');
                [qv, qw, qx] = BDFDB['colorCONVERT'](r6['currentTarget']['style']['getPropertyValue']('background-value'), 'HSLCOMP');
                rp();
                ri();
            });

            function r8(r9) {
                var ra = qo['querySelector']('[class^=\x22colorpicker-preview-\x22].selected');
                ra['style']['removeProperty']('border-color');
                BDFDB['removeClass'](ra, 'selected');
                BDFDB['addClass'](qo['querySelector']('.colorpicker-preview-' + r9), 'selected');
            }

            function rb(rc) {
                switch (rc) {
                    case 'RGB':
                        qs = rd(qC), qt = rd(qD), qu = rd(qE);
                        [qv, qw, qx] = BDFDB['colorCONVERT']([qs, qt, qu], 'HSLCOMP');
                        qy['value'] = BDFDB['colorCONVERT']([qs, qt, qu], 'HEX');
                        qz['value'] = Math['round'](qv), qA['value'] = Math['round'](parseInt(qw)), qB['value'] = Math['round'](parseInt(qx));
                        qC['value'] = qs, qD['value'] = qt, qE['value'] = qu;
                        break;
                    case 'HSL':
                        qv = rd(qz), qw = rd(qA) + '%', qx = rd(qB) + '%';
                        [qs, qt, qu] = BDFDB['colorCONVERT']([qv, qw, qx], 'RGBCOMP');
                        qy['value'] = BDFDB['colorCONVERT']([qs, qt, qu], 'HEX');
                        qz['value'] = qv, qA['value'] = parseInt(qw), qB['value'] = parseInt(qx);
                        qC['value'] = qs, qD['value'] = qt, qE['value'] = qu;
                        break;
                    case 'HEX':
                        qr = qy['value'];
                        if (/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i ['test'](qr)) {
                            [qv, qw, qx] = BDFDB['colorCONVERT'](qr, 'HSLCOMP');
                            [qs, qt, qu] = BDFDB['colorCONVERT'](qr, 'RGBCOMP');
                            qz['value'] = Math['round'](qv), qA['value'] = Math['round'](parseInt(qw)), qB['value'] = Math['round'](parseInt(qx));
                            qC['value'] = qs, qD['value'] = qt, qE['value'] = qu;
                        }
                        break;
                }
                rq();
                ri();
            }

            function rd(re) {
                var rf = parseInt(re['value']);
                var rg = parseInt(re['getAttribute']('min'));
                var rh = parseInt(re['getAttribute']('max'));
                return isNaN(rf) ? re['getAttribute']('placeholder') : rf < rg ? rg : rf > rh ? rh : rf;
            }

            function ri() {
                rj();
                qL = BDFDB['mapRange']([0x0, 0x64], [qP - qN, qQ - qN], parseInt(qw));
                qM = BDFDB['mapRange']([0x64, 0x0], [qR - qO, qS - qO], parseInt(qx));
                qT = BDFDB['mapRange']([0x168, 0x0], [qV - qU, qW - qU], qv);
                ro();
                qH['style']['setProperty']('color', BDFDB['colorINV']([qs, qt, qu], 'RGB'), 'important');
                qK['style']['setProperty']('color', BDFDB['colorCONVERT']([qv, '100%', '100%'], 'RGB'), 'important');
            }

            function rj() {
                var rk = BDFDB['getRects'](qF);
                var rl = BDFDB['getRects'](qG);
                qN = rl['width'] / 0x2;
                qO = rl['height'] / 0x2;
                qP = rk['left'];
                qQ = qP + rk['width'];
                qR = rk['top'];
                qS = qR + rk['height'];
                var rm = BDFDB['getRects'](qI);
                var rn = BDFDB['getRects'](qJ);
                qU = rn['height'] / 0x2;
                qV = rm['top'];
                qW = qV + rm['height'];
            }

            function ro() {
                qG['style']['setProperty']('left', qL - qP + 'px', 'important');
                qG['style']['setProperty']('top', qM - qR + 'px', 'important');
                qJ['style']['setProperty']('top', qT - qV + 'px', 'important');
            }

            function rp() {
                [qs, qt, qu] = BDFDB['colorCONVERT']([qv, qw, qx], 'RGBCOMP');
                qy['value'] = BDFDB['colorCONVERT']([qs, qt, qu], 'HEX');
                qz['value'] = Math['round'](qv), qA['value'] = Math['round'](parseInt(qw)), qB['value'] = Math['round'](parseInt(qx));
                qC['value'] = Math['round'](qs), qD['value'] = Math['round'](qt), qE['value'] = Math['round'](qu);
                rq();
                qH['style']['setProperty']('color', BDFDB['colorINV']([qs, qt, qu], 'RGB'), 'important');
                qK['style']['setProperty']('color', BDFDB['colorCONVERT']([qv, '100%', '100%'], 'RGB'), 'important');
            }

            function rq() {
                qo['querySelector']('.colorpicker-color')['style']['setProperty']('background-color', BDFDB['colorCONVERT']([qv, '100%', '100%'], 'RGB'), 'important');
                var rr = qo['querySelector']('[class^=\x22colorpicker-preview-\x22].selected');
                rr['style']['setProperty']('background-color', BDFDB['colorCONVERT']([qs, qt, qu], 'RGB'), 'important');
                rr['style']['setProperty']('border-color', BDFDB['colorINV']([qs, qt, qu], 'RGB'), 'important');
            }
        });
    };
    BDFDB['mapRange'] = function(rs, rt, ru) {
        return parseFloat(rt[0x0]) + (parseFloat(ru) - parseFloat(rs[0x0])) * (parseFloat(rt[0x1]) - parseFloat(rt[0x0])) / (parseFloat(rs[0x1]) - parseFloat(rs[0x0]));
    };
    BDFDB['shake'] = function() {
        BDFDB['getReactInstance'](document['querySelector'](BDFDB['dotCN']['appold']))['return']['stateNode']['shake']();
    };
    BDFDB['isBDv2'] = function() {
        return typeof BDFDB['BDv2Api'] !== 'undefined';
    };
    BDFDB['isPluginEnabled'] = function(rv) {
        if (!BDFDB['isBDv2']()) return window['bdplugins'][rv] && window['pluginCookie'][rv];
        else return BDFDB['Plugins'][rv['toLowerCase']()] ? BDFDB['Plugins'][rv['toLowerCase']()]['enabled'] : null;
    };
    BDFDB['isRestartNoMoreEnabled'] = function() {
        return window['settingsCookie']['fork-ps-5'] && window['settingsCookie']['fork-ps-5'] === !![] || BDFDB['isPluginEnabled']('Restart-No-More') || BDFDB['isPluginEnabled']('Restart\x20No\x20More');
    };
    BDFDB['isThemeEnabled'] = function(rw) {
        if (!BDFDB['isBDv2']()) return window['bdthemes'][rw] && window['themeCookie'][rw];
        else return BDFDB['Themes'][rw['toLowerCase']()] ? BDFDB['Themes'][rw['toLowerCase']()]['enabled'] : null;
    };
    (BDFDB['setPluginCache'] = function() {
        if (!BDFDB['isBDv2']()) return;
        BDFDB['Plugins'] = {};
        for (let rx of BDFDB['BDv2Api']['Plugins']['listPlugins']()) BDFDB['BDv2Api']['Plugins']['getPlugin'](rx)['then'](ry => {
            BDFDB['Plugins'][rx] = ry;
        });
    })();
    (BDFDB['setThemeCache'] = function() {
        if (!BDFDB['isBDv2']()) return;
        BDFDB['Themes'] = {};
        for (let rz of BDFDB['BDv2Api']['Themes']['listThemes']()) BDFDB['BDv2Api']['Themes']['getTheme'](rz)['then'](rA => {
            BDFDB['Themes'][rz] = rA;
        });
    })();
    BDFDB['DiscordClassModules'] = {};
    BDFDB['DiscordClassModules']['BDFDB'] = {
        'BDFDBundefined': 'BDFDB_undefined',
        'cardInner': 'card-inner',
        'overflowEllipsis': 'overflowellipsis'
    };
    BDFDB['DiscordClassModules']['BDrepo'] = {
        'bdGuild': 'bd-guild',
        'bdGuildAnimatable': 'bd-animatable',
        'bdGuildAudio': 'bd-audio',
        'bdGuildSelected': 'bd-selected',
        'bdGuildSeparator': 'bd-guild-separator',
        'bdGuildUnread': 'bd-unread',
        'bdGuildVideo': 'bd-video',
        'bdPillSelected': 'bd-selected',
        'bdPillUnread': 'bd-unread',
        'bdaAuthor': 'bda-author',
        'bdaControls': 'bda-controls',
        'bdaDescription': 'bda-description',
        'bdaDescriptionWrap': 'bda-description-wrap',
        'bdaFooter': 'bda-footer',
        'bdaHeader': 'bda-header',
        'bdaHeaderTitle': 'bda-header-title',
        'bdaLink': 'bda-link',
        'bdaLinks': 'bda-links',
        'bdaName': 'bda-name',
        'bdaSettingsButton': 'bda-settings-button',
        'bdaSlist': 'bda-slist',
        'bdaVersion': 'bda-version',
        'bdPfbtn': 'bd-pfbtn',
        'settingsOpen': 'settings-open',
        'settingsClosed': 'settings-closed',
        'switch': 'ui-switch',
        'switchCheckbox': 'ui-switch-checkbox',
        'switchChecked': 'checked',
        'switchItem': 'ui-switch-item',
        'switchWrapper': 'ui-switch-wrapper'
    };
    BDFDB['DiscordClassModules']['BDv2repo'] = {
        'bdButton': 'bd-button',
        'bdCard': 'bd-card',
        'bdHasTooltip': 'bd-hasTooltip',
        'bdMaterialDesignIcon': 'bd-materialDesignIcon',
        'bdTooltip': 'bd-tooltip',
        'vTooltipOpen': 'v-tooltip-open'
    };
    BDFDB['DiscordClassModules']['NotFound'] = {
        '_': '',
        'applicationStore': 'applicationStore-1pNvnv',
        'avatarStopAnimation': 'stop-animation',
        'badgeWrapper': 'wrapper-232cHJ',
        'gameLibrary': 'gameLibrary-TTDw4Y',
        'guildChannels': 'container-PNkimc',
        'highlight': 'highlight',
        'loginScreen': 'wrapper-3Q5DdO',
        'lfg': 'lfg-3xoFkI',
        'mention': 'mention',
        'select': 'css-1kj8ui-container',
        'selectArrow': 'css-19bqh2r',
        'selectArrowContainer': 'css-bdfdb-indicatorContainer',
        'selectArrowContainerDark': 'css-12qlrak-indicatorContainer',
        'selectArrowContainerLight': 'css-11dkexk-indicatorContainer',
        'selectArrowZone': 'css-1wy0on6',
        'selectControl': 'css-bdfdb-control',
        'selectControlDark': 'css-15ejc46-control',
        'selectControlLight': 'css-oc2jo8-control',
        'selectDummyInput': 'css-gj7qu5-dummyInput',
        'selectHasValue': 'css-bdfdb-hasValue',
        'selectIsOpen': 'css-bdfdb-isOpen',
        'selectMenu': 'css-1ye7vu0',
        'selectMenuOuter': 'css-bdfdb-menuOuter',
        'selectMenuOuterDark': 'css-ua3v5p-menu',
        'selectMenuOuterLight': 'css-1ea7eys-menu',
        'selectOption': 'css-bdfdb-option',
        'selectOptionDark': 'css-1aymab5-option',
        'selectOptionLight': 'css-ddw2o3-option',
        'selectOptionHoverDark': 'css-1gnr91b-option',
        'selectOptionHoverLight': 'css-qgio2y-option',
        'selectOptionSelectDark': 'css-12o7ek3-option',
        'selectOptionSelectLight': 'css-1kft5vg-option',
        'selectSingle': 'css-bdfdb-singleValue',
        'selectSingleDark': 'css-1k00wn6-singleValue',
        'selectSingleLight': 'css-6nrxdk-singleValue',
        'selectValue': 'css-1hwfws3',
        'splashBackground': 'splashBackground-1FRCko',
        'themeDark': 'theme-dark',
        'themeLight': 'theme-light'
    };
    BDFDB['DiscordClassModules']['AccountDetails'] = BDFDB['WebModules']['findByProperties']('usernameContainer', 'container');
    BDFDB['DiscordClassModules']['ActivityFeed'] = BDFDB['WebModules']['findByProperties']('activityFeed');
    BDFDB['DiscordClassModules']['Anchor'] = BDFDB['WebModules']['findByProperties']('anchor', 'anchorUnderlineOnHover');
    BDFDB['DiscordClassModules']['AppBase'] = BDFDB['WebModules']['findByProperties']('container', 'channels');
    BDFDB['DiscordClassModules']['AppMount'] = BDFDB['WebModules']['findByProperties']('appMount');
    BDFDB['DiscordClassModules']['AppInner'] = BDFDB['WebModules']['findByProperties']('app');
    BDFDB['DiscordClassModules']['AppOuter'] = BDFDB['WebModules']['find'](rB => typeof rB['app'] == 'string' && rB != BDFDB['DiscordClassModules']['AppInner']);
    BDFDB['DiscordClassModules']['AuditLog'] = BDFDB['WebModules']['findByProperties']('auditLog');
    BDFDB['DiscordClassModules']['AuthBox'] = BDFDB['WebModules']['findByProperties']('authBox');
    BDFDB['DiscordClassModules']['Autocomplete'] = BDFDB['WebModules']['findByProperties']('autocomplete', 'autocompleteRow');
    BDFDB['DiscordClassModules']['Avatar'] = BDFDB['WebModules']['findByProperties']('avatar', 'mask', 'wrapper');
    BDFDB['DiscordClassModules']['AvatarIcon'] = BDFDB['WebModules']['findByProperties']('iconActiveLarge', 'iconActiveMedium');
    BDFDB['DiscordClassModules']['Backdrop'] = BDFDB['WebModules']['findByProperties']('backdrop');
    BDFDB['DiscordClassModules']['Badge'] = BDFDB['WebModules']['findByProperties']('numberBadge', 'textBadge', 'iconBadge');
    BDFDB['DiscordClassModules']['BotTag'] = BDFDB['WebModules']['findByProperties']('botTag', 'botTagInvert');
    BDFDB['DiscordClassModules']['Button'] = BDFDB['WebModules']['findByProperties']('colorBlack', 'button');
    BDFDB['DiscordClassModules']['Call'] = BDFDB['WebModules']['findByProperties']('callAvatar', 'video');
    BDFDB['DiscordClassModules']['CallCurrent'] = BDFDB['WebModules']['findByProperties']('wrapper', 'fullScreen');
    BDFDB['DiscordClassModules']['CallDetails'] = BDFDB['WebModules']['findByProperties']('container', 'hotspot');
    BDFDB['DiscordClassModules']['CallIncoming'] = BDFDB['WebModules']['findByProperties']('incomingCall', 'container');
    BDFDB['DiscordClassModules']['CallIncomingInner'] = BDFDB['WebModules']['findByProperties']('incomingCallInner', 'members');
    BDFDB['DiscordClassModules']['Card'] = BDFDB['WebModules']['findByProperties']('card', 'cardBrand');
    BDFDB['DiscordClassModules']['CardStatus'] = BDFDB['WebModules']['findByProperties']('reset', 'error', 'card');
    BDFDB['DiscordClassModules']['CardStore'] = BDFDB['WebModules']['findByProperties']('card', 'interactive', 'url');
    BDFDB['DiscordClassModules']['Category'] = BDFDB['WebModules']['findByProperties']('wrapper', 'children', 'muted');
    BDFDB['DiscordClassModules']['CategoryContainer'] = BDFDB['WebModules']['findByProperties']('addButtonIcon', 'containerDefault');
    BDFDB['DiscordClassModules']['ChangeLog'] = BDFDB['WebModules']['findByProperties']('added', 'fixed', 'improved', 'progress');
    BDFDB['DiscordClassModules']['Channel'] = BDFDB['WebModules']['findByProperties']('wrapper', 'content', 'modeSelected');;
    BDFDB['DiscordClassModules']['ChannelContainer'] = BDFDB['WebModules']['findByProperties']('actionIcon', 'containerDefault');
    BDFDB['DiscordClassModules']['ChannelTextArea'] = BDFDB['WebModules']['findByProperties']('textArea', 'attachButtonDivider');
    BDFDB['DiscordClassModules']['ChannelTextAreaButton'] = BDFDB['WebModules']['findByProperties']('buttonWrapper', 'active');
    BDFDB['DiscordClassModules']['ChannelWindow'] = BDFDB['WebModules']['findByProperties']('chat', 'channelTextArea');
    BDFDB['DiscordClassModules']['Checkbox'] = BDFDB['WebModules']['findByProperties']('checkboxWrapper', 'round');
    BDFDB['DiscordClassModules']['ContextMenu'] = BDFDB['WebModules']['findByProperties']('contextMenu', 'itemGroup');
    BDFDB['DiscordClassModules']['ContextMenuCheckbox'] = BDFDB['WebModules']['findByProperties']('checkboxInner', 'checkboxElement');
    BDFDB['DiscordClassModules']['Cursor'] = BDFDB['WebModules']['findByProperties']('cursorDefault', 'userSelectNone');
    BDFDB['DiscordClassModules']['DmAddPopout'] = BDFDB['WebModules']['findByProperties']('friendSelected', 'popout');
    BDFDB['DiscordClassModules']['DownloadLink'] = BDFDB['WebModules']['findByProperties']('downloadLink', 'size12');
    BDFDB['DiscordClassModules']['Embed'] = BDFDB['WebModules']['findByProperties']('embed', 'embedAuthorIcon');
    BDFDB['DiscordClassModules']['EmbedActions'] = BDFDB['WebModules']['findByProperties']('iconPlay', 'iconWrapperActive');
    BDFDB['DiscordClassModules']['EmojiPicker'] = BDFDB['WebModules']['findByProperties']('emojiPicker', 'categories');
    BDFDB['DiscordClassModules']['File'] = BDFDB['WebModules']['findByProperties']('downloadButton', 'fileNameLink');
    BDFDB['DiscordClassModules']['Flex'] = BDFDB['WebModules']['findByProperties']('alignBaseline', 'alignCenter');
    BDFDB['DiscordClassModules']['FlexChild'] = BDFDB['WebModules']['findByProperties']('flexChild', 'flex');
    BDFDB['DiscordClassModules']['FormText'] = BDFDB['WebModules']['findByProperties']('description', 'modeDefault');
    BDFDB['DiscordClassModules']['Friends'] = BDFDB['WebModules']['findByProperties']('friendsColumn', 'friendsRow');
    BDFDB['DiscordClassModules']['Game'] = BDFDB['WebModules']['findByProperties']('game', 'gameName');
    BDFDB['DiscordClassModules']['GifFavoriteButton'] = BDFDB['WebModules']['findByProperties']('gifFavoriteButton', 'showPulse');
    BDFDB['DiscordClassModules']['GiftInventory'] = BDFDB['WebModules']['find'](rC => typeof rC['root'] == 'string' && typeof rC['body'] == 'string' && (Object['keys'](rC)['length'] == 0x2 || Object['keys'](rC)['length'] == 0x3));
    BDFDB['DiscordClassModules']['Guild'] = BDFDB['WebModules']['findByProperties']('wrapper', 'badgeWrapper', 'svg');
    BDFDB['DiscordClassModules']['GuildChannels'] = BDFDB['WebModules']['findByProperties']('positionedContainer', 'unreadBar');
    BDFDB['DiscordClassModules']['GuildDm'] = BDFDB['WebModules']['find'](rD => typeof rD['pill'] == 'string' && Object['keys'](rD)['length'] == 0x1);
    BDFDB['DiscordClassModules']['GuildEdges'] = BDFDB['WebModules']['findByProperties']('wrapper', 'edge', 'autoPointerEvents');
    BDFDB['DiscordClassModules']['GuildHeader'] = BDFDB['WebModules']['findByProperties']('header', 'name', 'hasDropdown');
    BDFDB['DiscordClassModules']['GuildIcon'] = BDFDB['WebModules']['findByProperties']('acronym', 'selected', 'wrapper');
    BDFDB['DiscordClassModules']['GuildSettingsBanned'] = BDFDB['WebModules']['findByProperties']('bannedUser', 'bannedUserAvatar');
    BDFDB['DiscordClassModules']['GuildSettingsInvite'] = BDFDB['WebModules']['findByProperties']('countdownColumn', 'inviteSettingsInviteRow');
    BDFDB['DiscordClassModules']['GuildSettingsMember'] = BDFDB['WebModules']['findByProperties']('member', 'membersFilterPopout');
    BDFDB['DiscordClassModules']['GuildServer'] = BDFDB['WebModules']['findByProperties']('blobContainer', 'pill');
    BDFDB['DiscordClassModules']['GuildsItems'] = BDFDB['WebModules']['findByProperties']('guildSeparator', 'guildsError', 'friendsOnline');
    BDFDB['DiscordClassModules']['GuildsWrapper'] = BDFDB['WebModules']['findByProperties']('scrollerWrap', 'unreadMentionsBar', 'wrapper');
    BDFDB['DiscordClassModules']['HeaderBar'] = BDFDB['WebModules']['findByProperties']('container', 'children', 'toolbar');
    BDFDB['DiscordClassModules']['HeaderBarExtras'] = BDFDB['WebModules']['findByProperties']('headerBarLoggedOut', 'search');
    BDFDB['DiscordClassModules']['HeaderBarTopic'] = BDFDB['WebModules']['findByProperties']('topic', 'expandable', 'content');
    BDFDB['DiscordClassModules']['HomeIcon'] = BDFDB['WebModules']['findByProperties']('homeIcon');
    BDFDB['DiscordClassModules']['HotKeyRecorder'] = BDFDB['WebModules']['findByProperties']('editIcon', 'recording');
    BDFDB['DiscordClassModules']['HoverCard'] = BDFDB['WebModules']['findByProperties']('card', 'active');
    BDFDB['DiscordClassModules']['HoverCardButton'] = BDFDB['WebModules']['find'](rE => typeof rE['button'] == 'string' && Object['keys'](rE)['length'] == 0x1);
    BDFDB['DiscordClassModules']['IconDirection'] = BDFDB['WebModules']['findByProperties']('directionDown', 'directionUp');
    BDFDB['DiscordClassModules']['ImageWrapper'] = BDFDB['WebModules']['findByProperties']('clickable', 'imageWrapperBackground');
    BDFDB['DiscordClassModules']['InviteModal'] = BDFDB['WebModules']['findByProperties']('inviteRow', 'modal');
    BDFDB['DiscordClassModules']['Item'] = BDFDB['WebModules']['findByProperties']('item', 'side', 'header');
    BDFDB['DiscordClassModules']['Input'] = BDFDB['WebModules']['findByProperties']('inputMini', 'statusRed');
    BDFDB['DiscordClassModules']['Layers'] = BDFDB['WebModules']['findByProperties']('layer', 'layers');
    BDFDB['DiscordClassModules']['Margins'] = BDFDB['WebModules']['findByProperties']('marginBottom4', 'marginCenterHorz');
    BDFDB['DiscordClassModules']['Member'] = BDFDB['WebModules']['findByProperties']('member', 'memberInner');
    BDFDB['DiscordClassModules']['MembersWrap'] = BDFDB['WebModules']['findByProperties']('membersWrap', 'membersGroup');
    BDFDB['DiscordClassModules']['Mention'] = BDFDB['WebModules']['findByProperties']('wrapperHover', 'wrapperNoHover');
    BDFDB['DiscordClassModules']['Message'] = BDFDB['WebModules']['findByProperties']('message', 'content');
    BDFDB['DiscordClassModules']['MessageAccessory'] = BDFDB['WebModules']['findByProperties']('embedWrapper', 'gifFavoriteButton');
    BDFDB['DiscordClassModules']['MessageBody'] = BDFDB['WebModules']['findByProperties']('buttonContainer', 'isMentioned');
    BDFDB['DiscordClassModules']['MessageFile'] = BDFDB['WebModules']['findByProperties']('cancelButton', 'filenameLinkWrapper');
    BDFDB['DiscordClassModules']['MessageMarkup'] = BDFDB['WebModules']['findByProperties']('markup');
    BDFDB['DiscordClassModules']['MessageSystem'] = BDFDB['WebModules']['findByProperties']('container', 'actionAnchor');
    BDFDB['DiscordClassModules']['MessagesPopout'] = BDFDB['WebModules']['findByProperties']('messageGroupWrapperOffsetCorrection', 'messagesPopout');
    BDFDB['DiscordClassModules']['MessagesWrap'] = BDFDB['WebModules']['findByProperties']('messagesWrapper', 'messageGroupBlocked');
    BDFDB['DiscordClassModules']['Modal'] = BDFDB['WebModules']['findByProperties']('modal', 'sizeLarge');
    BDFDB['DiscordClassModules']['ModalDivider'] = BDFDB['WebModules']['find'](rF => typeof rF['divider'] == 'string' && Object['keys'](rF)['length'] == 0x1);
    BDFDB['DiscordClassModules']['ModalItems'] = BDFDB['WebModules']['findByProperties']('guildName', 'checkboxContainer');
    BDFDB['DiscordClassModules']['ModalMiniContent'] = BDFDB['WebModules']['find'](rG => typeof rG['modal'] == 'string' && typeof rG['content'] == 'string' && typeof rG['size'] == 'string' && Object['keys'](rG)['length'] == 0x3);
    BDFDB['DiscordClassModules']['ModalWrap'] = BDFDB['WebModules']['find'](rH => typeof rH['modal'] == 'string' && typeof rH['inner'] == 'string' && Object['keys'](rH)['length'] == 0x2);
    BDFDB['DiscordClassModules']['NameTag'] = BDFDB['WebModules']['findByProperties']('bot', 'nameTag');
    BDFDB['DiscordClassModules']['Note'] = BDFDB['WebModules']['find'](rI => typeof rI['note'] == 'string' && Object['keys'](rI)['length'] == 0x1);
    BDFDB['DiscordClassModules']['Notice'] = BDFDB['WebModules']['findByProperties']('notice', 'noticeFacebook');
    BDFDB['DiscordClassModules']['OptionPopout'] = BDFDB['WebModules']['findByProperties']('container', 'button', 'item');
    BDFDB['DiscordClassModules']['PictureInPicture'] = BDFDB['WebModules']['findByProperties']('pictureInPicture', 'pictureInPictureWindow');
    BDFDB['DiscordClassModules']['PillWrapper'] = BDFDB['WebModules']['find'](rJ => typeof rJ['item'] == 'string' && typeof rJ['wrapper'] == 'string' && Object['keys'](rJ)['length'] == 0x2);
    BDFDB['DiscordClassModules']['PrivateChannel'] = BDFDB['WebModules']['findByProperties']('activityIconForeground', 'channel');
    BDFDB['DiscordClassModules']['PrivateChannelList'] = BDFDB['WebModules']['findByProperties']('privateChannels', 'searchBar');
    BDFDB['DiscordClassModules']['Popout'] = BDFDB['WebModules']['findByProperties']('popout', 'arrowAlignmentTop');
    BDFDB['DiscordClassModules']['PopoutActivity'] = BDFDB['WebModules']['findByProperties']('ellipsis', 'activityActivityFeed');
    BDFDB['DiscordClassModules']['QuickSelect'] = BDFDB['WebModules']['findByProperties']('quickSelectArrow', 'selected');
    BDFDB['DiscordClassModules']['QuickSwitch'] = BDFDB['WebModules']['findByProperties']('resultFocused', 'guildIconContainer');
    BDFDB['DiscordClassModules']['QuickSwitchWrap'] = BDFDB['WebModules']['findByProperties']('container', 'miscContainer');
    BDFDB['DiscordClassModules']['Reactions'] = BDFDB['WebModules']['findByProperties']('reactionBtn', 'reaction');
    BDFDB['DiscordClassModules']['RecentMentions'] = BDFDB['WebModules']['findByProperties']('recentMentionsFilterPopout', 'mentionFilter');
    BDFDB['DiscordClassModules']['Role'] = BDFDB['WebModules']['findByProperties']('roleCircle', 'roleName');
    BDFDB['DiscordClassModules']['Scroller'] = BDFDB['WebModules']['findByProperties']('firefoxFixScrollFlex', 'scroller');
    BDFDB['DiscordClassModules']['SearchBar'] = BDFDB['WebModules']['findByProperties']('container', 'clear');
    BDFDB['DiscordClassModules']['SearchPopout'] = BDFDB['WebModules']['findByProperties']('datePicker', 'searchResultChannelIconBackground');
    BDFDB['DiscordClassModules']['SearchPopoutWrap'] = BDFDB['WebModules']['findByProperties']('container', 'queryContainer');
    BDFDB['DiscordClassModules']['SearchResults'] = BDFDB['WebModules']['findByProperties']('resultsWrapper', 'searchResults');
    BDFDB['DiscordClassModules']['Select'] = BDFDB['WebModules']['findByProperties']('select', 'error', 'errorMessage');
    BDFDB['DiscordClassModules']['SettingsCloseButton'] = BDFDB['WebModules']['findByProperties']('closeButton', 'keybind');
    BDFDB['DiscordClassModules']['SettingsItems'] = BDFDB['WebModules']['findByProperties']('dividerMini', 'note');
    BDFDB['DiscordClassModules']['SettingsTable'] = BDFDB['WebModules']['findByProperties']('headerOption', 'headerSize');
    BDFDB['DiscordClassModules']['SettingsWindow'] = BDFDB['WebModules']['findByProperties']('contentRegion', 'standardSidebarView');
    BDFDB['DiscordClassModules']['Slider'] = BDFDB['WebModules']['findByProperties']('slider', 'grabber');
    BDFDB['DiscordClassModules']['Spoiler'] = BDFDB['WebModules']['findByProperties']('spoilerContainer', 'hidden');
    BDFDB['DiscordClassModules']['Switch'] = BDFDB['WebModules']['findByProperties']('switchDisabled', 'valueChecked');
    BDFDB['DiscordClassModules']['Table'] = BDFDB['WebModules']['findByProperties']('stickyHeader', 'emptyStateText');
    BDFDB['DiscordClassModules']['Text'] = BDFDB['WebModules']['findByProperties']('defaultColor', 'defaultMarginh1');
    BDFDB['DiscordClassModules']['TextStyle'] = BDFDB['WebModules']['findByProperties']('height28', 'primary');
    BDFDB['DiscordClassModules']['TextWeight'] = BDFDB['WebModules']['findByProperties']('weightBold', 'weightSemiBold');
    BDFDB['DiscordClassModules']['TitleBar'] = BDFDB['WebModules']['findByProperties']('titleBar', 'wordmark');
    BDFDB['DiscordClassModules']['Tooltip'] = BDFDB['WebModules']['findByProperties']('tooltip', 'tooltipTop');
    BDFDB['DiscordClassModules']['TooltipContainer'] = BDFDB['WebModules']['findByProperties']('layer', 'layerContainer');
    BDFDB['DiscordClassModules']['Typing'] = BDFDB['WebModules']['findByProperties']('cooldownWrapper', 'typing');
    BDFDB['DiscordClassModules']['UserPopout'] = BDFDB['WebModules']['findByProperties']('userPopout', 'headerPlaying');
    BDFDB['DiscordClassModules']['UserProfile'] = BDFDB['WebModules']['findByProperties']('topSectionNormal', 'tabBarContainer');
    BDFDB['DiscordClassModules']['Video'] = BDFDB['WebModules']['findByProperties']('video', 'fullScreen');
    BDFDB['DiscordClassModules']['Voice'] = BDFDB['WebModules']['findByProperties']('avatarSpeaking', 'voiceUser');
    if (BDFDB['myData']['id'] == '278543574059057154')
        for (let rK in BDFDB['DiscordClassModules'])
            if (!BDFDB['DiscordClassModules'][rK]) {
                console['warn']('%c[BDFDB]%c', 'color:\x20#3a71c1;\x20font-weight:\x20700;', '', rK + '\x20not\x20initialized\x20in\x20BDFDB.DiscordClassModules');
            } BDFDB['DiscordClasses'] = {
        '_bdguild': ['BDrepo', 'bdGuild'],
        '_bdguildanimatable': ['BDrepo', 'bdGuildAnimatable'],
        '_bdguildaudio': ['BDrepo', 'bdGuildAudio'],
        '_bdguildselected': ['BDrepo', 'bdGuildSelected'],
        '_bdguildseparator': ['BDrepo', 'bdGuildSeparator'],
        '_bdguildunread': ['BDrepo', 'bdGuildUnread'],
        '_bdguildvideo': ['BDrepo', 'bdGuildVideo'],
        '_bdpillselected': ['BDrepo', 'bdPillSelected'],
        '_bdpillunread': ['BDrepo', 'bdPillUnread'],
        '_bdv2button': ['BDv2repo', 'bdButton'],
        '_bdv2card': ['BDv2repo', 'bdCard'],
        '_bdv2hastooltip': ['BDv2repo', 'bdHasTooltip'],
        '_bdv2materialdesignicon': ['BDv2repo', 'bdMaterialDesignIcon'],
        '_bdv2tooltipopen': ['BDv2repo', 'vTooltipOpen'],
        '_repoauthor': ['BDrepo', 'bdaAuthor'],
        '_repocheckbox': ['BDrepo', 'switchCheckbox'],
        '_repocheckboxchecked': ['BDrepo', 'switchChecked'],
        '_repocheckboxinner': ['BDrepo', 'switch'],
        '_repocheckboxitem': ['BDrepo', 'switchItem'],
        '_repocheckboxwrap': ['BDrepo', 'switchWrapper'],
        '_repocontrols': ['BDrepo', 'bdaControls'],
        '_repodescription': ['BDrepo', 'bdaDescription'],
        '_repodescriptionwrap': ['BDrepo', 'bdaDescriptionWrap'],
        '_repofolderbutton': ['BDrepo', 'bdPfbtn'],
        '_repofooter': ['BDrepo', 'bdaFooter'],
        '_repoheader': ['BDrepo', 'bdaHeader'],
        '_repoheadertitle': ['BDrepo', 'bdaHeaderTitle'],
        '_repolist': ['BDrepo', 'bdaSlist'],
        '_repolink': ['BDrepo', 'bdaLink'],
        '_repolinks': ['BDrepo', 'bdaLinks'],
        '_reponame': ['BDrepo', 'bdaName'],
        '_reposettingsbutton': ['BDrepo', 'bdaSettingsButton'],
        '_reposettingsopen': ['BDrepo', 'settingsOpen'],
        '_reposettingsclosed': ['BDrepo', 'settingsClosed'],
        '_repoversion': ['BDrepo', 'bdaVersion'],
        'accountinfo': ['AccountDetails', 'container'],
        'accountinfodetails': ['AccountDetails', 'usernameContainer'],
        'accountinfousername': ['AccountDetails', 'username'],
        'activityfeed': ['ActivityFeed', 'activityFeed'],
        'alignbaseline': ['Flex', 'alignBaseline'],
        'aligncenter': ['Flex', 'alignCenter'],
        'alignend': ['Flex', 'alignEnd'],
        'alignstart': ['Flex', 'alignStart'],
        'alignstretch': ['Flex', 'alignStretch'],
        'anchor': ['Anchor', 'anchor'],
        'anchorunderlineonhover': ['Anchor', 'anchorUnderlineOnHover'],
        'app': ['AppOuter', 'app'],
        'appcontainer': ['AppBase', 'container'],
        'appmount': ['AppMount', 'appMount'],
        'applicationstore': ['NotFound', 'applicationStore'],
        'appold': ['AppInner', 'app'],
        'auditlog': ['AuditLog', 'auditLog'],
        'auditloguserhook': ['AuditLog', 'userHook'],
        'authbox': ['AuthBox', 'authBox'],
        'autocomplete': ['Autocomplete', 'autocomplete'],
        'autocomplete2': ['ChannelTextArea', 'autocomplete'],
        'autocompleteavatarstatus': ['Autocomplete', 'avatarStatus'],
        'autocompletecontent': ['Autocomplete', 'content'],
        'autocompletecontenttitle': ['Autocomplete', 'contentTitle'],
        'autocompletedescription': ['Autocomplete', 'description'],
        'autocompletedescriptiondiscriminator': ['Autocomplete', 'descriptionDiscriminator'],
        'autocompletedescriptionusername': ['Autocomplete', 'descriptionUsername'],
        'autocompleteicon': ['Autocomplete', 'icon'],
        'autocompleteiconforeground': ['Autocomplete', 'iconForeground'],
        'autocompleteinner': ['Autocomplete', 'autocompleteInner'],
        'autocompleterow': ['Autocomplete', 'autocompleteRow'],
        'autocompleterowhorizontal': ['Autocomplete', 'autocompleteRowHorizontal'],
        'autocompleterowvertical': ['Autocomplete', 'autocompleteRowVertical'],
        'autocompleteselectable': ['Autocomplete', 'selectable'],
        'autocompleteselected': ['Autocomplete', 'selectorSelected'],
        'autocompleteselector': ['Autocomplete', 'selector'],
        'avatar': [BDFDB['DiscordClassModules']['Avatar']['avatar'] ? 'Avatar' : 'Message', 'avatar'],
        'avatarcursordefault': ['Avatar', 'cursorDefault'],
        'avataricon': ['AvatarIcon', 'icon'],
        'avatariconactivelarge': ['AvatarIcon', 'iconActiveLarge'],
        'avatariconactivemedium': ['AvatarIcon', 'iconActiveMedium'],
        'avatariconactivemini': ['AvatarIcon', 'iconActiveMini'],
        'avatariconactivesmall': ['AvatarIcon', 'iconActiveSmall'],
        'avatariconactivexlarge': ['AvatarIcon', 'iconActiveXLarge'],
        'avatariconinactive': ['AvatarIcon', 'iconInactive'],
        'avatariconsizelarge': ['AvatarIcon', 'iconSizeLarge'],
        'avatariconsizemedium': ['AvatarIcon', 'iconSizeMedium'],
        'avatariconsizemini': ['AvatarIcon', 'iconSizeMini'],
        'avatariconsizesmall': ['AvatarIcon', 'iconSizeSmall'],
        'avatariconsizexlarge': ['AvatarIcon', 'iconSizeXLarge'],
        'avatarmask': ['Avatar', 'mask'],
        'avatarnoicon': ['AvatarIcon', 'noIcon'],
        'avatarpointer': ['Avatar', 'pointer'],
        'avatarpointerevents': ['Avatar', 'pointerEvents'],
        'avatarverifiedicon': ['AvatarIcon', 'verifiedIcon'],
        'avatarwrapper': ['Avatar', 'wrapper'],
        'backdrop': ['Backdrop', 'backdrop'],
        'badgewrapper': ['NotFound', 'badgeWrapper'],
        'bottag': ['BotTag', 'botTag'],
        'bottaginvert': ['BotTag', 'botTagInvert'],
        'bottagmessage': ['Message', 'botTag'],
        'bottagmessagecompact': ['Message', 'botTagCompact'],
        'bottagmessagecozy': ['Message', 'botTagCozy'],
        'bottagnametag': ['NameTag', 'bot'],
        'bottagregular': ['BotTag', 'botTagRegular'],
        'button': ['Button', 'button'],
        'buttoncolorblack': ['Button', 'colorBlack'],
        'buttoncolorbrand': ['Button', 'colorBrand'],
        'buttoncolorgreen': ['Button', 'colorGreen'],
        'buttoncolorgrey': ['Button', 'colorGrey'],
        'buttoncolorlink': ['Button', 'colorLink'],
        'buttoncolorprimary': ['Button', 'colorPrimary'],
        'buttoncolorred': ['Button', 'colorRed'],
        'buttoncolortransparent': ['Button', 'colorTransparent'],
        'buttoncolorwhite': ['Button', 'colorWhite'],
        'buttoncoloryellow': ['Button', 'colorYellow'],
        'buttoncontents': ['Button', 'contents'],
        'buttondisabledoverlay': ['Button', 'disabledButtonOverlay'],
        'buttondisabledwrapper': ['Button', 'disabledButtonWrapper'],
        'buttonfullwidth': ['Button', 'fullWidth'],
        'buttongrow': ['Button', 'grow'],
        'buttonhashover': ['Button', 'hasHover'],
        'buttonhoverblack': ['Button', 'hoverBlack'],
        'buttonhoverbrand': ['Button', 'hoverBrand'],
        'buttonhovergreen': ['Button', 'hoverGreen'],
        'buttonhovergrey': ['Button', 'hoverGrey'],
        'buttonhoverlink': ['Button', 'hoverLink'],
        'buttonhoverprimary': ['Button', 'hoverPrimary'],
        'buttonhoverred': ['Button', 'hoverRed'],
        'buttonhovertransparent': ['Button', 'hoverTransparent'],
        'buttonhoverwhite': ['Button', 'hoverWhite'],
        'buttonhoveryellow': ['Button', 'hoverYellow'],
        'buttonlookblank': ['Button', 'lookBlank'],
        'buttonlookfilled': ['Button', 'lookFilled'],
        'buttonlookghost': ['Button', 'lookGhost'],
        'buttonlookinverted': ['Button', 'lookInverted'],
        'buttonlooklink': ['Button', 'lookLink'],
        'buttonlookoutlined': ['Button', 'lookOutlined'],
        'buttonsizeicon': ['Button', 'sizeIcon'],
        'buttonsizelarge': ['Button', 'sizeLarge'],
        'buttonsizemax': ['Button', 'sizeMax'],
        'buttonsizemedium': ['Button', 'sizeMedium'],
        'buttonsizemin': ['Button', 'sizeMin'],
        'buttonsizesmall': ['Button', 'sizeSmall'],
        'buttonsizexlarge': ['Button', 'sizeXlarge'],
        'buttonspinner': ['Button', 'spinner'],
        'buttonspinneritem': ['Button', 'spinnerItem'],
        'buttonsubmitting': ['Button', 'submitting'],
        'callavatar': ['Call', 'callAvatar'],
        'callavatarwrapper': ['Call', 'callAvatarWrapper'],
        'callcurrentcontainer': ['CallCurrent', 'wrapper'],
        'callcurrentdetails': ['CallDetails', 'container'],
        'callcurrentvideo': ['Video', 'video'],
        'callincoming': ['CallIncoming', 'incomingCall'],
        'callincomingcontainer': ['CallIncoming', 'container'],
        'callincominginner': ['CallIncomingInner', 'incomingCallInner'],
        'callmembers': ['CallIncomingInner', 'members'],
        'callselected': ['Call', 'selected'],
        'callvideo': ['Call', 'video'],
        'card': ['Card', 'card'],
        'cardbrand': ['Card', 'cardBrand'],
        'cardbrandoutline': ['Card', 'cardBrandOutline'],
        'carddanger': ['Card', 'cardDanger'],
        'carddangeroutline': ['Card', 'cardDangerOutline'],
        'cardprimary': ['Card', 'cardPrimary'],
        'cardprimaryeditable': ['Card', 'cardPrimaryEditable'],
        'cardprimaryoutline': ['Card', 'cardPrimaryOutline'],
        'cardprimaryoutlineeditable': ['Card', 'cardPrimaryOutlineEditable'],
        'cardstore': ['CardStore', 'card'],
        'cardstoreinteractive': ['CardStore', 'interactive'],
        'cardsuccess': ['Card', 'cardSuccess'],
        'cardsuccessoutline': ['Card', 'cardSuccessOutline'],
        'cardwarning': ['Card', 'cardWarning'],
        'cardwarningoutline': ['Card', 'cardWarningOutline'],
        'categorychildren': ['Category', 'children'],
        'categoryclickable': ['Category', 'clickable'],
        'categorycollapsed': ['Category', 'collapsed'],
        'categorycontainerdefault': ['CategoryContainer', 'containerDefault'],
        'categorydisabled': ['CategoryContainer', 'disabled'],
        'categoryicon': ['Category', 'icon'],
        'categoryiconvisibility': ['CategoryContainer', 'iconVisibility'],
        'categorymuted': ['Category', 'muted'],
        'categoryname': ['Category', 'name'],
        'categoryselected': ['CategoryContainer', 'selected'],
        'categorywrapper': ['Category', 'wrapper'],
        'changelogadded': ['ChangeLog', 'added'],
        'changelogfixed': ['ChangeLog', 'fixed'],
        'changelogimproved': ['ChangeLog', 'improved'],
        'changelogprogress': ['ChangeLog', 'added'],
        'changelogtitle': ['ChangeLog', 'title'],
        'channelactionicon': ['ChannelContainer', 'actionIcon'],
        'channelchildren': ['Channel', 'children'],
        'channelcontainerdefault': ['ChannelContainer', 'containerDefault'],
        'channelcontent': ['Channel', 'content'],
        'channeldisabled': ['ChannelContainer', 'disabled'],
        'channelheaderchannelname': ['ChannelWindow', 'channelName'],
        'channelheaderchildren': ['HeaderBar', 'children'],
        'channelheaderdivider': ['HeaderBar', 'divider'],
        'channelheaderheaderbar': ['HeaderBar', 'container'],
        'channelheaderheaderbartitle': ['HeaderBar', 'title'],
        'channelheadericon': ['HeaderBar', 'icon'],
        'channelheadericonbadge': ['HeaderBar', 'iconBadge'],
        'channelheadericonclickable': ['HeaderBar', 'clickable'],
        'channelheadericonselected': ['HeaderBar', 'selected'],
        'channelheadericonwrapper': ['HeaderBar', 'iconWrapper'],
        'channelheadertitle': ['ChannelWindow', 'title'],
        'channelheadertitlewrapper': ['ChannelWindow', 'titleWrapper'],
        'channelheadersearch': ['HeaderBarExtras', 'search'],
        'channelheadertoolbar': ['HeaderBar', 'toolbar'],
        'channelheadertoolbar2': ['HeaderBarExtras', 'toolbar'],
        'channelheadertopic': ['HeaderBarTopic', 'topic'],
        'channelicon': ['Channel', 'icon'],
        'channeliconvisibility': ['ChannelContainer', 'iconVisibility'],
        'channelmodeconnected': ['Channel', 'modeConnected'],
        'channelmodelocked': ['Channel', 'modeLocked'],
        'channelmodemuted': ['Channel', 'modeMuted'],
        'channelmodeselected': ['Channel', 'modeSelected'],
        'channelmodeunread': ['Channel', 'modeUnread'],
        'channelname': ['Channel', 'name'],
        'channels': ['AppBase', 'channels'],
        'channelselected': ['ChannelContainer', 'selected'],
        'channelsscroller': ['GuildChannels', 'scroller'],
        'channelunread': ['Channel', 'unread'],
        'channelwrapper': ['Channel', 'wrapper'],
        'chat': ['ChannelWindow', 'chat'],
        'chatbase': ['AppBase', 'base'],
        'chatcontent': ['ChannelWindow', 'content'],
        'chatspacer': ['AppBase', 'spacer'],
        'checkbox': ['Checkbox', 'checkbox'],
        'checkboxchecked': ['Checkbox', 'checked'],
        'checkboxcontainer': ['ModalItems', 'checkboxContainer'],
        'checkboxinput': ['Checkbox', 'input'],
        'checkboxinputdefault': ['Checkbox', 'inputDefault'],
        'checkboxinputdisabled': ['Checkbox', 'inputDisabled'],
        'checkboxround': ['Checkbox', 'round'],
        'checkboxwrapper': ['Checkbox', 'checkboxWrapper'],
        'checkboxwrapperdisabled': ['Checkbox', 'checkboxWrapperDisabled'],
        'clickable': ['Message', 'clickOverride'],
        'clickable': ['Message', 'clickOverride'],
        'contentregion': ['SettingsWindow', 'contentRegion'],
        'contextmenu': ['ContextMenu', 'contextMenu'],
        'contextmenucheckbox': ['ContextMenuCheckbox', 'checkbox'],
        'contextmenucheckbox2': ['ContextMenu', 'checkbox'],
        'contextmenucheckboxdisabled': ['ContextMenuCheckbox', 'disabled'],
        'contextmenucheckboxinner': ['ContextMenuCheckbox', 'checkboxInner'],
        'contextmenucheckboxelement': ['ContextMenuCheckbox', 'checkboxElement'],
        'contextmenuhint': ['ContextMenu', 'hint'],
        'contextmenuinvertchildx': ['ContextMenu', 'invertChildX'],
        'contextmenuitem': ['ContextMenu', 'item'],
        'contextmenuitembrand': ['ContextMenu', 'brand'],
        'contextmenuitemdanger': ['ContextMenu', 'danger'],
        'contextmenuitemdisabled': ['ContextMenu', 'disabled'],
        'contextmenuitemgroup': ['ContextMenu', 'itemGroup'],
        'contextmenuitemtoggle': ['ContextMenu', 'itemToggle'],
        'contextmenuitemslider': ['ContextMenu', 'itemSlider'],
        'contextmenuitemsubmenu': ['ContextMenu', 'itemSubMenu'],
        'contextmenuitemsubmenuhasscroller': ['ContextMenu', 'itemSubMenuHasScroller'],
        'contextmenulabel': ['ContextMenu', 'label'],
        'contextmenuscroller': ['ContextMenu', 'scroller'],
        'contextmenuslider': ['ContextMenu', 'slider'],
        'cooldownwrapper': ['Typing', 'cooldownWrapper'],
        'cursordefault': ['Cursor', 'cursorDefault'],
        'cursorpointer': ['Cursor', 'cursorPointer'],
        'defaultcolor': ['Text', 'defaultColor'],
        'description': ['FormText', 'description'],
        'directioncolumn': ['Flex', 'directionColumn'],
        'directiondown': ['IconDirection', 'directionDown'],
        'directionleft': ['IconDirection', 'directionLeft'],
        'directionright': ['IconDirection', 'directionRight'],
        'directionrow': ['Flex', 'directionRow'],
        'directionrowreverse': ['Flex', 'directionRowReverse'],
        'directionup': ['IconDirection', 'directionUp'],
        'directiontransition': ['IconDirection', 'transition'],
        'disabled': ['SettingsItems', 'disabled'],
        'dmchannel': ['PrivateChannel', 'channel'],
        'dmchannelactivity': ['PrivateChannel', 'activity'],
        'dmchannelactivityicon': ['PrivateChannel', 'activityIcon'],
        'dmchannelactivityiconforeground': ['PrivateChannel', 'activityIconForeground'],
        'dmchannelactivitytext': ['PrivateChannel', 'activityText'],
        'dmchannelclose': ['PrivateChannel', 'close'],
        'dmchannelname': ['PrivateChannel', 'name'],
        'dmchannelnamewithactivity': ['PrivateChannel', 'nameWithActivity'],
        'dmchannels': ['PrivateChannelList', 'privateChannels'],
        'dmchannelselected': ['PrivateChannel', 'selected'],
        'dmpill': ['GuildDm', 'pill'],
        'downloadlink': ['DownloadLink', 'downloadLink'],
        'ellipsis': ['PopoutActivity', 'ellipsis'],
        'embed': ['Embed', 'embed'],
        'embedauthor': ['Embed', 'embedAuthor'],
        'embedauthoricon': ['Embed', 'embedAuthorIcon'],
        'embedauthorname': ['Embed', 'embedAuthorName'],
        'embedauthornamelink': ['Embed', 'embedAuthorNameLink'],
        'embedcentercontent': ['Embed', 'centerContent'],
        'embedcontent': ['Embed', 'embedContent'],
        'embedcontentinner': ['Embed', 'embedContentInner'],
        'embeddescription': ['Embed', 'embedDescription'],
        'embedfield': ['Embed', 'embedField'],
        'embedfieldinline': ['Embed', 'embedFieldInline'],
        'embedfieldname': ['Embed', 'embedFieldName'],
        'embedfields': ['Embed', 'embedFields'],
        'embedfieldvalue': ['Embed', 'embedFieldValue'],
        'embedfooter': ['Embed', 'embedFooter'],
        'embedfootericon': ['Embed', 'embedFooterIcon'],
        'embedfooterseparator': ['Embed', 'embedFooterSeparator'],
        'embedfootertext': ['Embed', 'embedFooterText'],
        'embedgiftag': ['Embed', 'embedGIFTag'],
        'embedgifv': ['Embed', 'embedGIFV'],
        'embedhiddenspoiler': ['Embed', 'hiddenSpoiler'],
        'embedhighbackgroundopacity': ['Embed', 'highBackgroundOpacity'],
        'embediframe': ['Embed', 'embedIframe'],
        'embedimage': ['Embed', 'embedImage'],
        'embedinner': ['Embed', 'embedInner'],
        'embedlink': ['Embed', 'embedLink'],
        'embedlowbackgroundopacity': ['Embed', 'lowBackgroundOpacity'],
        'embedmargin': ['Embed', 'embedMargin'],
        'embedmarginlarge': ['Embed', 'embedMarginLarge'],
        'embedmembeediumbackgroundopacity': ['Embed', 'mediumBackgroundOpacity'],
        'embedpill': ['Embed', 'embedPill'],
        'embedprovider': ['Embed', 'embedProvider'],
        'embedproviderlink': ['Embed', 'embedProviderLink'],
        'embedspoilerattachment': ['Embed', 'spoilerAttachment'],
        'embedspoilerembed': ['Embed', 'spoilerEmbed'],
        'embedspotify': ['Embed', 'embedSpotify'],
        'embedthumbnail': ['Embed', 'embedThumbnail'],
        'embedtitle': ['Embed', 'embedTitle'],
        'embedtitlelink': ['Embed', 'embedTitleLink'],
        'embedvideo': ['Embed', 'embedVideo'],
        'embedvideoaction': ['Embed', 'embedVideoAction'],
        'embedvideoactions': ['Embed', 'embedVideoActions'],
        'embedvideoimagecomponent': ['Embed', 'embedVideoImageComponent'],
        'embedvideoimagecomponentinner': ['Embed', 'embedVideoImageComponentInner'],
        'embedwrapper': ['MessageAccessory', 'embedWrapper'],
        'emojipicker': ['EmojiPicker', 'emojiPicker'],
        'emojipickeractivity': ['EmojiPicker', 'activity'],
        'emojipickerbutton': ['Reactions', 'reactionBtn'],
        'emojipickercategories': ['EmojiPicker', 'categories'],
        'emojipickercategory': ['EmojiPicker', 'category'],
        'emojipickercustom': ['EmojiPicker', 'custom'],
        'emojipickerdimmer': ['EmojiPicker', 'dimmer'],
        'emojipickerdisabled': ['EmojiPicker', 'disabled'],
        'emojipickerdiversityselector': ['EmojiPicker', 'diversitySelector'],
        'emojipickeremojiitem': ['EmojiPicker', 'emojiItem'],
        'emojipickerflags': ['EmojiPicker', 'flags'],
        'emojipickerfood': ['EmojiPicker', 'food'],
        'emojipickerheader': ['EmojiPicker', 'header'],
        'emojipickeritem': ['EmojiPicker', 'item'],
        'emojipickernature': ['EmojiPicker', 'nature'],
        'emojipickerobjects': ['EmojiPicker', 'objects'],
        'emojipickerpeople': ['EmojiPicker', 'people'],
        'emojipickerpopout': ['EmojiPicker', 'popout'],
        'emojipickerpremiumpromo': ['EmojiPicker', 'premiumPromo'],
        'emojipickerpremiumpromoclose': ['EmojiPicker', 'premiumPromoClose'],
        'emojipickerpremiumpromodescription': ['EmojiPicker', 'premiumPromoDescription'],
        'emojipickerpremiumpromoimage': ['EmojiPicker', 'premiumPromoImage'],
        'emojipickerpremiumpromotitle': ['EmojiPicker', 'premiumPromoTitle'],
        'emojipickerrecent': ['EmojiPicker', 'recent'],
        'emojipickerrow': ['EmojiPicker', 'row'],
        'emojipickersearchbar': ['EmojiPicker', 'searchBar'],
        'emojipickerscroller': ['EmojiPicker', 'scroller'],
        'emojipickerscrollerwrap': ['EmojiPicker', 'scrollerWrap'],
        'emojipickerselected': ['EmojiPicker', 'selected'],
        'emojipickerspriteitem': ['EmojiPicker', 'spriteItem'],
        'emojipickerstickyheader': ['EmojiPicker', 'stickyHeader'],
        'emojipickersymbols': ['EmojiPicker', 'symbols'],
        'emojipickertravel': ['EmojiPicker', 'travel'],
        'emojipickervisible': ['EmojiPicker', 'visible'],
        'fileattachment': ['File', 'attachment'],
        'fileattachmentinner': ['File', 'attachmentInner'],
        'filecancelbutton': ['File', 'cancelButton'],
        'filedownloadbutton': ['File', 'downloadButton'],
        'filename': ['File', 'filename'],
        'filenamelink': ['File', 'fileNameLink'],
        'filenamelinkwrapper': ['File', 'filenameLinkWrapper'],
        'filenamewrapper': ['File', 'filenameWrapper'],
        'firefoxfixscrollflex': ['Scroller', 'firefoxFixScrollFlex'],
        'flex': ['Flex', 'flex'],
        'flex2': ['FlexChild', 'flex'],
        'flexcenter': ['Flex', 'flexCenter'],
        'flexchild': ['FlexChild', 'flexChild'],
        'flexmarginreset': ['FlexChild', 'flexMarginReset'],
        'formtext': ['FormText', 'formText'],
        'friends': ['Friends', 'container'],
        'friendscolumn': ['Friends', 'friendsColumn'],
        'friendscolumnnamewrap': ['Friends', 'friendsColumnName'],
        'friendsonline': ['GuildsItems', 'friendsOnline'],
        'friendsrow': ['Friends', 'friendsRow'],
        'friendstable': ['Friends', 'friendsTable'],
        'friendstableheader': ['Friends', 'friendsTableHeader'],
        'friendsusername': ['Friends', 'username'],
        'game': ['Game', 'game'],
        'gamelibrary': ['NotFound', 'gameLibrary'],
        'gamelibrarytable': ['Table', 'table'],
        'gamelibrarytableheader': ['Table', 'header'],
        'gamelibrarytablestickyheader': ['Table', 'stickyHeader'],
        'gamename': ['Game', 'gameName'],
        'gamenameinput': ['Game', 'gameNameInput'],
        'giffavoritebutton': ['MessageAccessory', 'gifFavoriteButton'],
        'giffavoritecolor': ['GifFavoriteButton', 'gifFavoriteButton'],
        'giffavoriteicon': ['GifFavoriteButton', 'icon'],
        'giffavoriteshowpulse': ['GifFavoriteButton', 'showPulse'],
        'giffavoritesize': ['GifFavoriteButton', 'size'],
        'giffavoriteselected': ['GifFavoriteButton', 'selected'],
        'giftinventory': ['GiftInventory', 'root'],
        'guildbadgebase': ['Badge', 'base'],
        'guildbadgeicon': ['Badge', 'icon'],
        'guildbadgeiconbadge': ['Badge', 'iconBadge'],
        'guildbadgeiconbadge2': ['GuildsItems', 'iconBadge'],
        'guildbadgenumberbadge': ['Badge', 'numberBadge'],
        'guildbadgetextbadge': ['Badge', 'textBadge'],
        'guildbadgewrapper': ['Guild', 'badgeWrapper'],
        'guildbuttoncontainer': ['GuildsItems', 'circleButtonMask'],
        'guildbuttoninner': ['GuildsItems', 'circleIconButton'],
        'guildbuttonicon': ['GuildsItems', 'circleIcon'],
        'guildbuttonpill': ['GuildsItems', 'pill'],
        'guildbuttonselected': ['GuildsItems', 'selected'],
        'guildchannels': ['NotFound', 'guildChannels'],
        'guildcontainer': ['GuildServer', 'blobContainer'],
        'guilddragfix': ['Guild', 'dragfix'],
        'guildedge': ['GuildEdges', 'edge'],
        'guildedgewrapper': ['GuildEdges', 'wrapper'],
        'guildheader': ['GuildHeader', 'container'],
        'guildheaderbanner': ['GuildHeader', 'banner'],
        'guildheaderbannerimage': ['GuildHeader', 'bannerImage'],
        'guildheaderhasdropdown': ['GuildHeader', 'hasDropdown'],
        'guildheaderheader': ['GuildHeader', 'header'],
        'guildheadername': ['GuildHeader', 'name'],
        'guildicon': ['GuildIcon', 'icon'],
        'guildiconacronym': ['GuildIcon', 'acronym'],
        'guildiconselected': ['GuildIcon', 'selected'],
        'guildiconwrapper': ['GuildIcon', 'wrapper'],
        'guildinner': ['Guild', 'wrapper'],
        'guildinnerwrapper': ['GuildsItems', 'listItemWrapper'],
        'guildlowerbadge': ['Guild', 'lowerBadge'],
        'guildouter': ['GuildsItems', 'listItem'],
        'guildpill': ['GuildServer', 'pill'],
        'guildpillitem': ['PillWrapper', 'item'],
        'guildpillwrapper': ['PillWrapper', 'wrapper'],
        'guildplaceholder': ['GuildsItems', 'dragInner'],
        'guildplaceholdermask': ['GuildsItems', 'placeholderMask'],
        'guilds': ['GuildsWrapper', 'scroller'],
        'guildseparator': ['GuildsItems', 'guildSeparator'],
        'guildserror': ['GuildsItems', 'guildsError'],
        'guildsettingsbannedcard': ['GuildSettingsBanned', 'bannedUser'],
        'guildsettingsbanneddiscrim': ['GuildSettingsBanned', 'discrim'],
        'guildsettingsbannedusername': ['GuildSettingsBanned', 'username'],
        'guildsettingsinvitecard': ['GuildSettingsInvite', 'inviteSettingsInviteRow'],
        'guildsettingsinvitechannelname': ['GuildSettingsInvite', 'channelName'],
        'guildsettingsinviteusername': ['GuildSettingsInvite', 'username'],
        'guildsettingsmembercard': ['GuildSettingsMember', 'member'],
        'guildsettingsmembername': ['GuildSettingsMember', 'name'],
        'guildsettingsmembernametag': ['GuildSettingsMember', 'nameTag'],
        'guildsscrollerwrap': ['GuildsWrapper', 'scrollerWrap'],
        'guildsvg': ['Guild', 'svg'],
        'guildswrapper': ['GuildsWrapper', 'wrapper'],
        'guildswrapperunreadmentionsindicatorbottom': ['GuildsWrapper', 'unreadMentionsIndicatorBottom'],
        'guildswrapperunreadmentionsindicatortop': ['GuildsWrapper', 'unreadMentionsIndicatorTop'],
        'guildupperbadge': ['Guild', 'upperBadge'],
        'h1': ['Text', 'h1'],
        'h1defaultmargin': ['Text', 'defaultMarginh1'],
        'h2': ['Text', 'h2'],
        'h2defaultmargin': ['Text', 'defaultMarginh2'],
        'h3': ['Text', 'h3'],
        'h3defaultmargin': ['Text', 'defaultMarginh3'],
        'h4': ['Text', 'h4'],
        'h4defaultmargin': ['Text', 'defaultMarginh4'],
        'h5': ['Text', 'h5'],
        'h5defaultmargin': ['Text', 'defaultMarginh5'],
        'headertitle': ['Text', 'title'],
        'height16': ['Text', 'height16'],
        'height20': ['Text', 'height20'],
        'height24': ['Text', 'height24'],
        'height28': ['TextStyle', 'height28'],
        'height36': ['Notice', 'height36'],
        'highlight': ['NotFound', 'highlight'],
        'homebutton': ['HomeIcon', 'button'],
        'homebuttonicon': ['HomeIcon', 'homeIcon'],
        'homebuttonpill': ['HomeIcon', 'pill'],
        'homebuttonselected': ['HomeIcon', 'selected'],
        'horizontal': ['FlexChild', 'horizontal'],
        'horizontal2': ['NotFound', '_'],
        'horizontalreverse': ['FlexChild', 'horizontalReverse'],
        'horizontalreverse2': ['NotFound', '_'],
        'hotkeybase': ['NotFound', '_'],
        'hotkeybutton': ['HotKeyRecorder', 'button'],
        'hotkeybutton2': ['NotFound', '_'],
        'hotkeycontainer': ['HotKeyRecorder', 'container'],
        'hotkeycontainer2': ['NotFound', '_'],
        'hotkeydisabled': ['HotKeyRecorder', 'disabled'],
        'hotkeydisabled2': ['NotFound', '_'],
        'hotkeyediticon': ['HotKeyRecorder', 'editIcon'],
        'hotkeyhasvalue': ['HotKeyRecorder', 'hasValue'],
        'hotkeyinput': ['HotKeyRecorder', 'input'],
        'hotkeyinput2': ['HotKeyRecorder', 'input'],
        'hotkeylayout': ['HotKeyRecorder', 'layout'],
        'hotkeylayout2': ['HotKeyRecorder', 'layout'],
        'hotkeyrecording': ['HotKeyRecorder', 'recording'],
        'hotkeyshadowpulse': ['HotKeyRecorder', 'shadowPulse'],
        'hotkeytext': ['HotKeyRecorder', 'text'],
        'hovercard': ['HoverCard', 'card'],
        'hovercardinner': ['BDFDB', 'cardInner'],
        'hovercardbutton': ['HoverCardButton', 'button'],
        'icon': ['EmbedActions', 'icon'],
        'iconactionswrapper': ['EmbedActions', 'wrapper'],
        'iconexternal': ['EmbedActions', 'iconExternal'],
        'iconexternalmargins': ['EmbedActions', 'iconExternalMargins'],
        'iconplay': ['EmbedActions', 'iconPlay'],
        'iconwrapper': ['EmbedActions', 'iconWrapper'],
        'iconwrapperactive': ['EmbedActions', 'iconWrapperActive'],
        'imageaccessory': ['ImageWrapper', 'imageAccessory'],
        'imageclickable': ['ImageWrapper', 'clickable'],
        'imageerror': ['ImageWrapper', 'imageError'],
        'imageplaceholder': ['ImageWrapper', 'imagePlaceholder'],
        'imageplaceholderoverlay': ['ImageWrapper', 'imagePlaceholderOverlay'],
        'imagewrapper': ['ImageWrapper', 'imageWrapper'],
        'imagewrapperbackground': ['ImageWrapper', 'imageWrapperBackground'],
        'imagewrapperinner': ['ImageWrapper', 'imageWrapperInner'],
        'imagezoom': ['ImageWrapper', 'imageZoom'],
        'input': ['Input', 'input'],
        'inputdefault': ['Input', 'inputDefault'],
        'inputdisabled': ['Input', 'disabled'],
        'inputeditable': ['Input', 'editable'],
        'inputerror': ['Input', 'error'],
        'inputfocused': ['Input', 'focused'],
        'inputmini': ['Input', 'inputMini'],
        'inputsuccess': ['Input', 'success'],
        'inputwrapper': ['Input', 'inputWrapper'],
        'invitemodal': ['InviteModal', 'modal'],
        'invitemodalinviterow': ['InviteModal', 'inviteRow'],
        'invitemodalinviterowname': ['InviteModal', 'inviteRowName'],
        'invitemodalwrapper': ['InviteModal', 'wrapper'],
        'justifycenter': ['Flex', 'justifyCenter'],
        'justifyend': ['Flex', 'justifyEnd'],
        'justifystart': ['Flex', 'justifyStart'],
        'large': ['TextStyle', 'large'],
        'layer': ['Layers', 'layer'],
        'layers': ['Layers', 'layers'],
        'lfg': ['NotFound', 'lfg'],
        'loginscreen': ['NotFound', 'loginScreen'],
        'marginbottom4': ['Margins', 'marginBottom4'],
        'marginbottom8': ['Margins', 'marginBottom8'],
        'marginbottom20': ['Margins', 'marginBottom20'],
        'marginbottom40': ['Margins', 'marginBottom40'],
        'marginbottom60': ['Margins', 'marginBottom60'],
        'margincenterhorz': ['Margins', 'marginCenterHorz'],
        'marginleft4': ['Autocomplete', 'marginLeft4'],
        'marginleft8': ['Autocomplete', 'marginLeft8'],
        'marginreset': ['Margins', 'marginReset'],
        'margintop4': ['Margins', 'marginTop4'],
        'margintop8': ['Margins', 'marginTop8'],
        'margintop20': ['Margins', 'marginTop20'],
        'margintop40': ['Margins', 'marginTop40'],
        'margintop60': ['Margins', 'marginTop60'],
        'medium': ['TextStyle', 'medium'],
        'member': ['Member', 'member'],
        'membercontent': ['Member', 'memberContent'],
        'membericon': ['Member', 'icon'],
        'memberinner': ['Member', 'memberInner'],
        'membernametag': ['Member', 'nameTag'],
        'memberownericon': ['Member', 'ownerIcon'],
        'memberpremiumicon': ['Member', 'premiumIcon'],
        'members': ['MembersWrap', 'members'],
        'membersgroup': ['MembersWrap', 'membersGroup'],
        'memberswrap': ['MembersWrap', 'membersWrap'],
        'memberusername': ['Member', 'username'],
        'mention': ['NotFound', 'mention'],
        'mentionwrapper': ['Mention', 'wrapper'],
        'mentionwrapperhover': ['Mention', 'wrapperHover'],
        'mentionwrappernohover': ['Mention', 'wrapperNoHover'],
        'message': ['Message', 'message'],
        'messageaccessory': ['MessageAccessory', 'container'],
        'messageaccessorycompact': ['MessageAccessory', 'containerCompact'],
        'messageaccessorycozy': ['MessageAccessory', 'containerCozy'],
        'messageavatar': ['Message', 'avatar'],
        'messagebody': ['MessageBody', 'container'],
        'messagebodycompact': ['MessageBody', 'containerCompact'],
        'messagebodycozy': ['MessageBody', 'containerCozy'],
        'messagebuttoncontainer': ['Message', 'buttonContainer'],
        'messagebuttoncontainerouter': ['MessageBody', 'buttonContainer'],
        'messagecompact': ['Message', 'messageCompact'],
        'messagecontent': ['Message', 'content'],
        'messagecontentcompact': ['Message', 'contentCompact'],
        'messagecontentcozy': ['Message', 'contentCozy'],
        'messagecozy': ['Message', 'messageCozy'],
        'messagedivider': ['Message', 'divider'],
        'messagedividerenabled': ['Message', 'dividerEnabled'],
        'messageedited': ['MessageBody', 'edited'],
        'messagegroup': ['Message', 'container'],
        'messagegroupcozy': ['Message', 'containerCozy'],
        'messagegroupcompact': ['Message', 'containerCompact'],
        'messagegroupwrapper': ['MessagesPopout', 'messageGroupWrapper'],
        'messagegroupwrapperoffsetcorrection': ['MessagesPopout', 'messageGroupWrapperOffsetCorrection'],
        'messageheadercompact': ['Message', 'headerCompact'],
        'messageheadercozy': ['Message', 'headerCozy'],
        'messageheadercozymeta': ['Message', 'headerCozyMeta'],
        'messagelocalbotmessage': ['Message', 'localBotMessage'],
        'messagemarkup': ['MessageMarkup', 'markup'],
        'messagemarkupiscompact': ['MessageBody', 'isCompact'],
        'messages': ['MessagesWrap', 'messages'],
        'messagespopout': ['MessagesPopout', 'messagesPopout'],
        'messagespopoutaccessories': ['MessagesPopout', 'accessories'],
        'messagespopoutactionbuttons': ['MessagesPopout', 'actionButtons'],
        'messagespopoutbody': ['MessagesPopout', 'body'],
        'messagespopoutbottom': ['MessagesPopout', 'bottom'],
        'messagespopoutchannelname': ['MessagesPopout', 'channelName'],
        'messagespopoutchannelseparator': ['MessagesPopout', 'channelSeparator'],
        'messagespopoutclosebutton': ['MessagesPopout', 'closeButton'],
        'messagespopoutcomment': ['MessagesPopout', 'comment'],
        'messagespopoutcontainercompactbounded': ['Message', 'containerCompactBounded'],
        'messagespopoutcontainercozybounded': ['Message', 'containerCozyBounded'],
        'messagespopoutemptyplaceholder': ['MessagesPopout', 'emptyPlaceholder'],
        'messagespopoutfooter': ['MessagesPopout', 'footer'],
        'messagespopoutguildname': ['MessagesPopout', 'guildName'],
        'messagespopouthasmore': ['MessagesPopout', 'hasMore'],
        'messagespopouthasmorebutton': ['MessagesPopout', 'hasMoreButton'],
        'messagespopoutheader': ['MessagesPopout', 'header'],
        'messagespopouthidden': ['MessagesPopout', 'hidden'],
        'messagespopoutimage': ['MessagesPopout', 'image'],
        'messagespopoutjumpbutton': ['MessagesPopout', 'jumpButton'],
        'messagespopoutloading': ['MessagesPopout', 'loading'],
        'messagespopoutloadingmore': ['MessagesPopout', 'loadingMore'],
        'messagespopoutloadingplaceholder': ['MessagesPopout', 'loadingPlaceholder'],
        'messagespopoutmessagegroupcozy': ['MessagesPopout', 'messageGroupCozy'],
        'messagespopoutmessagegroupwrapper': ['MessagesPopout', 'messageGroupWrapper'],
        'messagespopoutmessagegroupwrapperoffsetcorrection': ['MessagesPopout', 'messageGroupWrapperOffsetCorrection'],
        'messagespopoutscrollingfooterwrap': ['MessagesPopout', 'scrollingFooterWrap'],
        'messagespopoutspinner': ['MessagesPopout', 'spinner'],
        'messagespopouttext': ['MessagesPopout', 'text'],
        'messagespopouttip': ['MessagesPopout', 'tip'],
        'messagespopouttitle': ['MessagesPopout', 'title'],
        'messagespopoutvisible': ['MessagesPopout', 'visible'],
        'messagespopoutwrap': ['MessagesPopout', 'messagesPopoutWrap'],
        'messageswrapper': ['MessagesWrap', 'messagesWrapper'],
        'messagesystem': ['MessageSystem', 'container'],
        'messagesystemcontent': ['MessageSystem', 'content'],
        'messagetimestampcompact': ['Message', 'timestampCompact'],
        'messagetimestampcompactismentioned': ['Message', 'timestampCompactIsMentioned'],
        'messagetimestampcozy': ['Message', 'timestampCozy'],
        'messageuploadcancel': ['MessageFile', 'cancelButton'],
        'messageusername': ['Message', 'username'],
        'modal': ['ModalWrap', 'modal'],
        'modalclose': ['Modal', 'close'],
        'modalcontent': ['Modal', 'content'],
        'modaldivider': ['ModalDivider', 'divider'],
        'modaldividerdefault': ['SettingsItems', 'dividerDefault'],
        'modaldividermini': ['SettingsItems', 'dividerMini'],
        'modalfooter': ['Modal', 'footer'],
        'modalguildname': ['ModalItems', 'guildName'],
        'modalheader': ['Modal', 'header'],
        'modalinner': ['ModalWrap', 'inner'],
        'modalmini': ['ModalMiniContent', 'modal'],
        'modalminicontent': ['ModalMiniContent', 'content'],
        'modalminisize': ['ModalMiniContent', 'size'],
        'modalseparator': ['Modal', 'separator'],
        'modalsizelarge': ['Modal', 'sizeLarge'],
        'modalsizemedium': ['Modal', 'sizeMedium'],
        'modalsizesmall': ['Modal', 'sizeSmall'],
        'modalsub': ['Modal', 'modal'],
        'modalsubinner': ['Modal', 'inner'],
        'modedefault': ['FormText', 'modeDefault'],
        'modedisabled': ['FormText', 'modeDisabled'],
        'modeselectable': ['FormText', 'modeSelectable'],
        'nametag': ['NameTag', 'nameTag'],
        'nochannel': ['ChannelWindow', 'noChannel'],
        'notice': ['Notice', 'notice'],
        'noticebrand': ['Notice', 'noticeBrand'],
        'noticebutton': ['Notice', 'button'],
        'noticedanger': ['Notice', 'noticeDanger'],
        'noticedefault': ['Notice', 'noticeDefault'],
        'noticedismiss': ['Notice', 'dismiss'],
        'noticefacebook': ['Notice', 'noticeFacebook'],
        'noticeicon': ['Notice', 'icon'],
        'noticeiconandroid': ['Notice', 'iconAndroid'],
        'noticeiconapple': ['Notice', 'iconApple'],
        'noticeiconwindows': ['Notice', 'iconWindows'],
        'noticeinfo': ['Notice', 'noticeInfo'],
        'noticeplatformicon': ['Notice', 'platformIcon'],
        'noticepremium': ['Notice', 'noticePremium'],
        'noticepremiumaction': ['Notice', 'premiumAction'],
        'noticepremiumgrandfathered': ['Notice', 'noticePremiumGrandfathered'],
        'noticepremiumlogo': ['Notice', 'premiumLogo'],
        'noticepremiumtext': ['Notice', 'premiumText'],
        'noticespotify': ['Notice', 'noticeSpotify'],
        'noticestreamer': ['Notice', 'noticeStreamerMode'],
        'noticesuccess': ['Notice', 'noticeSuccess'],
        'noticesurvey': ['Notice', 'noticeSurvey'],
        'note': ['SettingsItems', 'note'],
        'nowrap': ['Flex', 'noWrap'],
        'optionpopout': ['OptionPopout', 'container'],
        'optionpopoutbutton': ['OptionPopout', 'button'],
        'optionpopoutitem': ['OptionPopout', 'item'],
        'overflowellipsis': ['BDFDB', 'overflowEllipsis'],
        'pictureinpicture': ['PictureInPicture', 'pictureInPicture'],
        'pictureinpicturewindow': ['PictureInPicture', 'pictureInPictureWindow'],
        'popout': ['Popout', 'popout'],
        'popoutarrowalignmenttop': ['Popout', 'arrowAlignmentTop'],
        'popoutbody': ['Popout', 'body'],
        'popoutbottom': ['Popout', 'popoutBottom'],
        'popoutbottomleft': ['Popout', 'popoutBottomLeft'],
        'popoutbottomright': ['Popout', 'popoutBottomRight'],
        'popoutfooter': ['Popout', 'footer'],
        'popoutheader': ['Popout', 'header'],
        'popoutinvert': ['Popout', 'popoutInvert'],
        'popoutleft': ['Popout', 'popoutLeft'],
        'popoutnoarrow': ['Popout', 'noArrow'],
        'popoutnoshadow': ['Popout', 'noShadow'],
        'popouts': ['Popout', 'popouts'],
        'popoutsubtitle': ['Popout', 'subtitle'],
        'popoutthemedpopout': ['Popout', 'themedPopout'],
        'popouttip': ['Popout', 'tip'],
        'popouttitle': ['Popout', 'title'],
        'popouttop': ['Popout', 'popoutTop'],
        'popouttopleft': ['Popout', 'popoutTopLeft'],
        'popouttopright': ['Popout', 'popoutTopRight'],
        'primary': ['TextStyle', 'primary'],
        'quickselect': ['QuickSelect', 'quickSelect'],
        'quickselectarrow': ['QuickSelect', 'quickSelectArrow'],
        'quickselectclick': ['QuickSelect', 'quickSelectClick'],
        'quickselectlabel': ['QuickSelect', 'quickSelectLabel'],
        'quickselectpopout': ['QuickSelect', 'quickSelectPopout'],
        'quickselectpopoutoption': ['QuickSelect', 'quickSelectPopoutOption'],
        'quickselectpopoutscroll': ['QuickSelect', 'quickSelectPopoutScroll'],
        'quickselectscroller': ['QuickSelect', 'quickSelectScroller'],
        'quickselectselected': ['QuickSelect', 'selected'],
        'quickselectvalue': ['QuickSelect', 'quickSelectValue'],
        'quickswitcher': ['QuickSwitchWrap', 'quickswitcher'],
        'quickswitchresult': ['QuickSwitch', 'result'],
        'quickswitchresultfocused': ['QuickSwitch', 'resultFocused'],
        'quickswitchresultguildicon': ['QuickSwitch', 'guildIcon'],
        'quickswitchresultmatch': ['QuickSwitch', 'match'],
        'quickswitchresultmisccontainer': ['QuickSwitchWrap', 'miscContainer'],
        'quickswitchresultname': ['QuickSwitch', 'name'],
        'quickswitchresultnote': ['QuickSwitch', 'note'],
        'quickswitchresultusername': ['QuickSwitch', 'username'],
        'recentmentionsfilterpopout': ['RecentMentions', 'recentMentionsFilterPopout'],
        'recentmentionsheader': ['RecentMentions', 'header'],
        'recentmentionsloadingmore': ['RecentMentions', 'loadingMore'],
        'recentmentionsmentionfilter': ['RecentMentions', 'mentionFilter'],
        'recentmentionsmentionfilterlabel': ['RecentMentions', 'label'],
        'recentmentionsmentionfiltervalue': ['RecentMentions', 'value'],
        'recentmentionspopout': ['RecentMentions', 'recentMentionsPopout'],
        'reset': ['CardStatus', 'reset'],
        'scroller': ['Scroller', 'scroller'],
        'scrollerold': ['Scroller', 'scroller'],
        'scrollerthemed': ['Scroller', 'scrollerThemed'],
        'scrollerwrap': ['Scroller', 'scrollerWrap'],
        'scrollerwrapold': ['Scroller', 'scrollerWrap'],
        'searchbar': ['SearchBar', 'container'],
        'searchbarclear': ['SearchBar', 'clear'],
        'searchbarclose': ['SearchBar', 'close'],
        'searchbardark': ['SearchBar', 'darkTheme'],
        'searchbaricon': ['SearchBar', 'icon'],
        'searchbariconlayout': ['SearchBar', 'iconLayout'],
        'searchbariconwrap': ['SearchBar', 'iconContainer'],
        'searchbarinner': ['SearchBar', 'inner'],
        'searchbarinput': ['SearchBar', 'input'],
        'searchbarlarge': ['SearchBar', 'large'],
        'searchbarlight': ['SearchBar', 'lightTheme'],
        'searchbarmedium': ['SearchBar', 'medium'],
        'searchbarsmall': ['SearchBar', 'small'],
        'searchbartag': ['SearchBar', 'tag'],
        'searchbarvisible': ['SearchBar', 'visible'],
        'searchpopout': ['SearchPopoutWrap', 'container'],
        'searchpopoutanswer': ['SearchPopout', 'answer'],
        'searchpopoutdatepicker': ['SearchPopout', 'datePicker'],
        'searchpopoutdatepickerhint': ['SearchPopout', 'datePickerHint'],
        'searchpopoutdmaddpopout': ['DmAddPopout', 'popout'],
        'searchpopoutdisplayavatar': ['SearchPopout', 'displayAvatar'],
        'searchpopoutdisplayusername': ['SearchPopout', 'displayUsername'],
        'searchpopoutdisplayednick': ['SearchPopout', 'displayedNick'],
        'searchpopoutfilter': ['SearchPopout', 'filter'],
        'searchpopoutheader': ['SearchPopout', 'header'],
        'searchpopouthint': ['SearchPopout', 'hint'],
        'searchpopouthintvalue': ['SearchPopout', 'hintValue'],
        'searchpopoutlinksource': ['SearchPopout', 'linkSource'],
        'searchpopoutnontext': ['SearchPopout', 'nonText'],
        'searchpopoutoption': ['SearchPopout', 'option'],
        'searchpopoutplusicon': ['SearchPopout', 'plusIcon'],
        'searchpopoutresultchannel': ['SearchPopout', 'resultChannel'],
        'searchpopoutresultsgroup': ['SearchPopout', 'resultsGroup'],
        'searchpopoutsearchclearhistory': ['SearchPopout', 'searchClearHistory'],
        'searchpopoutsearchlearnmore': ['SearchPopout', 'searchLearnMore'],
        'searchpopoutsearchoption': ['SearchPopout', 'searchOption'],
        'searchpopoutsearchresultchannelcategory': ['SearchPopout', 'searchResultChannelCategory'],
        'searchpopoutsearchresultchannelicon': ['SearchPopout', 'searchResultChannelIcon'],
        'searchpopoutsearchresultchanneliconbackground': ['SearchPopout', 'searchResultChannelIconBackground'],
        'searchpopoutselected': ['SearchPopout', 'selected'],
        'searchpopoutuser': ['SearchPopout', 'user'],
        'searchresults': ['SearchResults', 'searchResults'],
        'searchresultschannelname': ['SearchResults', 'channelName'],
        'searchresultspagination': ['SearchResults', 'pagination'],
        'searchresultspaginationdisabled': ['SearchResults', 'disabled'],
        'searchresultspaginationnext': ['SearchResults', 'paginationNext'],
        'searchresultspaginationprevious': ['SearchResults', 'paginationPrevious'],
        'searchresultssearchheader': ['SearchResults', 'searchHeader'],
        'searchresultswrap': ['SearchResults', 'searchResultsWrap'],
        'searchresultswrapper': ['SearchResults', 'resultsWrapper'],
        'select': ['NotFound', 'select'],
        'selectable': ['TextStyle', 'selectable'],
        'selectarrow': ['NotFound', 'selectArrow'],
        'selectarrowcontainer': ['NotFound', 'selectArrowContainer'],
        'selectarrowcontainerdark': ['NotFound', 'selectArrowContainerDark'],
        'selectarrowcontainerlight': ['NotFound', 'selectArrowContainerLight'],
        'selectarrowzone': ['NotFound', 'selectArrowZone'],
        'selectcontrol': ['NotFound', 'selectControl'],
        'selectcontroldark': ['NotFound', 'selectControlDark'],
        'selectcontrollight': ['NotFound', 'selectControlLight'],
        'selectdummyinput': ['NotFound', 'selectDummyInput'],
        'selecthasvalue': ['NotFound', 'selectHasValue'],
        'selectisopen': ['NotFound', 'selectIsOpen'],
        'selectmenu': ['NotFound', 'selectMenu'],
        'selectmenuouter': ['NotFound', 'selectMenuOuter'],
        'selectmenuouterdark': ['NotFound', 'selectMenuOuterDark'],
        'selectmenuouterlight': ['NotFound', 'selectMenuOuterLight'],
        'selectoption': ['NotFound', 'selectOption'],
        'selectoptiondark': ['NotFound', 'selectOptionDark'],
        'selectoptionlight': ['NotFound', 'selectOptionLight'],
        'selectoptionhoverdark': ['NotFound', 'selectOptionHoverDark'],
        'selectoptionhoverlight': ['NotFound', 'selectOptionHoverLight'],
        'selectoptionselectdark': ['NotFound', 'selectOptionSelectDark'],
        'selectoptionselectlight': ['NotFound', 'selectOptionSelectLight'],
        'selectselected': ['NotFound', 'selectIsSelected'],
        'selectsingle': ['NotFound', 'selectSingle'],
        'selectsingledark': ['NotFound', 'selectSingleDark'],
        'selectsinglelight': ['NotFound', 'selectSingleLight'],
        'selectvalue': ['NotFound', 'selectValue'],
        'selectwrap': ['Select', 'select'],
        'settingsclosebutton': ['SettingsCloseButton', 'closeButton'],
        'settingsclosebuttoncontainer': ['SettingsCloseButton', 'container'],
        'settingsheader': ['Item', 'header'],
        'settingsitem': ['Item', 'item'],
        'settingsitemselected': ['Item', 'selected'],
        'settingsitemthemed': ['Item', 'themed'],
        'settingsseparator': ['Item', 'separator'],
        'settingstabbar': ['Friends', 'tabBar'],
        'settingstabbarbadge': ['Friends', 'badge'],
        'settingstabbarprimary': ['Friends', 'primary'],
        'settingstabbartoppill': ['Item', 'topPill'],
        'sidebarregion': ['SettingsWindow', 'sidebarRegion'],
        'sinkinteractions': ['Message', 'disableInteraction'],
        'size10': ['UserPopout', 'size10'],
        'size12': ['Text', 'size12'],
        'size14': ['Text', 'size14'],
        'size16': ['Text', 'size16'],
        'size18': ['Text', 'size18'],
        'size20': ['Text', 'size20'],
        'size24': ['TextStyle', 'size24'],
        'slider': ['Slider', 'slider'],
        'sliderbar': ['Slider', 'bar'],
        'sliderbarfill': ['Slider', 'barFill'],
        'sliderbubble': ['Slider', 'bubble'],
        'sliderdisabled': ['Slider', 'disabled'],
        'slidergrabber': ['Slider', 'grabber'],
        'sliderinput': ['Slider', 'input'],
        'slidermark': ['Slider', 'mark'],
        'slidermarkdash': ['Slider', 'markDash'],
        'slidermarkdashsimple': ['Slider', 'markDashSimple'],
        'slidermarkvalue': ['Slider', 'markValue'],
        'slidermini': ['Slider', 'mini'],
        'slidertrack': ['Slider', 'track'],
        'spoilercontainer': ['Spoiler', 'spoilerContainer'],
        'spoilerhidden': ['Spoiler', 'hidden'],
        'spoilertext': ['Spoiler', 'spoilerText'],
        'spoilerwarning': ['Spoiler', 'spoilerWarning'],
        'small': ['TextStyle', 'small'],
        'splashbackground': ['NotFound', 'splashBackground'],
        'standardsidebarview': ['SettingsWindow', 'standardSidebarView'],
        'status': ['Avatar', 'status'],
        'switch': ['Switch', 'switch'],
        'switchdisabled': ['Switch', 'switchDisabled'],
        'switchenabled': ['Switch', 'switchEnabled'],
        'switchinner': ['Switch', 'checkbox'],
        'switchinnerdisabled': ['Switch', 'checkboxDisabled'],
        'switchinnerenabled': ['Switch', 'checkboxEnabled'],
        'switchsize': ['Switch', 'size'],
        'switchsizedefault': ['Switch', 'sizeDefault'],
        'switchsizemini': ['Switch', 'sizeMini'],
        'switchthemeclear': ['Switch', 'themeClear'],
        'switchthemedefault': ['Switch', 'themeDefault'],
        'switchvalue': ['Switch', 'value'],
        'switchvaluechecked': ['Switch', 'valueChecked'],
        'switchvalueunchecked': ['Switch', 'valueUnchecked'],
        'tabbar': ['UserProfile', 'tabBar'],
        'tabbarcontainer': ['UserProfile', 'tabBarContainer'],
        'tabbarheader': ['RecentMentions', 'tabBar'],
        'tabbarheadercontainer': ['RecentMentions', 'headerTabBarWrapper'],
        'tabbarheaderitem': ['RecentMentions', 'tabBarItem'],
        'tabbaritem': ['UserProfile', 'tabBarItem'],
        'tabbartop': ['Item', 'top'],
        'tableheader': ['SettingsTable', 'header'],
        'tableheadername': ['SettingsTable', 'headerName'],
        'tableheaderoption': ['SettingsTable', 'headerOption'],
        'tableheadersize': ['SettingsTable', 'headerSize'],
        'textarea': ['ChannelTextArea', 'textArea'],
        'textareaattachbutton': ['ChannelTextArea', 'attachButton'],
        'textareaattachbuttondivider': ['ChannelTextArea', 'attachButtonDivider'],
        'textareaattachbuttoninner': ['ChannelTextArea', 'attachButtonInner'],
        'textareaattachbuttonplus': ['ChannelTextArea', 'attachButtonPlus'],
        'textareabutton': ['ChannelTextAreaButton', 'button'],
        'textareabuttonactive': ['ChannelTextAreaButton', 'active'],
        'textareabuttonwrapper': ['ChannelTextAreaButton', 'buttonWrapper'],
        'textareaicon': ['ChannelTextAreaButton', 'icon'],
        'textareainner': ['ChannelTextArea', 'inner'],
        'textareainnerautocomplete': ['ChannelTextArea', 'innerAutocomplete'],
        'textareainnerdisabled': ['ChannelTextArea', 'innerDisabled'],
        'textareainnerenablednoattach': ['ChannelTextArea', 'innerEnabledNoAttach'],
        'textareainnernoautocomplete': ['ChannelTextArea', 'innerNoAutocomplete'],
        'textareapickerbutton': ['ChannelTextArea', 'button'],
        'textareapickerbuttons': ['ChannelTextArea', 'buttons'],
        'textareauploadinput': ['ChannelTextArea', 'uploadInput'],
        'textareawrapall': ['ChannelTextArea', 'channelTextArea'],
        'textareawrapchat': ['ChannelWindow', 'channelTextArea'],
        'textareawrapdisabled': ['ChannelTextArea', 'channelTextAreaDisabled'],
        'textareawrapenablednoattach': ['ChannelTextArea', 'channelTextAreaEnabledNoAttach'],
        'textlink': ['Notice', 'textLink'],
        'textrow': ['PopoutActivity', 'textRow'],
        'themedark': ['NotFound', 'themeDark'],
        'themeghosthairline': ['Scroller', 'themeGhostHairline'],
        'themelight': ['NotFound', 'themeLight'],
        'title': ['SettingsItems', 'title'],
        'titlebar': ['TitleBar', 'titleBar'],
        'titledefault': ['SettingsItems', 'titleDefault'],
        'titlemini': ['SettingsItems', 'titleMini'],
        'tooltip': ['TooltipContainer', 'layer'],
        'tooltipblack': ['Tooltip', 'tooltipBlack'],
        'tooltipbottom': ['Tooltip', 'tooltipBottom'],
        'tooltipbrand': ['Tooltip', 'tooltipBrand'],
        'tooltipgreen': ['Tooltip', 'tooltipGreen'],
        'tooltipinner': ['Tooltip', 'tooltip'],
        'tooltipleft': ['Tooltip', 'tooltipLeft'],
        'tooltippointer': ['Tooltip', 'tooltipPointer'],
        'tooltipred': ['Tooltip', 'tooltipRed'],
        'tooltipright': ['Tooltip', 'tooltipRight'],
        'tooltips': ['TooltipContainer', 'layerContainer'],
        'tooltiptop': ['Tooltip', 'tooltipTop'],
        'tooltipyellow': ['Tooltip', 'tooltipYellow'],
        'typing': ['Typing', 'typing'],
        'userpopout': ['UserPopout', 'userPopout'],
        'userpopoutavatarwrapper': ['UserPopout', 'avatarWrapper'],
        'userpopoutcustomstatus': ['UserPopout', 'customStatus'],
        'userpopoutheader': ['UserPopout', 'header'],
        'userpopoutheaderbottagwithnickname': ['UserPopout', 'headerBotTagWithNickname'],
        'userpopoutheadernamewrapper': ['UserPopout', 'headerNameWrapper'],
        'userpopoutheadernickname': ['UserPopout', 'headerName'],
        'userpopoutheadernonickname': ['UserPopout', 'headerTagUsernameNoNickname'],
        'userpopoutheadernormal': ['UserPopout', 'headerNormal'],
        'userpopoutheaderplaying': ['UserPopout', 'headerPlaying'],
        'userpopoutheaderspotify': ['UserPopout', 'headerSpotify'],
        'userpopoutheaderstreaming': ['UserPopout', 'headerStreaming'],
        'userpopoutheadertag': ['UserPopout', 'headerTag'],
        'userpopoutheadertagnonickname': ['UserPopout', 'headerTagNoNickname'],
        'userpopoutheadertagusernamenonickname': ['UserPopout', 'headerTagUsernameNoNickname'],
        'userpopoutheadertagwithnickname': ['UserPopout', 'headerTagWithNickname'],
        'userpopoutheadertext': ['UserPopout', 'headerText'],
        'userpopoutnametag': ['UserPopout', 'nametag'],
        'userpopoutrole': ['Role', 'role'],
        'userpopoutrolecircle': ['Role', 'roleCircle'],
        'userpopoutrolelist': ['UserPopout', 'rolesList'],
        'userpopoutrolename': ['Role', 'roleName'],
        'userprofile': ['UserProfile', 'root'],
        'userprofilebody': ['UserProfile', 'body'],
        'userprofilebottag': ['UserProfile', 'botTag'],
        'userprofilecustomstatus': ['UserProfile', 'customStatus'],
        'userprofileheader': ['UserProfile', 'header'],
        'userprofileheaderfill': ['UserProfile', 'headerFill'],
        'userprofileheaderinfo': ['UserProfile', 'headerInfo'],
        'userprofilelistavatar': ['UserProfile', 'listAvatar'],
        'userprofilelistguildavatarwithouticon': ['UserProfile', 'guildAvatarWithoutIcon'],
        'userprofilelistname': ['UserProfile', 'listName'],
        'userprofilelistrow': ['UserProfile', 'listRow'],
        'userprofilenametag': ['UserProfile', 'nameTag'],
        'userprofiletopsectionnormal': ['UserProfile', 'topSectionNormal'],
        'userprofiletopsectionplaying': ['UserProfile', 'topSectionPlaying'],
        'userprofiletopsectionspotify': ['UserProfile', 'topSectionSpotify'],
        'userprofiletopsectionstreaming': ['UserProfile', 'topSectionStreaming'],
        'userprofiletopsectionxbox': ['UserProfile', 'topSectionXbox'],
        'userprofileusername': ['UserProfile', 'username'],
        'usernote': ['Note', 'note'],
        'usernotepopout': ['UserPopout', 'note'],
        'usernoteprofile': ['UserProfile', 'note'],
        'vertical': ['Flex', 'vertical'],
        'voiceavatar': ['Voice', 'avatar'],
        'voiceavatarcontainer': ['Voice', 'avatarContainer'],
        'voiceavatarlarge': ['Voice', 'avatarLarge'],
        'voiceavatarsmall': ['Voice', 'avatarSmall'],
        'voiceavatarspeaking': ['Voice', 'avatarSpeaking'],
        'voiceclickable': ['Voice', 'clickable'],
        'voicecontent': ['Voice', 'content'],
        'voiceflipped': ['Voice', 'flipped'],
        'voiceicon': ['Voice', 'icon'],
        'voiceicons': ['Voice', 'icons'],
        'voiceiconspacing': ['Voice', 'iconSpacing'],
        'voicelist': ['Voice', 'list'],
        'voicelistcollapse': ['Voice', 'listCollapse'],
        'voicelistdefault': ['Voice', 'listDefault'],
        'voiceliveicon': ['Voice', 'liveIcon'],
        'voicename': ['Voice', 'username'],
        'voicenamefont': ['Voice', 'usernameFont'],
        'voicenamespeaking': ['Voice', 'usernameSpeaking'],
        'voicered': ['Voice', 'red'],
        'voiceselected': ['Voice', 'selected'],
        'voiceuser': ['Voice', 'voiceUser'],
        'voiceuserlarge': ['Voice', 'userLarge'],
        'voiceusersmall': ['Voice', 'userSmall'],
        'weightbold': ['TextWeight', 'weightBold'],
        'weightlight': ['TextWeight', 'weightLight'],
        'weightmedium': ['TextWeight', 'weightMedium'],
        'weightnormal': ['TextWeight', 'weightNormal'],
        'weightsemibold': ['TextWeight', 'weightSemiBold'],
        'wrap': ['Flex', 'wrap'],
        'wrapreverse': ['Flex', 'wrapReverse']
    };
    BDFDB['disCN'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(rL, rM) {
            return BDFDB['getDiscordClass'](rM, ![])['replace']('#', '');
        }
    });
    BDFDB['disCNS'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(rN, rO) {
            return BDFDB['getDiscordClass'](rO, ![])['replace']('#', '') + '\x20';
        }
    });
    BDFDB['disCNC'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(rP, rQ) {
            return BDFDB['getDiscordClass'](rQ, ![])['replace']('#', '') + ',';
        }
    });
    BDFDB['dotCN'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(rR, rS) {
            let rT = BDFDB['getDiscordClass'](rS, !![]);
            return (rT['indexOf']('#') == 0x0 ? '' : '.') + rT;
        }
    });
    BDFDB['dotCNS'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(rU, rV) {
            let rW = BDFDB['getDiscordClass'](rV, !![]);
            return (rW['indexOf']('#') == 0x0 ? '' : '.') + rW + '\x20';
        }
    });
    BDFDB['dotCNC'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(rX, rY) {
            let rZ = BDFDB['getDiscordClass'](rY, !![]);
            return (rZ['indexOf']('#') == 0x0 ? '' : '.') + rZ + ',';
        }
    });
    BDFDB['notCN'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(s0, s1) {
            return ':not(.' + BDFDB['getDiscordClass'](s1, !![])['split']('.')[0x0] + ')';
        }
    });
    BDFDB['notCNS'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(s2, s3) {
            return ':not(.' + BDFDB['getDiscordClass'](s3, !![])['split']('.')[0x0] + ')\x20';
        }
    });
    BDFDB['notCNC'] = new Proxy(BDFDB['DiscordClasses'], {
        'get': function(s4, s5) {
            return ':not(.' + BDFDB['getDiscordClass'](s5, !![])['split']('.')[0x0] + '),';
        }
    });
    BDFDB['getDiscordClass'] = function(s6, s7) {
        var s8 = BDFDB['DiscordClassModules']['BDFDB']['BDFDBundefined'];
        if (BDFDB['DiscordClasses'][s6] === undefined) {
            console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', s6 + '\x20not\x20found\x20in\x20BDFDB.DiscordClasses');
            return s8;
        } else if (!Array['isArray'](BDFDB['DiscordClasses'][s6]) || BDFDB['DiscordClasses'][s6]['length'] != 0x2) {
            console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', s6 + '\x20is\x20not\x20an\x20Array\x20of\x20Length\x202\x20in\x20BDFDB.DiscordClasses');
            return s8;
        } else if (BDFDB['DiscordClassModules'][BDFDB['DiscordClasses'][s6][0x0]] === undefined) {
            console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', BDFDB['DiscordClasses'][s6][0x0] + '\x20not\x20found\x20in\x20BDFDB.DiscordClassModules');
            return s8;
        } else if (BDFDB['DiscordClassModules'][BDFDB['DiscordClasses'][s6][0x0]][BDFDB['DiscordClasses'][s6][0x1]] === undefined) {
            console['warn']('%c[BDFDB]%c', 'color:#3a71c1;\x20font-weight:700;', '', BDFDB['DiscordClasses'][s6][0x1] + '\x20not\x20found\x20in\x20' + BDFDB['DiscordClasses'][s6][0x0] + '\x20in\x20BDFDB.DiscordClassModules');
            return s8;
        } else {
            s8 = BDFDB['DiscordClassModules'][BDFDB['DiscordClasses'][s6][0x0]][BDFDB['DiscordClasses'][s6][0x1]];
            if (s7) {
                s8 = s8['split']('\x20')['filter'](s9 => s9['indexOf']('da-') != 0x0)['join'](s7 ? '.' : '\x20');
                s8 = s8 ? s8 : BDFDB['DiscordClassModules']['BDFDB']['BDFDBundefined'];
            }
            return s8;
        }
    };
    BDFDB['getLibraryStrings'] = function() {
        switch (BDFDB['getDiscordLanguage']()['id']) {
            case 'hr':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20je\x20započeo.', 'toast_plugin_stopped': '{{oldversion}}\x20zaustavljen.', 'toast_plugin_translated': 'prijevod\x20na\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Birač\x20boja', 'file_navigator_text': 'Pregledajte\x20datoteku', 'btn_add_text': 'Dodati', 'btn_cancel_text': 'Prekid', 'btn_all_text': 'Sve', 'btn_save_text': 'Uštedjeti', 'btn_ok_text': 'OK', 'search_placeholder': 'Traziti\x20...'
                };
            case 'da':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20er\x20startet.', 'toast_plugin_stopped': '{{oldversion}}\x20er\x20stoppet.', 'toast_plugin_translated': 'oversat\x20til\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Farvevælger', 'file_navigator_text': 'Gennemse\x20fil', 'btn_add_text': 'Tilføje', 'btn_cancel_text': 'Afbryde', 'btn_all_text': 'Alle', 'btn_save_text': 'Spare', 'btn_ok_text': 'OK', 'search_placeholder': 'Søge\x20efter\x20...'
                };
            case 'de':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20wurde\x20gestartet.', 'toast_plugin_stopped': '{{oldversion}}\x20wurde\x20gestoppt.', 'toast_plugin_translated': 'auf\x20{{ownlang}}\x20übersetzt.', 'colorpicker_modal_header_text': 'Farbauswahl', 'file_navigator_text': 'Datei\x20durchsuchen', 'btn_add_text': 'Hinzufügen', 'btn_cancel_text': 'Abbrechen', 'btn_all_text': 'Alle', 'btn_save_text': 'Speichern', 'btn_ok_text': 'OK', 'search_placeholder': 'Suchen\x20nach\x20...'
                };
            case 'es':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20se\x20guilddiv\x20iniciado.', 'toast_plugin_stopped': '{{oldversion}}\x20se\x20guilddiv\x20detenido.', 'toast_plugin_translated': 'traducido\x20a\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Selector\x20de\x20color', 'file_navigator_text': 'Buscar\x20archivo', 'btn_add_text': 'Añadir', 'btn_cancel_text': 'Cancelar', 'btn_all_text': 'Todo', 'btn_save_text': 'Guardar', 'btn_ok_text': 'OK', 'search_placeholder': 'Buscar\x20...'
                };
            case 'fr':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20a\x20été\x20démarré.', 'toast_plugin_stopped': '{{oldversion}}\x20a\x20été\x20arrêté.', 'toast_plugin_translated': 'traduit\x20en\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Pipette\x20à\x20couleurs', 'file_navigator_text': 'Parcourir\x20le\x20fichier', 'btn_add_text': 'Ajouter', 'btn_cancel_text': 'Abandonner', 'btn_all_text': 'Tout', 'btn_save_text': 'Enregistrer', 'btn_ok_text': 'OK', 'search_placeholder': 'Rechercher\x20...'
                };
            case 'it':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20è\x20stato\x20avviato.', 'toast_plugin_stopped': '{{oldversion}}\x20è\x20stato\x20interrotto.', 'toast_plugin_translated': 'tradotto\x20in\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Raccoglitore\x20di\x20colore', 'file_navigator_text': 'Sfoglia\x20file', 'btn_add_text': 'Inserisci', 'btn_cancel_text': 'Cancellare', 'btn_all_text': 'Tutto', 'btn_save_text': 'Salvare', 'btn_ok_text': 'OK', 'search_placeholder': 'Cercare\x20...'
                };
            case 'nl':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20is\x20gestart.', 'toast_plugin_stopped': '{{oldversion}}\x20is\x20gestopt.', 'toast_plugin_translated': 'vertaald\x20naar\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Kleur\x20kiezer', 'file_navigator_text': 'Bestand\x20zoeken', 'btn_add_text': 'Toevoegen', 'btn_cancel_text': 'Afbreken', 'btn_all_text': 'Alle', 'btn_save_text': 'Opslaan', 'btn_ok_text': 'OK', 'search_placeholder': 'Zoeken\x20...'
                };
            case 'no':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20er\x20startet.', 'toast_plugin_stopped': '{{oldversion}}\x20er\x20stoppet.', 'toast_plugin_translated': 'oversatt\x20til\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Fargevelger', 'file_navigator_text': 'Bla\x20gjennom\x20fil', 'btn_add_text': 'Legg\x20til', 'btn_cancel_text': 'Avbryte', 'btn_all_text': 'Alle', 'btn_save_text': 'Lagre', 'btn_ok_text': 'OK', 'search_placeholder': 'Søk\x20etter\x20...'
                };
            case 'pl':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20został\x20uruchomiony.', 'toast_plugin_stopped': '{{oldversion}}\x20został\x20zatrzymany.', 'toast_plugin_translated': 'przetłumaczono\x20na\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Narzędzie\x20do\x20wybierania\x20kolorów', 'file_navigator_text': 'Przeglądać\x20plik', 'btn_add_text': 'Dodaj', 'btn_cancel_text': 'Anuluj', 'btn_all_text': 'Wszystkie', 'btn_save_text': 'Zapisz', 'btn_ok_text': 'OK', 'search_placeholder': 'Szukać\x20...'
                };
            case 'pt-BR':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20foi\x20iniciado.', 'toast_plugin_stopped': '{{oldversion}}\x20foi\x20interrompido.', 'toast_plugin_translated': 'traduzido\x20para\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Seletor\x20de\x20cores', 'file_navigator_text': 'Procurar\x20arquivo', 'btn_add_text': 'Adicionar', 'btn_cancel_text': 'Cancelar', 'btn_all_text': 'Todo', 'btn_save_text': 'Salvar', 'btn_ok_text': 'OK', 'search_placeholder': 'Procurar\x20por\x20...'
                };
            case 'fi':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20on\x20käynnistetty.', 'toast_plugin_stopped': '{{oldversion}}\x20on\x20pysäytetty.', 'toast_plugin_translated': 'käännetty\x20osoitteeseen\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Värinvalitsija', 'file_navigator_text': 'Selaa\x20tiedostoa', 'btn_add_text': 'Lisätä', 'btn_cancel_text': 'Peruuttaa', 'btn_all_text': 'Kaikki', 'btn_save_text': 'Tallentaa', 'btn_ok_text': 'OK', 'search_placeholder': 'Etsiä\x20...'
                };
            case 'sv':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20har\x20startats.', 'toast_plugin_stopped': '{{oldversion}}\x20har\x20blivit\x20stoppad.', 'toast_plugin_translated': 'översatt\x20till\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Färgväljare', 'file_navigator_text': 'Bläddra\x20i\x20fil', 'btn_add_text': 'Lägg\x20till', 'btn_cancel_text': 'Avbryta', 'btn_all_text': 'All', 'btn_save_text': 'Spara', 'btn_ok_text': 'OK', 'search_placeholder': 'Söka\x20efter\x20...'
                };
            case 'tr':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20başlatıldı.', 'toast_plugin_stopped': '{{oldversion}}\x20durduruldu.', 'toast_plugin_translated': '{{ownlang}}\x20olarak\x20çevrildi.', 'colorpicker_modal_header_text': 'Renk\x20seçici', 'file_navigator_text': 'Dosyaya\x20gözat', 'btn_add_text': 'Eklemek', 'btn_cancel_text': 'Iptal', 'btn_all_text': 'Her', 'btn_save_text': 'Kayıt', 'btn_ok_text': 'Okey', 'search_placeholder': 'Aramak\x20...'
                };
            case 'cs':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20byl\x20spuštěn.', 'toast_plugin_stopped': '{{oldversion}}\x20byl\x20zastaven.', 'toast_plugin_translated': 'přeložen\x20do\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Výběr\x20barev', 'file_navigator_text': 'Procházet\x20soubor', 'btn_add_text': 'Přidat', 'btn_cancel_text': 'Zrušení', 'btn_all_text': 'Vše', 'btn_save_text': 'Uložit', 'btn_ok_text': 'OK', 'search_placeholder': 'Hledat\x20...'
                };
            case 'bg':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20е\x20стартиран.', 'toast_plugin_stopped': '{{oldversion}}\x20е\x20спрян.', 'toast_plugin_translated': 'преведена\x20на\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Избор\x20на\x20цвят', 'file_navigator_text': 'Прегледайте\x20файла', 'btn_add_text': 'Добави', 'btn_cancel_text': 'Зъбести', 'btn_all_text': 'Bсичко', 'btn_save_text': 'Cпасяване', 'btn_ok_text': 'Добре', 'search_placeholder': 'Търся\x20...'
                };
            case 'ru':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20запущен.', 'toast_plugin_stopped': '{{oldversion}}\x20остановлен.', 'toast_plugin_translated': 'переведен\x20на\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Выбор\x20цвета', 'file_navigator_text': 'Просмотр\x20файла', 'btn_add_text': 'Добавить', 'btn_cancel_text': 'Отмена', 'btn_all_text': 'Все', 'btn_save_text': 'Сохранить', 'btn_ok_text': 'ОК', 'search_placeholder': 'Искать\x20...'
                };
            case 'uk':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20було\x20запущено.', 'toast_plugin_stopped': '{{oldversion}}\x20було\x20зупинено.', 'toast_plugin_translated': 'перекладено\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Колір\x20обкладинки', 'file_navigator_text': 'Перегляньте\x20файл', 'btn_add_text': 'Додати', 'btn_cancel_text': 'Скасувати', 'btn_all_text': 'Все', 'btn_save_text': 'Зберегти', 'btn_ok_text': 'Добре', 'search_placeholder': 'Шукати\x20...'
                };
            case 'ja':
                return {
                    'toast_plugin_started': '{{oldversion}}が開始されました.', 'toast_plugin_stopped': '{{oldversion}}が停止しました.', 'toast_plugin_translated': 'は{{ownlang}}に翻訳されました.', 'colorpicker_modal_header_text': 'カラーピッカー', 'file_navigator_text': 'ファイルを参照', 'btn_add_text': '追加', 'btn_cancel_text': 'キャンセル', 'btn_all_text': 'すべて', 'btn_save_text': 'セーブ', 'btn_ok_text': 'はい', 'search_placeholder': '検索する\x20...'
                };
            case 'zh-TW':
                return {
                    'toast_plugin_started': '{{oldversion}}已經啟動.', 'toast_plugin_stopped': '{{oldversion}}已停止.', 'toast_plugin_translated': '翻譯為{{ownlang}}.', 'colorpicker_modal_header_text': '選色器', 'file_navigator_text': '瀏覽文件', 'btn_add_text': '加', 'btn_cancel_text': '取消', 'btn_all_text': '所有', 'btn_save_text': '保存', 'btn_ok_text': '好', 'search_placeholder': '搜索\x20...'
                };
            case 'ko':
                return {
                    'toast_plugin_started': '{{oldversion}}\x20시작되었습니다.', 'toast_plugin_stopped': '{{oldversion}}\x20중지되었습니다.', 'toast_plugin_translated': '{{ownlang}}\x20로\x20번역되었습니다.', 'colorpicker_modal_header_text': '색상\x20선택\x20도구', 'file_navigator_text': '파일\x20찾아보기', 'btn_add_text': '더하다', 'btn_cancel_text': '취소', 'btn_all_text': '모든', 'btn_save_text': '저장', 'btn_ok_text': '승인', 'search_placeholder': '검색\x20...'
                };
            default:
                return {
                    'toast_plugin_started': '{{oldversion}}\x20has\x20been\x20started.', 'toast_plugin_stopped': '{{oldversion}}\x20has\x20been\x20stopped.', 'toast_plugin_translated': 'translated\x20to\x20{{ownlang}}.', 'colorpicker_modal_header_text': 'Color\x20Picker', 'file_navigator_text': 'Browse\x20File', 'btn_add_text': 'Add', 'btn_cancel_text': 'Cancel', 'btn_all_text': 'All', 'btn_save_text': 'Save', 'btn_ok_text': 'OK', 'search_placeholder': 'Search\x20for\x20...'
                };
        }
    };
    BDFDB['appendLocalStyle']('BDFDB', '\x0a\x09\x09@import\x20url(https://mwittrien.github.io/BetterDiscordAddons/Themes/BetterDocsBlock.css);\x0a\x09\x09\x0a\x09\x09' + BDFDB['dotCN']['overflowellipsis'] + '\x20{\x0a\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09\x09text-overflow:\x20ellipsis;\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09#bd-settingspane-container\x20.ui-form-title\x20{\x0a\x09\x09\x09display:\x20inline-block;\x0a\x09\x09}\x0a\x09\x09#bd-settingspane-container\x20' + BDFDB['dotCN']['_repofolderbutton'] + '\x20{\x0a\x09\x09\x09position:\x20static;\x0a\x09\x09\x09margin-bottom:\x200;\x0a\x09\x09\x09border-radius:\x205px;\x0a\x09\x09\x09display:\x20inline-block;\x0a\x09\x09\x09margin-left:\x2010px;\x0a\x09\x09}\x0a\x09\x09#bd-settingspane-container\x20.bd-updatebtn\x20~\x20.bd-updatebtn\x20{\x0a\x09\x09\x09display:\x20none\x20!important;\x0a\x09\x09}\x0a\x09\x09#bd-settingspane-container\x20' + BDFDB['dotCN']['_repodescription'] + '\x20{\x0a\x09\x09\x09white-space:\x20pre-line\x20!important;\x0a\x09\x09}\x0a\x09\x09' + (BDFDB['dotCNS']['themedark'] + BDFDB['dotCN']['popoutthemedpopout'] + BDFDB['notCN']['messagespopoutwrap']) + '\x20{\x0a\x09\x09\x09-webkit-box-shadow:\x200\x202px\x2010px\x200\x20rgba(0,0,0,20%);\x0a\x09\x09\x09background-color:\x20#2f3136;\x0a\x09\x09\x09border:\x201px\x20solid\x20rgba(28,36,43,.6);\x0a\x09\x09\x09box-shadow:\x200\x202px\x2010px\x200\x20rgba(0,0,0,.2);\x0a\x09\x09}\x0a\x09\x09.BDFDB-notice\x20{\x0a\x09\x09\x09transition:\x20height\x200.5s\x20ease\x20!important;\x0a\x09\x09\x09border-radius:\x200\x205px\x200\x200\x20!important;\x0a\x09\x09}\x0a\x09\x09.BDFDB-notice\x20' + BDFDB['dotCN']['noticeplatformicon'] + '\x20{\x0a\x09\x09\x09margin-top:\x20-7px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-notice\x20' + BDFDB['dotCN']['noticeplatformicon'] + '\x20svg\x20{\x0a\x09\x09\x09max-height:\x2028px;\x0a\x09\x09}\x0a\x09\x09.hidden-by-OTB\x20.BDFDB-notice\x20{\x0a\x09\x09\x09-webkit-app-region:\x20drag\x20!important;\x0a\x09\x09}\x0a\x09\x09#pluginNotice\x20#outdatedPlugins\x20span\x20{\x0a\x09\x09\x09-webkit-app-region:\x20no-drag;\x0a\x09\x09\x09color:\x20#FFF;\x0a\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09}\x0a\x09\x09#pluginNotice\x20#outdatedPlugins\x20span:hover\x20{\x0a\x09\x09\x09text-decoration:\x20underline;\x0a\x09\x09}\x0a\x09\x09' + (BDFDB['dotCNC']['tooltips'] + BDFDB['dotCN']['tooltipinner']) + '\x20{\x0a\x09\x09\x09z-index:\x20100000000;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['tooltipinner'] + '.tooltip-customcolor\x20' + BDFDB['dotCN']['tooltippointer'] + '\x20{\x0a\x09\x09\x09border-top-color:\x20inherit\x20!important;\x0a\x09\x09}\x0a\x09\x09.toasts\x20{\x0a\x09\x09\x09position:\x20fixed;\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09top:\x200;\x0a\x09\x09\x09flex-direction:\x20column;\x0a\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09justify-content:\x20flex-end;\x0a\x09\x09\x09pointer-events:\x20none;\x0a\x09\x09\x09z-index:\x204000;\x0a\x09\x09}\x0a\x09\x09@keyframes\x20toast-up\x20{\x0a\x09\x09\x09from\x20{\x0a\x09\x09\x09\x09transform:\x20translateY(0);\x0a\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09.toast\x20{\x0a\x09\x09\x09animation:\x20toast-up\x20300ms\x20ease;\x0a\x09\x09\x09transform:\x20translateY(-10px);\x0a\x09\x09\x09background-color:\x20#36393F;\x0a\x09\x09\x09padding:\x2010px;\x0a\x09\x09\x09border-radius:\x205px;\x0a\x09\x09\x09box-shadow:\x200\x200\x200\x201px\x20rgba(32,34,37,.6),\x200\x202px\x2010px\x200\x20rgba(0,0,0,.2);\x0a\x09\x09\x09font-weight:\x20500;\x0a\x09\x09\x09color:\x20#fff;\x0a\x09\x09\x09user-select:\x20text;\x0a\x09\x09\x09font-size:\x2014px;\x0a\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09margin-top:\x2010px;\x0a\x09\x09\x09pointer-events:\x20auto;\x0a\x09\x09}\x0a\x09\x09@keyframes\x20toast-down\x20{\x0a\x09\x09\x09to\x20{\x0a\x09\x09\x09\x09transform:\x20translateY(0px);\x0a\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09.toast.closing\x20{\x0a\x09\x09\x09animation:\x20toast-down\x20200ms\x20ease;\x0a\x09\x09\x09animation-fill-mode:\x20forwards;\x0a\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09transform:\x20translateY(-10px);\x0a\x09\x09}\x0a\x09\x09.toast\x20.toast-inner\x20{\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09align-items:\x20center;\x0a\x09\x09}\x0a\x09\x09.toast\x20.toast-avatar\x20{\x0a\x09\x09\x09margin-right:\x205px;\x0a\x09\x09\x09width:\x2025px;\x0a\x09\x09\x09height:\x2025px;\x0a\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09background-position:\x20center;\x0a\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09}\x0a\x09\x09.toast.icon\x20{\x0a\x09\x09\x09padding-left:\x2030px;\x0a\x09\x09\x09background-size:\x2020px\x2020px;\x0a\x09\x09\x09background-repeat:\x20no-repeat;\x0a\x09\x09\x09background-position:\x206px\x2050%;\x0a\x09\x09}\x0a\x09\x09.toast.toast-brand\x20{\x0a\x09\x09\x09background-color:\x20#7289DA;\x0a\x09\x09}\x0a\x09\x09.toast.toast-brand.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjI3IDI3IDExNSAxMTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMTEuMywxMjQuMWMwLDAtMy40LTQuMS02LjMtNy43YzEyLjYtMy41LDE3LjQtMTEuMywxNy40LTExLjMgYy00LDIuNi03LjcsNC40LTExLjEsNS42Yy00LjgsMi05LjUsMy4zLTE0LDQuMWMtOS4yLDEuNy0xNy42LDEuMy0yNC45LTAuMWMtNS41LTEtMTAuMi0yLjUtMTQuMS00LjFjLTIuMi0wLjgtNC42LTEuOS03LjEtMy4zIGMtMC4zLTAuMi0wLjYtMC4zLTAuOS0wLjVjLTAuMS0wLjEtMC4zLTAuMi0wLjQtMC4yYy0xLjctMS0yLjYtMS42LTIuNi0xLjZzNC42LDcuNiwxNi44LDExLjJjLTIuOSwzLjYtNi40LDcuOS02LjQsNy45IGMtMjEuMi0wLjYtMjkuMy0xNC41LTI5LjMtMTQuNWMwLTMwLjYsMTMuOC01NS40LDEzLjgtNTUuNGMxMy44LTEwLjMsMjYuOS0xMCwyNi45LTEwbDEsMS4xQzUyLjgsNTAuMyw0NSw1Ny45LDQ1LDU3LjkgczIuMS0xLjIsNS43LTIuN2MxMC4zLTQuNSwxOC40LTUuNywyMS44LTZjMC41LTAuMSwxLjEtMC4yLDEuNi0wLjJjNS45LTAuNywxMi41LTAuOSwxOS40LTAuMmM5LjEsMSwxOC45LDMuNywyOC45LDkuMSBjMCwwLTcuNS03LjItMjMuOS0xMi4xbDEuMy0xLjVjMCwwLDEzLjEtMC4zLDI2LjksMTBjMCwwLDEzLjgsMjQuOCwxMy44LDU1LjRDMTQwLjYsMTA5LjYsMTMyLjUsMTIzLjUsMTExLjMsMTI0LjF6IE0xMDEuNyw3OS43Yy01LjQsMC05LjgsNC43LTkuOCwxMC41YzAsNS44LDQuNCwxMC41LDkuOCwxMC41YzUuNCwwLDkuOC00LjcsOS44LTEwLjUgQzExMS41LDg0LjQsMTA3LjEsNzkuNywxMDEuNyw3OS43eiBNNjYuNyw3OS43Yy01LjQsMC05LjgsNC43LTkuOCwxMC41YzAsNS44LDQuNCwxMC41LDkuOCwxMC41YzUuNCwwLDkuOC00LjcsOS44LTEwLjUgQzc2LjUsODQuNCw3Mi4xLDc5LjcsNjYuNyw3OS43eiIvPjwvc3ZnPg==);\x0a\x09\x09}\x0a\x09\x09.toast.toast-danger,\x20\x0a\x09\x09.toast.toast-error\x20{\x0a\x09\x09\x09background-color:\x20#F04747;\x0a\x09\x09}\x0a\x09\x09.toast.toast-danger.icon,\x0a\x09\x09.toast.toast-error.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5eiIvPiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+);\x0a\x09\x09}\x0a\x09\x09.toast.toast-default\x20{\x0a\x09\x09\x09background-color:\x20#F26522;\x0a\x09\x09}\x0a\x09\x09.toast.toast-default.icon\x20{\x0a\x09\x09\x09padding-left:\x2010px;\x0a\x09\x09}\x0a\x09\x09.toast.toast-facebook\x20{\x0a\x09\x09\x09background-color:\x20#355089;\x0a\x09\x09}\x0a\x09\x09.toast.toast-facebook.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9Ii01IC01IDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggaWQ9IkZhY2Vib29rX194MjhfYWx0X3gyOV8iIGQ9Ik05MCwxNS4wMDFDOTAsNy4xMTksODIuODg0LDAsNzUsMEgxNUM3LjExNiwwLDAsNy4xMTksMCwxNS4wMDF2NTkuOTk4ICAgQzAsODIuODgxLDcuMTE2LDkwLDE1LjAwMSw5MEg0NVY1NkgzNFY0MWgxMXYtNS44NDRDNDUsMjUuMDc3LDUyLjU2OCwxNiw2MS44NzUsMTZINzR2MTVINjEuODc1QzYwLjU0OCwzMSw1OSwzMi42MTEsNTksMzUuMDI0VjQxICAgaDE1djE1SDU5djM0aDE2YzcuODg0LDAsMTUtNy4xMTksMTUtMTUuMDAxVjE1LjAwMXoiIGZpbGw9IndoaXRlIi8+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==);\x0a\x09\x09}\x0a\x09\x09.toast.toast-info\x20{\x0a\x09\x09\x09background-color:\x20#4A90E2;\x0a\x09\x09}\x0a\x09\x09.toast.toast-info.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=);\x0a\x09\x09}\x0a\x09\x09.toast.toast-premium\x20{\x0a\x09\x09\x09background-color:\x20#202225;\x0a\x09\x09}\x0a\x09\x09.toast.toast-premium.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMiIGhlaWdodD0iMjYiPiAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOTYuMjgyNiA4LjYwMjc4ODI0bC0xLjIxNTUgOC4zOTAzNTI5NmMtLjI3NzUgMS45ODI2Mjc0LTIuNDY1NSAyLjkwMzMzMzMtNC40NzkgMi45MDMzMzMzLTEuODc1IDAtMy43MTU1LS45MjA3MDU5LTMuNDcyNS0yLjcyNTkyMTZsMS4yMTU1LTguNTY3NzY0NjZjLjI3NzUtMS44NzY1ODgyNCAyLjQ2NTUtMi44MzI0NzA2IDQuNDc5LTIuODMyNDcwNiAyLjAxNCAwIDMuNzUuOTU1ODgyMzYgMy40NzI1IDIuODMyNDcwNk05My43NzIxLjAwMzkyNTVsLjAwMDUtLjAwNDA3ODQ0aC0xMy4wODRjLS4zMzQgMC0uNjE4LjI1MDMxMzcyLS42NjYuNTg3Mjk0MTJsLS42MzY1IDQuNDMyMjM1M2MtLjA1OTUuNDE0NDcwNTguMjU2Ljc4NjExNzY0LjY2NjUuNzg2MTE3NjRoMi4zODk1Yy4yNCAwIC40MDQ1LjI0OTgwMzkyLjMxLjQ3NTY0NzA2LS4yOTguNzEyMTk2MDctLjUxNTUgMS40ODYwNzg0My0uNjM2IDIuMzIxNjQ3MDZsLTEuMjE1NSA4LjU2Nzc2NDY2Yy0uNzk5IDUuNzM1Mjk0MiAzLjg4OSA4LjYwMjQzMTQgOC45OTMgOC42MDI0MzE0IDUuMzQ3NSAwIDEwLjU5MDUtMi44NjcxMzcyIDExLjM4OS04LjYwMjQzMTRsMS4yMTUtOC41Njc3NjQ2NmMuNzgzLTUuNjIyMTE3NjUtMy43Mzk1LTguNDg4MjM1My04LjcyNTUtOC41OTg4NjI3NW0tNzguNTk1MjUgMTEuNzI4NjUxbC4wNjcgNC4xNTg5ODA0Yy4wMDE1LjA4NTEzNzItLjA1NS4xNjA1ODgyLS4xMzYuMTgxNDkwMmgtLjAwMDVsLTEuMzg1NS01LjAxNjQ3MDZjLS4wMDItLjAwNzY0NzEtLjAwNS0uMDE0Nzg0My0uMDA4LS4wMjI0MzE0TDkuNDE0MzUuNzcwNzcyNTNjLS4xMDYtLjI1Mjg2Mjc1LS4zNDk1LS40MTY1MDk4LS42MTk1LS40MTY1MDk4aC00Ljg3MjVjLS4zMzYgMC0uNjIwNS4yNTIzNTI5NC0uNjY3LjU5MTM3MjU0TC4wMDY4NSAyNC42MzcyNDMxYy0uMDU3LjQxMzQ1MS4yNTc1Ljc4MjAzOTMuNjY2NS43ODIwMzkzaDQuODU0Yy4zMzY1IDAgLjYyMTUtLjI1MzM3MjYuNjY3NS0uNTkyOTAybDEuMjcyLTkuNDEyNTA5OGMuMDAxNS0uMDA5MTc2NS4wMDItLjAxODM1My4wMDItLjAyNzUyOTRsLS4wNjk1LTQuODM2NTA5OC4xMzg1LS4wMzUxNzY1IDEuNDU1NSA1LjAxNjQ3MDZjLjAwMjUuMDA3MTM3Mi4wMDUuMDEzNzY0Ny4wMDc1LjAyMDkwMmw0LjAyMTUgOS40NTM4MDM5Yy4xMDY1LjI1MDgyMzUuMzQ5NS40MTM0NTEuNjE3NS40MTM0NTFoNS4yNTY1Yy4zMzYgMCAuNjIwNS0uMjUyMzUzLjY2Ny0uNTkxODgyNGwzLjI0OTUtMjMuNjkxNjA3ODRjLjA1NjUtLjQxMjk0MTE4LS4yNTgtLjc4MTUyOTQyLS42NjctLjc4MTUyOTQyaC00LjgyMDVjLS4zMzYgMC0uNjIwNS4yNTE4NDMxNC0uNjY3LjU5MDg2Mjc1bC0xLjQ4IDEwLjc1ODkwMmMtLjAwMS4wMDkxNzY0LS4wMDE1LjAxODg2MjctLjAwMTUuMDI4NTQ5bTkuMzk0IDEzLjY4NjYwMzloNC44NTVjLjMzNiAwIC42MjA1LS4yNTIzNTI5LjY2Ny0uNTkxMzcyNmwzLjI0OS0yMy42OTIxMTc2Yy4wNTY1LS40MTI5NDEyLS4yNTgtLjc4MTUyOTQ0LS42NjctLjc4MTUyOTQ0aC00Ljg1NWMtLjMzNiAwLS42MjA1LjI1MjM1Mjk0LS42NjcuNTkxMzcyNTVsLTMuMjQ5IDIzLjY5MjExNzY4Yy0uMDU2NS40MTI5NDEyLjI1OC43ODE1Mjk0LjY2Ny43ODE1Mjk0TTM2LjYyMTE1LjkwNjA3NDVsLS42MzYgNC40MzIyMzUzYy0uMDU5NS40MTQ0NzA2LjI1NTUuNzg2MTE3NjUuNjY2Ljc4NjExNzY1aDUuMDgwNWMuNDA4NSAwIC43MjMuMzY3NTY4NjMuNjY3NS43ODA1MDk4bC0yLjM5MzUgMTcuNzM0MDM5MjVjLS4wNTU1LjQxMjQzMTMuMjU4NS43OC42NjcuNzhoNC45MjU1Yy4zMzY1IDAgLjYyMS0uMjUyODYyOC42NjctLjU5MjkwMmwyLjQ0NC0xOC4xMDg3NDUxYy4wNDYtLjMzOTUyOTQuMzMwNS0uNTkyOTAxOTUuNjY3LS41OTI5MDE5NWg1LjQ2MjVjLjMzNCAwIC42MTgtLjI0OTgwMzkyLjY2Ni0uNTg3Mjk0MTJsLjYzNy00LjQzMjIzNTNjLjA1OTUtLjQxNDQ3MDU4LS4yNTU1LS43ODYxMTc2NC0uNjY2NS0uNzg2MTE3NjRoLTE4LjE4NzVjLS4zMzQ1IDAtLjYxOC4yNTAzMTM3LS42NjY1LjU4NzI5NDFNNzEuMDM4NyA5LjA5ODM2ODZjLS4xNzQgMS40NTE0MTE3Ny0xLjI4NDUgMi45MDI4MjM1Ny0zLjE5NSAyLjkwMjgyMzU3aC0yLjg2OTVjLS40MSAwLS43MjQ1LS4zNjk2MDc5LS42NjctLjc4MzA1ODlsLjYwNzUtNC4zNjE4ODIzM2MuMDQ3LS4zMzg1MDk4LjMzMTUtLjU5MDM1Mjk0LjY2Ny0uNTkwMzUyOTRoMy4wNjFjMS44NDA1IDAgMi41Njk1IDEuMzEwMTk2MDggMi4zOTYgMi44MzI0NzA2TTY5LjMzNzIuMzU0MjExNzZoLTkuMjQwNWMtLjMzNiAwLS42MjA1LjI1MjM1Mjk0LS42NjcuNTkxMzcyNTRsLTMuMjQ5IDIzLjY5MjExNzdjLS4wNTY1LjQxMjk0MTEuMjU4Ljc4MTUyOTQuNjY3Ljc4MTUyOTRoNC45MjM1Yy4zMzY1IDAgLjYyMTUtLjI1MzM3MjYuNjY3NS0uNTkyOTAybC45NTYtNy4wNzY1ODgyYy4wMjMtLjE2OTc2NDcuMTY1LS4yOTYxOTYxLjMzMzUtLjI5NjE5NjFoLjYzM2MuMTE0NSAwIC4yMjE1LjA1OTY0NzEuMjgzNS4xNTgwMzkybDQuNzAyIDcuNDkxMDU4OGMuMTI0LjE5NzI5NDIuMzM3NS4zMTY1ODgzLjU2NzUuMzE2NTg4M2g2LjA4MWMuNTQ1IDAgLjg2NDUtLjYyNTAxOTYuNTUyLTEuMDgwMjc0NWwtNC45MzQ1LTcuMTkxODA0Yy0uMTE4LS4xNzI4MjM1LS4wNTc1LS40MTI0MzEzLjEyOC0uNTA0NzA1OCAzLjE1MDUtMS41Njk2ODYzIDQuOTc5NS0zLjE3ODExNzcgNS41ODMtNy42NTAxMTc3LjY5MzUtNS44NzcwMTk2LTIuOTE3LTguNjM4MTE3NjMtNy45ODY1LTguNjM4MTE3NjMiLz48L3N2Zz4=);\x0a\x09\x09\x09background-size:\x2063px\x2016px;\x0a\x09\x09\x09padding-left:\x2073px;\x0a\x09\x09}\x0a\x09\x09.toast.toast-spotify\x20{\x0a\x09\x09\x09background-color:\x20#1DB954;\x0a\x09\x09}\x0a\x09\x09.toast.toast-spotify.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwOC41MiA1MDguNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwOC41MiA1MDguNTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTI1NC4yNiwwQzExMy44NDUsMCwwLDExMy44NDUsMCwyNTQuMjZzMTEzLjg0NSwyNTQuMjYsMjU0LjI2LDI1NC4yNiAgICAgczI1NC4yNi0xMTMuODQ1LDI1NC4yNi0yNTQuMjZTMzk0LjY3NSwwLDI1NC4yNiwweiBNMzcxLjY5Niw0MDMuMjg4Yy0zLjE3OCw1LjgxNi05LjEyMiw5LjA1OC0xNS4yODcsOS4wNTggICAgIGMtMi44NiwwLTUuNzIxLTAuNjY3LTguNDIyLTIuMTI5Yy00MC43MTMtMjIuNDM4LTg2Ljk1Ny0zNC4yOTMtMTMzLjY3Ny0zNC4yOTNjLTI4LDAtNTUuNjUxLDQuMTYzLTgyLjEyNiwxMi4zNjMgICAgIGMtOS4yMTcsMi44Ni0xOS4wMDYtMi4yODgtMjEuODM1LTExLjUzN2MtMi44Ni05LjE4NSwyLjI4OC0yOC43LDExLjUzNy0zMS41OTJjMjkuODQ0LTkuMjQ5LDYwLjk1OS0xMy45MjEsOTIuNDU1LTEzLjkyMSAgICAgYzUyLjU2OCwwLDEwNC42NiwxMy4zNDksMTUwLjUyMiwzOC42MTZDMzczLjMxNywzNzQuNDYxLDM3Ni40LDM5NC44NjYsMzcxLjY5Niw0MDMuMjg4eiBNNDA0LjAxOSwzMDcuNTI3ICAgICBjLTMuNjIzLDcuMDI0LTEwLjc0MiwxOC4zMzgtMTguMDg0LDE4LjMzOGMtMy4yMSwwLTYuMzg4LTAuNjk5LTkuMzc2LTIuMzJjLTUwLjQ3MS0yNi4xODktMTA1LjA0MS0zOS40NzQtMTYyLjIxOC0zOS40NzQgICAgIGMtMzEuNDk2LDAtNjIuNzcsNC4xMzItOTIuOTY0LDEyLjQ1OWMtMTAuOTAxLDIuOTU2LTIyLjA4OS0zLjQwMS0yNS4wNDUtMTQuMzAyYy0yLjkyNC0xMC45MDEsMy40NjQtMjkuNDMxLDE0LjMzNC0zMi4zODYgICAgIGMzMy42ODktOS4xODUsNjguNTg3LTEzLjg1NywxMDMuNjc0LTEzLjg1N2M2Mi44OTgsMCwxMjUuNDQ1LDE1LjI1NiwxODAuOTM4LDQ0LjExNCAgICAgQzQwNS4yOSwyODUuMjQ4LDQwOS4xOTksMjk3LjUxNiw0MDQuMDE5LDMwNy41Mjd6IE00MTcuNTI2LDIzMC44MzZjLTMuNDY0LDAtNy4wMjQtMC43OTUtMTAuMzYxLTIuNDQ3ICAgICBjLTYwLjIyOC0zMC4wMzQtMTI1LjA5Ni00NS4yMjYtMTkyLjc2MS00NS4yMjZjLTM1LjI3OSwwLTcwLjQzLDQuMjkxLTEwNC41MzMsMTIuNzEzYy0xMi41MjIsMy4wODMtMjUuMTQtNC41MTMtMjguMjIzLTE3LjAwNCAgICAgYy0zLjExNS0xMi40NTksNC41MTMtMjcuNTU1LDE3LjAwNC0zMC42MzhjMzcuNzI2LTkuMzc2LDc2LjY1OS0xNC4xMTEsMTE1LjcyLTE0LjExMWM3NC45NzUsMCwxNDYuODY3LDE2Ljg3NywyMTMuNTc4LDUwLjEyMSAgICAgYzExLjUzNyw1Ljc1MywxNi4yNDEsMTkuNzM3LDEwLjQ4OCwzMS4yNDJDNDM0LjMwOCwyMjMuNjUzLDQyNi4xMDgsMjMwLjgzNiw0MTcuNTI2LDIzMC44MzZ6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);\x0a\x09\x09}\x0a\x09\x09.toast.toast-streamermode\x20{\x0a\x09\x09\x09background-color:\x20#593695;\x0a\x09\x09}\x0a\x09\x09.toast.toast-streamermode.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjUgLTI1IDU0MiA1NDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxwYXRoIGQ9Ik00ODguMywxNDIuNXYyMDMuMWMwLDE1LjctMTcsMjUuNS0zMC42LDE3LjdsLTg0LjYtNDguOHYxMy45YzAsNDEuOC0zMy45LDc1LjctNzUuNyw3NS43SDc1LjdDMzMuOSw0MDQuMSwwLDM3MC4yLDAsMzI4LjQgICBWMTU5LjljMC00MS44LDMzLjktNzUuNyw3NS43LTc1LjdoMjIxLjhjNDEuOCwwLDc1LjcsMzMuOSw3NS43LDc1Ljd2MTMuOWw4NC42LTQ4LjhDNDcxLjMsMTE3LDQ4OC4zLDEyNi45LDQ4OC4zLDE0Mi41eiIgZmlsbD0iI0ZGRkZGRiIvPjwvc3ZnPg==);\x0a\x09\x09}\x0a\x09\x09.toast.toast-success\x20{\x0a\x09\x09\x09background-color:\x20#43B581;\x0a\x09\x09}\x0a\x09\x09.toast.toast-success.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXoiLz48L3N2Zz4=);\x0a\x09\x09}\x0a\x0a\x09\x09.toast.toast-warning,\x0a\x09\x09.toast.toast-warn\x20{\x0a\x09\x09\x09background-color:\x20#FFA600;\x0a\x09\x09}\x0a\x09\x09.toast.toast-warning.icon,\x0a\x09\x09.toast.toast-warn.icon\x20{\x0a\x09\x09\x09background-image:\x20url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0eiIvPjwvc3ZnPg==);\x0a\x09\x09}\x0a\x09\x09.quickSelectPopout\x20{\x0a\x09\x09\x09min-width:\x20210px\x20!important;\x0a\x09\x09\x09position:\x20relative\x20!important;\x0a\x09\x09\x09width:\x20auto\x20!important;\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['modalsizelarge'] + '\x20{\x0a\x09\x09\x09max-height:\x2080vh;\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + (BDFDB['dotCN']['title'] + BDFDB['notCN']['cursorpointer']) + ',\x0a\x09\x09.BDFDB-settings\x20' + (BDFDB['dotCN']['title'] + BDFDB['notCN']['cursorpointer']) + '\x20{\x0a\x09\x09\x09cursor:\x20default\x20!important;\x0a\x09\x09}\x0a\x09\x09.BDFDB-settings\x20.BDFDB-settings-inner\x20{\x0a\x09\x09\x09padding-left:\x2015px;\x0a\x09\x09\x09padding-right:\x205px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-settings\x20.BDFDB-settings-inner-list\x20{\x0a\x09\x09\x09padding-left:\x2015px;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20.numberinput-buttons-zone:hover\x20+\x20' + BDFDB['dotCN']['input'] + '\x20{\x0a\x09\x09\x09border-color:\x20black;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20.numberinput-buttons-zone:hover\x20+\x20' + BDFDB['dotCN']['input'] + ':focus,\x0a\x09\x09.inputNumberWrapper\x20.numberinput-buttons-zone.pressed\x20+\x20' + BDFDB['dotCN']['input'] + '\x20{\x0a\x09\x09\x09border-color:\x20#7289da;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20{\x0a\x09\x09\x09position:\x20relative\x20!important;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20' + BDFDB['dotCN']['input'] + '[type=number]\x20{\x0a\x09\x09\x09padding-right:\x2025px;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper.inputNumberWrapperMini\x20' + BDFDB['dotCN']['input'] + '[type=number]\x20{\x0a\x09\x09\x09padding-left:\x206px;\x0a\x09\x09\x09padding-right:\x2017px;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20' + BDFDB['dotCN']['input'] + '[type=number]::-webkit-inner-spin-button,\x20\x0a\x09\x09.inputNumberWrapper\x20' + BDFDB['dotCN']['input'] + '[type=number]::-webkit-outer-spin-button{\x0a\x09\x09\x09-webkit-appearance:\x20none;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20.numberinput-buttons-zone\x20{\x0a\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09flex-direction:\x20column;\x0a\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09justify-content:\x20space-around;\x0a\x09\x09\x09height:\x20110%;\x0a\x09\x09\x09right:\x208px;\x0a\x09\x09\x09top:\x20-5%;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper.inputNumberWrapperMini\x20.numberinput-buttons-zone\x20{\x0a\x09\x09\x09right:\x204px;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20.numberinput-button-up\x20{\x0a\x09\x09\x09border-color:\x20transparent\x20transparent\x20#999\x20transparent;\x0a\x09\x09\x09border-style:\x20solid;\x0a\x09\x09\x09border-width:\x202.5px\x205px\x205px\x205px;\x0a\x09\x09\x09display:\x20inline-block;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20.numberinput-button-up:hover\x20{\x0a\x09\x09\x09border-bottom-color:\x20#666;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themelight'] + '\x20.inputNumberWrapper\x20.numberinput-button-up\x20{\x0a\x09\x09\x09border-bottom-color:\x20#dcddde;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themelight'] + '\x20.inputNumberWrapper\x20.numberinput-button-up:hover\x20{\x0a\x09\x09\x09border-bottom-color:\x20#4f545c;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themedark'] + '\x20.inputNumberWrapper\x20.numberinput-button-up\x20{\x0a\x09\x09\x09border-bottom-color:\x20#72767d;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themedark'] + '\x20.inputNumberWrapper\x20.numberinput-button-up:hover\x20{\x0a\x09\x09\x09border-bottom-color:\x20#f6f6f7;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20.numberinput-button-down\x20{\x0a\x09\x09\x09border-color:\x20#999\x20transparent\x20transparent\x20transparent;\x0a\x09\x09\x09border-style:\x20solid;\x0a\x09\x09\x09border-width:\x205px\x205px\x202.5px\x205px;\x0a\x09\x09\x09display:\x20inline-block;\x0a\x09\x09}\x0a\x09\x09.inputNumberWrapper\x20.numberinput-button-down:hover\x20{\x0a\x09\x09\x09border-top-color:\x20#666;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themelight'] + '\x20.inputNumberWrapper\x20.numberinput-button-down\x20{\x0a\x09\x09\x09border-top-color:\x20#dcddde;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themelight'] + '\x20.inputNumberWrapper\x20.numberinput-button-down:hover\x20{\x0a\x09\x09\x09border-top-color:\x20#4f545c;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themedark'] + '\x20.inputNumberWrapper\x20.numberinput-button-down\x20{\x0a\x09\x09\x09border-top-color:\x20#72767d;\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themedark'] + '\x20.inputNumberWrapper\x20.numberinput-button-down:hover\x20{\x0a\x09\x09\x09border-top-color:\x20#f6f6f7;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['select'] + '\x20{\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectcontrol'] + '\x20{\x0a\x09\x09\x09-webkit-box-align:\x20center;\x0a\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09flex-wrap:\x20wrap;\x0a\x09\x09\x09-webkit-box-pack:\x20justify;\x0a\x09\x09\x09justify-content:\x20space-between;\x0a\x09\x09\x09min-height:\x2040px;\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09\x09border-radius:\x203px;\x0a\x09\x09\x09border-style:\x20solid;\x0a\x09\x09\x09border-width:\x201px;\x0a\x09\x09\x09transition:\x20border\x200.15s\x20ease\x200s;\x0a\x09\x09\x09outline:\x200px\x20!important;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectcontrollight'] + '\x20{\x0a\x09\x09\x09background-color:\x20rgba(79,\x2084,\x2092,\x200.02);\x0a\x09\x09\x09background-color:\x20rgba(79,\x2084,\x2092,\x200.02);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectcontroldark'] + '\x20{\x0a\x09\x09\x09background-color:\x20rgba(0,\x200,\x200,\x200.1);\x0a\x09\x09\x09border-color:\x20rgba(0,\x200,\x200,\x200.3);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectvalue'] + '\x20{\x0a\x09\x09\x09-webkit-box-align:\x20center;\x0a\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09flex-wrap:\x20wrap;\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09\x09flex:\x201\x201\x200%;\x0a\x09\x09\x09padding:\x202px\x208px;\x0a\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectsingle'] + '\x20{\x0a\x09\x09\x09margin-left:\x202px;\x0a\x09\x09\x09margin-right:\x202px;\x0a\x09\x09\x09max-width:\x20calc(100%\x20-\x208px);\x0a\x09\x09\x09width:\x20calc(100%\x20-\x208px);\x0a\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09text-overflow:\x20ellipsis;\x0a\x09\x09\x09white-space:\x20nowrap;\x0a\x09\x09\x09top:\x2050%;\x0a\x09\x09\x09transform:\x20translateY(-50%);\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectsinglelight'] + '\x20{\x0a\x09\x09\x09color:\x20rgb(32,\x2034,\x2037);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectsingledark'] + '\x20{\x0a\x09\x09\x09color:\x20rgb(246,\x20246,\x20247);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectdummyinput'] + '\x20{\x0a\x09\x09\x09font-size:\x20inherit;\x0a\x09\x09\x09width:\x201px;\x0a\x09\x09\x09color:\x20transparent;\x0a\x09\x09\x09left:\x20-100px;\x0a\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09transform:\x20scale(0);\x0a\x09\x09\x09background:\x200px\x20center;\x0a\x09\x09\x09border-width:\x200px;\x0a\x09\x09\x09border-style:\x20initial;\x0a\x09\x09\x09border-color:\x20initial;\x0a\x09\x09\x09border-image:\x20initial;\x0a\x09\x09\x09outline:\x200px;\x0a\x09\x09\x09padding:\x200px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectarrowzone'] + '\x20{\x0a\x09\x09\x09-webkit-box-align:\x20center;\x0a\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09align-self:\x20stretch;\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09flex-shrink:\x200;\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectarrowcontainer'] + '\x20{\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09opacity:\x200.3;\x0a\x09\x09\x09padding:\x208px\x208px\x208px\x200px;\x0a\x09\x09\x09transition:\x20color\x20150ms\x20ease\x200s;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectarrowcontainerlight'] + '\x20{\x0a\x09\x09\x09color:\x20rgb(32,\x2034,\x2037);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectarrowcontainerdark'] + '\x20{\x0a\x09\x09\x09color:\x20rgb(246,\x20246,\x20247);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectarrow'] + '\x20{\x0a\x09\x09\x09display:\x20inline-block;\x0a\x09\x09\x09fill:\x20currentcolor;\x0a\x09\x09\x09line-height:\x201;\x0a\x09\x09\x09stroke:\x20currentcolor;\x0a\x09\x09\x09stroke-width:\x200;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectmenuouter'] + '\x20{\x0a\x09\x09\x09top:\x20100%;\x0a\x09\x09\x09margin-bottom:\x20-1px;\x0a\x09\x09\x09margin-top:\x20-1px;\x0a\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09width:\x20100%;\x0a\x09\x09\x09z-index:\x20100;\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09\x09border-radius:\x200px\x200px\x203px\x203px;\x0a\x09\x09\x09border-width:\x201px;\x0a\x09\x09\x09border-style:\x20solid;\x0a\x09\x09\x09border-image:\x20initial;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectmenuouterlight'] + '\x20{\x0a\x09\x09\x09background-color:\x20rgb(255,\x20255,\x20255);\x0a\x09\x09\x09border-color:\x20rgb(185,\x20187,\x20190);\x0a\x09\x09\x09color:\x20rgb(32,\x2034,\x2037);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectmenuouterdark'] + '\x20{\x0a\x09\x09\x09background-color:\x20rgb(47,\x2049,\x2054);\x0a\x09\x09\x09border-color:\x20rgb(32,\x2034,\x2037);\x0a\x09\x09\x09color:\x20rgb(246,\x20246,\x20247);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectmenu'] + '\x20{\x0a\x09\x09\x09max-height:\x20300px;\x0a\x09\x09\x09overflow-y:\x20auto;\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09\x09padding:\x200px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectmenu'] + '::-webkit-scrollbar\x20{\x0a\x09\x09\x09width:\x208px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectmenu'] + '::-webkit-scrollbar-thumb\x20{\x0a\x09\x09\x09background-color:\x20rgba(0,\x200,\x200,\x200.4);\x0a\x09\x09\x09background-clip:\x20padding-box;\x0a\x09\x09\x09border-color:\x20transparent;\x0a\x09\x09\x09border-radius:\x204px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectmenu'] + '::-webkit-scrollbar-track-piece\x20{\x0a\x09\x09\x09background-color:\x20transparent;\x0a\x09\x09\x09border-color:\x20transparent;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectoption'] + '\x20{\x0a\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09font-size:\x20inherit;\x0a\x09\x09\x09width:\x20100%;\x0a\x09\x09\x09user-select:\x20none;\x0a\x09\x09\x09-webkit-tap-highlight-color:\x20rgba(0,\x200,\x200,\x200);\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09\x09-webkit-box-align:\x20center;\x0a\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09min-height:\x2040px;\x0a\x09\x09\x09padding:\x208px\x2012px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectoptionlight'] + '\x20{\x0a\x09\x09\x09background-color:\x20transparent;\x0a\x09\x09\x09color:\x20rgb(32,\x2034,\x2037);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectoptiondark'] + '\x20{\x0a\x09\x09\x09background-color:\x20transparent;\x0a\x09\x09\x09color:\x20rgb(246,\x20246,\x20247);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectoptionhoverlight'] + '\x20{\x0a\x09\x09\x09background-color:\x20rgb(246,\x20246,\x20247);\x0a\x09\x09\x09color:\x20rgb(32,\x2034,\x2037);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectoptionhoverdark'] + '\x20{\x0a\x09\x09\x09background-color:\x20rgba(0,\x200,\x200,\x200.1);\x0a\x09\x09\x09color:\x20rgb(246,\x20246,\x20247);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectoptionselectlight'] + '\x20{\x0a\x09\x09\x09background-color:\x20rgb(220,\x20221,\x20222);\x0a\x09\x09\x09color:\x20rgb(32,\x2034,\x2037);\x0a\x09\x09}\x0a\x09\x09.BDFDB-select\x20' + BDFDB['dotCN']['selectoptionselectdark'] + '\x20{\x0a\x09\x09\x09background-color:\x20rgba(0,\x200,\x200,\x200.2);\x0a\x09\x09\x09color:\x20rgb(246,\x20246,\x20247);\x0a\x09\x09}\x0a\x09\x09.BDFDB-settings\x20' + BDFDB['dotCN']['hovercard'] + ',\x0a\x09\x09.BDFDB-settings\x20' + (BDFDB['dotCNS']['hovercard'] + BDFDB['dotCN']['hovercardinner']) + '\x20{\x0a\x09\x09\x09width:\x20550px;\x0a\x09\x09\x09min-height:\x2028px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-settingsmodal\x20.BDFDB-settings\x20{\x0a\x09\x09\x09margin-bottom:\x2020px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-settingsmodal\x20.BDFDB-settings\x20' + BDFDB['dotCN']['hovercard'] + ',\x0a\x09\x09.BDFDB-settingsmodal\x20.BDFDB-settings\x20' + (BDFDB['dotCNS']['hovercard'] + BDFDB['dotCN']['hovercardinner']) + '\x20{\x0a\x09\x09\x09width:\x20520px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-settings\x20' + BDFDB['dotCN']['hovercard'] + ':before\x20{\x0a\x09\x09\x09z-index:\x2050;\x0a\x09\x09\x09left:\x20-10px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-settings\x20' + (BDFDB['dotCNS']['hovercard'] + BDFDB['dotCN']['hovercardinner']) + '\x20{\x0a\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09z-index:\x20100;\x0a\x09\x09}\x0a\x09\x09.BDFDB-settings\x20' + (BDFDB['dotCNS']['hovercard'] + BDFDB['dotCN']['hovercardbutton']) + '\x20{\x0a\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09right:\x20-31px;\x0a\x09\x09\x09top:\x20-12px;\x0a\x09\x09\x09z-index:\x20200;\x0a\x09\x09}\x09\x09\x0a\x09\x09.BDFDB-settings\x20' + BDFDB['dotCN']['hovercard'] + ':hover\x20' + BDFDB['dotCN']['hovercardbutton'] + '\x20{\x0a\x09\x09\x09opacity:\x201;\x0a\x09\x09}\x09\x09\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['checkboxcontainer'] + ',\x0a\x09\x09.BDFDB-settings\x20' + BDFDB['dotCN']['checkboxcontainer'] + '\x20{\x0a\x09\x09\x09margin-left:\x2010px;\x0a\x09\x09}\x09\x09\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['checkboxcontainer'] + ':before,\x0a\x09\x09.BDFDB-settings\x20' + BDFDB['dotCN']['checkboxcontainer'] + ':before\x20{\x0a\x09\x09\x09display:\x20none;\x0a\x09\x09}\x09\x0a\x09\x09.BDFDB-modal\x20.swatches.disabled\x20{\x0a\x09\x09\x09cursor:\x20no-drop;\x0a\x09\x09\x09filter:\x20grayscale(70%)\x20brightness(50%);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20.swatches\x20.ui-color-picker-row\x20{\x0a\x09\x09\x09display:\x20flex\x20!important;\x20\x0a\x09\x09\x09flex-wrap:\x20wrap\x20!important;\x20\x0a\x09\x09\x09overflow:\x20visible\x20!important;\x0a\x09\x09\x09min-width:\x20482px\x20!important;\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20.swatches\x20.ui-color-picker-swatch\x20{\x0a\x09\x09\x09box-sizing:\x20border-box;\x0a\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09min-width:\x2030px;\x0a\x09\x09\x09min-height:\x2030px;\x0a\x09\x09\x09margin-bottom:\x205px;\x0a\x09\x09\x09margin-top:\x205px;\x0a\x09\x09\x09border:\x204px\x20solid\x20transparent;\x0a\x09\x09\x09border-radius:\x2012px;\x0a\x09\x09}\x09\x09\x0a\x09\x09.BDFDB-modal\x20.swatches.disabled\x20.ui-color-picker-swatch\x20{\x0a\x09\x09\x09cursor:\x20no-drop;\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20.swatches\x20.ui-color-picker-swatch.large\x20{\x0a\x09\x09\x09min-width:\x2070px;\x0a\x09\x09\x09min-height:\x2070px;\x0a\x09\x09\x09border-radius:\x2025px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20.swatches\x20.ui-color-picker-swatch.nocolor\x20{\x0a\x09\x09\x09border-color:\x20red;\x0a\x09\x09\x09background:\x20url(\x27data:image/svg+xml;\x20utf8,\x20<svg\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M\x200\x200\x20l\x2022\x2022\x20M\x2022\x200\x20l\x20-22\x2022\x22\x20stroke=\x22red\x22\x20stroke-width=\x223\x22/></svg>\x27)\x20center/contain;\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20.swatches\x20.ui-color-picker-swatch.nocolor.selected\x20{\x0a\x09\x09\x09border-color:\x20black;\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20.swatches\x20.color-picker-dropper\x20{\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09left:\x2040px;\x0a\x09\x09\x09top:\x2010px;\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + '.valid\x20{\x0a\x09\x09\x09background-color:\x20rgba(67,181,129,.5);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + '.valid:hover\x20{\x0a\x09\x09\x09border-color:\x20rgb(27,141,89);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + '.valid:focus\x20{\x0a\x09\x09\x09border-color:\x20rgb(67,181,129);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + '.valid::placeholder\x20{\x0a\x09\x09\x09color:\x20rgba(67,181,129,.7);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + '.invalid\x20{\x0a\x09\x09\x09background-color:\x20rgba(241,71,71,.5);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + '.invalid:hover\x20{\x0a\x09\x09\x09border-color:\x20rgb(201,31,31);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + '.invalid:focus\x20{\x0a\x09\x09\x09border-color:\x20rgb(241,71,71);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + '.invalid::placeholder\x20{\x0a\x09\x09\x09color:\x20rgba(241,71,71,.7);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['inputdefault'] + ':disabled\x20{\x0a\x09\x09\x09color:\x20#555555;\x0a\x09\x09\x09cursor:\x20no-drop;\x0a\x09\x09\x09background-color:\x20rgba(0,0,0,.5);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20' + BDFDB['dotCN']['tabbarcontainer'] + '\x20{\x0a\x09\x09\x09border:\x20none\x20!important;\x0a\x09\x09\x09background:\x20rgba(0,0,0,.1);\x0a\x09\x09\x09box-shadow:\x200\x202px\x203px\x200\x20rgba(0,0,0,.05);\x0a\x09\x09}\x0a\x09\x09' + BDFDB['dotCN']['themedark'] + '\x20.BDFDB-modal\x20' + BDFDB['dotCN']['tabbarcontainer'] + '\x20{\x0a\x09\x09\x09background:\x20rgba(0,0,0,.2);\x0a\x09\x09\x09box-shadow:\x200\x202px\x203px\x200\x20rgba(0,0,0,.1);\x0a\x09\x09}\x0a\x09\x09.BDFDB-modal\x20.tab-content:not(.open)\x20{\x0a\x09\x09\x09display:\x20none;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-container\x20{\x0a\x09\x09\x09padding:\x2010px\x2010px\x2010px\x2030px;\x0a\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09\x09display:\x20initial;\x0a\x09\x09\x09margin:\x20auto;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-color,\x0a\x09\x09.colorpicker-modal\x20.colorpicker-slider,\x0a\x09\x09.colorpicker-modal\x20.colorpicker-controls\x20{\x0a\x09\x09\x09float:\x20left;\x0a\x09\x09\x09margin-right:\x2020px;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-inputs\x20{\x0a\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09width:\x20150px;\x0a\x09\x09\x09padding:\x203px\x203px\x203px\x2010px;\x0a\x09\x09\x09margin-top:\x2087px;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-pickerpane,\x20\x0a\x09\x09.colorpicker-modal\x20.colorpicker-black,\x20\x0a\x09\x09.colorpicker-modal\x20.colorpicker-white,\x20\x0a\x09\x09.colorpicker-modal\x20.colorpicker-color\x20{\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09top:\x200px;\x0a\x09\x09\x09left:\x200px;\x0a\x09\x09\x09height:\x20308px;\x0a\x09\x09\x09width:\x20308px;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-pickercursor\x20{\x0a\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09height:\x2014px;\x0a\x09\x09\x09width:\x2014px;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-pickercursor\x20svg\x20{\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09height:\x2014px;\x0a\x09\x09\x09width:\x2014px;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-sliderpane,\x20\x0a\x09\x09.colorpicker-modal\x20.colorpicker-slider\x20{\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09top:\x200px;\x0a\x09\x09\x09left:\x200px;\x0a\x09\x09\x09height:\x20308px;\x0a\x09\x09\x09width:\x2020px;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-slidercursor\x20{\x0a\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09left:\x20-6px;\x0a\x09\x09\x09height:\x2012px;\x0a\x09\x09\x09width:\x2032px;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-slidercursor\x20svg\x20{\x0a\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09height:\x2012px;\x0a\x09\x09\x09width:\x2032px;\x0a\x09\x09}\x09\x0a\x09\x09.colorpicker-modal\x20[class^=\x22colorpicker-preview-\x22]\x20{\x0a\x09\x09\x09background-color:\x20#808080;\x0a\x09\x09\x09border:\x203px\x20solid\x20transparent;\x0a\x09\x09\x09height:\x2065px;\x0a\x09\x09\x09width:\x2080px;\x0a\x09\x09\x09float:\x20left;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-preview-0\x20{\x0a\x09\x09\x09border-radius:\x205px\x200\x200\x205px;\x0a\x09\x09\x09border-right:\x20none;\x0a\x09\x09}\x0a\x09\x09.colorpicker-modal\x20.colorpicker-preview-2\x20{\x0a\x09\x09\x09border-radius:\x200\x205px\x205px\x200;\x0a\x09\x09\x09border-left:\x20none;\x0a\x09\x09}');
    BDFDB['addEventListener'](BDFDB, document, 'click.BDFDBPluginClick', '.bd-settingswrap\x20.bd-refresh-button,\x20.bd-settingswrap\x20.bd-switch-checkbox', () => {
        BDFDB['setPluginCache']();
        BDFDB['setThemeCache']();
    });
    var sa = {};
    BDFDB['addEventListener'](BDFDB, document, 'keydown.BDFDBPressedKeys', sb => {
        if (!BDFDB['pressedKeys']['includes'](sb['which'])) {
            clearTimeout(sa[sb['which']]);
            BDFDB['pressedKeys']['push'](sb['which']);
            sa[sb['which']] = setTimeout(() => {
                BDFDB['removeFromArray'](BDFDB['pressedKeys'], sb['which'], !![]);
            }, 0xea60);
        }
    });
    BDFDB['addEventListener'](BDFDB, document, 'keyup.BDFDBPressedKeys', sc => {
        BDFDB['removeFromArray'](BDFDB['pressedKeys'], sc['which'], !![]);
    });
    BDFDB['addEventListener'](BDFDB, document, 'mousedown.BDFDBMousePosition', sd => {
        BDFDB['mousePosition'] = sd;
    });
    BDFDB['patchModules'] = {
        'V2C_List': 'componentDidMount',
        'V2C_PluginCard': ['componentDidMount', 'componentDidUpdate'],
        'V2C_ThemeCard': ['componentDidMount', 'componentDidUpdate'],
        'UserPopout': ['componentDidMount'],
        'UserProfile': ['componentDidMount'],
        'Message': ['componentDidMount', 'componentDidUpdate', 'render'],
        'MessageOptionPopout': 'componentDidMount'
    };
    BDFDB['WebModules']['unpatchall'](BDFDB);
    var se = {};
    BDFDB['WebModules']['patch'](BDFDB['WebModules']['findByProperties']('getGuilds', 'getGuild'), 'getGuild', BDFDB, {
        'after': sf => {
            if (sf['returnValue'] && sf['methodArguments'][0x0] == '410787888507256842' && !sf['returnValue']['banner']) {
                sf['returnValue']['banner'] = 'data:image/png;base64,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W7fu537u5xYtWjQ9Pd3tdp/VUxEPTsLqdruVSmVqaurgJKzJycnp6enp6empqamD/xwbG9u6dWtPT8/Y2Nj+/fsPHDhw4MCBvXv3HjhwIMuy4eHhOT0kzzzzzDe84Q2XXnrpypUri//dbt26dWhoyA8SAOY6BRYA80R7bGd7bGeBCyxm1H/ceyjmsZvHpP3vu1yFJEm+vwFWVksrPUmyIOtdFpaelMSYhCR2252p4c7Ens7Yzu7U/uaBzc2990zvuDUmMcm7sduOSRJCJWSVws7PCiF0u90777xz06ZNX/7yl9/whje84Q1v6O/vn7kjDg4O/tCvxMcsko0xhhA6nc7ExMTU1NTExMTY2NjExESe5/v379+5c+fu3bu3bt360EMPNZvNRx55JE3T4q9JXLFixVvf+taf+ImfOO644+bKe+O+++5rtVp+RgAw5+/2ivmoFAA4/GtauuyF/33hGW+UBIcgJo9ZhBi+/7DCENIkhBjz2J7OO9N5a6w9um161x2TO+9ojzzSbY51J3bnnWaa1UNWSUL6w8VZEf5iMR5czddoNNavX/+2t73tFa94xbJlywr1TeZ53ul0frDqcHp6evPmzTfeeOPevXs3bdq0c+fOiYmJ4eHhPM8PLlEsgtWrV1966aU/8zM/s3bt2izL5spA37Zt2y//8i/fcsst3vMAzPmbfQUWAPPGglN/atlFvxVST/rjGd0dJckPiq0kJiGENIQsbw5P73twavut0/vua+3f0BzaHNtTIasmSZqkaQhp0f4aBxf6tdvtCy644E1vetOll166bNmywj4mL8/zg9OvYoy7du168MEH77vvvna7fccdd2zatGl6enrv3r3dbvcHf2zWNBqN00477cUvfvFrX/vaY489dg5VVwddd911v/qrv7p7925vbADm/C2aAguAeaO2+IRVL/tobdEJomAGbprSNKuFak/eHGsNb2kNbZ7edcfE1htaBzbmnWbsNkOShqz6/Q2zCmRiYiLGeP755//Mz/zMq171qqLNxnoSMcY9e/bs27dvcnLy/vvvv/feezdv3rxly5bx8fGpqamDs7dm7ugLFy487bTTfvqnf/olL3nJ4sVzcm1yjPEv/uIv/viP/9jbF4D5cC+mwAJgPln143/Uf8JLC7iwi3khJjEJWRayRsiqeWe62xzpjGwf33z1xJbvdMZ2tUa3J3k3hJCkWUirSZol8chv6pSmaafTGRsby7Ls/PPP/y//5b9ccsklc+4OsNvtNpvNgztqbdy48aabbtq2bdsdd9yxb9++vXv3PosH6unpWbFixYUXXvjKV176nOecOzAwMHfH6+jo6K/92q9deeWV3roAzAMKLADmlQWnvnbZRb8VKrWk8LtBM5fFJCZJloW0FkKapFnenmruuXt807fbw5un9tzTHn4ktqdjkqS13pDVkhiP+L7vIYSDu011u92LL774DW94w+te97of3YV9brnrrrs2bdp0991333bbbXv37t2+ffv09PTTW2NYr9ePPvro5z3veeecc875559/4oknzoNheu+9977jHe/YuHGjdywA84ACC4B5JetZctxPfyHrXxo7TWkw82KSJElIk5CmWU9a6+lM7G0deGhq5+0Tm/9tatc9nYm9eXs8q/WHal8ROqwkSfI8HxkZybLsTW960y//8i+fc845c/0cdDqdRx55ZGpq6vrrr7/hhhu2bNmyc+fOoaGhQ/naarV63HHHPec5z7noogtPOunk0047bT6Nzv/zf/7P7/zO73S7XW9UAOYBBRYA86tOiPGoSz/ev+4/xU77iPcFlHAAhqye1vpizLsTe5tDmye3XDe1/XvTu+9pj24Ntf600jh4A3ZkB2eaps1mc2JiYv369a9//et/6qd+6tRTT50H6U9PT4+Pj2/fvv2WW27ZuXPnTTfddN99942Njf3on+zv7z/llFNOP/30008//eyzzz7uuON6enrm2VgcHR39rd/6rX/5l3/xtgRgflBgATC/+oPO9ILTX7/qP304xjzm5h1wREZhTNIsrfYmaZp0u92p/dO7757cftPo/f/a3P9gWqknIQtpLQlHuMbK83x8fDxJktNOO+3d7373ZZddNm/OQLfbTdP0vvvu27hx49VXX33fffc9/PDDK1asWLVq1bnnnnv00UevXLnyhBNOWLlyZbU6bx9aes8997z+9a8fHh72jgRgflBgATC/qoNOs7Zk3dGv/l/VhcfETksgHMHBmCTh4FbuIYTYabVGt03vunP0wa9Obb+p2xpLut202nPEH1nYbrdbrVZfX9+ll176u7/7uyecMN8e4jk8PDw6OtpsNnt7e3t6ehYuXJim6fwffDH+7d/+7fve9z7vQwDmjWxOP1oFAH5YSLuT+6qDR/WsPj/J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1q37+Mc//tKXvrRsyW/evPn973//1VdffXD3egDg2aLAAgCYT2JaX9Cd3L/vux8/cOv/TpKQNgafyZbth9VehRCGhobWr1//8Y9//Md+7MfKFv23vvWtv/qrv/rud79rFALAs06BBUA5hVnbxxpmU1YfnN53/95rPzZ2/78kWS2t9SVx9qYCjYyMrF+//s///M/LtnJwdHT0//7f//u5z31u48aNBiEAzAQFFgAlFC0hZP6N6pBWQ6Uxvunbe6//2NSOW0O1L1Rqs9lejY+Pr1279uMf/3jZ2qtOp/PHf/zHX/jCF0ZHRw1EAJghCiwASiiYgcX8EtNab2y3DnzvU/tv+mRneiSt9iYhm832anJy8oQTTviTP/mTl7zkJSXKPcY777zz05/+9Je+9CVbtgPAjFJgAQDMXTEJWVrva+3ftO+7fzn2wL/GmKeV+ixXtNPT08cff/zHPvaxUu3a3m63v/KVr/z5n//5xo0bY1SIA8DMUmABAMxRIVTqSZqNP/iNvdf98dTue9JaX0hn++7u4NyrP/3TPy1Pe5Xn+Z49ez7/+c9/8pOfnJycNBABYBYosAAA5pwY0mrIap2JvUO3f+7AbZ/pTh7IGoOzubNbCCHP87GxsbVr1/7Zn/1Zefa9mp6evummm/78z//8pptusmwQAGaNAgsAYA6JSRLSal8SwvSOm/dc9xdjG67IGguyngWzuatbCCHGODw8fOKJJ5aqvdq2bdvf/d3ffeELX9i1a5exCACzSYEFQDkrAE8hZE4O3ZBWs8aC9viu0Xv++cBt/7u5f2Olb+mjg3q2HJx7tW/fvlNOOeXP//zPS7JycHR09K677vrkJz95ww03TE1NGYsAMMsUWACUkKcQMufEJMa01hey2thD3zxw299NPHRlzDtZY9Esj+QQQqvVGh4ePu+88z760Y++6EUvmvfRt9vtbdu2ffKTn7zxxhs3btxoLALAEaHAAqCUXYAZWMwtaTWrDXTHdx644/89cOtnOuO700pPWuud/faq2WzGGH/+53/+3e9+94knnjjvg5+env7c5z73xS9+8YEHHpienjYSAeBIUWABUEJmYDGHRmtIK715d3r47n88cOtnmnvujt1OVh9IQjbLYzhN08nJyb6+vne/+90///M/PzAwML+Dn56evvXWWz/96U9ff/31IyMjRiIAHFkKLACAYgqhUg8hTO28dd+Nn5zYdFUSQhLStNabJMnsN7AjIyOrVq36zd/8zbe+9a2Vyny+hxwZGdm1a9dnP/vZK664Yv/+/e1221gEgCNOgQVAOVlCSIGFNKRZkmatvRuG7/3C2IOXt0e2h2pPCOkR+XY6nU673X7hC1/427/92y960YvSNJ2fPxRi7HQ6d9xxxz//8z9fe+21W7Zs6XQ6BiMAFIQCC4CSNgSWEFLIgZmFrJrEbnt0x8g9Xxi771+aw5uTtJrW+md/xB582uD09HQI4Wd/9md/53d+Z9WqVfM1+MnJyTvvvPPyyy//5je/uWPHDrOuAKBoFFgAlJMZWBRqPMaQVUOlkSTd1tAjYxu/PnTH/9sZ3hKTJK31f3/Ezrbp6elWq3XMMcf81//6X3/pl36pVqvNy+wnJyfvvvvur3zlK1ddddWmTZsMRgAoJgUWAOVkBhbFEGPIammtL8ZOe2jL2MYrhu/6x+ndd6eVRqj0hnDEBur4+HiM8ZJLLnnPe97z3Oc+d/4F3263W63W1Vdffc0111xzzTWqKwAoOAUWACWtDczA4ogPwpBW0/pAbE9P77l7YvN3Ru/94tSuO2PMs57F3x+lR6a9GhkZOeqoo375l3/5Z37mZ5YtWzbPcp+cnBwaGrrqqqtuueWW66+/ftu2bcYiABSfAgsAYDbFJKQhrWS1gW5zZHzTVRMPXz3+0DdbBzbnncmsvjDJqknMj8h3FkLodrtDQ0Pnn3/++9///pe97GXzLPqhoaENGzZ885vfvO222+6///6RkRHbtAPAXKHAAqCcLCFk1j260VVPDDGf3D9y1z+Obf5Wc8+97bEdSZ6HrJr1Lk1iPCLtVZqmnU5nYmKiXq+/5S1veec733nyySfPp+z37Nlz/fXXf+lLX3rggQf27t07OTlpPALA3KLAAgCYaTFktVDti82R6Z23jj989djGbzT3PxTbEyGrhKweqlmShCQesVJ1fHw8SZK1a9f+6q/+6hvf+MaBgYF5EHqz2Txw4MDtt9/+3e9+9zvf+c7+/fv3799vLALAHKXAAqCkhYI9sJgNIYRQSauN1vju6Y3/Nv7Q10c3Xhk7zSRJkpCmtd7HjMMj017FGCcmJlatWvXWt771zW9+8+rVq9M0ndOR53m+adOmrVu33nnnnZdffvnevXuHhoZarZbBCABzmgILgJL2CpYQMlNDK4QQQpKEGJIkxtbQ5tENV0w+cl1z912d5lha7QtpJQlHviTK87zdbscYX/KSl3zgAx84++yz52511el08jw/uE7whhtueOCBB7Zu3To6OnrwL2hQAsA8oMACAHiGYpKEkFaSkIU0xJh3p0Y7k3um99w9vuHKqV13dif3xryTVhpZ/cgvzQshdDqddrtdrVbPPvvsX/7lX375y1/e398/F3Nvt9v79u2bmpq65ZZbbr311quvvnr//v1jY2NGJADMPwosAICnJcYkSUJWDZV6SEKM3e70cHP/xube+ya23Ti19cbOxJ4krYYQQloLWeOIT/oLIeR5PjEx0el0li1b9vM///O/8iu/snTp0rmSd57neZ6HEMbGxrZt27Z79+4NGzZ8/etfHxoaevDBB41HAJjfFFgAAIfl4HyralrrSdJa3p7oTu5vHtg8ueOW6R03Te+5t3VgU5KEtN6f1vqSJHx/veqRbK9CCEmSjI2NtVqt5cuX//iP//hrXvOaV77ylcXPut1uT05OdjqdycnJTZs23XPPPdPT0w8//PCGDRv27t27Y8cOwxEASkKBBQDwJA4WTyEJIUlCyKpppRHSandqqLn3gebww9N77p3a9r3W/g3t8d15azyt9WWNhUmaPuaRgke4uooxNpvNkZGRFStWXHrppZdddtnFF1/caDQKm3in0zlw4MDevXsnJyc3b958++2379q1a3R0dMeOHQe3Y5+amjIuAaBsFFgAAI8VH22c0jSELAlZkmYhJElIY0y6o9vH99w3vefOzsiO6X33tfZvzLvTsdNKQkgrPZX+5Uk8+ApHfuPwg9XV1NTU9PT0ggUL3va2t73+9a9/wQteUMzqqtVq7dix49577x0bG9u0adOWLVs2btw4OTm5a9euH2w2b2gCQJkpsAAop5gkQQr8+3iISZIkIU2TtBayakirMe/E9lTsTHSb463hh5u7757YcVNnbGd3Yl97fGcSkySkIYQQKmmjJwkhiUlSmJIlTdOJiYlWq7VgwYLLLrvszW9+8/nnn9/b23ukvp88zw8+KLDT6SRJ0u12x8bGDhw48Mgjj9xzzz179+7dvn37/v379+zZ0263h4aGjEgA4IcosAAop3DEd9SmICMhpFmSVkNWC1kltic6kwe6k/s643taI4+09j/UPLChNbQ5tqfyznTemUxiEtJKWmkkSUhC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';
            }
        }
    });
    BDFDB['WebModules']['patch'](BDFDB['WebModules']['findByProperties']('getGuildBannerURL'), 'getGuildBannerURL', BDFDB, {
        'instead': sg => {
            return sg['methodArguments'][0x0]['id'] == '410787888507256842' ? sg['methodArguments'][0x0]['banner'] : sg['callOriginalMethod']();
        }
    });
    se['processV2CList'] = function(sh, si) {
        if (window['PluginUpdates'] && window['PluginUpdates']['plugins'] && sh['_reactInternalFiber']['key'] && sh['_reactInternalFiber']['key']['split']('-')[0x0] == 'plugin') {
            var sj = document['querySelector'](BDFDB['dotCN']['_repofolderbutton']);
            if (sj) {
                var sk = BDFDB['htmlToElement']('<button\x20class=\x22bd-updatebtn\x20' + BDFDB['disCN']['_repofolderbutton'] + '\x22>Check\x20for\x20Updates</button>');
                sk['addEventListener']('click', () => {
                    BDFDB['checkAllUpdates']();
                });
                sk['addEventListener']('mouseenter', () => {
                    BDFDB['createTooltip']('Only\x20checks\x20for\x20updates\x20of\x20plugins,\x20which\x20support\x20the\x20updatecheck.\x20Rightclick\x20for\x20a\x20list\x20of\x20supported\x20plugins.', sk, {
                        'type': 'top',
                        'selector': 'update-button-tooltip',
                        'style': 'max-width:\x20420px'
                    });
                });
                sk['addEventListener']('contextmenu', () => {
                    if (window['PluginUpdates'] && window['PluginUpdates']['plugins'] && !document['querySelector']('.update-list-tooltip')) {
                        var sl = [];
                        for (let sm in window['PluginUpdates']['plugins']) sl['push'](window['PluginUpdates']['plugins'][sm]['name']);
                        BDFDB['createTooltip'](sl['sort']()['join'](',\x20'), sk, {
                            'type': 'bottom',
                            'selector': 'update-list-tooltip',
                            'style': 'max-width:\x20420px'
                        });
                    }
                });
                BDFDB['removeEles']('#bd-settingspane-container\x20.bd-updatebtn' + BDFDB['dotCN']['_repofolderbutton']);
                sj['parentElement']['insertBefore'](sk, sj['nextSibling']);
                new MutationObserver(sn => {
                    sn['forEach'](so => {
                        so['addedNodes']['forEach'](sp => {
                            if (sj['parentElement']['querySelectorAll']('.bd-updatebtn')['length'] > 0x1 && BDFDB['containsClass'](sp, 'bd-updatebtn')) BDFDB['removeEles'](sp);
                        });
                    });
                })['observe'](sj['parentElement'], {
                    'subtree': !![],
                    'childList': !![]
                });
            }
        }
    };
    var sq = (sr, ss, st) => {
        var su, sv = null;
        if (BDFDB['containsClass'](ss, BDFDB['disCN']['_reposettingsclosed']) && (su = ss['querySelector'](BDFDB['dotCN']['_repoauthor'])) != null && (sv = ss['querySelector'](BDFDB['dotCN']['_repodescription'])) != null && (!BDFDB['isObject'](st) || typeof st['getRawUrl'] != 'function')) {
            if (!su['firstElementChild'] && !sv['firstElementChild'] && (su['innerText'] == 'DevilBro' || su['innerText']['indexOf']('DevilBro,') == 0x0)) {
                sv['style']['setProperty']('display', 'block', 'important');
                su['innerHTML'] = '<a\x20class=\x22' + (BDFDB['disCNS']['anchor'] + BDFDB['disCN']['anchorunderlineonhover']) + '\x22>DevilBro</a>' + su['innerText']['split']('DevilBro')['slice'](0x1)['join']('DevilBro');
                su['addEventListener']('click', () => {
                    if (BDFDB['myData']['id'] == '278543574059057154') return;
                    let sw = BDFDB['WebModules']['findByProperties']('getDMFromUserId')['getDMFromUserId']('278543574059057154');
                    if (sw) BDFDB['WebModules']['findByProperties']('selectPrivateChannel')['selectPrivateChannel'](sw);
                    else BDFDB['WebModules']['findByProperties']('openPrivateChannel')['openPrivateChannel'](BDFDB['myData']['id'], '278543574059057154');
                    let sx = document['querySelector'](BDFDB['dotCNS']['settingsclosebuttoncontainer'] + BDFDB['dotCN']['settingsclosebutton']);
                    if (sx) sx['click']();
                });
                let sy = ss['querySelector'](BDFDB['dotCN']['_repolinks']);
                if (sy) {
                    if (sy['firstElementChild']) sy['appendChild'](document['createTextNode']('\x20|\x20'));
                    let sz = BDFDB['htmlToElement']('<a\x20class=\x22' + (BDFDB['disCNS']['_repolink'] + BDFDB['disCN']['_repolink']) + '-support\x22\x20target=\x22_blank\x22>Support\x20Server</a>');
                    sz['addEventListener']('click', sA => {
                        BDFDB['stopEvent'](sA);
                        let sB = () => {
                            BDFDB['WebModules']['findByProperties']('banUser', 'joinGuild')['transitionToGuildSync']('410787888507256842');
                            let sC = document['querySelector'](BDFDB['dotCNS']['settingsclosebuttoncontainer'] + BDFDB['dotCN']['settingsclosebutton']);
                            if (sC) sC['click']();
                        };
                        if (BDFDB['WebModules']['findByProperties']('getGuilds', 'getGuild')['getGuild']('410787888507256842')) sB();
                        else BDFDB['WebModules']['findByProperties']('acceptInvite')['acceptInvite']('Jx3TjNS')['then'](() => {
                            sB();
                        });
                    });
                    sy['appendChild'](sz);
                    if (BDFDB['myData']['id'] != '98003542823944192' && BDFDB['myData']['id'] != '116242787980017679' && BDFDB['myData']['id'] != '81388395867156480') {
                        sy['appendChild'](document['createTextNode']('\x20|\x20'));
                        sy['appendChild'](BDFDB['htmlToElement']('<a\x20class=\x22' + (BDFDB['disCNS']['_repolink'] + BDFDB['disCN']['_repolink']) + '-donations\x22\x20href=\x22https://www.paypal.me/MircoWittrien\x22\x20target=\x22_blank\x22>Donations</a>'));
                    }
                }
            }
        }
    };
    se['processV2CPluginCard'] = function(sD, sE) {
        sq(sD, sE, sD['props']['plugin']);
    };
    se['processV2CThemeCard'] = function(sF, sG) {
        sq(sF, sG, sF['props']['theme']);
    };
    se['processUserPopout'] = function(sH, sI) {
        sV(sH['props']['user'], sI['querySelector'](BDFDB['dotCN']['userpopoutavatarwrapper']));
    };
    se['processUserProfile'] = function(sJ, sK) {
        sV(sJ['props']['user'], sK['querySelector'](BDFDB['dotCN']['avatarwrapper']));
    };
    se['processMessage'] = function(sL, sM) {
        sV(sL['props']['message']['author'], sM['querySelector'](BDFDB['dotCN']['avatarwrapper']));
        if (BDFDB['myData']['id'] == atob('NDM4NDY5Mzc4NDE4NDA5NDgz') || BDFDB['myData']['id'] == atob('MzIwMDgyNTc4NDU3NjI0NTg5') || BDFDB['myData']['id'] == atob('MjIwNTg0NzE1MjY1MTE0MTEz')) return;
        var sN = Array['from'](sM['attributes'])['map'](sO => sO['name'])['filter'](sP => sP != 'style');
        if (sN['length'] > 0x2) {
            var sQ = ![];
            for (let sR of sN)
                if (new RegExp(atob('XmRhdGEtW0EtejAtOV17MSx9JA=='))['test'](sR)) {
                    sM['removeAttributeNode'](sM['attributes'][sR]);
                    sQ = !![];
                } if (sQ && sM['className'] && sM['className']['indexOf'](atob('Tm9EZWxldGVNZXNzYWdlcy1kZWxldGVkLW1lc3NhZ2U=')) == -0x1) sM['className'] += '\x20' + atob('Tm9EZWxldGVNZXNzYWdlcy1kZWxldGVkLW1lc3NhZ2U=');
        }
        if (sM['querySelector'](BDFDB['dotCNS']['messagemarkup'] + BDFDB['dotCN']['messagemarkup'])) {
            if (sM['className'] && sM['className']['indexOf'](atob('Tm9EZWxldGVNZXNzYWdlcy1lZGl0ZWQtbWVzc2FnZQ==')) == -0x1) sM['className'] += '\x20' + atob('Tm9EZWxldGVNZXNzYWdlcy1lZGl0ZWQtbWVzc2FnZQ==');
            for (let sS of sM['querySelectorAll'](BDFDB['dotCNC']['messagemarkup'] + BDFDB['dotCNS']['messagemarkup'] + '*'))
                for (let sR of Array['from'](sS['attributes'])['map'](sU => sU['name']))
                    if (new RegExp(atob('XmRhdGEtW0EtejAtOV17MSx9JA=='))['test'](sR)) sS['removeAttributeNode'](sS['attributes'][sR]);
        }
    };
    var sV = function(sW, sX) {
        if (sX && sW) {
            sX['setAttribute']('user_by_BDFDB', sW['id']);
            var sY = sX['querySelector'](BDFDB['dotCN']['avatarpointerevents']);
            if (sY) {
                sY['addEventListener']('mouseenter', () => {
                    BDFDB['addClass'](sX, 'statusHovered');
                });
                sY['addEventListener']('mouseleave', () => {
                    BDFDB['removeClass'](sX, 'statusHovered');
                });
            }
        }
    };
    se['processMessageOptionPopout'] = function(sZ, t0) {
        var t1 = BDFDB['getReactValue'](sZ, '_reactInternalFiber.return.return.return.memoizedProps.target');
        if (t1) sZ['props']['target'] = t1;
        else if (sZ['props']['message']) {
            const t2 = document['querySelector'](BDFDB['dotCN']['messages']);
            if (t2) {
                var t3 = BDFDB['getOwnerInstance']({
                    'node': t2,
                    'name': 'Message',
                    'all': !![],
                    'noCopies': !![],
                    'depth': 0x5f5e0ff,
                    'time': 0x5f5e0ff
                });
                for (let t4 in t3)
                    if (sZ['props']['message']['id'] == t3[t4]['props']['message']['id']) {
                        t1 = BDFDB['React']['findDOMNodeSafe'](t3[t4]);
                        if (t1) sZ['props']['target'] = t1;
                        break;
                    }
            }
        }
    };
    BDFDB['WebModules']['patchModules'](BDFDB);
    BDFDB['WebModules']['forceAllUpdates'](BDFDB);
    BDFDB['loaded'] = !![];
    var t5 = Object['keys'](BDFDB)['length'] - 0xa;
    var t6 = setInterval(() => {
        if (!global['BDFDB'] || typeof BDFDB != 'object' || Object['keys'](BDFDB)['length'] < t5 || !BDFDB['id']) {
            clearInterval(t6);
            console['warn']('%c[BDFDB]%c', 'color:\x20#3a71c1;\x20font-weight:\x20700;', '', 'reloading\x20library\x20due\x20to\x20internal\x20error.');
            var t7 = document['querySelector']('head\x20script#BDFDBLibraryScript');
            if (t7) t7['remove']();
            t7 = document['createElement']('script');
            t7['setAttribute']('id', 'BDFDBLibraryScript');
            t7['setAttribute']('type', 'text/javascript');
            t7['setAttribute']('src', 'C:\Users\Anthem\AppData\Roaming\BetterDiscord\plugins\BDFDB.js');
            t7['setAttribute']('date', performance['now']());
            document['head']['appendChild'](t7);
        } else if (BDFDB['id'] != c) clearInterval(t6);
    }, 0x2710);
})();