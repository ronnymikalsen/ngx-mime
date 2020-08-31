import { ContentDialogState } from './content-dialog-state';
import { ContentsSearchDialogState } from './contents-search-dialog-state';
import { HelpDialogState } from './help-dialog-state';
var ViewerState = /** @class */ (function () {
    function ViewerState(fields) {
        this.contentDialogState = new ContentDialogState();
        this.contentsSearchDialogState = new ContentsSearchDialogState();
        this.helpDialogState = new HelpDialogState();
        if (fields) {
            this.contentDialogState = fields.contentDialogState
                ? fields.contentDialogState
                : this.contentDialogState;
            this.contentsSearchDialogState = fields.contentsSearchDialogState
                ? fields.contentsSearchDialogState
                : this.contentsSearchDialogState;
            this.helpDialogState = fields.helpDialogState
                ? fields.helpDialogState
                : this.helpDialogState;
        }
    }
    return ViewerState;
}());
export { ViewerState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyU3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9tb2RlbHMvdmlld2VyU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBS0UscUJBQVksTUFJWDtRQVJNLHVCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUM5Qyw4QkFBeUIsR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7UUFDNUQsb0JBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBTzdDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0I7Z0JBQ2pELENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCO2dCQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQzVCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMseUJBQXlCO2dCQUMvRCxDQUFDLENBQUMsTUFBTSxDQUFDLHlCQUF5QjtnQkFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlO2dCQUMzQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWU7Z0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnREaWFsb2dTdGF0ZSB9IGZyb20gJy4vY29udGVudC1kaWFsb2ctc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZSB9IGZyb20gJy4vY29udGVudHMtc2VhcmNoLWRpYWxvZy1zdGF0ZSc7XG5pbXBvcnQgeyBIZWxwRGlhbG9nU3RhdGUgfSBmcm9tICcuL2hlbHAtZGlhbG9nLXN0YXRlJztcblxuZXhwb3J0IGNsYXNzIFZpZXdlclN0YXRlIHtcbiAgcHVibGljIGNvbnRlbnREaWFsb2dTdGF0ZSA9IG5ldyBDb250ZW50RGlhbG9nU3RhdGUoKTtcbiAgcHVibGljIGNvbnRlbnRzU2VhcmNoRGlhbG9nU3RhdGUgPSBuZXcgQ29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZSgpO1xuICBwdWJsaWMgaGVscERpYWxvZ1N0YXRlID0gbmV3IEhlbHBEaWFsb2dTdGF0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKGZpZWxkcz86IHtcbiAgICBjb250ZW50RGlhbG9nU3RhdGU/OiBDb250ZW50RGlhbG9nU3RhdGU7XG4gICAgY29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZT86IENvbnRlbnRzU2VhcmNoRGlhbG9nU3RhdGU7XG4gICAgaGVscERpYWxvZ1N0YXRlPzogSGVscERpYWxvZ1N0YXRlO1xuICB9KSB7XG4gICAgaWYgKGZpZWxkcykge1xuICAgICAgdGhpcy5jb250ZW50RGlhbG9nU3RhdGUgPSBmaWVsZHMuY29udGVudERpYWxvZ1N0YXRlXG4gICAgICAgID8gZmllbGRzLmNvbnRlbnREaWFsb2dTdGF0ZVxuICAgICAgICA6IHRoaXMuY29udGVudERpYWxvZ1N0YXRlO1xuICAgICAgdGhpcy5jb250ZW50c1NlYXJjaERpYWxvZ1N0YXRlID0gZmllbGRzLmNvbnRlbnRzU2VhcmNoRGlhbG9nU3RhdGVcbiAgICAgICAgPyBmaWVsZHMuY29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZVxuICAgICAgICA6IHRoaXMuY29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZTtcbiAgICAgIHRoaXMuaGVscERpYWxvZ1N0YXRlID0gZmllbGRzLmhlbHBEaWFsb2dTdGF0ZVxuICAgICAgICA/IGZpZWxkcy5oZWxwRGlhbG9nU3RhdGVcbiAgICAgICAgOiB0aGlzLmhlbHBEaWFsb2dTdGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==