# Ejemplo de uso _**useFetch**_
<br>


```
const url = 'Url de una api';

const { error: null, data: null, loading: true } = useFetch(url);
```

### Valores:
**data** -> respuesta de la Api. <br>
**loading** -> aviso de la solicitud a la Api. Estado.<br>
**error** -> manejo de errores.