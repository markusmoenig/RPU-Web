+++
title = "Usage"
weight = 2
+++

## From the Terminal

RPU can be easily installed as a [Rust](https://www.rust-lang.org) subcommand.

First, if you do not have already, install _Rust_ and _cargo_ on your system by following the easy steps [here](https://www.rust-lang.org/tools/install).

After that you can install RPU by typing the following command in your terminal:

```shell
cargo install rpuc
```

This installs [RPUC](https://crates.io/crates/rpuc), the compiler and renderer front-end for RPU. You can now invoke _rpuc_ in your terminal.

If you want to update _rpuc_ to the latest version just enter the above terminal command again.

The current help output of _rpuc_ is

```
Compiles and executes RPU source files.

Usage: rpuc [OPTIONS] --source <FILE>

Options:
  -s, --source <FILE>        Sets the source file to compile and execute
  -f, --function <STRING>    The function name to execute. Defaults to 'main'
  -p, --precision <STRING>   The numerical precision. Defaults to '64'
  -a, --argument <NUMBER>    The argument for the function. Could be an integer or a float
  -z, --size <STRING>        The size of the image to be rendered. Defaults to '800x600'
  -t, --tiled <STRING>       The size of the tiles for the shader. Defaults to '80x80'
  -i, --iterations <STRING>  The number of rendering iterations. Defaults to 1
  -w, --write                Writes the shader image after each completed tile
  -h, --help                 Print help
  -V, --version              Print version
```

## Embedding in your Rust app

Use the RPU [crate](https://crates.io/crates/rpu) to install RPU as a dependency in your Rust project. This allows you to compile and run RPU shaders on demand in your application.
