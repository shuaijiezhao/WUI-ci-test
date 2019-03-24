import classes from '../classes'

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