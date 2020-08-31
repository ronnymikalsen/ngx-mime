import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
var ClickService = /** @class */ (function () {
    function ClickService() {
        var _this = this;
        this.clickCount = 0;
        this.click = function (event) {
            event.preventDefaultAction = true;
            if (event.quick) {
                _this.clickCount++;
                if (_this.clickCount === 1) {
                    _this.dblClickTimeOut = setTimeout(function () {
                        _this.clickCount = 0;
                        _this.triggerSingleClick(event);
                    }, event.tracker.dblClickTimeThreshold);
                }
                else if (_this.clickCount === 2) {
                    clearTimeout(_this.dblClickTimeOut);
                    _this.clickCount = 0;
                    _this.triggerDoubleClick(event);
                }
            }
        };
        this.reset();
    }
    ClickService.prototype.reset = function () {
        this.singleClickHandlers = [];
        this.doubleClickHandlers = [];
    };
    ClickService.prototype.addSingleClickHandler = function (singleClickHandler) {
        this.singleClickHandlers.push(singleClickHandler);
    };
    ClickService.prototype.addDoubleClickHandler = function (doubleClickHandler) {
        this.doubleClickHandlers.push(doubleClickHandler);
    };
    ClickService.prototype.triggerSingleClick = function (event) {
        this.singleClickHandlers.forEach(function (handler) {
            handler(event);
        });
    };
    ClickService.prototype.triggerDoubleClick = function (event) {
        this.doubleClickHandlers.forEach(function (handler) {
            handler(event);
        });
    };
    ClickService = __decorate([
        Injectable()
    ], ClickService);
    return ClickService;
}());
export { ClickService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2NsaWNrLXNlcnZpY2UvY2xpY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQU1FO1FBQUEsaUJBRUM7UUFMTyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBZ0N2QixVQUFLLEdBQUcsVUFBQyxLQUFVO1lBQ2pCLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7WUFDbEMsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNmLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxLQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDekIsS0FBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ3pDO3FCQUFNLElBQUksS0FBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7b0JBQ2hDLFlBQVksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hDO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUEzQ0EsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDRDQUFxQixHQUFyQixVQUFzQixrQkFBd0M7UUFDNUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw0Q0FBcUIsR0FBckIsVUFBc0Isa0JBQXdDO1FBQzVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8seUNBQWtCLEdBQTFCLFVBQTJCLEtBQVU7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQVk7WUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHlDQUFrQixHQUExQixVQUEyQixLQUFVO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFZO1lBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ1UsWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZLENBbUR4QjtJQUFELG1CQUFDO0NBQUEsQUFuREQsSUFtREM7U0FuRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaWNrU2VydmljZSB7XG4gIHByaXZhdGUgc2luZ2xlQ2xpY2tIYW5kbGVyczogQXJyYXk8KGV2ZW50OiBhbnkpID0+IHZvaWQ+O1xuICBwcml2YXRlIGRvdWJsZUNsaWNrSGFuZGxlcnM6IEFycmF5PChldmVudDogYW55KSA9PiB2b2lkPjtcbiAgcHJpdmF0ZSBjbGlja0NvdW50ID0gMDtcbiAgcHJpdmF0ZSBkYmxDbGlja1RpbWVPdXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnNpbmdsZUNsaWNrSGFuZGxlcnMgPSBbXTtcbiAgICB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZFNpbmdsZUNsaWNrSGFuZGxlcihzaW5nbGVDbGlja0hhbmRsZXI6IChldmVudDogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5zaW5nbGVDbGlja0hhbmRsZXJzLnB1c2goc2luZ2xlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZERvdWJsZUNsaWNrSGFuZGxlcihkb3VibGVDbGlja0hhbmRsZXI6IChldmVudDogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5kb3VibGVDbGlja0hhbmRsZXJzLnB1c2goZG91YmxlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlclNpbmdsZUNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUNsaWNrSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogYW55KSA9PiB7XG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlckRvdWJsZUNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogYW55KSA9PiB7XG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdEFjdGlvbiA9IHRydWU7XG4gICAgaWYgKGV2ZW50LnF1aWNrKSB7XG4gICAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICAgIGlmICh0aGlzLmNsaWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5kYmxDbGlja1RpbWVPdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSAwO1xuICAgICAgICAgIHRoaXMudHJpZ2dlclNpbmdsZUNsaWNrKGV2ZW50KTtcbiAgICAgICAgfSwgZXZlbnQudHJhY2tlci5kYmxDbGlja1RpbWVUaHJlc2hvbGQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNsaWNrQ291bnQgPT09IDIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGJsQ2xpY2tUaW1lT3V0KTtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy50cmlnZ2VyRG91YmxlQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==