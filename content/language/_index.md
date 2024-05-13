+++
title = "Language"
weight = 5
+++

RPU strives to be compatible with GLSL and has a few features that make it easier to write procedural graphics. The language is still in development and is subject to change.

## Current Limitations

- Only signed integers are supported at the moment, i.e. no unsigned integer types and their associated bit operations. As RPU has a `rand()` function which generates high quality random numbers on the Rust side, I do not see unsigned integers as a priority right now.

- Function parameters do not support `in`, `out` or `inout` right now. Vectors and matrices are passed by value, structs are passed by reference. **I will add support for inout parameters in the near future.**

- Arguments to vector based functions can only be scalars at the moment. For example `mix(vec3(0), vec3(1), 0.5)` works fine, but `mix(vec3(0), vec3(1), vec3(0.5))` does not.

- Basic preprocessor which currency only supports `#define`.

- No textures yet, coming soon.

## Additional Features

RPU has a `rand()` function which generates high quality random numbers in [0.0..1.0].

{{% notice style="note" %}}
`vec3(rand())` will generate a vector with a unique random number for each component.
{{% /notice %}}

## Currently implemented

- **Basic types**: int, ivec2, ivec3, ivec4, float, vec2, vec3, vec4, mat2, mat3, mat4 and custom structs
- **Math operators**: +, -, \*, /
- **Math functions**: dot, cross, mix, smoothstep, length, normalize, sin, cos, sqrt, ceil, floor, fract, abs, tan, atan, degrees, radians, min, max, pow, rand, clamp, sign, mod, step, exp, log
- **Control structures**: if, else, ternary (?:), while, for, break, return, const, export
- **Assignment**: =, +=, -=, \*=, /=
- **Swizzles**: vec2.xy, vec3.xyz, vec4.xyzw etc
- **Comments**: `//` and `/* */`

## Implementation notes

All vector based operations (length, dot, cross etc) are implemented in pure WebAssembly. Trigonometric functions (which are not natively supported in WA) are implemented in Rust and are called via the wasmer runtime.

I got a bit lazy at the end and implemented some functions in Rust that could be implemented in WebAssembly (for example _sign_ and _clamp_). I will move them to WebAssembly in the future.

Vectors and matrices are passed by value, structs are passed by reference. This means that if you pass a struct to a function, the function can modify the original struct. I will make this more robust when working on in / inout / out arguments.
