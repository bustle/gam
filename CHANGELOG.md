## Changelog

### v.0.0.5
* Restored types to the bundle

### v.0.0.4
* Accidentally published the unbundled src instead of the bundle, corrected

### v.0.0.3
* BUGFIX: Added RequestOptions argument type to createTaglessRequest definition

### v0.0.2
* BREAKING: Enforces a userAgent as an option to createTaglessRequest
  - Ad Manager will not count impressions of pixels requested with a different user-agent than the one used to fire the tagless request. As such, you should include the userAgent you intend to fire the impression with.

### v.0.0.1
Introduces a `createTaglessRequest` function and relevant types for making calls to the Ad Manager tagless request endpoint.
