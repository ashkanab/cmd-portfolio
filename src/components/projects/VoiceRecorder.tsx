import Container from "../elements/Container.tsx";


const VoiceRecorder = () => {
    return (
        <Container>
            <p>
                # VoiceRecorder AI – AI-Powered Voice-to-Text App (Lead Developer)
                <br/>
                <br/>

                Tech Stack: Laravel (Core Backend), Flask (AI Integration), AI APIs (Whisper, GPT models), Prompt Engineering, Nginx, MySQL, RESTful APIs

                <br/>
                <br/>
                -------------
                <br/>
                ## Key Contributions
                <br/>
                <br/>

                ### 1. Dual Framework Architecture
                <br/>
                - Designed and implemented a hybrid backend architecture, combining Laravel for core application logic and Flask as a lightweight AI service layer.
                <br/>
                - Leveraged Laravel to handle user authentication, file management, and API request routing, ensuring scalability and security.
                <br/>
                - Utilized Flask for efficient AI model integration, enabling fast and flexible communication between the app and advanced AI services.

                <br/>
                <br/>

                ### 2. AI-Driven Transcription System with Prompt Engineering
                <br/>
                - Designed a dynamic prompt engineering framework to optimize interactions with GPT-based models, ensuring accurate and context-aware transcriptions.
                <br/>
                - Customized AI prompts to deliver summaries, key points, and action-oriented outputs, catering to diverse user needs such as meeting notes and lecture highlights.
                <br/>
                - Experimented with multi-layered prompts for adaptive outputs, improving overall transcription clarity by 20%.
                <br/>
                - Optimized background job handling for smooth and timely transcription processing, even during high-traffic periods.

                <br/>
                <br/>
                ### 3. Secure Data Privacy Framework
                <br/>
                - Designed a data privacy-first architecture, ensuring all voice recordings were securely processed and permanently deleted after transcription. .
                <br/>
                - Built a secure file upload and processing pipeline, with Laravel managing uploads and Flask handling AI processing.
                <br/>
                - Conducted security audits to align with industry best practices, ensuring compliance with data protection standards.

                <br/>
                <br/>

                ### 4. Scalable API & Prompt Integration
                <br/>
                - Developed a modular API integration layer using the Factory Pattern, enabling seamless interaction with AI services like Whisper and GPT.
                <br/>
                - Applied prompt engineering to efficiently standardize AI outputs, ensuring consistency in transcription and summaries across various use cases.
                <br/>
                <br/>
                ### 5. Performance Optimization
                <br/>
                - Designed scalable architecture capable of handling thousands of voice recordings daily with 99.9% reliability.
                <br/>
                - Leveraged optimized prompts to reduce redundant AI calls, improving performance while maintaining high accuracy.
                <br/>
                - Implemented scalable architecture capable of processing thousands of voice recordings daily with 99.9% reliability.
                <br/>
                <br/>
                -------------
                <br/>
                ## Website
                <br/>
                <br/>
                - <a href="https://airecorder.gcoapps.com" target="_blank">(https://airecorder.gcoapps.com/)</a>
                <br/>
                <br/>
            </p>
        </Container>
    );
}

export default VoiceRecorder;