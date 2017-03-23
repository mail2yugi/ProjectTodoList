"use strict";
var router_1 = require('@angular/router');
var project_info_component_1 = require('./project-info-component');
exports.routing = router_1.RouterModule.forChild([
    { path: ':id',
        component: project_info_component_1.ProjectInfoComponent
    }
]);
