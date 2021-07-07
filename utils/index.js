export function pxToRem(str) {
    if (!str) {
        return false
    }
    str = str.replace(/(\d+)px/g, function(s, t) {
        s = s.replace('px', '');
        var value = s/75; // 100px = 1rem
        return value + "rem"; //0.23rem
    })
    return str
}