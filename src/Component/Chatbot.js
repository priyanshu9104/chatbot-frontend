// import React, { useState } from "react";
// import "../Cssfiles/Chatbot.css";

// const Chatbot = () => {
//   const [query, setQuery] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchTweets = async () => {
//     if (!query.trim()) return;

//     setLoading(true);
//     try {
//       const response = await fetch(`https://api.twitterapi.mock/tweets?q=${query}`);
//       const data = await response.json();

//       if (data?.tweets) {
//         setMessages([
//           ...messages,
//           { sender: "user", text: query },
//           { sender: "bot", text: `Here are tweets for: ${query}`, tweets: data.tweets },
//         ]);
//       } else {
//         setMessages([
//           ...messages,
//           { sender: "user", text: query },
//           { sender: "bot", text: "Sorry, I couldn't find any tweets for your query." },
//         ]);
//       }
//     } catch (error) {
//       setMessages([
//         ...messages,
//         { sender: "user", text: query },
//         { sender: "bot", text: "Error fetching tweets. Please try again." },
//       ]);
//     }
//     setQuery("");
//     setLoading(false);
//   };

//   const handleInputChange = (e) => setQuery(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchTweets();
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-window">
//         <div className="messages">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`message ${message.sender === "user" ? "user" : "bot"}`}
//             >
//               {message.text}
//               {message.tweets && (
//                 <div className="tweets">
//                   {message.tweets.map((tweet, idx) => (
//                     <div key={idx} className="tweet">
//                       {tweet}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <form className="input-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={query}
//           onChange={handleInputChange}
//           placeholder="Ask me something..."
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Loading..." : "Send"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;




import React, { useState } from "react";
import "../Cssfiles/Chatbot.css";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const tweetsData = {

How are you: [
    "Hi I am fine.",
    "And how are you?"
  ],
  How are you : [
    "Hi I am fine.",
    "And how are you?"
  ],
  What are you doing: [
    "I am helping you and give the your answer>"
  ],
  Hi: [
    "Hi how are you ?"
  ],
  hi: [
    "Hi how are you ?"
  ],
  hello:[
  "hi this is chatbot"
  ],
  hello :[
  "hi this is chatbot"
  ]
  cricket: [
    "Virat Kohli's century seals the win! Breaking: India wins the ICC tournament! MS Dhoni: The finisher strikes again.",
  ],
   cricket : [
    "Virat Kohli's century seals the win! Breaking: India wins the ICC tournament! MS Dhoni: The finisher strikes again.",
  ],
  Cricket : [
    "Virat Kohli's century seals the win! Breaking: India wins the ICC tournament! MS Dhoni: The finisher strikes again.",
  ],
  cricket : [
    "Virat Kohli's century seals the win! Breaking: India wins the ICC tournament! MS Dhoni: The finisher strikes again.",
  ],
  WorldCup:[
  "Rachin Ravindra from New Zealand scored the most runs in the 2023 World Cup."
  ],
  World Cup:[
  "Rachin Ravindra from New Zealand scored the most runs in the 2023 World Cup."
  ],
  world cup:[
  "Rachin Ravindra from New Zealand scored the most runs in the 2023 World Cup."
  ],
  
  football: [
    "Lionel Messi wins Ballon d'Or! Manchester United secures last-minute victory. Cristiano Ronaldo scores a stunning hat-trick.",
  ],
  Football: [
    "Lionel Messi wins Ballon d'Or! Manchester United secures last-minute victory. Cristiano Ronaldo scores a stunning hat-trick.",
  ],
  Football : [
    "Lionel Messi wins Ballon d'Or! Manchester United secures last-minute victory. Cristiano Ronaldo scores a stunning hat-trick.",
  ],
  FootBall: [
    "Lionel Messi wins Ballon d'Or! Manchester United secures last-minute victory. Cristiano Ronaldo scores a stunning hat-trick.",
  ],
  Technology: [
    "ChatGPT is redefining AI technology. Elon Musk unveils Tesla's latest innovations. Apple announces the launch of the new iPhone 16.",
  ],
   Technology : [
    "ChatGPT is redefining AI technology. Elon Musk unveils Tesla's latest innovations. Apple announces the launch of the new iPhone 16.",
  ],
   technology: [
    "ChatGPT is redefining AI technology. Elon Musk unveils Tesla's latest innovations. Apple announces the launch of the new iPhone 16.",
  ],
   technology : [
    "ChatGPT is redefining AI technology. Elon Musk unveils Tesla's latest innovations. Apple announces the launch of the new iPhone 16.",
  ],
};

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [style, setStyle] = useState('none');

  const handleSend = () => {
    if (input.trim() === "") return;
    const topic = input.toLowerCase();
    const reply =
      tweetsData[topic] || ["Sorry, I don't have tweets for this topic."];
    setResponses([...responses, { user: input, bot: reply }]);
    setInput("");
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    if (showChatbot) {
      setStyle('none');
    }
    else {
      setStyle('block');
    }
  }


  return (
    <div className="chatbot-container">
      <div style={{ display: style }} className="crossbox">
        <button className="cancelicon" onClick={() => { toggleChatbot() }}><MdOutlineCancel /></button>
        </div>
      <div style={{ display: style }} className="chat-window">
        <div className="chatsectionbox">
          <h2>Chatbot</h2>
          <div className="chat-content">
            {responses.map((res, index) => (
              <div className="chatbox" key={index}>
                <div className="user-message">{res.user}</div>
                {res.bot.map((reply, idx) => (
                  <div key={idx} className="bot-message">
                    {reply}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask a topic (e.g., cricket)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
      <div className="chaticonbox">
        <button onClick={() => { toggleChatbot() }} className="chaticon">
           <IoChatbubbleEllipsesOutline  />
        </button>
       
      </div>

    </div>
  );
};

export default Chatbot;
