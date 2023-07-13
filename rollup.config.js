import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
    input: 'VueHierarchy.vue',
    output: [ 
        {
            format: 'cjs',
            file: 'dist/vue-hierarchy.cjs.js'
        },
        {
            format: 'esm',
            file: 'dist/vue-hierarchy.esm.js'
        },
        {
            name: 'JsonExcel',
            format: 'umd',
            file: 'dist/vue-hierarchy.umd.js'
        }
    ],
    plugins: [
        vue(),
        commonjs(),
        resolve(),
        css()
    ]
}
