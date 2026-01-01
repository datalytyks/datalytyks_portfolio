# n8n-demo-component-custom

Custom fork of the [n8n-demo-component](https://github.com/n8n-io/n8n-demo-webcomponent) with additional features.

## Custom Features

### `disablenodeclicks` Attribute

This fork adds a `disablenodeclicks` attribute that allows pan/zoom interaction while preventing users from clicking on nodes to open the Node Detail View.

```html
<n8n-demo 
    workflow='{"nodes":[...],"connections":{}}' 
    disablenodeclicks="true"
></n8n-demo>
```

**Behavior:**
- ✅ Pan/zoom works
- ✅ Workflow renders normally
- ❌ Clicking nodes does NOT open details
- ❌ No fullscreen node view

This is useful for portfolio displays where you want to show workflows visually without exposing sensitive node configurations.

## Building

```bash
npm install
npm run build
```

This creates `n8n-demo.bundled.js` which you can host and use.

## Usage

```html
<!-- Include required polyfills -->
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js"></script>
<script src="https://unpkg.com/lit@2.0.0-rc.2/polyfill-support.js"></script>

<!-- Include your custom build -->
<script type="module" src="path/to/n8n-demo.bundled.js"></script>

<!-- Use the component -->
<n8n-demo 
    workflow='{"nodes":[...],"connections":{}}' 
    disablenodeclicks="true"
></n8n-demo>
```

## All Available Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `workflow` | `'{}'` | Workflow JSON to display |
| `frame` | `'false'` | Add frame around canvas with code toggle |
| `collapseformobile` | `'true'` | Collapse on mobile devices |
| `clicktointeract` | `'false'` | Require click before interaction |
| `hidecanvaserrors` | `'false'` | Hide node errors |
| `disableinteractivity` | `'false'` | Disable ALL interactions |
| `disablenodeclicks` | `'false'` | **Custom:** Disable node clicks only (allows pan/zoom) |
| `theme` | - | Force `'light'` or `'dark'` theme |

## License

ISC (same as original n8n-demo-component)

## Credits

Original component by [n8n-io](https://github.com/n8n-io/n8n-demo-webcomponent)
