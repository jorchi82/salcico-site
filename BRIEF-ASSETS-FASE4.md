# SALCICO · Brief de Assets — Fase 4

Cada prompt es **copia-y-pega autónomo**: ya incluye todas las especificaciones.
Solo selecciona el bloque que quieras y pégalo.

---

# 🎬 VIDEO DEL HERO (Gemini Omni)

Genera UNO de estos tres. Después colócalo en `/public/hero/` como
`hero-loop.mp4` (y opcionalmente `hero-loop.webm`).

### Opción A — Plataforma offshore (RECOMENDADO)
```
Slow cinematic push-in toward a massive offshore oil & gas platform, captured wide-angle. Premium cinematic style with a cool steel-blue color grade (#4f86b8), desaturated and moody industrial tones. Lighting is soft blue-hour ambiance with volumetric haze and metallic reflections on the steel structures and flare stack. The location is calm open ocean around the platform, no people in sight, no text or logos. The camera drifts slowly forward and settles into a still wide composition that leaves empty negative space in the lower-left of the frame for headline text. Aspect ratio 16:9, 8 seconds, 24fps, high resolution, photorealistic.
```

### Opción B — Pipelines / refinería
```
Slow cinematic tracking shot moving along converging industrial pipelines and valves, captured at a medium-wide angle. Premium cinematic style with a steel-blue monochromatic color grade (#4f86b8), high contrast and desaturated industrial tones. Lighting is cool dusk light with soft steam, condensation and metallic reflections. The location is a large refinery at dusk, no people in sight, no text or logos. The camera glides steadily and resolves into a clean static frame with empty dark space in the lower-left for text overlay. Aspect ratio 16:9, 8 seconds, 24fps, high resolution, photorealistic.
```

### Opción C — Equipo pesado / maquinaria
```
Slow-motion macro shot of heavy industrial machinery turning slowly — gears, drilling rig components and brushed steel surfaces, captured close-up with shallow depth of field. Premium cinematic style with a steel-blue color grade (#4f86b8), desaturated and moody, fine metallic texture. Lighting is cold directional light catching the metal edges. The location is an industrial drilling site interior, no people in sight, no text or logos. The camera moves slowly and settles into a static hero-ready composition with empty space in the lower-left. Aspect ratio 16:9, 8 seconds, 24fps, high resolution, photorealistic.
```

---

# 🖼️ IMÁGENES POR SECCIÓN (nanobanana / Gemini)

Coloca cada archivo en `/public/sections/` con el nombre indicado.

> **Coherencia + dinamismo:** todas comparten el acero `#4f86b8` como tono
> dominante y un acabado cinematográfico premium, pero cada una tiene su propio
> momento de luz y un acento de color que la diferencia. NO son "desaturadas y
> sombrías" — son ricas y contrastadas, con sombras profundas que las mantienen
> elegantes sobre el fondo oscuro del sitio.

### 1. heroCard — "Just-in-time industrial supply"
Archivo: `sections/card-supply.jpg`
```
Dynamic close-up of organized industrial warehouse shelving with labeled steel components and pipe fittings, strong leading lines and shallow depth of field. Cinematic premium look, dominant cool steel-blue tone (#4f86b8) lifted by a warm tungsten highlight raking across the metal, rich contrast and crisp specular reflections, deep clean shadows. Energetic and modern, not flat. No people, no logos, no text, no watermark. Aspect ratio 4:5 (vertical), high resolution, photorealistic.
```

### 2. División Oil & Gas
Archivo: `sections/oil-gas.jpg`
```
Dramatic wide shot of an offshore oil platform with a flare stack, low dynamic camera angle emphasizing scale, ocean spray and atmospheric haze. Cinematic premium look, dominant steel-blue palette (#4f86b8) with a warm golden-hour sun breaking through the clouds behind the structure, strong rim light on the steel, rich contrast and deep shadows. Bold and powerful. No people, no logos, no text, no watermark. Aspect ratio 16:9 (horizontal), high resolution, photorealistic.
```

### 3. División Maintenance
Archivo: `sections/maintenance.jpg`
```
Dynamic close-up of industrial maintenance in action — gloved hands grinding or welding a large steel valve, bright orange sparks flying against cool brushed metal. Cinematic premium look, dominant steel-blue tone (#4f86b8) contrasted by glowing warm orange spark light, high energy, crisp motion, rich contrast and deep shadows. Focus on craftsmanship and intensity. No faces, no logos, no text, no watermark. Aspect ratio 16:9 (horizontal), high resolution, photorealistic.
```

### 4. División Logistics
Archivo: `sections/logistics.jpg`
```
Dynamic wide aerial shot of a fleet of industrial cargo trucks and containers leaving a distribution yard at blue hour, sense of speed and motion with subtle light trails from headlights. Cinematic premium look, dominant cool steel-blue palette (#4f86b8) with warm amber headlight and sodium-lamp accents, strong diagonal composition, rich contrast and deep shadows. Fast, organized, premium. No people, no logos, no text, no watermark. Aspect ratio 16:9 (horizontal), high resolution, photorealistic.
```

### 5. División Supplies
Archivo: `sections/supplies.jpg`
```
Clean three-quarter shot of neatly arranged industrial inventory — pipes, fittings and safety gear on steel racks in a bright modern warehouse, strong perspective and depth. Cinematic premium look, dominant steel-blue tone (#4f86b8) with crisp bright cool daylight from above, airy and abundant, high clarity, rich contrast with controlled shadows. Organized and confident, brighter than the others. No people, no logos, no text, no watermark. Aspect ratio 16:9 (horizontal), high resolution, photorealistic.
```

### 6. División Green
Archivo: `sections/green.jpg`
```
Hopeful wide shot of an industrial facility integrated with clean energy — solar panels and wind turbines beside refinery structures under a fresh dawn sky. Cinematic premium look, dominant steel-blue palette (#4f86b8) energized by a vivid cool teal-green accent and soft warm sunrise glow on the horizon, bright and optimistic, rich contrast and clean depth. Forward-looking and alive. No people, no logos, no text, no watermark. Aspect ratio 16:9 (horizontal), high resolution, photorealistic.
```

---

# 🎞️ POSTER DEL HERO

El `hero-poster.jpg` es el frame de descanso del video. Si tu herramienta no lo
exporta, extrae el último frame del mp4 con este comando (pégalo en la terminal,
dentro de `/public/hero/`):
```
ffmpeg -sseof -0.1 -i hero-loop.mp4 -frames:v 1 -q:v 2 hero-poster.jpg
```

Archivos finales esperados:
- `/public/hero/hero-loop.mp4`
- `/public/hero/hero-loop.webm`  (opcional)
- `/public/hero/hero-poster.jpg`
- `/public/sections/card-supply.jpg`
- `/public/sections/oil-gas.jpg`
- `/public/sections/maintenance.jpg`
- `/public/sections/logistics.jpg`
- `/public/sections/supplies.jpg`
- `/public/sections/green.jpg`
