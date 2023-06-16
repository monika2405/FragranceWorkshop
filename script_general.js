(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","data":{"textToSpeechConfig":{"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"speechOnQuizQuestion":false,"pitch":1},"history":{},"locales":{"en":"locale/en.txt"},"name":"Player919","defaultLocale":"en"},"backgroundColor":["#FFFFFF"],"class":"Player","left":412.65,"layout":"absolute","defaultMenu":["fullscreen","mute","rotation"],"hash": "d1000c47e3b04c86ee9aa9e68dad637cb8a212878e19f1c24cb24cb9df95377a", "definitions": [{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24","camera":"this.panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA","camera":"this.panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","media":"this.panorama_CE8F6E12_C468_DB92_41DE_938773B0A694","camera":"this.panorama_CE8F6E12_C468_DB92_41DE_938773B0A694_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","media":"this.panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F","camera":"this.panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PanoramaPlayListItem","media":"this.panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E","camera":"this.panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"class":"PanoramaPlayListItem","media":"this.panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B","end":"this.trigger('tourEnded')","camera":"this.panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)"}]},{"id":"panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B","label":trans('panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B.label'),"data":{"label":"Panorama_FRAGRANCE VISUAL_2023-06-16-20-21-55"},"class":"Panorama","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":62.15,"yaw":100.01,"distance":100,"panorama":"this.panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24","data":{"overlayID":"overlay_CB09FCA0_C459_F8AE_41E4_20B2ADFC5C69"},"select":"this.overlay_CB09FCA0_C459_F8AE_41E4_20B2ADFC5C69.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":3072,"tags":"ondemand","colCount":36,"url":"media/panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_0/{face}/0/{row}_{column}.jpg","rowCount":6,"width":18432},{"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","colCount":18,"url":"media/panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_0/{face}/1/{row}_{column}.jpg","rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"url":"media/panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_0/{face}/2/{row}_{column}.jpg","rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_0/{face}/3/{row}_{column}.jpg","rowCount":1,"width":3072},{"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","colCount":6,"url":"media/panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_0/{face}/vr2gen/0.jpg","rowCount":1,"width":12288}]}}],"hfov":360,"overlays":["this.overlay_CB09FCA0_C459_F8AE_41E4_20B2ADFC5C69"],"thumbnailUrl":"media/panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_t.jpg","hfovMin":"120%","vfov":180},{"id":"MainViewer","class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesTop":0,"subtitlesTextShadowVerticalLength":1,"progressBackgroundColor":["#000000"],"subtitlesBottom":50,"subtitlesTextShadowColor":"#000000","toolTipFontSize":"1.11vmin","progressBottom":10,"data":{"name":"Main Viewer"},"subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressHeight":2,"minHeight":50,"propagateClick":false,"vrPointerSelectionColor":"#FF6600","playbackBarHeight":10,"minWidth":100,"progressBarBorderRadius":2,"toolTipPaddingLeft":6,"progressBarBorderSize":0,"playbackBarBottom":5,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","height":"100%","width":"100%","progressBorderRadius":2,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"progressLeft":"33%","toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBorderRadius":0,"toolTipFontColor":"#606060","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadWidth":6,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","playbackBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderSize":0,"subtitlesGap":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","playbackBarHeadBorderSize":0,"playbackBarBorderRadius":0,"playbackBarLeft":0,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadHeight":15,"toolTipTextShadowColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","progressBackgroundColorRatios":[0],"progressRight":"33%","toolTipFontFamily":"Arial","firstTransitionDuration":0,"playbackBarHeadShadowOpacity":0.7,"progressOpacity":0.7,"progressBarBorderColor":"#000000","playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingRight":6,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingTop":4,"playbackBarHeadShadowColor":"#000000"},{"class":"PanoramaCamera","id":"panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":89.52,"pitch":-9.46},"initialSequence":"this.sequence_CF66B940_C469_B9EF_41DD_0B3D1AA85BDB","enterPointingToHorizon":true},{"id":"panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24","label":trans('panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24.label'),"data":{"label":"Panorama_fragrance lighting_2023-06-15-19-11-16"},"class":"Panorama","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-129.43,"yaw":-26.98,"distance":100,"panorama":"this.panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F","data":{"overlayID":"overlay_DCC9AE79_C4D8_5B9E_41BA_7ACC52F38096"},"select":"this.overlay_DCC9AE79_C4D8_5B9E_41BA_7ACC52F38096.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","backwardYaw":100.01,"yaw":62.15,"distance":5.13,"panorama":"this.panorama_C82B70A9_C468_48BE_41E7_60E00CF93E8B","data":{"overlayID":"overlay_DCC53D54_C4D8_5996_41DE_DEF6B3C2E55C"},"select":"this.overlay_DCC53D54_C4D8_5996_41DE_DEF6B3C2E55C.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","backwardYaw":-51.24,"yaw":-26.66,"distance":6.17,"panorama":"this.panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E","data":{"overlayID":"overlay_DD9F88DB_C4D8_5892_4191_42D681B0159C"},"select":"this.overlay_DD9F88DB_C4D8_5892_4191_42D681B0159C.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","yaw":0.31,"distance":7.05,"panorama":"this.panorama_CE8F6E12_C468_DB92_41DE_938773B0A694","data":{"overlayID":"overlay_DDEC423D_C4D8_4B96_41E4_3A356C22EE07"},"select":"this.overlay_DDEC423D_C4D8_4B96_41E4_3A356C22EE07.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","colCount":18,"url":"media/panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24_0/{face}/0/{row}_{column}.jpg","rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"url":"media/panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072}]}}],"hfov":360,"overlays":["this.overlay_DCC53D54_C4D8_5996_41DE_DEF6B3C2E55C","this.overlay_DDEC423D_C4D8_4B96_41E4_3A356C22EE07","this.overlay_DD9F88DB_C4D8_5892_4191_42D681B0159C","this.overlay_DCC9AE79_C4D8_5B9E_41BA_7ACC52F38096"],"thumbnailUrl":"media/panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24_t.jpg","hfovMin":"150%","vfov":180},{"class":"PanoramaCamera","id":"panorama_CE8F6E12_C468_DB92_41DE_938773B0A694_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":-101.06,"pitch":-2.99},"initialSequence":"this.sequence_CF67EF36_C468_B992_41A9_FF268D56B2EA","enterPointingToHorizon":true},{"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation"},{"id":"panorama_CE8F6E12_C468_DB92_41DE_938773B0A694","label":trans('panorama_CE8F6E12_C468_DB92_41DE_938773B0A694.label'),"data":{"label":"Panorama_fragrance lighting_2023-06-15-16-39-55"},"class":"Panorama","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-68.53,"yaw":-5.19,"distance":27.51,"panorama":"this.panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA","data":{"overlayID":"overlay_D72244A3_C4A8_48B2_41DE_C3BD5208D39D"},"select":"this.overlay_D72244A3_C4A8_48B2_41DE_C3BD5208D39D.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_CE8F6E12_C468_DB92_41DE_938773B0A694_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","colCount":18,"url":"media/panorama_CE8F6E12_C468_DB92_41DE_938773B0A694_0/{face}/0/{row}_{column}.jpg","rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"url":"media/panorama_CE8F6E12_C468_DB92_41DE_938773B0A694_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_CE8F6E12_C468_DB92_41DE_938773B0A694_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072}]}}],"hfov":360,"overlays":["this.overlay_D72244A3_C4A8_48B2_41DE_C3BD5208D39D"],"thumbnailUrl":"media/panorama_CE8F6E12_C468_DB92_41DE_938773B0A694_t.jpg","hfovMin":"150%","vfov":180},{"class":"PanoramaCamera","id":"panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":85.34,"pitch":-2.98},"initialSequence":"this.sequence_CF67BF36_C468_B992_4198_DB1566D2EAE4","enterPointingToHorizon":true},{"class":"PanoramaCamera","id":"panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":34.47,"pitch":0.96},"initialSequence":"this.sequence_CF666F36_C468_B992_41DA_135C6CC3F7DD","enterPointingToHorizon":true},{"id":"panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F","label":trans('panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F.label'),"data":{"label":"Panorama_fragrance lighting_2023-06-15-17-33-40"},"class":"Panorama","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-26.98,"yaw":-129.43,"distance":2.25,"panorama":"this.panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24","data":{"overlayID":"overlay_DC0E4F0E_C4D7_D972_41D5_492C78B5F783"},"select":"this.overlay_DC0E4F0E_C4D7_D972_41D5_492C78B5F783.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","colCount":18,"url":"media/panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F_0/{face}/0/{row}_{column}.jpg","rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"url":"media/panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072}]}}],"hfov":360,"overlays":["this.overlay_DC0E4F0E_C4D7_D972_41D5_492C78B5F783"],"thumbnailUrl":"media/panorama_CE82A209_C468_CB7E_41DF_11D8959B3D3F_t.jpg","hfovMin":"150%","vfov":180},{"class":"PanoramaCamera","id":"panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":75.88,"pitch":0.36},"initialSequence":"this.sequence_CF679F36_C468_B992_41E0_74E904D618E8","enterPointingToHorizon":true},{"id":"panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA","label":trans('panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA.label'),"data":{"label":"Panorama_fragrance lighting_2023-06-15-13-12-04"},"class":"Panorama","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-5.19,"yaw":-68.53,"distance":12.63,"panorama":"this.panorama_CE8F6E12_C468_DB92_41DE_938773B0A694","data":{"overlayID":"overlay_D72CC4A5_C4A8_48B6_41E7_3111FD435A95"},"select":"this.overlay_D72CC4A5_C4A8_48B6_41E7_3111FD435A95.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":3072,"tags":"ondemand","colCount":36,"url":"media/panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_0/{face}/0/{row}_{column}.jpg","rowCount":6,"width":18432},{"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","colCount":18,"url":"media/panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_0/{face}/1/{row}_{column}.jpg","rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"url":"media/panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_0/{face}/2/{row}_{column}.jpg","rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_0/{face}/3/{row}_{column}.jpg","rowCount":1,"width":3072},{"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","colCount":6,"url":"media/panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_0/{face}/vr2gen/0.jpg","rowCount":1,"width":12288}]}}],"hfov":360,"overlays":["this.overlay_D72CC4A5_C4A8_48B6_41E7_3111FD435A95"],"thumbnailUrl":"media/panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_t.jpg","hfovMin":"120%","vfov":180},{"class":"PanoramaCamera","id":"panorama_C838A1EB_C468_C8B2_41C8_918DD357B4CA_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":142.91,"pitch":-5.73,"hfov":113},"initialSequence":"this.sequence_CF7A5F35_C468_B996_41DF_55CE22028F1F","enterPointingToHorizon":true},{"id":"panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E","label":trans('panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E.label'),"data":{"label":"Panorama_fragrance lighting_2023-06-15-19-10-06"},"class":"Panorama","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-26.66,"yaw":-51.24,"distance":2.98,"panorama":"this.panorama_CE83AB31_C468_B9AE_41E4_46F93A0E9A24","data":{"overlayID":"overlay_DCDD58DE_C4D8_D892_41DF_10621B65347D"},"select":"this.overlay_DCDD58DE_C4D8_D892_41DF_10621B65347D.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","colCount":18,"url":"media/panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E_0/{face}/0/{row}_{column}.jpg","rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"url":"media/panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072}]}}],"hfov":360,"overlays":["this.overlay_DCDD58DE_C4D8_D892_41DF_10621B65347D"],"thumbnailUrl":"media/panorama_CE8D66CA_C468_C8F2_41E2_8124E88C133E_t.jpg","hfovMin":"150%","vfov":180},{"id":"overlay_CB09FCA0_C459_F8AE_41E4_20B2ADFC5C69","areas":["this.HotspotPanoramaOverlayArea_CB011CA9_C459_F8B1_41B5_5C6BA4CE642F"],"useHandCursor":true,"items":[{"distance":100,"hfov":13.8,"pitch":0.61,"class":"HotspotPanoramaOverlayImage","yaw":100.01,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-19-11-16"},"image":"this.res_D7B7B8B8_C4B8_589F_41C8_C503FBC7935E","vfov":10.53,"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-19-11-16"}},{"class":"PanoramaCameraSequence","id":"sequence_CF66B940_C469_B9EF_41DD_0B3D1AA85BDB","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_DCC53D54_C4D8_5996_41DE_DEF6B3C2E55C","areas":["this.HotspotPanoramaOverlayArea_DCFDBD5E_C4D8_5992_41E1_3A523A05F859"],"useHandCursor":true,"items":[{"distance":100,"hfov":13.51,"roll":-8.63,"rotationY":-17.16,"pitch":-18.33,"class":"HotspotPanoramaOverlayImage","data":{"label":"GoToPanorama_fragranceVisual_2023-06-16-20-21-55"},"yaw":62.15,"image":"this.AnimatedImageResource_DDCC9265_C4EB_CBB6_41C3_EE36D34BDF03","vfov":11.12,"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToPanorama_fragranceVisual_2023-06-16-20-21-55","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_DDEC423D_C4D8_4B96_41E4_3A356C22EE07","areas":["this.HotspotPanoramaOverlayArea_DDECA23E_C4D8_4B92_41E5_39DED5D48248"],"useHandCursor":true,"items":[{"distance":100,"hfov":10.5,"roll":-4.7,"pitch":-13.54,"class":"HotspotPanoramaOverlayImage","yaw":0.31,"image":"this.AnimatedImageResource_DDCC7265_C4EB_CBB6_41DB_100E0E814C15","vfov":5.25,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-16-39-55"},"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-16-39-55","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_DD9F88DB_C4D8_5892_4191_42D681B0159C","areas":["this.HotspotPanoramaOverlayArea_DD9498E9_C4D8_58BE_41C9_8567E5EE8114"],"useHandCursor":true,"items":[{"distance":50,"hfov":15.34,"pitch":-15.4,"class":"HotspotPanoramaOverlayImage","yaw":-26.66,"image":"this.AnimatedImageResource_DDCC5265_C4EB_CBB6_41C9_B8717CCF495F","vfov":9.83,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-19-10-06"},"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-19-10-06","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_DCC9AE79_C4D8_5B9E_41BA_7ACC52F38096","areas":["this.HotspotPanoramaOverlayArea_DCC1EE83_C4D8_5B72_41E7_4DE364666541"],"useHandCursor":true,"items":[{"distance":50,"hfov":11.41,"pitch":9.76,"class":"HotspotPanoramaOverlayImage","yaw":-26.98,"image":"this.AnimatedImageResource_DDCC3266_C4EB_CBB2_41E2_D53E06012155","vfov":9.02,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-17-33-40"},"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-17-33-40"}},{"class":"PanoramaCameraSequence","id":"sequence_CF67EF36_C468_B992_41A9_FF268D56B2EA","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_D72244A3_C4A8_48B2_41DE_C3BD5208D39D","areas":["this.HotspotPanoramaOverlayArea_D76ED4BC_C4A8_4896_41AB_A0E42761B8A4"],"useHandCursor":true,"items":[{"distance":100,"hfov":15.67,"pitch":-3.53,"class":"HotspotPanoramaOverlayImage","yaw":-5.19,"image":"this.AnimatedImageResource_DDCFB266_C4EB_CBB2_41DE_96C6CF8AA77D","vfov":14.76,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-13-12-04"},"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-13-12-04","hasPanoramaAction":true},"enabledInCardboard":true},{"class":"PanoramaCameraSequence","id":"sequence_CF67BF36_C468_B992_4198_DB1566D2EAE4","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_CF666F36_C468_B992_41DA_135C6CC3F7DD","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_DC0E4F0E_C4D7_D972_41D5_492C78B5F783","areas":["this.HotspotPanoramaOverlayArea_DC063F17_C4D7_D991_41E7_FB8490CF935C"],"useHandCursor":true,"items":[{"distance":50,"hfov":10.5,"pitch":-37.05,"class":"HotspotPanoramaOverlayImage","yaw":-129.43,"image":"this.AnimatedImageResource_DDCF8266_C4EB_CBB2_41BC_67B99AAE40B1","vfov":10.53,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-19-11-16"},"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-19-11-16","hasPanoramaAction":true},"enabledInCardboard":true},{"class":"PanoramaCameraSequence","id":"sequence_CF679F36_C468_B992_41E0_74E904D618E8","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_D72CC4A5_C4A8_48B6_41E7_3111FD435A95","areas":["this.HotspotPanoramaOverlayArea_D770D46F_C4A8_4FB2_41C1_A62D726BC413"],"useHandCursor":true,"items":[{"distance":100,"hfov":16.92,"pitch":-7.66,"class":"HotspotPanoramaOverlayImage","yaw":-68.53,"image":"this.AnimatedImageResource_DDCFF266_C4EB_CBB2_41CF_5B37C84EA4BF","vfov":16.53,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-16-39-55"},"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-16-39-55","hasPanoramaAction":true},"enabledInCardboard":true},{"class":"PanoramaCameraSequence","id":"sequence_CF7A5F35_C468_B996_41DF_55CE22028F1F","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_DCDD58DE_C4D8_D892_41DF_10621B65347D","areas":["this.HotspotPanoramaOverlayArea_DCD538EA_C4D8_D8B2_41E6_19A046C65770"],"useHandCursor":true,"items":[{"distance":50,"hfov":15.51,"roll":1.65,"pitch":-29.65,"rotationX":8.41,"class":"HotspotPanoramaOverlayImage","yaw":-51.24,"image":"this.AnimatedImageResource_DDCF4266_C4EB_CBB2_41B8_6C76EDF688AA","vfov":7.96,"data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-19-11-16"},"scaleMode":"fit_inside"}],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToPanorama_fragranceLighting_2023-06-15-19-11-16","hasPanoramaAction":true},"enabledInCardboard":true},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_CB011CA9_C459_F8B1_41B5_5C6BA4CE642F","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"class":"ImageResource","id":"res_D7B7B8B8_C4B8_589F_41C8_C503FBC7935E","levels":[{"class":"ImageResourceLevel","height":151,"url":"media/res_D7B7B8B8_C4B8_589F_41C8_C503FBC7935E_0.png","width":151}]},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_DCFDBD5E_C4D8_5992_41E1_3A523A05F859","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 5)"},{"id":"AnimatedImageResource_DDCC9265_C4EB_CBB6_41C3_EE36D34BDF03","colCount":4,"levels":[{"class":"ImageResourceLevel","height":666,"url":"media/res_DD90396D_C4EB_D9B6_4198_06F3BFDCE651_0.png","width":1000}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"rowCount":6,"finalFrame":"first"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_DDECA23E_C4D8_4B92_41E5_39DED5D48248","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"id":"AnimatedImageResource_DDCC7265_C4EB_CBB6_41DB_100E0E814C15","colCount":4,"levels":[{"class":"ImageResourceLevel","height":666,"url":"media/res_DD90396D_C4EB_D9B6_4198_06F3BFDCE651_0.png","width":1000}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"rowCount":6,"finalFrame":"first"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_DD9498E9_C4D8_58BE_41C9_8567E5EE8114","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"id":"AnimatedImageResource_DDCC5265_C4EB_CBB6_41C9_B8717CCF495F","colCount":4,"levels":[{"class":"ImageResourceLevel","height":390,"url":"media/res_DD92F96D_C4EB_D9B6_41E7_B4F0BF792866_0.png","width":988}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"rowCount":6,"finalFrame":"first"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_DCC1EE83_C4D8_5B72_41E7_4DE364666541","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)"},{"id":"AnimatedImageResource_DDCC3266_C4EB_CBB2_41E2_D53E06012155","colCount":4,"levels":[{"class":"ImageResourceLevel","height":870,"url":"media/res_DD92C96D_C4EB_D9B6_41E4_A70531DBCD1A_0.png","width":580}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"rowCount":6,"finalFrame":"first"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D76ED4BC_C4A8_4896_41AB_A0E42761B8A4","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"AnimatedImageResource_DDCFB266_C4EB_CBB2_41DE_96C6CF8AA77D","colCount":4,"levels":[{"class":"ImageResourceLevel","height":1200,"url":"media/res_D7B078B6_C4B8_5893_41DB_DDC51ACA2CAD_0.png","width":800}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"rowCount":6,"finalFrame":"first"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_DC063F17_C4D7_D991_41E7_FB8490CF935C","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_DDCF8266_C4EB_CBB2_41BC_67B99AAE40B1","colCount":4,"levels":[{"class":"ImageResourceLevel","height":558,"url":"media/res_DD92B96E_C4EB_D9B2_41CA_63AABCCA4E88_0.png","width":672}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"rowCount":6,"finalFrame":"first"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D770D46F_C4A8_4FB2_41C1_A62D726BC413","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"id":"AnimatedImageResource_DDCFF266_C4EB_CBB2_41CF_5B37C84EA4BF","colCount":4,"levels":[{"class":"ImageResourceLevel","height":1200,"url":"media/res_D7B078B6_C4B8_5893_41DB_DDC51ACA2CAD_0.png","width":800}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"rowCount":6,"finalFrame":"first"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_DCD538EA_C4D8_D8B2_41E6_19A046C65770","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_DDCF4266_C4EB_CBB2_41B8_6C76EDF688AA","colCount":4,"levels":[{"class":"ImageResourceLevel","height":666,"url":"media/res_DD90396D_C4EB_D9B6_4198_06F3BFDCE651_0.png","width":1000}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"rowCount":6,"finalFrame":"first"}],"scrollBarMargin":2,"start":"this.init()","watermark":false,"minHeight":0,"propagateClick":false,"children":["this.MainViewer"],"minWidth":0,"width":"100%","height":"100%","scrollBarColor":"#000000","backgroundColorRatios":[0],"gap":10,"scripts":{"playAudioList":TDV.Tour.Script.playAudioList,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isPanorama":TDV.Tour.Script.isPanorama,"createTween":TDV.Tour.Script.createTween,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"shareSocial":TDV.Tour.Script.shareSocial,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"downloadFile":TDV.Tour.Script.downloadFile,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"existsKey":TDV.Tour.Script.existsKey,"translate":TDV.Tour.Script.translate,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"resumePlayers":TDV.Tour.Script.resumePlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"init":TDV.Tour.Script.init,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getKey":TDV.Tour.Script.getKey,"initQuiz":TDV.Tour.Script.initQuiz,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setLocale":TDV.Tour.Script.setLocale,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"clone":TDV.Tour.Script.clone,"getOverlays":TDV.Tour.Script.getOverlays,"mixObject":TDV.Tour.Script.mixObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoBack":TDV.Tour.Script.historyGoBack,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizFinish":TDV.Tour.Script.quizFinish,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"registerKey":TDV.Tour.Script.registerKey,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"setMapLocation":TDV.Tour.Script.setMapLocation,"openLink":TDV.Tour.Script.openLink,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"showPopupImage":TDV.Tour.Script.showPopupImage,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPixels":TDV.Tour.Script.getPixels}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.11.js.map
})();
//Generated with v2023.0.11, Fri Jun 16 2023