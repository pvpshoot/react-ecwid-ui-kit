This is Modal component witch extends [react-modal](https://github.com/reactjs/react-modal)

```
const getParent = () => document.getElementById('Modal-container').getElementsByClassName('ReactStyleguidist-Playground__root')[0];

const modalStyles = {
  overlay: {
    position: 'relative',
    minHeight: '50vh',
  }
};

<Modal 
  isOpen
  onRequestClose={() => ({})} 
  contentLabel="KEK"
  parentSelector={getParent}
  style={modalStyles}
>
  <h1>Kek</h1>
</Modal>
```
