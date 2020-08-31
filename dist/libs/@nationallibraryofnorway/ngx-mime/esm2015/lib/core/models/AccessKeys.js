export class AccessKeys {
    constructor(event) {
        this.altKey = false;
        this.shiftKey = false;
        this.ctrlkey = false;
        this.keyCode = event.keyCode;
        this.altKey = event.altKey;
        this.shiftKey = event.shiftKey;
        this.ctrlkey = event.ctrlKey;
    }
    isArrowRightKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.ARROWRIGHT);
    }
    isArrowLeftKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.ARROWLEFT);
    }
    isPageUpKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.PAGEUP);
    }
    isPageDownKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.PAGEDOWN);
    }
    isFirstCanvasGroupKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.firstCanvasGroupCodes));
    }
    isLastCanvasGroupKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.lastCanvasGroupCodes));
    }
    isSliderKeys() {
        return (this.isArrowLeftKeys() ||
            this.isArrowRightKeys() ||
            this.isPageDownKeys() ||
            this.isPageUpKeys() ||
            this.isFirstCanvasGroupKeys() ||
            this.isLastCanvasGroupKeys());
    }
    isZoomInKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.zoomInCodes));
    }
    isZoomOutKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.zoomOutCodes));
    }
    isZoomHomeKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.zoomHomeCodes));
    }
    isNextHitKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.nextHit);
    }
    isPreviousHitKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.previousHit));
    }
    isSearchDialogKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.toggleSearchDialogCodes));
    }
    isContentsDialogKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.toggleContentsDialogCodes));
    }
    isFullscreenKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.toggleFullscreenCodes));
    }
    isResetSearchKeys() {
        return (this.isShiftPressed() && this.arrayContainsKeys(AccessKeys.resetSearch));
    }
    isRotateKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.rotateCwCodes));
    }
    isMultiKeys() {
        return this.altKey || this.shiftKey || this.ctrlkey;
    }
    arrayContainsKeys(keys) {
        return keys.indexOf(this.keyCode) > -1;
    }
    isShiftPressed() {
        return this.shiftKey;
    }
}
AccessKeys.PAGEDOWN = [34];
AccessKeys.PAGEUP = [33];
AccessKeys.ARROWRIGHT = [39];
AccessKeys.ARROWLEFT = [37];
AccessKeys.firstCanvasGroupCodes = [36]; // Home
AccessKeys.lastCanvasGroupCodes = [35]; // End
AccessKeys.zoomInCodes = [107, 187, 171]; // +, numpad and standard position, Firefox uses 171 for standard position
AccessKeys.zoomOutCodes = [109, 189, 173]; // -, numpad and standard position, Firefox uses 173 for standard position
AccessKeys.zoomHomeCodes = [96, 48]; // 0
AccessKeys.nextHit = [78]; // n
AccessKeys.previousHit = [80]; // p
AccessKeys.toggleSearchDialogCodes = [83]; // s
AccessKeys.toggleContentsDialogCodes = [67]; // C
AccessKeys.toggleFullscreenCodes = [70]; // f
AccessKeys.resetSearch = [83]; // s
AccessKeys.rotateCwCodes = [82]; // r
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzS2V5cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL21vZGVscy9BY2Nlc3NLZXlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxVQUFVO0lBc0JyQixZQUFZLEtBQW9CO1FBSnhCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxlQUFlO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sWUFBWTtRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLGNBQWM7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVF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c3MgQWNjZXNzS2V5cyB7XG4gIHB1YmxpYyBzdGF0aWMgUEFHRURPV04gPSBbMzRdO1xuICBwdWJsaWMgc3RhdGljIFBBR0VVUCA9IFszM107XG4gIHB1YmxpYyBzdGF0aWMgQVJST1dSSUdIVCA9IFszOV07XG4gIHB1YmxpYyBzdGF0aWMgQVJST1dMRUZUID0gWzM3XTtcbiAgcHVibGljIHN0YXRpYyBmaXJzdENhbnZhc0dyb3VwQ29kZXMgPSBbMzZdOyAvLyBIb21lXG4gIHB1YmxpYyBzdGF0aWMgbGFzdENhbnZhc0dyb3VwQ29kZXMgPSBbMzVdOyAvLyBFbmRcbiAgcHVibGljIHN0YXRpYyB6b29tSW5Db2RlcyA9IFsxMDcsIDE4NywgMTcxXTsgLy8gKywgbnVtcGFkIGFuZCBzdGFuZGFyZCBwb3NpdGlvbiwgRmlyZWZveCB1c2VzIDE3MSBmb3Igc3RhbmRhcmQgcG9zaXRpb25cbiAgcHVibGljIHN0YXRpYyB6b29tT3V0Q29kZXMgPSBbMTA5LCAxODksIDE3M107IC8vIC0sIG51bXBhZCBhbmQgc3RhbmRhcmQgcG9zaXRpb24sIEZpcmVmb3ggdXNlcyAxNzMgZm9yIHN0YW5kYXJkIHBvc2l0aW9uXG4gIHB1YmxpYyBzdGF0aWMgem9vbUhvbWVDb2RlcyA9IFs5NiwgNDhdOyAvLyAwXG4gIHB1YmxpYyBzdGF0aWMgbmV4dEhpdCA9IFs3OF07IC8vIG5cbiAgcHVibGljIHN0YXRpYyBwcmV2aW91c0hpdCA9IFs4MF07IC8vIHBcbiAgcHVibGljIHN0YXRpYyB0b2dnbGVTZWFyY2hEaWFsb2dDb2RlcyA9IFs4M107IC8vIHNcbiAgcHVibGljIHN0YXRpYyB0b2dnbGVDb250ZW50c0RpYWxvZ0NvZGVzID0gWzY3XTsgLy8gQ1xuICBwdWJsaWMgc3RhdGljIHRvZ2dsZUZ1bGxzY3JlZW5Db2RlcyA9IFs3MF07IC8vIGZcbiAgcHVibGljIHN0YXRpYyByZXNldFNlYXJjaCA9IFs4M107IC8vIHNcbiAgcHVibGljIHN0YXRpYyByb3RhdGVDd0NvZGVzID0gWzgyXTsgLy8gclxuICBwcml2YXRlIGtleUNvZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBhbHRLZXkgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzaGlmdEtleSA9IGZhbHNlO1xuICBwcml2YXRlIGN0cmxrZXkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMua2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgdGhpcy5hbHRLZXkgPSBldmVudC5hbHRLZXk7XG4gICAgdGhpcy5zaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgIHRoaXMuY3RybGtleSA9IGV2ZW50LmN0cmxLZXk7XG4gIH1cblxuICBwdWJsaWMgaXNBcnJvd1JpZ2h0S2V5cygpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNNdWx0aUtleXMoKSAmJiB0aGlzLmFycmF5Q29udGFpbnNLZXlzKEFjY2Vzc0tleXMuQVJST1dSSUdIVCk7XG4gIH1cblxuICBwdWJsaWMgaXNBcnJvd0xlZnRLZXlzKCkge1xuICAgIHJldHVybiAhdGhpcy5pc011bHRpS2V5cygpICYmIHRoaXMuYXJyYXlDb250YWluc0tleXMoQWNjZXNzS2V5cy5BUlJPV0xFRlQpO1xuICB9XG5cbiAgcHVibGljIGlzUGFnZVVwS2V5cygpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNNdWx0aUtleXMoKSAmJiB0aGlzLmFycmF5Q29udGFpbnNLZXlzKEFjY2Vzc0tleXMuUEFHRVVQKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1BhZ2VEb3duS2V5cygpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNNdWx0aUtleXMoKSAmJiB0aGlzLmFycmF5Q29udGFpbnNLZXlzKEFjY2Vzc0tleXMuUEFHRURPV04pO1xuICB9XG5cbiAgcHVibGljIGlzRmlyc3RDYW52YXNHcm91cEtleXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmlzTXVsdGlLZXlzKCkgJiZcbiAgICAgIHRoaXMuYXJyYXlDb250YWluc0tleXMoQWNjZXNzS2V5cy5maXJzdENhbnZhc0dyb3VwQ29kZXMpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xhc3RDYW52YXNHcm91cEtleXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmlzTXVsdGlLZXlzKCkgJiZcbiAgICAgIHRoaXMuYXJyYXlDb250YWluc0tleXMoQWNjZXNzS2V5cy5sYXN0Q2FudmFzR3JvdXBDb2RlcylcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzU2xpZGVyS2V5cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pc0Fycm93TGVmdEtleXMoKSB8fFxuICAgICAgdGhpcy5pc0Fycm93UmlnaHRLZXlzKCkgfHxcbiAgICAgIHRoaXMuaXNQYWdlRG93bktleXMoKSB8fFxuICAgICAgdGhpcy5pc1BhZ2VVcEtleXMoKSB8fFxuICAgICAgdGhpcy5pc0ZpcnN0Q2FudmFzR3JvdXBLZXlzKCkgfHxcbiAgICAgIHRoaXMuaXNMYXN0Q2FudmFzR3JvdXBLZXlzKClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzWm9vbUluS2V5cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuaXNNdWx0aUtleXMoKSAmJiB0aGlzLmFycmF5Q29udGFpbnNLZXlzKEFjY2Vzc0tleXMuem9vbUluQ29kZXMpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1pvb21PdXRLZXlzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5pc011bHRpS2V5cygpICYmIHRoaXMuYXJyYXlDb250YWluc0tleXMoQWNjZXNzS2V5cy56b29tT3V0Q29kZXMpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1pvb21Ib21lS2V5cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuaXNNdWx0aUtleXMoKSAmJiB0aGlzLmFycmF5Q29udGFpbnNLZXlzKEFjY2Vzc0tleXMuem9vbUhvbWVDb2RlcylcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzTmV4dEhpdEtleXMoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTXVsdGlLZXlzKCkgJiYgdGhpcy5hcnJheUNvbnRhaW5zS2V5cyhBY2Nlc3NLZXlzLm5leHRIaXQpO1xuICB9XG5cbiAgcHVibGljIGlzUHJldmlvdXNIaXRLZXlzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5pc011bHRpS2V5cygpICYmIHRoaXMuYXJyYXlDb250YWluc0tleXMoQWNjZXNzS2V5cy5wcmV2aW91c0hpdClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzU2VhcmNoRGlhbG9nS2V5cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuaXNNdWx0aUtleXMoKSAmJlxuICAgICAgdGhpcy5hcnJheUNvbnRhaW5zS2V5cyhBY2Nlc3NLZXlzLnRvZ2dsZVNlYXJjaERpYWxvZ0NvZGVzKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNDb250ZW50c0RpYWxvZ0tleXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmlzTXVsdGlLZXlzKCkgJiZcbiAgICAgIHRoaXMuYXJyYXlDb250YWluc0tleXMoQWNjZXNzS2V5cy50b2dnbGVDb250ZW50c0RpYWxvZ0NvZGVzKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNGdWxsc2NyZWVuS2V5cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuaXNNdWx0aUtleXMoKSAmJlxuICAgICAgdGhpcy5hcnJheUNvbnRhaW5zS2V5cyhBY2Nlc3NLZXlzLnRvZ2dsZUZ1bGxzY3JlZW5Db2RlcylcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzUmVzZXRTZWFyY2hLZXlzKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzU2hpZnRQcmVzc2VkKCkgJiYgdGhpcy5hcnJheUNvbnRhaW5zS2V5cyhBY2Nlc3NLZXlzLnJlc2V0U2VhcmNoKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNSb3RhdGVLZXlzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5pc011bHRpS2V5cygpICYmIHRoaXMuYXJyYXlDb250YWluc0tleXMoQWNjZXNzS2V5cy5yb3RhdGVDd0NvZGVzKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzTXVsdGlLZXlzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFsdEtleSB8fCB0aGlzLnNoaWZ0S2V5IHx8IHRoaXMuY3RybGtleTtcbiAgfVxuXG4gIHByaXZhdGUgYXJyYXlDb250YWluc0tleXMoa2V5czogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5cy5pbmRleE9mKHRoaXMua2V5Q29kZSkgPiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTaGlmdFByZXNzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRLZXk7XG4gIH1cbn1cbiJdfQ==