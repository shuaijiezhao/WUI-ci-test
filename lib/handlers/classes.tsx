function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
    extra: string | undefined
}

interface ClassToggles {
    [key: string]: boolean
}
// 函数式超级重构（缺点：很多垃圾数组，还好有垃圾回收机制）
const scopedClassMaker = (prefix: string) =>
     (name: string | ClassToggles, options?: Options) =>
        Object.entries((name instanceof Object) ? name : {[name]: name})
                    .filter(k => k[1] !== false)
                    .map(key => key[0])
                    .map(name => [prefix, name].filter(Boolean).join('-'))
                    .concat(options && options.extra || [])
                    .join(' ');

export {scopedClassMaker};