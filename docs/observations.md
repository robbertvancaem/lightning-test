# Observations

## Documentation (lightningjs.io/docs)
- Examples don't show import statements
- Examples are called 'Live demos', I would expect a link to a CodeSandbox is it's called a Live demo.
- Documentation uses the (assumed to be) outdated way of calling/importing `Lightning` as `lng` from the SDK
- At [Component Creation](https://lightningjs.io/docs/#/lightning-core-reference/Components/CompCreation) it is mentioned that additional parameters can be passed to components. However, it looks like some names (e.g. 'text') are reserved for specific functionality. Some ways of getting around this are:
  - Mentioning the reserved parameter names
  - Throwing errors in the Lightning Component SDK when a reserved parameter name is used
  - Adding a special parameter (e.g. `params` or `props`) that passes down all custom parameters without transforming any data or interference with existing functionality.

## Nice to haves
- When initiating a canvas and using the `precision` setting, the rendered canvas is still 100% of the original size. It would be expected that the canvas also shrinks to the size that matches the value for `precision`.
