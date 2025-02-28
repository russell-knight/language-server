# @marko/language-tools

## 2.4.5

### Patch Changes

- [#292](https://github.com/marko-js/language-server/pull/292) [`f46beb1`](https://github.com/marko-js/language-server/commit/f46beb15c36450a8e7f7b61edfc3db6738c6bc32) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade dependencies.

## 2.4.4

### Patch Changes

- [#290](https://github.com/marko-js/language-server/pull/290) [`9c5ad9b`](https://github.com/marko-js/language-server/commit/9c5ad9b9dd7e6944079f98e8e6ec804b00a8dd3d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade deps.

## 2.4.3

### Patch Changes

- [#288](https://github.com/marko-js/language-server/pull/288) [`bfbdd4b`](https://github.com/marko-js/language-server/commit/bfbdd4b18c28ce77ec62f51a6646f6fc42c613c1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade deps

## 2.4.2

### Patch Changes

- [#286](https://github.com/marko-js/language-server/pull/286) [`f585449`](https://github.com/marko-js/language-server/commit/f585449654947fe82fb0a56cc4e8a443589e574c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Revert change to renderBody codegen which caused a regression with the `<await>` tag.

## 2.4.1

### Patch Changes

- [#284](https://github.com/marko-js/language-server/pull/284) [`f2f3c2c`](https://github.com/marko-js/language-server/commit/f2f3c2cb03d07052e78315ad3a0c43fa33a1828e) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix type errors with nested conditional change

## 2.4.0

### Minor Changes

- [#281](https://github.com/marko-js/language-server/pull/281) [`aff5f68`](https://github.com/marko-js/language-server/commit/aff5f68db713660665149e266b6d19ac9d658d84) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Align attribute tag type generation with new types from Marko core.

### Patch Changes

- [#277](https://github.com/marko-js/language-server/pull/277) [`2f0f701`](https://github.com/marko-js/language-server/commit/2f0f70142b6abd6a6f58991babf578dc7c621a99) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Allow type narrowing when attr tags are in for loops

- [#279](https://github.com/marko-js/language-server/pull/279) [`2ad9437`](https://github.com/marko-js/language-server/commit/2ad943706818e3a02229b478544c67a38c54f922) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade deps, fix issues related to recent typescript changes.

- [#279](https://github.com/marko-js/language-server/pull/279) [`aefe17d`](https://github.com/marko-js/language-server/commit/aefe17de52172078bfe611a4b6c065a1530a822e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update local variable tag name interpolation to align with Marko 6 and only support PascalCase identifiers.

- [#280](https://github.com/marko-js/language-server/pull/280) [`abbb30a`](https://github.com/marko-js/language-server/commit/abbb30ae2343aa46e8c9d10040e9082ad4b32cea) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Align tag arguments type generation with Marko 6.

## 2.3.1

### Patch Changes

- [#273](https://github.com/marko-js/language-server/pull/273) [`6f1932f`](https://github.com/marko-js/language-server/commit/6f1932f438dc80efc607c3e258ff2ba9c3f696f7) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Ignore modifiers in html extractor

## 2.3.0

### Minor Changes

- [#264](https://github.com/marko-js/language-server/pull/264) [`44cddf7`](https://github.com/marko-js/language-server/commit/44cddf78022568e74c9f4794278de804c925f93e) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Allow formatting with forced mode

## 2.2.6

### Patch Changes

- [#262](https://github.com/marko-js/language-server/pull/262) [`521a0da`](https://github.com/marko-js/language-server/commit/521a0da14c4dddec61ab324972b6764a60714b9e) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with typescript output when using static attr tags, dynamic attr tags and a renderBody all together.

## 2.2.5

### Patch Changes

- [#258](https://github.com/marko-js/language-server/pull/258) [`b7c4fe8`](https://github.com/marko-js/language-server/commit/b7c4fe8e0cbc4c38788073c36681a4038f3f0afe) Thanks [@LuLaValva](https://github.com/LuLaValva)! - prevent $signal from being declared but never read

## 2.2.4

### Patch Changes

- [#257](https://github.com/marko-js/language-server/pull/257) [`4a90968`](https://github.com/marko-js/language-server/commit/4a90968ae6ab45c4506778666c4fab35797150fe) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add typeings for $signal variable in tags api.

- [#255](https://github.com/marko-js/language-server/pull/255) [`7580d1d`](https://github.com/marko-js/language-server/commit/7580d1d7ffde619ba33f9bfd295c0e67e295d9c3) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update dependencies.

## 2.2.3

### Patch Changes

- [#251](https://github.com/marko-js/language-server/pull/251) [`1a614e7`](https://github.com/marko-js/language-server/commit/1a614e7ed24006010087ad02ce92c88fb5414f43) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update dependencies

- [#251](https://github.com/marko-js/language-server/pull/251) [`36a769c`](https://github.com/marko-js/language-server/commit/36a769cbf8c81caa7a22cce9b22b5688c9a0950a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Only inject component method completions for event handler attributes. Fixes issue with `no-update-if` directive.

## 2.2.2

### Patch Changes

- [#248](https://github.com/marko-js/language-server/pull/248) [`64478f6`](https://github.com/marko-js/language-server/commit/64478f68cbf216a8eb27153bf2f8eab61a61dfc2) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix regex for component filenames

## 2.2.1

### Patch Changes

- [#244](https://github.com/marko-js/language-server/pull/244) [`8132732`](https://github.com/marko-js/language-server/commit/813273297542cf1bcedb7a003fa8848a350ffea3) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix types for imported d.marko files

## 2.2.0

### Minor Changes

- [#241](https://github.com/marko-js/language-server/pull/241) [`842b5ba`](https://github.com/marko-js/language-server/commit/842b5ba18ca9efd559df45b710df77a6201609bc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Automatically add `.js` extensions where necessary in files output by `@marko/type-check` to work better with native es modules.

## 2.1.11

### Patch Changes

- [#237](https://github.com/marko-js/language-server/pull/237) [`a59b23d`](https://github.com/marko-js/language-server/commit/a59b23da89ce721dad3d1529d4894362861f7698) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where mtc was striping `Input` type if it was an empty interface with an extends clause.

- [#237](https://github.com/marko-js/language-server/pull/237) [`b0f43ce`](https://github.com/marko-js/language-server/commit/b0f43ce0a2bda2b80f98ef55d2d3346f12b9f960) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Correctly resolve ts errors related to Symbol.iterator in the template.

## 2.1.10

### Patch Changes

- [#235](https://github.com/marko-js/language-server/pull/235) [`4524d4c`](https://github.com/marko-js/language-server/commit/4524d4cb3ce2882c14913dd8e4847de1c013543c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Surface errors from default export at the top of the Marko file.

## 2.1.9

### Patch Changes

- [#231](https://github.com/marko-js/language-server/pull/231) [`52187ac`](https://github.com/marko-js/language-server/commit/52187acf6c14cd049b6b68c93436830a53a45de6) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix missing package dependency for language-tools package

## 2.1.8

### Patch Changes

- [#229](https://github.com/marko-js/language-server/pull/229) [`6c7e1a9`](https://github.com/marko-js/language-server/commit/6c7e1a97d3177411d7a4145d634da999c50748bd) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add `by` attribute types for `<for>` tag.

## 2.1.7

### Patch Changes

- [#221](https://github.com/marko-js/language-server/pull/221) [`f2646bd`](https://github.com/marko-js/language-server/commit/f2646bd4be9e2fa3f5ab5a05737b9d233d64943a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Improve axe-core linter

- [#224](https://github.com/marko-js/language-server/pull/224) [`a60e2f9`](https://github.com/marko-js/language-server/commit/a60e2f9297f63730235cc84b8f592156141f0801) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade package dependencies

## 2.1.6

### Patch Changes

- [#219](https://github.com/marko-js/language-server/pull/219) [`301bdf4`](https://github.com/marko-js/language-server/commit/301bdf420bf636250b3213ec6bbcd912ad9a338c) Thanks [@LuLaValva](https://github.com/LuLaValva)! - fix in attribute tags within if statements

## 2.1.5

### Patch Changes

- [#212](https://github.com/marko-js/language-server/pull/212) [`5fbd91d`](https://github.com/marko-js/language-server/commit/5fbd91de84d331c945de4dd4dcd931c9769ff788) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When considering if a Marko file should be parsed as typescript, it will now default to typescript for any file containing `tsconfig`. Previously this would exclusively match `tsconfig.json` which would fail with files like `tsconfig.build.json`.

- [#214](https://github.com/marko-js/language-server/pull/214) [`97787c2`](https://github.com/marko-js/language-server/commit/97787c2be4d136e335664b0aa9252916125c6f63) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade dependencies.

## 2.1.4

### Patch Changes

- [#209](https://github.com/marko-js/language-server/pull/209) [`dbcee5a`](https://github.com/marko-js/language-server/commit/dbcee5a387bcb58cad93624ec7f3982b27fc093a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade dependencies.

- [#209](https://github.com/marko-js/language-server/pull/209) [`374392e`](https://github.com/marko-js/language-server/commit/374392e78f82671c065426726ff420e90ddf6148) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where directory names instead of file names were being passed to `createRequire` causing some lookups to be one directory too high and missing resolving installed modules.

## 2.1.3

### Patch Changes

- [#204](https://github.com/marko-js/language-server/pull/204) [`6c97a4a`](https://github.com/marko-js/language-server/commit/6c97a4a68cfb17152b78882949033991778bb1c1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fallback to loading compiler relative to the Marko runtime if not hoisted.

- [#204](https://github.com/marko-js/language-server/pull/204) [`6c97a4a`](https://github.com/marko-js/language-server/commit/6c97a4a68cfb17152b78882949033991778bb1c1) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - When no default compiler registered, avoid swallowing original error when unable to load compiler.

## 2.1.2

### Patch Changes

- [#200](https://github.com/marko-js/language-server/pull/200) [`e05c6f6`](https://github.com/marko-js/language-server/commit/e05c6f622730160e05581552df6e5bf4bb64ce57) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue with default compiler not being found.

## 2.1.1

### Patch Changes

- [#197](https://github.com/marko-js/language-server/pull/197) [`ab2da8c`](https://github.com/marko-js/language-server/commit/ab2da8c274cc35d7a1a538a9b5c96fd40c79b796) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Lazily load the default compiler and translator.

- [#197](https://github.com/marko-js/language-server/pull/197) [`ab2da8c`](https://github.com/marko-js/language-server/commit/ab2da8c274cc35d7a1a538a9b5c96fd40c79b796) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Move @marko/compiler to a peerDependency of @marko/type-check to avoid conflicts.

## 2.1.0

### Minor Changes

- [#189](https://github.com/marko-js/language-server/pull/189) [`e7f82cc`](https://github.com/marko-js/language-server/commit/e7f82ccbb9d91b2327809dad4343cee1ab01d62d) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Add accessibility linting for Marko templates.

## 2.0.11

### Patch Changes

- [#186](https://github.com/marko-js/language-server/pull/186) [`5992e17`](https://github.com/marko-js/language-server/commit/5992e174e64d7106b73a51c878745b84293b3588) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fixes an issue where @marko/type-check was emitting files within node_modules.

## 2.0.10

### Patch Changes

- [#183](https://github.com/marko-js/language-server/pull/183) [`f2c791a`](https://github.com/marko-js/language-server/commit/f2c791af24690ec8d6d7155c6a6d7ed6b6b373e7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix importing a commonjs component file with JSDOC type generation.

## 2.0.9

### Patch Changes

- [#181](https://github.com/marko-js/language-server/pull/181) [`15cf245`](https://github.com/marko-js/language-server/commit/15cf245555148a07a20ccd3f08a855cc41364260) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fixes an issue where Marko files within node_modules without an explicit `marko.json` were not being loaded. Internally this switches to a new api that should not be tripped up by either export maps and / or a missing `marko.json` when trying to resolve Marko files.

## 2.0.8

### Patch Changes

- [#179](https://github.com/marko-js/language-server/pull/179) [`b743baa`](https://github.com/marko-js/language-server/commit/b743baa9047b6b6eace64c808b5f913cf0864133) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - The format command should now propely output export statements which can be parsed by the Marko parser.

- [#179](https://github.com/marko-js/language-server/pull/179) [`b743baa`](https://github.com/marko-js/language-server/commit/b743baa9047b6b6eace64c808b5f913cf0864133) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Downgrade the strip-json-comments module to match the version used by Marko. The latest version does not work in commonjs environments.

## 2.0.7

### Patch Changes

- [#171](https://github.com/marko-js/language-server/pull/171) [`6259092`](https://github.com/marko-js/language-server/commit/625909231a4e00d0cf9c4669ab1b470d905028d2) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where trailing commas in the arguments of some tags would produce invalid typescript.

## 2.0.6

### Patch Changes

- [#167](https://github.com/marko-js/language-server/pull/167) [`bf5f285`](https://github.com/marko-js/language-server/commit/bf5f2859eefdb5e4817c0122ef9324372c5dbc0a) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Strip out attribute modifiers from typescript output.

- [#167](https://github.com/marko-js/language-server/pull/167) [`1be5a8b`](https://github.com/marko-js/language-server/commit/1be5a8b28a7a4171c9a28032107ed323153b8568) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where scriptlets were not able to be mixed with attribute tags.

- [#167](https://github.com/marko-js/language-server/pull/167) [`1be5a8b`](https://github.com/marko-js/language-server/commit/1be5a8b28a7a4171c9a28032107ed323153b8568) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where else/else-if tags with attribute tags were getting incorrect completions.

## 2.0.5

### Patch Changes

- [#164](https://github.com/marko-js/language-server/pull/164) [`50e43f1`](https://github.com/marko-js/language-server/commit/50e43f1387ebbcfb36c8120b7e9e1ce5b7b937ce) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade dependencies.

## 2.0.4

### Patch Changes

- [#162](https://github.com/marko-js/language-server/pull/162) [`67ef015`](https://github.com/marko-js/language-server/commit/67ef0151af21ac9773af36fe7f1ccc20428bf162) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade dependencies.

- [#162](https://github.com/marko-js/language-server/pull/162) [`52bc92f`](https://github.com/marko-js/language-server/commit/52bc92fffdd866f6b826cad4c55bb100b2513a72) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Ensure Marko directives added to all tag input types.

## 2.0.3

### Patch Changes

- [#160](https://github.com/marko-js/language-server/pull/160) [`a0e13d8`](https://github.com/marko-js/language-server/commit/a0e13d884c70fb3b1d6d8e5bf3fa39c35b1123a0) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix issue where some renderer types were not being constrained enough.

## 2.0.2

### Patch Changes

- [#158](https://github.com/marko-js/language-server/pull/158) [`de0df11`](https://github.com/marko-js/language-server/commit/de0df11ac522b41a0942d0791b69bc7d209aca9c) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade dependencies.

## 2.0.1

### Patch Changes

- [#153](https://github.com/marko-js/language-server/pull/153) [`c147a8e`](https://github.com/marko-js/language-server/commit/c147a8eb4c12adde889316c2349df60f26ce4291) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Fix regression that caused ts-plugin to crash and a failure to resolve the internal Marko types.

## 2.0.0

### Major Changes

- [#151](https://github.com/marko-js/language-server/pull/151) [`25e4131`](https://github.com/marko-js/language-server/commit/25e41314e9d93f89c92ae015bbdc8a9381f66610) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Refactor script extractor and expose Processor helpers (shared between CLI and language server)

### Patch Changes

- [#151](https://github.com/marko-js/language-server/pull/151) [`25e4131`](https://github.com/marko-js/language-server/commit/25e41314e9d93f89c92ae015bbdc8a9381f66610) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade internal dependencies

## 1.0.3

### Patch Changes

- [#148](https://github.com/marko-js/language-server/pull/148) [`e823df5`](https://github.com/marko-js/language-server/commit/e823df5d8c54aecc0dac7476848d89920896b628) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - No longer use a default `Input` type of `Component['input']` for inline class components.

## 1.0.2

### Patch Changes

- [#146](https://github.com/marko-js/language-server/pull/146) [`6dcc3b6`](https://github.com/marko-js/language-server/commit/6dcc3b60df36e72e0de1c11611002df7aa0933aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Prefer only importing external components files as a type.

- [#146](https://github.com/marko-js/language-server/pull/146) [`6dcc3b6`](https://github.com/marko-js/language-server/commit/6dcc3b60df36e72e0de1c11611002df7aa0933aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Update attr tag generation to be inline with https://github.com/marko-js/marko/pull/1909.

- [#146](https://github.com/marko-js/language-server/pull/146) [`6dcc3b6`](https://github.com/marko-js/language-server/commit/6dcc3b60df36e72e0de1c11611002df7aa0933aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Remove `resolve-from` as a dependency.

- [#146](https://github.com/marko-js/language-server/pull/146) [`6dcc3b6`](https://github.com/marko-js/language-server/commit/6dcc3b60df36e72e0de1c11611002df7aa0933aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Upgrade internal dependencies.

- [#146](https://github.com/marko-js/language-server/pull/146) [`6dcc3b6`](https://github.com/marko-js/language-server/commit/6dcc3b60df36e72e0de1c11611002df7aa0933aa) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve `Input` default types when working inferred from a class / component file.

## 1.0.1

### Patch Changes

- [#142](https://github.com/marko-js/language-server/pull/142) [`0f14402`](https://github.com/marko-js/language-server/commit/0f14402328f86ab123cdbf098cf850620a0e76b7) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Improve typing of @marko/run projects.

## 1.0.0

### Major Changes

- [#132](https://github.com/marko-js/language-server/pull/132) [`0fbdfa3`](https://github.com/marko-js/language-server/commit/0fbdfa330a3ca7acc84d5f58b939e18b4fe48abc) Thanks [@DylanPiercey](https://github.com/DylanPiercey)! - Adds TypeScript support.
