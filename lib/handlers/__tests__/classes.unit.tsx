import classes, {scopedClassMaker} from '../classes'

describe('classes 测试', () => {
    it('接受0个参数', () => {
        const result = classes()
        expect(result).toEqual('')
    })
    it('接受1个参数', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受多个参数', () => {
        const result = classes('a', 'div')
        expect(result).toEqual('a div')
    })
    it('接受 undefined 不会出现 undefined', () => {
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('接受奇怪参数', () => {
        const result = classes('a', undefined, '你好')
        expect(result).toEqual('a 你好')
    })
})

describe('scopedClassMaker 测试', () => {
    it('', () => {
        const scm = scopedClassMaker('wui-layout')
        expect(scm('')).toEqual('wui-layout')
        expect(scm('header')).toEqual('wui-layout-header')
        expect(scm({'footer': true, 'foot': false})).toEqual('wui-layout-footer')
        expect(scm({'footer': true, 'content': true})).toEqual('wui-layout-footer wui-layout-content')
        expect(scm({'footer': true}, {extra: 'foot'})).toEqual('wui-layout-footer foot')
    })
})