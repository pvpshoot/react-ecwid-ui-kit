Select component :
```
const TEST_DATA = [
  {
    value: 1,
    label: 'Label',
  },
  {
    value: 'Radio',
    note: 'with note',
  },
  {
    value: 'disabled',
    disabled: true,
  },
  {
    value: 'selected',
    checked: true,
  },
];
<div>
  <Select options={TEST_DATA} size="large"/>
  <Select options={TEST_DATA} />
  <Select options={TEST_DATA} size="small"/>
</div>
```

