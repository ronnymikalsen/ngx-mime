var ManifestUtils = /** @class */ (function () {
    function ManifestUtils() {
    }
    ManifestUtils.isManifestPaged = function (manifest) {
        return (manifest &&
            (manifest.viewingHint === 'paged' ||
                (manifest.sequences && manifest.sequences[0].viewingHint === 'paged')));
    };
    return ManifestUtils;
}());
export { ManifestUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWlpZi1tYW5pZmVzdC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBQUE7SUFRQSxDQUFDO0lBUFEsNkJBQWUsR0FBdEIsVUFBdUIsUUFBa0I7UUFDdkMsT0FBTyxDQUNMLFFBQVE7WUFDUixDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssT0FBTztnQkFDL0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcblxuZXhwb3J0IGNsYXNzIE1hbmlmZXN0VXRpbHMge1xuICBzdGF0aWMgaXNNYW5pZmVzdFBhZ2VkKG1hbmlmZXN0OiBNYW5pZmVzdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBtYW5pZmVzdCAmJlxuICAgICAgKG1hbmlmZXN0LnZpZXdpbmdIaW50ID09PSAncGFnZWQnIHx8XG4gICAgICAgIChtYW5pZmVzdC5zZXF1ZW5jZXMgJiYgbWFuaWZlc3Quc2VxdWVuY2VzWzBdLnZpZXdpbmdIaW50ID09PSAncGFnZWQnKSlcbiAgICApO1xuICB9XG59XG4iXX0=