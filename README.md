# arelia-web

Sitio web corporativo de **Arelia S.A.C.**, publicado en [arelia.com.pe](https://arelia.com.pe).

Es un sitio estático: HTML, CSS y JavaScript, sin compilación. Netlify publica automáticamente lo que esté en la rama `main`.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Página de inicio |
| `servicios.html` | Servicios |
| `contacto.html` | Contacto y formulario |
| `styles.css` | Estilos de todo el sitio |
| `i18n.js` | Textos en español e inglés |
| `assets/` | Logos, imágenes y favicons |

## Cómo publicar un cambio

1. **Crea una rama** para el cambio (por ejemplo, `ajuste-textos-servicios`). No edites `main` directamente.
2. **Haz el cambio** y guárdalo con un *commit* que diga qué cambiaste.
3. **Abre un pull request** hacia `main`. Netlify genera una vista previa con su propio enlace.
4. **Revisa la vista previa**. Si está bien, une el pull request (*Merge*).
5. Netlify publica en arelia.com.pe en menos de un minuto.

Para deshacer un cambio publicado: en Netlify, *Deploys* → elige el deploy anterior → *Publish deploy*.

## Formulario de contacto

El formulario `contacto` usa Netlify Forms. Los mensajes quedan en Netlify (*Forms*) y se notifican por correo.

## Reglas

- Nunca subir contraseñas, claves de API ni documentos internos: este repositorio es público.
- Los textos visibles se editan en `i18n.js` (español e inglés) además del HTML.
