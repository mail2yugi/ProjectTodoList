"use strict";
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        testing_1.TestBed.compileComponents();
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
    });
    testing_1.TestBed.compileComponents();
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
