
        // Create chatbot button with Preux styling
        const chatButton = document.createElement("div");
        chatButton.innerHTML = "Preux";
        chatButton.style.position = "fixed";
        chatButton.style.bottom = "30px";
        chatButton.style.right = "30px";
        chatButton.style.width = "70px";
        chatButton.style.height = "70px";
        chatButton.style.borderRadius = "50%";
        chatButton.style.background = "linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)";
        chatButton.style.color = "#fff";
        chatButton.style.display = "flex";
        chatButton.style.alignItems = "center";
        chatButton.style.justifyContent = "center";
        chatButton.style.cursor = "pointer";
        chatButton.style.fontSize = "16px";
        chatButton.style.fontWeight = "bold";
        chatButton.style.boxShadow = "0 5px 20px rgba(67, 97, 238, 0.5)";
        chatButton.style.zIndex = "9999";
        chatButton.style.transition = "all 0.3s ease";
        document.body.appendChild(chatButton);

        // Create chatbot window
        const chatWindow = document.createElement("div");
        chatWindow.style.position = "fixed";
        chatWindow.style.bottom = "110px";
        chatWindow.style.right = "30px";
        chatWindow.style.width = "350px";
        chatWindow.style.height = "450px";
        chatWindow.style.background = "#fff";
        chatWindow.style.borderRadius = "20px";
        chatWindow.style.display = "none";
        chatWindow.style.flexDirection = "column";
        chatWindow.style.overflow = "hidden";
        chatWindow.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
        chatWindow.style.zIndex = "9998";
        chatWindow.style.transition = "all 0.3s ease";

        // Chat header
        const chatHeader = document.createElement("div");
        chatHeader.innerHTML = "Preux Assistant";
        chatHeader.style.background = "linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)";
        chatHeader.style.color = "#fff";
        chatHeader.style.padding = "15px 20px";
        chatHeader.style.fontWeight = "bold";
        chatHeader.style.fontSize = "1.2rem";
        chatHeader.style.display = "flex";
        chatHeader.style.justifyContent = "space-between";
        chatHeader.style.alignItems = "center";
        chatWindow.appendChild(chatHeader);

        // Close button
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.background = "none";
        closeBtn.style.border = "none";
        closeBtn.style.color = "#fff";
        closeBtn.style.fontSize = "1.5rem";
        closeBtn.style.cursor = "pointer";
        chatHeader.appendChild(closeBtn);

        // Chat messages area
        const chatMessages = document.createElement("div");
        chatMessages.style.flex = "1";
        chatMessages.style.padding = "20px";
        chatMessages.style.overflowY = "auto";
        chatMessages.style.fontSize = "14px";
        chatMessages.style.display = "flex";
        chatMessages.style.flexDirection = "column";
        chatMessages.style.gap = "15px";
        chatWindow.appendChild(chatMessages);

        // Chat input area
        const chatInputArea = document.createElement("div");
        chatInputArea.style.display = "flex";
        chatInputArea.style.padding = "15px";
        chatInputArea.style.borderTop = "1px solid #eee";
        chatInputArea.style.gap = "10px";

        const chatInput = document.createElement("input");
        chatInput.type = "text";
        chatInput.placeholder = "Type your message...";
        chatInput.style.flex = "1";
        chatInput.style.padding = "12px 15px";
        chatInput.style.border = "1px solid #ddd";
        chatInput.style.borderRadius = "30px";
        chatInput.style.outline = "none";
        chatInput.style.fontFamily = "'Poppins', sans-serif";
        chatInputArea.appendChild(chatInput);

        const sendBtn = document.createElement("button");
        sendBtn.innerHTML = "➤";
        sendBtn.style.background = "#4361ee";
        sendBtn.style.color = "#fff";
        sendBtn.style.border = "none";
        sendBtn.style.width = "45px";
        sendBtn.style.height = "45px";
        sendBtn.style.borderRadius = "50%";
        sendBtn.style.cursor = "pointer";
        sendBtn.style.transition = "background 0.3s ease";
        chatInputArea.appendChild(sendBtn);

        chatWindow.appendChild(chatInputArea);

        // Add chatbot to body
        document.body.appendChild(chatWindow);

        // Toggle chatbot
        chatButton.addEventListener("click", () => {
            chatWindow.style.display = chatWindow.style.display === "none" ? "flex" : "none";
        });

        closeBtn.addEventListener("click", () => {
            chatWindow.style.display = "none";
        });

        // Function to add message
        function addMessage(message, sender = "bot") {
            const msg = document.createElement("div");
            msg.innerHTML = message;
            msg.style.padding = "12px 15px";
            msg.style.borderRadius = "15px";
            msg.style.maxWidth = "80%";
            msg.style.wordWrap = "break-word";
            msg.style.lineHeight = "1.4";

            if (sender === "user") {
                msg.style.background = "#4361ee";
                msg.style.color = "#fff";
                msg.style.alignSelf = "flex-end";
                msg.style.borderBottomRightRadius = "5px";
            } else {
                msg.style.background = "#f0f4ff";
                msg.style.color = "#000";
                msg.style.alignSelf = "flex-start";
                msg.style.borderBottomLeftRadius = "5px";
            }

            chatMessages.appendChild(msg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Function to handle chatbot response
        function chatbotResponse(input) {
            input = input.toLowerCase();

            // Greeting responses
            if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
                return "Hello there! 👋 How can I assist you today?";
            }
            
            // Services inquiry
            else if (input.includes('service') || input.includes('what do you do')) {
                return "We offer web development, SEO optimization, social media marketing, email marketing, and more! What specifically are you interested in?";
            }
            
            // Web development
            else if (input.includes('web') || input.includes('website') || input.includes('development')) {
                return "Our web development services include custom websites, e-commerce solutions, and web applications. We use the latest technologies to create fast, responsive sites.";
            }
            
            // SEO
            else if (input.includes('seo') || input.includes('search engine')) {
                return "Our SEO services help you rank higher in search results, driving more organic traffic to your website. We do keyword research, on-page optimization, and technical SEO.";
            }
            
            // Social media
            else if (input.includes('social media') || input.includes('facebook') || input.includes('instagram')) {
                return "We create and manage social media campaigns to increase your brand awareness and engagement across platforms like Facebook, Instagram, and Twitter.";
            }
            
            // Email marketing
            else if (input.includes('email') || input.includes('newsletter')) {
                return "Our email marketing services help you build relationships with your audience through targeted campaigns, newsletters, and automation workflows.";
            }
            
            // Pricing inquiry
            else if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
                return "Pricing varies based on project scope and requirements. Could you share more details about what you need so I can provide accurate information?";
            }
            
            // Contact information
            else if (input.includes('contact') || input.includes('email') || input.includes('phone')) {
                return "You can reach us at hello@preux.com or call +1 (555) 123-4567. Our office hours are Monday-Friday, 9am-6pm.";
            }
            
            // Portfolio request
            else if (input.includes('portfolio') || input.includes('work') || input.includes('examples')) {
                return "You can view our portfolio at preux.com/portfolio. We've worked with businesses in various industries on web design, SEO, and digital marketing projects.";
            }
            
            // Thank you response
            else if (input.includes('thank') || input.includes('thanks')) {
                return "You're welcome! 😊 Is there anything else I can help you with?";
            }
            
            // Default response
            else {
                return "I'm not sure I understand. Could you please rephrase your question? You can ask me about our services, pricing, or portfolio.";
            }
        }

        // Send message event
        sendBtn.addEventListener("click", () => {
            const userText = chatInput.value.trim();
            if (userText === "") return;

            addMessage(userText, "user");

            const botReply = chatbotResponse(userText);
            setTimeout(() => addMessage(botReply, "bot"), 500);

            chatInput.value = "";
        });

        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendBtn.click();
        });

        // Add hover effects
        chatButton.addEventListener("mouseenter", () => {
            chatButton.style.transform = "scale(1.1)";
            chatButton.style.boxShadow = "0 8px 25px rgba(67, 97, 238, 0.6)";
        });

        chatButton.addEventListener("mouseleave", () => {
            chatButton.style.transform = "scale(1)";
            chatButton.style.boxShadow = "0 5px 20px rgba(67, 97, 238, 0.5)";
        });

        sendBtn.addEventListener("mouseenter", () => {
            sendBtn.style.background = "#3a0ca3";
        });

        sendBtn.addEventListener("mouseleave", () => {
            sendBtn.style.background = "#4361ee";
        });

        // Add initial bot message
        setTimeout(() => {
            addMessage("Welcome to Preux Digital Agency! I'm here to help you learn about our services. What would you like to know?", "bot");
        }, 1000);
