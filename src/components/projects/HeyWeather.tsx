import Container from "../elements/Container.tsx";


const HeyWeather = () => {
    return (
        <Container>
            <p>
                # HeyWeatherApp – Weather Forecasting Platform (Lead Developer)
                <br/>
                <br/>

                Tech Stack: Laravel, MySQL, RESTful APIs (OpenWeatherMap, Foreca, ...), Nginx

                <br/>
                <br/>
                -------------
                <br/>
                ## Key Contributions
                <br/>
                <br/>

                ### 1. Scalable Alerting System
                <br/>
                - Designed and implemented a scalable alerting system using Laravel’s process system, handling
                hundreds of alerts per hour with 99.9% reliability.
                <br/>
                - Utilized Laravel Horizon to manage background jobs, ensuring timely delivery of alerts even during
                peak traffic.
                <br/>
                - Optimized MySQL queries and indexing, reducing alert generation latency by 30%.

                <br/>
                <br/>
                ### 2. Flexible API Integration Layer
                <br/>
                - Architected a flexible API integration layer using the Abstract Factory design pattern,
                enabling seamless integration of multiple weather data sources (e.g., OpenWeatherMap, Foreca).
                <br/>
                - Created Data Transfer Objects (DTOs) to standardize weather data formats across APIs, reducing
                integration time for new providers by 50%.
                <br/>
                - Implemented caching mechanisms to handle API rate limits and improve response times by 20%.
                <br/>
                <br/>
                ### 3. Responsive Landing Page
                <br/>
                - Built a responsive landing page using Tailwind CSS
                <br/>
                <br/>
                ### 4. Team Leadership
                <br/>
                - Mentored 2 junior developers on Laravel best practices, code reviews, and Git workflows, accelerating
                feature delivery by 20%.

                <br/>
                <br/>
                -------------
                <br/>
                ## Impact
                <br/>
                <br/>
                - Achieved a 4.6/5 star rating on the app store, with users praising the app’s reliability and
                timely alerts.
                <br/>
                - Reduced server downtime to lower than 1% via proactive monitoring and Laravel Horizon for queue
                management.
                <br/>
                - Successfully delivered 10,000+ alerts daily during severe weather events, helping users stay
                informed and safe.
                <br/>
                - Reduced integration time for new weather APIs by 50%, enabling faster feature rollouts.

                <br/>
                <br/>
                -------------
                <br/>
                ## Website
                <br/>
                <br/>
                - <a href="https://heyweatherapp.com" target="_blank">(https://heyweatherapp.com)</a>
                <br/>
                <br/>
            </p>
        </Container>
    );
}

export default HeyWeather;