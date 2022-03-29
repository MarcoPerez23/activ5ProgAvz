const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld(

    'comunicacion',
    
    {
        createJoke: (datos) => ipcRenderer.send('createJoke',datos)
    }
    
    )