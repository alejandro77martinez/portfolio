# 📁 Portafolio Personal — Documentación del Proyecto
 
> **Metodología aplicada:** Design Thinking &nbsp;|&nbsp; **Versión:** 1.0 &nbsp;|&nbsp; **Fecha:** Junio 2025 &nbsp;|&nbsp; **Estado:** ✅ Publicado
 
**Autor:** Alejandro Martínez · Desarrollador Full Stack  
**Formación:** Ingeniería de Software · UACM
 
Este documento aplica la metodología **Design Thinking** para registrar las decisiones de diseño, arquitectura y selección de proyectos del portafolio personal. El objetivo es explicar el *por qué* detrás de cada decisión, más allá de los detalles técnicos que ya se reflejan en el código.
 
---
 
## Índice
 
1. [Empatizar — ¿Para quién es el portafolio?](#1-empatizar)
2. [Definir — El problema a resolver](#2-definir)
3. [Idear — Decisiones de diseño y arquitectura](#3-idear)
4. [Prototipar — Lo que se construyó](#4-prototipar)
5. [Evaluar — Resultados y próximos pasos](#5-evaluar)
6. [Conclusión](#6-conclusión)
---
 
## 1. Empatizar
 
> *Identificar al usuario objetivo y sus necesidades antes de tomar decisiones de diseño.*
 
### Usuarios objetivo
 
| Perfil | Necesidad principal | Lo que busca en un portafolio |
|--------|---------------------|-------------------------------|
| 🔍 Reclutador técnico | Validar experiencia real | Proyectos con código, tecnologías claras y demos funcionales |
| 💼 Cliente freelance | Confiar en el desarrollador | Resultados visuales, variedad de proyectos y contacto fácil |
| 🎓 Colega / evaluador académico | Ver solidez técnica | Arquitectura, decisiones de diseño y documentación |
 
### Hallazgos clave
 
- Los reclutadores dedican en promedio **menos de 2 minutos** a un portafolio; la navegación debe ser inmediata.
- Un proyecto sin demo en vivo o sin enlace al código **reduce drásticamente la credibilidad**.
- La presencia de proyectos con **arquitectura backend real** (microservicios, seguridad, cloud) diferencia a un perfil junior de uno mid-level.
- El **stack tecnológico debe ser visible desde la primera pantalla**.
---
 
## 2. Definir
 
> *Sintetizar los hallazgos en una declaración de problema clara y accionable.*
 
### Declaración del problema
 
> *"Alejandro necesita un portafolio que demuestre, en menos de dos minutos, que puede diseñar y construir ecosistemas web completos: desde una API robusta con microservicios hasta una interfaz moderna y reactiva, usando tecnologías vigentes en el mercado."*
 
### Restricciones identificadas
 
- **⏱ Tiempo de atención:** el contenido debe ser escaneable, sin texto denso.
- **✅ Credibilidad:** cada proyecto necesita al menos demo funcional o código público.
- **🎯 Diferenciación:** el mercado está saturado de portafolios con solo proyectos frontend; era necesario incluir backend serio.
- **🔧 Mantenibilidad:** el portafolio debe poder actualizarse sin fricción — se eligió Next.js + Vercel para despliegues en segundos.
### Propuesta de valor
 
| Yo como… | Necesito… | Para… |
|-----------|-----------|-------|
| Desarrollador Full Stack buscando oportunidades | Mostrar proyectos reales con stack moderno de forma ordenada y accesible | Generar confianza en reclutadores y clientes en el menor tiempo posible |
 
---
 
## 3. Idear
 
> *Justificar las elecciones técnicas y de contenido tomadas durante el desarrollo.*
 
### Decisiones del portafolio
 
| Decisión | Justificación |
|----------|---------------|
| **Next.js 15 + TypeScript** | SSR para mejor SEO. El portafolio necesita ser indexable para aparecer en búsquedas de reclutadores. TypeScript añade robustez sin sobrecosto en un proyecto de esta escala. |
| **Tailwind CSS** | Velocidad de prototipado sin CSS personalizado. Permite mantener consistencia visual con utilidades atómicas. Ideal para un desarrollador trabajando en solitario. |
| **Vercel como hosting** | Deploy automático desde GitHub en cada push. Tiempo de inactividad cero. Plan gratuito suficiente para el tráfico esperado. |
| **Estructura de 4 secciones** (Inicio / Proyectos / Sobre mí / Contacto) | Navegación predecible alineada con el modelo mental del reclutador: *quién eres → qué has hecho → cómo contactarte*. |
| **Proyectos organizados por categoría** (Frontend / Backend / Full Stack) | Permite a distintos perfiles de visitante filtrar lo relevante sin leer todo el contenido. |
 
### Alternativas descartadas
 
| Alternativa | Razón del descarte |
|-------------|-------------------|
| WordPress / Wix | No refleja las habilidades técnicas del perfil |
| React puro (CRA / Vite) | Sin SSR nativo, peor SEO que Next.js |
| Portfolio SPA de una sola página | Dificulta el SEO y la navegación directa a secciones |
 
---
 
## 4. Prototipar
 
> *Registro de los proyectos incluidos y el criterio detrás de cada selección.*
 
### Criterios de selección de proyectos
 
- Debe existir **código público** o demo accesible (credibilidad).
- Cada proyecto debe cubrir un **área distinta** del stack (evitar redundancia).
- Al menos un proyecto debe mostrar **arquitectura backend seria** (microservicios, seguridad).
- Los proyectos deben ser **funcionales y desplegados**, no solo maquetas.
### Proyectos incluidos
 
| Proyecto | Categoría | Stack principal | Lo que demuestra | Estado |
|----------|-----------|-----------------|------------------|--------|
| **Portafolio de Proyectos Básicos** | Frontend | HTML · CSS · React · CodePen | Dominio de fundamentos web. Certificados FreeCodeCamp. | ✅ Publicado |
| **Task Manager Backend** | Backend | Java 21 · Spring Cloud · MongoDB · Docker · Oracle Cloud | Arquitectura de microservicios, JWT, SonarQube, cobertura de tests. | ✅ Publicado |
| **Task Manager Frontend** | Frontend | Angular 21 · TypeScript · Firebase · Tailwind · Signals | SPA reactiva, Kanban, chat en tiempo real, auth completa. | ✅ Publicado |
| **Portafolio Personal** | Full Stack | Next.js 15 · TypeScript · Tailwind · Vercel | Diseño UI/UX, SSR, SEO, despliegue continuo. | ✅ Publicado |
 
### Stack tecnológico global
 
<details>
<summary><b>Frontend</b></summary>
`React` `Next.js 15` `Angular 21` `TypeScript` `Tailwind CSS` `Angular Signals`
 
</details>
<details>
<summary><b>Backend</b></summary>
`Java 21` `Spring Boot` `Spring Cloud` `MongoDB Atlas` `JWT` `Docker`
 
</details>
<details>
<summary><b>DevOps / Cloud</b></summary>
`Oracle Cloud` `Firebase` `Vercel` `Docker Compose` `GitHub Actions`
 
</details>
<details>
<summary><b>Calidad</b></summary>
`SonarQube` `JUnit` `Mockito` `Jacoco` `Vitest`
 
</details>
---
 
## 5. Evaluar
 
> *Qué funciona, qué se puede mejorar y cuál es la hoja de ruta del portafolio.*
 
### ✅ Lo que funciona bien
 
- Navegación clara y rápida: las 4 secciones son accesibles desde el menú en un clic.
- Proyectos con demos en vivo y repositorios públicos: alta credibilidad técnica.
- Task Manager Backend destaca por su arquitectura de microservicios, algo poco común en portafolios junior/mid.
- Stack actualizado (Next.js 15, Angular 21, Java 21, Tailwind v4) alineado con el mercado 2025.
- Despliegue continuo en Vercel: actualizaciones sin fricción operacional.
- SonarQube y cobertura de tests como evidencia de calidad de código.
### ⚠️ Áreas de mejora identificadas

- **Sección About:** podría incluir una línea de tiempo de experiencia y formación para hacer el recorrido más visual.
- **Métricas de rendimiento:** agregar un badge de Lighthouse score reforzaría la narrativa de alto rendimiento.
- **Accesibilidad:** validar contraste y navegación por teclado en todos los componentes.
### 🗺️ Hoja de ruta (backlog)
 
| Prioridad | Tarea | Impacto esperado |
|-----------|-------|------------------|
| 🟡 Media | Línea de tiempo en la sección About | Mejor narrativa profesional |
| 🟡 Media | Badge de Lighthouse / Core Web Vitals | Refuerza el claim de alto rendimiento |
| 🟢 Baja | Modo oscuro / claro con toggle | UX mejorada |
| 🟢 Baja | Añadir proyecto con IA o LLM API | Relevancia con tendencias 2025 |
 
---
 
## 6. Conclusión
 
La aplicación de **Design Thinking** al portafolio de Alejandro Martínez permitió tomar decisiones fundamentadas en las necesidades del usuario objetivo (reclutadores, clientes y evaluadores académicos), y no solo en preferencias técnicas.
 
El resultado es un portafolio que comunica con claridad el perfil Full Stack: backend robusto con microservicios, frontend reactivo y moderno, y un proceso de desarrollo orientado a calidad. Las iteraciones futuras están identificadas y priorizadas en el backlog.
 
---
 
*Documento generado con Design Thinking · Alejandro Martínez · Ingeniería de Software UACM · 2025*