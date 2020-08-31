export class ManifestUtils {
    static isManifestPaged(manifest) {
        return (manifest &&
            (manifest.viewingHint === 'paged' ||
                (manifest.sequences && manifest.sequences[0].viewingHint === 'paged')));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWlpZi1tYW5pZmVzdC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBa0I7UUFDdkMsT0FBTyxDQUNMLFFBQVE7WUFDUixDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssT0FBTztnQkFDL0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5cbmV4cG9ydCBjbGFzcyBNYW5pZmVzdFV0aWxzIHtcbiAgc3RhdGljIGlzTWFuaWZlc3RQYWdlZChtYW5pZmVzdDogTWFuaWZlc3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbWFuaWZlc3QgJiZcbiAgICAgIChtYW5pZmVzdC52aWV3aW5nSGludCA9PT0gJ3BhZ2VkJyB8fFxuICAgICAgICAobWFuaWZlc3Quc2VxdWVuY2VzICYmIG1hbmlmZXN0LnNlcXVlbmNlc1swXS52aWV3aW5nSGludCA9PT0gJ3BhZ2VkJykpXG4gICAgKTtcbiAgfVxufVxuIl19