function scopedClassMaker(prefix: string) {
    return function classMaker(name?: string) {
        return [prefix, name].filter(Boolean).join('-')
    }
}
export {scopedClassMaker};