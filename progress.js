
/* import { reportProgress } from "./callbackjs"; */

mergeInto(LibraryManager.library, {
    callbackProgress__postset: '_callbackProgress();',
    callbackProgress: function () {
        _callbackProgress = reportProgress;
    },

    callbackPassedData__postset: '_callbackPassedData();',
    callbackPassedData: function () {
        _callbackPassedData = callbackData;
    }
});
