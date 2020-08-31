var ContentDialogState = /** @class */ (function () {
    function ContentDialogState(fields) {
        this.isOpen = false;
        this.selectedIndex = 0;
        if (fields) {
            this.isOpen = fields.isOpen !== undefined ? fields.isOpen : this.isOpen;
            this.selectedIndex =
                fields.selectedIndex !== undefined
                    ? fields.selectedIndex
                    : this.selectedIndex;
        }
    }
    return ContentDialogState;
}());
export { ContentDialogState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1kaWFsb2ctc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9tb2RlbHMvY29udGVudC1kaWFsb2ctc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFJRSw0QkFBWSxNQUFxRDtRQUgxRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHdkIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hFLElBQUksQ0FBQyxhQUFhO2dCQUNoQixNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVM7b0JBQ2hDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYTtvQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb250ZW50RGlhbG9nU3RhdGUge1xuICBwdWJsaWMgaXNPcGVuID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcihmaWVsZHM/OiB7IGlzT3Blbj86IGJvb2xlYW47IHNlbGVjdGVkSW5kZXg/OiBudW1iZXIgfSkge1xuICAgIGlmIChmaWVsZHMpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmllbGRzLmlzT3BlbiAhPT0gdW5kZWZpbmVkID8gZmllbGRzLmlzT3BlbiA6IHRoaXMuaXNPcGVuO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID1cbiAgICAgICAgZmllbGRzLnNlbGVjdGVkSW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gZmllbGRzLnNlbGVjdGVkSW5kZXhcbiAgICAgICAgICA6IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==