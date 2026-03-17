"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
})(Role || (exports.Role = Role = {}));
var Action;
(function (Action) {
    Action["Manage"] = "manage";
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
})(Action || (exports.Action = Action = {}));
//# sourceMappingURL=role.enum.js.map