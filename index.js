let Store = () => {
    var cache = {}
    return {
        get: (key) => key in cache ?
            cache[key] :
            'NA',
        set: (key, value) => {
            cache[key] = value;
            render()
        },
        all: cache
    }
},
    $ = (tag, parent = document) => parent.querySelectorAll(tag),
    store = Store(),
    _list = [],
    isArray = a => Array.isArray(a),
    render = (UI_Mappings = null) => {
        (UI_Mappings != null) &&
            UI_Mappings.forEach(pair =>
                _list.push({
                    element_ID: pair[0],
                    components: pair[1]
                })
            );
        _list.forEach(({ element_ID, components }) =>
            $(`#${element_ID}`)[0].innerHTML = isArray(components) ?
                components
                    .map(component => component(store.all))
                    .join("") :
                components(store.all))
    },
    state = (key, value = null) => value == null ?
        store.get(key) :
        store.set(key, value),
    action = (tag, func) => window[tag] = func
export { render, state, action, $ }
