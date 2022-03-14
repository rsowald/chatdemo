import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";

function Channel({ selectedChannel, chatClient }) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        const messageHistory = await chatClient.getMessages({
            channel: selectedChannel
        });

        if (!messageHistory?.messages) return;

        setMessages(messageHistory.messages);
    }
    const publishMessage = async (ev) => {
        ev?.preventDefault();

        const content = message.trim();
        if (!content)
            return;

        await chatClient.publish({
            channel: selectedChannel,
            content
        });
        setMessage("");
    }
    const keyPress = (ev) => {

        if (ev.key === 'Enter' && ev.ctrlKey) {
            publishMessage()
        }
    }

    const onLoad = async () => {
        chatClient.on("message", (message) => {
            setMessages(oldMessages => [...oldMessages, message]);
        });
        getMessages();
        await chatClient.subscribe(selectedChannel);
    }

    const onUnload = async () => {
        chatClient.off("message");
        await chatClient.unsubscribe(selectedChannel);
    }

    useEffect(() => {
        onLoad();
        return onUnload;
    }, [chatClient, selectedChannel]);

    return (
        <Container>
            <div>
                {/* where to put scrollIntoView(false)? */}
                {messages.reverse().map(m => {
                    return <div key={m.id} style={{ 'background': 'lightblue' }}>
                        <p className='text-muted'>At <em>{m.publishedAt.toLocaleString()}</em> {m.member.id} sent:</p>
                        <p>{m.content}</p>
                    </div>
                })}
            </div>
            <Form onSubmit={publishMessage}>
                <Form.Control as="textarea" placeholder="Message to Channel" value={message} onKeyUp={keyPress} onChange={(e) => setMessage(e.target.value)} />
                <Button className="mt-3 mx-3" variant="light" type="submit">
                    Send
                </Button>
                <Form.Text muted>Ctrl+Enter to Send</Form.Text>
            </Form>
        </Container>
    );
};

export default Channel;