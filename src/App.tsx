// import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
// import { ethers } from "ethers";
import { ChatUIProvider, ChatView, darkChatTheme } from "@pushprotocol/uiweb";
import { useState } from "react";
// const signer = ethers.Wallet.createRandom();

// const userAlice = await PushAPI.initialize(signer, {
//   env: CONSTANTS.ENV.STAGING,
// })
// const response = await userAlice.info();


const App = () => {
  const [receiver, setReceiver] = useState("");
  return (
    <div className="mx-96 my-4 flex justify-center flex-col">
      <div className="flex justify-center font-semibold text-2xl">
        <h2>
          One on one private messaging
        </h2>
      </div>
      <div className=" mt-2 ">
        <div className="flex justify-center font-semibold text-xl">
          <h1>Receiver's Address</h1>
        </div>
        <div className="flex justify-center ">
          <input
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            className="border w-[60%] rounded-xl shadow-xl p-4 m-4 mt-1"
            placeholder="enter receiver's address"
          />
        </div>
      </div>
      <div className="h-[75vh] m-8 mt-0" >
        <ChatUIProvider theme={darkChatTheme}>
          <ChatView
            chatId={receiver}
            limit={10}
            isConnected={true}

          />
        </ChatUIProvider>

      </div>
    </div>

  )
}

export default App
