import moment from "moment";
const DATA = "data_";

var STORE = {
    Config: {
        CLIENT: "https://nicelandvpn.is", // local client

        APITimeout: 20000,
        // API: "https://api.sveinn.is/", // disabling for now to use our test api
        ID: "tunnels-is-portal-id",
        HEADERS: {
            // "X-AUTH-TOKEN": "some-authentication-token",
            "Content-Type": "application/json",
            "Accept": "*/*",
        },

    },
    LoadNewCSSToStore: function (newCSS) {
        STORE.CSS = {
            ...STORE.TEMPLATE_CSS,
            ...newCSS
        }
    },
    GetAndSaveDomain: function () {
        let host = window.location.host
        let domain = "default"

        try {
            var hostSplit = host.split('.')
            domain = hostSplit[hostSplit.length - 1]
        } catch (error) {
            console.log("ERROR PARSING DOMAIN")
            console.dir(error)
        }

        STORE.Cache.Set("domain", domain)
        return domain
    },
    GetAndSaveSubdomain: function () {
        var host = window.location.host
        let subdomain = ""

        try {
            subdomain = host.split('.')[0]
        } catch (error) {
            console.log("ERROR PARSING FIRST SUBDOMAIN")
            console.dir(error)
        }

        Store.Set("subdomain", subdomain)
        return subdomain
    },
    Cache: {
        Clear: function (key) {
            return window.localStorage.clear()
        },
        Get: function (key) {
            return window.localStorage.getItem(key)
        },
        GetBool: function (key) {
            let data = window.localStorage.getItem(key)
            if (data === "true") {
                return true
            }
            return false
        },
        Set: function (key, value) {
            window.localStorage.setItem(key, value)
        },
        Del: function (key) {
            window.localStorage.removeItem(key)
        },
        DelObject: function (key) {
            window.localStorage.removeItem(DATA + key)
            window.localStorage.removeItem(DATA + key + "_ct")
        },
        GetObject: function (key) {
            let jsonData = null
            try {
                jsonData = JSON.parse(window.localStorage.getItem(DATA + key))
                console.log("%cGET OBJECT:", 'background: lightgreen; color: black', key, jsonData)
            }
            catch (e) {
                console.log(e)
                return undefined
            }

            if (jsonData === null) {
                return undefined
            }

            return jsonData
        },
        SetObject: function (key, object) {
            try {
                console.log("%cSET OBJECT:", 'background: lightgreen; color: black', key, object)
                let data = JSON.stringify(object)
                window.localStorage.setItem(DATA + key, data)
                window.localStorage.setItem(DATA + key + "_ct", moment().unix())
            }
            catch (e) {
                console.log(e)
                alert(e)
            }

        },
    },

};


export default STORE;