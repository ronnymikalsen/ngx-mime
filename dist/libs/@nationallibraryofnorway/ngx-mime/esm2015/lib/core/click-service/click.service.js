import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ClickService = class ClickService {
    constructor() {
        this.clickCount = 0;
        this.click = (event) => {
            event.preventDefaultAction = true;
            if (event.quick) {
                this.clickCount++;
                if (this.clickCount === 1) {
                    this.dblClickTimeOut = setTimeout(() => {
                        this.clickCount = 0;
                        this.triggerSingleClick(event);
                    }, event.tracker.dblClickTimeThreshold);
                }
                else if (this.clickCount === 2) {
                    clearTimeout(this.dblClickTimeOut);
                    this.clickCount = 0;
                    this.triggerDoubleClick(event);
                }
            }
        };
        this.reset();
    }
    reset() {
        this.singleClickHandlers = [];
        this.doubleClickHandlers = [];
    }
    addSingleClickHandler(singleClickHandler) {
        this.singleClickHandlers.push(singleClickHandler);
    }
    addDoubleClickHandler(doubleClickHandler) {
        this.doubleClickHandlers.push(doubleClickHandler);
    }
    triggerSingleClick(event) {
        this.singleClickHandlers.forEach((handler) => {
            handler(event);
        });
    }
    triggerDoubleClick(event) {
        this.doubleClickHandlers.forEach((handler) => {
            handler(event);
        });
    }
};
ClickService = __decorate([
    Injectable()
], ClickService);
export { ClickService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2NsaWNrLXNlcnZpY2UvY2xpY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBTXZCO1FBSFEsZUFBVSxHQUFHLENBQUMsQ0FBQztRQWdDdkIsVUFBSyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDckIsS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ3pDO3FCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7b0JBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hDO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUEzQ0EsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHFCQUFxQixDQUFDLGtCQUF3QztRQUM1RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHFCQUFxQixDQUFDLGtCQUF3QztRQUM1RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEtBQVU7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUFVO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtZQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBa0JGLENBQUE7QUFuRFksWUFBWTtJQUR4QixVQUFVLEVBQUU7R0FDQSxZQUFZLENBbUR4QjtTQW5EWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpY2tTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzaW5nbGVDbGlja0hhbmRsZXJzOiBBcnJheTwoZXZlbnQ6IGFueSkgPT4gdm9pZD47XG4gIHByaXZhdGUgZG91YmxlQ2xpY2tIYW5kbGVyczogQXJyYXk8KGV2ZW50OiBhbnkpID0+IHZvaWQ+O1xuICBwcml2YXRlIGNsaWNrQ291bnQgPSAwO1xuICBwcml2YXRlIGRibENsaWNrVGltZU91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuc2luZ2xlQ2xpY2tIYW5kbGVycyA9IFtdO1xuICAgIHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgYWRkU2luZ2xlQ2xpY2tIYW5kbGVyKHNpbmdsZUNsaWNrSGFuZGxlcjogKGV2ZW50OiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLnNpbmdsZUNsaWNrSGFuZGxlcnMucHVzaChzaW5nbGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgYWRkRG91YmxlQ2xpY2tIYW5kbGVyKGRvdWJsZUNsaWNrSGFuZGxlcjogKGV2ZW50OiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlcnMucHVzaChkb3VibGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyU2luZ2xlQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2luZ2xlQ2xpY2tIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBhbnkpID0+IHtcbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyRG91YmxlQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBhbnkpID0+IHtcbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xpY2sgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0QWN0aW9uID0gdHJ1ZTtcbiAgICBpZiAoZXZlbnQucXVpY2spIHtcbiAgICAgIHRoaXMuY2xpY2tDb3VudCsrO1xuICAgICAgaWYgKHRoaXMuY2xpY2tDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmRibENsaWNrVGltZU91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDA7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyU2luZ2xlQ2xpY2soZXZlbnQpO1xuICAgICAgICB9LCBldmVudC50cmFja2VyLmRibENsaWNrVGltZVRocmVzaG9sZCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2xpY2tDb3VudCA9PT0gMikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kYmxDbGlja1RpbWVPdXQpO1xuICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnRyaWdnZXJEb3VibGVDbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19