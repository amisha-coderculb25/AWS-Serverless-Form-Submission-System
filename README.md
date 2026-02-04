# AWS-Serverless-Form-Submission-System
The project demonstrates end-to-end understanding of AWS serverless architecture, security, and frontend-backend integration. Developed a serverless form submission web app using AWS S3, API Gateway, Lambda, DynamoDB, and CloudWatch to store and monitor user data.

Cloud-Based Form Submission System (AWS)

Overview
This project is a serverless web application built using AWS services. Users submit data through a web form hosted on Amazon S3, which is processed by AWS Lambda and stored in DynamoDB.

Architecture
- Amazon S3 – Static website hosting
- API Gateway – Exposes backend API
- AWS Lambda – Handles form submission logic
- DynamoDB – Stores user data
- CloudWatch – Logs and monitors Lambda execution

Workflow
1. User fills the form on the S3-hosted website
2. Form data is sent to API Gateway
3. API Gateway triggers Lambda function
4. Lambda stores data in DynamoDB
5. Logs are available in CloudWatch

Technologies Used
- HTML, CSS, JavaScript
- AWS S3
- AWS API Gateway
- AWS Lambda (Python)
- AWS DynamoDB
- AWS CloudWatch

Learning Outcomes
- Understood serverless architecture
- Hands-on experience with AWS IAM, CORS, and API integration
- Implemented real-time data storage using DynamoDB
- Debugged CORS and permission issues in AWS

How to Run
- Upload frontend files to S3
- Configure API Gateway endpoint
- Deploy Lambda function
- Update API endpoint in `script.js`

Author
Amisha Thakur
