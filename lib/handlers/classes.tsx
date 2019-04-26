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
    return function (name: string | ClassToggles, options?: Options) {
        const namesObj = (typeof name === 'string' || name === undefined) ? {[name]: name} : name;
        const scoped = Object.entries(namesObj)
                            .filter(k => k[1] !== false)
                            .map(key => key[0])
                            .map(name => [prefix, name].filter(Boolean).join('-'))
                            .join(' ');
        if (options && options.extra) {
            return [scoped, options && options.extra].filter(Boolean).join(' ');
        } else {
            return scoped;
        }
    }
}

export {scopedClassMaker};