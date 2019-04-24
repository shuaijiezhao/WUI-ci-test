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

function scopedClassMaker(prefix: string) {
    return function (name?: string | ClassToggles, options?: Options) {
        let result;
        if (typeof name === 'string' || name === undefined) {
            result = [prefix, name].filter(Boolean).join('-');
        } else {
            result = Object.entries(name).filter(k => k[1])
                .map(key => key[0])
                .map(n => [prefix, n].filter(Boolean).join('-')).join(' ');
        }
        if (options && options.extra) {
            return [result, options && options.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    }
}

export {scopedClassMaker};