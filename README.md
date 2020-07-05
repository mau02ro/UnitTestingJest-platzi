# platzi-store

Curso de Pruebas unitarias con Jest

## Instalar

enzyme: libreria creada por air que nos va a permitir trabajar con pruebas y nuestros componentes de react.

```
npm i jest enzyme enzyme-adapter-react-(versionde react)16 --save-dev
```

## Configuración de Jest

### Adapter

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

### package.json

```
"jest": {
    "setupFilesAfterEnv": [
      "<rootDir>ruta del adapter"
    ]
  }
```

### **mocks**
