let State = () => {
    var s = {}
    return {
        g: (p) => p in s ? s[p] : 'NA',
        s: (p, v) => {
            s[p] = v; render()
        },
        c: s
    }
}, 
$ = (t, p = document) => p.querySelectorAll(t), s = State(),_l=[],isArr=a=>Array.isArray(a),
    render= (l = null) => {
        (l != null) && l.forEach(i => _l.push({ id: i[0], c: i[1] }));
        _l.forEach(({ id, c }) => $(`#${id}`)[0].innerHTML= isArr(c) ? c.map(x => x(s.c)).join("") : c(s.c))
    },
    state= (p, v = null) => v == null ? s.g(p) : s.s(p, v),
    action= (t, a) => window[t] = a
export {render,state,action,$}
