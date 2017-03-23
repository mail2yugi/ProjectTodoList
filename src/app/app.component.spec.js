"use strict";
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
//describe('AppComponent', function () {
function main() {
    describe('AppComponent Test', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                providers: [
                    app_component_1.AppComponent
                ]
            });
        });
        it('Test - AppComponent Should Define.', testing_1.inject([app_component_1.AppComponent], function (cmp) {
            expect(cmp).toBeDefined();
        }));
    });
}
exports.main = main;
