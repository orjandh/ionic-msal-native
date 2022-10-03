import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export var MsalLogLevel;
(function (MsalLogLevel) {
    MsalLogLevel["Verbose"] = "VERBOSE";
    MsalLogLevel["Error"] = "ERROR";
    MsalLogLevel["Warning"] = "WARNING";
    MsalLogLevel["Info"] = "INFO";
})(MsalLogLevel || (MsalLogLevel = {}));
/**
 * @name msal
 * @description
 * This plugin works with cordova-plugin-msal
 *
 * @usage
 * ...
 * import { Msal } from 'ionic-msal-native';
 * ...
 *
 *
 * ...
 * NgModule({
 *  imports: [
 *  ...
 *   ],
 *   providers:[Msal, ...]
 * })
 *
 * import { Msal } from 'ionic-msal-native';
 *
 * constructor(private msal: Msal) { }
 *
 */
let Msal = class Msal {
    msalInit(config) {
        return new Promise((resolve, reject) => {
            if (!cordova) {
                return reject('Cordova not available');
            }
            var msalLocal = cordova.plugins['msalPlugin'];
            if (!msalLocal) {
                return reject('please install cordova-plugin-msal');
            }
            msalLocal.msalInit(() => {
                resolve('OK');
            }, (err) => {
                reject(err);
            }, config);
        });
    }
    signInInteractive(options) {
        return new Promise((resolve, reject) => {
            if (!cordova) {
                return reject('Cordova not available');
            }
            const msalLocal = cordova.plugins['msalPlugin'];
            if (!msalLocal) {
                return reject('please install cordova-plugin-msal');
            }
            msalLocal.signInInteractive((msg) => {
                resolve(msg);
            }, (err) => {
                reject(err);
            }, options);
        });
    }
    signInSilent(accountId) {
        return new Promise((resolve, reject) => {
            if (!cordova) {
                return reject('Cordova not available');
            }
            const msalLocal = cordova.plugins['msalPlugin'];
            if (!msalLocal) {
                return reject('please install cordova-plugin-msal');
            }
            msalLocal.signInSilent((msg) => {
                resolve(msg);
            }, (err) => {
                reject(err);
            }, accountId);
        });
    }
    signOut(accountId) {
        return new Promise((resolve, reject) => {
            if (!cordova) {
                return reject('Cordova not available');
            }
            const msalLocal = cordova.plugins['msalPlugin'];
            if (!msalLocal) {
                return reject('please install cordova-plugin-msal');
            }
            msalLocal.signOut((msg) => {
                resolve(msg);
            }, (err) => {
                reject(err);
            }, accountId);
        });
    }
    getAccounts() {
        return new Promise((resolve, reject) => {
            if (!cordova) {
                return reject('Cordova not available');
            }
            const msalLocal = cordova.plugins['msalPlugin'];
            if (!msalLocal) {
                return reject('please install cordova-plugin-msal');
            }
            msalLocal.getAccounts((accounts) => {
                resolve(accounts);
            }, (err) => {
                reject(err);
            });
        });
    }
    startLogger(logLevel) {
        return new Observable(observer => {
            if (!cordova) {
                return observer.error('Cordova not available');
            }
            const msalLocal = cordova.plugins['msalPlugin'];
            if (!msalLocal) {
                return observer.error('please install cordova-plugin-msal');
            }
            msalLocal.startLogger((entry) => {
                observer.next(entry);
            }, (error) => {
                observer.error(error);
            }, false, logLevel);
        });
    }
};
Msal = __decorate([
    Injectable()
], Msal);
export { Msal };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWFsQyxNQUFNLENBQU4sSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3RCLG1DQUFtQixDQUFBO0lBQ25CLCtCQUFlLENBQUE7SUFDZixtQ0FBbUIsQ0FBQTtJQUNuQiw2QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLFlBQVksS0FBWixZQUFZLFFBS3ZCO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBRUgsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtJQUNmLFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixPQUFPLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNkLE9BQU8sTUFBTSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDckQ7WUFDRCxTQUFTLENBQUMsUUFBUSxDQUNoQixHQUFHLEVBQUU7Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFDRCxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsRUFDRCxNQUFNLENBQ1AsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLE9BQWE7UUFDN0IsT0FBTyxJQUFJLE9BQU8s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QUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBc0I7UUFDaEMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNkLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQzdEO1lBRUQsU0FBUyxDQUFDLFdBQVcsQ0FDbkIsQ0FBQyxLQUFtQixFQUFFLEVBQUU7Z0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxFQUNELENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ2IsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQ0QsS0FBSyxFQUNMLFFBQVEsQ0FDVCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQS9IWSxJQUFJO0lBRGhCLFVBQVUsRUFBRTtHQUNBLElBQUksQ0ErSGhCO1NBL0hZLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgY29uc3QgY29yZG92YTogYW55O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNc2FsTG9nRW50cnkge1xyXG4gIHRpbWVzdGFtcDogc3RyaW5nO1xyXG4gIHRocmVhZElkOiBudW1iZXI7XHJcbiAgY29ycmVsYXRpb25JZDogc3RyaW5nO1xyXG4gIGxvZ0xldmVsOiBzdHJpbmc7XHJcbiAgY29udGFpbnNQSUk6IGJvb2xlYW47XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNc2FsTG9nTGV2ZWwge1xyXG4gIFZlcmJvc2UgPSAnVkVSQk9TRScsXHJcbiAgRXJyb3IgPSAnRVJST1InLFxyXG4gIFdhcm5pbmcgPSAnV0FSTklORycsXHJcbiAgSW5mbyA9ICdJTkZPJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIG1zYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHdvcmtzIHdpdGggY29yZG92YS1wbHVnaW4tbXNhbFxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogLi4uXHJcbiAqIGltcG9ydCB7IE1zYWwgfSBmcm9tICdpb25pYy1tc2FsLW5hdGl2ZSc7XHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiAuLi5cclxuICogTmdNb2R1bGUoe1xyXG4gKiAgaW1wb3J0czogW1xyXG4gKiAgLi4uXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6W01zYWwsIC4uLl1cclxuICogfSlcclxuICpcclxuICogaW1wb3J0IHsgTXNhbCB9IGZyb20gJ2lvbmljLW1zYWwtbmF0aXZlJztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtc2FsOiBNc2FsKSB7IH1cclxuICpcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1zYWwge1xyXG4gIG1zYWxJbml0KGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmICghY29yZG92YSkge1xyXG4gICAgICAgIHJldHVybiByZWplY3QoJ0NvcmRvdmEgbm90IGF2YWlsYWJsZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBtc2FsTG9jYWwgPSBjb3Jkb3ZhLnBsdWdpbnNbJ21zYWxQbHVnaW4nXTtcclxuICAgICAgaWYgKCFtc2FsTG9jYWwpIHtcclxuICAgICAgICByZXR1cm4gcmVqZWN0KCdwbGVhc2UgaW5zdGFsbCBjb3Jkb3ZhLXBsdWdpbi1tc2FsJyk7XHJcbiAgICAgIH1cclxuICAgICAgbXNhbExvY2FsLm1zYWxJbml0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoJ09LJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlnXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNpZ25JbkludGVyYWN0aXZlKG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKCFjb3Jkb3ZhKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnQ29yZG92YSBub3QgYXZhaWxhYmxlJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbXNhbExvY2FsID0gY29yZG92YS5wbHVnaW5zWydtc2FsUGx1Z2luJ107XHJcbiAgICAgIGlmICghbXNhbExvY2FsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdCgncGxlYXNlIGluc3RhbGwgY29yZG92YS1wbHVnaW4tbXNhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIG1zYWxMb2NhbC5zaWduSW5JbnRlcmFjdGl2ZShcclxuICAgICAgICAobXNnOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobXNnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNpZ25JblNpbGVudChhY2NvdW50SWQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKCFjb3Jkb3ZhKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnQ29yZG92YSBub3QgYXZhaWxhYmxlJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbXNhbExvY2FsID0gY29yZG92YS5wbHVnaW5zWydtc2FsUGx1Z2luJ107XHJcbiAgICAgIGlmICghbXNhbExvY2FsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdCgncGxlYXNlIGluc3RhbGwgY29yZG92YS1wbHVnaW4tbXNhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIG1zYWxMb2NhbC5zaWduSW5TaWxlbnQoXHJcbiAgICAgICAgKG1zZzogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKG1zZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWNjb3VudElkXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNpZ25PdXQoYWNjb3VudElkPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmICghY29yZG92YSkge1xyXG4gICAgICAgIHJldHVybiByZWplY3QoJ0NvcmRvdmEgbm90IGF2YWlsYWJsZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1zYWxMb2NhbCA9IGNvcmRvdmEucGx1Z2luc1snbXNhbFBsdWdpbiddO1xyXG4gICAgICBpZiAoIW1zYWxMb2NhbCkge1xyXG4gICAgICAgIHJldHVybiByZWplY3QoJ3BsZWFzZSBpbnN0YWxsIGNvcmRvdmEtcGx1Z2luLW1zYWwnKTtcclxuICAgICAgfVxyXG4gICAgICBtc2FsTG9jYWwuc2lnbk91dChcclxuICAgICAgICAobXNnOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobXNnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY2NvdW50SWRcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWNjb3VudHMoKTogUHJvbWlzZTxhbnlbXT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKCFjb3Jkb3ZhKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnQ29yZG92YSBub3QgYXZhaWxhYmxlJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbXNhbExvY2FsID0gY29yZG92YS5wbHVnaW5zWydtc2FsUGx1Z2luJ107XHJcbiAgICAgIGlmICghbXNhbExvY2FsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdCgncGxlYXNlIGluc3RhbGwgY29yZG92YS1wbHVnaW4tbXNhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIG1zYWxMb2NhbC5nZXRBY2NvdW50cyhcclxuICAgICAgICAoYWNjb3VudHM6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGFjY291bnRzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydExvZ2dlcihsb2dMZXZlbDogTXNhbExvZ0xldmVsKTogT2JzZXJ2YWJsZTxNc2FsTG9nRW50cnk+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgIGlmICghY29yZG92YSkge1xyXG4gICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvcignQ29yZG92YSBub3QgYXZhaWxhYmxlJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbXNhbExvY2FsID0gY29yZG92YS5wbHVnaW5zWydtc2FsUGx1Z2luJ107XHJcbiAgICAgIGlmICghbXNhbExvY2FsKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKCdwbGVhc2UgaW5zdGFsbCBjb3Jkb3ZhLXBsdWdpbi1tc2FsJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1zYWxMb2NhbC5zdGFydExvZ2dlcihcclxuICAgICAgICAoZW50cnk6IE1zYWxMb2dFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChlbnRyeSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgbG9nTGV2ZWxcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=