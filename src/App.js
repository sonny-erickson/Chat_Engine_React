import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            // Infos sur https://chatengine.io 
            projectID="6d5347b1-c29a-4eb8-9424-3ab195c64fdd"
            userName="sonny"
            userSecret="azerty"
        
        />
    )
}

export default App;