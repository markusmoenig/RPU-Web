var relearn_search_index = [
  {
    "content": "Initial Release (v0.3.0) - xx of May 2024 ",
    "description": "",
    "tags": null,
    "title": "News",
    "uri": "/news/index.html"
  },
  {
    "content": "From the Terminal RPU can be easily installed as a Rust subcommand.\nFirst, if you do not have already, install Rust and cargo on your system by following the easy steps here.\nAfter that you can install RPU by typing the following command in your terminal:\ncargo install rpuc This installs RPUC, the compiler and renderer front-end for RPU. You can now invoke rpuc in your terminal.\nIf you want to update rpuc to the latest version just enter the above terminal command again.\nThe current help output of rpuc is\nCompiles and executes RPU source files. Usage: rpuc [OPTIONS] --source \u003cFILE\u003e Options: -s, --source \u003cFILE\u003e Sets the source file to compile and execute -f, --function \u003cSTRING\u003e The function name to execute. Defaults to 'main' -p, --precision \u003cSTRING\u003e The numerical precision. Defaults to '64' -a, --argument \u003cNUMBER\u003e The argument for the function. Could be an integer or a float -z, --size \u003cSTRING\u003e The size of the image to be rendered. Defaults to '800x600' -t, --tiled \u003cSTRING\u003e The size of the tiles for the shader. Defaults to '80x80' -i, --iterations \u003cSTRING\u003e The number of rendering iterations. Defaults to 1 -w, --write Writes the shader image after each completed tile -h, --help Print help -V, --version Print version Embedding in your Rust app Use the RPU crate to install RPU as a dependency in your Rust project. This allows you to compile and run RPU shaders on demand in your application.\n",
    "description": "",
    "tags": null,
    "title": "Usage",
    "uri": "/usage/index.html"
  },
  {
    "content": "Coming soon\n",
    "description": "",
    "tags": null,
    "title": "Gallery",
    "uri": "/gallery/index.html"
  },
  {
    "content": "RPU strives to be compatible with GLSL and has a few features that make it easier to write procedural graphics. The language is still in development and is subject to change.\nCurrent Limitations Only signed integers are supported at the moment, i.e. no unsigned integer types and their associated bit operations. As RPU has a rand() function which generates high quality random numbers on the Rust side, I do not see unsigned integers as a priority right now.\nFunction parameters do not support in, out or inout right now. Vectors and matrices are passed by value, structs are passed by reference. I will add support for inout parameters in the near future.\nArguments to vector based functions can only be scalars at the moment. For example mix(vec3(0), vec3(1), 0.5) works fine, but mix(vec3(0), vec3(1), vec3(0.5)) does not.\nBasic preprocessor which currency only supports #define.\nNo textures yet, coming soon.\nAdditional Features RPU has a rand() function which generates high quality random numbers in [0.0..1.0].\nNote vec3(rand()) will generate a vector with a unique random number for each component.\nCurrently implemented Basic types: int, ivec2, ivec3, ivec4, float, vec2, vec3, vec4, mat2, mat3, mat4 and custom structs Math operators: +, -, *, / Math functions: dot, cross, mix, smoothstep, length, normalize, sin, cos, sqrt, ceil, floor, fract, abs, tan, atan, degrees, radians, min, max, pow, rand, clamp, sign, mod, step, exp, log Control structures: if, else, ternary (?:), while, for, break, return, const, export Assignment: =, +=, -=, *=, /= Swizzles: vec2.xy, vec3.xyz, vec4.xyzw etc Comments: // and /* */ Implementation notes All vector based operations (length, dot, cross etc) are implemented in pure WebAssembly. Trigonometric functions (which are not natively supported in WA) are implemented in Rust and are called via the wasmer runtime.\nI got a bit lazy at the end and implemented some functions in Rust that could be implemented in WebAssembly (for example sign and clamp). I will move them to WebAssembly in the future.\nVectors and matrices are passed by value, structs are passed by reference. This means that if you pass a struct to a function, the function can modify the original struct. I will make this more robust when working on in / inout / out arguments.\n",
    "description": "",
    "tags": null,
    "title": "Language",
    "uri": "/language/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "A list of people without whom this project would not be possible.\nAcknowledgements ",
    "description": "",
    "tags": null,
    "title": "Credits",
    "uri": "/more/credits/index.html"
  },
  {
    "content": " RPU is a GLSL compatible programming language for rendering procedural graphics on the CPU.\nAs GPU shaders can limit the complexity of what you can render, RPU aims to provide an alternative way of rendering complex, unlimited procedural graphics on the CPU, in 64-bit or 32-bit precision.\nRPU strives to be compatible with GLSL which means that you can easily port your existing shaders to RPU.\nAlternatively you can also use RPU as a general purpose mathematical scripting language, as it is designed to be fast and embeddable in your applications.\nFeatures GLSL compatible 64-bit or 32-bit precision (decide on compile time) Unlimited procedural graphics Easy to port existing shaders Fast and embeddable in your applications Run shaders in your terminal via rpuc (see Usage for more info) RPU compiles to WebAssembly (WAT) and uses wasmer as a runtime. Which means RPU has near native speed, is hot-reloadable and can run on any platform that wasmer supports.\nFor shaders it uses a multi-threaded tiled rendering approach, which splits the image into tiles and renders each tile in parallel.\nCurrent Limitations Only signed integers are supported at the moment, i.e. no unsigned integer types and their associated bit operations. As RPU has a rand() function which generates high quality random numbers on the Rust side, I do not see unsigned integers as a priority right now.\nFunction parameters do not support in, out or inout right now. Vectors and matrices are passed by value, structs are passed by reference. I will add support for inout parameters in the near future.\nNo textures yet, coming soon.\nNo preprocessor yet, coming soon.\nGoals Create a fast and embeddable GLSL compatible language for procedural graphics\nCreate a module system to easily import noise libraries, renderers, cameras etc (TBD)\nMesh generation for 3D SDF maps (TBD)\nGetting Started Use the export keyword to export the function you want to run. For example to run a fibonacci sequence:\nint fib(int n) { if (n \u003c= 1) return n; return fib(n - 2) + fib(n - 1); } export int main(int x) { return fib(x); } You could then run this with rpuc --source fib.rpu -f main -a 42 to get the fibonacci sequence of 42 which takes around a second on my machine.\nShaders have a signature of\nexport vec4 shader(vec2 coord, vec2 resolution) { return vec4(1); // For an all white image } You could run this via rpuc --source myshader.rpu -f shader --write.\nThe resulting image will be saved by rpuc as myshader.png. The --write flag tells rpuc to write the image to disk every time a tile is completed. Giving a live preview of the rendering process.\nRPU assumes that your shader uses stochastic sampling for anti-aliasing. You can pass the --iterations flag to rpuc to specify the number of samples per pixel.\nA simple raymarching example:\n// Based on https://www.shadertoy.com/view/WtGXDD float sdBox(vec3 p, vec3 s) { p = abs(p)-s; return length(max(p, 0.))+min(max(p.x, max(p.y, p.z)), 0.); } float GetDist(vec3 p) { float d = sdBox(p, vec3(.5)); return d; } vec3 GetRayDir(vec2 uv, vec3 p, vec3 l, float z) { vec3 f = normalize(l-p); vec3 r = normalize(cross(vec3(0,1,0), f)); vec3 u = cross(f,r); vec3 c = f*z; vec3 i = c + uv.x*r + uv.y*u; return normalize(i); } vec3 GetNormal(vec3 p) { vec2 e = vec2(0.001, 0.); vec3 n = GetDist(p) - vec3(GetDist(p-e.xyy), GetDist(p-e.yxy), GetDist(p-e.yyx)); return normalize(n); } export vec4 shader(vec2 coord, vec2 resolution) { // Generate the uv with jittering for anti-aliasing vec2 uv = (2.0 * (coord + vec2(rand(), rand())) - resolution.xy) / resolution.y; vec3 ro = vec3(.7, .8, -1.); vec3 rd = GetRayDir(uv, ro, vec3(0), 1.); float t = 0.; float max_t = 2.; vec4 col = vec4(uv.x, uv.y, 0., 1.); while (t \u003c max_t) { vec3 p = ro + rd * t; float d = GetDist(p); if (abs(d) \u003c 0.001) { vec3 n = GetNormal(p); float dif = dot(n, normalize(vec3(1, 2, 3))) * 0.5 + 0.5; col.xyz = pow(vec3(dif), .4545); break; } t += d; } return col; } Which generates For more examples see the examples directory in the repository.\nSponsors None yet, but you can sponsor me on GitHub.\n",
    "description": "",
    "tags": null,
    "title": "RPU: An Overview",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
