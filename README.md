## `<ExclusiveSelection />` Component
![ExclusiveSelection Component](https://github.com/cantyjeffrey/exclusive-selection/raw/master/example.gif)

## Usage
```js
        <ExclusiveSelection
          name="options"
          selectedValue={selectedValue}
          onChange={this.handleChange}
        >
          <ExclusiveSelectionInput value="yes" label="Yes" icon={thumbsUp} />
          <ExclusiveSelectionInput value="no" label="No" icon={thumbsDown} />
          <ExclusiveSelectionInput value="maybe" label="¯\_(ツ)_/¯" />
        </ExclusiveSelection>
```
