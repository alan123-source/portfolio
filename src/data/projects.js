const projects=[

    {
        id:1,
        slug:"e-commerce-platform",
        title:"E-Commerce Platform",
        description:"A full-stack e-commerce platform with authentication, Stripe payments, product management, reviews, admin dashboard, and AI-powered recommendations.",
        technologies:[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Stripe",
            "Docker(basics)"
        ],

        features:[
            "Authenication",
            "Stripe Payments",
            "Admin DashBoard",
            "Product Managment",
            "Reviews & Ratings",
            "Recently viewed Products"
        ],
        githubUrl:"https://github.com/alan123-source/e-commerce-website.git",
        liveUrl:"https://e-commerce-website-brown-five.vercel.app/",
        overview:"Built to understand how modern e-commerce applications work. The project includes authentication, product management, order handling, reviews, and Stripe integration.",

        challenges:[
        "Implementing JWT authentication and protected routes.",
        "Designing database relationships using MongoDB.",
        "Managing order flow and payment integration.",
        "Structuring backend APIs with middleware and clean architecture."
        ],

            learned:
            "This project taught me REST API design, authentication, middleware, database modeling, and how frontend and backend communicate in a real-world application.",
            image:"/images/projects/ecommerce.png",
            imageHeight:"landscape"

    },

    {
        id:2,
        slug:"iot-air-quality-monitoring-system",
        title:"IoT Air Quality Monitoring System",
        description:"An IoT-based air quality monitoring system using NodeMCU and MQ-135 sensors for environmental monitoring and data collection.",
        technologies:[
            "NodeMCU",
            "MQ-135",
            "Arduino IDE",
            "IoT",
            "Embedded C"
        ],

        overview:"An IoT-based air quality monitoring and intelligent ventilation system built using NodeMCU and MQ-135 sensors. The system continuously monitors indoor air quality and automatically activates purification mechanisms when harmful gases exceed safe limits.",
        features:[
    "Continuous Air Quality Monitoring",
    "Indoor and Outdoor Air Comparison",
    "Automatic Ventilation System",
    "Air Purification using Activated Carbon Filter",
    "Real-Time Sensor Data Collection",
    "Threshold-Based Control",
    "Low-Cost Embedded Solution"
        ],
        reportUrl:"/reports/iot-project-report.pdf",
        challenges:[
    "Understanding sensor calibration and accuracy.",
    "Interfacing MQ-135 sensors with NodeMCU.",
    "Managing noise and fluctuations in sensor readings.",
    "Designing automatic control logic for ventilation.",
    "Combining hardware and software components effectively."
],
   learned:
"This project introduced me to embedded systems and IoT development. I learned how sensors communicate with microcontrollers, how real-world data can be collected and processed, and how software and hardware work together to build intelligent systems. It also improved my debugging and problem-solving skills while working with physical devices.",
image:"/images/projects/iot-report-cover.png",
imageHeight:"portrait"

    },

    {
        id:3,
        slug:"sorting-algorithm-visualizer",
        title:"Sorting Algorithm Visualizer",
        description:"Interactive visualization of sorting algorithms with animations and custom array input support.",
        technologies:[
            "JavaScript",
            "HTML",
            "CSS",
            "anime.js"
        ],

        features:[
            "Bubble Sort Visualization",
        "Insertion Sort Visualization",
        "Merge Sort Visualization",
        "Real-Time Sorting Animation",
        "Custom Array Input",
        
        "Step-by-Step Visualization",
        "Color-Coded Element Comparison",
        "Dynamic Bar Representation",
        "Sorting Progress Tracking",
        "Responsive User Interface"
        ],
        githubUrl:"https://github.com/alan123-source/sorting_algo_visualizer.git",
        liveUrl:"https://alan123-source.github.io/sorting_algo_visualizer/",
        overview:"My first project that helped me overcome the fear of building projects and introduced me to project-based learning.",

        challenges:[
        "Creating smooth animations.",
        "Visualizing algorithms step by step.",
        "Representing array operations dynamically."
        ],

        learned:
        "This project strengthened my JavaScript fundamentals and taught me the importance of learning by building.",
        image:"/images/projects/sorting.png",
        imageHeight:"landscape"

    }

];

export default projects;