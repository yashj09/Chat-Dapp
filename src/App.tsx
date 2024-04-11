// import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
// import { ethers } from "ethers";
import { ChatUIProvider, ChatView } from "@pushprotocol/uiweb";
// const signer = ethers.Wallet.createRandom();

// const userAlice = await PushAPI.initialize(signer, {
//   env: CONSTANTS.ENV.STAGING,
// })
// const response = await userAlice.info();


const App = () => {
  return (
    <div className=" mx-96 my-16">
      <h2>
        Live chat with pushai.eth, connect your wallet and chat to get sassy
        response from PushAI.eth
      </h2>
      <div style={{ height: "75vh", margin: "20px auto" }}>
        <ChatUIProvider>
          <ChatView
            chatId="0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"
            limit={10}
            isConnected={true}

          />
        </ChatUIProvider>
      </div>
    </div>
  )
}

export default App
