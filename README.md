# Buscador de usuarios — Directorio de usuarios (Caso 0)

Aplicación React + TypeScript + Vite con un **buscador de usuarios** por nombre, developed as a solution to the *Caso 0* challenge of the [Directorio de usuarios](https://github.com/goncy/interview-challenges/tree/main/proyectos-live/directorio-usuarios) interview challenge.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)

## Qué resuelve

Estado de carga, listado y filtrado de usuarios por nombre, con contador de resultados y mensaje de "Sin coincidencias".

## Tareas completadas

- [x] Mostrar los usuarios al cargar la aplicación
- [x] El buscador filtra correctamente los usuarios
- [x] Mostrar un texto de "Cargando..." hasta que obtengamos los datos
- [x] Mostrar la cantidad total de usuarios en el encabezado
- [x] Mostrar un contador "X resultados de Y usuarios" según los filtros aplicados
- [x] Mostrar un mensaje "Sin resultados" cuando la búsqueda no encuentra coincidencias

## Detalles de implementación

- **Búsqueda normalizada**: `toLocaleLowerCase().trim().normalize("NFD")` en ambos lados de la comparación, para que el filtro funcione sin importar mayúsculas, espacios sobrantes ni acentos.
- **Memoización con `useMemo`**: el filtro se recalcula solo cuando cambian `query` o `users`, evitando re-filtrados innecesarios en cada re-render.
- **Estado de carga**: `isLoading` se activa antes de la petición y se apaga en el `finally`, de modo que el spinner desaparece tanto si la promesa resuelve como si falla.

## Cómo ejecutarlo

```bash
pnpm install     # o: npm install
pnpm dev         # o: npm run dev
```

Para el build de producción:

```bash
pnpm build       # tsc && vite build
pnpm preview
```

## Estructura

```
src/
  App.tsx      # componente principal: estado, filtro, render del listado
  api.ts       # capa de datos simulada (resuelve con 1s de delay)
  types.ts     # interfaz User
  index.css    # estilos base
  main.tsx     # punto de entrada
```

## Créditos

Consigna original: [goncy/interview-challenges](https://github.com/goncy/interview-challenges) — *Directorio de usuarios, Caso 0*. La solución de este repositorio es propia.
