"use strict";
/**
 * Created by yugandhar.ds on 3/21/2017.
 */
var BreadcrumbService = (function () {
    function BreadcrumbService() {
    }
    BreadcrumbService.prototype.getBreadCrumb = function () {
        return this._breadcrumbText;
    };
    BreadcrumbService.prototype.setBreadCrumb = function (text) {
        this._breadcrumbText = text;
    };
    BreadcrumbService.prototype.getHyperLink = function () {
        return this._hyperLink;
    };
    BreadcrumbService.prototype.setHyperLink = function (bool) {
        this._hyperLink = bool;
    };
    return BreadcrumbService;
}());
exports.BreadcrumbService = BreadcrumbService;
